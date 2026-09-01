__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 19
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 25,
              "end": 32
            },
            "start": 23,
            "end": 32
          },
          "start": 20,
          "end": 32
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 35,
          "end": 41
        },
        "start": 33,
        "end": 41
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 42
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 60,
        "end": 62
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 69,
              "end": 75
            },
            "start": 67,
            "end": 75
          },
          "start": 63,
          "end": 75
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 83,
              "end": 89
            },
            "start": 81,
            "end": 89
          },
          "start": 77,
          "end": 89
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 92,
          "end": 98
        },
        "start": 90,
        "end": 98
      },
      "body": null,
      "expression": false,
      "start": 43,
      "end": 99
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 117,
        "end": 119
      },
      "generator": false,
      "async": false,
      "declare": true,
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
            "start": 123,
            "end": 127
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "start": 129,
                "end": 135
              },
              "start": 129,
              "end": 137
            },
            "start": 127,
            "end": 137
          },
          "value": null,
          "start": 120,
          "end": 137
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSStringKeyword",
            "start": 140,
            "end": 146
          },
          "start": 140,
          "end": 148
        },
        "start": 138,
        "end": 148
      },
      "body": null,
      "expression": false,
      "start": 100,
      "end": 149
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 168,
        "end": 170
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 176,
              "end": 183
            },
            "start": 174,
            "end": 183
          },
          "start": 171,
          "end": 183
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSUnknownKeyword",
          "start": 186,
          "end": 193
        },
        "start": 184,
        "end": 193
      },
      "body": null,
      "expression": false,
      "start": 151,
      "end": 194
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 213,
        "end": 215
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 219,
          "end": 225
        },
        "start": 217,
        "end": 225
      },
      "body": null,
      "expression": false,
      "start": 196,
      "end": 226
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AllParams",
        "optional": false,
        "typeAnnotation": null,
        "start": 233,
        "end": 242
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
              "start": 243,
              "end": 244
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 243,
            "end": 244
          }
        ],
        "start": 242,
        "end": 245
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
            "start": 252,
            "end": 253
          },
          "typeArguments": null,
          "start": 252,
          "end": 253
        },
        "extendsType": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSCallSignatureDeclaration",
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 268,
                    "end": 269
                  },
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
                          "name": "A1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 277,
                          "end": 279
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 277,
                        "end": 279
                      },
                      "start": 271,
                      "end": 279
                    },
                    "start": 269,
                    "end": 279
                  },
                  "value": null,
                  "start": 265,
                  "end": 279
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 282,
                  "end": 285
                },
                "start": 280,
                "end": 285
              },
              "start": 264,
              "end": 286
            },
            {
              "type": "TSCallSignatureDeclaration",
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 291,
                    "end": 292
                  },
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
                          "name": "A2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 300,
                          "end": 302
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 300,
                        "end": 302
                      },
                      "start": 294,
                      "end": 302
                    },
                    "start": 292,
                    "end": 302
                  },
                  "value": null,
                  "start": 288,
                  "end": 302
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 305,
                  "end": 308
                },
                "start": 303,
                "end": 308
              },
              "start": 287,
              "end": 309
            },
            {
              "type": "TSCallSignatureDeclaration",
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 314,
                    "end": 315
                  },
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
                          "name": "A3",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 323,
                          "end": 325
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 323,
                        "end": 325
                      },
                      "start": 317,
                      "end": 325
                    },
                    "start": 315,
                    "end": 325
                  },
                  "value": null,
                  "start": 311,
                  "end": 325
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 328,
                  "end": 331
                },
                "start": 326,
                "end": 331
              },
              "start": 310,
              "end": 332
            },
            {
              "type": "TSCallSignatureDeclaration",
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 337,
                    "end": 338
                  },
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
                          "name": "A4",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 346,
                          "end": 348
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 346,
                        "end": 348
                      },
                      "start": 340,
                      "end": 348
                    },
                    "start": 338,
                    "end": 348
                  },
                  "value": null,
                  "start": 334,
                  "end": 348
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 351,
                  "end": 354
                },
                "start": 349,
                "end": 354
              },
              "start": 333,
              "end": 354
            }
          ],
          "start": 262,
          "end": 356
        },
        "trueType": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A1",
                "optional": false,
                "typeAnnotation": null,
                "start": 359,
                "end": 361
              },
              "typeArguments": null,
              "start": 359,
              "end": 361
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A2",
                "optional": false,
                "typeAnnotation": null,
                "start": 364,
                "end": 366
              },
              "typeArguments": null,
              "start": 364,
              "end": 366
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A3",
                "optional": false,
                "typeAnnotation": null,
                "start": 369,
                "end": 371
              },
              "typeArguments": null,
              "start": 369,
              "end": 371
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A4",
                "optional": false,
                "typeAnnotation": null,
                "start": 374,
                "end": 376
              },
              "typeArguments": null,
              "start": 374,
              "end": 376
            }
          ],
          "start": 359,
          "end": 376
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 379,
          "end": 384
        },
        "start": 252,
        "end": 384
      },
      "declare": false,
      "start": 228,
      "end": 385
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AllReturns",
        "optional": false,
        "typeAnnotation": null,
        "start": 392,
        "end": 402
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
              "start": 403,
              "end": 404
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 403,
            "end": 404
          }
        ],
        "start": 402,
        "end": 405
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
            "start": 412,
            "end": 413
          },
          "typeArguments": null,
          "start": 412,
          "end": 413
        },
        "extendsType": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSCallSignatureDeclaration",
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 428,
                    "end": 429
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 431,
                        "end": 434
                      },
                      "start": 431,
                      "end": 436
                    },
                    "start": 429,
                    "end": 436
                  },
                  "value": null,
                  "start": 425,
                  "end": 436
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
                      "name": "R1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 445,
                      "end": 447
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 445,
                    "end": 447
                  },
                  "start": 439,
                  "end": 447
                },
                "start": 437,
                "end": 447
              },
              "start": 424,
              "end": 448
            },
            {
              "type": "TSCallSignatureDeclaration",
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 453,
                    "end": 454
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 456,
                        "end": 459
                      },
                      "start": 456,
                      "end": 461
                    },
                    "start": 454,
                    "end": 461
                  },
                  "value": null,
                  "start": 450,
                  "end": 461
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
                      "name": "R2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 470,
                      "end": 472
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 470,
                    "end": 472
                  },
                  "start": 464,
                  "end": 472
                },
                "start": 462,
                "end": 472
              },
              "start": 449,
              "end": 473
            },
            {
              "type": "TSCallSignatureDeclaration",
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 478,
                    "end": 479
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 481,
                        "end": 484
                      },
                      "start": 481,
                      "end": 486
                    },
                    "start": 479,
                    "end": 486
                  },
                  "value": null,
                  "start": 475,
                  "end": 486
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
                      "name": "R3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 495,
                      "end": 497
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 495,
                    "end": 497
                  },
                  "start": 489,
                  "end": 497
                },
                "start": 487,
                "end": 497
              },
              "start": 474,
              "end": 498
            },
            {
              "type": "TSCallSignatureDeclaration",
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 503,
                    "end": 504
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 506,
                        "end": 509
                      },
                      "start": 506,
                      "end": 511
                    },
                    "start": 504,
                    "end": 511
                  },
                  "value": null,
                  "start": 500,
                  "end": 511
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
                      "name": "R4",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 520,
                      "end": 522
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 520,
                    "end": 522
                  },
                  "start": 514,
                  "end": 522
                },
                "start": 512,
                "end": 522
              },
              "start": 499,
              "end": 522
            }
          ],
          "start": 422,
          "end": 524
        },
        "trueType": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "R1",
                "optional": false,
                "typeAnnotation": null,
                "start": 527,
                "end": 529
              },
              "typeArguments": null,
              "start": 527,
              "end": 529
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "R2",
                "optional": false,
                "typeAnnotation": null,
                "start": 532,
                "end": 534
              },
              "typeArguments": null,
              "start": 532,
              "end": 534
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "R3",
                "optional": false,
                "typeAnnotation": null,
                "start": 537,
                "end": 539
              },
              "typeArguments": null,
              "start": 537,
              "end": 539
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "R4",
                "optional": false,
                "typeAnnotation": null,
                "start": 542,
                "end": 544
              },
              "typeArguments": null,
              "start": 542,
              "end": 544
            }
          ],
          "start": 527,
          "end": 544
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 547,
          "end": 552
        },
        "start": 412,
        "end": 552
      },
      "declare": false,
      "start": 387,
      "end": 553
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Params1",
        "optional": false,
        "typeAnnotation": null,
        "start": 560,
        "end": 567
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "AllParams",
          "optional": false,
          "typeAnnotation": null,
          "start": 570,
          "end": 579
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null,
                "start": 587,
                "end": 589
              },
              "typeArguments": null,
              "start": 580,
              "end": 589
            }
          ],
          "start": 579,
          "end": 590
        },
        "start": 570,
        "end": 590
      },
      "declare": false,
      "start": 555,
      "end": 591
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Params2",
        "optional": false,
        "typeAnnotation": null,
        "start": 658,
        "end": 665
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "AllParams",
          "optional": false,
          "typeAnnotation": null,
          "start": 668,
          "end": 677
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "f2",
                "optional": false,
                "typeAnnotation": null,
                "start": 685,
                "end": 687
              },
              "typeArguments": null,
              "start": 678,
              "end": 687
            }
          ],
          "start": 677,
          "end": 688
        },
        "start": 668,
        "end": 688
      },
      "declare": false,
      "start": 653,
      "end": 689
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Params3",
        "optional": false,
        "typeAnnotation": null,
        "start": 714,
        "end": 721
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "AllParams",
          "optional": false,
          "typeAnnotation": null,
          "start": 724,
          "end": 733
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "f3",
                "optional": false,
                "typeAnnotation": null,
                "start": 741,
                "end": 743
              },
              "typeArguments": null,
              "start": 734,
              "end": 743
            }
          ],
          "start": 733,
          "end": 744
        },
        "start": 724,
        "end": 744
      },
      "declare": false,
      "start": 709,
      "end": 745
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Returns1",
        "optional": false,
        "typeAnnotation": null,
        "start": 759,
        "end": 767
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "AllReturns",
          "optional": false,
          "typeAnnotation": null,
          "start": 770,
          "end": 780
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null,
                "start": 788,
                "end": 790
              },
              "typeArguments": null,
              "start": 781,
              "end": 790
            }
          ],
          "start": 780,
          "end": 791
        },
        "start": 770,
        "end": 791
      },
      "declare": false,
      "start": 754,
      "end": 791
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Returns2",
        "optional": false,
        "typeAnnotation": null,
        "start": 828,
        "end": 836
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "AllReturns",
          "optional": false,
          "typeAnnotation": null,
          "start": 839,
          "end": 849
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "f2",
                "optional": false,
                "typeAnnotation": null,
                "start": 857,
                "end": 859
              },
              "typeArguments": null,
              "start": 850,
              "end": 859
            }
          ],
          "start": 849,
          "end": 860
        },
        "start": 839,
        "end": 860
      },
      "declare": false,
      "start": 823,
      "end": 861
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Returns3",
        "optional": false,
        "typeAnnotation": null,
        "start": 879,
        "end": 887
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "AllReturns",
          "optional": false,
          "typeAnnotation": null,
          "start": 890,
          "end": 900
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "f3",
                "optional": false,
                "typeAnnotation": null,
                "start": 908,
                "end": 910
              },
              "typeArguments": null,
              "start": 901,
              "end": 910
            }
          ],
          "start": 900,
          "end": 911
        },
        "start": 890,
        "end": 911
      },
      "declare": false,
      "start": 874,
      "end": 912
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InferTwoOverloads",
        "optional": false,
        "typeAnnotation": null,
        "start": 952,
        "end": 969
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "F",
              "optional": false,
              "typeAnnotation": null,
              "start": 970,
              "end": 971
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Function",
                "optional": false,
                "typeAnnotation": null,
                "start": 980,
                "end": 988
              },
              "typeArguments": null,
              "start": 980,
              "end": 988
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 970,
            "end": 988
          }
        ],
        "start": 969,
        "end": 989
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "F",
            "optional": false,
            "typeAnnotation": null,
            "start": 995,
            "end": 996
          },
          "typeArguments": null,
          "start": 995,
          "end": 996
        },
        "extendsType": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSCallSignatureDeclaration",
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1011,
                    "end": 1013
                  },
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
                          "name": "A1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1021,
                          "end": 1023
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 1021,
                        "end": 1023
                      },
                      "start": 1015,
                      "end": 1023
                    },
                    "start": 1013,
                    "end": 1023
                  },
                  "value": null,
                  "start": 1008,
                  "end": 1023
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
                      "name": "R1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1032,
                      "end": 1034
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1032,
                    "end": 1034
                  },
                  "start": 1026,
                  "end": 1034
                },
                "start": 1024,
                "end": 1034
              },
              "start": 1007,
              "end": 1035
            },
            {
              "type": "TSCallSignatureDeclaration",
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a0",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1040,
                    "end": 1042
                  },
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
                          "name": "A0",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1050,
                          "end": 1052
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 1050,
                        "end": 1052
                      },
                      "start": 1044,
                      "end": 1052
                    },
                    "start": 1042,
                    "end": 1052
                  },
                  "value": null,
                  "start": 1037,
                  "end": 1052
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
                      "name": "R0",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1061,
                      "end": 1063
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1061,
                    "end": 1063
                  },
                  "start": 1055,
                  "end": 1063
                },
                "start": 1053,
                "end": 1063
              },
              "start": 1036,
              "end": 1063
            }
          ],
          "start": 1005,
          "end": 1065
        },
        "trueType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1078,
                    "end": 1080
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1082,
                        "end": 1084
                      },
                      "typeArguments": null,
                      "start": 1082,
                      "end": 1084
                    },
                    "start": 1080,
                    "end": 1084
                  },
                  "value": null,
                  "start": 1075,
                  "end": 1084
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "R1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1089,
                    "end": 1091
                  },
                  "typeArguments": null,
                  "start": 1089,
                  "end": 1091
                },
                "start": 1086,
                "end": 1091
              },
              "start": 1074,
              "end": 1091
            },
            {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a0",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1097,
                    "end": 1099
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A0",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1101,
                        "end": 1103
                      },
                      "typeArguments": null,
                      "start": 1101,
                      "end": 1103
                    },
                    "start": 1099,
                    "end": 1103
                  },
                  "value": null,
                  "start": 1094,
                  "end": 1103
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "R0",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1108,
                    "end": 1110
                  },
                  "typeArguments": null,
                  "start": 1108,
                  "end": 1110
                },
                "start": 1105,
                "end": 1110
              },
              "start": 1093,
              "end": 1110
            }
          ],
          "start": 1073,
          "end": 1111
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 1119,
          "end": 1124
        },
        "start": 995,
        "end": 1124
      },
      "declare": false,
      "start": 947,
      "end": 1125
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Expected",
        "optional": false,
        "typeAnnotation": null,
        "start": 1132,
        "end": 1140
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "InferTwoOverloads",
          "optional": false,
          "typeAnnotation": null,
          "start": 1143,
          "end": 1160
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSFunctionType",
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
                          "start": 1166,
                          "end": 1172
                        },
                        "start": 1164,
                        "end": 1172
                      },
                      "start": 1163,
                      "end": 1172
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1177,
                      "end": 1183
                    },
                    "start": 1174,
                    "end": 1183
                  },
                  "start": 1162,
                  "end": 1183
                },
                {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1194,
                      "end": 1200
                    },
                    "start": 1191,
                    "end": 1200
                  },
                  "start": 1188,
                  "end": 1200
                }
              ],
              "start": 1161,
              "end": 1201
            }
          ],
          "start": 1160,
          "end": 1202
        },
        "start": 1143,
        "end": 1202
      },
      "declare": false,
      "start": 1127,
      "end": 1203
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "JustOneSignature",
        "optional": false,
        "typeAnnotation": null,
        "start": 1256,
        "end": 1272
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "InferTwoOverloads",
          "optional": false,
          "typeAnnotation": null,
          "start": 1275,
          "end": 1292
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1298,
                      "end": 1304
                    },
                    "start": 1296,
                    "end": 1304
                  },
                  "start": 1295,
                  "end": 1304
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1309,
                  "end": 1315
                },
                "start": 1306,
                "end": 1315
              },
              "start": 1294,
              "end": 1315
            }
          ],
          "start": 1292,
          "end": 1317
        },
        "start": 1275,
        "end": 1317
      },
      "declare": false,
      "start": 1251,
      "end": 1318
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "JustTheOtherSignature",
        "optional": false,
        "typeAnnotation": null,
        "start": 1376,
        "end": 1397
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "InferTwoOverloads",
          "optional": false,
          "typeAnnotation": null,
          "start": 1400,
          "end": 1417
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
                  "type": "TSStringKeyword",
                  "start": 1425,
                  "end": 1431
                },
                "start": 1422,
                "end": 1431
              },
              "start": 1419,
              "end": 1431
            }
          ],
          "start": 1417,
          "end": 1433
        },
        "start": 1400,
        "end": 1433
      },
      "declare": false,
      "start": 1371,
      "end": 1434
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Overloads",
        "optional": false,
        "typeAnnotation": null,
        "start": 1496,
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
              "name": "F",
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
            "name": "F",
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
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSCallSignatureDeclaration",
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
                    "start": 1541,
                    "end": 1545
                  },
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
                          "name": "A1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1553,
                          "end": 1555
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 1553,
                        "end": 1555
                      },
                      "start": 1547,
                      "end": 1555
                    },
                    "start": 1545,
                    "end": 1555
                  },
                  "value": null,
                  "start": 1538,
                  "end": 1555
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
                      "name": "R1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1564,
                      "end": 1566
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1564,
                    "end": 1566
                  },
                  "start": 1558,
                  "end": 1566
                },
                "start": 1556,
                "end": 1566
              },
              "start": 1537,
              "end": 1566
            },
            {
              "type": "TSCallSignatureDeclaration",
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
                    "start": 1581,
                    "end": 1585
                  },
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
                          "name": "A2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1593,
                          "end": 1595
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 1593,
                        "end": 1595
                      },
                      "start": 1587,
                      "end": 1595
                    },
                    "start": 1585,
                    "end": 1595
                  },
                  "value": null,
                  "start": 1578,
                  "end": 1595
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
                      "name": "R2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1604,
                      "end": 1606
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1604,
                    "end": 1606
                  },
                  "start": 1598,
                  "end": 1606
                },
                "start": 1596,
                "end": 1606
              },
              "start": 1577,
              "end": 1607
            }
          ],
          "start": 1525,
          "end": 1615
        },
        "trueType": {
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
                "name": "rule",
                "optional": false,
                "typeAnnotation": null,
                "start": 1619,
                "end": 1623
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 1625,
                    "end": 1626
                  },
                  "start": 1625,
                  "end": 1626
                },
                "start": 1623,
                "end": 1626
              },
              "accessibility": null,
              "static": false,
              "start": 1619,
              "end": 1627
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "variants",
                "optional": false,
                "typeAnnotation": null,
                "start": 1628,
                "end": 1636
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1639,
                            "end": 1641
                          },
                          "typeArguments": null,
                          "start": 1639,
                          "end": 1641
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1643,
                            "end": 1645
                          },
                          "typeArguments": null,
                          "start": 1643,
                          "end": 1645
                        }
                      ],
                      "start": 1638,
                      "end": 1646
                    },
                    {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1650,
                            "end": 1652
                          },
                          "typeArguments": null,
                          "start": 1650,
                          "end": 1652
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1654,
                            "end": 1656
                          },
                          "typeArguments": null,
                          "start": 1654,
                          "end": 1656
                        }
                      ],
                      "start": 1649,
                      "end": 1657
                    }
                  ],
                  "start": 1638,
                  "end": 1657
                },
                "start": 1636,
                "end": 1657
              },
              "accessibility": null,
              "static": false,
              "start": 1628,
              "end": 1657
            }
          ],
          "start": 1618,
          "end": 1658
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "F",
              "optional": false,
              "typeAnnotation": null,
              "start": 1665,
              "end": 1666
            },
            "typeArguments": null,
            "start": 1665,
            "end": 1666
          },
          "extendsType": {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSCallSignatureDeclaration",
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
                      "start": 1691,
                      "end": 1695
                    },
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
                            "name": "A1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1703,
                            "end": 1705
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 1703,
                          "end": 1705
                        },
                        "start": 1697,
                        "end": 1705
                      },
                      "start": 1695,
                      "end": 1705
                    },
                    "value": null,
                    "start": 1688,
                    "end": 1705
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
                        "name": "R1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1714,
                        "end": 1716
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1714,
                      "end": 1716
                    },
                    "start": 1708,
                    "end": 1716
                  },
                  "start": 1706,
                  "end": 1716
                },
                "start": 1687,
                "end": 1717
              }
            ],
            "start": 1675,
            "end": 1725
          },
          "trueType": {
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
                  "name": "rule",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1729,
                  "end": 1733
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1735,
                      "end": 1736
                    },
                    "start": 1735,
                    "end": 1736
                  },
                  "start": 1733,
                  "end": 1736
                },
                "accessibility": null,
                "static": false,
                "start": 1729,
                "end": 1737
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "variants",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1738,
                  "end": 1746
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1749,
                          "end": 1751
                        },
                        "typeArguments": null,
                        "start": 1749,
                        "end": 1751
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "R1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1753,
                          "end": 1755
                        },
                        "typeArguments": null,
                        "start": 1753,
                        "end": 1755
                      }
                    ],
                    "start": 1748,
                    "end": 1756
                  },
                  "start": 1746,
                  "end": 1756
                },
                "accessibility": null,
                "static": false,
                "start": 1738,
                "end": 1756
              }
            ],
            "start": 1728,
            "end": 1757
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 1764,
            "end": 1769
          },
          "start": 1665,
          "end": 1769
        },
        "start": 1515,
        "end": 1769
      },
      "declare": false,
      "start": 1491,
      "end": 1770
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
            "name": "ok1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Overloads",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1791,
                  "end": 1800
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1805,
                              "end": 1811
                            },
                            "start": 1803,
                            "end": 1811
                          },
                          "start": 1802,
                          "end": 1811
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 1816,
                          "end": 1823
                        },
                        "start": 1813,
                        "end": 1823
                      },
                      "start": 1801,
                      "end": 1823
                    }
                  ],
                  "start": 1800,
                  "end": 1824
                },
                "start": 1791,
                "end": 1824
              },
              "start": 1789,
              "end": 1824
            },
            "start": 1786,
            "end": 1824
          },
          "init": null,
          "definite": false,
          "start": 1786,
          "end": 1824
        }
      ],
      "declare": true,
      "start": 1772,
      "end": 1825
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
            "name": "ok2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Overloads",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1891,
                  "end": 1900
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSCallSignatureDeclaration",
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
                                "start": 1906,
                                "end": 1907
                              },
                              "start": 1906,
                              "end": 1907
                            },
                            "start": 1904,
                            "end": 1907
                          },
                          "start": 1902,
                          "end": 1908
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
                                  "type": "TSNumberKeyword",
                                  "start": 1913,
                                  "end": 1919
                                },
                                "start": 1911,
                                "end": 1919
                              },
                              "start": 1910,
                              "end": 1919
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": 2,
                                "raw": "2",
                                "start": 1922,
                                "end": 1923
                              },
                              "start": 1922,
                              "end": 1923
                            },
                            "start": 1920,
                            "end": 1923
                          },
                          "start": 1909,
                          "end": 1923
                        }
                      ],
                      "start": 1901,
                      "end": 1924
                    }
                  ],
                  "start": 1900,
                  "end": 1925
                },
                "start": 1891,
                "end": 1925
              },
              "start": 1889,
              "end": 1925
            },
            "start": 1886,
            "end": 1925
          },
          "init": null,
          "definite": false,
          "start": 1886,
          "end": 1925
        }
      ],
      "declare": true,
      "start": 1872,
      "end": 1926
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
            "name": "ok3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Overloads",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1996,
                  "end": 2005
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
                          "type": "TSBooleanKeyword",
                          "start": 2012,
                          "end": 2019
                        },
                        "start": 2009,
                        "end": 2019
                      },
                      "start": 2006,
                      "end": 2019
                    }
                  ],
                  "start": 2005,
                  "end": 2020
                },
                "start": 1996,
                "end": 2020
              },
              "start": 1994,
              "end": 2020
            },
            "start": 1991,
            "end": 2020
          },
          "init": null,
          "definite": false,
          "start": 1991,
          "end": 2020
        }
      ],
      "declare": true,
      "start": 1977,
      "end": 2021
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
            "name": "ok4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Overloads",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2082,
                  "end": 2091
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
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
                            "start": 2096,
                            "end": 2100
                          },
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSUnknownKeyword",
                                "start": 2102,
                                "end": 2109
                              },
                              "start": 2102,
                              "end": 2111
                            },
                            "start": 2100,
                            "end": 2111
                          },
                          "value": null,
                          "start": 2093,
                          "end": 2111
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 2116,
                          "end": 2123
                        },
                        "start": 2113,
                        "end": 2123
                      },
                      "start": 2092,
                      "end": 2123
                    }
                  ],
                  "start": 2091,
                  "end": 2124
                },
                "start": 2082,
                "end": 2124
              },
              "start": 2080,
              "end": 2124
            },
            "start": 2077,
            "end": 2124
          },
          "init": null,
          "definite": false,
          "start": 2077,
          "end": 2124
        }
      ],
      "declare": true,
      "start": 2063,
      "end": 2125
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
            "name": "ok5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Overloads",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2193,
                  "end": 2202
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSUnknownKeyword",
                              "start": 2207,
                              "end": 2214
                            },
                            "start": 2205,
                            "end": 2214
                          },
                          "start": 2204,
                          "end": 2214
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 2219,
                          "end": 2226
                        },
                        "start": 2216,
                        "end": 2226
                      },
                      "start": 2203,
                      "end": 2226
                    }
                  ],
                  "start": 2202,
                  "end": 2227
                },
                "start": 2193,
                "end": 2227
              },
              "start": 2191,
              "end": 2227
            },
            "start": 2188,
            "end": 2227
          },
          "init": null,
          "definite": false,
          "start": 2188,
          "end": 2227
        }
      ],
      "declare": true,
      "start": 2174,
      "end": 2228
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
            "name": "ok6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Overloads",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2296,
                  "end": 2305
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 2310,
                              "end": 2313
                            },
                            "start": 2308,
                            "end": 2313
                          },
                          "start": 2307,
                          "end": 2313
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 2318,
                          "end": 2325
                        },
                        "start": 2315,
                        "end": 2325
                      },
                      "start": 2306,
                      "end": 2325
                    }
                  ],
                  "start": 2305,
                  "end": 2326
                },
                "start": 2296,
                "end": 2326
              },
              "start": 2294,
              "end": 2326
            },
            "start": 2291,
            "end": 2326
          },
          "init": null,
          "definite": false,
          "start": 2291,
          "end": 2326
        }
      ],
      "declare": true,
      "start": 2277,
      "end": 2327
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2370
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 8,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 17,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 20,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 25,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 35,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 43,
    "end": 50
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 51,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 60,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "arg1",
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
    "value": "number",
    "start": 69,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "arg2",
    "start": 77,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 83,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 92,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 100,
    "end": 107
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 108,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 117,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 120,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 123,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 129,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 138,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 140,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 146,
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
    "value": ";",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 151,
    "end": 158
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 159,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 168,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 171,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 174,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 176,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 186,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 193,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 196,
    "end": 203
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 204,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 213,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 219,
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
    "start": 228,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "AllParams",
    "start": 233,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 252,
    "end": 253
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 254,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 265,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 269,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 271,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "A1",
    "start": 277,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 280,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 282,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 288,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 292,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 294,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "A2",
    "start": 300,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 303,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 305,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 311,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 315,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 317,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "A3",
    "start": 323,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 325,
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
    "value": "any",
    "start": 328,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 334,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 338,
    "end": 339
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 340,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "A4",
    "start": 346,
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
    "value": ":",
    "start": 349,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 351,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 357,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "A1",
    "start": 359,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 362,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "A2",
    "start": 364,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 367,
    "end": 368
  },
  {
    "type": "Identifier",
    "value": "A3",
    "start": 369,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 372,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "A4",
    "start": 374,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 377,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 379,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 384,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 387,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "AllReturns",
    "start": 392,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 402,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 406,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 412,
    "end": 413
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 414,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 425,
    "end": 428
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 429,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 431,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 437,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 439,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "R1",
    "start": 445,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 450,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 454,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 456,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 460,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 462,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 464,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "R2",
    "start": 470,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 475,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 478,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 479,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 481,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 486,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 487,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 489,
    "end": 494
  },
  {
    "type": "Identifier",
    "value": "R3",
    "start": 495,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 497,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 499,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 500,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 503,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 504,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 506,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 509,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 511,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 512,
    "end": 513
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 514,
    "end": 519
  },
  {
    "type": "Identifier",
    "value": "R4",
    "start": 520,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 523,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 525,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "R1",
    "start": 527,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 530,
    "end": 531
  },
  {
    "type": "Identifier",
    "value": "R2",
    "start": 532,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 535,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "R3",
    "start": 537,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 540,
    "end": 541
  },
  {
    "type": "Identifier",
    "value": "R4",
    "start": 542,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 545,
    "end": 546
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 547,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 552,
    "end": 553
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 555,
    "end": 559
  },
  {
    "type": "Identifier",
    "value": "Params1",
    "start": 560,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 568,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "AllParams",
    "start": 570,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 579,
    "end": 580
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 580,
    "end": 586
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 587,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 589,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 590,
    "end": 591
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 653,
    "end": 657
  },
  {
    "type": "Identifier",
    "value": "Params2",
    "start": 658,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 666,
    "end": 667
  },
  {
    "type": "Identifier",
    "value": "AllParams",
    "start": 668,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 677,
    "end": 678
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 678,
    "end": 684
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 685,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 687,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 688,
    "end": 689
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 709,
    "end": 713
  },
  {
    "type": "Identifier",
    "value": "Params3",
    "start": 714,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 722,
    "end": 723
  },
  {
    "type": "Identifier",
    "value": "AllParams",
    "start": 724,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 733,
    "end": 734
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 734,
    "end": 740
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 741,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 743,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 744,
    "end": 745
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 754,
    "end": 758
  },
  {
    "type": "Identifier",
    "value": "Returns1",
    "start": 759,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 768,
    "end": 769
  },
  {
    "type": "Identifier",
    "value": "AllReturns",
    "start": 770,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 780,
    "end": 781
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 781,
    "end": 787
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 788,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 790,
    "end": 791
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 823,
    "end": 827
  },
  {
    "type": "Identifier",
    "value": "Returns2",
    "start": 828,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 837,
    "end": 838
  },
  {
    "type": "Identifier",
    "value": "AllReturns",
    "start": 839,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 849,
    "end": 850
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 850,
    "end": 856
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 857,
    "end": 859
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 859,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 860,
    "end": 861
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 874,
    "end": 878
  },
  {
    "type": "Identifier",
    "value": "Returns3",
    "start": 879,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 888,
    "end": 889
  },
  {
    "type": "Identifier",
    "value": "AllReturns",
    "start": 890,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 900,
    "end": 901
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 901,
    "end": 907
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 908,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 910,
    "end": 911
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 911,
    "end": 912
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 947,
    "end": 951
  },
  {
    "type": "Identifier",
    "value": "InferTwoOverloads",
    "start": 952,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 969,
    "end": 970
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 970,
    "end": 971
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 972,
    "end": 979
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 980,
    "end": 988
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 988,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 990,
    "end": 991
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 995,
    "end": 996
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 997,
    "end": 1004
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1008,
    "end": 1011
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 1011,
    "end": 1013
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1013,
    "end": 1014
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 1015,
    "end": 1020
  },
  {
    "type": "Identifier",
    "value": "A1",
    "start": 1021,
    "end": 1023
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1024,
    "end": 1025
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 1026,
    "end": 1031
  },
  {
    "type": "Identifier",
    "value": "R1",
    "start": 1032,
    "end": 1034
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1036,
    "end": 1037
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1037,
    "end": 1040
  },
  {
    "type": "Identifier",
    "value": "a0",
    "start": 1040,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 1044,
    "end": 1049
  },
  {
    "type": "Identifier",
    "value": "A0",
    "start": 1050,
    "end": 1052
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1053,
    "end": 1054
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 1055,
    "end": 1060
  },
  {
    "type": "Identifier",
    "value": "R0",
    "start": 1061,
    "end": 1063
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1073,
    "end": 1074
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1074,
    "end": 1075
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1075,
    "end": 1078
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 1078,
    "end": 1080
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "Identifier",
    "value": "A1",
    "start": 1082,
    "end": 1084
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1084,
    "end": 1085
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1086,
    "end": 1088
  },
  {
    "type": "Identifier",
    "value": "R1",
    "start": 1089,
    "end": 1091
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1091,
    "end": 1092
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1094,
    "end": 1097
  },
  {
    "type": "Identifier",
    "value": "a0",
    "start": 1097,
    "end": 1099
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1099,
    "end": 1100
  },
  {
    "type": "Identifier",
    "value": "A0",
    "start": 1101,
    "end": 1103
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1103,
    "end": 1104
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1105,
    "end": 1107
  },
  {
    "type": "Identifier",
    "value": "R0",
    "start": 1108,
    "end": 1110
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1110,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1119,
    "end": 1124
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1127,
    "end": 1131
  },
  {
    "type": "Identifier",
    "value": "Expected",
    "start": 1132,
    "end": 1140
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1141,
    "end": 1142
  },
  {
    "type": "Identifier",
    "value": "InferTwoOverloads",
    "start": 1143,
    "end": 1160
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1160,
    "end": 1161
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1161,
    "end": 1162
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1162,
    "end": 1163
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": ")",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1174,
    "end": 1176
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1177,
    "end": 1183
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1183,
    "end": 1184
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1187,
    "end": 1188
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1188,
    "end": 1189
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1189,
    "end": 1190
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1191,
    "end": 1193
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1194,
    "end": 1200
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1200,
    "end": 1201
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1202,
    "end": 1203
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1251,
    "end": 1255
  },
  {
    "type": "Identifier",
    "value": "JustOneSignature",
    "start": 1256,
    "end": 1272
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1273,
    "end": 1274
  },
  {
    "type": "Identifier",
    "value": "InferTwoOverloads",
    "start": 1275,
    "end": 1292
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1292,
    "end": 1293
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1293,
    "end": 1294
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1294,
    "end": 1295
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1295,
    "end": 1296
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1296,
    "end": 1297
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1298,
    "end": 1304
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1304,
    "end": 1305
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1306,
    "end": 1308
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1309,
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
    "value": ">",
    "start": 1316,
    "end": 1317
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1317,
    "end": 1318
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1371,
    "end": 1375
  },
  {
    "type": "Identifier",
    "value": "JustTheOtherSignature",
    "start": 1376,
    "end": 1397
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1398,
    "end": 1399
  },
  {
    "type": "Identifier",
    "value": "InferTwoOverloads",
    "start": 1400,
    "end": 1417
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1417,
    "end": 1418
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1418,
    "end": 1419
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1419,
    "end": 1420
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1420,
    "end": 1421
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1422,
    "end": 1424
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1425,
    "end": 1431
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1431,
    "end": 1432
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1432,
    "end": 1433
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1433,
    "end": 1434
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1491,
    "end": 1495
  },
  {
    "type": "Identifier",
    "value": "Overloads",
    "start": 1496,
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
    "value": "F",
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
    "value": "F",
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
    "type": "Punctuator",
    "value": "{",
    "start": 1525,
    "end": 1526
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1537,
    "end": 1538
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1538,
    "end": 1541
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 1541,
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
    "value": "infer",
    "start": 1547,
    "end": 1552
  },
  {
    "type": "Identifier",
    "value": "A1",
    "start": 1553,
    "end": 1555
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1555,
    "end": 1556
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1556,
    "end": 1557
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 1558,
    "end": 1563
  },
  {
    "type": "Identifier",
    "value": "R1",
    "start": 1564,
    "end": 1566
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1577,
    "end": 1578
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1578,
    "end": 1581
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 1581,
    "end": 1585
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1585,
    "end": 1586
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 1587,
    "end": 1592
  },
  {
    "type": "Identifier",
    "value": "A2",
    "start": 1593,
    "end": 1595
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1595,
    "end": 1596
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1596,
    "end": 1597
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 1598,
    "end": 1603
  },
  {
    "type": "Identifier",
    "value": "R2",
    "start": 1604,
    "end": 1606
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1606,
    "end": 1607
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1614,
    "end": 1615
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1616,
    "end": 1617
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1618,
    "end": 1619
  },
  {
    "type": "Identifier",
    "value": "rule",
    "start": 1619,
    "end": 1623
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1623,
    "end": 1624
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1625,
    "end": 1626
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1626,
    "end": 1627
  },
  {
    "type": "Identifier",
    "value": "variants",
    "start": 1628,
    "end": 1636
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1636,
    "end": 1637
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1638,
    "end": 1639
  },
  {
    "type": "Identifier",
    "value": "A1",
    "start": 1639,
    "end": 1641
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1641,
    "end": 1642
  },
  {
    "type": "Identifier",
    "value": "R1",
    "start": 1643,
    "end": 1645
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1645,
    "end": 1646
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1647,
    "end": 1648
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1649,
    "end": 1650
  },
  {
    "type": "Identifier",
    "value": "A2",
    "start": 1650,
    "end": 1652
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1652,
    "end": 1653
  },
  {
    "type": "Identifier",
    "value": "R2",
    "start": 1654,
    "end": 1656
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1656,
    "end": 1657
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1657,
    "end": 1658
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1659,
    "end": 1660
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 1665,
    "end": 1666
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1667,
    "end": 1674
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1675,
    "end": 1676
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1687,
    "end": 1688
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1688,
    "end": 1691
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 1691,
    "end": 1695
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1695,
    "end": 1696
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 1697,
    "end": 1702
  },
  {
    "type": "Identifier",
    "value": "A1",
    "start": 1703,
    "end": 1705
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1705,
    "end": 1706
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1706,
    "end": 1707
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 1708,
    "end": 1713
  },
  {
    "type": "Identifier",
    "value": "R1",
    "start": 1714,
    "end": 1716
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1716,
    "end": 1717
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1724,
    "end": 1725
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1726,
    "end": 1727
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1728,
    "end": 1729
  },
  {
    "type": "Identifier",
    "value": "rule",
    "start": 1729,
    "end": 1733
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1733,
    "end": 1734
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1735,
    "end": 1736
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1736,
    "end": 1737
  },
  {
    "type": "Identifier",
    "value": "variants",
    "start": 1738,
    "end": 1746
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1746,
    "end": 1747
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1748,
    "end": 1749
  },
  {
    "type": "Identifier",
    "value": "A1",
    "start": 1749,
    "end": 1751
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1751,
    "end": 1752
  },
  {
    "type": "Identifier",
    "value": "R1",
    "start": 1753,
    "end": 1755
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1755,
    "end": 1756
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1756,
    "end": 1757
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1758,
    "end": 1759
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1764,
    "end": 1769
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1769,
    "end": 1770
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1772,
    "end": 1779
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1780,
    "end": 1785
  },
  {
    "type": "Identifier",
    "value": "ok1",
    "start": 1786,
    "end": 1789
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1789,
    "end": 1790
  },
  {
    "type": "Identifier",
    "value": "Overloads",
    "start": 1791,
    "end": 1800
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1800,
    "end": 1801
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1801,
    "end": 1802
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1802,
    "end": 1803
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1803,
    "end": 1804
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1805,
    "end": 1811
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1811,
    "end": 1812
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1813,
    "end": 1815
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1816,
    "end": 1823
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1823,
    "end": 1824
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1824,
    "end": 1825
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1872,
    "end": 1879
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1880,
    "end": 1885
  },
  {
    "type": "Identifier",
    "value": "ok2",
    "start": 1886,
    "end": 1889
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1889,
    "end": 1890
  },
  {
    "type": "Identifier",
    "value": "Overloads",
    "start": 1891,
    "end": 1900
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1900,
    "end": 1901
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1901,
    "end": 1902
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1902,
    "end": 1903
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1903,
    "end": 1904
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1904,
    "end": 1905
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1906,
    "end": 1907
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1907,
    "end": 1908
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1909,
    "end": 1910
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1910,
    "end": 1911
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1911,
    "end": 1912
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1913,
    "end": 1919
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1919,
    "end": 1920
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1920,
    "end": 1921
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1922,
    "end": 1923
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1923,
    "end": 1924
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1924,
    "end": 1925
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1925,
    "end": 1926
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1977,
    "end": 1984
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1985,
    "end": 1990
  },
  {
    "type": "Identifier",
    "value": "ok3",
    "start": 1991,
    "end": 1994
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1994,
    "end": 1995
  },
  {
    "type": "Identifier",
    "value": "Overloads",
    "start": 1996,
    "end": 2005
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2005,
    "end": 2006
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2006,
    "end": 2007
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2007,
    "end": 2008
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2009,
    "end": 2011
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2012,
    "end": 2019
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2019,
    "end": 2020
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2020,
    "end": 2021
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2063,
    "end": 2070
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2071,
    "end": 2076
  },
  {
    "type": "Identifier",
    "value": "ok4",
    "start": 2077,
    "end": 2080
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2080,
    "end": 2081
  },
  {
    "type": "Identifier",
    "value": "Overloads",
    "start": 2082,
    "end": 2091
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2091,
    "end": 2092
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2092,
    "end": 2093
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2093,
    "end": 2096
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 2096,
    "end": 2100
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2100,
    "end": 2101
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 2102,
    "end": 2109
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2109,
    "end": 2110
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2110,
    "end": 2111
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2111,
    "end": 2112
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2113,
    "end": 2115
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2116,
    "end": 2123
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Identifier",
    "value": "declare",
    "start": 2174,
    "end": 2181
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2182,
    "end": 2187
  },
  {
    "type": "Identifier",
    "value": "ok5",
    "start": 2188,
    "end": 2191
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2191,
    "end": 2192
  },
  {
    "type": "Identifier",
    "value": "Overloads",
    "start": 2193,
    "end": 2202
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2202,
    "end": 2203
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2203,
    "end": 2204
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2204,
    "end": 2205
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2205,
    "end": 2206
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 2207,
    "end": 2214
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2214,
    "end": 2215
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2216,
    "end": 2218
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2219,
    "end": 2226
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2226,
    "end": 2227
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2227,
    "end": 2228
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2277,
    "end": 2284
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2285,
    "end": 2290
  },
  {
    "type": "Identifier",
    "value": "ok6",
    "start": 2291,
    "end": 2294
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2294,
    "end": 2295
  },
  {
    "type": "Identifier",
    "value": "Overloads",
    "start": 2296,
    "end": 2305
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2305,
    "end": 2306
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2306,
    "end": 2307
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2307,
    "end": 2308
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2308,
    "end": 2309
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2310,
    "end": 2313
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2313,
    "end": 2314
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2315,
    "end": 2317
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2318,
    "end": 2325
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2325,
    "end": 2326
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2326,
    "end": 2327
  }
]
```
