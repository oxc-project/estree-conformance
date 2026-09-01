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
        "name": "SubTup2FixedLength",
        "optional": false,
        "typeAnnotation": null,
        "start": 22,
        "end": 40
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
              "start": 41,
              "end": 42
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 51,
                "end": 58
              },
              "start": 51,
              "end": 60
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 41,
            "end": 60
          }
        ],
        "start": 40,
        "end": 61
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
            "start": 64,
            "end": 65
          },
          "typeArguments": null,
          "start": 64,
          "end": 65
        },
        "extendsType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 87,
                    "end": 88
                  },
                  "constraint": {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 98,
                        "end": 101
                      },
                      {
                        "type": "TSAnyKeyword",
                        "start": 103,
                        "end": 106
                      }
                    ],
                    "start": 97,
                    "end": 107
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 87,
                  "end": 107
                },
                "start": 81,
                "end": 107
              },
              "start": 78,
              "end": 107
            },
            {
              "type": "TSAnyKeyword",
              "start": 111,
              "end": 114
            }
          ],
          "start": 74,
          "end": 116
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null,
            "start": 121,
            "end": 122
          },
          "typeArguments": null,
          "start": 121,
          "end": 122
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 127,
          "end": 132
        },
        "start": 64,
        "end": 132
      },
      "declare": false,
      "start": 17,
      "end": 133
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SubTup2FixedLengthTest",
        "optional": false,
        "typeAnnotation": null,
        "start": 140,
        "end": 162
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "SubTup2FixedLength",
          "optional": false,
          "typeAnnotation": null,
          "start": 165,
          "end": 183
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 185,
                    "end": 186
                  },
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 188,
                      "end": 189
                    },
                    "start": 188,
                    "end": 189
                  },
                  "optional": false,
                  "start": 185,
                  "end": 189
                },
                {
                  "type": "TSNamedTupleMember",
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 191,
                    "end": 192
                  },
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 194,
                      "end": 195
                    },
                    "start": 194,
                    "end": 195
                  },
                  "optional": false,
                  "start": 191,
                  "end": 195
                },
                {
                  "type": "TSNamedTupleMember",
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 197,
                    "end": 198
                  },
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 200,
                      "end": 201
                    },
                    "start": 200,
                    "end": 201
                  },
                  "optional": false,
                  "start": 197,
                  "end": 201
                }
              ],
              "start": 184,
              "end": 202
            }
          ],
          "start": 183,
          "end": 203
        },
        "start": 165,
        "end": 203
      },
      "declare": false,
      "start": 135,
      "end": 204
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SubTup2Variadic",
        "optional": false,
        "typeAnnotation": null,
        "start": 211,
        "end": 226
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
              "start": 227,
              "end": 228
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 237,
                "end": 244
              },
              "start": 237,
              "end": 246
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 227,
            "end": 246
          }
        ],
        "start": 226,
        "end": 247
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
            "start": 250,
            "end": 251
          },
          "typeArguments": null,
          "start": 250,
          "end": 251
        },
        "extendsType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 273,
                    "end": 274
                  },
                  "constraint": {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 284,
                        "end": 287
                      },
                      {
                        "type": "TSAnyKeyword",
                        "start": 289,
                        "end": 292
                      }
                    ],
                    "start": 283,
                    "end": 293
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 273,
                  "end": 293
                },
                "start": 267,
                "end": 293
              },
              "start": 264,
              "end": 293
            },
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 300,
                "end": 303
              },
              "start": 297,
              "end": 303
            }
          ],
          "start": 260,
          "end": 305
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null,
            "start": 310,
            "end": 311
          },
          "typeArguments": null,
          "start": 310,
          "end": 311
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 316,
          "end": 321
        },
        "start": 250,
        "end": 321
      },
      "declare": false,
      "start": 206,
      "end": 322
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SubTup2VariadicTest",
        "optional": false,
        "typeAnnotation": null,
        "start": 329,
        "end": 348
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "SubTup2Variadic",
          "optional": false,
          "typeAnnotation": null,
          "start": 351,
          "end": 366
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 368,
                    "end": 369
                  },
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 371,
                      "end": 372
                    },
                    "start": 371,
                    "end": 372
                  },
                  "optional": false,
                  "start": 368,
                  "end": 372
                },
                {
                  "type": "TSNamedTupleMember",
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 374,
                    "end": 375
                  },
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 377,
                      "end": 378
                    },
                    "start": 377,
                    "end": 378
                  },
                  "optional": false,
                  "start": 374,
                  "end": 378
                },
                {
                  "type": "TSRestType",
                  "typeAnnotation": {
                    "type": "TSNamedTupleMember",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 383,
                      "end": 384
                    },
                    "elementType": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 386,
                          "end": 387
                        },
                        "start": 386,
                        "end": 387
                      },
                      "start": 386,
                      "end": 389
                    },
                    "optional": false,
                    "start": 383,
                    "end": 389
                  },
                  "start": 380,
                  "end": 389
                }
              ],
              "start": 367,
              "end": 390
            }
          ],
          "start": 366,
          "end": 391
        },
        "start": 351,
        "end": 391
      },
      "declare": false,
      "start": 324,
      "end": 392
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SubTup2VariadicTest2",
        "optional": false,
        "typeAnnotation": null,
        "start": 398,
        "end": 418
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "SubTup2Variadic",
          "optional": false,
          "typeAnnotation": null,
          "start": 421,
          "end": 436
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 438,
                    "end": 439
                  },
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 441,
                      "end": 442
                    },
                    "start": 441,
                    "end": 442
                  },
                  "optional": false,
                  "start": 438,
                  "end": 442
                },
                {
                  "type": "TSNamedTupleMember",
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 444,
                    "end": 445
                  },
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 447,
                      "end": 448
                    },
                    "start": 447,
                    "end": 448
                  },
                  "optional": false,
                  "start": 444,
                  "end": 448
                },
                {
                  "type": "TSNamedTupleMember",
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 450,
                    "end": 451
                  },
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 453,
                      "end": 454
                    },
                    "start": 453,
                    "end": 454
                  },
                  "optional": false,
                  "start": 450,
                  "end": 454
                },
                {
                  "type": "TSRestType",
                  "typeAnnotation": {
                    "type": "TSNamedTupleMember",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 459,
                      "end": 460
                    },
                    "elementType": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 3,
                          "raw": "3",
                          "start": 462,
                          "end": 463
                        },
                        "start": 462,
                        "end": 463
                      },
                      "start": 462,
                      "end": 465
                    },
                    "optional": false,
                    "start": 459,
                    "end": 465
                  },
                  "start": 456,
                  "end": 465
                }
              ],
              "start": 437,
              "end": 466
            }
          ],
          "start": 436,
          "end": 467
        },
        "start": 421,
        "end": 467
      },
      "declare": false,
      "start": 393,
      "end": 468
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SubTup2VariadicAndRest",
        "optional": false,
        "typeAnnotation": null,
        "start": 475,
        "end": 497
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
              "start": 498,
              "end": 499
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 508,
                "end": 515
              },
              "start": 508,
              "end": 517
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 498,
            "end": 517
          }
        ],
        "start": 497,
        "end": 518
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
            "start": 521,
            "end": 522
          },
          "typeArguments": null,
          "start": 521,
          "end": 522
        },
        "extendsType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 546,
                    "end": 547
                  },
                  "constraint": {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 557,
                        "end": 560
                      },
                      {
                        "type": "TSAnyKeyword",
                        "start": 562,
                        "end": 565
                      }
                    ],
                    "start": 556,
                    "end": 566
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 546,
                  "end": 566
                },
                "start": 540,
                "end": 566
              },
              "start": 537,
              "end": 566
            },
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 582,
                      "end": 583
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 582,
                    "end": 583
                  },
                  "start": 576,
                  "end": 583
                },
                "start": 575,
                "end": 586
              },
              "start": 572,
              "end": 586
            }
          ],
          "start": 531,
          "end": 588
        },
        "trueType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 599,
                  "end": 600
                },
                "typeArguments": null,
                "start": 599,
                "end": 600
              },
              "start": 596,
              "end": 600
            },
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 606,
                      "end": 607
                    },
                    "typeArguments": null,
                    "start": 606,
                    "end": 607
                  }
                ],
                "start": 605,
                "end": 608
              },
              "start": 602,
              "end": 608
            }
          ],
          "start": 595,
          "end": 609
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 616,
          "end": 621
        },
        "start": 521,
        "end": 621
      },
      "declare": false,
      "start": 470,
      "end": 622
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SubTup2VariadicAndRestTest",
        "optional": false,
        "typeAnnotation": null,
        "start": 629,
        "end": 655
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "SubTup2VariadicAndRest",
          "optional": false,
          "typeAnnotation": null,
          "start": 658,
          "end": 680
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 682,
                    "end": 683
                  },
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 685,
                      "end": 686
                    },
                    "start": 685,
                    "end": 686
                  },
                  "optional": false,
                  "start": 682,
                  "end": 686
                },
                {
                  "type": "TSNamedTupleMember",
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 688,
                    "end": 689
                  },
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 691,
                      "end": 692
                    },
                    "start": 691,
                    "end": 692
                  },
                  "optional": false,
                  "start": 688,
                  "end": 692
                },
                {
                  "type": "TSRestType",
                  "typeAnnotation": {
                    "type": "TSNamedTupleMember",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 697,
                      "end": 698
                    },
                    "elementType": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 700,
                          "end": 701
                        },
                        "start": 700,
                        "end": 701
                      },
                      "start": 700,
                      "end": 703
                    },
                    "optional": false,
                    "start": 697,
                    "end": 703
                  },
                  "start": 694,
                  "end": 703
                }
              ],
              "start": 681,
              "end": 704
            }
          ],
          "start": 680,
          "end": 705
        },
        "start": 658,
        "end": 705
      },
      "declare": false,
      "start": 624,
      "end": 706
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SubTup2TrailingVariadic",
        "optional": false,
        "typeAnnotation": null,
        "start": 713,
        "end": 736
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
              "start": 737,
              "end": 738
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 747,
                "end": 754
              },
              "start": 747,
              "end": 756
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 737,
            "end": 756
          }
        ],
        "start": 736,
        "end": 757
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
            "start": 760,
            "end": 761
          },
          "typeArguments": null,
          "start": 760,
          "end": 761
        },
        "extendsType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 777,
                "end": 780
              },
              "start": 774,
              "end": 780
            },
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 793,
                    "end": 794
                  },
                  "constraint": {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 804,
                        "end": 807
                      },
                      {
                        "type": "TSAnyKeyword",
                        "start": 809,
                        "end": 812
                      }
                    ],
                    "start": 803,
                    "end": 813
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 793,
                  "end": 813
                },
                "start": 787,
                "end": 813
              },
              "start": 784,
              "end": 813
            }
          ],
          "start": 770,
          "end": 816
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null,
            "start": 821,
            "end": 822
          },
          "typeArguments": null,
          "start": 821,
          "end": 822
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 827,
          "end": 832
        },
        "start": 760,
        "end": 832
      },
      "declare": false,
      "start": 708,
      "end": 833
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SubTup2TrailingVariadicTest",
        "optional": false,
        "typeAnnotation": null,
        "start": 840,
        "end": 867
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "SubTup2TrailingVariadic",
          "optional": false,
          "typeAnnotation": null,
          "start": 870,
          "end": 893
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSRestType",
                  "typeAnnotation": {
                    "type": "TSNamedTupleMember",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 898,
                      "end": 899
                    },
                    "elementType": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 901,
                          "end": 902
                        },
                        "start": 901,
                        "end": 902
                      },
                      "start": 901,
                      "end": 904
                    },
                    "optional": false,
                    "start": 898,
                    "end": 904
                  },
                  "start": 895,
                  "end": 904
                },
                {
                  "type": "TSNamedTupleMember",
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 906,
                    "end": 907
                  },
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 909,
                      "end": 910
                    },
                    "start": 909,
                    "end": 910
                  },
                  "optional": false,
                  "start": 906,
                  "end": 910
                },
                {
                  "type": "TSNamedTupleMember",
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 912,
                    "end": 913
                  },
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 915,
                      "end": 916
                    },
                    "start": 915,
                    "end": 916
                  },
                  "optional": false,
                  "start": 912,
                  "end": 916
                }
              ],
              "start": 894,
              "end": 917
            }
          ],
          "start": 893,
          "end": 918
        },
        "start": 870,
        "end": 918
      },
      "declare": false,
      "start": 835,
      "end": 919
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SubTup2TrailingVariadicTest2",
        "optional": false,
        "typeAnnotation": null,
        "start": 925,
        "end": 953
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "SubTup2TrailingVariadic",
          "optional": false,
          "typeAnnotation": null,
          "start": 956,
          "end": 979
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSRestType",
                  "typeAnnotation": {
                    "type": "TSNamedTupleMember",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 984,
                      "end": 985
                    },
                    "elementType": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 987,
                          "end": 988
                        },
                        "start": 987,
                        "end": 988
                      },
                      "start": 987,
                      "end": 990
                    },
                    "optional": false,
                    "start": 984,
                    "end": 990
                  },
                  "start": 981,
                  "end": 990
                },
                {
                  "type": "TSNamedTupleMember",
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 992,
                    "end": 993
                  },
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 995,
                      "end": 996
                    },
                    "start": 995,
                    "end": 996
                  },
                  "optional": false,
                  "start": 992,
                  "end": 996
                },
                {
                  "type": "TSNamedTupleMember",
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 998,
                    "end": 999
                  },
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 1001,
                      "end": 1002
                    },
                    "start": 1001,
                    "end": 1002
                  },
                  "optional": false,
                  "start": 998,
                  "end": 1002
                },
                {
                  "type": "TSNamedTupleMember",
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1004,
                    "end": 1005
                  },
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 1007,
                      "end": 1008
                    },
                    "start": 1007,
                    "end": 1008
                  },
                  "optional": false,
                  "start": 1004,
                  "end": 1008
                }
              ],
              "start": 980,
              "end": 1009
            }
          ],
          "start": 979,
          "end": 1010
        },
        "start": 956,
        "end": 1010
      },
      "declare": false,
      "start": 920,
      "end": 1011
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SubTup2RestAndTrailingVariadic2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1018,
        "end": 1049
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
              "start": 1050,
              "end": 1051
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 1060,
                "end": 1067
              },
              "start": 1060,
              "end": 1069
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1050,
            "end": 1069
          }
        ],
        "start": 1049,
        "end": 1070
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
            "start": 1073,
            "end": 1074
          },
          "typeArguments": null,
          "start": 1073,
          "end": 1074
        },
        "extendsType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1099,
                      "end": 1100
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1099,
                    "end": 1100
                  },
                  "start": 1093,
                  "end": 1100
                },
                "start": 1092,
                "end": 1103
              },
              "start": 1089,
              "end": 1103
            },
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1118,
                    "end": 1119
                  },
                  "constraint": {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 1129,
                        "end": 1132
                      },
                      {
                        "type": "TSAnyKeyword",
                        "start": 1134,
                        "end": 1137
                      }
                    ],
                    "start": 1128,
                    "end": 1138
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1118,
                  "end": 1138
                },
                "start": 1112,
                "end": 1138
              },
              "start": 1109,
              "end": 1138
            }
          ],
          "start": 1083,
          "end": 1141
        },
        "trueType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 1149,
                "end": 1150
              },
              "typeArguments": null,
              "start": 1149,
              "end": 1150
            },
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1155,
                  "end": 1156
                },
                "typeArguments": null,
                "start": 1155,
                "end": 1156
              },
              "start": 1152,
              "end": 1156
            }
          ],
          "start": 1148,
          "end": 1157
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 1164,
          "end": 1169
        },
        "start": 1073,
        "end": 1169
      },
      "declare": false,
      "start": 1013,
      "end": 1170
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SubTup2RestAndTrailingVariadic2Test",
        "optional": false,
        "typeAnnotation": null,
        "start": 1177,
        "end": 1212
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "SubTup2RestAndTrailingVariadic2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1215,
          "end": 1246
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSRestType",
                  "typeAnnotation": {
                    "type": "TSNamedTupleMember",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1251,
                      "end": 1252
                    },
                    "elementType": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 1254,
                          "end": 1255
                        },
                        "start": 1254,
                        "end": 1255
                      },
                      "start": 1254,
                      "end": 1257
                    },
                    "optional": false,
                    "start": 1251,
                    "end": 1257
                  },
                  "start": 1248,
                  "end": 1257
                },
                {
                  "type": "TSNamedTupleMember",
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1259,
                    "end": 1260
                  },
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1262,
                      "end": 1263
                    },
                    "start": 1262,
                    "end": 1263
                  },
                  "optional": false,
                  "start": 1259,
                  "end": 1263
                },
                {
                  "type": "TSNamedTupleMember",
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1265,
                    "end": 1266
                  },
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 1268,
                      "end": 1269
                    },
                    "start": 1268,
                    "end": 1269
                  },
                  "optional": false,
                  "start": 1265,
                  "end": 1269
                }
              ],
              "start": 1247,
              "end": 1270
            }
          ],
          "start": 1246,
          "end": 1271
        },
        "start": 1215,
        "end": 1271
      },
      "declare": false,
      "start": 1172,
      "end": 1272
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SubTup2VariadicWithLeadingFixedElements",
        "optional": false,
        "typeAnnotation": null,
        "start": 1279,
        "end": 1318
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
              "start": 1319,
              "end": 1320
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 1329,
                "end": 1336
              },
              "start": 1329,
              "end": 1338
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1319,
            "end": 1338
          }
        ],
        "start": 1318,
        "end": 1339
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
            "start": 1342,
            "end": 1343
          },
          "typeArguments": null,
          "start": 1342,
          "end": 1343
        },
        "extendsType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSAnyKeyword",
              "start": 1356,
              "end": 1359
            },
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1372,
                    "end": 1373
                  },
                  "constraint": {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 1383,
                        "end": 1386
                      },
                      {
                        "type": "TSAnyKeyword",
                        "start": 1388,
                        "end": 1391
                      }
                    ],
                    "start": 1382,
                    "end": 1392
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1372,
                  "end": 1392
                },
                "start": 1366,
                "end": 1392
              },
              "start": 1363,
              "end": 1392
            },
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1399,
                "end": 1402
              },
              "start": 1396,
              "end": 1402
            }
          ],
          "start": 1352,
          "end": 1404
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null,
            "start": 1409,
            "end": 1410
          },
          "typeArguments": null,
          "start": 1409,
          "end": 1410
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 1415,
          "end": 1420
        },
        "start": 1342,
        "end": 1420
      },
      "declare": false,
      "start": 1274,
      "end": 1421
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SubTup2VariadicWithLeadingFixedElementsTest",
        "optional": false,
        "typeAnnotation": null,
        "start": 1428,
        "end": 1471
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "SubTup2VariadicWithLeadingFixedElements",
          "optional": false,
          "typeAnnotation": null,
          "start": 1474,
          "end": 1513
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1515,
                    "end": 1516
                  },
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 1518,
                      "end": 1519
                    },
                    "start": 1518,
                    "end": 1519
                  },
                  "optional": false,
                  "start": 1515,
                  "end": 1519
                },
                {
                  "type": "TSNamedTupleMember",
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1521,
                    "end": 1522
                  },
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1524,
                      "end": 1525
                    },
                    "start": 1524,
                    "end": 1525
                  },
                  "optional": false,
                  "start": 1521,
                  "end": 1525
                },
                {
                  "type": "TSNamedTupleMember",
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1527,
                    "end": 1528
                  },
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 1530,
                      "end": 1531
                    },
                    "start": 1530,
                    "end": 1531
                  },
                  "optional": false,
                  "start": 1527,
                  "end": 1531
                },
                {
                  "type": "TSRestType",
                  "typeAnnotation": {
                    "type": "TSNamedTupleMember",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1536,
                      "end": 1537
                    },
                    "elementType": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 3,
                          "raw": "3",
                          "start": 1539,
                          "end": 1540
                        },
                        "start": 1539,
                        "end": 1540
                      },
                      "start": 1539,
                      "end": 1542
                    },
                    "optional": false,
                    "start": 1536,
                    "end": 1542
                  },
                  "start": 1533,
                  "end": 1542
                }
              ],
              "start": 1514,
              "end": 1543
            }
          ],
          "start": 1513,
          "end": 1544
        },
        "start": 1474,
        "end": 1544
      },
      "declare": false,
      "start": 1423,
      "end": 1545
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SubTup2VariadicWithLeadingFixedElementsTest2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1551,
        "end": 1595
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "SubTup2VariadicWithLeadingFixedElements",
          "optional": false,
          "typeAnnotation": null,
          "start": 1598,
          "end": 1637
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1639,
                    "end": 1640
                  },
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 1642,
                      "end": 1643
                    },
                    "start": 1642,
                    "end": 1643
                  },
                  "optional": false,
                  "start": 1639,
                  "end": 1643
                },
                {
                  "type": "TSNamedTupleMember",
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1645,
                    "end": 1646
                  },
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1648,
                      "end": 1649
                    },
                    "start": 1648,
                    "end": 1649
                  },
                  "optional": false,
                  "start": 1645,
                  "end": 1649
                },
                {
                  "type": "TSNamedTupleMember",
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1651,
                    "end": 1652
                  },
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 1654,
                      "end": 1655
                    },
                    "start": 1654,
                    "end": 1655
                  },
                  "optional": false,
                  "start": 1651,
                  "end": 1655
                },
                {
                  "type": "TSNamedTupleMember",
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1657,
                    "end": 1658
                  },
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 1660,
                      "end": 1661
                    },
                    "start": 1660,
                    "end": 1661
                  },
                  "optional": false,
                  "start": 1657,
                  "end": 1661
                },
                {
                  "type": "TSRestType",
                  "typeAnnotation": {
                    "type": "TSNamedTupleMember",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1666,
                      "end": 1667
                    },
                    "elementType": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 4,
                          "raw": "4",
                          "start": 1669,
                          "end": 1670
                        },
                        "start": 1669,
                        "end": 1670
                      },
                      "start": 1669,
                      "end": 1672
                    },
                    "optional": false,
                    "start": 1666,
                    "end": 1672
                  },
                  "start": 1663,
                  "end": 1672
                }
              ],
              "start": 1638,
              "end": 1673
            }
          ],
          "start": 1637,
          "end": 1674
        },
        "start": 1598,
        "end": 1674
      },
      "declare": false,
      "start": 1546,
      "end": 1675
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SubTup2TrailingVariadicWithTrailingFixedElements",
        "optional": false,
        "typeAnnotation": null,
        "start": 1682,
        "end": 1730
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
              "start": 1731,
              "end": 1732
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 1741,
                "end": 1748
              },
              "start": 1741,
              "end": 1750
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1731,
            "end": 1750
          }
        ],
        "start": 1730,
        "end": 1751
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
            "start": 1754,
            "end": 1755
          },
          "typeArguments": null,
          "start": 1754,
          "end": 1755
        },
        "extendsType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1771,
                "end": 1774
              },
              "start": 1768,
              "end": 1774
            },
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1787,
                    "end": 1788
                  },
                  "constraint": {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 1798,
                        "end": 1801
                      },
                      {
                        "type": "TSAnyKeyword",
                        "start": 1803,
                        "end": 1806
                      }
                    ],
                    "start": 1797,
                    "end": 1807
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1787,
                  "end": 1807
                },
                "start": 1781,
                "end": 1807
              },
              "start": 1778,
              "end": 1807
            },
            {
              "type": "TSAnyKeyword",
              "start": 1811,
              "end": 1814
            }
          ],
          "start": 1764,
          "end": 1817
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null,
            "start": 1822,
            "end": 1823
          },
          "typeArguments": null,
          "start": 1822,
          "end": 1823
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 1828,
          "end": 1833
        },
        "start": 1754,
        "end": 1833
      },
      "declare": false,
      "start": 1677,
      "end": 1834
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SubTup2TrailingVariadicWithTrailingFixedElementsTest",
        "optional": false,
        "typeAnnotation": null,
        "start": 1841,
        "end": 1893
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "SubTup2TrailingVariadicWithTrailingFixedElements",
          "optional": false,
          "typeAnnotation": null,
          "start": 1896,
          "end": 1944
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSRestType",
                  "typeAnnotation": {
                    "type": "TSNamedTupleMember",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1949,
                      "end": 1950
                    },
                    "elementType": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 1952,
                          "end": 1953
                        },
                        "start": 1952,
                        "end": 1953
                      },
                      "start": 1952,
                      "end": 1955
                    },
                    "optional": false,
                    "start": 1949,
                    "end": 1955
                  },
                  "start": 1946,
                  "end": 1955
                },
                {
                  "type": "TSNamedTupleMember",
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1957,
                    "end": 1958
                  },
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1960,
                      "end": 1961
                    },
                    "start": 1960,
                    "end": 1961
                  },
                  "optional": false,
                  "start": 1957,
                  "end": 1961
                },
                {
                  "type": "TSNamedTupleMember",
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1963,
                    "end": 1964
                  },
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 1966,
                      "end": 1967
                    },
                    "start": 1966,
                    "end": 1967
                  },
                  "optional": false,
                  "start": 1963,
                  "end": 1967
                },
                {
                  "type": "TSNamedTupleMember",
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1969,
                    "end": 1970
                  },
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 1972,
                      "end": 1973
                    },
                    "start": 1972,
                    "end": 1973
                  },
                  "optional": false,
                  "start": 1969,
                  "end": 1973
                }
              ],
              "start": 1945,
              "end": 1974
            }
          ],
          "start": 1944,
          "end": 1975
        },
        "start": 1896,
        "end": 1975
      },
      "declare": false,
      "start": 1836,
      "end": 1976
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SubTup2TrailingVariadicWithTrailingFixedElementsTest2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1982,
        "end": 2035
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "SubTup2TrailingVariadicWithTrailingFixedElements",
          "optional": false,
          "typeAnnotation": null,
          "start": 2038,
          "end": 2086
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSRestType",
                  "typeAnnotation": {
                    "type": "TSNamedTupleMember",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2091,
                      "end": 2092
                    },
                    "elementType": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 2094,
                          "end": 2095
                        },
                        "start": 2094,
                        "end": 2095
                      },
                      "start": 2094,
                      "end": 2097
                    },
                    "optional": false,
                    "start": 2091,
                    "end": 2097
                  },
                  "start": 2088,
                  "end": 2097
                },
                {
                  "type": "TSNamedTupleMember",
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2099,
                    "end": 2100
                  },
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 2102,
                      "end": 2103
                    },
                    "start": 2102,
                    "end": 2103
                  },
                  "optional": false,
                  "start": 2099,
                  "end": 2103
                },
                {
                  "type": "TSNamedTupleMember",
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2105,
                    "end": 2106
                  },
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 2108,
                      "end": 2109
                    },
                    "start": 2108,
                    "end": 2109
                  },
                  "optional": false,
                  "start": 2105,
                  "end": 2109
                },
                {
                  "type": "TSNamedTupleMember",
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2111,
                    "end": 2112
                  },
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 2114,
                      "end": 2115
                    },
                    "start": 2114,
                    "end": 2115
                  },
                  "optional": false,
                  "start": 2111,
                  "end": 2115
                },
                {
                  "type": "TSNamedTupleMember",
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2117,
                    "end": 2118
                  },
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 4,
                      "raw": "4",
                      "start": 2120,
                      "end": 2121
                    },
                    "start": 2120,
                    "end": 2121
                  },
                  "optional": false,
                  "start": 2117,
                  "end": 2121
                }
              ],
              "start": 2087,
              "end": 2122
            }
          ],
          "start": 2086,
          "end": 2123
        },
        "start": 2038,
        "end": 2123
      },
      "declare": false,
      "start": 1977,
      "end": 2124
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 17,
  "end": 2124
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 17,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "SubTup2FixedLength",
    "start": 22,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 40,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 41,
    "end": 42
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 43,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 51,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "=",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 64,
    "end": 65
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 66,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 78,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 81,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 87,
    "end": 88
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 89,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 98,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 103,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 111,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 119,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 127,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 135,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "SubTup2FixedLengthTest",
    "start": 140,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 163,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "SubTup2FixedLength",
    "start": 165,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 186,
    "end": 187
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 189,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 192,
    "end": 193
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 194,
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
    "value": "c",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 198,
    "end": 199
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 203,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 206,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "SubTup2Variadic",
    "start": 211,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 226,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 227,
    "end": 228
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 229,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 237,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 248,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 250,
    "end": 251
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 252,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 264,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 267,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 273,
    "end": 274
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 275,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 283,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 284,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 287,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 289,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 297,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 300,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 308,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 314,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 316,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 321,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 324,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "SubTup2VariadicTest",
    "start": 329,
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
    "value": "SubTup2Variadic",
    "start": 351,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 367,
    "end": 368
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 368,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 369,
    "end": 370
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 372,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 375,
    "end": 376
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 380,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 384,
    "end": 385
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 389,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 391,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 393,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "SubTup2VariadicTest2",
    "start": 398,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 419,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "SubTup2Variadic",
    "start": 421,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "<",
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
    "value": "a",
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
    "type": "Numeric",
    "value": "0",
    "start": 441,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 442,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 445,
    "end": 446
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 448,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 450,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 451,
    "end": 452
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 454,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 456,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 460,
    "end": 461
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 465,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 466,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 467,
    "end": 468
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 470,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "SubTup2VariadicAndRest",
    "start": 475,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 497,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 498,
    "end": 499
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 500,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 508,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 517,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 519,
    "end": 520
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 521,
    "end": 522
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 523,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 531,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 537,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 540,
    "end": 545
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 546,
    "end": 547
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 548,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 556,
    "end": 557
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 557,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 560,
    "end": 561
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 562,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 565,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 566,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 572,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 575,
    "end": 576
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 576,
    "end": 581
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 582,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 583,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 584,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 585,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 593,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 595,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 596,
    "end": 599
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 599,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 600,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 602,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 605,
    "end": 606
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 606,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 607,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 608,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 614,
    "end": 615
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 616,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 621,
    "end": 622
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 624,
    "end": 628
  },
  {
    "type": "Identifier",
    "value": "SubTup2VariadicAndRestTest",
    "start": 629,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 656,
    "end": 657
  },
  {
    "type": "Identifier",
    "value": "SubTup2VariadicAndRest",
    "start": 658,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 680,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 681,
    "end": 682
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 682,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 683,
    "end": 684
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 685,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 686,
    "end": 687
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 688,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 689,
    "end": 690
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 691,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 692,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 694,
    "end": 697
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 697,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 698,
    "end": 699
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 700,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 701,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 702,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 703,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 704,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 705,
    "end": 706
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 708,
    "end": 712
  },
  {
    "type": "Identifier",
    "value": "SubTup2TrailingVariadic",
    "start": 713,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 736,
    "end": 737
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 737,
    "end": 738
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 739,
    "end": 746
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 747,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 754,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "=",
    "start": 758,
    "end": 759
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 760,
    "end": 761
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 762,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 770,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 774,
    "end": 777
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 777,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 780,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 784,
    "end": 787
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 787,
    "end": 792
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 793,
    "end": 794
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 795,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 803,
    "end": 804
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 804,
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
    "value": "any",
    "start": 809,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 812,
    "end": 813
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 813,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 815,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 819,
    "end": 820
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 821,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 825,
    "end": 826
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 827,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 832,
    "end": 833
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 835,
    "end": 839
  },
  {
    "type": "Identifier",
    "value": "SubTup2TrailingVariadicTest",
    "start": 840,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 868,
    "end": 869
  },
  {
    "type": "Identifier",
    "value": "SubTup2TrailingVariadic",
    "start": 870,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 893,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 894,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 895,
    "end": 898
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 898,
    "end": 899
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 899,
    "end": 900
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 901,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 902,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 903,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 904,
    "end": 905
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 906,
    "end": 907
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 907,
    "end": 908
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 909,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 910,
    "end": 911
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 912,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 913,
    "end": 914
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 915,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 916,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 917,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 918,
    "end": 919
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 920,
    "end": 924
  },
  {
    "type": "Identifier",
    "value": "SubTup2TrailingVariadicTest2",
    "start": 925,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 954,
    "end": 955
  },
  {
    "type": "Identifier",
    "value": "SubTup2TrailingVariadic",
    "start": 956,
    "end": 979
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 979,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 980,
    "end": 981
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 981,
    "end": 984
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 984,
    "end": 985
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 985,
    "end": 986
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 987,
    "end": 988
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 988,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 989,
    "end": 990
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 990,
    "end": 991
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 992,
    "end": 993
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 993,
    "end": 994
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 995,
    "end": 996
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 996,
    "end": 997
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 998,
    "end": 999
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1001,
    "end": 1002
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "start": 1013,
    "end": 1017
  },
  {
    "type": "Identifier",
    "value": "SubTup2RestAndTrailingVariadic2",
    "start": 1018,
    "end": 1049
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1052,
    "end": 1059
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 1060,
    "end": 1067
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1073,
    "end": 1074
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1075,
    "end": 1082
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1083,
    "end": 1084
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1089,
    "end": 1092
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1092,
    "end": 1093
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 1093,
    "end": 1098
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1099,
    "end": 1100
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1100,
    "end": 1101
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1101,
    "end": 1102
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1102,
    "end": 1103
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1103,
    "end": 1104
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1109,
    "end": 1112
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 1112,
    "end": 1117
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1118,
    "end": 1119
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1120,
    "end": 1127
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1128,
    "end": 1129
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1129,
    "end": 1132
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1132,
    "end": 1133
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1134,
    "end": 1137
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1138,
    "end": 1139
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1140,
    "end": 1141
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1146,
    "end": 1147
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1148,
    "end": 1149
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1149,
    "end": 1150
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1150,
    "end": 1151
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1152,
    "end": 1155
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1155,
    "end": 1156
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1156,
    "end": 1157
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1162,
    "end": 1163
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1164,
    "end": 1169
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1172,
    "end": 1176
  },
  {
    "type": "Identifier",
    "value": "SubTup2RestAndTrailingVariadic2Test",
    "start": 1177,
    "end": 1212
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Identifier",
    "value": "SubTup2RestAndTrailingVariadic2",
    "start": 1215,
    "end": 1246
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1246,
    "end": 1247
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1247,
    "end": 1248
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1248,
    "end": 1251
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1251,
    "end": 1252
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1252,
    "end": 1253
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1254,
    "end": 1255
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1255,
    "end": 1256
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1256,
    "end": 1257
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1257,
    "end": 1258
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1259,
    "end": 1260
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1260,
    "end": 1261
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1262,
    "end": 1263
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1263,
    "end": 1264
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1265,
    "end": 1266
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1268,
    "end": 1269
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1269,
    "end": 1270
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1270,
    "end": 1271
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1274,
    "end": 1278
  },
  {
    "type": "Identifier",
    "value": "SubTup2VariadicWithLeadingFixedElements",
    "start": 1279,
    "end": 1318
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1318,
    "end": 1319
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1319,
    "end": 1320
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1321,
    "end": 1328
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 1329,
    "end": 1336
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1336,
    "end": 1337
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1337,
    "end": 1338
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1340,
    "end": 1341
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1342,
    "end": 1343
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1344,
    "end": 1351
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1352,
    "end": 1353
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1356,
    "end": 1359
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1359,
    "end": 1360
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1363,
    "end": 1366
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 1366,
    "end": 1371
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1372,
    "end": 1373
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1374,
    "end": 1381
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1382,
    "end": 1383
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1383,
    "end": 1386
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1386,
    "end": 1387
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1388,
    "end": 1391
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1391,
    "end": 1392
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1392,
    "end": 1393
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1396,
    "end": 1399
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1399,
    "end": 1402
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1403,
    "end": 1404
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1407,
    "end": 1408
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1409,
    "end": 1410
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1413,
    "end": 1414
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1415,
    "end": 1420
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1420,
    "end": 1421
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1423,
    "end": 1427
  },
  {
    "type": "Identifier",
    "value": "SubTup2VariadicWithLeadingFixedElementsTest",
    "start": 1428,
    "end": 1471
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1472,
    "end": 1473
  },
  {
    "type": "Identifier",
    "value": "SubTup2VariadicWithLeadingFixedElements",
    "start": 1474,
    "end": 1513
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1513,
    "end": 1514
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1514,
    "end": 1515
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1515,
    "end": 1516
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1516,
    "end": 1517
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1518,
    "end": 1519
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1519,
    "end": 1520
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1521,
    "end": 1522
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1522,
    "end": 1523
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1524,
    "end": 1525
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1525,
    "end": 1526
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1527,
    "end": 1528
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1528,
    "end": 1529
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1530,
    "end": 1531
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1531,
    "end": 1532
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1533,
    "end": 1536
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1536,
    "end": 1537
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1537,
    "end": 1538
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1539,
    "end": 1540
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1540,
    "end": 1541
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1541,
    "end": 1542
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1542,
    "end": 1543
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1543,
    "end": 1544
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1544,
    "end": 1545
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1546,
    "end": 1550
  },
  {
    "type": "Identifier",
    "value": "SubTup2VariadicWithLeadingFixedElementsTest2",
    "start": 1551,
    "end": 1595
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1596,
    "end": 1597
  },
  {
    "type": "Identifier",
    "value": "SubTup2VariadicWithLeadingFixedElements",
    "start": 1598,
    "end": 1637
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1637,
    "end": 1638
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1638,
    "end": 1639
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1639,
    "end": 1640
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1640,
    "end": 1641
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1642,
    "end": 1643
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1643,
    "end": 1644
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1645,
    "end": 1646
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1646,
    "end": 1647
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1648,
    "end": 1649
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1649,
    "end": 1650
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1651,
    "end": 1652
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1652,
    "end": 1653
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1654,
    "end": 1655
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1655,
    "end": 1656
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1657,
    "end": 1658
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1658,
    "end": 1659
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1660,
    "end": 1661
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1661,
    "end": 1662
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1663,
    "end": 1666
  },
  {
    "type": "Identifier",
    "value": "e",
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
    "value": "4",
    "start": 1669,
    "end": 1670
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1670,
    "end": 1671
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1671,
    "end": 1672
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1672,
    "end": 1673
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1673,
    "end": 1674
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1674,
    "end": 1675
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1677,
    "end": 1681
  },
  {
    "type": "Identifier",
    "value": "SubTup2TrailingVariadicWithTrailingFixedElements",
    "start": 1682,
    "end": 1730
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1730,
    "end": 1731
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1731,
    "end": 1732
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1733,
    "end": 1740
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 1741,
    "end": 1748
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1748,
    "end": 1749
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1749,
    "end": 1750
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1750,
    "end": 1751
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1752,
    "end": 1753
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1754,
    "end": 1755
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1756,
    "end": 1763
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1764,
    "end": 1765
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1768,
    "end": 1771
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1771,
    "end": 1774
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1774,
    "end": 1775
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1778,
    "end": 1781
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 1781,
    "end": 1786
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1787,
    "end": 1788
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1789,
    "end": 1796
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1797,
    "end": 1798
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1798,
    "end": 1801
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1801,
    "end": 1802
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1803,
    "end": 1806
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1806,
    "end": 1807
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1807,
    "end": 1808
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1811,
    "end": 1814
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1814,
    "end": 1815
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1816,
    "end": 1817
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1820,
    "end": 1821
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1822,
    "end": 1823
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1826,
    "end": 1827
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1828,
    "end": 1833
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1833,
    "end": 1834
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1836,
    "end": 1840
  },
  {
    "type": "Identifier",
    "value": "SubTup2TrailingVariadicWithTrailingFixedElementsTest",
    "start": 1841,
    "end": 1893
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1894,
    "end": 1895
  },
  {
    "type": "Identifier",
    "value": "SubTup2TrailingVariadicWithTrailingFixedElements",
    "start": 1896,
    "end": 1944
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1944,
    "end": 1945
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1945,
    "end": 1946
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1946,
    "end": 1949
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1949,
    "end": 1950
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1950,
    "end": 1951
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1952,
    "end": 1953
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1953,
    "end": 1954
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1954,
    "end": 1955
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1955,
    "end": 1956
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1957,
    "end": 1958
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1958,
    "end": 1959
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1960,
    "end": 1961
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1961,
    "end": 1962
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1963,
    "end": 1964
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1964,
    "end": 1965
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1966,
    "end": 1967
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1967,
    "end": 1968
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1969,
    "end": 1970
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1970,
    "end": 1971
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1972,
    "end": 1973
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1973,
    "end": 1974
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1974,
    "end": 1975
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1975,
    "end": 1976
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1977,
    "end": 1981
  },
  {
    "type": "Identifier",
    "value": "SubTup2TrailingVariadicWithTrailingFixedElementsTest2",
    "start": 1982,
    "end": 2035
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2036,
    "end": 2037
  },
  {
    "type": "Identifier",
    "value": "SubTup2TrailingVariadicWithTrailingFixedElements",
    "start": 2038,
    "end": 2086
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2086,
    "end": 2087
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2087,
    "end": 2088
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2088,
    "end": 2091
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2091,
    "end": 2092
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2092,
    "end": 2093
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2094,
    "end": 2095
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2095,
    "end": 2096
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2096,
    "end": 2097
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2097,
    "end": 2098
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2099,
    "end": 2100
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2100,
    "end": 2101
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2102,
    "end": 2103
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2103,
    "end": 2104
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2105,
    "end": 2106
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2106,
    "end": 2107
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2108,
    "end": 2109
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2109,
    "end": 2110
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 2111,
    "end": 2112
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2112,
    "end": 2113
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 2114,
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
    "value": "e",
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
    "value": "4",
    "start": 2120,
    "end": 2121
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2121,
    "end": 2122
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2122,
    "end": 2123
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2123,
    "end": 2124
  }
]
```
