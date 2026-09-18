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
          "name": "_$ZodTypeInternals",
          "optional": false,
          "typeAnnotation": null,
          "start": 103,
          "end": 121
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
                "name": "def",
                "optional": false,
                "typeAnnotation": null,
                "start": 126,
                "end": 129
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnknownKeyword",
                  "start": 131,
                  "end": 138
                },
                "start": 129,
                "end": 138
              },
              "accessibility": null,
              "static": false,
              "start": 126,
              "end": 139
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "optin",
                "optional": false,
                "typeAnnotation": null,
                "start": 142,
                "end": 147
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "optional",
                        "raw": "\"optional\"",
                        "start": 150,
                        "end": 160
                      },
                      "start": 150,
                      "end": 160
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 163,
                      "end": 172
                    }
                  ],
                  "start": 150,
                  "end": 172
                },
                "start": 148,
                "end": 172
              },
              "accessibility": null,
              "static": false,
              "start": 142,
              "end": 173
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "optout",
                "optional": false,
                "typeAnnotation": null,
                "start": 176,
                "end": 182
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "optional",
                        "raw": "\"optional\"",
                        "start": 185,
                        "end": 195
                      },
                      "start": 185,
                      "end": 195
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 198,
                      "end": 207
                    }
                  ],
                  "start": 185,
                  "end": 207
                },
                "start": 183,
                "end": 207
              },
              "accessibility": null,
              "static": false,
              "start": 176,
              "end": 208
            }
          ],
          "start": 122,
          "end": 210
        },
        "declare": false,
        "start": 93,
        "end": 210
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 86,
      "end": 210
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "$ZodTypeInternals",
          "optional": false,
          "typeAnnotation": null,
          "start": 229,
          "end": 246
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "O",
                "optional": false,
                "typeAnnotation": null,
                "start": 251,
                "end": 252
              },
              "constraint": null,
              "default": {
                "type": "TSUnknownKeyword",
                "start": 255,
                "end": 262
              },
              "in": false,
              "out": true,
              "const": false,
              "start": 247,
              "end": 262
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 268,
                "end": 269
              },
              "constraint": null,
              "default": {
                "type": "TSUnknownKeyword",
                "start": 272,
                "end": 279
              },
              "in": false,
              "out": true,
              "const": false,
              "start": 264,
              "end": 279
            }
          ],
          "start": 246,
          "end": 280
        },
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "_$ZodTypeInternals",
              "optional": false,
              "typeAnnotation": null,
              "start": 289,
              "end": 307
            },
            "typeArguments": null,
            "start": 289,
            "end": 307
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
                "name": "output",
                "optional": false,
                "typeAnnotation": null,
                "start": 312,
                "end": 318
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "O",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 320,
                    "end": 321
                  },
                  "typeArguments": null,
                  "start": 320,
                  "end": 321
                },
                "start": 318,
                "end": 321
              },
              "accessibility": null,
              "static": false,
              "start": 312,
              "end": 322
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "input",
                "optional": false,
                "typeAnnotation": null,
                "start": 325,
                "end": 330
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 332,
                    "end": 333
                  },
                  "typeArguments": null,
                  "start": 332,
                  "end": 333
                },
                "start": 330,
                "end": 333
              },
              "accessibility": null,
              "static": false,
              "start": 325,
              "end": 334
            }
          ],
          "start": 308,
          "end": 336
        },
        "declare": false,
        "start": 219,
        "end": 336
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 212,
      "end": 336
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "output",
          "optional": false,
          "typeAnnotation": null,
          "start": 350,
          "end": 356
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
                "start": 357,
                "end": 358
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "$ZodType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 367,
                  "end": 375
                },
                "typeArguments": null,
                "start": 367,
                "end": 375
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 357,
              "end": 375
            }
          ],
          "start": 356,
          "end": 376
        },
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 379,
                "end": 380
              },
              "typeArguments": null,
              "start": 379,
              "end": 380
            },
            "indexType": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "_zod",
                "raw": "\"_zod\"",
                "start": 381,
                "end": 387
              },
              "start": 381,
              "end": 387
            },
            "start": 379,
            "end": 388
          },
          "indexType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "output",
              "raw": "\"output\"",
              "start": 389,
              "end": 397
            },
            "start": 389,
            "end": 397
          },
          "start": 379,
          "end": 398
        },
        "declare": false,
        "start": 345,
        "end": 399
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 338,
      "end": 399
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "input",
          "optional": false,
          "typeAnnotation": null,
          "start": 412,
          "end": 417
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
                "start": 418,
                "end": 419
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "$ZodType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 428,
                  "end": 436
                },
                "typeArguments": null,
                "start": 428,
                "end": 436
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 418,
              "end": 436
            }
          ],
          "start": 417,
          "end": 437
        },
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 440,
                "end": 441
              },
              "typeArguments": null,
              "start": 440,
              "end": 441
            },
            "indexType": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "_zod",
                "raw": "\"_zod\"",
                "start": 442,
                "end": 448
              },
              "start": 442,
              "end": 448
            },
            "start": 440,
            "end": 449
          },
          "indexType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "input",
              "raw": "\"input\"",
              "start": 450,
              "end": 457
            },
            "start": 450,
            "end": 457
          },
          "start": 440,
          "end": 458
        },
        "declare": false,
        "start": 407,
        "end": 459
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 400,
      "end": 459
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "$ZodType",
          "optional": false,
          "typeAnnotation": null,
          "start": 478,
          "end": 486
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "O",
                "optional": false,
                "typeAnnotation": null,
                "start": 487,
                "end": 488
              },
              "constraint": null,
              "default": {
                "type": "TSUnknownKeyword",
                "start": 491,
                "end": 498
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 487,
              "end": 498
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 500,
                "end": 501
              },
              "constraint": null,
              "default": {
                "type": "TSUnknownKeyword",
                "start": 504,
                "end": 511
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 500,
              "end": 511
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "Internals",
                "optional": false,
                "typeAnnotation": null,
                "start": 513,
                "end": 522
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "$ZodTypeInternals",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 531,
                  "end": 548
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "O",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 549,
                        "end": 550
                      },
                      "typeArguments": null,
                      "start": 549,
                      "end": 550
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "I",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 552,
                        "end": 553
                      },
                      "typeArguments": null,
                      "start": 552,
                      "end": 553
                    }
                  ],
                  "start": 548,
                  "end": 554
                },
                "start": 531,
                "end": 554
              },
              "default": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "$ZodTypeInternals",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 557,
                  "end": 574
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "O",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 575,
                        "end": 576
                      },
                      "typeArguments": null,
                      "start": 575,
                      "end": 576
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "I",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 578,
                        "end": 579
                      },
                      "typeArguments": null,
                      "start": 578,
                      "end": 579
                    }
                  ],
                  "start": 574,
                  "end": 580
                },
                "start": 557,
                "end": 580
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 513,
              "end": 580
            }
          ],
          "start": 486,
          "end": 581
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
                "name": "_zod",
                "optional": false,
                "typeAnnotation": null,
                "start": 586,
                "end": 590
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Internals",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 592,
                    "end": 601
                  },
                  "typeArguments": null,
                  "start": 592,
                  "end": 601
                },
                "start": 590,
                "end": 601
              },
              "accessibility": null,
              "static": false,
              "start": 586,
              "end": 602
            }
          ],
          "start": 582,
          "end": 604
        },
        "declare": false,
        "start": 468,
        "end": 604
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 461,
      "end": 604
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "$ZodStringInternals",
          "optional": false,
          "typeAnnotation": null,
          "start": 643,
          "end": 662
        },
        "typeParameters": null,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "$ZodTypeInternals",
              "optional": false,
              "typeAnnotation": null,
              "start": 671,
              "end": 688
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 689,
                  "end": 695
                },
                {
                  "type": "TSStringKeyword",
                  "start": 697,
                  "end": 703
                }
              ],
              "start": 688,
              "end": 704
            },
            "start": 671,
            "end": 704
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
                "name": "def",
                "optional": false,
                "typeAnnotation": null,
                "start": 709,
                "end": 712
              },
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
                        "name": "type",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 716,
                        "end": 720
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "string",
                            "raw": "\"string\"",
                            "start": 722,
                            "end": 730
                          },
                          "start": 722,
                          "end": 730
                        },
                        "start": 720,
                        "end": 730
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 716,
                      "end": 730
                    }
                  ],
                  "start": 714,
                  "end": 732
                },
                "start": 712,
                "end": 732
              },
              "accessibility": null,
              "static": false,
              "start": 709,
              "end": 733
            }
          ],
          "start": 705,
          "end": 735
        },
        "declare": false,
        "start": 633,
        "end": 735
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 626,
      "end": 735
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "$ZodString",
          "optional": false,
          "typeAnnotation": null,
          "start": 753,
          "end": 763
        },
        "typeParameters": null,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "$ZodType",
              "optional": false,
              "typeAnnotation": null,
              "start": 772,
              "end": 780
            },
            "typeArguments": null,
            "start": 772,
            "end": 780
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
                "name": "_zod",
                "optional": false,
                "typeAnnotation": null,
                "start": 785,
                "end": 789
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "$ZodStringInternals",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 791,
                    "end": 810
                  },
                  "typeArguments": null,
                  "start": 791,
                  "end": 810
                },
                "start": 789,
                "end": 810
              },
              "accessibility": null,
              "static": false,
              "start": 785,
              "end": 811
            }
          ],
          "start": 781,
          "end": 813
        },
        "declare": false,
        "start": 743,
        "end": 813
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 736,
      "end": 813
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "string",
        "optional": false,
        "typeAnnotation": null,
        "start": 831,
        "end": 837
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "$ZodString",
            "optional": false,
            "typeAnnotation": null,
            "start": 841,
            "end": 851
          },
          "typeArguments": null,
          "start": 841,
          "end": 851
        },
        "start": 839,
        "end": 851
      },
      "body": null,
      "expression": false,
      "start": 814,
      "end": 852
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "$ZodArrayInternals",
          "optional": false,
          "typeAnnotation": null,
          "start": 890,
          "end": 908
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
                "start": 909,
                "end": 910
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "$ZodType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 919,
                  "end": 927
                },
                "typeArguments": null,
                "start": 919,
                "end": 927
              },
              "default": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "$ZodType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 930,
                  "end": 938
                },
                "typeArguments": null,
                "start": 930,
                "end": 938
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 909,
              "end": 938
            }
          ],
          "start": 908,
          "end": 939
        },
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "$ZodTypeInternals",
              "optional": false,
              "typeAnnotation": null,
              "start": 948,
              "end": 965
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "output",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 966,
                      "end": 972
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
                            "start": 973,
                            "end": 974
                          },
                          "typeArguments": null,
                          "start": 973,
                          "end": 974
                        }
                      ],
                      "start": 972,
                      "end": 975
                    },
                    "start": 966,
                    "end": 975
                  },
                  "start": 966,
                  "end": 977
                },
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "input",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 979,
                      "end": 984
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
                            "start": 985,
                            "end": 986
                          },
                          "typeArguments": null,
                          "start": 985,
                          "end": 986
                        }
                      ],
                      "start": 984,
                      "end": 987
                    },
                    "start": 979,
                    "end": 987
                  },
                  "start": 979,
                  "end": 989
                }
              ],
              "start": 965,
              "end": 990
            },
            "start": 948,
            "end": 990
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
                "name": "def",
                "optional": false,
                "typeAnnotation": null,
                "start": 995,
                "end": 998
              },
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
                        "name": "type",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1002,
                        "end": 1006
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "array",
                            "raw": "\"array\"",
                            "start": 1008,
                            "end": 1015
                          },
                          "start": 1008,
                          "end": 1015
                        },
                        "start": 1006,
                        "end": 1015
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1002,
                      "end": 1016
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "element",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1017,
                        "end": 1024
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
                            "start": 1026,
                            "end": 1027
                          },
                          "typeArguments": null,
                          "start": 1026,
                          "end": 1027
                        },
                        "start": 1024,
                        "end": 1027
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1017,
                      "end": 1027
                    }
                  ],
                  "start": 1000,
                  "end": 1029
                },
                "start": 998,
                "end": 1029
              },
              "accessibility": null,
              "static": false,
              "start": 995,
              "end": 1030
            }
          ],
          "start": 991,
          "end": 1032
        },
        "declare": false,
        "start": 880,
        "end": 1032
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 873,
      "end": 1032
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "$ZodArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 1050,
          "end": 1059
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
                "start": 1060,
                "end": 1061
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "$ZodType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1070,
                  "end": 1078
                },
                "typeArguments": null,
                "start": 1070,
                "end": 1078
              },
              "default": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "$ZodType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1081,
                  "end": 1089
                },
                "typeArguments": null,
                "start": 1081,
                "end": 1089
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 1060,
              "end": 1089
            }
          ],
          "start": 1059,
          "end": 1090
        },
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "$ZodType",
              "optional": false,
              "typeAnnotation": null,
              "start": 1099,
              "end": 1107
            },
            "typeArguments": null,
            "start": 1099,
            "end": 1107
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
                "name": "_zod",
                "optional": false,
                "typeAnnotation": null,
                "start": 1112,
                "end": 1116
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "$ZodArrayInternals",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1118,
                    "end": 1136
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
                          "start": 1137,
                          "end": 1138
                        },
                        "typeArguments": null,
                        "start": 1137,
                        "end": 1138
                      }
                    ],
                    "start": 1136,
                    "end": 1139
                  },
                  "start": 1118,
                  "end": 1139
                },
                "start": 1116,
                "end": 1139
              },
              "accessibility": null,
              "static": false,
              "start": 1112,
              "end": 1140
            }
          ],
          "start": 1108,
          "end": 1142
        },
        "declare": false,
        "start": 1040,
        "end": 1142
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1033,
      "end": 1142
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "array",
        "optional": false,
        "typeAnnotation": null,
        "start": 1160,
        "end": 1165
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
              "start": 1166,
              "end": 1167
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "$ZodType",
                "optional": false,
                "typeAnnotation": null,
                "start": 1176,
                "end": 1184
              },
              "typeArguments": null,
              "start": 1176,
              "end": 1184
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1166,
            "end": 1184
          }
        ],
        "start": 1165,
        "end": 1185
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "element",
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
                "start": 1195,
                "end": 1196
              },
              "typeArguments": null,
              "start": 1195,
              "end": 1196
            },
            "start": 1193,
            "end": 1196
          },
          "start": 1186,
          "end": 1196
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "$ZodArray",
            "optional": false,
            "typeAnnotation": null,
            "start": 1199,
            "end": 1208
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
                  "start": 1209,
                  "end": 1210
                },
                "typeArguments": null,
                "start": 1209,
                "end": 1210
              }
            ],
            "start": 1208,
            "end": 1211
          },
          "start": 1199,
          "end": 1211
        },
        "start": 1197,
        "end": 1211
      },
      "body": null,
      "expression": false,
      "start": 1143,
      "end": 1212
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "$ZodOptionalInternals",
          "optional": false,
          "typeAnnotation": null,
          "start": 1253,
          "end": 1274
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
                "start": 1275,
                "end": 1276
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "$ZodType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1285,
                  "end": 1293
                },
                "typeArguments": null,
                "start": 1285,
                "end": 1293
              },
              "default": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "$ZodType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1296,
                  "end": 1304
                },
                "typeArguments": null,
                "start": 1296,
                "end": 1304
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 1275,
              "end": 1304
            }
          ],
          "start": 1274,
          "end": 1305
        },
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "$ZodTypeInternals",
              "optional": false,
              "typeAnnotation": null,
              "start": 1316,
              "end": 1333
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
                        "name": "output",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1334,
                        "end": 1340
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
                              "start": 1341,
                              "end": 1342
                            },
                            "typeArguments": null,
                            "start": 1341,
                            "end": 1342
                          }
                        ],
                        "start": 1340,
                        "end": 1343
                      },
                      "start": 1334,
                      "end": 1343
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 1346,
                      "end": 1355
                    }
                  ],
                  "start": 1334,
                  "end": 1355
                },
                {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "input",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1357,
                        "end": 1362
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
                              "start": 1363,
                              "end": 1364
                            },
                            "typeArguments": null,
                            "start": 1363,
                            "end": 1364
                          }
                        ],
                        "start": 1362,
                        "end": 1365
                      },
                      "start": 1357,
                      "end": 1365
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 1368,
                      "end": 1377
                    }
                  ],
                  "start": 1357,
                  "end": 1377
                }
              ],
              "start": 1333,
              "end": 1378
            },
            "start": 1316,
            "end": 1378
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
                "name": "def",
                "optional": false,
                "typeAnnotation": null,
                "start": 1383,
                "end": 1386
              },
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
                        "name": "type",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1390,
                        "end": 1394
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "optional",
                            "raw": "\"optional\"",
                            "start": 1396,
                            "end": 1406
                          },
                          "start": 1396,
                          "end": 1406
                        },
                        "start": 1394,
                        "end": 1406
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1390,
                      "end": 1407
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "innerType",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1408,
                        "end": 1417
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
                            "start": 1419,
                            "end": 1420
                          },
                          "typeArguments": null,
                          "start": 1419,
                          "end": 1420
                        },
                        "start": 1417,
                        "end": 1420
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1408,
                      "end": 1420
                    }
                  ],
                  "start": 1388,
                  "end": 1422
                },
                "start": 1386,
                "end": 1422
              },
              "accessibility": null,
              "static": false,
              "start": 1383,
              "end": 1423
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "optin",
                "optional": false,
                "typeAnnotation": null,
                "start": 1426,
                "end": 1431
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "optional",
                    "raw": "\"optional\"",
                    "start": 1433,
                    "end": 1443
                  },
                  "start": 1433,
                  "end": 1443
                },
                "start": 1431,
                "end": 1443
              },
              "accessibility": null,
              "static": false,
              "start": 1426,
              "end": 1444
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "optout",
                "optional": false,
                "typeAnnotation": null,
                "start": 1447,
                "end": 1453
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "optional",
                    "raw": "\"optional\"",
                    "start": 1455,
                    "end": 1465
                  },
                  "start": 1455,
                  "end": 1465
                },
                "start": 1453,
                "end": 1465
              },
              "accessibility": null,
              "static": false,
              "start": 1447,
              "end": 1466
            }
          ],
          "start": 1379,
          "end": 1468
        },
        "declare": false,
        "start": 1243,
        "end": 1468
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1236,
      "end": 1468
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "$ZodOptional",
          "optional": false,
          "typeAnnotation": null,
          "start": 1486,
          "end": 1498
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
                "start": 1499,
                "end": 1500
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "$ZodType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1509,
                  "end": 1517
                },
                "typeArguments": null,
                "start": 1509,
                "end": 1517
              },
              "default": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "$ZodType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1520,
                  "end": 1528
                },
                "typeArguments": null,
                "start": 1520,
                "end": 1528
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 1499,
              "end": 1528
            }
          ],
          "start": 1498,
          "end": 1529
        },
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "$ZodType",
              "optional": false,
              "typeAnnotation": null,
              "start": 1538,
              "end": 1546
            },
            "typeArguments": null,
            "start": 1538,
            "end": 1546
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
                "name": "_zod",
                "optional": false,
                "typeAnnotation": null,
                "start": 1551,
                "end": 1555
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "$ZodOptionalInternals",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1557,
                    "end": 1578
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
                          "start": 1579,
                          "end": 1580
                        },
                        "typeArguments": null,
                        "start": 1579,
                        "end": 1580
                      }
                    ],
                    "start": 1578,
                    "end": 1581
                  },
                  "start": 1557,
                  "end": 1581
                },
                "start": 1555,
                "end": 1581
              },
              "accessibility": null,
              "static": false,
              "start": 1551,
              "end": 1582
            }
          ],
          "start": 1547,
          "end": 1584
        },
        "declare": false,
        "start": 1476,
        "end": 1584
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1469,
      "end": 1584
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "optional",
        "optional": false,
        "typeAnnotation": null,
        "start": 1602,
        "end": 1610
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
              "start": 1611,
              "end": 1612
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "$ZodType",
                "optional": false,
                "typeAnnotation": null,
                "start": 1621,
                "end": 1629
              },
              "typeArguments": null,
              "start": 1621,
              "end": 1629
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1611,
            "end": 1629
          }
        ],
        "start": 1610,
        "end": 1630
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "inner",
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
                "start": 1638,
                "end": 1639
              },
              "typeArguments": null,
              "start": 1638,
              "end": 1639
            },
            "start": 1636,
            "end": 1639
          },
          "start": 1631,
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
            "name": "$ZodOptional",
            "optional": false,
            "typeAnnotation": null,
            "start": 1642,
            "end": 1654
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
                  "start": 1655,
                  "end": 1656
                },
                "typeArguments": null,
                "start": 1655,
                "end": 1656
              }
            ],
            "start": 1654,
            "end": 1657
          },
          "start": 1642,
          "end": 1657
        },
        "start": 1640,
        "end": 1657
      },
      "body": null,
      "expression": false,
      "start": 1585,
      "end": 1658
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "$ZodNullableInternals",
          "optional": false,
          "typeAnnotation": null,
          "start": 1699,
          "end": 1720
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
                "start": 1721,
                "end": 1722
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "$ZodType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1731,
                  "end": 1739
                },
                "typeArguments": null,
                "start": 1731,
                "end": 1739
              },
              "default": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "$ZodType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1742,
                  "end": 1750
                },
                "typeArguments": null,
                "start": 1742,
                "end": 1750
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 1721,
              "end": 1750
            }
          ],
          "start": 1720,
          "end": 1751
        },
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "$ZodTypeInternals",
              "optional": false,
              "typeAnnotation": null,
              "start": 1762,
              "end": 1779
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
                        "name": "output",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1780,
                        "end": 1786
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
                              "start": 1787,
                              "end": 1788
                            },
                            "typeArguments": null,
                            "start": 1787,
                            "end": 1788
                          }
                        ],
                        "start": 1786,
                        "end": 1789
                      },
                      "start": 1780,
                      "end": 1789
                    },
                    {
                      "type": "TSNullKeyword",
                      "start": 1792,
                      "end": 1796
                    }
                  ],
                  "start": 1780,
                  "end": 1796
                },
                {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "input",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1798,
                        "end": 1803
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
                              "start": 1804,
                              "end": 1805
                            },
                            "typeArguments": null,
                            "start": 1804,
                            "end": 1805
                          }
                        ],
                        "start": 1803,
                        "end": 1806
                      },
                      "start": 1798,
                      "end": 1806
                    },
                    {
                      "type": "TSNullKeyword",
                      "start": 1809,
                      "end": 1813
                    }
                  ],
                  "start": 1798,
                  "end": 1813
                }
              ],
              "start": 1779,
              "end": 1814
            },
            "start": 1762,
            "end": 1814
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
                "name": "def",
                "optional": false,
                "typeAnnotation": null,
                "start": 1819,
                "end": 1822
              },
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
                        "name": "type",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1826,
                        "end": 1830
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "nullable",
                            "raw": "\"nullable\"",
                            "start": 1832,
                            "end": 1842
                          },
                          "start": 1832,
                          "end": 1842
                        },
                        "start": 1830,
                        "end": 1842
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1826,
                      "end": 1843
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "innerType",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1844,
                        "end": 1853
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
                            "start": 1855,
                            "end": 1856
                          },
                          "typeArguments": null,
                          "start": 1855,
                          "end": 1856
                        },
                        "start": 1853,
                        "end": 1856
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1844,
                      "end": 1856
                    }
                  ],
                  "start": 1824,
                  "end": 1858
                },
                "start": 1822,
                "end": 1858
              },
              "accessibility": null,
              "static": false,
              "start": 1819,
              "end": 1859
            }
          ],
          "start": 1815,
          "end": 1861
        },
        "declare": false,
        "start": 1689,
        "end": 1861
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1682,
      "end": 1861
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "$ZodNullable",
          "optional": false,
          "typeAnnotation": null,
          "start": 1879,
          "end": 1891
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
                "start": 1892,
                "end": 1893
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "$ZodType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1902,
                  "end": 1910
                },
                "typeArguments": null,
                "start": 1902,
                "end": 1910
              },
              "default": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "$ZodType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1913,
                  "end": 1921
                },
                "typeArguments": null,
                "start": 1913,
                "end": 1921
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 1892,
              "end": 1921
            }
          ],
          "start": 1891,
          "end": 1922
        },
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "$ZodType",
              "optional": false,
              "typeAnnotation": null,
              "start": 1931,
              "end": 1939
            },
            "typeArguments": null,
            "start": 1931,
            "end": 1939
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
                "name": "_zod",
                "optional": false,
                "typeAnnotation": null,
                "start": 1944,
                "end": 1948
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "$ZodNullableInternals",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1950,
                    "end": 1971
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
                          "start": 1972,
                          "end": 1973
                        },
                        "typeArguments": null,
                        "start": 1972,
                        "end": 1973
                      }
                    ],
                    "start": 1971,
                    "end": 1974
                  },
                  "start": 1950,
                  "end": 1974
                },
                "start": 1948,
                "end": 1974
              },
              "accessibility": null,
              "static": false,
              "start": 1944,
              "end": 1975
            }
          ],
          "start": 1940,
          "end": 1977
        },
        "declare": false,
        "start": 1869,
        "end": 1977
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1862,
      "end": 1977
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "nullable",
        "optional": false,
        "typeAnnotation": null,
        "start": 1995,
        "end": 2003
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
              "start": 2004,
              "end": 2005
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "$ZodType",
                "optional": false,
                "typeAnnotation": null,
                "start": 2014,
                "end": 2022
              },
              "typeArguments": null,
              "start": 2014,
              "end": 2022
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2004,
            "end": 2022
          }
        ],
        "start": 2003,
        "end": 2023
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "inner",
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
                "start": 2031,
                "end": 2032
              },
              "typeArguments": null,
              "start": 2031,
              "end": 2032
            },
            "start": 2029,
            "end": 2032
          },
          "start": 2024,
          "end": 2032
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "$ZodNullable",
            "optional": false,
            "typeAnnotation": null,
            "start": 2035,
            "end": 2047
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
                  "start": 2048,
                  "end": 2049
                },
                "typeArguments": null,
                "start": 2048,
                "end": 2049
              }
            ],
            "start": 2047,
            "end": 2050
          },
          "start": 2035,
          "end": 2050
        },
        "start": 2033,
        "end": 2050
      },
      "body": null,
      "expression": false,
      "start": 1978,
      "end": 2051
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OptionalOutSchema",
        "optional": false,
        "typeAnnotation": null,
        "start": 2078,
        "end": 2095
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
              "name": "_zod",
              "optional": false,
              "typeAnnotation": null,
              "start": 2100,
              "end": 2104
            },
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
                      "name": "optout",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2108,
                      "end": 2114
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "optional",
                          "raw": "\"optional\"",
                          "start": 2116,
                          "end": 2126
                        },
                        "start": 2116,
                        "end": 2126
                      },
                      "start": 2114,
                      "end": 2126
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2108,
                    "end": 2126
                  }
                ],
                "start": 2106,
                "end": 2128
              },
              "start": 2104,
              "end": 2128
            },
            "accessibility": null,
            "static": false,
            "start": 2100,
            "end": 2128
          }
        ],
        "start": 2098,
        "end": 2130
      },
      "declare": false,
      "start": 2073,
      "end": 2131
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OptionalInSchema",
        "optional": false,
        "typeAnnotation": null,
        "start": 2137,
        "end": 2153
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
              "name": "_zod",
              "optional": false,
              "typeAnnotation": null,
              "start": 2158,
              "end": 2162
            },
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
                      "name": "optin",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2166,
                      "end": 2171
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "optional",
                          "raw": "\"optional\"",
                          "start": 2173,
                          "end": 2183
                        },
                        "start": 2173,
                        "end": 2183
                      },
                      "start": 2171,
                      "end": 2183
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2166,
                    "end": 2183
                  }
                ],
                "start": 2164,
                "end": 2185
              },
              "start": 2162,
              "end": 2185
            },
            "accessibility": null,
            "static": false,
            "start": 2158,
            "end": 2185
          }
        ],
        "start": 2156,
        "end": 2187
      },
      "declare": false,
      "start": 2132,
      "end": 2188
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "$ZodShape",
          "optional": false,
          "typeAnnotation": null,
          "start": 2202,
          "end": 2211
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Readonly",
            "optional": false,
            "typeAnnotation": null,
            "start": 2214,
            "end": 2222
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "k",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 2229,
                            "end": 2235
                          },
                          "start": 2227,
                          "end": 2235
                        },
                        "start": 2226,
                        "end": 2235
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "$ZodType",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2238,
                          "end": 2246
                        },
                        "typeArguments": null,
                        "start": 2238,
                        "end": 2246
                      },
                      "start": 2236,
                      "end": 2246
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 2225,
                    "end": 2246
                  }
                ],
                "start": 2223,
                "end": 2248
              }
            ],
            "start": 2222,
            "end": 2249
          },
          "start": 2214,
          "end": 2249
        },
        "declare": false,
        "start": 2197,
        "end": 2250
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 2190,
      "end": 2250
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Prettify",
          "optional": false,
          "typeAnnotation": null,
          "start": 2264,
          "end": 2272
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
                "start": 2273,
                "end": 2274
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 2273,
              "end": 2274
            }
          ],
          "start": 2272,
          "end": 2275
        },
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 2281,
                "end": 2282
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
                    "start": 2292,
                    "end": 2293
                  },
                  "typeArguments": null,
                  "start": 2292,
                  "end": 2293
                },
                "start": 2286,
                "end": 2293
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
                    "start": 2296,
                    "end": 2297
                  },
                  "typeArguments": null,
                  "start": 2296,
                  "end": 2297
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2298,
                    "end": 2299
                  },
                  "typeArguments": null,
                  "start": 2298,
                  "end": 2299
                },
                "start": 2296,
                "end": 2300
              },
              "optional": false,
              "readonly": null,
              "start": 2278,
              "end": 2302
            },
            {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 2305,
              "end": 2307
            }
          ],
          "start": 2278,
          "end": 2307
        },
        "declare": false,
        "start": 2259,
        "end": 2308
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 2252,
      "end": 2308
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "$InferObjectOutput",
          "optional": false,
          "typeAnnotation": null,
          "start": 2322,
          "end": 2340
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
                "start": 2341,
                "end": 2342
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "$ZodShape",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2351,
                  "end": 2360
                },
                "typeArguments": null,
                "start": 2351,
                "end": 2360
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 2341,
              "end": 2360
            }
          ],
          "start": 2340,
          "end": 2361
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Prettify",
            "optional": false,
            "typeAnnotation": null,
            "start": 2364,
            "end": 2372
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSMappedType",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "k",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2393,
                      "end": 2394
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
                          "start": 2404,
                          "end": 2405
                        },
                        "typeArguments": null,
                        "start": 2404,
                        "end": 2405
                      },
                      "start": 2398,
                      "end": 2405
                    },
                    "nameType": {
                      "type": "TSConditionalType",
                      "checkType": {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2409,
                            "end": 2410
                          },
                          "typeArguments": null,
                          "start": 2409,
                          "end": 2410
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "k",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2411,
                            "end": 2412
                          },
                          "typeArguments": null,
                          "start": 2411,
                          "end": 2412
                        },
                        "start": 2409,
                        "end": 2413
                      },
                      "extendsType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "OptionalOutSchema",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2422,
                          "end": 2439
                        },
                        "typeArguments": null,
                        "start": 2422,
                        "end": 2439
                      },
                      "trueType": {
                        "type": "TSNeverKeyword",
                        "start": 2442,
                        "end": 2447
                      },
                      "falseType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2450,
                          "end": 2451
                        },
                        "typeArguments": null,
                        "start": 2450,
                        "end": 2451
                      },
                      "start": 2409,
                      "end": 2451
                    },
                    "typeAnnotation": {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSIndexedAccessType",
                          "objectType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2454,
                              "end": 2455
                            },
                            "typeArguments": null,
                            "start": 2454,
                            "end": 2455
                          },
                          "indexType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "k",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2456,
                              "end": 2457
                            },
                            "typeArguments": null,
                            "start": 2456,
                            "end": 2457
                          },
                          "start": 2454,
                          "end": 2458
                        },
                        "indexType": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "_zod",
                            "raw": "\"_zod\"",
                            "start": 2459,
                            "end": 2465
                          },
                          "start": 2459,
                          "end": 2465
                        },
                        "start": 2454,
                        "end": 2466
                      },
                      "indexType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "output",
                          "raw": "\"output\"",
                          "start": 2467,
                          "end": 2475
                        },
                        "start": 2467,
                        "end": 2475
                      },
                      "start": 2454,
                      "end": 2476
                    },
                    "optional": false,
                    "readonly": "-",
                    "start": 2376,
                    "end": 2481
                  },
                  {
                    "type": "TSMappedType",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "k",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2501,
                      "end": 2502
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
                          "start": 2512,
                          "end": 2513
                        },
                        "typeArguments": null,
                        "start": 2512,
                        "end": 2513
                      },
                      "start": 2506,
                      "end": 2513
                    },
                    "nameType": {
                      "type": "TSConditionalType",
                      "checkType": {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2517,
                            "end": 2518
                          },
                          "typeArguments": null,
                          "start": 2517,
                          "end": 2518
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "k",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2519,
                            "end": 2520
                          },
                          "typeArguments": null,
                          "start": 2519,
                          "end": 2520
                        },
                        "start": 2517,
                        "end": 2521
                      },
                      "extendsType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "OptionalOutSchema",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2530,
                          "end": 2547
                        },
                        "typeArguments": null,
                        "start": 2530,
                        "end": 2547
                      },
                      "trueType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2550,
                          "end": 2551
                        },
                        "typeArguments": null,
                        "start": 2550,
                        "end": 2551
                      },
                      "falseType": {
                        "type": "TSNeverKeyword",
                        "start": 2554,
                        "end": 2559
                      },
                      "start": 2517,
                      "end": 2559
                    },
                    "typeAnnotation": {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSIndexedAccessType",
                          "objectType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2563,
                              "end": 2564
                            },
                            "typeArguments": null,
                            "start": 2563,
                            "end": 2564
                          },
                          "indexType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "k",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2565,
                              "end": 2566
                            },
                            "typeArguments": null,
                            "start": 2565,
                            "end": 2566
                          },
                          "start": 2563,
                          "end": 2567
                        },
                        "indexType": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "_zod",
                            "raw": "\"_zod\"",
                            "start": 2568,
                            "end": 2574
                          },
                          "start": 2568,
                          "end": 2574
                        },
                        "start": 2563,
                        "end": 2575
                      },
                      "indexType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "output",
                          "raw": "\"output\"",
                          "start": 2576,
                          "end": 2584
                        },
                        "start": 2576,
                        "end": 2584
                      },
                      "start": 2563,
                      "end": 2585
                    },
                    "optional": true,
                    "readonly": "-",
                    "start": 2484,
                    "end": 2590
                  }
                ],
                "start": 2376,
                "end": 2590
              }
            ],
            "start": 2372,
            "end": 2592
          },
          "start": 2364,
          "end": 2592
        },
        "declare": false,
        "start": 2317,
        "end": 2593
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 2310,
      "end": 2593
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "$InferObjectInput",
          "optional": false,
          "typeAnnotation": null,
          "start": 2606,
          "end": 2623
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
                "start": 2624,
                "end": 2625
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "$ZodShape",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2634,
                  "end": 2643
                },
                "typeArguments": null,
                "start": 2634,
                "end": 2643
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 2624,
              "end": 2643
            }
          ],
          "start": 2623,
          "end": 2644
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Prettify",
            "optional": false,
            "typeAnnotation": null,
            "start": 2647,
            "end": 2655
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSMappedType",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "k",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2676,
                      "end": 2677
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
                          "start": 2687,
                          "end": 2688
                        },
                        "typeArguments": null,
                        "start": 2687,
                        "end": 2688
                      },
                      "start": 2681,
                      "end": 2688
                    },
                    "nameType": {
                      "type": "TSConditionalType",
                      "checkType": {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2692,
                            "end": 2693
                          },
                          "typeArguments": null,
                          "start": 2692,
                          "end": 2693
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "k",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2694,
                            "end": 2695
                          },
                          "typeArguments": null,
                          "start": 2694,
                          "end": 2695
                        },
                        "start": 2692,
                        "end": 2696
                      },
                      "extendsType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "OptionalInSchema",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2705,
                          "end": 2721
                        },
                        "typeArguments": null,
                        "start": 2705,
                        "end": 2721
                      },
                      "trueType": {
                        "type": "TSNeverKeyword",
                        "start": 2724,
                        "end": 2729
                      },
                      "falseType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2732,
                          "end": 2733
                        },
                        "typeArguments": null,
                        "start": 2732,
                        "end": 2733
                      },
                      "start": 2692,
                      "end": 2733
                    },
                    "typeAnnotation": {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSIndexedAccessType",
                          "objectType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2736,
                              "end": 2737
                            },
                            "typeArguments": null,
                            "start": 2736,
                            "end": 2737
                          },
                          "indexType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "k",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2738,
                              "end": 2739
                            },
                            "typeArguments": null,
                            "start": 2738,
                            "end": 2739
                          },
                          "start": 2736,
                          "end": 2740
                        },
                        "indexType": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "_zod",
                            "raw": "\"_zod\"",
                            "start": 2741,
                            "end": 2747
                          },
                          "start": 2741,
                          "end": 2747
                        },
                        "start": 2736,
                        "end": 2748
                      },
                      "indexType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "input",
                          "raw": "\"input\"",
                          "start": 2749,
                          "end": 2756
                        },
                        "start": 2749,
                        "end": 2756
                      },
                      "start": 2736,
                      "end": 2757
                    },
                    "optional": false,
                    "readonly": "-",
                    "start": 2659,
                    "end": 2762
                  },
                  {
                    "type": "TSMappedType",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "k",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2782,
                      "end": 2783
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
                          "start": 2793,
                          "end": 2794
                        },
                        "typeArguments": null,
                        "start": 2793,
                        "end": 2794
                      },
                      "start": 2787,
                      "end": 2794
                    },
                    "nameType": {
                      "type": "TSConditionalType",
                      "checkType": {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2798,
                            "end": 2799
                          },
                          "typeArguments": null,
                          "start": 2798,
                          "end": 2799
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "k",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2800,
                            "end": 2801
                          },
                          "typeArguments": null,
                          "start": 2800,
                          "end": 2801
                        },
                        "start": 2798,
                        "end": 2802
                      },
                      "extendsType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "OptionalInSchema",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2811,
                          "end": 2827
                        },
                        "typeArguments": null,
                        "start": 2811,
                        "end": 2827
                      },
                      "trueType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2830,
                          "end": 2831
                        },
                        "typeArguments": null,
                        "start": 2830,
                        "end": 2831
                      },
                      "falseType": {
                        "type": "TSNeverKeyword",
                        "start": 2834,
                        "end": 2839
                      },
                      "start": 2798,
                      "end": 2839
                    },
                    "typeAnnotation": {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSIndexedAccessType",
                          "objectType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2843,
                              "end": 2844
                            },
                            "typeArguments": null,
                            "start": 2843,
                            "end": 2844
                          },
                          "indexType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "k",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2845,
                              "end": 2846
                            },
                            "typeArguments": null,
                            "start": 2845,
                            "end": 2846
                          },
                          "start": 2843,
                          "end": 2847
                        },
                        "indexType": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "_zod",
                            "raw": "\"_zod\"",
                            "start": 2848,
                            "end": 2854
                          },
                          "start": 2848,
                          "end": 2854
                        },
                        "start": 2843,
                        "end": 2855
                      },
                      "indexType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "input",
                          "raw": "\"input\"",
                          "start": 2856,
                          "end": 2863
                        },
                        "start": 2856,
                        "end": 2863
                      },
                      "start": 2843,
                      "end": 2864
                    },
                    "optional": true,
                    "readonly": "-",
                    "start": 2765,
                    "end": 2869
                  }
                ],
                "start": 2659,
                "end": 2869
              }
            ],
            "start": 2655,
            "end": 2871
          },
          "start": 2647,
          "end": 2871
        },
        "declare": false,
        "start": 2601,
        "end": 2872
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 2594,
      "end": 2872
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "$ZodObjectInternals",
          "optional": false,
          "typeAnnotation": null,
          "start": 2891,
          "end": 2910
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "Shape",
                "optional": false,
                "typeAnnotation": null,
                "start": 2911,
                "end": 2916
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "$ZodShape",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2925,
                  "end": 2934
                },
                "typeArguments": null,
                "start": 2925,
                "end": 2934
              },
              "default": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "$ZodShape",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2937,
                  "end": 2946
                },
                "typeArguments": null,
                "start": 2937,
                "end": 2946
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 2911,
              "end": 2946
            }
          ],
          "start": 2910,
          "end": 2947
        },
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "$ZodTypeInternals",
              "optional": false,
              "typeAnnotation": null,
              "start": 2956,
              "end": 2973
            },
            "typeArguments": null,
            "start": 2956,
            "end": 2973
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
                "name": "def",
                "optional": false,
                "typeAnnotation": null,
                "start": 2978,
                "end": 2981
              },
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
                        "name": "type",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2985,
                        "end": 2989
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "object",
                            "raw": "\"object\"",
                            "start": 2991,
                            "end": 2999
                          },
                          "start": 2991,
                          "end": 2999
                        },
                        "start": 2989,
                        "end": 2999
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2985,
                      "end": 3000
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "shape",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3001,
                        "end": 3006
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Shape",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3008,
                            "end": 3013
                          },
                          "typeArguments": null,
                          "start": 3008,
                          "end": 3013
                        },
                        "start": 3006,
                        "end": 3013
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 3001,
                      "end": 3013
                    }
                  ],
                  "start": 2983,
                  "end": 3015
                },
                "start": 2981,
                "end": 3015
              },
              "accessibility": null,
              "static": false,
              "start": 2978,
              "end": 3016
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "output",
                "optional": false,
                "typeAnnotation": null,
                "start": 3019,
                "end": 3025
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "$InferObjectOutput",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3027,
                    "end": 3045
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Shape",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3046,
                          "end": 3051
                        },
                        "typeArguments": null,
                        "start": 3046,
                        "end": 3051
                      }
                    ],
                    "start": 3045,
                    "end": 3052
                  },
                  "start": 3027,
                  "end": 3052
                },
                "start": 3025,
                "end": 3052
              },
              "accessibility": null,
              "static": false,
              "start": 3019,
              "end": 3053
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "input",
                "optional": false,
                "typeAnnotation": null,
                "start": 3056,
                "end": 3061
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "$InferObjectInput",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3063,
                    "end": 3080
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Shape",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3081,
                          "end": 3086
                        },
                        "typeArguments": null,
                        "start": 3081,
                        "end": 3086
                      }
                    ],
                    "start": 3080,
                    "end": 3087
                  },
                  "start": 3063,
                  "end": 3087
                },
                "start": 3061,
                "end": 3087
              },
              "accessibility": null,
              "static": false,
              "start": 3056,
              "end": 3088
            }
          ],
          "start": 2974,
          "end": 3090
        },
        "declare": false,
        "start": 2881,
        "end": 3090
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 2874,
      "end": 3090
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "$ZodObject",
          "optional": false,
          "typeAnnotation": null,
          "start": 3108,
          "end": 3118
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "Shape",
                "optional": false,
                "typeAnnotation": null,
                "start": 3119,
                "end": 3124
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "$ZodShape",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3133,
                  "end": 3142
                },
                "typeArguments": null,
                "start": 3133,
                "end": 3142
              },
              "default": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "$ZodShape",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3145,
                  "end": 3154
                },
                "typeArguments": null,
                "start": 3145,
                "end": 3154
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 3119,
              "end": 3154
            }
          ],
          "start": 3118,
          "end": 3155
        },
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "$ZodType",
              "optional": false,
              "typeAnnotation": null,
              "start": 3164,
              "end": 3172
            },
            "typeArguments": null,
            "start": 3164,
            "end": 3172
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
                "name": "_zod",
                "optional": false,
                "typeAnnotation": null,
                "start": 3177,
                "end": 3181
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "$ZodObjectInternals",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3183,
                    "end": 3202
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Shape",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3203,
                          "end": 3208
                        },
                        "typeArguments": null,
                        "start": 3203,
                        "end": 3208
                      }
                    ],
                    "start": 3202,
                    "end": 3209
                  },
                  "start": 3183,
                  "end": 3209
                },
                "start": 3181,
                "end": 3209
              },
              "accessibility": null,
              "static": false,
              "start": 3177,
              "end": 3210
            }
          ],
          "start": 3173,
          "end": 3212
        },
        "declare": false,
        "start": 3098,
        "end": 3212
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 3091,
      "end": 3212
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "object",
        "optional": false,
        "typeAnnotation": null,
        "start": 3230,
        "end": 3236
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
              "start": 3237,
              "end": 3238
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "$ZodShape",
                "optional": false,
                "typeAnnotation": null,
                "start": 3247,
                "end": 3256
              },
              "typeArguments": null,
              "start": 3247,
              "end": 3256
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3237,
            "end": 3256
          }
        ],
        "start": 3236,
        "end": 3257
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "shape",
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
                "start": 3265,
                "end": 3266
              },
              "typeArguments": null,
              "start": 3265,
              "end": 3266
            },
            "start": 3263,
            "end": 3266
          },
          "start": 3258,
          "end": 3266
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "$ZodObject",
            "optional": false,
            "typeAnnotation": null,
            "start": 3269,
            "end": 3279
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
                  "start": 3280,
                  "end": 3281
                },
                "typeArguments": null,
                "start": 3280,
                "end": 3281
              }
            ],
            "start": 3279,
            "end": 3282
          },
          "start": 3269,
          "end": 3282
        },
        "start": 3267,
        "end": 3282
      },
      "body": null,
      "expression": false,
      "start": 3213,
      "end": 3283
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 3298,
              "end": 3299
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "string",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3304,
                    "end": 3310
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "string",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3304,
                    "end": 3310
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 3304,
                  "end": 3310
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "array",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3312,
                    "end": 3317
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "array",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3312,
                    "end": 3317
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 3312,
                  "end": 3317
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "object",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3319,
                    "end": 3325
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "object",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3319,
                    "end": 3325
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 3319,
                  "end": 3325
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "optional",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3327,
                    "end": 3335
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "optional",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3327,
                    "end": 3335
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 3327,
                  "end": 3335
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nullable",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3337,
                    "end": 3345
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nullable",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3337,
                    "end": 3345
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 3337,
                  "end": 3345
                }
              ],
              "start": 3302,
              "end": 3347
            },
            "definite": false,
            "start": 3298,
            "end": 3347
          }
        ],
        "declare": false,
        "start": 3292,
        "end": 3348
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 3285,
      "end": 3348
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
            "name": "Category",
            "optional": false,
            "typeAnnotation": null,
            "start": 3469,
            "end": 3477
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null,
                "start": 3480,
                "end": 3481
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "object",
                "optional": false,
                "typeAnnotation": null,
                "start": 3482,
                "end": 3488
              },
              "optional": false,
              "computed": false,
              "start": 3480,
              "end": 3488
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
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3493,
                      "end": 3497
                    },
                    "value": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3499,
                          "end": 3500
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "string",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3501,
                          "end": 3507
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3499,
                        "end": 3507
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 3499,
                      "end": 3509
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3493,
                    "end": 3509
                  },
                  {
                    "type": "Property",
                    "kind": "get",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "subcategories",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3517,
                      "end": 3530
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
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
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "z",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3546,
                                  "end": 3547
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "array",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3548,
                                  "end": 3553
                                },
                                "optional": false,
                                "computed": false,
                                "start": 3546,
                                "end": 3553
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Category",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3554,
                                  "end": 3562
                                }
                              ],
                              "optional": false,
                              "start": 3546,
                              "end": 3563
                            },
                            "start": 3539,
                            "end": 3564
                          }
                        ],
                        "start": 3533,
                        "end": 3568
                      },
                      "expression": false,
                      "start": 3530,
                      "end": 3568
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3513,
                    "end": 3568
                  }
                ],
                "start": 3489,
                "end": 3571
              }
            ],
            "optional": false,
            "start": 3480,
            "end": 3572
          },
          "definite": false,
          "start": 3469,
          "end": 3572
        }
      ],
      "declare": false,
      "start": 3463,
      "end": 3573
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Category",
        "optional": false,
        "typeAnnotation": null,
        "start": 3579,
        "end": 3587
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "output",
          "optional": false,
          "typeAnnotation": null,
          "start": 3590,
          "end": 3596
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Category",
                "optional": false,
                "typeAnnotation": null,
                "start": 3604,
                "end": 3612
              },
              "typeArguments": null,
              "start": 3597,
              "end": 3612
            }
          ],
          "start": 3596,
          "end": 3613
        },
        "start": 3590,
        "end": 3613
      },
      "declare": false,
      "start": 3574,
      "end": 3614
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "_c",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Category",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3632,
                    "end": 3640
                  },
                  "typeArguments": null,
                  "start": 3632,
                  "end": 3640
                },
                "start": 3630,
                "end": 3640
              },
              "start": 3628,
              "end": 3640
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3645,
                    "end": 3649
                  },
                  "value": {
                    "type": "Literal",
                    "value": "a",
                    "raw": "\"a\"",
                    "start": 3651,
                    "end": 3654
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 3645,
                  "end": 3654
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "subcategories",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3656,
                    "end": 3669
                  },
                  "value": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "name",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3674,
                              "end": 3678
                            },
                            "value": {
                              "type": "Literal",
                              "value": "b",
                              "raw": "\"b\"",
                              "start": 3680,
                              "end": 3683
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 3674,
                            "end": 3683
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "subcategories",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3685,
                              "end": 3698
                            },
                            "value": {
                              "type": "ArrayExpression",
                              "elements": [],
                              "start": 3700,
                              "end": 3702
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 3685,
                            "end": 3702
                          }
                        ],
                        "start": 3672,
                        "end": 3704
                      }
                    ],
                    "start": 3671,
                    "end": 3705
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 3656,
                  "end": 3705
                }
              ],
              "start": 3643,
              "end": 3707
            },
            "definite": false,
            "start": 3628,
            "end": 3707
          }
        ],
        "declare": false,
        "start": 3622,
        "end": 3708
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 3615,
      "end": 3708
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
            "name": "User",
            "optional": false,
            "typeAnnotation": null,
            "start": 3740,
            "end": 3744
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null,
                "start": 3747,
                "end": 3748
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "object",
                "optional": false,
                "typeAnnotation": null,
                "start": 3749,
                "end": 3755
              },
              "optional": false,
              "computed": false,
              "start": 3747,
              "end": 3755
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
                      "name": "email",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3760,
                      "end": 3765
                    },
                    "value": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3767,
                          "end": 3768
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "string",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3769,
                          "end": 3775
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3767,
                        "end": 3775
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 3767,
                      "end": 3777
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3760,
                    "end": 3777
                  },
                  {
                    "type": "Property",
                    "kind": "get",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "posts",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3785,
                      "end": 3790
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
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
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "z",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3806,
                                  "end": 3807
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "array",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3808,
                                  "end": 3813
                                },
                                "optional": false,
                                "computed": false,
                                "start": 3806,
                                "end": 3813
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Post",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3814,
                                  "end": 3818
                                }
                              ],
                              "optional": false,
                              "start": 3806,
                              "end": 3819
                            },
                            "start": 3799,
                            "end": 3820
                          }
                        ],
                        "start": 3793,
                        "end": 3824
                      },
                      "expression": false,
                      "start": 3790,
                      "end": 3824
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3781,
                    "end": 3824
                  }
                ],
                "start": 3756,
                "end": 3827
              }
            ],
            "optional": false,
            "start": 3747,
            "end": 3828
          },
          "definite": false,
          "start": 3740,
          "end": 3828
        }
      ],
      "declare": false,
      "start": 3734,
      "end": 3829
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
            "name": "Post",
            "optional": false,
            "typeAnnotation": null,
            "start": 3836,
            "end": 3840
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null,
                "start": 3843,
                "end": 3844
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "object",
                "optional": false,
                "typeAnnotation": null,
                "start": 3845,
                "end": 3851
              },
              "optional": false,
              "computed": false,
              "start": 3843,
              "end": 3851
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
                      "name": "title",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3856,
                      "end": 3861
                    },
                    "value": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3863,
                          "end": 3864
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "string",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3865,
                          "end": 3871
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3863,
                        "end": 3871
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 3863,
                      "end": 3873
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3856,
                    "end": 3873
                  },
                  {
                    "type": "Property",
                    "kind": "get",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "author",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3881,
                      "end": 3887
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
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
                              "name": "User",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3903,
                              "end": 3907
                            },
                            "start": 3896,
                            "end": 3908
                          }
                        ],
                        "start": 3890,
                        "end": 3912
                      },
                      "expression": false,
                      "start": 3887,
                      "end": 3912
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3877,
                    "end": 3912
                  }
                ],
                "start": 3852,
                "end": 3915
              }
            ],
            "optional": false,
            "start": 3843,
            "end": 3916
          },
          "definite": false,
          "start": 3836,
          "end": 3916
        }
      ],
      "declare": false,
      "start": 3830,
      "end": 3917
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "UserT",
          "optional": false,
          "typeAnnotation": null,
          "start": 3930,
          "end": 3935
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "output",
            "optional": false,
            "typeAnnotation": null,
            "start": 3938,
            "end": 3944
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "User",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3952,
                  "end": 3956
                },
                "typeArguments": null,
                "start": 3945,
                "end": 3956
              }
            ],
            "start": 3944,
            "end": 3957
          },
          "start": 3938,
          "end": 3957
        },
        "declare": false,
        "start": 3925,
        "end": 3958
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 3918,
      "end": 3958
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "_u",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "UserT",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3976,
                    "end": 3981
                  },
                  "typeArguments": null,
                  "start": 3976,
                  "end": 3981
                },
                "start": 3974,
                "end": 3981
              },
              "start": 3972,
              "end": 3981
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "email",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3986,
                    "end": 3991
                  },
                  "value": {
                    "type": "Literal",
                    "value": "e",
                    "raw": "\"e\"",
                    "start": 3993,
                    "end": 3996
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 3986,
                  "end": 3996
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "posts",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3998,
                    "end": 4003
                  },
                  "value": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "title",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4008,
                              "end": 4013
                            },
                            "value": {
                              "type": "Literal",
                              "value": "t",
                              "raw": "\"t\"",
                              "start": 4015,
                              "end": 4018
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 4008,
                            "end": 4018
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "author",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4020,
                              "end": 4026
                            },
                            "value": {
                              "type": "ObjectExpression",
                              "properties": [
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "email",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4030,
                                    "end": 4035
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "value": "e2",
                                    "raw": "\"e2\"",
                                    "start": 4037,
                                    "end": 4041
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 4030,
                                  "end": 4041
                                },
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "posts",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4043,
                                    "end": 4048
                                  },
                                  "value": {
                                    "type": "ArrayExpression",
                                    "elements": [],
                                    "start": 4050,
                                    "end": 4052
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 4043,
                                  "end": 4052
                                }
                              ],
                              "start": 4028,
                              "end": 4054
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 4020,
                            "end": 4054
                          }
                        ],
                        "start": 4006,
                        "end": 4056
                      }
                    ],
                    "start": 4005,
                    "end": 4057
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 3998,
                  "end": 4057
                }
              ],
              "start": 3984,
              "end": 4059
            },
            "definite": false,
            "start": 3972,
            "end": 4059
          }
        ],
        "declare": false,
        "start": 3966,
        "end": 4060
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 3959,
      "end": 4060
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
            "name": "Activity",
            "optional": false,
            "typeAnnotation": null,
            "start": 4097,
            "end": 4105
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null,
                "start": 4108,
                "end": 4109
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "object",
                "optional": false,
                "typeAnnotation": null,
                "start": 4110,
                "end": 4116
              },
              "optional": false,
              "computed": false,
              "start": 4108,
              "end": 4116
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
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4121,
                      "end": 4125
                    },
                    "value": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4127,
                          "end": 4128
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "string",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4129,
                          "end": 4135
                        },
                        "optional": false,
                        "computed": false,
                        "start": 4127,
                        "end": 4135
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 4127,
                      "end": 4137
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 4121,
                    "end": 4137
                  },
                  {
                    "type": "Property",
                    "kind": "get",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "subactivities",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4145,
                      "end": 4158
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
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
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "z",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4174,
                                  "end": 4175
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "nullable",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4176,
                                  "end": 4184
                                },
                                "optional": false,
                                "computed": false,
                                "start": 4174,
                                "end": 4184
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "z",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 4185,
                                      "end": 4186
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "array",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 4187,
                                      "end": 4192
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 4185,
                                    "end": 4192
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Activity",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 4193,
                                      "end": 4201
                                    }
                                  ],
                                  "optional": false,
                                  "start": 4185,
                                  "end": 4202
                                }
                              ],
                              "optional": false,
                              "start": 4174,
                              "end": 4203
                            },
                            "start": 4167,
                            "end": 4204
                          }
                        ],
                        "start": 4161,
                        "end": 4208
                      },
                      "expression": false,
                      "start": 4158,
                      "end": 4208
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 4141,
                    "end": 4208
                  }
                ],
                "start": 4117,
                "end": 4211
              }
            ],
            "optional": false,
            "start": 4108,
            "end": 4212
          },
          "definite": false,
          "start": 4097,
          "end": 4212
        }
      ],
      "declare": false,
      "start": 4091,
      "end": 4213
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ActivityT",
          "optional": false,
          "typeAnnotation": null,
          "start": 4226,
          "end": 4235
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "output",
            "optional": false,
            "typeAnnotation": null,
            "start": 4238,
            "end": 4244
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Activity",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4252,
                  "end": 4260
                },
                "typeArguments": null,
                "start": 4245,
                "end": 4260
              }
            ],
            "start": 4244,
            "end": 4261
          },
          "start": 4238,
          "end": 4261
        },
        "declare": false,
        "start": 4221,
        "end": 4262
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 4214,
      "end": 4262
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
            "name": "Node1",
            "optional": false,
            "typeAnnotation": null,
            "start": 4323,
            "end": 4328
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null,
                "start": 4331,
                "end": 4332
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "object",
                "optional": false,
                "typeAnnotation": null,
                "start": 4333,
                "end": 4339
              },
              "optional": false,
              "computed": false,
              "start": 4331,
              "end": 4339
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
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4344,
                      "end": 4348
                    },
                    "value": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4350,
                          "end": 4351
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "string",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4352,
                          "end": 4358
                        },
                        "optional": false,
                        "computed": false,
                        "start": 4350,
                        "end": 4358
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 4350,
                      "end": 4360
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 4344,
                    "end": 4360
                  },
                  {
                    "type": "Property",
                    "kind": "get",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "children",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4368,
                      "end": 4376
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
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
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "z",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4392,
                                  "end": 4393
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "optional",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4394,
                                  "end": 4402
                                },
                                "optional": false,
                                "computed": false,
                                "start": 4392,
                                "end": 4402
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "NodeArray",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4403,
                                  "end": 4412
                                }
                              ],
                              "optional": false,
                              "start": 4392,
                              "end": 4413
                            },
                            "start": 4385,
                            "end": 4414
                          }
                        ],
                        "start": 4379,
                        "end": 4418
                      },
                      "expression": false,
                      "start": 4376,
                      "end": 4418
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 4364,
                    "end": 4418
                  }
                ],
                "start": 4340,
                "end": 4421
              }
            ],
            "optional": false,
            "start": 4331,
            "end": 4422
          },
          "definite": false,
          "start": 4323,
          "end": 4422
        }
      ],
      "declare": false,
      "start": 4317,
      "end": 4423
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
            "name": "NodeArray",
            "optional": false,
            "typeAnnotation": null,
            "start": 4430,
            "end": 4439
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null,
                "start": 4442,
                "end": 4443
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "array",
                "optional": false,
                "typeAnnotation": null,
                "start": 4444,
                "end": 4449
              },
              "optional": false,
              "computed": false,
              "start": 4442,
              "end": 4449
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "Node1",
                "optional": false,
                "typeAnnotation": null,
                "start": 4450,
                "end": 4455
              }
            ],
            "optional": false,
            "start": 4442,
            "end": 4456
          },
          "definite": false,
          "start": 4430,
          "end": 4456
        }
      ],
      "declare": false,
      "start": 4424,
      "end": 4457
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Node1T",
          "optional": false,
          "typeAnnotation": null,
          "start": 4470,
          "end": 4476
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "output",
            "optional": false,
            "typeAnnotation": null,
            "start": 4479,
            "end": 4485
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Node1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4493,
                  "end": 4498
                },
                "typeArguments": null,
                "start": 4486,
                "end": 4498
              }
            ],
            "start": 4485,
            "end": 4499
          },
          "start": 4479,
          "end": 4499
        },
        "declare": false,
        "start": 4465,
        "end": 4500
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 4458,
      "end": 4500
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 86,
  "end": 4500
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 86,
    "end": 92
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 93,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "_$ZodTypeInternals",
    "start": 103,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "def",
    "start": 126,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 131,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 138,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "optin",
    "start": 142,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 148,
    "end": 149
  },
  {
    "type": "String",
    "value": "\"optional\"",
    "start": 150,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 163,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 172,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "optout",
    "start": 176,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 183,
    "end": 184
  },
  {
    "type": "String",
    "value": "\"optional\"",
    "start": 185,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 198,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 209,
    "end": 210
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 212,
    "end": 218
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 219,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "$ZodTypeInternals",
    "start": 229,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "out",
    "start": 247,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 253,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 255,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 262,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "out",
    "start": 264,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 270,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 272,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 279,
    "end": 280
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 281,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "_$ZodTypeInternals",
    "start": 289,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 308,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "output",
    "start": 312,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 318,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 320,
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
    "value": "input",
    "start": 325,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 330,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "I",
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
    "type": "Punctuator",
    "value": "}",
    "start": 335,
    "end": 336
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 338,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 345,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "output",
    "start": 350,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 356,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 357,
    "end": 358
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 359,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "$ZodType",
    "start": 367,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 377,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 380,
    "end": 381
  },
  {
    "type": "String",
    "value": "\"_zod\"",
    "start": 381,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 388,
    "end": 389
  },
  {
    "type": "String",
    "value": "\"output\"",
    "start": 389,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "export",
    "start": 400,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 407,
    "end": 411
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 412,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 417,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 418,
    "end": 419
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 420,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "$ZodType",
    "start": 428,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 438,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 441,
    "end": 442
  },
  {
    "type": "String",
    "value": "\"_zod\"",
    "start": 442,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 449,
    "end": 450
  },
  {
    "type": "String",
    "value": "\"input\"",
    "start": 450,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 457,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 458,
    "end": 459
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 461,
    "end": 467
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 468,
    "end": 477
  },
  {
    "type": "Identifier",
    "value": "$ZodType",
    "start": 478,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 486,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 487,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 489,
    "end": 490
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 491,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 498,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 502,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 504,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 511,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "Internals",
    "start": 513,
    "end": 522
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 523,
    "end": 530
  },
  {
    "type": "Identifier",
    "value": "$ZodTypeInternals",
    "start": 531,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 548,
    "end": 549
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 550,
    "end": 551
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 552,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Identifier",
    "value": "$ZodTypeInternals",
    "start": 557,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 574,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 575,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 576,
    "end": 577
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 578,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 579,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 580,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 582,
    "end": 583
  },
  {
    "type": "Identifier",
    "value": "_zod",
    "start": 586,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 590,
    "end": 591
  },
  {
    "type": "Identifier",
    "value": "Internals",
    "start": 592,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 601,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 603,
    "end": 604
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 626,
    "end": 632
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 633,
    "end": 642
  },
  {
    "type": "Identifier",
    "value": "$ZodStringInternals",
    "start": 643,
    "end": 662
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 663,
    "end": 670
  },
  {
    "type": "Identifier",
    "value": "$ZodTypeInternals",
    "start": 671,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 688,
    "end": 689
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 689,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 695,
    "end": 696
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 697,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 703,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 705,
    "end": 706
  },
  {
    "type": "Identifier",
    "value": "def",
    "start": 709,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 712,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 714,
    "end": 715
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 716,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 720,
    "end": 721
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 722,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 731,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 732,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 734,
    "end": 735
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 736,
    "end": 742
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 743,
    "end": 752
  },
  {
    "type": "Identifier",
    "value": "$ZodString",
    "start": 753,
    "end": 763
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 764,
    "end": 771
  },
  {
    "type": "Identifier",
    "value": "$ZodType",
    "start": 772,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 781,
    "end": 782
  },
  {
    "type": "Identifier",
    "value": "_zod",
    "start": 785,
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
    "value": "$ZodStringInternals",
    "start": 791,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 810,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 812,
    "end": 813
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 814,
    "end": 821
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 822,
    "end": 830
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 831,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 837,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 838,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 839,
    "end": 840
  },
  {
    "type": "Identifier",
    "value": "$ZodString",
    "start": 841,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 851,
    "end": 852
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 873,
    "end": 879
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 880,
    "end": 889
  },
  {
    "type": "Identifier",
    "value": "$ZodArrayInternals",
    "start": 890,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 908,
    "end": 909
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 909,
    "end": 910
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 911,
    "end": 918
  },
  {
    "type": "Identifier",
    "value": "$ZodType",
    "start": 919,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 928,
    "end": 929
  },
  {
    "type": "Identifier",
    "value": "$ZodType",
    "start": 930,
    "end": 938
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 938,
    "end": 939
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 940,
    "end": 947
  },
  {
    "type": "Identifier",
    "value": "$ZodTypeInternals",
    "start": 948,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 965,
    "end": 966
  },
  {
    "type": "Identifier",
    "value": "output",
    "start": 966,
    "end": 972
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 972,
    "end": 973
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 973,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 974,
    "end": 975
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 975,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 976,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 977,
    "end": 978
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 979,
    "end": 984
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 984,
    "end": 985
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 985,
    "end": 986
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 986,
    "end": 987
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 987,
    "end": 988
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 988,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 989,
    "end": 990
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 991,
    "end": 992
  },
  {
    "type": "Identifier",
    "value": "def",
    "start": 995,
    "end": 998
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 998,
    "end": 999
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1002,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "String",
    "value": "\"array\"",
    "start": 1008,
    "end": 1015
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Identifier",
    "value": "element",
    "start": 1017,
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
    "value": "T",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1028,
    "end": 1029
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1033,
    "end": 1039
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1040,
    "end": 1049
  },
  {
    "type": "Identifier",
    "value": "$ZodArray",
    "start": 1050,
    "end": 1059
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1059,
    "end": 1060
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1062,
    "end": 1069
  },
  {
    "type": "Identifier",
    "value": "$ZodType",
    "start": 1070,
    "end": 1078
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Identifier",
    "value": "$ZodType",
    "start": 1081,
    "end": 1089
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1089,
    "end": 1090
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1091,
    "end": 1098
  },
  {
    "type": "Identifier",
    "value": "$ZodType",
    "start": 1099,
    "end": 1107
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1108,
    "end": 1109
  },
  {
    "type": "Identifier",
    "value": "_zod",
    "start": 1112,
    "end": 1116
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1116,
    "end": 1117
  },
  {
    "type": "Identifier",
    "value": "$ZodArrayInternals",
    "start": 1118,
    "end": 1136
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1136,
    "end": 1137
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1138,
    "end": 1139
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1139,
    "end": 1140
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1141,
    "end": 1142
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1143,
    "end": 1150
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1151,
    "end": 1159
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 1160,
    "end": 1165
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1165,
    "end": 1166
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1166,
    "end": 1167
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1168,
    "end": 1175
  },
  {
    "type": "Identifier",
    "value": "$ZodType",
    "start": 1176,
    "end": 1184
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1184,
    "end": 1185
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "Identifier",
    "value": "element",
    "start": 1186,
    "end": 1193
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1193,
    "end": 1194
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1195,
    "end": 1196
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1196,
    "end": 1197
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1197,
    "end": 1198
  },
  {
    "type": "Identifier",
    "value": "$ZodArray",
    "start": 1199,
    "end": 1208
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1208,
    "end": 1209
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1209,
    "end": 1210
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1210,
    "end": 1211
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1236,
    "end": 1242
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1243,
    "end": 1252
  },
  {
    "type": "Identifier",
    "value": "$ZodOptionalInternals",
    "start": 1253,
    "end": 1274
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1274,
    "end": 1275
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1275,
    "end": 1276
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1277,
    "end": 1284
  },
  {
    "type": "Identifier",
    "value": "$ZodType",
    "start": 1285,
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
    "value": "$ZodType",
    "start": 1296,
    "end": 1304
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1304,
    "end": 1305
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1308,
    "end": 1315
  },
  {
    "type": "Identifier",
    "value": "$ZodTypeInternals",
    "start": 1316,
    "end": 1333
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1333,
    "end": 1334
  },
  {
    "type": "Identifier",
    "value": "output",
    "start": 1334,
    "end": 1340
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1340,
    "end": 1341
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1341,
    "end": 1342
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1342,
    "end": 1343
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1344,
    "end": 1345
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1346,
    "end": 1355
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1355,
    "end": 1356
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 1357,
    "end": 1362
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1362,
    "end": 1363
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1363,
    "end": 1364
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1364,
    "end": 1365
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1366,
    "end": 1367
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1368,
    "end": 1377
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1377,
    "end": 1378
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1379,
    "end": 1380
  },
  {
    "type": "Identifier",
    "value": "def",
    "start": 1383,
    "end": 1386
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1386,
    "end": 1387
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1388,
    "end": 1389
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1390,
    "end": 1394
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1394,
    "end": 1395
  },
  {
    "type": "String",
    "value": "\"optional\"",
    "start": 1396,
    "end": 1406
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1406,
    "end": 1407
  },
  {
    "type": "Identifier",
    "value": "innerType",
    "start": 1408,
    "end": 1417
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1417,
    "end": 1418
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1419,
    "end": 1420
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1421,
    "end": 1422
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1422,
    "end": 1423
  },
  {
    "type": "Identifier",
    "value": "optin",
    "start": 1426,
    "end": 1431
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1431,
    "end": 1432
  },
  {
    "type": "String",
    "value": "\"optional\"",
    "start": 1433,
    "end": 1443
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1443,
    "end": 1444
  },
  {
    "type": "Identifier",
    "value": "optout",
    "start": 1447,
    "end": 1453
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1453,
    "end": 1454
  },
  {
    "type": "String",
    "value": "\"optional\"",
    "start": 1455,
    "end": 1465
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1465,
    "end": 1466
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1467,
    "end": 1468
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1469,
    "end": 1475
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1476,
    "end": 1485
  },
  {
    "type": "Identifier",
    "value": "$ZodOptional",
    "start": 1486,
    "end": 1498
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1498,
    "end": 1499
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1499,
    "end": 1500
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1501,
    "end": 1508
  },
  {
    "type": "Identifier",
    "value": "$ZodType",
    "start": 1509,
    "end": 1517
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1518,
    "end": 1519
  },
  {
    "type": "Identifier",
    "value": "$ZodType",
    "start": 1520,
    "end": 1528
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "$ZodType",
    "start": 1538,
    "end": 1546
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1547,
    "end": 1548
  },
  {
    "type": "Identifier",
    "value": "_zod",
    "start": 1551,
    "end": 1555
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1555,
    "end": 1556
  },
  {
    "type": "Identifier",
    "value": "$ZodOptionalInternals",
    "start": 1557,
    "end": 1578
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1578,
    "end": 1579
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1579,
    "end": 1580
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1580,
    "end": 1581
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1581,
    "end": 1582
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1583,
    "end": 1584
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1585,
    "end": 1592
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1593,
    "end": 1601
  },
  {
    "type": "Identifier",
    "value": "optional",
    "start": 1602,
    "end": 1610
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1610,
    "end": 1611
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1611,
    "end": 1612
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1613,
    "end": 1620
  },
  {
    "type": "Identifier",
    "value": "$ZodType",
    "start": 1621,
    "end": 1629
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1629,
    "end": 1630
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1630,
    "end": 1631
  },
  {
    "type": "Identifier",
    "value": "inner",
    "start": 1631,
    "end": 1636
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1636,
    "end": 1637
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1638,
    "end": 1639
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Identifier",
    "value": "$ZodOptional",
    "start": 1642,
    "end": 1654
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1654,
    "end": 1655
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1655,
    "end": 1656
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1656,
    "end": 1657
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1657,
    "end": 1658
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1682,
    "end": 1688
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1689,
    "end": 1698
  },
  {
    "type": "Identifier",
    "value": "$ZodNullableInternals",
    "start": 1699,
    "end": 1720
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1720,
    "end": 1721
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1721,
    "end": 1722
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1723,
    "end": 1730
  },
  {
    "type": "Identifier",
    "value": "$ZodType",
    "start": 1731,
    "end": 1739
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1740,
    "end": 1741
  },
  {
    "type": "Identifier",
    "value": "$ZodType",
    "start": 1742,
    "end": 1750
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1750,
    "end": 1751
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1754,
    "end": 1761
  },
  {
    "type": "Identifier",
    "value": "$ZodTypeInternals",
    "start": 1762,
    "end": 1779
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1779,
    "end": 1780
  },
  {
    "type": "Identifier",
    "value": "output",
    "start": 1780,
    "end": 1786
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1786,
    "end": 1787
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1787,
    "end": 1788
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1788,
    "end": 1789
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1790,
    "end": 1791
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1792,
    "end": 1796
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1796,
    "end": 1797
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 1798,
    "end": 1803
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1803,
    "end": 1804
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1804,
    "end": 1805
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1805,
    "end": 1806
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1807,
    "end": 1808
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1809,
    "end": 1813
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1813,
    "end": 1814
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1815,
    "end": 1816
  },
  {
    "type": "Identifier",
    "value": "def",
    "start": 1819,
    "end": 1822
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1822,
    "end": 1823
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1824,
    "end": 1825
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1826,
    "end": 1830
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1830,
    "end": 1831
  },
  {
    "type": "String",
    "value": "\"nullable\"",
    "start": 1832,
    "end": 1842
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1842,
    "end": 1843
  },
  {
    "type": "Identifier",
    "value": "innerType",
    "start": 1844,
    "end": 1853
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1853,
    "end": 1854
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1855,
    "end": 1856
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1857,
    "end": 1858
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1858,
    "end": 1859
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1860,
    "end": 1861
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1862,
    "end": 1868
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1869,
    "end": 1878
  },
  {
    "type": "Identifier",
    "value": "$ZodNullable",
    "start": 1879,
    "end": 1891
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1891,
    "end": 1892
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1892,
    "end": 1893
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1894,
    "end": 1901
  },
  {
    "type": "Identifier",
    "value": "$ZodType",
    "start": 1902,
    "end": 1910
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1911,
    "end": 1912
  },
  {
    "type": "Identifier",
    "value": "$ZodType",
    "start": 1913,
    "end": 1921
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1921,
    "end": 1922
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1923,
    "end": 1930
  },
  {
    "type": "Identifier",
    "value": "$ZodType",
    "start": 1931,
    "end": 1939
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1940,
    "end": 1941
  },
  {
    "type": "Identifier",
    "value": "_zod",
    "start": 1944,
    "end": 1948
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1948,
    "end": 1949
  },
  {
    "type": "Identifier",
    "value": "$ZodNullableInternals",
    "start": 1950,
    "end": 1971
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1971,
    "end": 1972
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1972,
    "end": 1973
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1973,
    "end": 1974
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1974,
    "end": 1975
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1976,
    "end": 1977
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1978,
    "end": 1985
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1986,
    "end": 1994
  },
  {
    "type": "Identifier",
    "value": "nullable",
    "start": 1995,
    "end": 2003
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2003,
    "end": 2004
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2004,
    "end": 2005
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2006,
    "end": 2013
  },
  {
    "type": "Identifier",
    "value": "$ZodType",
    "start": 2014,
    "end": 2022
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2022,
    "end": 2023
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2023,
    "end": 2024
  },
  {
    "type": "Identifier",
    "value": "inner",
    "start": 2024,
    "end": 2029
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2029,
    "end": 2030
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2031,
    "end": 2032
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2032,
    "end": 2033
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2033,
    "end": 2034
  },
  {
    "type": "Identifier",
    "value": "$ZodNullable",
    "start": 2035,
    "end": 2047
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2047,
    "end": 2048
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2048,
    "end": 2049
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2049,
    "end": 2050
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2050,
    "end": 2051
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2073,
    "end": 2077
  },
  {
    "type": "Identifier",
    "value": "OptionalOutSchema",
    "start": 2078,
    "end": 2095
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2096,
    "end": 2097
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2098,
    "end": 2099
  },
  {
    "type": "Identifier",
    "value": "_zod",
    "start": 2100,
    "end": 2104
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2104,
    "end": 2105
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2106,
    "end": 2107
  },
  {
    "type": "Identifier",
    "value": "optout",
    "start": 2108,
    "end": 2114
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2114,
    "end": 2115
  },
  {
    "type": "String",
    "value": "\"optional\"",
    "start": 2116,
    "end": 2126
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2127,
    "end": 2128
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2129,
    "end": 2130
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2130,
    "end": 2131
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2132,
    "end": 2136
  },
  {
    "type": "Identifier",
    "value": "OptionalInSchema",
    "start": 2137,
    "end": 2153
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2154,
    "end": 2155
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2156,
    "end": 2157
  },
  {
    "type": "Identifier",
    "value": "_zod",
    "start": 2158,
    "end": 2162
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2162,
    "end": 2163
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2164,
    "end": 2165
  },
  {
    "type": "Identifier",
    "value": "optin",
    "start": 2166,
    "end": 2171
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2171,
    "end": 2172
  },
  {
    "type": "String",
    "value": "\"optional\"",
    "start": 2173,
    "end": 2183
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2184,
    "end": 2185
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2186,
    "end": 2187
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2187,
    "end": 2188
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2190,
    "end": 2196
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2197,
    "end": 2201
  },
  {
    "type": "Identifier",
    "value": "$ZodShape",
    "start": 2202,
    "end": 2211
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2212,
    "end": 2213
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 2214,
    "end": 2222
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2222,
    "end": 2223
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2223,
    "end": 2224
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2225,
    "end": 2226
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 2226,
    "end": 2227
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2227,
    "end": 2228
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2229,
    "end": 2235
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2235,
    "end": 2236
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2236,
    "end": 2237
  },
  {
    "type": "Identifier",
    "value": "$ZodType",
    "start": 2238,
    "end": 2246
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2247,
    "end": 2248
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2248,
    "end": 2249
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2249,
    "end": 2250
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2252,
    "end": 2258
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2259,
    "end": 2263
  },
  {
    "type": "Identifier",
    "value": "Prettify",
    "start": 2264,
    "end": 2272
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2272,
    "end": 2273
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2273,
    "end": 2274
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2274,
    "end": 2275
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2276,
    "end": 2277
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2278,
    "end": 2279
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2280,
    "end": 2281
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2281,
    "end": 2282
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 2283,
    "end": 2285
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 2286,
    "end": 2291
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2292,
    "end": 2293
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2293,
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
    "value": "T",
    "start": 2296,
    "end": 2297
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2297,
    "end": 2298
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2298,
    "end": 2299
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2299,
    "end": 2300
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2301,
    "end": 2302
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 2303,
    "end": 2304
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2305,
    "end": 2306
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2306,
    "end": 2307
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2307,
    "end": 2308
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2310,
    "end": 2316
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2317,
    "end": 2321
  },
  {
    "type": "Identifier",
    "value": "$InferObjectOutput",
    "start": 2322,
    "end": 2340
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2340,
    "end": 2341
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2341,
    "end": 2342
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2343,
    "end": 2350
  },
  {
    "type": "Identifier",
    "value": "$ZodShape",
    "start": 2351,
    "end": 2360
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2360,
    "end": 2361
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2362,
    "end": 2363
  },
  {
    "type": "Identifier",
    "value": "Prettify",
    "start": 2364,
    "end": 2372
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2372,
    "end": 2373
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2376,
    "end": 2377
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 2382,
    "end": 2383
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 2383,
    "end": 2391
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2392,
    "end": 2393
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 2393,
    "end": 2394
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 2395,
    "end": 2397
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 2398,
    "end": 2403
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2404,
    "end": 2405
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 2406,
    "end": 2408
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2409,
    "end": 2410
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2410,
    "end": 2411
  },
  {
    "type": "Identifier",
    "value": "k",
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
    "type": "Keyword",
    "value": "extends",
    "start": 2414,
    "end": 2421
  },
  {
    "type": "Identifier",
    "value": "OptionalOutSchema",
    "start": 2422,
    "end": 2439
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2440,
    "end": 2441
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2442,
    "end": 2447
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2448,
    "end": 2449
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 2450,
    "end": 2451
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2451,
    "end": 2452
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2452,
    "end": 2453
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2454,
    "end": 2455
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2455,
    "end": 2456
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 2456,
    "end": 2457
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2457,
    "end": 2458
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2458,
    "end": 2459
  },
  {
    "type": "String",
    "value": "\"_zod\"",
    "start": 2459,
    "end": 2465
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2465,
    "end": 2466
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2466,
    "end": 2467
  },
  {
    "type": "String",
    "value": "\"output\"",
    "start": 2467,
    "end": 2475
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2475,
    "end": 2476
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2476,
    "end": 2477
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2480,
    "end": 2481
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 2482,
    "end": 2483
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2484,
    "end": 2485
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 2490,
    "end": 2491
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 2491,
    "end": 2499
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2500,
    "end": 2501
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 2501,
    "end": 2502
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 2503,
    "end": 2505
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 2506,
    "end": 2511
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2512,
    "end": 2513
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 2514,
    "end": 2516
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2517,
    "end": 2518
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2518,
    "end": 2519
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 2519,
    "end": 2520
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2520,
    "end": 2521
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2522,
    "end": 2529
  },
  {
    "type": "Identifier",
    "value": "OptionalOutSchema",
    "start": 2530,
    "end": 2547
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2548,
    "end": 2549
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 2550,
    "end": 2551
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2552,
    "end": 2553
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2554,
    "end": 2559
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2559,
    "end": 2560
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2560,
    "end": 2561
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2561,
    "end": 2562
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2563,
    "end": 2564
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2564,
    "end": 2565
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 2565,
    "end": 2566
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2566,
    "end": 2567
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2567,
    "end": 2568
  },
  {
    "type": "String",
    "value": "\"_zod\"",
    "start": 2568,
    "end": 2574
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2574,
    "end": 2575
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2575,
    "end": 2576
  },
  {
    "type": "String",
    "value": "\"output\"",
    "start": 2576,
    "end": 2584
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2584,
    "end": 2585
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2585,
    "end": 2586
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2589,
    "end": 2590
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2591,
    "end": 2592
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2592,
    "end": 2593
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2594,
    "end": 2600
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2601,
    "end": 2605
  },
  {
    "type": "Identifier",
    "value": "$InferObjectInput",
    "start": 2606,
    "end": 2623
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2623,
    "end": 2624
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2624,
    "end": 2625
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2626,
    "end": 2633
  },
  {
    "type": "Identifier",
    "value": "$ZodShape",
    "start": 2634,
    "end": 2643
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2643,
    "end": 2644
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2645,
    "end": 2646
  },
  {
    "type": "Identifier",
    "value": "Prettify",
    "start": 2647,
    "end": 2655
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2655,
    "end": 2656
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2659,
    "end": 2660
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 2665,
    "end": 2666
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 2666,
    "end": 2674
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2675,
    "end": 2676
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 2676,
    "end": 2677
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 2678,
    "end": 2680
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 2681,
    "end": 2686
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2687,
    "end": 2688
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 2689,
    "end": 2691
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2692,
    "end": 2693
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2693,
    "end": 2694
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 2694,
    "end": 2695
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2695,
    "end": 2696
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2697,
    "end": 2704
  },
  {
    "type": "Identifier",
    "value": "OptionalInSchema",
    "start": 2705,
    "end": 2721
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2722,
    "end": 2723
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2724,
    "end": 2729
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2730,
    "end": 2731
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 2732,
    "end": 2733
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2733,
    "end": 2734
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2734,
    "end": 2735
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2736,
    "end": 2737
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2737,
    "end": 2738
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 2738,
    "end": 2739
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2739,
    "end": 2740
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2740,
    "end": 2741
  },
  {
    "type": "String",
    "value": "\"_zod\"",
    "start": 2741,
    "end": 2747
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2747,
    "end": 2748
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2748,
    "end": 2749
  },
  {
    "type": "String",
    "value": "\"input\"",
    "start": 2749,
    "end": 2756
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2756,
    "end": 2757
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2757,
    "end": 2758
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2761,
    "end": 2762
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 2763,
    "end": 2764
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2765,
    "end": 2766
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 2771,
    "end": 2772
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 2772,
    "end": 2780
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2781,
    "end": 2782
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 2782,
    "end": 2783
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 2784,
    "end": 2786
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 2787,
    "end": 2792
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2793,
    "end": 2794
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 2795,
    "end": 2797
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2798,
    "end": 2799
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2799,
    "end": 2800
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 2800,
    "end": 2801
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2801,
    "end": 2802
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2803,
    "end": 2810
  },
  {
    "type": "Identifier",
    "value": "OptionalInSchema",
    "start": 2811,
    "end": 2827
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2828,
    "end": 2829
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 2830,
    "end": 2831
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2832,
    "end": 2833
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2834,
    "end": 2839
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2839,
    "end": 2840
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2840,
    "end": 2841
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2841,
    "end": 2842
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2843,
    "end": 2844
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2844,
    "end": 2845
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 2845,
    "end": 2846
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2846,
    "end": 2847
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2847,
    "end": 2848
  },
  {
    "type": "String",
    "value": "\"_zod\"",
    "start": 2848,
    "end": 2854
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2854,
    "end": 2855
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2855,
    "end": 2856
  },
  {
    "type": "String",
    "value": "\"input\"",
    "start": 2856,
    "end": 2863
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2863,
    "end": 2864
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2864,
    "end": 2865
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2868,
    "end": 2869
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2870,
    "end": 2871
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2871,
    "end": 2872
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2874,
    "end": 2880
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2881,
    "end": 2890
  },
  {
    "type": "Identifier",
    "value": "$ZodObjectInternals",
    "start": 2891,
    "end": 2910
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2910,
    "end": 2911
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 2911,
    "end": 2916
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2917,
    "end": 2924
  },
  {
    "type": "Identifier",
    "value": "$ZodShape",
    "start": 2925,
    "end": 2934
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2935,
    "end": 2936
  },
  {
    "type": "Identifier",
    "value": "$ZodShape",
    "start": 2937,
    "end": 2946
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2946,
    "end": 2947
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2948,
    "end": 2955
  },
  {
    "type": "Identifier",
    "value": "$ZodTypeInternals",
    "start": 2956,
    "end": 2973
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2974,
    "end": 2975
  },
  {
    "type": "Identifier",
    "value": "def",
    "start": 2978,
    "end": 2981
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2981,
    "end": 2982
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2983,
    "end": 2984
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2985,
    "end": 2989
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2989,
    "end": 2990
  },
  {
    "type": "String",
    "value": "\"object\"",
    "start": 2991,
    "end": 2999
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2999,
    "end": 3000
  },
  {
    "type": "Identifier",
    "value": "shape",
    "start": 3001,
    "end": 3006
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3006,
    "end": 3007
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 3008,
    "end": 3013
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3014,
    "end": 3015
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3015,
    "end": 3016
  },
  {
    "type": "Identifier",
    "value": "output",
    "start": 3019,
    "end": 3025
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3025,
    "end": 3026
  },
  {
    "type": "Identifier",
    "value": "$InferObjectOutput",
    "start": 3027,
    "end": 3045
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3045,
    "end": 3046
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 3046,
    "end": 3051
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3051,
    "end": 3052
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3052,
    "end": 3053
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 3056,
    "end": 3061
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3061,
    "end": 3062
  },
  {
    "type": "Identifier",
    "value": "$InferObjectInput",
    "start": 3063,
    "end": 3080
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3080,
    "end": 3081
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 3081,
    "end": 3086
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3086,
    "end": 3087
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3087,
    "end": 3088
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3089,
    "end": 3090
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3091,
    "end": 3097
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3098,
    "end": 3107
  },
  {
    "type": "Identifier",
    "value": "$ZodObject",
    "start": 3108,
    "end": 3118
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3118,
    "end": 3119
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 3119,
    "end": 3124
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3125,
    "end": 3132
  },
  {
    "type": "Identifier",
    "value": "$ZodShape",
    "start": 3133,
    "end": 3142
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3143,
    "end": 3144
  },
  {
    "type": "Identifier",
    "value": "$ZodShape",
    "start": 3145,
    "end": 3154
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3154,
    "end": 3155
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3156,
    "end": 3163
  },
  {
    "type": "Identifier",
    "value": "$ZodType",
    "start": 3164,
    "end": 3172
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3173,
    "end": 3174
  },
  {
    "type": "Identifier",
    "value": "_zod",
    "start": 3177,
    "end": 3181
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3181,
    "end": 3182
  },
  {
    "type": "Identifier",
    "value": "$ZodObjectInternals",
    "start": 3183,
    "end": 3202
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3202,
    "end": 3203
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 3203,
    "end": 3208
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3208,
    "end": 3209
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3209,
    "end": 3210
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3211,
    "end": 3212
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3213,
    "end": 3220
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3221,
    "end": 3229
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 3230,
    "end": 3236
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3236,
    "end": 3237
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3237,
    "end": 3238
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3239,
    "end": 3246
  },
  {
    "type": "Identifier",
    "value": "$ZodShape",
    "start": 3247,
    "end": 3256
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3256,
    "end": 3257
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3257,
    "end": 3258
  },
  {
    "type": "Identifier",
    "value": "shape",
    "start": 3258,
    "end": 3263
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3263,
    "end": 3264
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3265,
    "end": 3266
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3266,
    "end": 3267
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3267,
    "end": 3268
  },
  {
    "type": "Identifier",
    "value": "$ZodObject",
    "start": 3269,
    "end": 3279
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3279,
    "end": 3280
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3280,
    "end": 3281
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3281,
    "end": 3282
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3282,
    "end": 3283
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3285,
    "end": 3291
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3292,
    "end": 3297
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 3298,
    "end": 3299
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3300,
    "end": 3301
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3302,
    "end": 3303
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3304,
    "end": 3310
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3310,
    "end": 3311
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 3312,
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
    "value": "object",
    "start": 3319,
    "end": 3325
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3325,
    "end": 3326
  },
  {
    "type": "Identifier",
    "value": "optional",
    "start": 3327,
    "end": 3335
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3335,
    "end": 3336
  },
  {
    "type": "Identifier",
    "value": "nullable",
    "start": 3337,
    "end": 3345
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3346,
    "end": 3347
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3347,
    "end": 3348
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3463,
    "end": 3468
  },
  {
    "type": "Identifier",
    "value": "Category",
    "start": 3469,
    "end": 3477
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3478,
    "end": 3479
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 3480,
    "end": 3481
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3481,
    "end": 3482
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 3482,
    "end": 3488
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3488,
    "end": 3489
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3489,
    "end": 3490
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3493,
    "end": 3497
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3497,
    "end": 3498
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 3499,
    "end": 3500
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3500,
    "end": 3501
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3501,
    "end": 3507
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3507,
    "end": 3508
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3508,
    "end": 3509
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3509,
    "end": 3510
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 3513,
    "end": 3516
  },
  {
    "type": "Identifier",
    "value": "subcategories",
    "start": 3517,
    "end": 3530
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3530,
    "end": 3531
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3531,
    "end": 3532
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3533,
    "end": 3534
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3539,
    "end": 3545
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 3546,
    "end": 3547
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3547,
    "end": 3548
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 3548,
    "end": 3553
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3553,
    "end": 3554
  },
  {
    "type": "Identifier",
    "value": "Category",
    "start": 3554,
    "end": 3562
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3562,
    "end": 3563
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3563,
    "end": 3564
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3567,
    "end": 3568
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3568,
    "end": 3569
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3570,
    "end": 3571
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3571,
    "end": 3572
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3572,
    "end": 3573
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3574,
    "end": 3578
  },
  {
    "type": "Identifier",
    "value": "Category",
    "start": 3579,
    "end": 3587
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3588,
    "end": 3589
  },
  {
    "type": "Identifier",
    "value": "output",
    "start": 3590,
    "end": 3596
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3596,
    "end": 3597
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 3597,
    "end": 3603
  },
  {
    "type": "Identifier",
    "value": "Category",
    "start": 3604,
    "end": 3612
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3612,
    "end": 3613
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3613,
    "end": 3614
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3615,
    "end": 3621
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3622,
    "end": 3627
  },
  {
    "type": "Identifier",
    "value": "_c",
    "start": 3628,
    "end": 3630
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3630,
    "end": 3631
  },
  {
    "type": "Identifier",
    "value": "Category",
    "start": 3632,
    "end": 3640
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3641,
    "end": 3642
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3643,
    "end": 3644
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3645,
    "end": 3649
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3649,
    "end": 3650
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 3651,
    "end": 3654
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3654,
    "end": 3655
  },
  {
    "type": "Identifier",
    "value": "subcategories",
    "start": 3656,
    "end": 3669
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3669,
    "end": 3670
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3671,
    "end": 3672
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3672,
    "end": 3673
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3674,
    "end": 3678
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3678,
    "end": 3679
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 3680,
    "end": 3683
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3683,
    "end": 3684
  },
  {
    "type": "Identifier",
    "value": "subcategories",
    "start": 3685,
    "end": 3698
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3698,
    "end": 3699
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3700,
    "end": 3701
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3701,
    "end": 3702
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3703,
    "end": 3704
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3704,
    "end": 3705
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3706,
    "end": 3707
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3707,
    "end": 3708
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3734,
    "end": 3739
  },
  {
    "type": "Identifier",
    "value": "User",
    "start": 3740,
    "end": 3744
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3745,
    "end": 3746
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 3747,
    "end": 3748
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3748,
    "end": 3749
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 3749,
    "end": 3755
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3755,
    "end": 3756
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3756,
    "end": 3757
  },
  {
    "type": "Identifier",
    "value": "email",
    "start": 3760,
    "end": 3765
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3765,
    "end": 3766
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 3767,
    "end": 3768
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3768,
    "end": 3769
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3769,
    "end": 3775
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3775,
    "end": 3776
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3776,
    "end": 3777
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3777,
    "end": 3778
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 3781,
    "end": 3784
  },
  {
    "type": "Identifier",
    "value": "posts",
    "start": 3785,
    "end": 3790
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "{",
    "start": 3793,
    "end": 3794
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3799,
    "end": 3805
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 3806,
    "end": 3807
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3807,
    "end": 3808
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 3808,
    "end": 3813
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3813,
    "end": 3814
  },
  {
    "type": "Identifier",
    "value": "Post",
    "start": 3814,
    "end": 3818
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3818,
    "end": 3819
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3819,
    "end": 3820
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3823,
    "end": 3824
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3824,
    "end": 3825
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3826,
    "end": 3827
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3827,
    "end": 3828
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3828,
    "end": 3829
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3830,
    "end": 3835
  },
  {
    "type": "Identifier",
    "value": "Post",
    "start": 3836,
    "end": 3840
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3841,
    "end": 3842
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 3843,
    "end": 3844
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3844,
    "end": 3845
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 3845,
    "end": 3851
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3851,
    "end": 3852
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3852,
    "end": 3853
  },
  {
    "type": "Identifier",
    "value": "title",
    "start": 3856,
    "end": 3861
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3861,
    "end": 3862
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 3863,
    "end": 3864
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3864,
    "end": 3865
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3865,
    "end": 3871
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3871,
    "end": 3872
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3872,
    "end": 3873
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3873,
    "end": 3874
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 3877,
    "end": 3880
  },
  {
    "type": "Identifier",
    "value": "author",
    "start": 3881,
    "end": 3887
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3887,
    "end": 3888
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3888,
    "end": 3889
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3890,
    "end": 3891
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3896,
    "end": 3902
  },
  {
    "type": "Identifier",
    "value": "User",
    "start": 3903,
    "end": 3907
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3907,
    "end": 3908
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3911,
    "end": 3912
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3912,
    "end": 3913
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3914,
    "end": 3915
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3915,
    "end": 3916
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3916,
    "end": 3917
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3918,
    "end": 3924
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3925,
    "end": 3929
  },
  {
    "type": "Identifier",
    "value": "UserT",
    "start": 3930,
    "end": 3935
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3936,
    "end": 3937
  },
  {
    "type": "Identifier",
    "value": "output",
    "start": 3938,
    "end": 3944
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3944,
    "end": 3945
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 3945,
    "end": 3951
  },
  {
    "type": "Identifier",
    "value": "User",
    "start": 3952,
    "end": 3956
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3956,
    "end": 3957
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3957,
    "end": 3958
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3959,
    "end": 3965
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3966,
    "end": 3971
  },
  {
    "type": "Identifier",
    "value": "_u",
    "start": 3972,
    "end": 3974
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3974,
    "end": 3975
  },
  {
    "type": "Identifier",
    "value": "UserT",
    "start": 3976,
    "end": 3981
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3982,
    "end": 3983
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3984,
    "end": 3985
  },
  {
    "type": "Identifier",
    "value": "email",
    "start": 3986,
    "end": 3991
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3991,
    "end": 3992
  },
  {
    "type": "String",
    "value": "\"e\"",
    "start": 3993,
    "end": 3996
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3996,
    "end": 3997
  },
  {
    "type": "Identifier",
    "value": "posts",
    "start": 3998,
    "end": 4003
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4003,
    "end": 4004
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4005,
    "end": 4006
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4006,
    "end": 4007
  },
  {
    "type": "Identifier",
    "value": "title",
    "start": 4008,
    "end": 4013
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4013,
    "end": 4014
  },
  {
    "type": "String",
    "value": "\"t\"",
    "start": 4015,
    "end": 4018
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4018,
    "end": 4019
  },
  {
    "type": "Identifier",
    "value": "author",
    "start": 4020,
    "end": 4026
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4026,
    "end": 4027
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4028,
    "end": 4029
  },
  {
    "type": "Identifier",
    "value": "email",
    "start": 4030,
    "end": 4035
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4035,
    "end": 4036
  },
  {
    "type": "String",
    "value": "\"e2\"",
    "start": 4037,
    "end": 4041
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4041,
    "end": 4042
  },
  {
    "type": "Identifier",
    "value": "posts",
    "start": 4043,
    "end": 4048
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4048,
    "end": 4049
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4050,
    "end": 4051
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4051,
    "end": 4052
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4053,
    "end": 4054
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4055,
    "end": 4056
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4056,
    "end": 4057
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4058,
    "end": 4059
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4059,
    "end": 4060
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4091,
    "end": 4096
  },
  {
    "type": "Identifier",
    "value": "Activity",
    "start": 4097,
    "end": 4105
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4106,
    "end": 4107
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 4108,
    "end": 4109
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4109,
    "end": 4110
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 4110,
    "end": 4116
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4116,
    "end": 4117
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4117,
    "end": 4118
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 4121,
    "end": 4125
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4125,
    "end": 4126
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 4127,
    "end": 4128
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4128,
    "end": 4129
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4129,
    "end": 4135
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4135,
    "end": 4136
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4136,
    "end": 4137
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4137,
    "end": 4138
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 4141,
    "end": 4144
  },
  {
    "type": "Identifier",
    "value": "subactivities",
    "start": 4145,
    "end": 4158
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4158,
    "end": 4159
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4159,
    "end": 4160
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4161,
    "end": 4162
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4167,
    "end": 4173
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 4174,
    "end": 4175
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4175,
    "end": 4176
  },
  {
    "type": "Identifier",
    "value": "nullable",
    "start": 4176,
    "end": 4184
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4184,
    "end": 4185
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 4185,
    "end": 4186
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4186,
    "end": 4187
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 4187,
    "end": 4192
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4192,
    "end": 4193
  },
  {
    "type": "Identifier",
    "value": "Activity",
    "start": 4193,
    "end": 4201
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4201,
    "end": 4202
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4202,
    "end": 4203
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4203,
    "end": 4204
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4207,
    "end": 4208
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4208,
    "end": 4209
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4210,
    "end": 4211
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4211,
    "end": 4212
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4212,
    "end": 4213
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4214,
    "end": 4220
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4221,
    "end": 4225
  },
  {
    "type": "Identifier",
    "value": "ActivityT",
    "start": 4226,
    "end": 4235
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4236,
    "end": 4237
  },
  {
    "type": "Identifier",
    "value": "output",
    "start": 4238,
    "end": 4244
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4244,
    "end": 4245
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 4245,
    "end": 4251
  },
  {
    "type": "Identifier",
    "value": "Activity",
    "start": 4252,
    "end": 4260
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4260,
    "end": 4261
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4261,
    "end": 4262
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4317,
    "end": 4322
  },
  {
    "type": "Identifier",
    "value": "Node1",
    "start": 4323,
    "end": 4328
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4329,
    "end": 4330
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 4331,
    "end": 4332
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4332,
    "end": 4333
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 4333,
    "end": 4339
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4339,
    "end": 4340
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4340,
    "end": 4341
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 4344,
    "end": 4348
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4348,
    "end": 4349
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 4350,
    "end": 4351
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4351,
    "end": 4352
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4352,
    "end": 4358
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4358,
    "end": 4359
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4359,
    "end": 4360
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4360,
    "end": 4361
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 4364,
    "end": 4367
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 4368,
    "end": 4376
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4376,
    "end": 4377
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4377,
    "end": 4378
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4379,
    "end": 4380
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4385,
    "end": 4391
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 4392,
    "end": 4393
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4393,
    "end": 4394
  },
  {
    "type": "Identifier",
    "value": "optional",
    "start": 4394,
    "end": 4402
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4402,
    "end": 4403
  },
  {
    "type": "Identifier",
    "value": "NodeArray",
    "start": 4403,
    "end": 4412
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4412,
    "end": 4413
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4413,
    "end": 4414
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4417,
    "end": 4418
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4418,
    "end": 4419
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4420,
    "end": 4421
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4421,
    "end": 4422
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4422,
    "end": 4423
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4424,
    "end": 4429
  },
  {
    "type": "Identifier",
    "value": "NodeArray",
    "start": 4430,
    "end": 4439
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4440,
    "end": 4441
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 4442,
    "end": 4443
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4443,
    "end": 4444
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 4444,
    "end": 4449
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4449,
    "end": 4450
  },
  {
    "type": "Identifier",
    "value": "Node1",
    "start": 4450,
    "end": 4455
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4455,
    "end": 4456
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4456,
    "end": 4457
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4458,
    "end": 4464
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4465,
    "end": 4469
  },
  {
    "type": "Identifier",
    "value": "Node1T",
    "start": 4470,
    "end": 4476
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4477,
    "end": 4478
  },
  {
    "type": "Identifier",
    "value": "output",
    "start": 4479,
    "end": 4485
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4485,
    "end": 4486
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 4486,
    "end": 4492
  },
  {
    "type": "Identifier",
    "value": "Node1",
    "start": 4493,
    "end": 4498
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4498,
    "end": 4499
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4499,
    "end": 4500
  }
]
```
