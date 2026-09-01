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
        "name": "NamedAndAnonymous",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 22
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSNamedTupleMember",
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 26,
              "end": 27
            },
            "elementType": {
              "type": "TSStringKeyword",
              "start": 29,
              "end": 35
            },
            "optional": false,
            "start": 26,
            "end": 35
          },
          {
            "type": "TSNumberKeyword",
            "start": 37,
            "end": 43
          }
        ],
        "start": 25,
        "end": 44
      },
      "declare": false,
      "start": 0,
      "end": 45
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fa1",
        "optional": false,
        "typeAnnotation": null,
        "start": 56,
        "end": 59
      },
      "generator": false,
      "async": false,
      "declare": false,
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
            "start": 63,
            "end": 67
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "NamedAndAnonymous",
                "optional": false,
                "typeAnnotation": null,
                "start": 69,
                "end": 86
              },
              "typeArguments": null,
              "start": 69,
              "end": 86
            },
            "start": 67,
            "end": 86
          },
          "value": null,
          "start": 60,
          "end": 86
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 88,
        "end": 90
      },
      "expression": false,
      "start": 47,
      "end": 90
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fa2",
        "optional": false,
        "typeAnnotation": null,
        "start": 100,
        "end": 103
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
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
                "name": "NamedAndAnonymous",
                "optional": false,
                "typeAnnotation": null,
                "start": 107,
                "end": 124
              },
              "typeArguments": null,
              "start": 107,
              "end": 124
            },
            "start": 105,
            "end": 124
          },
          "start": 104,
          "end": 124
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 129,
            "end": 133
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "NamedAndAnonymous",
                "optional": false,
                "typeAnnotation": null,
                "start": 135,
                "end": 152
              },
              "typeArguments": null,
              "start": 135,
              "end": 152
            },
            "start": 133,
            "end": 152
          },
          "value": null,
          "start": 126,
          "end": 152
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 154,
        "end": 156
      },
      "expression": false,
      "start": 91,
      "end": 156
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NamedAnonymousMixed",
        "optional": false,
        "typeAnnotation": null,
        "start": 163,
        "end": 182
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSNamedTupleMember",
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 186,
              "end": 187
            },
            "elementType": {
              "type": "TSStringKeyword",
              "start": 189,
              "end": 195
            },
            "optional": false,
            "start": 186,
            "end": 195
          },
          {
            "type": "TSNumberKeyword",
            "start": 197,
            "end": 203
          },
          {
            "type": "TSNamedTupleMember",
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 205,
              "end": 206
            },
            "elementType": {
              "type": "TSNumberKeyword",
              "start": 208,
              "end": 214
            },
            "optional": false,
            "start": 205,
            "end": 214
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "NamedAndAnonymous",
              "optional": false,
              "typeAnnotation": null,
              "start": 216,
              "end": 233
            },
            "typeArguments": null,
            "start": 216,
            "end": 233
          }
        ],
        "start": 185,
        "end": 234
      },
      "declare": false,
      "start": 158,
      "end": 235
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fb1",
        "optional": false,
        "typeAnnotation": null,
        "start": 246,
        "end": 249
      },
      "generator": false,
      "async": false,
      "declare": false,
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
            "start": 253,
            "end": 257
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "NamedAnonymousMixed",
                "optional": false,
                "typeAnnotation": null,
                "start": 259,
                "end": 278
              },
              "typeArguments": null,
              "start": 259,
              "end": 278
            },
            "start": 257,
            "end": 278
          },
          "value": null,
          "start": 250,
          "end": 278
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 280,
        "end": 282
      },
      "expression": false,
      "start": 237,
      "end": 282
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fb2",
        "optional": false,
        "typeAnnotation": null,
        "start": 292,
        "end": 295
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
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
                "name": "NamedAnonymousMixed",
                "optional": false,
                "typeAnnotation": null,
                "start": 299,
                "end": 318
              },
              "typeArguments": null,
              "start": 299,
              "end": 318
            },
            "start": 297,
            "end": 318
          },
          "start": 296,
          "end": 318
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 323,
            "end": 327
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "NamedAnonymousMixed",
                "optional": false,
                "typeAnnotation": null,
                "start": 329,
                "end": 348
              },
              "typeArguments": null,
              "start": 329,
              "end": 348
            },
            "start": 327,
            "end": 348
          },
          "value": null,
          "start": 320,
          "end": 348
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 350,
        "end": 352
      },
      "expression": false,
      "start": 283,
      "end": 352
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fb3",
        "optional": false,
        "typeAnnotation": null,
        "start": 362,
        "end": 365
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
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
                "name": "NamedAnonymousMixed",
                "optional": false,
                "typeAnnotation": null,
                "start": 369,
                "end": 388
              },
              "typeArguments": null,
              "start": 369,
              "end": 388
            },
            "start": 367,
            "end": 388
          },
          "start": 366,
          "end": 388
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 393,
            "end": 397
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NamedAnonymousMixed",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 399,
                  "end": 418
                },
                "typeArguments": null,
                "start": 399,
                "end": 418
              },
              "indexType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 419,
                  "end": 420
                },
                "start": 419,
                "end": 420
              },
              "start": 399,
              "end": 421
            },
            "start": 397,
            "end": 421
          },
          "value": null,
          "start": 390,
          "end": 421
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 423,
        "end": 425
      },
      "expression": false,
      "start": 353,
      "end": 425
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ToAnonymousTuple",
        "optional": false,
        "typeAnnotation": null,
        "start": 432,
        "end": 448
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
              "start": 449,
              "end": 450
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 459,
                "end": 466
              },
              "start": 459,
              "end": 468
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 449,
            "end": 468
          }
        ],
        "start": 448,
        "end": 469
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 477,
          "end": 478
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
              "start": 488,
              "end": 489
            },
            "typeArguments": null,
            "start": 488,
            "end": 489
          },
          "start": 482,
          "end": 489
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 493,
                "end": 494
              },
              "typeArguments": null,
              "start": 493,
              "end": 494
            },
            {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 496,
                  "end": 497
                },
                "typeArguments": null,
                "start": 496,
                "end": 497
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 498,
                  "end": 499
                },
                "typeArguments": null,
                "start": 498,
                "end": 499
              },
              "start": 496,
              "end": 500
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
                  "start": 508,
                  "end": 509
                },
                "typeArguments": null,
                "start": 508,
                "end": 509
              },
              "start": 502,
              "end": 509
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 511,
                "end": 512
              },
              "typeArguments": null,
              "start": 511,
              "end": 512
            }
          ],
          "start": 492,
          "end": 513
        },
        "optional": false,
        "readonly": null,
        "start": 472,
        "end": 516
      },
      "declare": false,
      "start": 427,
      "end": 517
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AnonymousToAnonymous",
        "optional": false,
        "typeAnnotation": null,
        "start": 524,
        "end": 544
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ToAnonymousTuple",
          "optional": false,
          "typeAnnotation": null,
          "start": 547,
          "end": 563
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSBooleanKeyword",
                  "start": 565,
                  "end": 572
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 574,
                  "end": 580
                }
              ],
              "start": 564,
              "end": 581
            }
          ],
          "start": 563,
          "end": 582
        },
        "start": 547,
        "end": 582
      },
      "declare": false,
      "start": 519,
      "end": 583
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MixedToAnonymous",
        "optional": false,
        "typeAnnotation": null,
        "start": 589,
        "end": 605
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ToAnonymousTuple",
          "optional": false,
          "typeAnnotation": null,
          "start": 608,
          "end": 624
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSBooleanKeyword",
                  "start": 626,
                  "end": 633
                },
                {
                  "type": "TSNamedTupleMember",
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "second",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 635,
                    "end": 641
                  },
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 643,
                    "end": 649
                  },
                  "optional": false,
                  "start": 635,
                  "end": 649
                }
              ],
              "start": 625,
              "end": 650
            }
          ],
          "start": 624,
          "end": 651
        },
        "start": 608,
        "end": 651
      },
      "declare": false,
      "start": 584,
      "end": 652
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NamedToAnonymous",
        "optional": false,
        "typeAnnotation": null,
        "start": 658,
        "end": 674
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ToAnonymousTuple",
          "optional": false,
          "typeAnnotation": null,
          "start": 677,
          "end": 693
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSNamedTupleMember",
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "first",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 695,
                    "end": 700
                  },
                  "elementType": {
                    "type": "TSBooleanKeyword",
                    "start": 702,
                    "end": 709
                  },
                  "optional": false,
                  "start": 695,
                  "end": 709
                },
                {
                  "type": "TSNamedTupleMember",
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "second",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 711,
                    "end": 717
                  },
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 719,
                    "end": 725
                  },
                  "optional": false,
                  "start": 711,
                  "end": 725
                }
              ],
              "start": 694,
              "end": 726
            }
          ],
          "start": 693,
          "end": 727
        },
        "start": 677,
        "end": 727
      },
      "declare": false,
      "start": 653,
      "end": 728
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ToMixedTuple",
        "optional": false,
        "typeAnnotation": null,
        "start": 735,
        "end": 747
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
              "start": 748,
              "end": 749
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 758,
                "end": 765
              },
              "start": 758,
              "end": 767
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 748,
            "end": 767
          }
        ],
        "start": 747,
        "end": 768
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 776,
          "end": 777
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
              "start": 787,
              "end": 788
            },
            "typeArguments": null,
            "start": 787,
            "end": 788
          },
          "start": 781,
          "end": 788
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 792,
                "end": 793
              },
              "typeArguments": null,
              "start": 792,
              "end": 793
            },
            {
              "type": "TSNamedTupleMember",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "second",
                "optional": false,
                "typeAnnotation": null,
                "start": 795,
                "end": 801
              },
              "elementType": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 803,
                    "end": 804
                  },
                  "typeArguments": null,
                  "start": 803,
                  "end": 804
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 805,
                    "end": 806
                  },
                  "typeArguments": null,
                  "start": 805,
                  "end": 806
                },
                "start": 803,
                "end": 807
              },
              "optional": false,
              "start": 795,
              "end": 807
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
                  "start": 815,
                  "end": 816
                },
                "typeArguments": null,
                "start": 815,
                "end": 816
              },
              "start": 809,
              "end": 816
            },
            {
              "type": "TSNamedTupleMember",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "fourth",
                "optional": false,
                "typeAnnotation": null,
                "start": 818,
                "end": 824
              },
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 826,
                  "end": 827
                },
                "typeArguments": null,
                "start": 826,
                "end": 827
              },
              "optional": false,
              "start": 818,
              "end": 827
            }
          ],
          "start": 791,
          "end": 828
        },
        "optional": false,
        "readonly": null,
        "start": 771,
        "end": 831
      },
      "declare": false,
      "start": 730,
      "end": 832
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AnonymousToMixed",
        "optional": false,
        "typeAnnotation": null,
        "start": 839,
        "end": 855
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ToMixedTuple",
          "optional": false,
          "typeAnnotation": null,
          "start": 858,
          "end": 870
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSBooleanKeyword",
                  "start": 872,
                  "end": 879
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 881,
                  "end": 887
                }
              ],
              "start": 871,
              "end": 888
            }
          ],
          "start": 870,
          "end": 889
        },
        "start": 858,
        "end": 889
      },
      "declare": false,
      "start": 834,
      "end": 890
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MixedToMixed",
        "optional": false,
        "typeAnnotation": null,
        "start": 896,
        "end": 908
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ToMixedTuple",
          "optional": false,
          "typeAnnotation": null,
          "start": 911,
          "end": 923
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSBooleanKeyword",
                  "start": 925,
                  "end": 932
                },
                {
                  "type": "TSNamedTupleMember",
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "second",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 934,
                    "end": 940
                  },
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 942,
                    "end": 948
                  },
                  "optional": false,
                  "start": 934,
                  "end": 948
                }
              ],
              "start": 924,
              "end": 949
            }
          ],
          "start": 923,
          "end": 950
        },
        "start": 911,
        "end": 950
      },
      "declare": false,
      "start": 891,
      "end": 951
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NamedToMixed",
        "optional": false,
        "typeAnnotation": null,
        "start": 957,
        "end": 969
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ToMixedTuple",
          "optional": false,
          "typeAnnotation": null,
          "start": 972,
          "end": 984
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSNamedTupleMember",
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "first",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 986,
                    "end": 991
                  },
                  "elementType": {
                    "type": "TSBooleanKeyword",
                    "start": 993,
                    "end": 1000
                  },
                  "optional": false,
                  "start": 986,
                  "end": 1000
                },
                {
                  "type": "TSNamedTupleMember",
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "second",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1002,
                    "end": 1008
                  },
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 1010,
                    "end": 1016
                  },
                  "optional": false,
                  "start": 1002,
                  "end": 1016
                }
              ],
              "start": 985,
              "end": 1017
            }
          ],
          "start": 984,
          "end": 1018
        },
        "start": 972,
        "end": 1018
      },
      "declare": false,
      "start": 952,
      "end": 1019
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MixedSpread",
        "optional": false,
        "typeAnnotation": null,
        "start": 1026,
        "end": 1037
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSNamedTupleMember",
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "first",
              "optional": false,
              "typeAnnotation": null,
              "start": 1041,
              "end": 1046
            },
            "elementType": {
              "type": "TSBooleanKeyword",
              "start": 1048,
              "end": 1055
            },
            "optional": false,
            "start": 1041,
            "end": 1055
          },
          {
            "type": "TSRestType",
            "typeAnnotation": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSNamedTupleMember",
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "second",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1061,
                    "end": 1067
                  },
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 1069,
                    "end": 1075
                  },
                  "optional": false,
                  "start": 1061,
                  "end": 1075
                }
              ],
              "start": 1060,
              "end": 1076
            },
            "start": 1057,
            "end": 1076
          }
        ],
        "start": 1040,
        "end": 1077
      },
      "declare": false,
      "start": 1021,
      "end": 1078
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ConditionalTuple",
        "optional": false,
        "typeAnnotation": null,
        "start": 1085,
        "end": 1101
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSNamedTupleMember",
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "first",
              "optional": false,
              "typeAnnotation": null,
              "start": 1108,
              "end": 1113
            },
            "elementType": {
              "type": "TSBooleanKeyword",
              "start": 1115,
              "end": 1122
            },
            "optional": false,
            "start": 1108,
            "end": 1122
          },
          {
            "type": "TSRestType",
            "typeAnnotation": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 1130,
                  "end": 1131
                },
                "start": 1130,
                "end": 1131
              },
              "extendsType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 1140,
                  "end": 1141
                },
                "start": 1140,
                "end": 1141
              },
              "trueType": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNamedTupleMember",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "second",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1145,
                      "end": 1151
                    },
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 1153,
                      "end": 1159
                    },
                    "optional": false,
                    "start": 1145,
                    "end": 1159
                  }
                ],
                "start": 1144,
                "end": 1160
              },
              "falseType": {
                "type": "TSTupleType",
                "elementTypes": [],
                "start": 1163,
                "end": 1165
              },
              "start": 1130,
              "end": 1165
            },
            "start": 1126,
            "end": 1166
          }
        ],
        "start": 1104,
        "end": 1168
      },
      "declare": false,
      "start": 1080,
      "end": 1169
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AddMixedConditional",
        "optional": false,
        "typeAnnotation": null,
        "start": 1176,
        "end": 1195
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
              "start": 1196,
              "end": 1197
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1196,
            "end": 1197
          }
        ],
        "start": 1195,
        "end": 1198
      },
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSNamedTupleMember",
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "first",
              "optional": false,
              "typeAnnotation": null,
              "start": 1205,
              "end": 1210
            },
            "elementType": {
              "type": "TSBooleanKeyword",
              "start": 1212,
              "end": 1219
            },
            "optional": false,
            "start": 1205,
            "end": 1219
          },
          {
            "type": "TSNullKeyword",
            "start": 1223,
            "end": 1227
          },
          {
            "type": "TSNamedTupleMember",
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "third",
              "optional": false,
              "typeAnnotation": null,
              "start": 1231,
              "end": 1236
            },
            "elementType": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1238,
                  "end": 1239
                },
                "typeArguments": null,
                "start": 1238,
                "end": 1239
              },
              "extendsType": {
                "type": "TSNumberKeyword",
                "start": 1248,
                "end": 1254
              },
              "trueType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "\"a\"",
                  "start": 1257,
                  "end": 1260
                },
                "start": 1257,
                "end": 1260
              },
              "falseType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "b",
                  "raw": "\"b\"",
                  "start": 1263,
                  "end": 1266
                },
                "start": 1263,
                "end": 1266
              },
              "start": 1238,
              "end": 1266
            },
            "optional": false,
            "start": 1231,
            "end": 1266
          },
          {
            "type": "TSRestType",
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
                  "start": 1274,
                  "end": 1275
                },
                "typeArguments": null,
                "start": 1274,
                "end": 1275
              },
              "extendsType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 1284,
                  "end": 1285
                },
                "start": 1284,
                "end": 1285
              },
              "trueType": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNamedTupleMember",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fourth",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1289,
                      "end": 1295
                    },
                    "elementType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "c",
                        "raw": "\"c\"",
                        "start": 1297,
                        "end": 1300
                      },
                      "start": 1297,
                      "end": 1300
                    },
                    "optional": false,
                    "start": 1289,
                    "end": 1300
                  }
                ],
                "start": 1288,
                "end": 1301
              },
              "falseType": {
                "type": "TSTupleType",
                "elementTypes": [],
                "start": 1304,
                "end": 1306
              },
              "start": 1274,
              "end": 1306
            },
            "start": 1270,
            "end": 1307
          }
        ],
        "start": 1201,
        "end": 1309
      },
      "declare": false,
      "start": 1171,
      "end": 1310
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AddMixedConditionalBoolean",
        "optional": false,
        "typeAnnotation": null,
        "start": 1317,
        "end": 1343
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "AddMixedConditional",
          "optional": false,
          "typeAnnotation": null,
          "start": 1346,
          "end": 1365
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSBooleanKeyword",
              "start": 1366,
              "end": 1373
            }
          ],
          "start": 1365,
          "end": 1374
        },
        "start": 1346,
        "end": 1374
      },
      "declare": false,
      "start": 1312,
      "end": 1375
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AddMixedConditionalLiteral",
        "optional": false,
        "typeAnnotation": null,
        "start": 1381,
        "end": 1407
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "AddMixedConditional",
          "optional": false,
          "typeAnnotation": null,
          "start": 1410,
          "end": 1429
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 1430,
                "end": 1431
              },
              "start": 1430,
              "end": 1431
            }
          ],
          "start": 1429,
          "end": 1432
        },
        "start": 1410,
        "end": 1432
      },
      "declare": false,
      "start": 1376,
      "end": 1433
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AddMixedConditionalNumberPrimitive",
        "optional": false,
        "typeAnnotation": null,
        "start": 1439,
        "end": 1473
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "AddMixedConditional",
          "optional": false,
          "typeAnnotation": null,
          "start": 1476,
          "end": 1495
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 1496,
              "end": 1502
            }
          ],
          "start": 1495,
          "end": 1503
        },
        "start": 1476,
        "end": 1503
      },
      "declare": false,
      "start": 1434,
      "end": 1504
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null,
        "start": 1523,
        "end": 1527
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
              "start": 1528,
              "end": 1529
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 1547,
                  "end": 1554
                },
                "start": 1547,
                "end": 1556
              },
              "start": 1538,
              "end": 1556
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1528,
            "end": 1556
          }
        ],
        "start": 1527,
        "end": 1557
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSRestType",
                  "typeAnnotation": {
                    "type": "TSMappedType",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1584,
                      "end": 1585
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
                    "nameType": null,
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
                            "start": 1609,
                            "end": 1613
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
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
                                  "start": 1615,
                                  "end": 1616
                                },
                                "typeArguments": null,
                                "start": 1615,
                                "end": 1616
                              },
                              "indexType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "K",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1617,
                                  "end": 1618
                                },
                                "typeArguments": null,
                                "start": 1617,
                                "end": 1618
                              },
                              "start": 1615,
                              "end": 1619
                            },
                            "start": 1613,
                            "end": 1619
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 1609,
                          "end": 1620
                        }
                      ],
                      "start": 1599,
                      "end": 1628
                    },
                    "optional": false,
                    "readonly": null,
                    "start": 1575,
                    "end": 1635
                  },
                  "start": 1572,
                  "end": 1635
                }
              ],
              "start": 1566,
              "end": 1639
            },
            "start": 1564,
            "end": 1639
          },
          "start": 1561,
          "end": 1639
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
            "start": 1643,
            "end": 1644
          },
          "typeArguments": null,
          "start": 1643,
          "end": 1644
        },
        "start": 1641,
        "end": 1644
      },
      "body": null,
      "expression": false,
      "start": 1506,
      "end": 1645
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
            "name": "input",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNamedTupleMember",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "first",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1669,
                      "end": 1674
                    },
                    "elementType": {
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
                            "start": 1678,
                            "end": 1682
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1684,
                              "end": 1690
                            },
                            "start": 1682,
                            "end": 1690
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 1678,
                          "end": 1690
                        }
                      ],
                      "start": 1676,
                      "end": 1692
                    },
                    "optional": false,
                    "start": 1669,
                    "end": 1692
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
                          "name": "type",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1696,
                          "end": 1700
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1702,
                            "end": 1708
                          },
                          "start": 1700,
                          "end": 1708
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1696,
                        "end": 1708
                      }
                    ],
                    "start": 1694,
                    "end": 1710
                  }
                ],
                "start": 1668,
                "end": 1711
              },
              "start": 1666,
              "end": 1711
            },
            "start": 1661,
            "end": 1711
          },
          "init": null,
          "definite": false,
          "start": 1661,
          "end": 1711
        }
      ],
      "declare": true,
      "start": 1647,
      "end": 1712
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
            "name": "output",
            "optional": false,
            "typeAnnotation": null,
            "start": 1720,
            "end": 1726
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 1729,
              "end": 1733
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "input",
                "optional": false,
                "typeAnnotation": null,
                "start": 1734,
                "end": 1739
              }
            ],
            "optional": false,
            "start": 1729,
            "end": 1740
          },
          "definite": false,
          "start": 1720,
          "end": 1740
        }
      ],
      "declare": false,
      "start": 1714,
      "end": 1741
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1741
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
    "value": "NamedAndAnonymous",
    "start": 5,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 29,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 37,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 44,
    "end": 45
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 47,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "fa1",
    "start": 56,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 60,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 63,
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
    "value": "NamedAndAnonymous",
    "start": 69,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 89,
    "end": 90
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 91,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "fa2",
    "start": 100,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "NamedAndAnonymous",
    "start": 107,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 126,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 129,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "NamedAndAnonymous",
    "start": 135,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 158,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "NamedAnonymousMixed",
    "start": 163,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 185,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 189,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 195,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 197,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 203,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 206,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 208,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 214,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "NamedAndAnonymous",
    "start": 216,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 234,
    "end": 235
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 237,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "fb1",
    "start": 246,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 250,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 253,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 257,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "NamedAnonymousMixed",
    "start": 259,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 281,
    "end": 282
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 283,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "fb2",
    "start": 292,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 295,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 297,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "NamedAnonymousMixed",
    "start": 299,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 320,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 323,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 327,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "NamedAnonymousMixed",
    "start": 329,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 351,
    "end": 352
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 353,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "fb3",
    "start": 362,
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
    "value": "a",
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
    "type": "Identifier",
    "value": "NamedAnonymousMixed",
    "start": 369,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 390,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 393,
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
    "value": "NamedAnonymousMixed",
    "start": 399,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 418,
    "end": 419
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 421,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 424,
    "end": 425
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 427,
    "end": 431
  },
  {
    "type": "Identifier",
    "value": "ToAnonymousTuple",
    "start": 432,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 448,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 449,
    "end": 450
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 451,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 459,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 466,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 468,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 470,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 476,
    "end": 477
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 477,
    "end": 478
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 479,
    "end": 481
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 482,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 489,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 490,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 492,
    "end": 493
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 493,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 494,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 496,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 497,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 498,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 499,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 500,
    "end": 501
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 502,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 508,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 509,
    "end": 510
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 511,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 513,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 516,
    "end": 517
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 519,
    "end": 523
  },
  {
    "type": "Identifier",
    "value": "AnonymousToAnonymous",
    "start": 524,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 545,
    "end": 546
  },
  {
    "type": "Identifier",
    "value": "ToAnonymousTuple",
    "start": 547,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 563,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 564,
    "end": 565
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 565,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 572,
    "end": 573
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 574,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 580,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 581,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 582,
    "end": 583
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 584,
    "end": 588
  },
  {
    "type": "Identifier",
    "value": "MixedToAnonymous",
    "start": 589,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 606,
    "end": 607
  },
  {
    "type": "Identifier",
    "value": "ToAnonymousTuple",
    "start": 608,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 624,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 625,
    "end": 626
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 626,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 633,
    "end": 634
  },
  {
    "type": "Identifier",
    "value": "second",
    "start": 635,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 641,
    "end": 642
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 643,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 649,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 650,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 651,
    "end": 652
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 653,
    "end": 657
  },
  {
    "type": "Identifier",
    "value": "NamedToAnonymous",
    "start": 658,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 675,
    "end": 676
  },
  {
    "type": "Identifier",
    "value": "ToAnonymousTuple",
    "start": 677,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 693,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 694,
    "end": 695
  },
  {
    "type": "Identifier",
    "value": "first",
    "start": 695,
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
    "value": "boolean",
    "start": 702,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 709,
    "end": 710
  },
  {
    "type": "Identifier",
    "value": "second",
    "start": 711,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 717,
    "end": 718
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 719,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 725,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 726,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 727,
    "end": 728
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 730,
    "end": 734
  },
  {
    "type": "Identifier",
    "value": "ToMixedTuple",
    "start": 735,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 747,
    "end": 748
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 748,
    "end": 749
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 750,
    "end": 757
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 758,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 765,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 766,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 767,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 769,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 771,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 775,
    "end": 776
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 776,
    "end": 777
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 778,
    "end": 780
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 781,
    "end": 786
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 787,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Punctuator",
    "value": "[",
    "start": 791,
    "end": 792
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 792,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 793,
    "end": 794
  },
  {
    "type": "Identifier",
    "value": "second",
    "start": 795,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 801,
    "end": 802
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 803,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 804,
    "end": 805
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 805,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 806,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 807,
    "end": 808
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 809,
    "end": 814
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 815,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 816,
    "end": 817
  },
  {
    "type": "Identifier",
    "value": "fourth",
    "start": 818,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 824,
    "end": 825
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 826,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 827,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 828,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 830,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 831,
    "end": 832
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 834,
    "end": 838
  },
  {
    "type": "Identifier",
    "value": "AnonymousToMixed",
    "start": 839,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 856,
    "end": 857
  },
  {
    "type": "Identifier",
    "value": "ToMixedTuple",
    "start": 858,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 870,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 871,
    "end": 872
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 872,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 879,
    "end": 880
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 881,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 887,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 888,
    "end": 889
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 889,
    "end": 890
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 891,
    "end": 895
  },
  {
    "type": "Identifier",
    "value": "MixedToMixed",
    "start": 896,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 909,
    "end": 910
  },
  {
    "type": "Identifier",
    "value": "ToMixedTuple",
    "start": 911,
    "end": 923
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 923,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 924,
    "end": 925
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 925,
    "end": 932
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 932,
    "end": 933
  },
  {
    "type": "Identifier",
    "value": "second",
    "start": 934,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 940,
    "end": 941
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 942,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 948,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 949,
    "end": 950
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 950,
    "end": 951
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 952,
    "end": 956
  },
  {
    "type": "Identifier",
    "value": "NamedToMixed",
    "start": 957,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 970,
    "end": 971
  },
  {
    "type": "Identifier",
    "value": "ToMixedTuple",
    "start": 972,
    "end": 984
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 984,
    "end": 985
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 985,
    "end": 986
  },
  {
    "type": "Identifier",
    "value": "first",
    "start": 986,
    "end": 991
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 991,
    "end": 992
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 993,
    "end": 1000
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Identifier",
    "value": "second",
    "start": 1002,
    "end": 1008
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1010,
    "end": 1016
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1021,
    "end": 1025
  },
  {
    "type": "Identifier",
    "value": "MixedSpread",
    "start": 1026,
    "end": 1037
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Identifier",
    "value": "first",
    "start": 1041,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1048,
    "end": 1055
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1055,
    "end": 1056
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1057,
    "end": 1060
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Identifier",
    "value": "second",
    "start": 1061,
    "end": 1067
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1069,
    "end": 1075
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1075,
    "end": 1076
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1076,
    "end": 1077
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1080,
    "end": 1084
  },
  {
    "type": "Identifier",
    "value": "ConditionalTuple",
    "start": 1085,
    "end": 1101
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1102,
    "end": 1103
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Identifier",
    "value": "first",
    "start": 1108,
    "end": 1113
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1113,
    "end": 1114
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1115,
    "end": 1122
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1126,
    "end": 1129
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1130,
    "end": 1131
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1132,
    "end": 1139
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1140,
    "end": 1141
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1142,
    "end": 1143
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1144,
    "end": 1145
  },
  {
    "type": "Identifier",
    "value": "second",
    "start": 1145,
    "end": 1151
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1151,
    "end": 1152
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1153,
    "end": 1159
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1159,
    "end": 1160
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1161,
    "end": 1162
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1163,
    "end": 1164
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1164,
    "end": 1165
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1165,
    "end": 1166
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1168,
    "end": 1169
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1171,
    "end": 1175
  },
  {
    "type": "Identifier",
    "value": "AddMixedConditional",
    "start": 1176,
    "end": 1195
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1195,
    "end": 1196
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1196,
    "end": 1197
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1197,
    "end": 1198
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "Identifier",
    "value": "first",
    "start": 1205,
    "end": 1210
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1210,
    "end": 1211
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1212,
    "end": 1219
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1219,
    "end": 1220
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1223,
    "end": 1227
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1227,
    "end": 1228
  },
  {
    "type": "Identifier",
    "value": "third",
    "start": 1231,
    "end": 1236
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1236,
    "end": 1237
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1238,
    "end": 1239
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1240,
    "end": 1247
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1248,
    "end": 1254
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1255,
    "end": 1256
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 1257,
    "end": 1260
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1261,
    "end": 1262
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 1263,
    "end": 1266
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1270,
    "end": 1273
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1273,
    "end": 1274
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1274,
    "end": 1275
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1276,
    "end": 1283
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1284,
    "end": 1285
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1286,
    "end": 1287
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1288,
    "end": 1289
  },
  {
    "type": "Identifier",
    "value": "fourth",
    "start": 1289,
    "end": 1295
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1295,
    "end": 1296
  },
  {
    "type": "String",
    "value": "\"c\"",
    "start": 1297,
    "end": 1300
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1300,
    "end": 1301
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1302,
    "end": 1303
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1304,
    "end": 1305
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1305,
    "end": 1306
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1306,
    "end": 1307
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1308,
    "end": 1309
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1309,
    "end": 1310
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1312,
    "end": 1316
  },
  {
    "type": "Identifier",
    "value": "AddMixedConditionalBoolean",
    "start": 1317,
    "end": 1343
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1344,
    "end": 1345
  },
  {
    "type": "Identifier",
    "value": "AddMixedConditional",
    "start": 1346,
    "end": 1365
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1365,
    "end": 1366
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1366,
    "end": 1373
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1373,
    "end": 1374
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1374,
    "end": 1375
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1376,
    "end": 1380
  },
  {
    "type": "Identifier",
    "value": "AddMixedConditionalLiteral",
    "start": 1381,
    "end": 1407
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1408,
    "end": 1409
  },
  {
    "type": "Identifier",
    "value": "AddMixedConditional",
    "start": 1410,
    "end": 1429
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1429,
    "end": 1430
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1430,
    "end": 1431
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1431,
    "end": 1432
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1432,
    "end": 1433
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1434,
    "end": 1438
  },
  {
    "type": "Identifier",
    "value": "AddMixedConditionalNumberPrimitive",
    "start": 1439,
    "end": 1473
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1474,
    "end": 1475
  },
  {
    "type": "Identifier",
    "value": "AddMixedConditional",
    "start": 1476,
    "end": 1495
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1495,
    "end": 1496
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1496,
    "end": 1502
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1502,
    "end": 1503
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1503,
    "end": 1504
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1506,
    "end": 1513
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1514,
    "end": 1522
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 1523,
    "end": 1527
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1527,
    "end": 1528
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1528,
    "end": 1529
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1530,
    "end": 1537
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1538,
    "end": 1546
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 1547,
    "end": 1554
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1554,
    "end": 1555
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1555,
    "end": 1556
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1556,
    "end": 1557
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1557,
    "end": 1558
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 1561,
    "end": 1564
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1564,
    "end": 1565
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1566,
    "end": 1567
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1572,
    "end": 1575
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1575,
    "end": 1576
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1583,
    "end": 1584
  },
  {
    "type": "Identifier",
    "value": "K",
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
    "value": "]",
    "start": 1596,
    "end": 1597
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1597,
    "end": 1598
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1599,
    "end": 1600
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1609,
    "end": 1613
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1613,
    "end": 1614
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1615,
    "end": 1616
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1616,
    "end": 1617
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1617,
    "end": 1618
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1618,
    "end": 1619
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1619,
    "end": 1620
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1627,
    "end": 1628
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1628,
    "end": 1629
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1634,
    "end": 1635
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1638,
    "end": 1639
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1640,
    "end": 1641
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1641,
    "end": 1642
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1643,
    "end": 1644
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1644,
    "end": 1645
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1647,
    "end": 1654
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1655,
    "end": 1660
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 1661,
    "end": 1666
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1666,
    "end": 1667
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1668,
    "end": 1669
  },
  {
    "type": "Identifier",
    "value": "first",
    "start": 1669,
    "end": 1674
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1674,
    "end": 1675
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1676,
    "end": 1677
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1678,
    "end": 1682
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1682,
    "end": 1683
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1684,
    "end": 1690
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1691,
    "end": 1692
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1692,
    "end": 1693
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1694,
    "end": 1695
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1696,
    "end": 1700
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1700,
    "end": 1701
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1702,
    "end": 1708
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1709,
    "end": 1710
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1710,
    "end": 1711
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1711,
    "end": 1712
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1714,
    "end": 1719
  },
  {
    "type": "Identifier",
    "value": "output",
    "start": 1720,
    "end": 1726
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1727,
    "end": 1728
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 1729,
    "end": 1733
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1733,
    "end": 1734
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 1734,
    "end": 1739
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1739,
    "end": 1740
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1740,
    "end": 1741
  }
]
```
