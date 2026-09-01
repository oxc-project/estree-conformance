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
        "name": "X1",
        "optional": false,
        "typeAnnotation": null,
        "start": 31,
        "end": 33
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
              "start": 34,
              "end": 35
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 44,
                "end": 47
              },
              "start": 44,
              "end": 49
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 34,
            "end": 49
          }
        ],
        "start": 33,
        "end": 50
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
            "start": 57,
            "end": 58
          },
          "typeArguments": null,
          "start": 57,
          "end": 58
        },
        "extendsType": {
          "type": "TSTupleType",
          "elementTypes": [
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
                  "start": 74,
                  "end": 75
                },
                "constraint": {
                  "type": "TSStringKeyword",
                  "start": 84,
                  "end": 90
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 74,
                "end": 90
              },
              "start": 68,
              "end": 90
            }
          ],
          "start": 67,
          "end": 91
        },
        "trueType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 95,
                "end": 103
              },
              "start": 95,
              "end": 103
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 105,
                "end": 106
              },
              "typeArguments": null,
              "start": 105,
              "end": 106
            }
          ],
          "start": 94,
          "end": 107
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
              "start": 114,
              "end": 115
            },
            "typeArguments": null,
            "start": 114,
            "end": 115
          },
          "extendsType": {
            "type": "TSTupleType",
            "elementTypes": [
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
                    "start": 131,
                    "end": 132
                  },
                  "constraint": {
                    "type": "TSNumberKeyword",
                    "start": 141,
                    "end": 147
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 131,
                  "end": 147
                },
                "start": 125,
                "end": 147
              }
            ],
            "start": 124,
            "end": 148
          },
          "trueType": {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "number",
                  "raw": "\"number\"",
                  "start": 152,
                  "end": 160
                },
                "start": 152,
                "end": 160
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 162,
                  "end": 163
                },
                "typeArguments": null,
                "start": 162,
                "end": 163
              }
            ],
            "start": 151,
            "end": 164
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 171,
            "end": 176
          },
          "start": 114,
          "end": 176
        },
        "start": 57,
        "end": 176
      },
      "declare": false,
      "start": 26,
      "end": 177
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X1_T1",
        "optional": false,
        "typeAnnotation": null,
        "start": 184,
        "end": 189
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X1",
          "optional": false,
          "typeAnnotation": null,
          "start": 192,
          "end": 194
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "a",
                    "raw": "\"a\"",
                    "start": 196,
                    "end": 199
                  },
                  "start": 196,
                  "end": 199
                }
              ],
              "start": 195,
              "end": 200
            }
          ],
          "start": 194,
          "end": 201
        },
        "start": 192,
        "end": 201
      },
      "declare": false,
      "start": 179,
      "end": 202
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X1_T2",
        "optional": false,
        "typeAnnotation": null,
        "start": 227,
        "end": 232
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X1",
          "optional": false,
          "typeAnnotation": null,
          "start": 235,
          "end": 237
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 239,
                    "end": 240
                  },
                  "start": 239,
                  "end": 240
                }
              ],
              "start": 238,
              "end": 241
            }
          ],
          "start": 237,
          "end": 242
        },
        "start": 235,
        "end": 242
      },
      "declare": false,
      "start": 222,
      "end": 243
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X1_T3",
        "optional": false,
        "typeAnnotation": null,
        "start": 266,
        "end": 271
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X1",
          "optional": false,
          "typeAnnotation": null,
          "start": 274,
          "end": 276
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSObjectKeyword",
                  "start": 278,
                  "end": 284
                }
              ],
              "start": 277,
              "end": 285
            }
          ],
          "start": 276,
          "end": 286
        },
        "start": 274,
        "end": 286
      },
      "declare": false,
      "start": 261,
      "end": 287
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X2",
        "optional": false,
        "typeAnnotation": null,
        "start": 324,
        "end": 326
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
              "start": 327,
              "end": 328
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
                    "start": 341,
                    "end": 345
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 347,
                        "end": 350
                      },
                      "start": 347,
                      "end": 352
                    },
                    "start": 345,
                    "end": 352
                  },
                  "value": null,
                  "start": 338,
                  "end": 352
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 357,
                  "end": 361
                },
                "start": 354,
                "end": 361
              },
              "start": 337,
              "end": 361
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 327,
            "end": 361
          }
        ],
        "start": 326,
        "end": 362
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
            "start": 369,
            "end": 370
          },
          "typeArguments": null,
          "start": 369,
          "end": 370
        },
        "extendsType": {
          "type": "TSFunctionType",
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
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 389,
                      "end": 390
                    },
                    "constraint": {
                      "type": "TSStringKeyword",
                      "start": 399,
                      "end": 405
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 389,
                    "end": 405
                  },
                  "start": 383,
                  "end": 405
                },
                "start": 381,
                "end": 405
              },
              "start": 380,
              "end": 405
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 410,
              "end": 414
            },
            "start": 407,
            "end": 414
          },
          "start": 379,
          "end": 414
        },
        "trueType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 418,
                "end": 426
              },
              "start": 418,
              "end": 426
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 428,
                "end": 429
              },
              "typeArguments": null,
              "start": 428,
              "end": 429
            }
          ],
          "start": 417,
          "end": 430
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
              "start": 437,
              "end": 438
            },
            "typeArguments": null,
            "start": 437,
            "end": 438
          },
          "extendsType": {
            "type": "TSFunctionType",
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
                    "type": "TSInferType",
                    "typeParameter": {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 457,
                        "end": 458
                      },
                      "constraint": {
                        "type": "TSNumberKeyword",
                        "start": 467,
                        "end": 473
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 457,
                      "end": 473
                    },
                    "start": 451,
                    "end": 473
                  },
                  "start": 449,
                  "end": 473
                },
                "start": 448,
                "end": 473
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 478,
                "end": 482
              },
              "start": 475,
              "end": 482
            },
            "start": 447,
            "end": 482
          },
          "trueType": {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "number",
                  "raw": "\"number\"",
                  "start": 486,
                  "end": 494
                },
                "start": 486,
                "end": 494
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 496,
                  "end": 497
                },
                "typeArguments": null,
                "start": 496,
                "end": 497
              }
            ],
            "start": 485,
            "end": 498
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 505,
            "end": 510
          },
          "start": 437,
          "end": 510
        },
        "start": 369,
        "end": 510
      },
      "declare": false,
      "start": 319,
      "end": 511
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X2_T1",
        "optional": false,
        "typeAnnotation": null,
        "start": 518,
        "end": 523
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X2",
          "optional": false,
          "typeAnnotation": null,
          "start": 526,
          "end": 528
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSFunctionType",
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
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "\"a\"",
                        "start": 533,
                        "end": 536
                      },
                      "start": 533,
                      "end": 536
                    },
                    "start": 531,
                    "end": 536
                  },
                  "start": 530,
                  "end": 536
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 541,
                  "end": 545
                },
                "start": 538,
                "end": 545
              },
              "start": 529,
              "end": 545
            }
          ],
          "start": 528,
          "end": 546
        },
        "start": 526,
        "end": 546
      },
      "declare": false,
      "start": 513,
      "end": 547
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X2_T2",
        "optional": false,
        "typeAnnotation": null,
        "start": 572,
        "end": 577
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X2",
          "optional": false,
          "typeAnnotation": null,
          "start": 580,
          "end": 582
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSFunctionType",
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
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 587,
                        "end": 588
                      },
                      "start": 587,
                      "end": 588
                    },
                    "start": 585,
                    "end": 588
                  },
                  "start": 584,
                  "end": 588
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 593,
                  "end": 597
                },
                "start": 590,
                "end": 597
              },
              "start": 583,
              "end": 597
            }
          ],
          "start": 582,
          "end": 598
        },
        "start": 580,
        "end": 598
      },
      "declare": false,
      "start": 567,
      "end": 599
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X2_T3",
        "optional": false,
        "typeAnnotation": null,
        "start": 622,
        "end": 627
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X2",
          "optional": false,
          "typeAnnotation": null,
          "start": 630,
          "end": 632
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSFunctionType",
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
                      "type": "TSObjectKeyword",
                      "start": 637,
                      "end": 643
                    },
                    "start": 635,
                    "end": 643
                  },
                  "start": 634,
                  "end": 643
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 648,
                  "end": 652
                },
                "start": 645,
                "end": 652
              },
              "start": 633,
              "end": 652
            }
          ],
          "start": 632,
          "end": 653
        },
        "start": 630,
        "end": 653
      },
      "declare": false,
      "start": 617,
      "end": 654
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X3",
        "optional": false,
        "typeAnnotation": null,
        "start": 694,
        "end": 696
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
              "start": 697,
              "end": 698
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
                    "start": 711,
                    "end": 715
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 717,
                        "end": 720
                      },
                      "start": 717,
                      "end": 722
                    },
                    "start": 715,
                    "end": 722
                  },
                  "value": null,
                  "start": 708,
                  "end": 722
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 727,
                  "end": 730
                },
                "start": 724,
                "end": 730
              },
              "start": 707,
              "end": 730
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 697,
            "end": 730
          }
        ],
        "start": 696,
        "end": 731
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
            "start": 738,
            "end": 739
          },
          "typeArguments": null,
          "start": 738,
          "end": 739
        },
        "extendsType": {
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
                "start": 752,
                "end": 756
              },
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "start": 758,
                    "end": 761
                  },
                  "start": 758,
                  "end": 763
                },
                "start": 756,
                "end": 763
              },
              "value": null,
              "start": 749,
              "end": 763
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 775,
                  "end": 776
                },
                "constraint": {
                  "type": "TSStringKeyword",
                  "start": 785,
                  "end": 791
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 775,
                "end": 791
              },
              "start": 769,
              "end": 791
            },
            "start": 765,
            "end": 792
          },
          "start": 748,
          "end": 792
        },
        "trueType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 796,
                "end": 804
              },
              "start": 796,
              "end": 804
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 806,
                "end": 807
              },
              "typeArguments": null,
              "start": 806,
              "end": 807
            }
          ],
          "start": 795,
          "end": 808
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
              "start": 815,
              "end": 816
            },
            "typeArguments": null,
            "start": 815,
            "end": 816
          },
          "extendsType": {
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
                  "start": 829,
                  "end": 833
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 835,
                      "end": 838
                    },
                    "start": 835,
                    "end": 840
                  },
                  "start": 833,
                  "end": 840
                },
                "value": null,
                "start": 826,
                "end": 840
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 852,
                    "end": 853
                  },
                  "constraint": {
                    "type": "TSNumberKeyword",
                    "start": 862,
                    "end": 868
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 852,
                  "end": 868
                },
                "start": 846,
                "end": 868
              },
              "start": 842,
              "end": 869
            },
            "start": 825,
            "end": 869
          },
          "trueType": {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "number",
                  "raw": "\"number\"",
                  "start": 873,
                  "end": 881
                },
                "start": 873,
                "end": 881
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 883,
                  "end": 884
                },
                "typeArguments": null,
                "start": 883,
                "end": 884
              }
            ],
            "start": 872,
            "end": 885
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 892,
            "end": 897
          },
          "start": 815,
          "end": 897
        },
        "start": 738,
        "end": 897
      },
      "declare": false,
      "start": 689,
      "end": 898
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X3_T1",
        "optional": false,
        "typeAnnotation": null,
        "start": 905,
        "end": 910
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X3",
          "optional": false,
          "typeAnnotation": null,
          "start": 913,
          "end": 915
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "a",
                    "raw": "\"a\"",
                    "start": 922,
                    "end": 925
                  },
                  "start": 922,
                  "end": 925
                },
                "start": 919,
                "end": 925
              },
              "start": 916,
              "end": 925
            }
          ],
          "start": 915,
          "end": 926
        },
        "start": 913,
        "end": 926
      },
      "declare": false,
      "start": 900,
      "end": 927
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X3_T2",
        "optional": false,
        "typeAnnotation": null,
        "start": 952,
        "end": 957
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X3",
          "optional": false,
          "typeAnnotation": null,
          "start": 960,
          "end": 962
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 969,
                    "end": 970
                  },
                  "start": 969,
                  "end": 970
                },
                "start": 966,
                "end": 970
              },
              "start": 963,
              "end": 970
            }
          ],
          "start": 962,
          "end": 971
        },
        "start": 960,
        "end": 971
      },
      "declare": false,
      "start": 947,
      "end": 972
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X3_T3",
        "optional": false,
        "typeAnnotation": null,
        "start": 995,
        "end": 1000
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X3",
          "optional": false,
          "typeAnnotation": null,
          "start": 1003,
          "end": 1005
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSObjectKeyword",
                  "start": 1012,
                  "end": 1018
                },
                "start": 1009,
                "end": 1018
              },
              "start": 1006,
              "end": 1018
            }
          ],
          "start": 1005,
          "end": 1019
        },
        "start": 1003,
        "end": 1019
      },
      "declare": false,
      "start": 990,
      "end": 1020
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1062,
        "end": 1064
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
              "start": 1065,
              "end": 1066
            },
            "constraint": {
              "type": "TSConstructorType",
              "abstract": false,
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
                    "start": 1083,
                    "end": 1087
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 1089,
                        "end": 1092
                      },
                      "start": 1089,
                      "end": 1094
                    },
                    "start": 1087,
                    "end": 1094
                  },
                  "value": null,
                  "start": 1080,
                  "end": 1094
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 1099,
                  "end": 1102
                },
                "start": 1096,
                "end": 1102
              },
              "start": 1075,
              "end": 1102
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1065,
            "end": 1102
          }
        ],
        "start": 1064,
        "end": 1103
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
            "start": 1110,
            "end": 1111
          },
          "typeArguments": null,
          "start": 1110,
          "end": 1111
        },
        "extendsType": {
          "type": "TSConstructorType",
          "abstract": false,
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
                "start": 1128,
                "end": 1132
              },
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "start": 1134,
                    "end": 1137
                  },
                  "start": 1134,
                  "end": 1139
                },
                "start": 1132,
                "end": 1139
              },
              "value": null,
              "start": 1125,
              "end": 1139
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1151,
                  "end": 1152
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1163,
                        "end": 1164
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1166,
                          "end": 1172
                        },
                        "start": 1164,
                        "end": 1172
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1163,
                      "end": 1172
                    }
                  ],
                  "start": 1161,
                  "end": 1174
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 1151,
                "end": 1174
              },
              "start": 1145,
              "end": 1174
            },
            "start": 1141,
            "end": 1175
          },
          "start": 1120,
          "end": 1175
        },
        "trueType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 1179,
                "end": 1187
              },
              "start": 1179,
              "end": 1187
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 1189,
                "end": 1190
              },
              "typeArguments": null,
              "start": 1189,
              "end": 1190
            }
          ],
          "start": 1178,
          "end": 1191
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
              "start": 1198,
              "end": 1199
            },
            "typeArguments": null,
            "start": 1198,
            "end": 1199
          },
          "extendsType": {
            "type": "TSConstructorType",
            "abstract": false,
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
                  "start": 1216,
                  "end": 1220
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 1222,
                      "end": 1225
                    },
                    "start": 1222,
                    "end": 1227
                  },
                  "start": 1220,
                  "end": 1227
                },
                "value": null,
                "start": 1213,
                "end": 1227
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1239,
                    "end": 1240
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1251,
                          "end": 1252
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1254,
                            "end": 1260
                          },
                          "start": 1252,
                          "end": 1260
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1251,
                        "end": 1260
                      }
                    ],
                    "start": 1249,
                    "end": 1262
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1239,
                  "end": 1262
                },
                "start": 1233,
                "end": 1262
              },
              "start": 1229,
              "end": 1263
            },
            "start": 1208,
            "end": 1263
          },
          "trueType": {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "number",
                  "raw": "\"number\"",
                  "start": 1267,
                  "end": 1275
                },
                "start": 1267,
                "end": 1275
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1277,
                  "end": 1278
                },
                "typeArguments": null,
                "start": 1277,
                "end": 1278
              }
            ],
            "start": 1266,
            "end": 1279
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 1286,
            "end": 1291
          },
          "start": 1198,
          "end": 1291
        },
        "start": 1110,
        "end": 1291
      },
      "declare": false,
      "start": 1057,
      "end": 1292
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X4_T1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1299,
        "end": 1304
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X4",
          "optional": false,
          "typeAnnotation": null,
          "start": 1307,
          "end": 1309
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSConstructorType",
              "abstract": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1322,
                        "end": 1323
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "a",
                            "raw": "\"a\"",
                            "start": 1325,
                            "end": 1328
                          },
                          "start": 1325,
                          "end": 1328
                        },
                        "start": 1323,
                        "end": 1328
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1322,
                      "end": 1328
                    }
                  ],
                  "start": 1320,
                  "end": 1330
                },
                "start": 1317,
                "end": 1330
              },
              "start": 1310,
              "end": 1330
            }
          ],
          "start": 1309,
          "end": 1331
        },
        "start": 1307,
        "end": 1331
      },
      "declare": false,
      "start": 1294,
      "end": 1332
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X4_T2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1364,
        "end": 1369
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X4",
          "optional": false,
          "typeAnnotation": null,
          "start": 1372,
          "end": 1374
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSConstructorType",
              "abstract": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1387,
                        "end": 1388
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1390,
                            "end": 1391
                          },
                          "start": 1390,
                          "end": 1391
                        },
                        "start": 1388,
                        "end": 1391
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1387,
                      "end": 1391
                    }
                  ],
                  "start": 1385,
                  "end": 1393
                },
                "start": 1382,
                "end": 1393
              },
              "start": 1375,
              "end": 1393
            }
          ],
          "start": 1374,
          "end": 1394
        },
        "start": 1372,
        "end": 1394
      },
      "declare": false,
      "start": 1359,
      "end": 1395
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X4_T3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1425,
        "end": 1430
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X4",
          "optional": false,
          "typeAnnotation": null,
          "start": 1433,
          "end": 1435
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSConstructorType",
              "abstract": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1448,
                        "end": 1449
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSObjectKeyword",
                          "start": 1451,
                          "end": 1457
                        },
                        "start": 1449,
                        "end": 1457
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1448,
                      "end": 1457
                    }
                  ],
                  "start": 1446,
                  "end": 1459
                },
                "start": 1443,
                "end": 1459
              },
              "start": 1436,
              "end": 1459
            }
          ],
          "start": 1435,
          "end": 1460
        },
        "start": 1433,
        "end": 1460
      },
      "declare": false,
      "start": 1420,
      "end": 1461
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1503,
        "end": 1505
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
              "start": 1506,
              "end": 1507
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1506,
            "end": 1507
          }
        ],
        "start": 1505,
        "end": 1508
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
            "start": 1515,
            "end": 1516
          },
          "typeArguments": null,
          "start": 1515,
          "end": 1516
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 1525,
            "end": 1532
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
                    "start": 1539,
                    "end": 1540
                  },
                  "constraint": {
                    "type": "TSStringKeyword",
                    "start": 1549,
                    "end": 1555
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1539,
                  "end": 1555
                },
                "start": 1533,
                "end": 1555
              }
            ],
            "start": 1532,
            "end": 1556
          },
          "start": 1525,
          "end": 1556
        },
        "trueType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 1560,
                "end": 1568
              },
              "start": 1560,
              "end": 1568
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 1570,
                "end": 1571
              },
              "typeArguments": null,
              "start": 1570,
              "end": 1571
            }
          ],
          "start": 1559,
          "end": 1572
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
              "start": 1579,
              "end": 1580
            },
            "typeArguments": null,
            "start": 1579,
            "end": 1580
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Promise",
              "optional": false,
              "typeAnnotation": null,
              "start": 1589,
              "end": 1596
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
                      "start": 1603,
                      "end": 1604
                    },
                    "constraint": {
                      "type": "TSNumberKeyword",
                      "start": 1613,
                      "end": 1619
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1603,
                    "end": 1619
                  },
                  "start": 1597,
                  "end": 1619
                }
              ],
              "start": 1596,
              "end": 1620
            },
            "start": 1589,
            "end": 1620
          },
          "trueType": {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "number",
                  "raw": "\"number\"",
                  "start": 1624,
                  "end": 1632
                },
                "start": 1624,
                "end": 1632
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1634,
                  "end": 1635
                },
                "typeArguments": null,
                "start": 1634,
                "end": 1635
              }
            ],
            "start": 1623,
            "end": 1636
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 1643,
            "end": 1648
          },
          "start": 1579,
          "end": 1648
        },
        "start": 1515,
        "end": 1648
      },
      "declare": false,
      "start": 1498,
      "end": 1649
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X5_T1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1656,
        "end": 1661
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X5",
          "optional": false,
          "typeAnnotation": null,
          "start": 1664,
          "end": 1666
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
                "start": 1667,
                "end": 1674
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
                          "value": "a",
                          "raw": "\"a\"",
                          "start": 1675,
                          "end": 1678
                        },
                        "start": 1675,
                        "end": 1678
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "b",
                          "raw": "\"b\"",
                          "start": 1681,
                          "end": 1684
                        },
                        "start": 1681,
                        "end": 1684
                      }
                    ],
                    "start": 1675,
                    "end": 1684
                  }
                ],
                "start": 1674,
                "end": 1685
              },
              "start": 1667,
              "end": 1685
            }
          ],
          "start": 1666,
          "end": 1686
        },
        "start": 1664,
        "end": 1686
      },
      "declare": false,
      "start": 1651,
      "end": 1687
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X5_T2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1718,
        "end": 1723
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X5",
          "optional": false,
          "typeAnnotation": null,
          "start": 1726,
          "end": 1728
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
                "start": 1729,
                "end": 1736
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
                          "value": 1,
                          "raw": "1",
                          "start": 1737,
                          "end": 1738
                        },
                        "start": 1737,
                        "end": 1738
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 1741,
                          "end": 1742
                        },
                        "start": 1741,
                        "end": 1742
                      }
                    ],
                    "start": 1737,
                    "end": 1742
                  }
                ],
                "start": 1736,
                "end": 1743
              },
              "start": 1729,
              "end": 1743
            }
          ],
          "start": 1728,
          "end": 1744
        },
        "start": 1726,
        "end": 1744
      },
      "declare": false,
      "start": 1713,
      "end": 1745
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X5_T3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1772,
        "end": 1777
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X5",
          "optional": false,
          "typeAnnotation": null,
          "start": 1780,
          "end": 1782
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
                "start": 1783,
                "end": 1790
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
                          "value": null,
                          "raw": "1n",
                          "bigint": "1",
                          "start": 1791,
                          "end": 1793
                        },
                        "start": 1791,
                        "end": 1793
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": null,
                          "raw": "2n",
                          "bigint": "2",
                          "start": 1796,
                          "end": 1798
                        },
                        "start": 1796,
                        "end": 1798
                      }
                    ],
                    "start": 1791,
                    "end": 1798
                  }
                ],
                "start": 1790,
                "end": 1799
              },
              "start": 1783,
              "end": 1799
            }
          ],
          "start": 1782,
          "end": 1800
        },
        "start": 1780,
        "end": 1800
      },
      "declare": false,
      "start": 1767,
      "end": 1801
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1843,
        "end": 1845
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
              "start": 1846,
              "end": 1847
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1846,
            "end": 1847
          }
        ],
        "start": 1845,
        "end": 1848
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
            "start": 1855,
            "end": 1856
          },
          "typeArguments": null,
          "start": 1855,
          "end": 1856
        },
        "extendsType": {
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
                "start": 1867,
                "end": 1868
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1876,
                      "end": 1877
                    },
                    "constraint": {
                      "type": "TSStringKeyword",
                      "start": 1886,
                      "end": 1892
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1876,
                    "end": 1892
                  },
                  "start": 1870,
                  "end": 1892
                },
                "start": 1868,
                "end": 1892
              },
              "accessibility": null,
              "static": false,
              "start": 1867,
              "end": 1892
            }
          ],
          "start": 1865,
          "end": 1894
        },
        "trueType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 1898,
                "end": 1906
              },
              "start": 1898,
              "end": 1906
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 1908,
                "end": 1909
              },
              "typeArguments": null,
              "start": 1908,
              "end": 1909
            }
          ],
          "start": 1897,
          "end": 1910
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
              "start": 1917,
              "end": 1918
            },
            "typeArguments": null,
            "start": 1917,
            "end": 1918
          },
          "extendsType": {
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
                  "start": 1929,
                  "end": 1930
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSInferType",
                    "typeParameter": {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1938,
                        "end": 1939
                      },
                      "constraint": {
                        "type": "TSNumberKeyword",
                        "start": 1948,
                        "end": 1954
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1938,
                      "end": 1954
                    },
                    "start": 1932,
                    "end": 1954
                  },
                  "start": 1930,
                  "end": 1954
                },
                "accessibility": null,
                "static": false,
                "start": 1929,
                "end": 1954
              }
            ],
            "start": 1927,
            "end": 1956
          },
          "trueType": {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "number",
                  "raw": "\"number\"",
                  "start": 1960,
                  "end": 1968
                },
                "start": 1960,
                "end": 1968
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1970,
                  "end": 1971
                },
                "typeArguments": null,
                "start": 1970,
                "end": 1971
              }
            ],
            "start": 1959,
            "end": 1972
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 1979,
            "end": 1984
          },
          "start": 1917,
          "end": 1984
        },
        "start": 1855,
        "end": 1984
      },
      "declare": false,
      "start": 1838,
      "end": 1985
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X6_T1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1992,
        "end": 1997
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X6",
          "optional": false,
          "typeAnnotation": null,
          "start": 2000,
          "end": 2002
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
                    "start": 2005,
                    "end": 2006
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "\"a\"",
                        "start": 2008,
                        "end": 2011
                      },
                      "start": 2008,
                      "end": 2011
                    },
                    "start": 2006,
                    "end": 2011
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2005,
                  "end": 2011
                }
              ],
              "start": 2003,
              "end": 2013
            }
          ],
          "start": 2002,
          "end": 2014
        },
        "start": 2000,
        "end": 2014
      },
      "declare": false,
      "start": 1987,
      "end": 2015
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X6_T2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2040,
        "end": 2045
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X6",
          "optional": false,
          "typeAnnotation": null,
          "start": 2048,
          "end": 2050
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
                    "start": 2053,
                    "end": 2054
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 2056,
                        "end": 2057
                      },
                      "start": 2056,
                      "end": 2057
                    },
                    "start": 2054,
                    "end": 2057
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2053,
                  "end": 2057
                }
              ],
              "start": 2051,
              "end": 2059
            }
          ],
          "start": 2050,
          "end": 2060
        },
        "start": 2048,
        "end": 2060
      },
      "declare": false,
      "start": 2035,
      "end": 2061
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X6_T3",
        "optional": false,
        "typeAnnotation": null,
        "start": 2084,
        "end": 2089
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X6",
          "optional": false,
          "typeAnnotation": null,
          "start": 2092,
          "end": 2094
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
                    "start": 2097,
                    "end": 2098
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSObjectKeyword",
                      "start": 2100,
                      "end": 2106
                    },
                    "start": 2098,
                    "end": 2106
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2097,
                  "end": 2106
                }
              ],
              "start": 2095,
              "end": 2108
            }
          ],
          "start": 2094,
          "end": 2109
        },
        "start": 2092,
        "end": 2109
      },
      "declare": false,
      "start": 2079,
      "end": 2110
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X7",
        "optional": false,
        "typeAnnotation": null,
        "start": 2162,
        "end": 2164
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
              "start": 2165,
              "end": 2166
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2165,
            "end": 2166
          }
        ],
        "start": 2164,
        "end": 2167
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
            "start": 2174,
            "end": 2175
          },
          "typeArguments": null,
          "start": 2174,
          "end": 2175
        },
        "extendsType": {
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
                "start": 2186,
                "end": 2187
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2195,
                      "end": 2196
                    },
                    "constraint": {
                      "type": "TSStringKeyword",
                      "start": 2205,
                      "end": 2211
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2195,
                    "end": 2211
                  },
                  "start": 2189,
                  "end": 2211
                },
                "start": 2187,
                "end": 2211
              },
              "accessibility": null,
              "static": false,
              "start": 2186,
              "end": 2212
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
                "start": 2213,
                "end": 2214
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2222,
                      "end": 2223
                    },
                    "constraint": {
                      "type": "TSStringKeyword",
                      "start": 2232,
                      "end": 2238
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2222,
                    "end": 2238
                  },
                  "start": 2216,
                  "end": 2238
                },
                "start": 2214,
                "end": 2238
              },
              "accessibility": null,
              "static": false,
              "start": 2213,
              "end": 2238
            }
          ],
          "start": 2184,
          "end": 2240
        },
        "trueType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 2244,
                "end": 2252
              },
              "start": 2244,
              "end": 2252
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 2254,
                "end": 2255
              },
              "typeArguments": null,
              "start": 2254,
              "end": 2255
            }
          ],
          "start": 2243,
          "end": 2256
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
              "start": 2263,
              "end": 2264
            },
            "typeArguments": null,
            "start": 2263,
            "end": 2264
          },
          "extendsType": {
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
                  "start": 2275,
                  "end": 2276
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSInferType",
                    "typeParameter": {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2284,
                        "end": 2285
                      },
                      "constraint": {
                        "type": "TSNumberKeyword",
                        "start": 2294,
                        "end": 2300
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2284,
                      "end": 2300
                    },
                    "start": 2278,
                    "end": 2300
                  },
                  "start": 2276,
                  "end": 2300
                },
                "accessibility": null,
                "static": false,
                "start": 2275,
                "end": 2301
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
                  "start": 2302,
                  "end": 2303
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSInferType",
                    "typeParameter": {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2311,
                        "end": 2312
                      },
                      "constraint": {
                        "type": "TSNumberKeyword",
                        "start": 2321,
                        "end": 2327
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2311,
                      "end": 2327
                    },
                    "start": 2305,
                    "end": 2327
                  },
                  "start": 2303,
                  "end": 2327
                },
                "accessibility": null,
                "static": false,
                "start": 2302,
                "end": 2327
              }
            ],
            "start": 2273,
            "end": 2329
          },
          "trueType": {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "number",
                  "raw": "\"number\"",
                  "start": 2333,
                  "end": 2341
                },
                "start": 2333,
                "end": 2341
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2343,
                  "end": 2344
                },
                "typeArguments": null,
                "start": 2343,
                "end": 2344
              }
            ],
            "start": 2332,
            "end": 2345
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 2352,
            "end": 2357
          },
          "start": 2263,
          "end": 2357
        },
        "start": 2174,
        "end": 2357
      },
      "declare": false,
      "start": 2157,
      "end": 2358
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X7_T1",
        "optional": false,
        "typeAnnotation": null,
        "start": 2365,
        "end": 2370
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X7",
          "optional": false,
          "typeAnnotation": null,
          "start": 2373,
          "end": 2375
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
                    "start": 2378,
                    "end": 2379
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "\"a\"",
                        "start": 2381,
                        "end": 2384
                      },
                      "start": 2381,
                      "end": 2384
                    },
                    "start": 2379,
                    "end": 2384
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2378,
                  "end": 2385
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
                    "start": 2386,
                    "end": 2387
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "b",
                        "raw": "\"b\"",
                        "start": 2389,
                        "end": 2392
                      },
                      "start": 2389,
                      "end": 2392
                    },
                    "start": 2387,
                    "end": 2392
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2386,
                  "end": 2392
                }
              ],
              "start": 2376,
              "end": 2394
            }
          ],
          "start": 2375,
          "end": 2395
        },
        "start": 2373,
        "end": 2395
      },
      "declare": false,
      "start": 2360,
      "end": 2396
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X7_T2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2427,
        "end": 2432
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X7",
          "optional": false,
          "typeAnnotation": null,
          "start": 2435,
          "end": 2437
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
                    "start": 2440,
                    "end": 2441
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 2443,
                        "end": 2444
                      },
                      "start": 2443,
                      "end": 2444
                    },
                    "start": 2441,
                    "end": 2444
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2440,
                  "end": 2445
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
                    "start": 2446,
                    "end": 2447
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 2449,
                        "end": 2450
                      },
                      "start": 2449,
                      "end": 2450
                    },
                    "start": 2447,
                    "end": 2450
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2446,
                  "end": 2450
                }
              ],
              "start": 2438,
              "end": 2452
            }
          ],
          "start": 2437,
          "end": 2453
        },
        "start": 2435,
        "end": 2453
      },
      "declare": false,
      "start": 2422,
      "end": 2454
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X7_T3",
        "optional": false,
        "typeAnnotation": null,
        "start": 2481,
        "end": 2486
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X7",
          "optional": false,
          "typeAnnotation": null,
          "start": 2489,
          "end": 2491
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
                    "start": 2494,
                    "end": 2495
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSObjectKeyword",
                      "start": 2497,
                      "end": 2503
                    },
                    "start": 2495,
                    "end": 2503
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2494,
                  "end": 2504
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
                    "start": 2505,
                    "end": 2506
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSObjectKeyword",
                      "start": 2508,
                      "end": 2514
                    },
                    "start": 2506,
                    "end": 2514
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2505,
                  "end": 2514
                }
              ],
              "start": 2492,
              "end": 2516
            }
          ],
          "start": 2491,
          "end": 2517
        },
        "start": 2489,
        "end": 2517
      },
      "declare": false,
      "start": 2476,
      "end": 2518
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X7_T4",
        "optional": false,
        "typeAnnotation": null,
        "start": 2533,
        "end": 2538
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X7",
          "optional": false,
          "typeAnnotation": null,
          "start": 2541,
          "end": 2543
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
                    "start": 2546,
                    "end": 2547
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "\"a\"",
                        "start": 2549,
                        "end": 2552
                      },
                      "start": 2549,
                      "end": 2552
                    },
                    "start": 2547,
                    "end": 2552
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2546,
                  "end": 2553
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
                    "start": 2554,
                    "end": 2555
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 2557,
                        "end": 2558
                      },
                      "start": 2557,
                      "end": 2558
                    },
                    "start": 2555,
                    "end": 2558
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2554,
                  "end": 2558
                }
              ],
              "start": 2544,
              "end": 2560
            }
          ],
          "start": 2543,
          "end": 2561
        },
        "start": 2541,
        "end": 2561
      },
      "declare": false,
      "start": 2528,
      "end": 2562
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X8",
        "optional": false,
        "typeAnnotation": null,
        "start": 2659,
        "end": 2661
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
              "start": 2662,
              "end": 2663
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2662,
            "end": 2663
          }
        ],
        "start": 2661,
        "end": 2664
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
            "start": 2671,
            "end": 2672
          },
          "typeArguments": null,
          "start": 2671,
          "end": 2672
        },
        "extendsType": {
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
                "start": 2683,
                "end": 2684
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2692,
                      "end": 2693
                    },
                    "constraint": {
                      "type": "TSStringKeyword",
                      "start": 2702,
                      "end": 2708
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2692,
                    "end": 2708
                  },
                  "start": 2686,
                  "end": 2708
                },
                "start": 2684,
                "end": 2708
              },
              "accessibility": null,
              "static": false,
              "start": 2683,
              "end": 2709
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
                "start": 2710,
                "end": 2711
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2719,
                      "end": 2720
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2719,
                    "end": 2720
                  },
                  "start": 2713,
                  "end": 2720
                },
                "start": 2711,
                "end": 2720
              },
              "accessibility": null,
              "static": false,
              "start": 2710,
              "end": 2720
            }
          ],
          "start": 2681,
          "end": 2722
        },
        "trueType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 2726,
                "end": 2734
              },
              "start": 2726,
              "end": 2734
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 2736,
                "end": 2737
              },
              "typeArguments": null,
              "start": 2736,
              "end": 2737
            }
          ],
          "start": 2725,
          "end": 2738
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
              "start": 2745,
              "end": 2746
            },
            "typeArguments": null,
            "start": 2745,
            "end": 2746
          },
          "extendsType": {
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
                  "start": 2757,
                  "end": 2758
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSInferType",
                    "typeParameter": {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2766,
                        "end": 2767
                      },
                      "constraint": {
                        "type": "TSNumberKeyword",
                        "start": 2776,
                        "end": 2782
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2766,
                      "end": 2782
                    },
                    "start": 2760,
                    "end": 2782
                  },
                  "start": 2758,
                  "end": 2782
                },
                "accessibility": null,
                "static": false,
                "start": 2757,
                "end": 2783
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
                  "start": 2784,
                  "end": 2785
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSInferType",
                    "typeParameter": {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2793,
                        "end": 2794
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2793,
                      "end": 2794
                    },
                    "start": 2787,
                    "end": 2794
                  },
                  "start": 2785,
                  "end": 2794
                },
                "accessibility": null,
                "static": false,
                "start": 2784,
                "end": 2794
              }
            ],
            "start": 2755,
            "end": 2796
          },
          "trueType": {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "number",
                  "raw": "\"number\"",
                  "start": 2800,
                  "end": 2808
                },
                "start": 2800,
                "end": 2808
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2810,
                  "end": 2811
                },
                "typeArguments": null,
                "start": 2810,
                "end": 2811
              }
            ],
            "start": 2799,
            "end": 2812
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 2819,
            "end": 2824
          },
          "start": 2745,
          "end": 2824
        },
        "start": 2671,
        "end": 2824
      },
      "declare": false,
      "start": 2654,
      "end": 2825
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X8_T1",
        "optional": false,
        "typeAnnotation": null,
        "start": 2832,
        "end": 2837
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X8",
          "optional": false,
          "typeAnnotation": null,
          "start": 2840,
          "end": 2842
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
                    "start": 2845,
                    "end": 2846
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "\"a\"",
                        "start": 2848,
                        "end": 2851
                      },
                      "start": 2848,
                      "end": 2851
                    },
                    "start": 2846,
                    "end": 2851
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2845,
                  "end": 2852
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
                    "start": 2853,
                    "end": 2854
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "b",
                        "raw": "\"b\"",
                        "start": 2856,
                        "end": 2859
                      },
                      "start": 2856,
                      "end": 2859
                    },
                    "start": 2854,
                    "end": 2859
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2853,
                  "end": 2859
                }
              ],
              "start": 2843,
              "end": 2861
            }
          ],
          "start": 2842,
          "end": 2862
        },
        "start": 2840,
        "end": 2862
      },
      "declare": false,
      "start": 2827,
      "end": 2863
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X8_T2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2894,
        "end": 2899
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X8",
          "optional": false,
          "typeAnnotation": null,
          "start": 2902,
          "end": 2904
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
                    "start": 2907,
                    "end": 2908
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 2910,
                        "end": 2911
                      },
                      "start": 2910,
                      "end": 2911
                    },
                    "start": 2908,
                    "end": 2911
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2907,
                  "end": 2912
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
                    "start": 2913,
                    "end": 2914
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 2916,
                        "end": 2917
                      },
                      "start": 2916,
                      "end": 2917
                    },
                    "start": 2914,
                    "end": 2917
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2913,
                  "end": 2917
                }
              ],
              "start": 2905,
              "end": 2919
            }
          ],
          "start": 2904,
          "end": 2920
        },
        "start": 2902,
        "end": 2920
      },
      "declare": false,
      "start": 2889,
      "end": 2921
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X8_T3",
        "optional": false,
        "typeAnnotation": null,
        "start": 2948,
        "end": 2953
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X8",
          "optional": false,
          "typeAnnotation": null,
          "start": 2956,
          "end": 2958
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
                    "start": 2961,
                    "end": 2962
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSObjectKeyword",
                      "start": 2964,
                      "end": 2970
                    },
                    "start": 2962,
                    "end": 2970
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2961,
                  "end": 2971
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
                    "start": 2972,
                    "end": 2973
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSObjectKeyword",
                      "start": 2975,
                      "end": 2981
                    },
                    "start": 2973,
                    "end": 2981
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2972,
                  "end": 2981
                }
              ],
              "start": 2959,
              "end": 2983
            }
          ],
          "start": 2958,
          "end": 2984
        },
        "start": 2956,
        "end": 2984
      },
      "declare": false,
      "start": 2943,
      "end": 2985
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X8_T4",
        "optional": false,
        "typeAnnotation": null,
        "start": 3000,
        "end": 3005
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X8",
          "optional": false,
          "typeAnnotation": null,
          "start": 3008,
          "end": 3010
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
                    "start": 3013,
                    "end": 3014
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "\"a\"",
                        "start": 3016,
                        "end": 3019
                      },
                      "start": 3016,
                      "end": 3019
                    },
                    "start": 3014,
                    "end": 3019
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3013,
                  "end": 3020
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
                    "start": 3021,
                    "end": 3022
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 3024,
                        "end": 3025
                      },
                      "start": 3024,
                      "end": 3025
                    },
                    "start": 3022,
                    "end": 3025
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3021,
                  "end": 3025
                }
              ],
              "start": 3011,
              "end": 3027
            }
          ],
          "start": 3010,
          "end": 3028
        },
        "start": 3008,
        "end": 3028
      },
      "declare": false,
      "start": 2995,
      "end": 3029
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X9",
        "optional": false,
        "typeAnnotation": null,
        "start": 3125,
        "end": 3127
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
              "start": 3128,
              "end": 3129
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3128,
            "end": 3129
          }
        ],
        "start": 3127,
        "end": 3130
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
            "start": 3137,
            "end": 3138
          },
          "typeArguments": null,
          "start": 3137,
          "end": 3138
        },
        "extendsType": {
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
                "start": 3149,
                "end": 3150
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3158,
                      "end": 3159
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 3158,
                    "end": 3159
                  },
                  "start": 3152,
                  "end": 3159
                },
                "start": 3150,
                "end": 3159
              },
              "accessibility": null,
              "static": false,
              "start": 3149,
              "end": 3160
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
                "start": 3161,
                "end": 3162
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3170,
                      "end": 3171
                    },
                    "constraint": {
                      "type": "TSStringKeyword",
                      "start": 3180,
                      "end": 3186
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 3170,
                    "end": 3186
                  },
                  "start": 3164,
                  "end": 3186
                },
                "start": 3162,
                "end": 3186
              },
              "accessibility": null,
              "static": false,
              "start": 3161,
              "end": 3186
            }
          ],
          "start": 3147,
          "end": 3188
        },
        "trueType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 3192,
                "end": 3200
              },
              "start": 3192,
              "end": 3200
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 3202,
                "end": 3203
              },
              "typeArguments": null,
              "start": 3202,
              "end": 3203
            }
          ],
          "start": 3191,
          "end": 3204
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
              "start": 3211,
              "end": 3212
            },
            "typeArguments": null,
            "start": 3211,
            "end": 3212
          },
          "extendsType": {
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
                  "start": 3223,
                  "end": 3224
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSInferType",
                    "typeParameter": {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3232,
                        "end": 3233
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 3232,
                      "end": 3233
                    },
                    "start": 3226,
                    "end": 3233
                  },
                  "start": 3224,
                  "end": 3233
                },
                "accessibility": null,
                "static": false,
                "start": 3223,
                "end": 3234
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
                  "start": 3235,
                  "end": 3236
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSInferType",
                    "typeParameter": {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3244,
                        "end": 3245
                      },
                      "constraint": {
                        "type": "TSNumberKeyword",
                        "start": 3254,
                        "end": 3260
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 3244,
                      "end": 3260
                    },
                    "start": 3238,
                    "end": 3260
                  },
                  "start": 3236,
                  "end": 3260
                },
                "accessibility": null,
                "static": false,
                "start": 3235,
                "end": 3260
              }
            ],
            "start": 3221,
            "end": 3262
          },
          "trueType": {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "number",
                  "raw": "\"number\"",
                  "start": 3266,
                  "end": 3274
                },
                "start": 3266,
                "end": 3274
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3276,
                  "end": 3277
                },
                "typeArguments": null,
                "start": 3276,
                "end": 3277
              }
            ],
            "start": 3265,
            "end": 3278
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 3285,
            "end": 3290
          },
          "start": 3211,
          "end": 3290
        },
        "start": 3137,
        "end": 3290
      },
      "declare": false,
      "start": 3120,
      "end": 3291
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X9_T1",
        "optional": false,
        "typeAnnotation": null,
        "start": 3298,
        "end": 3303
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X9",
          "optional": false,
          "typeAnnotation": null,
          "start": 3306,
          "end": 3308
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
                    "start": 3311,
                    "end": 3312
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "\"a\"",
                        "start": 3314,
                        "end": 3317
                      },
                      "start": 3314,
                      "end": 3317
                    },
                    "start": 3312,
                    "end": 3317
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3311,
                  "end": 3318
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
                    "start": 3319,
                    "end": 3320
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "b",
                        "raw": "\"b\"",
                        "start": 3322,
                        "end": 3325
                      },
                      "start": 3322,
                      "end": 3325
                    },
                    "start": 3320,
                    "end": 3325
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3319,
                  "end": 3325
                }
              ],
              "start": 3309,
              "end": 3327
            }
          ],
          "start": 3308,
          "end": 3328
        },
        "start": 3306,
        "end": 3328
      },
      "declare": false,
      "start": 3293,
      "end": 3329
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X9_T2",
        "optional": false,
        "typeAnnotation": null,
        "start": 3360,
        "end": 3365
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X9",
          "optional": false,
          "typeAnnotation": null,
          "start": 3368,
          "end": 3370
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
                    "start": 3373,
                    "end": 3374
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 3376,
                        "end": 3377
                      },
                      "start": 3376,
                      "end": 3377
                    },
                    "start": 3374,
                    "end": 3377
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3373,
                  "end": 3378
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
                    "start": 3379,
                    "end": 3380
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 3382,
                        "end": 3383
                      },
                      "start": 3382,
                      "end": 3383
                    },
                    "start": 3380,
                    "end": 3383
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3379,
                  "end": 3383
                }
              ],
              "start": 3371,
              "end": 3385
            }
          ],
          "start": 3370,
          "end": 3386
        },
        "start": 3368,
        "end": 3386
      },
      "declare": false,
      "start": 3355,
      "end": 3387
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X9_T3",
        "optional": false,
        "typeAnnotation": null,
        "start": 3414,
        "end": 3419
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X9",
          "optional": false,
          "typeAnnotation": null,
          "start": 3422,
          "end": 3424
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
                    "start": 3427,
                    "end": 3428
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSObjectKeyword",
                      "start": 3430,
                      "end": 3436
                    },
                    "start": 3428,
                    "end": 3436
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3427,
                  "end": 3437
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
                    "start": 3438,
                    "end": 3439
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSObjectKeyword",
                      "start": 3441,
                      "end": 3447
                    },
                    "start": 3439,
                    "end": 3447
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3438,
                  "end": 3447
                }
              ],
              "start": 3425,
              "end": 3449
            }
          ],
          "start": 3424,
          "end": 3450
        },
        "start": 3422,
        "end": 3450
      },
      "declare": false,
      "start": 3409,
      "end": 3451
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X9_T4",
        "optional": false,
        "typeAnnotation": null,
        "start": 3466,
        "end": 3471
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X9",
          "optional": false,
          "typeAnnotation": null,
          "start": 3474,
          "end": 3476
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
                    "start": 3479,
                    "end": 3480
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "\"a\"",
                        "start": 3482,
                        "end": 3485
                      },
                      "start": 3482,
                      "end": 3485
                    },
                    "start": 3480,
                    "end": 3485
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3479,
                  "end": 3486
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
                    "start": 3487,
                    "end": 3488
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 3490,
                        "end": 3491
                      },
                      "start": 3490,
                      "end": 3491
                    },
                    "start": 3488,
                    "end": 3491
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3487,
                  "end": 3491
                }
              ],
              "start": 3477,
              "end": 3493
            }
          ],
          "start": 3476,
          "end": 3494
        },
        "start": 3474,
        "end": 3494
      },
      "declare": false,
      "start": 3461,
      "end": 3495
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X10",
        "optional": false,
        "typeAnnotation": null,
        "start": 3562,
        "end": 3565
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
              "start": 3566,
              "end": 3567
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3566,
            "end": 3567
          }
        ],
        "start": 3565,
        "end": 3568
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
            "start": 3571,
            "end": 3572
          },
          "typeArguments": null,
          "start": 3571,
          "end": 3572
        },
        "extendsType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSInferType",
            "typeParameter": {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 3588,
                "end": 3589
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 3588,
              "end": 3589
            },
            "start": 3582,
            "end": 3589
          },
          "extendsType": {
            "type": "TSNumberKeyword",
            "start": 3598,
            "end": 3604
          },
          "trueType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 3607,
              "end": 3608
            },
            "start": 3607,
            "end": 3608
          },
          "falseType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 3611,
              "end": 3612
            },
            "start": 3611,
            "end": 3612
          },
          "start": 3582,
          "end": 3612
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 3616,
            "end": 3617
          },
          "start": 3616,
          "end": 3617
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 3620,
            "end": 3621
          },
          "start": 3620,
          "end": 3621
        },
        "start": 3571,
        "end": 3621
      },
      "declare": false,
      "start": 3557,
      "end": 3622
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X10_Y1",
        "optional": false,
        "typeAnnotation": null,
        "start": 3657,
        "end": 3663
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
              "start": 3664,
              "end": 3665
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3664,
            "end": 3665
          }
        ],
        "start": 3663,
        "end": 3666
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X10",
          "optional": false,
          "typeAnnotation": null,
          "start": 3669,
          "end": 3672
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
                  "start": 3673,
                  "end": 3674
                },
                "typeArguments": null,
                "start": 3673,
                "end": 3674
              },
              "extendsType": {
                "type": "TSNumberKeyword",
                "start": 3683,
                "end": 3689
              },
              "trueType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 3692,
                  "end": 3693
                },
                "start": 3692,
                "end": 3693
              },
              "falseType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 3696,
                  "end": 3697
                },
                "start": 3696,
                "end": 3697
              },
              "start": 3673,
              "end": 3697
            }
          ],
          "start": 3672,
          "end": 3698
        },
        "start": 3669,
        "end": 3698
      },
      "declare": false,
      "start": 3652,
      "end": 3699
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X10_T1_T1",
        "optional": false,
        "typeAnnotation": null,
        "start": 3705,
        "end": 3714
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X10_Y1",
          "optional": false,
          "typeAnnotation": null,
          "start": 3717,
          "end": 3723
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 3724,
              "end": 3730
            }
          ],
          "start": 3723,
          "end": 3731
        },
        "start": 3717,
        "end": 3731
      },
      "declare": false,
      "start": 3700,
      "end": 3732
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X11",
        "optional": false,
        "typeAnnotation": null,
        "start": 3739,
        "end": 3742
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
              "start": 3743,
              "end": 3744
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3743,
            "end": 3744
          }
        ],
        "start": 3742,
        "end": 3745
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
            "start": 3748,
            "end": 3749
          },
          "typeArguments": null,
          "start": 3748,
          "end": 3749
        },
        "extendsType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSInferType",
            "typeParameter": {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 3766,
                "end": 3767
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 3766,
              "end": 3767
            },
            "start": 3760,
            "end": 3767
          },
          "extendsType": {
            "type": "TSNumberKeyword",
            "start": 3777,
            "end": 3783
          },
          "trueType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 3786,
              "end": 3787
            },
            "start": 3786,
            "end": 3787
          },
          "falseType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 3790,
              "end": 3791
            },
            "start": 3790,
            "end": 3791
          },
          "start": 3759,
          "end": 3791
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 3795,
            "end": 3796
          },
          "start": 3795,
          "end": 3796
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 3799,
            "end": 3800
          },
          "start": 3799,
          "end": 3800
        },
        "start": 3748,
        "end": 3800
      },
      "declare": false,
      "start": 3734,
      "end": 3801
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X12",
        "optional": false,
        "typeAnnotation": null,
        "start": 3836,
        "end": 3839
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
              "start": 3840,
              "end": 3841
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3840,
            "end": 3841
          }
        ],
        "start": 3839,
        "end": 3842
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
            "start": 3845,
            "end": 3846
          },
          "typeArguments": null,
          "start": 3845,
          "end": 3846
        },
        "extendsType": {
          "type": "TSInferType",
          "typeParameter": {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 3862,
              "end": 3863
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 3872,
              "end": 3878
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3862,
            "end": 3878
          },
          "start": 3856,
          "end": 3878
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 3882,
            "end": 3883
          },
          "start": 3882,
          "end": 3883
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 3886,
            "end": 3887
          },
          "start": 3886,
          "end": 3887
        },
        "start": 3845,
        "end": 3887
      },
      "declare": false,
      "start": 3831,
      "end": 3888
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X13",
        "optional": false,
        "typeAnnotation": null,
        "start": 3946,
        "end": 3949
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
              "start": 3950,
              "end": 3951
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3950,
            "end": 3951
          }
        ],
        "start": 3949,
        "end": 3952
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
            "start": 3955,
            "end": 3956
          },
          "typeArguments": null,
          "start": 3955,
          "end": 3956
        },
        "extendsType": {
          "type": "TSInferType",
          "typeParameter": {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 3971,
              "end": 3972
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 3981,
              "end": 3987
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3971,
            "end": 3987
          },
          "start": 3965,
          "end": 3987
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 3990,
            "end": 3991
          },
          "start": 3990,
          "end": 3991
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 3994,
            "end": 3995
          },
          "start": 3994,
          "end": 3995
        },
        "start": 3955,
        "end": 3995
      },
      "declare": false,
      "start": 3941,
      "end": 3996
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X14",
        "optional": false,
        "typeAnnotation": null,
        "start": 4086,
        "end": 4089
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
              "start": 4090,
              "end": 4091
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4090,
            "end": 4091
          }
        ],
        "start": 4089,
        "end": 4092
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
            "start": 4095,
            "end": 4096
          },
          "typeArguments": null,
          "start": 4095,
          "end": 4096
        },
        "extendsType": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSInferType",
            "typeParameter": {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 4117,
                "end": 4118
              },
              "constraint": {
                "type": "TSNumberKeyword",
                "start": 4127,
                "end": 4133
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 4117,
              "end": 4133
            },
            "start": 4111,
            "end": 4133
          },
          "start": 4105,
          "end": 4133
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 4136,
            "end": 4137
          },
          "start": 4136,
          "end": 4137
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 4140,
            "end": 4141
          },
          "start": 4140,
          "end": 4141
        },
        "start": 4095,
        "end": 4141
      },
      "declare": false,
      "start": 4081,
      "end": 4142
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X15",
        "optional": false,
        "typeAnnotation": null,
        "start": 4251,
        "end": 4254
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
              "start": 4255,
              "end": 4256
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4255,
            "end": 4256
          }
        ],
        "start": 4254,
        "end": 4257
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
            "start": 4260,
            "end": 4261
          },
          "typeArguments": null,
          "start": 4260,
          "end": 4261
        },
        "extendsType": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 4273,
            "end": 4274
          },
          "constraint": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4284,
                  "end": 4285
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 4284,
                "end": 4285
              },
              "start": 4278,
              "end": 4285
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
                  "start": 4300,
                  "end": 4301
                },
                "typeArguments": null,
                "start": 4300,
                "end": 4301
              },
              "start": 4294,
              "end": 4301
            },
            "trueType": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 4304,
                "end": 4305
              },
              "start": 4304,
              "end": 4305
            },
            "falseType": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 4308,
                "end": 4309
              },
              "start": 4308,
              "end": 4309
            },
            "start": 4278,
            "end": 4309
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 4312,
              "end": 4313
            },
            "start": 4312,
            "end": 4313
          },
          "optional": false,
          "readonly": null,
          "start": 4270,
          "end": 4316
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 4319,
            "end": 4320
          },
          "start": 4319,
          "end": 4320
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 4323,
            "end": 4324
          },
          "start": 4323,
          "end": 4324
        },
        "start": 4260,
        "end": 4324
      },
      "declare": false,
      "start": 4246,
      "end": 4325
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X16",
        "optional": false,
        "typeAnnotation": null,
        "start": 4360,
        "end": 4363
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
              "start": 4364,
              "end": 4365
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4364,
            "end": 4365
          }
        ],
        "start": 4363,
        "end": 4366
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
            "start": 4369,
            "end": 4370
          },
          "typeArguments": null,
          "start": 4369,
          "end": 4370
        },
        "extendsType": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 4382,
            "end": 4383
          },
          "constraint": {
            "type": "TSInferType",
            "typeParameter": {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 4393,
                "end": 4394
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
                    "start": 4409,
                    "end": 4410
                  },
                  "typeArguments": null,
                  "start": 4409,
                  "end": 4410
                },
                "start": 4403,
                "end": 4410
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 4393,
              "end": 4410
            },
            "start": 4387,
            "end": 4410
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 4413,
              "end": 4414
            },
            "start": 4413,
            "end": 4414
          },
          "optional": false,
          "readonly": null,
          "start": 4379,
          "end": 4417
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 4420,
            "end": 4421
          },
          "start": 4420,
          "end": 4421
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 4424,
            "end": 4425
          },
          "start": 4424,
          "end": 4425
        },
        "start": 4369,
        "end": 4425
      },
      "declare": false,
      "start": 4355,
      "end": 4426
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X17",
        "optional": false,
        "typeAnnotation": null,
        "start": 4484,
        "end": 4487
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
              "start": 4488,
              "end": 4489
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4488,
            "end": 4489
          }
        ],
        "start": 4487,
        "end": 4490
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
            "start": 4493,
            "end": 4494
          },
          "typeArguments": null,
          "start": 4493,
          "end": 4494
        },
        "extendsType": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 4506,
            "end": 4507
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
                "start": 4517,
                "end": 4518
              },
              "typeArguments": null,
              "start": 4517,
              "end": 4518
            },
            "start": 4511,
            "end": 4518
          },
          "nameType": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4528,
                  "end": 4529
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 4528,
                "end": 4529
              },
              "start": 4522,
              "end": 4529
            },
            "extendsType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 4538,
                "end": 4539
              },
              "typeArguments": null,
              "start": 4538,
              "end": 4539
            },
            "trueType": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 4542,
                "end": 4543
              },
              "start": 4542,
              "end": 4543
            },
            "falseType": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 4546,
                "end": 4547
              },
              "start": 4546,
              "end": 4547
            },
            "start": 4522,
            "end": 4547
          },
          "typeAnnotation": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 4550,
              "end": 4551
            },
            "start": 4550,
            "end": 4551
          },
          "optional": false,
          "readonly": null,
          "start": 4503,
          "end": 4554
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 4557,
            "end": 4558
          },
          "start": 4557,
          "end": 4558
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 4561,
            "end": 4562
          },
          "start": 4561,
          "end": 4562
        },
        "start": 4493,
        "end": 4562
      },
      "declare": false,
      "start": 4479,
      "end": 4563
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X18",
        "optional": false,
        "typeAnnotation": null,
        "start": 4598,
        "end": 4601
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
              "start": 4602,
              "end": 4603
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4602,
            "end": 4603
          }
        ],
        "start": 4601,
        "end": 4604
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
            "start": 4607,
            "end": 4608
          },
          "typeArguments": null,
          "start": 4607,
          "end": 4608
        },
        "extendsType": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 4620,
            "end": 4621
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
                "start": 4631,
                "end": 4632
              },
              "typeArguments": null,
              "start": 4631,
              "end": 4632
            },
            "start": 4625,
            "end": 4632
          },
          "nameType": {
            "type": "TSInferType",
            "typeParameter": {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 4642,
                "end": 4643
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4652,
                  "end": 4653
                },
                "typeArguments": null,
                "start": 4652,
                "end": 4653
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 4642,
              "end": 4653
            },
            "start": 4636,
            "end": 4653
          },
          "typeAnnotation": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 4656,
              "end": 4657
            },
            "start": 4656,
            "end": 4657
          },
          "optional": false,
          "readonly": null,
          "start": 4617,
          "end": 4660
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 4663,
            "end": 4664
          },
          "start": 4663,
          "end": 4664
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 4667,
            "end": 4668
          },
          "start": 4667,
          "end": 4668
        },
        "start": 4607,
        "end": 4668
      },
      "declare": false,
      "start": 4593,
      "end": 4669
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X19",
        "optional": false,
        "typeAnnotation": null,
        "start": 4728,
        "end": 4731
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
              "start": 4732,
              "end": 4733
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 4742,
                  "end": 4748
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 4751,
                  "end": 4757
                }
              ],
              "start": 4742,
              "end": 4757
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4732,
            "end": 4757
          }
        ],
        "start": 4731,
        "end": 4758
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
            "start": 4761,
            "end": 4762
          },
          "typeArguments": null,
          "start": 4761,
          "end": 4762
        },
        "extendsType": {
          "type": "TSInferType",
          "typeParameter": {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 4778,
              "end": 4779
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 4788,
              "end": 4794
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4778,
            "end": 4794
          },
          "start": 4772,
          "end": 4794
        },
        "trueType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 4799,
                "end": 4800
              },
              "typeArguments": null,
              "start": 4799,
              "end": 4800
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 4802,
                "end": 4803
              },
              "typeArguments": null,
              "start": 4802,
              "end": 4803
            }
          ],
          "start": 4798,
          "end": 4804
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 4807,
          "end": 4812
        },
        "start": 4761,
        "end": 4812
      },
      "declare": false,
      "start": 4723,
      "end": 4813
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X19_T1",
        "optional": false,
        "typeAnnotation": null,
        "start": 4819,
        "end": 4825
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X19",
          "optional": false,
          "typeAnnotation": null,
          "start": 4828,
          "end": 4831
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
                "start": 4832,
                "end": 4835
              },
              "start": 4832,
              "end": 4835
            }
          ],
          "start": 4831,
          "end": 4836
        },
        "start": 4828,
        "end": 4836
      },
      "declare": false,
      "start": 4814,
      "end": 4837
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X19_T2",
        "optional": false,
        "typeAnnotation": null,
        "start": 4852,
        "end": 4858
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X19",
          "optional": false,
          "typeAnnotation": null,
          "start": 4861,
          "end": 4864
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
                "start": 4865,
                "end": 4866
              },
              "start": 4865,
              "end": 4866
            }
          ],
          "start": 4864,
          "end": 4867
        },
        "start": 4861,
        "end": 4867
      },
      "declare": false,
      "start": 4847,
      "end": 4868
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X19_T3",
        "optional": false,
        "typeAnnotation": null,
        "start": 4884,
        "end": 4890
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X19",
          "optional": false,
          "typeAnnotation": null,
          "start": 4893,
          "end": 4896
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
                    "value": 1,
                    "raw": "1",
                    "start": 4897,
                    "end": 4898
                  },
                  "start": 4897,
                  "end": 4898
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "a",
                    "raw": "\"a\"",
                    "start": 4901,
                    "end": 4904
                  },
                  "start": 4901,
                  "end": 4904
                }
              ],
              "start": 4897,
              "end": 4904
            }
          ],
          "start": 4896,
          "end": 4905
        },
        "start": 4893,
        "end": 4905
      },
      "declare": false,
      "start": 4879,
      "end": 4906
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X20",
        "optional": false,
        "typeAnnotation": null,
        "start": 4923,
        "end": 4926
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
              "start": 4927,
              "end": 4928
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4927,
            "end": 4928
          }
        ],
        "start": 4926,
        "end": 4929
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
            "start": 4932,
            "end": 4933
          },
          "typeArguments": null,
          "start": 4932,
          "end": 4933
        },
        "extendsType": {
          "type": "TSInferType",
          "typeParameter": {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 4949,
              "end": 4950
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 4959,
              "end": 4965
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4949,
            "end": 4965
          },
          "start": 4943,
          "end": 4965
        },
        "trueType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 4969,
              "end": 4970
            },
            "typeArguments": null,
            "start": 4969,
            "end": 4970
          },
          "extendsType": {
            "type": "TSInferType",
            "typeParameter": {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null,
                "start": 4986,
                "end": 4987
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4996,
                  "end": 4997
                },
                "typeArguments": null,
                "start": 4996,
                "end": 4997
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 4986,
              "end": 4997
            },
            "start": 4980,
            "end": 4997
          },
          "trueType": {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5002,
                  "end": 5003
                },
                "typeArguments": null,
                "start": 5002,
                "end": 5003
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5005,
                  "end": 5006
                },
                "typeArguments": null,
                "start": 5005,
                "end": 5006
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5008,
                  "end": 5009
                },
                "typeArguments": null,
                "start": 5008,
                "end": 5009
              }
            ],
            "start": 5001,
            "end": 5010
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 5013,
            "end": 5018
          },
          "start": 4969,
          "end": 5018
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 5021,
          "end": 5026
        },
        "start": 4932,
        "end": 5026
      },
      "declare": false,
      "start": 4918,
      "end": 5027
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X20_T1",
        "optional": false,
        "typeAnnotation": null,
        "start": 5033,
        "end": 5039
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X20",
          "optional": false,
          "typeAnnotation": null,
          "start": 5042,
          "end": 5045
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
                    "value": 1,
                    "raw": "1",
                    "start": 5046,
                    "end": 5047
                  },
                  "start": 5046,
                  "end": 5047
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "a",
                    "raw": "\"a\"",
                    "start": 5050,
                    "end": 5053
                  },
                  "start": 5050,
                  "end": 5053
                }
              ],
              "start": 5046,
              "end": 5053
            }
          ],
          "start": 5045,
          "end": 5054
        },
        "start": 5042,
        "end": 5054
      },
      "declare": false,
      "start": 5028,
      "end": 5055
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X21",
        "optional": false,
        "typeAnnotation": null,
        "start": 5075,
        "end": 5078
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
              "start": 5079,
              "end": 5080
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5079,
            "end": 5080
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 5082,
              "end": 5083
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 5092,
              "end": 5098
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5082,
            "end": 5098
          }
        ],
        "start": 5078,
        "end": 5099
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
            "start": 5102,
            "end": 5103
          },
          "typeArguments": null,
          "start": 5102,
          "end": 5103
        },
        "extendsType": {
          "type": "TSInferType",
          "typeParameter": {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 5119,
              "end": 5120
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "N",
                "optional": false,
                "typeAnnotation": null,
                "start": 5129,
                "end": 5130
              },
              "typeArguments": null,
              "start": 5129,
              "end": 5130
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5119,
            "end": 5130
          },
          "start": 5113,
          "end": 5130
        },
        "trueType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 5135,
                "end": 5136
              },
              "typeArguments": null,
              "start": 5135,
              "end": 5136
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 5138,
                "end": 5139
              },
              "typeArguments": null,
              "start": 5138,
              "end": 5139
            }
          ],
          "start": 5134,
          "end": 5140
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 5143,
          "end": 5148
        },
        "start": 5102,
        "end": 5148
      },
      "declare": false,
      "start": 5070,
      "end": 5149
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X21_T1",
        "optional": false,
        "typeAnnotation": null,
        "start": 5155,
        "end": 5161
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X21",
          "optional": false,
          "typeAnnotation": null,
          "start": 5164,
          "end": 5167
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
                "start": 5168,
                "end": 5169
              },
              "start": 5168,
              "end": 5169
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 5171,
                "end": 5172
              },
              "start": 5171,
              "end": 5172
            }
          ],
          "start": 5167,
          "end": 5173
        },
        "start": 5164,
        "end": 5173
      },
      "declare": false,
      "start": 5150,
      "end": 5174
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X21_T2",
        "optional": false,
        "typeAnnotation": null,
        "start": 5190,
        "end": 5196
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X21",
          "optional": false,
          "typeAnnotation": null,
          "start": 5199,
          "end": 5202
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
                    "value": 1,
                    "raw": "1",
                    "start": 5203,
                    "end": 5204
                  },
                  "start": 5203,
                  "end": 5204
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "a",
                    "raw": "\"a\"",
                    "start": 5207,
                    "end": 5210
                  },
                  "start": 5207,
                  "end": 5210
                }
              ],
              "start": 5203,
              "end": 5210
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 5212,
                "end": 5213
              },
              "start": 5212,
              "end": 5213
            }
          ],
          "start": 5202,
          "end": 5214
        },
        "start": 5199,
        "end": 5214
      },
      "declare": false,
      "start": 5185,
      "end": 5215
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X21_T3",
        "optional": false,
        "typeAnnotation": null,
        "start": 5231,
        "end": 5237
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X21",
          "optional": false,
          "typeAnnotation": null,
          "start": 5240,
          "end": 5243
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
                    "value": 1,
                    "raw": "1",
                    "start": 5244,
                    "end": 5245
                  },
                  "start": 5244,
                  "end": 5245
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 5248,
                    "end": 5249
                  },
                  "start": 5248,
                  "end": 5249
                }
              ],
              "start": 5244,
              "end": 5249
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 5251,
                "end": 5252
              },
              "start": 5251,
              "end": 5252
            }
          ],
          "start": 5243,
          "end": 5253
        },
        "start": 5240,
        "end": 5253
      },
      "declare": false,
      "start": 5226,
      "end": 5254
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X21_T4",
        "optional": false,
        "typeAnnotation": null,
        "start": 5270,
        "end": 5276
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X21",
          "optional": false,
          "typeAnnotation": null,
          "start": 5279,
          "end": 5282
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
                    "value": 1,
                    "raw": "1",
                    "start": 5283,
                    "end": 5284
                  },
                  "start": 5283,
                  "end": 5284
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 5287,
                    "end": 5288
                  },
                  "start": 5287,
                  "end": 5288
                }
              ],
              "start": 5283,
              "end": 5288
            },
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 5290,
                    "end": 5291
                  },
                  "start": 5290,
                  "end": 5291
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 5294,
                    "end": 5295
                  },
                  "start": 5294,
                  "end": 5295
                }
              ],
              "start": 5290,
              "end": 5295
            }
          ],
          "start": 5282,
          "end": 5296
        },
        "start": 5279,
        "end": 5296
      },
      "declare": false,
      "start": 5265,
      "end": 5297
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X21_T5",
        "optional": false,
        "typeAnnotation": null,
        "start": 5313,
        "end": 5319
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X21",
          "optional": false,
          "typeAnnotation": null,
          "start": 5322,
          "end": 5325
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
                    "value": 1,
                    "raw": "1",
                    "start": 5326,
                    "end": 5327
                  },
                  "start": 5326,
                  "end": 5327
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 5330,
                    "end": 5331
                  },
                  "start": 5330,
                  "end": 5331
                }
              ],
              "start": 5326,
              "end": 5331
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 5333,
                "end": 5334
              },
              "start": 5333,
              "end": 5334
            }
          ],
          "start": 5325,
          "end": 5335
        },
        "start": 5322,
        "end": 5335
      },
      "declare": false,
      "start": 5308,
      "end": 5336
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IfEquals",
        "optional": false,
        "typeAnnotation": null,
        "start": 5369,
        "end": 5377
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null,
              "start": 5378,
              "end": 5379
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5378,
            "end": 5379
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Y",
              "optional": false,
              "typeAnnotation": null,
              "start": 5381,
              "end": 5382
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5381,
            "end": 5382
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 5384,
              "end": 5385
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5384,
            "end": 5385
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 5387,
              "end": 5388
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5387,
            "end": 5388
          }
        ],
        "start": 5377,
        "end": 5389
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSFunctionType",
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
                  "start": 5394,
                  "end": 5395
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 5394,
                "end": 5395
              }
            ],
            "start": 5393,
            "end": 5396
          },
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
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
                  "start": 5402,
                  "end": 5403
                },
                "typeArguments": null,
                "start": 5402,
                "end": 5403
              },
              "extendsType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5412,
                  "end": 5413
                },
                "typeArguments": null,
                "start": 5412,
                "end": 5413
              },
              "trueType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 5416,
                  "end": 5417
                },
                "start": 5416,
                "end": 5417
              },
              "falseType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 5420,
                  "end": 5421
                },
                "start": 5420,
                "end": 5421
              },
              "start": 5402,
              "end": 5421
            },
            "start": 5399,
            "end": 5421
          },
          "start": 5393,
          "end": 5421
        },
        "extendsType": {
          "type": "TSFunctionType",
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
                  "start": 5432,
                  "end": 5433
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 5432,
                "end": 5433
              }
            ],
            "start": 5431,
            "end": 5434
          },
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
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
                  "start": 5440,
                  "end": 5441
                },
                "typeArguments": null,
                "start": 5440,
                "end": 5441
              },
              "extendsType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5450,
                  "end": 5451
                },
                "typeArguments": null,
                "start": 5450,
                "end": 5451
              },
              "trueType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 5454,
                  "end": 5455
                },
                "start": 5454,
                "end": 5455
              },
              "falseType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 5458,
                  "end": 5459
                },
                "start": 5458,
                "end": 5459
              },
              "start": 5440,
              "end": 5459
            },
            "start": 5437,
            "end": 5459
          },
          "start": 5431,
          "end": 5459
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 5462,
            "end": 5463
          },
          "typeArguments": null,
          "start": 5462,
          "end": 5463
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null,
            "start": 5466,
            "end": 5467
          },
          "typeArguments": null,
          "start": 5466,
          "end": 5467
        },
        "start": 5392,
        "end": 5467
      },
      "declare": false,
      "start": 5364,
      "end": 5468
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 5489,
                        "end": 5490
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 5489,
                      "end": 5490
                    }
                  ],
                  "start": 5488,
                  "end": 5491
                },
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
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
                        "start": 5498,
                        "end": 5499
                      },
                      "typeArguments": null,
                      "start": 5498,
                      "end": 5499
                    },
                    "extendsType": {
                      "type": "TSInferType",
                      "typeParameter": {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5514,
                          "end": 5515
                        },
                        "constraint": {
                          "type": "TSNumberKeyword",
                          "start": 5524,
                          "end": 5530
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 5514,
                        "end": 5530
                      },
                      "start": 5508,
                      "end": 5530
                    },
                    "trueType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 5533,
                        "end": 5534
                      },
                      "start": 5533,
                      "end": 5534
                    },
                    "falseType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 5537,
                        "end": 5538
                      },
                      "start": 5537,
                      "end": 5538
                    },
                    "start": 5498,
                    "end": 5538
                  },
                  "start": 5494,
                  "end": 5539
                },
                "start": 5488,
                "end": 5539
              },
              "start": 5486,
              "end": 5539
            },
            "start": 5484,
            "end": 5539
          },
          "init": null,
          "definite": false,
          "start": 5484,
          "end": 5539
        }
      ],
      "declare": true,
      "start": 5470,
      "end": 5540
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 5550,
        "end": 5552
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x1",
              "optional": false,
              "typeAnnotation": null,
              "start": 5568,
              "end": 5570
            },
            "start": 5561,
            "end": 5571
          }
        ],
        "start": 5555,
        "end": 5573
      },
      "expression": false,
      "start": 5541,
      "end": 5573
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExpectNumber",
        "optional": false,
        "typeAnnotation": null,
        "start": 5580,
        "end": 5592
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
              "start": 5593,
              "end": 5594
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 5603,
              "end": 5609
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5593,
            "end": 5609
          }
        ],
        "start": 5592,
        "end": 5610
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "T",
          "optional": false,
          "typeAnnotation": null,
          "start": 5613,
          "end": 5614
        },
        "typeArguments": null,
        "start": 5613,
        "end": 5614
      },
      "declare": false,
      "start": 5575,
      "end": 5615
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 5635,
                        "end": 5636
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 5635,
                      "end": 5636
                    }
                  ],
                  "start": 5634,
                  "end": 5637
                },
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
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
                        "start": 5644,
                        "end": 5645
                      },
                      "typeArguments": null,
                      "start": 5644,
                      "end": 5645
                    },
                    "extendsType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ExpectNumber",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5654,
                        "end": 5666
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
                                "start": 5673,
                                "end": 5674
                              },
                              "constraint": null,
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false,
                              "start": 5673,
                              "end": 5674
                            },
                            "start": 5667,
                            "end": 5674
                          }
                        ],
                        "start": 5666,
                        "end": 5675
                      },
                      "start": 5654,
                      "end": 5675
                    },
                    "trueType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 5678,
                        "end": 5679
                      },
                      "start": 5678,
                      "end": 5679
                    },
                    "falseType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 5682,
                        "end": 5683
                      },
                      "start": 5682,
                      "end": 5683
                    },
                    "start": 5644,
                    "end": 5683
                  },
                  "start": 5640,
                  "end": 5684
                },
                "start": 5634,
                "end": 5684
              },
              "start": 5632,
              "end": 5684
            },
            "start": 5630,
            "end": 5684
          },
          "init": null,
          "definite": false,
          "start": 5630,
          "end": 5684
        }
      ],
      "declare": true,
      "start": 5616,
      "end": 5685
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 5695,
        "end": 5697
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x2",
              "optional": false,
              "typeAnnotation": null,
              "start": 5713,
              "end": 5715
            },
            "start": 5706,
            "end": 5716
          }
        ],
        "start": 5700,
        "end": 5718
      },
      "expression": false,
      "start": 5686,
      "end": 5718
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 26,
  "end": 5718
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 26,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "X1",
    "start": 31,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 34,
    "end": 35
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 36,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 44,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 57,
    "end": 58
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 59,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 68,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 74,
    "end": 75
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 76,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 84,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 94,
    "end": 95
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 95,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 105,
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
    "value": ":",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 114,
    "end": 115
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 116,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 124,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 125,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 131,
    "end": 132
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 133,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 141,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 151,
    "end": 152
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 152,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 160,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 171,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 176,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 179,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "X1_T1",
    "start": 184,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 190,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "X1",
    "start": 192,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 195,
    "end": 196
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 196,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 222,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "X1_T2",
    "start": 227,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 233,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "X1",
    "start": 235,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 238,
    "end": 239
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 261,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "X1_T3",
    "start": 266,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 272,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "X1",
    "start": 274,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 277,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 278,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 286,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 319,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "X2",
    "start": 324,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 326,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 327,
    "end": 328
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 329,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 338,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 341,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 345,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 347,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 354,
    "end": 356
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 357,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 363,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 369,
    "end": 370
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 371,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 379,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "value": "infer",
    "start": 383,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 389,
    "end": 390
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 391,
    "end": 398
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 399,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 407,
    "end": 409
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 410,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 417,
    "end": 418
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 418,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 426,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 429,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 431,
    "end": 432
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 437,
    "end": 438
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 439,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 447,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 449,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 451,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 457,
    "end": 458
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 459,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 467,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 473,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 475,
    "end": 477
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 478,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 485,
    "end": 486
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 486,
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
    "value": "U",
    "start": 496,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 497,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 499,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 505,
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
    "start": 513,
    "end": 517
  },
  {
    "type": "Identifier",
    "value": "X2_T1",
    "start": 518,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 524,
    "end": 525
  },
  {
    "type": "Identifier",
    "value": "X2",
    "start": 526,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 529,
    "end": 530
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 530,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 531,
    "end": 532
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 533,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 536,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 538,
    "end": 540
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 541,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 545,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 546,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 567,
    "end": 571
  },
  {
    "type": "Identifier",
    "value": "X2_T2",
    "start": 572,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 578,
    "end": 579
  },
  {
    "type": "Identifier",
    "value": "X2",
    "start": 580,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 582,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 583,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 584,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 585,
    "end": 586
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 588,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 590,
    "end": 592
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 593,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 597,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 598,
    "end": 599
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 617,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "X2_T3",
    "start": 622,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 628,
    "end": 629
  },
  {
    "type": "Identifier",
    "value": "X2",
    "start": 630,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 632,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 633,
    "end": 634
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 634,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 635,
    "end": 636
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 637,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 643,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 645,
    "end": 647
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 648,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 652,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 653,
    "end": 654
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 689,
    "end": 693
  },
  {
    "type": "Identifier",
    "value": "X3",
    "start": 694,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 696,
    "end": 697
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 697,
    "end": 698
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 699,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 707,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 708,
    "end": 711
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 711,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 715,
    "end": 716
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 717,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 720,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 721,
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
    "value": "=>",
    "start": 724,
    "end": 726
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 727,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 730,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 732,
    "end": 733
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 738,
    "end": 739
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 740,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 748,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 749,
    "end": 752
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 752,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 756,
    "end": 757
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 758,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 761,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 762,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 763,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 765,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 768,
    "end": 769
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 769,
    "end": 774
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 775,
    "end": 776
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 777,
    "end": 784
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 785,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 791,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 793,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 795,
    "end": 796
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 796,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 804,
    "end": 805
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 806,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 807,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 809,
    "end": 810
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 815,
    "end": 816
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 817,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 825,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 826,
    "end": 829
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 829,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 833,
    "end": 834
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 835,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 838,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 839,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 840,
    "end": 841
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 842,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 845,
    "end": 846
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 846,
    "end": 851
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 852,
    "end": 853
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 854,
    "end": 861
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 862,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 868,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 870,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 872,
    "end": 873
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 873,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 881,
    "end": 882
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 883,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 884,
    "end": 885
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 886,
    "end": 887
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 892,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 897,
    "end": 898
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 900,
    "end": 904
  },
  {
    "type": "Identifier",
    "value": "X3_T1",
    "start": 905,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 911,
    "end": 912
  },
  {
    "type": "Identifier",
    "value": "X3",
    "start": 913,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 915,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 916,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 917,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 919,
    "end": 921
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 922,
    "end": 925
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 925,
    "end": 926
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 926,
    "end": 927
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 947,
    "end": 951
  },
  {
    "type": "Identifier",
    "value": "X3_T2",
    "start": 952,
    "end": 957
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 958,
    "end": 959
  },
  {
    "type": "Identifier",
    "value": "X3",
    "start": 960,
    "end": 962
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 962,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 963,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 964,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 966,
    "end": 968
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 969,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 970,
    "end": 971
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 971,
    "end": 972
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 990,
    "end": 994
  },
  {
    "type": "Identifier",
    "value": "X3_T3",
    "start": 995,
    "end": 1000
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1001,
    "end": 1002
  },
  {
    "type": "Identifier",
    "value": "X3",
    "start": 1003,
    "end": 1005
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1009,
    "end": 1011
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 1012,
    "end": 1018
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1057,
    "end": 1061
  },
  {
    "type": "Identifier",
    "value": "X4",
    "start": 1062,
    "end": 1064
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1065,
    "end": 1066
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1067,
    "end": 1074
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1075,
    "end": 1078
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1080,
    "end": 1083
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 1083,
    "end": 1087
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1087,
    "end": 1088
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1089,
    "end": 1092
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1092,
    "end": 1093
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1094,
    "end": 1095
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1096,
    "end": 1098
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1099,
    "end": 1102
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1102,
    "end": 1103
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1110,
    "end": 1111
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1112,
    "end": 1119
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1120,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1125,
    "end": 1128
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 1128,
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
    "value": "any",
    "start": 1134,
    "end": 1137
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1138,
    "end": 1139
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1139,
    "end": 1140
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1141,
    "end": 1143
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1144,
    "end": 1145
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 1145,
    "end": 1150
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1151,
    "end": 1152
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1153,
    "end": 1160
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1161,
    "end": 1162
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1163,
    "end": 1164
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1164,
    "end": 1165
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1166,
    "end": 1172
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1173,
    "end": 1174
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1174,
    "end": 1175
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1176,
    "end": 1177
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1179,
    "end": 1187
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1187,
    "end": 1188
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1189,
    "end": 1190
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1190,
    "end": 1191
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1192,
    "end": 1193
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1200,
    "end": 1207
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1208,
    "end": 1211
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1212,
    "end": 1213
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1213,
    "end": 1216
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 1216,
    "end": 1220
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1222,
    "end": 1225
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1225,
    "end": 1226
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1226,
    "end": 1227
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1227,
    "end": 1228
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1229,
    "end": 1231
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1232,
    "end": 1233
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 1233,
    "end": 1238
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1239,
    "end": 1240
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1241,
    "end": 1248
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1249,
    "end": 1250
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
    "type": "Identifier",
    "value": "number",
    "start": 1254,
    "end": 1260
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1261,
    "end": 1262
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1262,
    "end": 1263
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1264,
    "end": 1265
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 1267,
    "end": 1275
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1275,
    "end": 1276
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1277,
    "end": 1278
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1278,
    "end": 1279
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1280,
    "end": 1281
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1286,
    "end": 1291
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1291,
    "end": 1292
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1294,
    "end": 1298
  },
  {
    "type": "Identifier",
    "value": "X4_T1",
    "start": 1299,
    "end": 1304
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1305,
    "end": 1306
  },
  {
    "type": "Identifier",
    "value": "X4",
    "start": 1307,
    "end": 1309
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1309,
    "end": 1310
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1310,
    "end": 1313
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1314,
    "end": 1315
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1315,
    "end": 1316
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1317,
    "end": 1319
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1320,
    "end": 1321
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1322,
    "end": 1323
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1323,
    "end": 1324
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 1325,
    "end": 1328
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1329,
    "end": 1330
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1330,
    "end": 1331
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1331,
    "end": 1332
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1359,
    "end": 1363
  },
  {
    "type": "Identifier",
    "value": "X4_T2",
    "start": 1364,
    "end": 1369
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1370,
    "end": 1371
  },
  {
    "type": "Identifier",
    "value": "X4",
    "start": 1372,
    "end": 1374
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1374,
    "end": 1375
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1375,
    "end": 1378
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1379,
    "end": 1380
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1380,
    "end": 1381
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1382,
    "end": 1384
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1385,
    "end": 1386
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1387,
    "end": 1388
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1388,
    "end": 1389
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1390,
    "end": 1391
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1392,
    "end": 1393
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1393,
    "end": 1394
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1394,
    "end": 1395
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1420,
    "end": 1424
  },
  {
    "type": "Identifier",
    "value": "X4_T3",
    "start": 1425,
    "end": 1430
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1431,
    "end": 1432
  },
  {
    "type": "Identifier",
    "value": "X4",
    "start": 1433,
    "end": 1435
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1435,
    "end": 1436
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1436,
    "end": 1439
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1440,
    "end": 1441
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1441,
    "end": 1442
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1443,
    "end": 1445
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1446,
    "end": 1447
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1448,
    "end": 1449
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1449,
    "end": 1450
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 1451,
    "end": 1457
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1458,
    "end": 1459
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1459,
    "end": 1460
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1460,
    "end": 1461
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1498,
    "end": 1502
  },
  {
    "type": "Identifier",
    "value": "X5",
    "start": 1503,
    "end": 1505
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1505,
    "end": 1506
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1506,
    "end": 1507
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1507,
    "end": 1508
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1509,
    "end": 1510
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1515,
    "end": 1516
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1517,
    "end": 1524
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1525,
    "end": 1532
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1532,
    "end": 1533
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 1533,
    "end": 1538
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1539,
    "end": 1540
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1541,
    "end": 1548
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1549,
    "end": 1555
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1555,
    "end": 1556
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1557,
    "end": 1558
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1559,
    "end": 1560
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1560,
    "end": 1568
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1568,
    "end": 1569
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1570,
    "end": 1571
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1571,
    "end": 1572
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1573,
    "end": 1574
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1579,
    "end": 1580
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1581,
    "end": 1588
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1589,
    "end": 1596
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1596,
    "end": 1597
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 1597,
    "end": 1602
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1603,
    "end": 1604
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1605,
    "end": 1612
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1613,
    "end": 1619
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1619,
    "end": 1620
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1621,
    "end": 1622
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1623,
    "end": 1624
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 1624,
    "end": 1632
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1632,
    "end": 1633
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1634,
    "end": 1635
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1635,
    "end": 1636
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1637,
    "end": 1638
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1643,
    "end": 1648
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1648,
    "end": 1649
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1651,
    "end": 1655
  },
  {
    "type": "Identifier",
    "value": "X5_T1",
    "start": 1656,
    "end": 1661
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1662,
    "end": 1663
  },
  {
    "type": "Identifier",
    "value": "X5",
    "start": 1664,
    "end": 1666
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1666,
    "end": 1667
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1667,
    "end": 1674
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1674,
    "end": 1675
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 1675,
    "end": 1678
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1679,
    "end": 1680
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 1681,
    "end": 1684
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1684,
    "end": 1685
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Identifier",
    "value": "type",
    "start": 1713,
    "end": 1717
  },
  {
    "type": "Identifier",
    "value": "X5_T2",
    "start": 1718,
    "end": 1723
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1724,
    "end": 1725
  },
  {
    "type": "Identifier",
    "value": "X5",
    "start": 1726,
    "end": 1728
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1728,
    "end": 1729
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1729,
    "end": 1736
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1736,
    "end": 1737
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1737,
    "end": 1738
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1739,
    "end": 1740
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1741,
    "end": 1742
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": ";",
    "start": 1744,
    "end": 1745
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1767,
    "end": 1771
  },
  {
    "type": "Identifier",
    "value": "X5_T3",
    "start": 1772,
    "end": 1777
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1778,
    "end": 1779
  },
  {
    "type": "Identifier",
    "value": "X5",
    "start": 1780,
    "end": 1782
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1782,
    "end": 1783
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1783,
    "end": 1790
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1790,
    "end": 1791
  },
  {
    "type": "Numeric",
    "value": "1n",
    "start": 1791,
    "end": 1793
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1794,
    "end": 1795
  },
  {
    "type": "Numeric",
    "value": "2n",
    "start": 1796,
    "end": 1798
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1798,
    "end": 1799
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1799,
    "end": 1800
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1800,
    "end": 1801
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1838,
    "end": 1842
  },
  {
    "type": "Identifier",
    "value": "X6",
    "start": 1843,
    "end": 1845
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1845,
    "end": 1846
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1846,
    "end": 1847
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1847,
    "end": 1848
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1849,
    "end": 1850
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1855,
    "end": 1856
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1857,
    "end": 1864
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1865,
    "end": 1866
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1867,
    "end": 1868
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1868,
    "end": 1869
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 1870,
    "end": 1875
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1876,
    "end": 1877
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1878,
    "end": 1885
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1886,
    "end": 1892
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1893,
    "end": 1894
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1895,
    "end": 1896
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1897,
    "end": 1898
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1898,
    "end": 1906
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1906,
    "end": 1907
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1908,
    "end": 1909
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1909,
    "end": 1910
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1911,
    "end": 1912
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1917,
    "end": 1918
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1919,
    "end": 1926
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1927,
    "end": 1928
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1929,
    "end": 1930
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1930,
    "end": 1931
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 1932,
    "end": 1937
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1938,
    "end": 1939
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1940,
    "end": 1947
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1948,
    "end": 1954
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1955,
    "end": 1956
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1957,
    "end": 1958
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1959,
    "end": 1960
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 1960,
    "end": 1968
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1968,
    "end": 1969
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1970,
    "end": 1971
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1971,
    "end": 1972
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1973,
    "end": 1974
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1979,
    "end": 1984
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1984,
    "end": 1985
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1987,
    "end": 1991
  },
  {
    "type": "Identifier",
    "value": "X6_T1",
    "start": 1992,
    "end": 1997
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1998,
    "end": 1999
  },
  {
    "type": "Identifier",
    "value": "X6",
    "start": 2000,
    "end": 2002
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2002,
    "end": 2003
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2003,
    "end": 2004
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2005,
    "end": 2006
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2006,
    "end": 2007
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 2008,
    "end": 2011
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2012,
    "end": 2013
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2013,
    "end": 2014
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2014,
    "end": 2015
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2035,
    "end": 2039
  },
  {
    "type": "Identifier",
    "value": "X6_T2",
    "start": 2040,
    "end": 2045
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2046,
    "end": 2047
  },
  {
    "type": "Identifier",
    "value": "X6",
    "start": 2048,
    "end": 2050
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2050,
    "end": 2051
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2051,
    "end": 2052
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2053,
    "end": 2054
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2054,
    "end": 2055
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2056,
    "end": 2057
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2058,
    "end": 2059
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2059,
    "end": 2060
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2060,
    "end": 2061
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2079,
    "end": 2083
  },
  {
    "type": "Identifier",
    "value": "X6_T3",
    "start": 2084,
    "end": 2089
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2090,
    "end": 2091
  },
  {
    "type": "Identifier",
    "value": "X6",
    "start": 2092,
    "end": 2094
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2094,
    "end": 2095
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2095,
    "end": 2096
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2097,
    "end": 2098
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2098,
    "end": 2099
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 2100,
    "end": 2106
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2107,
    "end": 2108
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2108,
    "end": 2109
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2109,
    "end": 2110
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2157,
    "end": 2161
  },
  {
    "type": "Identifier",
    "value": "X7",
    "start": 2162,
    "end": 2164
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2164,
    "end": 2165
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2165,
    "end": 2166
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2166,
    "end": 2167
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2168,
    "end": 2169
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2174,
    "end": 2175
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2176,
    "end": 2183
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2184,
    "end": 2185
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2186,
    "end": 2187
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2187,
    "end": 2188
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 2189,
    "end": 2194
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2195,
    "end": 2196
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2197,
    "end": 2204
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2205,
    "end": 2211
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2211,
    "end": 2212
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2213,
    "end": 2214
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2214,
    "end": 2215
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 2216,
    "end": 2221
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2222,
    "end": 2223
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2224,
    "end": 2231
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2232,
    "end": 2238
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2239,
    "end": 2240
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2241,
    "end": 2242
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2243,
    "end": 2244
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 2244,
    "end": 2252
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2252,
    "end": 2253
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2254,
    "end": 2255
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2255,
    "end": 2256
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2257,
    "end": 2258
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2263,
    "end": 2264
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2265,
    "end": 2272
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2273,
    "end": 2274
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2275,
    "end": 2276
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2276,
    "end": 2277
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 2278,
    "end": 2283
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2284,
    "end": 2285
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2286,
    "end": 2293
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2294,
    "end": 2300
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2300,
    "end": 2301
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "type": "Identifier",
    "value": "infer",
    "start": 2305,
    "end": 2310
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2311,
    "end": 2312
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2313,
    "end": 2320
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2321,
    "end": 2327
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2328,
    "end": 2329
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2330,
    "end": 2331
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2332,
    "end": 2333
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 2333,
    "end": 2341
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2341,
    "end": 2342
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2343,
    "end": 2344
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2344,
    "end": 2345
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2346,
    "end": 2347
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2352,
    "end": 2357
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2357,
    "end": 2358
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2360,
    "end": 2364
  },
  {
    "type": "Identifier",
    "value": "X7_T1",
    "start": 2365,
    "end": 2370
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2371,
    "end": 2372
  },
  {
    "type": "Identifier",
    "value": "X7",
    "start": 2373,
    "end": 2375
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2375,
    "end": 2376
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2376,
    "end": 2377
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2378,
    "end": 2379
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2379,
    "end": 2380
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 2381,
    "end": 2384
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2384,
    "end": 2385
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2386,
    "end": 2387
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2387,
    "end": 2388
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 2389,
    "end": 2392
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2393,
    "end": 2394
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2394,
    "end": 2395
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2395,
    "end": 2396
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2422,
    "end": 2426
  },
  {
    "type": "Identifier",
    "value": "X7_T2",
    "start": 2427,
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
    "value": "X7",
    "start": 2435,
    "end": 2437
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2437,
    "end": 2438
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2438,
    "end": 2439
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "type": "Numeric",
    "value": "1",
    "start": 2443,
    "end": 2444
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2444,
    "end": 2445
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2446,
    "end": 2447
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2447,
    "end": 2448
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2449,
    "end": 2450
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2451,
    "end": 2452
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2452,
    "end": 2453
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2453,
    "end": 2454
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2476,
    "end": 2480
  },
  {
    "type": "Identifier",
    "value": "X7_T3",
    "start": 2481,
    "end": 2486
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2487,
    "end": 2488
  },
  {
    "type": "Identifier",
    "value": "X7",
    "start": 2489,
    "end": 2491
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2491,
    "end": 2492
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2492,
    "end": 2493
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2494,
    "end": 2495
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2495,
    "end": 2496
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 2497,
    "end": 2503
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2503,
    "end": 2504
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2505,
    "end": 2506
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2506,
    "end": 2507
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 2508,
    "end": 2514
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2515,
    "end": 2516
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2516,
    "end": 2517
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2517,
    "end": 2518
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2528,
    "end": 2532
  },
  {
    "type": "Identifier",
    "value": "X7_T4",
    "start": 2533,
    "end": 2538
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2539,
    "end": 2540
  },
  {
    "type": "Identifier",
    "value": "X7",
    "start": 2541,
    "end": 2543
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2543,
    "end": 2544
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2544,
    "end": 2545
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2546,
    "end": 2547
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2547,
    "end": 2548
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 2549,
    "end": 2552
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2552,
    "end": 2553
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2554,
    "end": 2555
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2555,
    "end": 2556
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2557,
    "end": 2558
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2559,
    "end": 2560
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2560,
    "end": 2561
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2561,
    "end": 2562
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2654,
    "end": 2658
  },
  {
    "type": "Identifier",
    "value": "X8",
    "start": 2659,
    "end": 2661
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2661,
    "end": 2662
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2662,
    "end": 2663
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2663,
    "end": 2664
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2665,
    "end": 2666
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2671,
    "end": 2672
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2673,
    "end": 2680
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2681,
    "end": 2682
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2683,
    "end": 2684
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2684,
    "end": 2685
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 2686,
    "end": 2691
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2692,
    "end": 2693
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2694,
    "end": 2701
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2702,
    "end": 2708
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2708,
    "end": 2709
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2710,
    "end": 2711
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2711,
    "end": 2712
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 2713,
    "end": 2718
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2719,
    "end": 2720
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2721,
    "end": 2722
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2723,
    "end": 2724
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2725,
    "end": 2726
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 2726,
    "end": 2734
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2734,
    "end": 2735
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2736,
    "end": 2737
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2737,
    "end": 2738
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2739,
    "end": 2740
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2745,
    "end": 2746
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2747,
    "end": 2754
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2755,
    "end": 2756
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2757,
    "end": 2758
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2758,
    "end": 2759
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 2760,
    "end": 2765
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2766,
    "end": 2767
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2768,
    "end": 2775
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2776,
    "end": 2782
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2782,
    "end": 2783
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2784,
    "end": 2785
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2785,
    "end": 2786
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 2787,
    "end": 2792
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2793,
    "end": 2794
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2795,
    "end": 2796
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2797,
    "end": 2798
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2799,
    "end": 2800
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 2800,
    "end": 2808
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2808,
    "end": 2809
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2810,
    "end": 2811
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2811,
    "end": 2812
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2813,
    "end": 2814
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2819,
    "end": 2824
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2824,
    "end": 2825
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2827,
    "end": 2831
  },
  {
    "type": "Identifier",
    "value": "X8_T1",
    "start": 2832,
    "end": 2837
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2838,
    "end": 2839
  },
  {
    "type": "Identifier",
    "value": "X8",
    "start": 2840,
    "end": 2842
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2842,
    "end": 2843
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2843,
    "end": 2844
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2845,
    "end": 2846
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2846,
    "end": 2847
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 2848,
    "end": 2851
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2851,
    "end": 2852
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2853,
    "end": 2854
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2854,
    "end": 2855
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 2856,
    "end": 2859
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2860,
    "end": 2861
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2861,
    "end": 2862
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2862,
    "end": 2863
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2889,
    "end": 2893
  },
  {
    "type": "Identifier",
    "value": "X8_T2",
    "start": 2894,
    "end": 2899
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2900,
    "end": 2901
  },
  {
    "type": "Identifier",
    "value": "X8",
    "start": 2902,
    "end": 2904
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2904,
    "end": 2905
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2905,
    "end": 2906
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "type": "Numeric",
    "value": "1",
    "start": 2910,
    "end": 2911
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2911,
    "end": 2912
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2913,
    "end": 2914
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2914,
    "end": 2915
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2916,
    "end": 2917
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2918,
    "end": 2919
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2919,
    "end": 2920
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2920,
    "end": 2921
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2943,
    "end": 2947
  },
  {
    "type": "Identifier",
    "value": "X8_T3",
    "start": 2948,
    "end": 2953
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2954,
    "end": 2955
  },
  {
    "type": "Identifier",
    "value": "X8",
    "start": 2956,
    "end": 2958
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2958,
    "end": 2959
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2959,
    "end": 2960
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2961,
    "end": 2962
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2962,
    "end": 2963
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 2964,
    "end": 2970
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2970,
    "end": 2971
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2972,
    "end": 2973
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2973,
    "end": 2974
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 2975,
    "end": 2981
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2982,
    "end": 2983
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2983,
    "end": 2984
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2984,
    "end": 2985
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2995,
    "end": 2999
  },
  {
    "type": "Identifier",
    "value": "X8_T4",
    "start": 3000,
    "end": 3005
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3006,
    "end": 3007
  },
  {
    "type": "Identifier",
    "value": "X8",
    "start": 3008,
    "end": 3010
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3010,
    "end": 3011
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3011,
    "end": 3012
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3013,
    "end": 3014
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3014,
    "end": 3015
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 3016,
    "end": 3019
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3019,
    "end": 3020
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3021,
    "end": 3022
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3022,
    "end": 3023
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3024,
    "end": 3025
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3026,
    "end": 3027
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3027,
    "end": 3028
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3028,
    "end": 3029
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3120,
    "end": 3124
  },
  {
    "type": "Identifier",
    "value": "X9",
    "start": 3125,
    "end": 3127
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3127,
    "end": 3128
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3128,
    "end": 3129
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3129,
    "end": 3130
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3131,
    "end": 3132
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3137,
    "end": 3138
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3139,
    "end": 3146
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3147,
    "end": 3148
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3149,
    "end": 3150
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3150,
    "end": 3151
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 3152,
    "end": 3157
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3158,
    "end": 3159
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3159,
    "end": 3160
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3161,
    "end": 3162
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3162,
    "end": 3163
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 3164,
    "end": 3169
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3170,
    "end": 3171
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3172,
    "end": 3179
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3180,
    "end": 3186
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3187,
    "end": 3188
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3189,
    "end": 3190
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3191,
    "end": 3192
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 3192,
    "end": 3200
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3200,
    "end": 3201
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3202,
    "end": 3203
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3203,
    "end": 3204
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3205,
    "end": 3206
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3211,
    "end": 3212
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3213,
    "end": 3220
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3221,
    "end": 3222
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3223,
    "end": 3224
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3224,
    "end": 3225
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 3226,
    "end": 3231
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3232,
    "end": 3233
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3233,
    "end": 3234
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3235,
    "end": 3236
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3236,
    "end": 3237
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 3238,
    "end": 3243
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3244,
    "end": 3245
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3246,
    "end": 3253
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3254,
    "end": 3260
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3261,
    "end": 3262
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3263,
    "end": 3264
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3265,
    "end": 3266
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 3266,
    "end": 3274
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3274,
    "end": 3275
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3276,
    "end": 3277
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3277,
    "end": 3278
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3279,
    "end": 3280
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 3285,
    "end": 3290
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3290,
    "end": 3291
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3293,
    "end": 3297
  },
  {
    "type": "Identifier",
    "value": "X9_T1",
    "start": 3298,
    "end": 3303
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3304,
    "end": 3305
  },
  {
    "type": "Identifier",
    "value": "X9",
    "start": 3306,
    "end": 3308
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3308,
    "end": 3309
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3309,
    "end": 3310
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3311,
    "end": 3312
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3312,
    "end": 3313
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 3314,
    "end": 3317
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3317,
    "end": 3318
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3319,
    "end": 3320
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3320,
    "end": 3321
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 3322,
    "end": 3325
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3326,
    "end": 3327
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3327,
    "end": 3328
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3328,
    "end": 3329
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3355,
    "end": 3359
  },
  {
    "type": "Identifier",
    "value": "X9_T2",
    "start": 3360,
    "end": 3365
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3366,
    "end": 3367
  },
  {
    "type": "Identifier",
    "value": "X9",
    "start": 3368,
    "end": 3370
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3370,
    "end": 3371
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3371,
    "end": 3372
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3373,
    "end": 3374
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3374,
    "end": 3375
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3376,
    "end": 3377
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3377,
    "end": 3378
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3379,
    "end": 3380
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3380,
    "end": 3381
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 3382,
    "end": 3383
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3384,
    "end": 3385
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3385,
    "end": 3386
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3386,
    "end": 3387
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3409,
    "end": 3413
  },
  {
    "type": "Identifier",
    "value": "X9_T3",
    "start": 3414,
    "end": 3419
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3420,
    "end": 3421
  },
  {
    "type": "Identifier",
    "value": "X9",
    "start": 3422,
    "end": 3424
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3424,
    "end": 3425
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3425,
    "end": 3426
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3427,
    "end": 3428
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3428,
    "end": 3429
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 3430,
    "end": 3436
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3436,
    "end": 3437
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3438,
    "end": 3439
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3439,
    "end": 3440
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 3441,
    "end": 3447
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3448,
    "end": 3449
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3449,
    "end": 3450
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3450,
    "end": 3451
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3461,
    "end": 3465
  },
  {
    "type": "Identifier",
    "value": "X9_T4",
    "start": 3466,
    "end": 3471
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3472,
    "end": 3473
  },
  {
    "type": "Identifier",
    "value": "X9",
    "start": 3474,
    "end": 3476
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3476,
    "end": 3477
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3477,
    "end": 3478
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3479,
    "end": 3480
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3480,
    "end": 3481
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 3482,
    "end": 3485
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3485,
    "end": 3486
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3487,
    "end": 3488
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3488,
    "end": 3489
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3490,
    "end": 3491
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3492,
    "end": 3493
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3493,
    "end": 3494
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3494,
    "end": 3495
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3557,
    "end": 3561
  },
  {
    "type": "Identifier",
    "value": "X10",
    "start": 3562,
    "end": 3565
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3565,
    "end": 3566
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3566,
    "end": 3567
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3567,
    "end": 3568
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3569,
    "end": 3570
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3571,
    "end": 3572
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3573,
    "end": 3580
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3581,
    "end": 3582
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 3582,
    "end": 3587
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3588,
    "end": 3589
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3590,
    "end": 3597
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3598,
    "end": 3604
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3605,
    "end": 3606
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3607,
    "end": 3608
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3609,
    "end": 3610
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 3611,
    "end": 3612
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3612,
    "end": 3613
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3614,
    "end": 3615
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3616,
    "end": 3617
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3618,
    "end": 3619
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 3620,
    "end": 3621
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3621,
    "end": 3622
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3652,
    "end": 3656
  },
  {
    "type": "Identifier",
    "value": "X10_Y1",
    "start": 3657,
    "end": 3663
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3663,
    "end": 3664
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3664,
    "end": 3665
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3665,
    "end": 3666
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3667,
    "end": 3668
  },
  {
    "type": "Identifier",
    "value": "X10",
    "start": 3669,
    "end": 3672
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3672,
    "end": 3673
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3673,
    "end": 3674
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3675,
    "end": 3682
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3683,
    "end": 3689
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3690,
    "end": 3691
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3692,
    "end": 3693
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3694,
    "end": 3695
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 3696,
    "end": 3697
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3697,
    "end": 3698
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3698,
    "end": 3699
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3700,
    "end": 3704
  },
  {
    "type": "Identifier",
    "value": "X10_T1_T1",
    "start": 3705,
    "end": 3714
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3715,
    "end": 3716
  },
  {
    "type": "Identifier",
    "value": "X10_Y1",
    "start": 3717,
    "end": 3723
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3723,
    "end": 3724
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3724,
    "end": 3730
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3730,
    "end": 3731
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3731,
    "end": 3732
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3734,
    "end": 3738
  },
  {
    "type": "Identifier",
    "value": "X11",
    "start": 3739,
    "end": 3742
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3742,
    "end": 3743
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3743,
    "end": 3744
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3744,
    "end": 3745
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3746,
    "end": 3747
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3748,
    "end": 3749
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3750,
    "end": 3757
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3758,
    "end": 3759
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3759,
    "end": 3760
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 3760,
    "end": 3765
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3766,
    "end": 3767
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3767,
    "end": 3768
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3769,
    "end": 3776
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3777,
    "end": 3783
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3784,
    "end": 3785
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3786,
    "end": 3787
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3788,
    "end": 3789
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 3790,
    "end": 3791
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3791,
    "end": 3792
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3793,
    "end": 3794
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3795,
    "end": 3796
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3797,
    "end": 3798
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 3799,
    "end": 3800
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3800,
    "end": 3801
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3831,
    "end": 3835
  },
  {
    "type": "Identifier",
    "value": "X12",
    "start": 3836,
    "end": 3839
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3839,
    "end": 3840
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3840,
    "end": 3841
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3841,
    "end": 3842
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3843,
    "end": 3844
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3845,
    "end": 3846
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3847,
    "end": 3854
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3855,
    "end": 3856
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 3856,
    "end": 3861
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3862,
    "end": 3863
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3864,
    "end": 3871
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3872,
    "end": 3878
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3878,
    "end": 3879
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3880,
    "end": 3881
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3882,
    "end": 3883
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3884,
    "end": 3885
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 3886,
    "end": 3887
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3887,
    "end": 3888
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3941,
    "end": 3945
  },
  {
    "type": "Identifier",
    "value": "X13",
    "start": 3946,
    "end": 3949
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3949,
    "end": 3950
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3950,
    "end": 3951
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3951,
    "end": 3952
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3953,
    "end": 3954
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3955,
    "end": 3956
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3957,
    "end": 3964
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 3965,
    "end": 3970
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3971,
    "end": 3972
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3973,
    "end": 3980
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3981,
    "end": 3987
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3988,
    "end": 3989
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3990,
    "end": 3991
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3992,
    "end": 3993
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 3994,
    "end": 3995
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3995,
    "end": 3996
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4081,
    "end": 4085
  },
  {
    "type": "Identifier",
    "value": "X14",
    "start": 4086,
    "end": 4089
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4089,
    "end": 4090
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4090,
    "end": 4091
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4091,
    "end": 4092
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4093,
    "end": 4094
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4095,
    "end": 4096
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4097,
    "end": 4104
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 4105,
    "end": 4110
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 4111,
    "end": 4116
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 4117,
    "end": 4118
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4119,
    "end": 4126
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4127,
    "end": 4133
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4134,
    "end": 4135
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4136,
    "end": 4137
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4138,
    "end": 4139
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 4140,
    "end": 4141
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4141,
    "end": 4142
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4246,
    "end": 4250
  },
  {
    "type": "Identifier",
    "value": "X15",
    "start": 4251,
    "end": 4254
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4254,
    "end": 4255
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4255,
    "end": 4256
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4256,
    "end": 4257
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4258,
    "end": 4259
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4260,
    "end": 4261
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4262,
    "end": 4269
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4270,
    "end": 4271
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4272,
    "end": 4273
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 4273,
    "end": 4274
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 4275,
    "end": 4277
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 4278,
    "end": 4283
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 4284,
    "end": 4285
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4286,
    "end": 4293
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 4294,
    "end": 4299
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4300,
    "end": 4301
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4302,
    "end": 4303
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4304,
    "end": 4305
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4306,
    "end": 4307
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 4308,
    "end": 4309
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4309,
    "end": 4310
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4310,
    "end": 4311
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4312,
    "end": 4313
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4313,
    "end": 4314
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4315,
    "end": 4316
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4317,
    "end": 4318
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4319,
    "end": 4320
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4321,
    "end": 4322
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 4323,
    "end": 4324
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4324,
    "end": 4325
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4355,
    "end": 4359
  },
  {
    "type": "Identifier",
    "value": "X16",
    "start": 4360,
    "end": 4363
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4363,
    "end": 4364
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4364,
    "end": 4365
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4365,
    "end": 4366
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4367,
    "end": 4368
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4369,
    "end": 4370
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4371,
    "end": 4378
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4379,
    "end": 4380
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4381,
    "end": 4382
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 4382,
    "end": 4383
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 4384,
    "end": 4386
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 4387,
    "end": 4392
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 4393,
    "end": 4394
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4395,
    "end": 4402
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 4403,
    "end": 4408
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4409,
    "end": 4410
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4410,
    "end": 4411
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4411,
    "end": 4412
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4413,
    "end": 4414
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4414,
    "end": 4415
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4416,
    "end": 4417
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4418,
    "end": 4419
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4420,
    "end": 4421
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4422,
    "end": 4423
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 4424,
    "end": 4425
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4425,
    "end": 4426
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4479,
    "end": 4483
  },
  {
    "type": "Identifier",
    "value": "X17",
    "start": 4484,
    "end": 4487
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4487,
    "end": 4488
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4488,
    "end": 4489
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4489,
    "end": 4490
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4491,
    "end": 4492
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4493,
    "end": 4494
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4495,
    "end": 4502
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4503,
    "end": 4504
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4505,
    "end": 4506
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 4506,
    "end": 4507
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 4508,
    "end": 4510
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 4511,
    "end": 4516
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4517,
    "end": 4518
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 4519,
    "end": 4521
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 4522,
    "end": 4527
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 4528,
    "end": 4529
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4530,
    "end": 4537
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 4538,
    "end": 4539
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4540,
    "end": 4541
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4542,
    "end": 4543
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4544,
    "end": 4545
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 4546,
    "end": 4547
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4547,
    "end": 4548
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4548,
    "end": 4549
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4550,
    "end": 4551
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4551,
    "end": 4552
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4553,
    "end": 4554
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4555,
    "end": 4556
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4557,
    "end": 4558
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4559,
    "end": 4560
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 4561,
    "end": 4562
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4562,
    "end": 4563
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4593,
    "end": 4597
  },
  {
    "type": "Identifier",
    "value": "X18",
    "start": 4598,
    "end": 4601
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4601,
    "end": 4602
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4602,
    "end": 4603
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4603,
    "end": 4604
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4605,
    "end": 4606
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4607,
    "end": 4608
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4609,
    "end": 4616
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4617,
    "end": 4618
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4619,
    "end": 4620
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 4620,
    "end": 4621
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 4622,
    "end": 4624
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 4625,
    "end": 4630
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4631,
    "end": 4632
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 4633,
    "end": 4635
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 4636,
    "end": 4641
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 4642,
    "end": 4643
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4644,
    "end": 4651
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 4652,
    "end": 4653
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4653,
    "end": 4654
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4654,
    "end": 4655
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "type": "Punctuator",
    "value": "?",
    "start": 4661,
    "end": 4662
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4663,
    "end": 4664
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4665,
    "end": 4666
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 4667,
    "end": 4668
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4668,
    "end": 4669
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4723,
    "end": 4727
  },
  {
    "type": "Identifier",
    "value": "X19",
    "start": 4728,
    "end": 4731
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4731,
    "end": 4732
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4732,
    "end": 4733
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4734,
    "end": 4741
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4742,
    "end": 4748
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4749,
    "end": 4750
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4751,
    "end": 4757
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4757,
    "end": 4758
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4759,
    "end": 4760
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4761,
    "end": 4762
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4763,
    "end": 4770
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4771,
    "end": 4772
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 4772,
    "end": 4777
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 4778,
    "end": 4779
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4780,
    "end": 4787
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4788,
    "end": 4794
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4794,
    "end": 4795
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4796,
    "end": 4797
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4798,
    "end": 4799
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4799,
    "end": 4800
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4800,
    "end": 4801
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 4802,
    "end": 4803
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4803,
    "end": 4804
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4805,
    "end": 4806
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 4807,
    "end": 4812
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4812,
    "end": 4813
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4814,
    "end": 4818
  },
  {
    "type": "Identifier",
    "value": "X19_T1",
    "start": 4819,
    "end": 4825
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4826,
    "end": 4827
  },
  {
    "type": "Identifier",
    "value": "X19",
    "start": 4828,
    "end": 4831
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4831,
    "end": 4832
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 4832,
    "end": 4835
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4835,
    "end": 4836
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4836,
    "end": 4837
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4847,
    "end": 4851
  },
  {
    "type": "Identifier",
    "value": "X19_T2",
    "start": 4852,
    "end": 4858
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4859,
    "end": 4860
  },
  {
    "type": "Identifier",
    "value": "X19",
    "start": 4861,
    "end": 4864
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4864,
    "end": 4865
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4865,
    "end": 4866
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4866,
    "end": 4867
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4867,
    "end": 4868
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4879,
    "end": 4883
  },
  {
    "type": "Identifier",
    "value": "X19_T3",
    "start": 4884,
    "end": 4890
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4891,
    "end": 4892
  },
  {
    "type": "Identifier",
    "value": "X19",
    "start": 4893,
    "end": 4896
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4896,
    "end": 4897
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4897,
    "end": 4898
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4899,
    "end": 4900
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 4901,
    "end": 4904
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4904,
    "end": 4905
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4905,
    "end": 4906
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4918,
    "end": 4922
  },
  {
    "type": "Identifier",
    "value": "X20",
    "start": 4923,
    "end": 4926
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4926,
    "end": 4927
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4927,
    "end": 4928
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4928,
    "end": 4929
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4930,
    "end": 4931
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4932,
    "end": 4933
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4934,
    "end": 4941
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4942,
    "end": 4943
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 4943,
    "end": 4948
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 4949,
    "end": 4950
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4951,
    "end": 4958
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4959,
    "end": 4965
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4965,
    "end": 4966
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4967,
    "end": 4968
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4969,
    "end": 4970
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4971,
    "end": 4978
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4979,
    "end": 4980
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 4980,
    "end": 4985
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 4986,
    "end": 4987
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4988,
    "end": 4995
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 4996,
    "end": 4997
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4997,
    "end": 4998
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4999,
    "end": 5000
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5001,
    "end": 5002
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5002,
    "end": 5003
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5003,
    "end": 5004
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 5005,
    "end": 5006
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5006,
    "end": 5007
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 5008,
    "end": 5009
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5009,
    "end": 5010
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5011,
    "end": 5012
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 5013,
    "end": 5018
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5019,
    "end": 5020
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 5021,
    "end": 5026
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5026,
    "end": 5027
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5028,
    "end": 5032
  },
  {
    "type": "Identifier",
    "value": "X20_T1",
    "start": 5033,
    "end": 5039
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5040,
    "end": 5041
  },
  {
    "type": "Identifier",
    "value": "X20",
    "start": 5042,
    "end": 5045
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5045,
    "end": 5046
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 5046,
    "end": 5047
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5048,
    "end": 5049
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 5050,
    "end": 5053
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5053,
    "end": 5054
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5054,
    "end": 5055
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5070,
    "end": 5074
  },
  {
    "type": "Identifier",
    "value": "X21",
    "start": 5075,
    "end": 5078
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5078,
    "end": 5079
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5079,
    "end": 5080
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5080,
    "end": 5081
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 5082,
    "end": 5083
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5084,
    "end": 5091
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5092,
    "end": 5098
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5098,
    "end": 5099
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5100,
    "end": 5101
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5102,
    "end": 5103
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5104,
    "end": 5111
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5112,
    "end": 5113
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 5113,
    "end": 5118
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 5119,
    "end": 5120
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5121,
    "end": 5128
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 5129,
    "end": 5130
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5130,
    "end": 5131
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 5132,
    "end": 5133
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5134,
    "end": 5135
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5135,
    "end": 5136
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5136,
    "end": 5137
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 5138,
    "end": 5139
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5139,
    "end": 5140
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5141,
    "end": 5142
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 5143,
    "end": 5148
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5148,
    "end": 5149
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5150,
    "end": 5154
  },
  {
    "type": "Identifier",
    "value": "X21_T1",
    "start": 5155,
    "end": 5161
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5162,
    "end": 5163
  },
  {
    "type": "Identifier",
    "value": "X21",
    "start": 5164,
    "end": 5167
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5167,
    "end": 5168
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 5168,
    "end": 5169
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5169,
    "end": 5170
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 5171,
    "end": 5172
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5172,
    "end": 5173
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5173,
    "end": 5174
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5185,
    "end": 5189
  },
  {
    "type": "Identifier",
    "value": "X21_T2",
    "start": 5190,
    "end": 5196
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5197,
    "end": 5198
  },
  {
    "type": "Identifier",
    "value": "X21",
    "start": 5199,
    "end": 5202
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5202,
    "end": 5203
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 5203,
    "end": 5204
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5205,
    "end": 5206
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 5207,
    "end": 5210
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5210,
    "end": 5211
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 5212,
    "end": 5213
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5213,
    "end": 5214
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5214,
    "end": 5215
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5226,
    "end": 5230
  },
  {
    "type": "Identifier",
    "value": "X21_T3",
    "start": 5231,
    "end": 5237
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5238,
    "end": 5239
  },
  {
    "type": "Identifier",
    "value": "X21",
    "start": 5240,
    "end": 5243
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5243,
    "end": 5244
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 5244,
    "end": 5245
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5246,
    "end": 5247
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 5248,
    "end": 5249
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5249,
    "end": 5250
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 5251,
    "end": 5252
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5252,
    "end": 5253
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5253,
    "end": 5254
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5265,
    "end": 5269
  },
  {
    "type": "Identifier",
    "value": "X21_T4",
    "start": 5270,
    "end": 5276
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5277,
    "end": 5278
  },
  {
    "type": "Identifier",
    "value": "X21",
    "start": 5279,
    "end": 5282
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5282,
    "end": 5283
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 5283,
    "end": 5284
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5285,
    "end": 5286
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 5287,
    "end": 5288
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5288,
    "end": 5289
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 5290,
    "end": 5291
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5292,
    "end": 5293
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 5294,
    "end": 5295
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5295,
    "end": 5296
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5296,
    "end": 5297
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5308,
    "end": 5312
  },
  {
    "type": "Identifier",
    "value": "X21_T5",
    "start": 5313,
    "end": 5319
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5320,
    "end": 5321
  },
  {
    "type": "Identifier",
    "value": "X21",
    "start": 5322,
    "end": 5325
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5325,
    "end": 5326
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 5326,
    "end": 5327
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5328,
    "end": 5329
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 5330,
    "end": 5331
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5331,
    "end": 5332
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 5333,
    "end": 5334
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5334,
    "end": 5335
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5335,
    "end": 5336
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5364,
    "end": 5368
  },
  {
    "type": "Identifier",
    "value": "IfEquals",
    "start": 5369,
    "end": 5377
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5377,
    "end": 5378
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 5378,
    "end": 5379
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5379,
    "end": 5380
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 5381,
    "end": 5382
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5382,
    "end": 5383
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 5384,
    "end": 5385
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5385,
    "end": 5386
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 5387,
    "end": 5388
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5388,
    "end": 5389
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5390,
    "end": 5391
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5392,
    "end": 5393
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5393,
    "end": 5394
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5394,
    "end": 5395
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5395,
    "end": 5396
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5396,
    "end": 5397
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5397,
    "end": 5398
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5399,
    "end": 5401
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5402,
    "end": 5403
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5404,
    "end": 5411
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 5412,
    "end": 5413
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 5414,
    "end": 5415
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 5416,
    "end": 5417
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5418,
    "end": 5419
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 5420,
    "end": 5421
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5421,
    "end": 5422
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5423,
    "end": 5430
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5431,
    "end": 5432
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5432,
    "end": 5433
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5433,
    "end": 5434
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5434,
    "end": 5435
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5435,
    "end": 5436
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5437,
    "end": 5439
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5440,
    "end": 5441
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5442,
    "end": 5449
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 5450,
    "end": 5451
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 5452,
    "end": 5453
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 5454,
    "end": 5455
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5456,
    "end": 5457
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 5458,
    "end": 5459
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 5460,
    "end": 5461
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 5462,
    "end": 5463
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5464,
    "end": 5465
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 5466,
    "end": 5467
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5467,
    "end": 5468
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 5470,
    "end": 5477
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 5478,
    "end": 5483
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 5484,
    "end": 5486
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5486,
    "end": 5487
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5488,
    "end": 5489
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5489,
    "end": 5490
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5490,
    "end": 5491
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5491,
    "end": 5492
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5492,
    "end": 5493
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5494,
    "end": 5496
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5497,
    "end": 5498
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5498,
    "end": 5499
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5500,
    "end": 5507
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 5508,
    "end": 5513
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 5514,
    "end": 5515
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5516,
    "end": 5523
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5524,
    "end": 5530
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 5531,
    "end": 5532
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 5533,
    "end": 5534
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5535,
    "end": 5536
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 5537,
    "end": 5538
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5538,
    "end": 5539
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5539,
    "end": 5540
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5541,
    "end": 5549
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 5550,
    "end": 5552
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5552,
    "end": 5553
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5553,
    "end": 5554
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5555,
    "end": 5556
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 5561,
    "end": 5567
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 5568,
    "end": 5570
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5570,
    "end": 5571
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5572,
    "end": 5573
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5575,
    "end": 5579
  },
  {
    "type": "Identifier",
    "value": "ExpectNumber",
    "start": 5580,
    "end": 5592
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5592,
    "end": 5593
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5593,
    "end": 5594
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5595,
    "end": 5602
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5603,
    "end": 5609
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5609,
    "end": 5610
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5611,
    "end": 5612
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5613,
    "end": 5614
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5614,
    "end": 5615
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 5616,
    "end": 5623
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 5624,
    "end": 5629
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 5630,
    "end": 5632
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5632,
    "end": 5633
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5634,
    "end": 5635
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5635,
    "end": 5636
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5636,
    "end": 5637
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5637,
    "end": 5638
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5638,
    "end": 5639
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5640,
    "end": 5642
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5643,
    "end": 5644
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5644,
    "end": 5645
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5646,
    "end": 5653
  },
  {
    "type": "Identifier",
    "value": "ExpectNumber",
    "start": 5654,
    "end": 5666
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5666,
    "end": 5667
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 5667,
    "end": 5672
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 5673,
    "end": 5674
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5674,
    "end": 5675
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 5676,
    "end": 5677
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 5678,
    "end": 5679
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5680,
    "end": 5681
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 5682,
    "end": 5683
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5683,
    "end": 5684
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5684,
    "end": 5685
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5686,
    "end": 5694
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 5695,
    "end": 5697
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5697,
    "end": 5698
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5698,
    "end": 5699
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5700,
    "end": 5701
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 5706,
    "end": 5712
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 5713,
    "end": 5715
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5715,
    "end": 5716
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5717,
    "end": 5718
  }
]
```
