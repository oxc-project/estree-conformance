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
        "name": "output",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 68
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
              "start": 69,
              "end": 70
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 69,
            "end": 70
          }
        ],
        "start": 68,
        "end": 71
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
            "start": 74,
            "end": 75
          },
          "typeArguments": null,
          "start": 74,
          "end": 75
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
                "name": "_zod",
                "optional": false,
                "typeAnnotation": null,
                "start": 86,
                "end": 90
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
                        "name": "output",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 94,
                        "end": 100
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 102,
                          "end": 105
                        },
                        "start": 100,
                        "end": 105
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 94,
                      "end": 105
                    }
                  ],
                  "start": 92,
                  "end": 107
                },
                "start": 90,
                "end": 107
              },
              "accessibility": null,
              "static": false,
              "start": 86,
              "end": 107
            }
          ],
          "start": 84,
          "end": 109
        },
        "trueType": {
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
                "start": 112,
                "end": 113
              },
              "typeArguments": null,
              "start": 112,
              "end": 113
            },
            "indexType": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "_zod",
                "raw": "\"_zod\"",
                "start": 114,
                "end": 120
              },
              "start": 114,
              "end": 120
            },
            "start": 112,
            "end": 121
          },
          "indexType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "output",
              "raw": "\"output\"",
              "start": 122,
              "end": 130
            },
            "start": 122,
            "end": 130
          },
          "start": 112,
          "end": 131
        },
        "falseType": {
          "type": "TSUnknownKeyword",
          "start": 134,
          "end": 141
        },
        "start": 74,
        "end": 141
      },
      "declare": false,
      "start": 57,
      "end": 142
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "input",
        "optional": false,
        "typeAnnotation": null,
        "start": 148,
        "end": 153
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
              "start": 154,
              "end": 155
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 154,
            "end": 155
          }
        ],
        "start": 153,
        "end": 156
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
            "start": 159,
            "end": 160
          },
          "typeArguments": null,
          "start": 159,
          "end": 160
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
                "name": "_zod",
                "optional": false,
                "typeAnnotation": null,
                "start": 171,
                "end": 175
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
                        "name": "input",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 179,
                        "end": 184
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 186,
                          "end": 189
                        },
                        "start": 184,
                        "end": 189
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 179,
                      "end": 189
                    }
                  ],
                  "start": 177,
                  "end": 191
                },
                "start": 175,
                "end": 191
              },
              "accessibility": null,
              "static": false,
              "start": 171,
              "end": 191
            }
          ],
          "start": 169,
          "end": 193
        },
        "trueType": {
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
                "start": 196,
                "end": 197
              },
              "typeArguments": null,
              "start": 196,
              "end": 197
            },
            "indexType": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "_zod",
                "raw": "\"_zod\"",
                "start": 198,
                "end": 204
              },
              "start": 198,
              "end": 204
            },
            "start": 196,
            "end": 205
          },
          "indexType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "input",
              "raw": "\"input\"",
              "start": 206,
              "end": 213
            },
            "start": 206,
            "end": 213
          },
          "start": 196,
          "end": 214
        },
        "falseType": {
          "type": "TSUnknownKeyword",
          "start": 217,
          "end": 224
        },
        "start": 159,
        "end": 224
      },
      "declare": false,
      "start": 143,
      "end": 225
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NoUndefined",
        "optional": false,
        "typeAnnotation": null,
        "start": 231,
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
            "start": 248,
            "end": 249
          },
          "typeArguments": null,
          "start": 248,
          "end": 249
        },
        "extendsType": {
          "type": "TSUndefinedKeyword",
          "start": 258,
          "end": 267
        },
        "trueType": {
          "type": "TSNeverKeyword",
          "start": 270,
          "end": 275
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 278,
            "end": 279
          },
          "typeArguments": null,
          "start": 278,
          "end": 279
        },
        "start": 248,
        "end": 279
      },
      "declare": false,
      "start": 226,
      "end": 280
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Writeable",
        "optional": false,
        "typeAnnotation": null,
        "start": 286,
        "end": 295
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
              "start": 296,
              "end": 297
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 296,
            "end": 297
          }
        ],
        "start": 295,
        "end": 298
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 314,
          "end": 315
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
              "start": 325,
              "end": 326
            },
            "typeArguments": null,
            "start": 325,
            "end": 326
          },
          "start": 319,
          "end": 326
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
              "start": 329,
              "end": 330
            },
            "typeArguments": null,
            "start": 329,
            "end": 330
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 331,
              "end": 332
            },
            "typeArguments": null,
            "start": 331,
            "end": 332
          },
          "start": 329,
          "end": 333
        },
        "optional": false,
        "readonly": "-",
        "start": 301,
        "end": 335
      },
      "declare": false,
      "start": 281,
      "end": 336
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Prettify",
        "optional": false,
        "typeAnnotation": null,
        "start": 342,
        "end": 350
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
              "start": 351,
              "end": 352
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 351,
            "end": 352
          }
        ],
        "start": 350,
        "end": 353
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
              "start": 359,
              "end": 360
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
                  "start": 370,
                  "end": 371
                },
                "typeArguments": null,
                "start": 370,
                "end": 371
              },
              "start": 364,
              "end": 371
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
                  "start": 374,
                  "end": 375
                },
                "typeArguments": null,
                "start": 374,
                "end": 375
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 376,
                  "end": 377
                },
                "typeArguments": null,
                "start": 376,
                "end": 377
              },
              "start": 374,
              "end": 378
            },
            "optional": false,
            "readonly": null,
            "start": 356,
            "end": 380
          },
          {
            "type": "TSTypeLiteral",
            "members": [],
            "start": 383,
            "end": 385
          }
        ],
        "start": 356,
        "end": 385
      },
      "declare": false,
      "start": 337,
      "end": 386
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "$ZodTypeInternals",
        "optional": false,
        "typeAnnotation": null,
        "start": 397,
        "end": 414
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
              "start": 419,
              "end": 420
            },
            "constraint": null,
            "default": {
              "type": "TSUnknownKeyword",
              "start": 423,
              "end": 430
            },
            "in": false,
            "out": true,
            "const": false,
            "start": 415,
            "end": 430
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "I",
              "optional": false,
              "typeAnnotation": null,
              "start": 436,
              "end": 437
            },
            "constraint": null,
            "default": {
              "type": "TSUnknownKeyword",
              "start": 440,
              "end": 447
            },
            "in": false,
            "out": true,
            "const": false,
            "start": 432,
            "end": 447
          }
        ],
        "start": 414,
        "end": 448
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
              "name": "def",
              "optional": false,
              "typeAnnotation": null,
              "start": 451,
              "end": 454
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 456,
                "end": 463
              },
              "start": 454,
              "end": 463
            },
            "accessibility": null,
            "static": false,
            "start": 451,
            "end": 464
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
              "start": 465,
              "end": 471
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
                  "start": 473,
                  "end": 474
                },
                "typeArguments": null,
                "start": 473,
                "end": 474
              },
              "start": 471,
              "end": 474
            },
            "accessibility": null,
            "static": false,
            "start": 465,
            "end": 475
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
              "start": 476,
              "end": 481
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
            "accessibility": null,
            "static": false,
            "start": 476,
            "end": 485
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
              "start": 486,
              "end": 491
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
                      "start": 494,
                      "end": 504
                    },
                    "start": 494,
                    "end": 504
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 507,
                    "end": 516
                  }
                ],
                "start": 494,
                "end": 516
              },
              "start": 492,
              "end": 516
            },
            "accessibility": null,
            "static": false,
            "start": 486,
            "end": 517
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
              "start": 518,
              "end": 524
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
                      "start": 527,
                      "end": 537
                    },
                    "start": 527,
                    "end": 537
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 540,
                    "end": 549
                  }
                ],
                "start": 527,
                "end": 549
              },
              "start": 525,
              "end": 549
            },
            "accessibility": null,
            "static": false,
            "start": 518,
            "end": 549
          }
        ],
        "start": 449,
        "end": 551
      },
      "declare": false,
      "start": 387,
      "end": 551
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StandardProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 562,
        "end": 575
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "I",
              "optional": false,
              "typeAnnotation": null,
              "start": 576,
              "end": 577
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 576,
            "end": 577
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "O",
              "optional": false,
              "typeAnnotation": null,
              "start": 579,
              "end": 580
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 579,
            "end": 580
          }
        ],
        "start": 575,
        "end": 581
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "types",
              "optional": false,
              "typeAnnotation": null,
              "start": 593,
              "end": 598
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": true,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "input",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 612,
                          "end": 617
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
                              "start": 619,
                              "end": 620
                            },
                            "typeArguments": null,
                            "start": 619,
                            "end": 620
                          },
                          "start": 617,
                          "end": 620
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 603,
                        "end": 621
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": true,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "output",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 631,
                          "end": 637
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
                              "start": 639,
                              "end": 640
                            },
                            "typeArguments": null,
                            "start": 639,
                            "end": 640
                          },
                          "start": 637,
                          "end": 640
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 622,
                        "end": 640
                      }
                    ],
                    "start": 601,
                    "end": 642
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 645,
                    "end": 654
                  }
                ],
                "start": 601,
                "end": 654
              },
              "start": 599,
              "end": 654
            },
            "accessibility": null,
            "static": false,
            "start": 584,
            "end": 654
          }
        ],
        "start": 582,
        "end": 656
      },
      "declare": false,
      "start": 552,
      "end": 656
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "$ZodType",
        "optional": false,
        "typeAnnotation": null,
        "start": 667,
        "end": 675
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
              "start": 676,
              "end": 677
            },
            "constraint": null,
            "default": {
              "type": "TSUnknownKeyword",
              "start": 680,
              "end": 687
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 676,
            "end": 687
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "I",
              "optional": false,
              "typeAnnotation": null,
              "start": 689,
              "end": 690
            },
            "constraint": null,
            "default": {
              "type": "TSUnknownKeyword",
              "start": 693,
              "end": 700
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 689,
            "end": 700
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Internals",
              "optional": false,
              "typeAnnotation": null,
              "start": 702,
              "end": 711
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "$ZodTypeInternals",
                "optional": false,
                "typeAnnotation": null,
                "start": 720,
                "end": 737
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
                      "start": 738,
                      "end": 739
                    },
                    "typeArguments": null,
                    "start": 738,
                    "end": 739
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 741,
                      "end": 742
                    },
                    "typeArguments": null,
                    "start": 741,
                    "end": 742
                  }
                ],
                "start": 737,
                "end": 743
              },
              "start": 720,
              "end": 743
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "$ZodTypeInternals",
                "optional": false,
                "typeAnnotation": null,
                "start": 746,
                "end": 763
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
                      "start": 764,
                      "end": 765
                    },
                    "typeArguments": null,
                    "start": 764,
                    "end": 765
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 767,
                      "end": 768
                    },
                    "typeArguments": null,
                    "start": 767,
                    "end": 768
                  }
                ],
                "start": 763,
                "end": 769
              },
              "start": 746,
              "end": 769
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 702,
            "end": 769
          }
        ],
        "start": 675,
        "end": 770
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
              "start": 775,
              "end": 779
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
                  "start": 781,
                  "end": 790
                },
                "typeArguments": null,
                "start": 781,
                "end": 790
              },
              "start": 779,
              "end": 790
            },
            "accessibility": null,
            "static": false,
            "start": 775,
            "end": 791
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": "~standard",
              "raw": "\"~standard\"",
              "start": 794,
              "end": 805
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "StandardProps",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 807,
                  "end": 820
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "input",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 821,
                        "end": 826
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSThisType",
                            "start": 827,
                            "end": 831
                          }
                        ],
                        "start": 826,
                        "end": 832
                      },
                      "start": 821,
                      "end": 832
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "output",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 834,
                        "end": 840
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSThisType",
                            "start": 841,
                            "end": 845
                          }
                        ],
                        "start": 840,
                        "end": 846
                      },
                      "start": 834,
                      "end": 846
                    }
                  ],
                  "start": 820,
                  "end": 847
                },
                "start": 807,
                "end": 847
              },
              "start": 805,
              "end": 847
            },
            "accessibility": null,
            "static": false,
            "start": 794,
            "end": 848
          }
        ],
        "start": 771,
        "end": 850
      },
      "declare": false,
      "start": 657,
      "end": 850
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ZodType",
        "optional": false,
        "typeAnnotation": null,
        "start": 861,
        "end": 868
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Internals",
              "optional": false,
              "typeAnnotation": null,
              "start": 873,
              "end": 882
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "$ZodTypeInternals",
                "optional": false,
                "typeAnnotation": null,
                "start": 891,
                "end": 908
              },
              "typeArguments": null,
              "start": 891,
              "end": 908
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "$ZodTypeInternals",
                "optional": false,
                "typeAnnotation": null,
                "start": 911,
                "end": 928
              },
              "typeArguments": null,
              "start": 911,
              "end": 928
            },
            "in": false,
            "out": true,
            "const": false,
            "start": 869,
            "end": 928
          }
        ],
        "start": 868,
        "end": 929
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
            "start": 938,
            "end": 946
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSAnyKeyword",
                "start": 947,
                "end": 950
              },
              {
                "type": "TSAnyKeyword",
                "start": 952,
                "end": 955
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Internals",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 957,
                  "end": 966
                },
                "typeArguments": null,
                "start": 957,
                "end": 966
              }
            ],
            "start": 946,
            "end": 967
          },
          "start": 938,
          "end": 967
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "default",
              "optional": false,
              "typeAnnotation": null,
              "start": 972,
              "end": 979
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "def",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "NoUndefined",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 985,
                      "end": 996
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "output",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 997,
                            "end": 1003
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSThisType",
                                "start": 1004,
                                "end": 1008
                              }
                            ],
                            "start": 1003,
                            "end": 1009
                          },
                          "start": 997,
                          "end": 1009
                        }
                      ],
                      "start": 996,
                      "end": 1010
                    },
                    "start": 985,
                    "end": 1010
                  },
                  "start": 983,
                  "end": 1010
                },
                "start": 980,
                "end": 1010
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ZodDefault",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1013,
                  "end": 1023
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSThisType",
                      "start": 1024,
                      "end": 1028
                    }
                  ],
                  "start": 1023,
                  "end": 1029
                },
                "start": 1013,
                "end": 1029
              },
              "start": 1011,
              "end": 1029
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 972,
            "end": 1030
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "default",
              "optional": false,
              "typeAnnotation": null,
              "start": 1033,
              "end": 1040
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "def",
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
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "NoUndefined",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1052,
                          "end": 1063
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "output",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1064,
                                "end": 1070
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSThisType",
                                    "start": 1071,
                                    "end": 1075
                                  }
                                ],
                                "start": 1070,
                                "end": 1076
                              },
                              "start": 1064,
                              "end": 1076
                            }
                          ],
                          "start": 1063,
                          "end": 1077
                        },
                        "start": 1052,
                        "end": 1077
                      },
                      "start": 1049,
                      "end": 1077
                    },
                    "start": 1046,
                    "end": 1077
                  },
                  "start": 1044,
                  "end": 1077
                },
                "start": 1041,
                "end": 1077
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ZodDefault",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1080,
                  "end": 1090
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSThisType",
                      "start": 1091,
                      "end": 1095
                    }
                  ],
                  "start": 1090,
                  "end": 1096
                },
                "start": 1080,
                "end": 1096
              },
              "start": 1078,
              "end": 1096
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1033,
            "end": 1097
          }
        ],
        "start": 968,
        "end": 1099
      },
      "declare": false,
      "start": 851,
      "end": 1099
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Shape",
        "optional": false,
        "typeAnnotation": null,
        "start": 1105,
        "end": 1110
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
          "start": 1113,
          "end": 1121
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
                          "start": 1128,
                          "end": 1134
                        },
                        "start": 1126,
                        "end": 1134
                      },
                      "start": 1125,
                      "end": 1134
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
                        "start": 1137,
                        "end": 1145
                      },
                      "typeArguments": null,
                      "start": 1137,
                      "end": 1145
                    },
                    "start": 1135,
                    "end": 1145
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 1124,
                  "end": 1145
                }
              ],
              "start": 1122,
              "end": 1147
            }
          ],
          "start": 1121,
          "end": 1148
        },
        "start": 1113,
        "end": 1148
      },
      "declare": false,
      "start": 1100,
      "end": 1149
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OptionalOut",
        "optional": false,
        "typeAnnotation": null,
        "start": 1155,
        "end": 1166
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
              "start": 1171,
              "end": 1175
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
                      "start": 1179,
                      "end": 1185
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "optional",
                          "raw": "\"optional\"",
                          "start": 1187,
                          "end": 1197
                        },
                        "start": 1187,
                        "end": 1197
                      },
                      "start": 1185,
                      "end": 1197
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1179,
                    "end": 1197
                  }
                ],
                "start": 1177,
                "end": 1199
              },
              "start": 1175,
              "end": 1199
            },
            "accessibility": null,
            "static": false,
            "start": 1171,
            "end": 1199
          }
        ],
        "start": 1169,
        "end": 1201
      },
      "declare": false,
      "start": 1150,
      "end": 1202
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OptionalIn",
        "optional": false,
        "typeAnnotation": null,
        "start": 1208,
        "end": 1218
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
              "start": 1223,
              "end": 1227
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
                      "start": 1231,
                      "end": 1236
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "optional",
                          "raw": "\"optional\"",
                          "start": 1238,
                          "end": 1248
                        },
                        "start": 1238,
                        "end": 1248
                      },
                      "start": 1236,
                      "end": 1248
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1231,
                    "end": 1248
                  }
                ],
                "start": 1229,
                "end": 1250
              },
              "start": 1227,
              "end": 1250
            },
            "accessibility": null,
            "static": false,
            "start": 1223,
            "end": 1250
          }
        ],
        "start": 1221,
        "end": 1252
      },
      "declare": false,
      "start": 1203,
      "end": 1253
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "$InferObjectOutput",
        "optional": false,
        "typeAnnotation": null,
        "start": 1259,
        "end": 1277
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
              "start": 1278,
              "end": 1279
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Shape",
                "optional": false,
                "typeAnnotation": null,
                "start": 1288,
                "end": 1293
              },
              "typeArguments": null,
              "start": 1288,
              "end": 1293
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1278,
            "end": 1293
          }
        ],
        "start": 1277,
        "end": 1294
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Prettify",
          "optional": false,
          "typeAnnotation": null,
          "start": 1297,
          "end": 1305
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
                    "start": 1322,
                    "end": 1323
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
                        "start": 1333,
                        "end": 1334
                      },
                      "typeArguments": null,
                      "start": 1333,
                      "end": 1334
                    },
                    "start": 1327,
                    "end": 1334
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
                          "start": 1338,
                          "end": 1339
                        },
                        "typeArguments": null,
                        "start": 1338,
                        "end": 1339
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1340,
                          "end": 1341
                        },
                        "typeArguments": null,
                        "start": 1340,
                        "end": 1341
                      },
                      "start": 1338,
                      "end": 1342
                    },
                    "extendsType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "OptionalOut",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1351,
                        "end": 1362
                      },
                      "typeArguments": null,
                      "start": 1351,
                      "end": 1362
                    },
                    "trueType": {
                      "type": "TSNeverKeyword",
                      "start": 1365,
                      "end": 1370
                    },
                    "falseType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "k",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1373,
                        "end": 1374
                      },
                      "typeArguments": null,
                      "start": 1373,
                      "end": 1374
                    },
                    "start": 1338,
                    "end": 1374
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
                            "start": 1377,
                            "end": 1378
                          },
                          "typeArguments": null,
                          "start": 1377,
                          "end": 1378
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "k",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1379,
                            "end": 1380
                          },
                          "typeArguments": null,
                          "start": 1379,
                          "end": 1380
                        },
                        "start": 1377,
                        "end": 1381
                      },
                      "indexType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "_zod",
                          "raw": "\"_zod\"",
                          "start": 1382,
                          "end": 1388
                        },
                        "start": 1382,
                        "end": 1388
                      },
                      "start": 1377,
                      "end": 1389
                    },
                    "indexType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "output",
                        "raw": "\"output\"",
                        "start": 1390,
                        "end": 1398
                      },
                      "start": 1390,
                      "end": 1398
                    },
                    "start": 1377,
                    "end": 1399
                  },
                  "optional": false,
                  "readonly": "-",
                  "start": 1309,
                  "end": 1401
                },
                {
                  "type": "TSMappedType",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1419,
                    "end": 1420
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
                        "start": 1430,
                        "end": 1431
                      },
                      "typeArguments": null,
                      "start": 1430,
                      "end": 1431
                    },
                    "start": 1424,
                    "end": 1431
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
                          "start": 1435,
                          "end": 1436
                        },
                        "typeArguments": null,
                        "start": 1435,
                        "end": 1436
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1437,
                          "end": 1438
                        },
                        "typeArguments": null,
                        "start": 1437,
                        "end": 1438
                      },
                      "start": 1435,
                      "end": 1439
                    },
                    "extendsType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "OptionalOut",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1448,
                        "end": 1459
                      },
                      "typeArguments": null,
                      "start": 1448,
                      "end": 1459
                    },
                    "trueType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "k",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1462,
                        "end": 1463
                      },
                      "typeArguments": null,
                      "start": 1462,
                      "end": 1463
                    },
                    "falseType": {
                      "type": "TSNeverKeyword",
                      "start": 1466,
                      "end": 1471
                    },
                    "start": 1435,
                    "end": 1471
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
                            "start": 1475,
                            "end": 1476
                          },
                          "typeArguments": null,
                          "start": 1475,
                          "end": 1476
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "k",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1477,
                            "end": 1478
                          },
                          "typeArguments": null,
                          "start": 1477,
                          "end": 1478
                        },
                        "start": 1475,
                        "end": 1479
                      },
                      "indexType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "_zod",
                          "raw": "\"_zod\"",
                          "start": 1480,
                          "end": 1486
                        },
                        "start": 1480,
                        "end": 1486
                      },
                      "start": 1475,
                      "end": 1487
                    },
                    "indexType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "output",
                        "raw": "\"output\"",
                        "start": 1488,
                        "end": 1496
                      },
                      "start": 1488,
                      "end": 1496
                    },
                    "start": 1475,
                    "end": 1497
                  },
                  "optional": true,
                  "readonly": "-",
                  "start": 1406,
                  "end": 1499
                }
              ],
              "start": 1309,
              "end": 1499
            }
          ],
          "start": 1305,
          "end": 1501
        },
        "start": 1297,
        "end": 1501
      },
      "declare": false,
      "start": 1254,
      "end": 1502
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "$InferObjectInput",
        "optional": false,
        "typeAnnotation": null,
        "start": 1508,
        "end": 1525
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
              "start": 1526,
              "end": 1527
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Shape",
                "optional": false,
                "typeAnnotation": null,
                "start": 1536,
                "end": 1541
              },
              "typeArguments": null,
              "start": 1536,
              "end": 1541
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1526,
            "end": 1541
          }
        ],
        "start": 1525,
        "end": 1542
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Prettify",
          "optional": false,
          "typeAnnotation": null,
          "start": 1545,
          "end": 1553
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
                    "start": 1570,
                    "end": 1571
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
                        "start": 1581,
                        "end": 1582
                      },
                      "typeArguments": null,
                      "start": 1581,
                      "end": 1582
                    },
                    "start": 1575,
                    "end": 1582
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
                          "start": 1586,
                          "end": 1587
                        },
                        "typeArguments": null,
                        "start": 1586,
                        "end": 1587
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1588,
                          "end": 1589
                        },
                        "typeArguments": null,
                        "start": 1588,
                        "end": 1589
                      },
                      "start": 1586,
                      "end": 1590
                    },
                    "extendsType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "OptionalIn",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1599,
                        "end": 1609
                      },
                      "typeArguments": null,
                      "start": 1599,
                      "end": 1609
                    },
                    "trueType": {
                      "type": "TSNeverKeyword",
                      "start": 1612,
                      "end": 1617
                    },
                    "falseType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "k",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1620,
                        "end": 1621
                      },
                      "typeArguments": null,
                      "start": 1620,
                      "end": 1621
                    },
                    "start": 1586,
                    "end": 1621
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
                            "start": 1624,
                            "end": 1625
                          },
                          "typeArguments": null,
                          "start": 1624,
                          "end": 1625
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "k",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1626,
                            "end": 1627
                          },
                          "typeArguments": null,
                          "start": 1626,
                          "end": 1627
                        },
                        "start": 1624,
                        "end": 1628
                      },
                      "indexType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "_zod",
                          "raw": "\"_zod\"",
                          "start": 1629,
                          "end": 1635
                        },
                        "start": 1629,
                        "end": 1635
                      },
                      "start": 1624,
                      "end": 1636
                    },
                    "indexType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "input",
                        "raw": "\"input\"",
                        "start": 1637,
                        "end": 1644
                      },
                      "start": 1637,
                      "end": 1644
                    },
                    "start": 1624,
                    "end": 1645
                  },
                  "optional": false,
                  "readonly": "-",
                  "start": 1557,
                  "end": 1647
                },
                {
                  "type": "TSMappedType",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1665,
                    "end": 1666
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
                        "start": 1676,
                        "end": 1677
                      },
                      "typeArguments": null,
                      "start": 1676,
                      "end": 1677
                    },
                    "start": 1670,
                    "end": 1677
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
                          "start": 1681,
                          "end": 1682
                        },
                        "typeArguments": null,
                        "start": 1681,
                        "end": 1682
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1683,
                          "end": 1684
                        },
                        "typeArguments": null,
                        "start": 1683,
                        "end": 1684
                      },
                      "start": 1681,
                      "end": 1685
                    },
                    "extendsType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "OptionalIn",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1694,
                        "end": 1704
                      },
                      "typeArguments": null,
                      "start": 1694,
                      "end": 1704
                    },
                    "trueType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "k",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1707,
                        "end": 1708
                      },
                      "typeArguments": null,
                      "start": 1707,
                      "end": 1708
                    },
                    "falseType": {
                      "type": "TSNeverKeyword",
                      "start": 1711,
                      "end": 1716
                    },
                    "start": 1681,
                    "end": 1716
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
                            "start": 1720,
                            "end": 1721
                          },
                          "typeArguments": null,
                          "start": 1720,
                          "end": 1721
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "k",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1722,
                            "end": 1723
                          },
                          "typeArguments": null,
                          "start": 1722,
                          "end": 1723
                        },
                        "start": 1720,
                        "end": 1724
                      },
                      "indexType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "_zod",
                          "raw": "\"_zod\"",
                          "start": 1725,
                          "end": 1731
                        },
                        "start": 1725,
                        "end": 1731
                      },
                      "start": 1720,
                      "end": 1732
                    },
                    "indexType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "input",
                        "raw": "\"input\"",
                        "start": 1733,
                        "end": 1740
                      },
                      "start": 1733,
                      "end": 1740
                    },
                    "start": 1720,
                    "end": 1741
                  },
                  "optional": true,
                  "readonly": "-",
                  "start": 1652,
                  "end": 1743
                }
              ],
              "start": 1557,
              "end": 1743
            }
          ],
          "start": 1553,
          "end": 1745
        },
        "start": 1545,
        "end": 1745
      },
      "declare": false,
      "start": 1503,
      "end": 1746
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "$ZodStringInternals",
        "optional": false,
        "typeAnnotation": null,
        "start": 1757,
        "end": 1776
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
            "start": 1785,
            "end": 1802
          },
          "typeArguments": null,
          "start": 1785,
          "end": 1802
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
              "start": 1805,
              "end": 1808
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
                      "start": 1812,
                      "end": 1816
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "string",
                          "raw": "\"string\"",
                          "start": 1818,
                          "end": 1826
                        },
                        "start": 1818,
                        "end": 1826
                      },
                      "start": 1816,
                      "end": 1826
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1812,
                    "end": 1826
                  }
                ],
                "start": 1810,
                "end": 1828
              },
              "start": 1808,
              "end": 1828
            },
            "accessibility": null,
            "static": false,
            "start": 1805,
            "end": 1829
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
              "start": 1830,
              "end": 1836
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1838,
                "end": 1844
              },
              "start": 1836,
              "end": 1844
            },
            "accessibility": null,
            "static": false,
            "start": 1830,
            "end": 1845
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
              "start": 1846,
              "end": 1851
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1853,
                "end": 1859
              },
              "start": 1851,
              "end": 1859
            },
            "accessibility": null,
            "static": false,
            "start": 1846,
            "end": 1859
          }
        ],
        "start": 1803,
        "end": 1861
      },
      "declare": false,
      "start": 1747,
      "end": 1861
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ZodString",
        "optional": false,
        "typeAnnotation": null,
        "start": 1872,
        "end": 1881
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "ZodType",
            "optional": false,
            "typeAnnotation": null,
            "start": 1890,
            "end": 1897
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "$ZodStringInternals",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1898,
                  "end": 1917
                },
                "typeArguments": null,
                "start": 1898,
                "end": 1917
              }
            ],
            "start": 1897,
            "end": 1918
          },
          "start": 1890,
          "end": 1918
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 1919,
        "end": 1921
      },
      "declare": false,
      "start": 1862,
      "end": 1921
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "string",
        "optional": false,
        "typeAnnotation": null,
        "start": 1939,
        "end": 1945
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
            "name": "ZodString",
            "optional": false,
            "typeAnnotation": null,
            "start": 1949,
            "end": 1958
          },
          "typeArguments": null,
          "start": 1949,
          "end": 1958
        },
        "start": 1947,
        "end": 1958
      },
      "body": null,
      "expression": false,
      "start": 1922,
      "end": 1959
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "$ZodObjectInternals",
        "optional": false,
        "typeAnnotation": null,
        "start": 1970,
        "end": 1989
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 1990,
              "end": 1991
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Shape",
                "optional": false,
                "typeAnnotation": null,
                "start": 2000,
                "end": 2005
              },
              "typeArguments": null,
              "start": 2000,
              "end": 2005
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1990,
            "end": 2005
          }
        ],
        "start": 1989,
        "end": 2006
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
            "start": 2015,
            "end": 2032
          },
          "typeArguments": null,
          "start": 2015,
          "end": 2032
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
              "start": 2035,
              "end": 2038
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
                      "start": 2042,
                      "end": 2046
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "object",
                          "raw": "\"object\"",
                          "start": 2048,
                          "end": 2056
                        },
                        "start": 2048,
                        "end": 2056
                      },
                      "start": 2046,
                      "end": 2056
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2042,
                    "end": 2057
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
                      "start": 2058,
                      "end": 2063
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "S",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2065,
                          "end": 2066
                        },
                        "typeArguments": null,
                        "start": 2065,
                        "end": 2066
                      },
                      "start": 2063,
                      "end": 2066
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2058,
                    "end": 2066
                  }
                ],
                "start": 2040,
                "end": 2068
              },
              "start": 2038,
              "end": 2068
            },
            "accessibility": null,
            "static": false,
            "start": 2035,
            "end": 2069
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
              "start": 2070,
              "end": 2076
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
                  "start": 2078,
                  "end": 2096
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "S",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2097,
                        "end": 2098
                      },
                      "typeArguments": null,
                      "start": 2097,
                      "end": 2098
                    }
                  ],
                  "start": 2096,
                  "end": 2099
                },
                "start": 2078,
                "end": 2099
              },
              "start": 2076,
              "end": 2099
            },
            "accessibility": null,
            "static": false,
            "start": 2070,
            "end": 2100
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
              "start": 2101,
              "end": 2106
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
                  "start": 2108,
                  "end": 2125
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "S",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2126,
                        "end": 2127
                      },
                      "typeArguments": null,
                      "start": 2126,
                      "end": 2127
                    }
                  ],
                  "start": 2125,
                  "end": 2128
                },
                "start": 2108,
                "end": 2128
              },
              "start": 2106,
              "end": 2128
            },
            "accessibility": null,
            "static": false,
            "start": 2101,
            "end": 2128
          }
        ],
        "start": 2033,
        "end": 2130
      },
      "declare": false,
      "start": 1960,
      "end": 2130
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ZodObject",
        "optional": false,
        "typeAnnotation": null,
        "start": 2141,
        "end": 2150
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 2151,
              "end": 2152
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Shape",
                "optional": false,
                "typeAnnotation": null,
                "start": 2161,
                "end": 2166
              },
              "typeArguments": null,
              "start": 2161,
              "end": 2166
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2151,
            "end": 2166
          }
        ],
        "start": 2150,
        "end": 2167
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "ZodType",
            "optional": false,
            "typeAnnotation": null,
            "start": 2176,
            "end": 2183
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "$ZodObjectInternals",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2184,
                  "end": 2203
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "S",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2204,
                        "end": 2205
                      },
                      "typeArguments": null,
                      "start": 2204,
                      "end": 2205
                    }
                  ],
                  "start": 2203,
                  "end": 2206
                },
                "start": 2184,
                "end": 2206
              }
            ],
            "start": 2183,
            "end": 2207
          },
          "start": 2176,
          "end": 2207
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
              "name": "shape",
              "optional": false,
              "typeAnnotation": null,
              "start": 2210,
              "end": 2215
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "S",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2217,
                  "end": 2218
                },
                "typeArguments": null,
                "start": 2217,
                "end": 2218
              },
              "start": 2215,
              "end": 2218
            },
            "accessibility": null,
            "static": false,
            "start": 2210,
            "end": 2218
          }
        ],
        "start": 2208,
        "end": 2220
      },
      "declare": false,
      "start": 2131,
      "end": 2220
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "object",
        "optional": false,
        "typeAnnotation": null,
        "start": 2238,
        "end": 2244
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
              "start": 2245,
              "end": 2246
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Shape",
                "optional": false,
                "typeAnnotation": null,
                "start": 2255,
                "end": 2260
              },
              "typeArguments": null,
              "start": 2255,
              "end": 2260
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2245,
            "end": 2260
          }
        ],
        "start": 2244,
        "end": 2261
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
                "start": 2269,
                "end": 2270
              },
              "typeArguments": null,
              "start": 2269,
              "end": 2270
            },
            "start": 2267,
            "end": 2270
          },
          "start": 2262,
          "end": 2270
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ZodObject",
            "optional": false,
            "typeAnnotation": null,
            "start": 2273,
            "end": 2282
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Writeable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2283,
                  "end": 2292
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
                        "start": 2293,
                        "end": 2294
                      },
                      "typeArguments": null,
                      "start": 2293,
                      "end": 2294
                    }
                  ],
                  "start": 2292,
                  "end": 2295
                },
                "start": 2283,
                "end": 2295
              }
            ],
            "start": 2282,
            "end": 2296
          },
          "start": 2273,
          "end": 2296
        },
        "start": 2271,
        "end": 2296
      },
      "body": null,
      "expression": false,
      "start": 2221,
      "end": 2297
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "$ZodArrayInternals",
        "optional": false,
        "typeAnnotation": null,
        "start": 2308,
        "end": 2326
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
              "start": 2327,
              "end": 2328
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "$ZodType",
                "optional": false,
                "typeAnnotation": null,
                "start": 2337,
                "end": 2345
              },
              "typeArguments": null,
              "start": 2337,
              "end": 2345
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2327,
            "end": 2345
          }
        ],
        "start": 2326,
        "end": 2346
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
            "start": 2355,
            "end": 2372
          },
          "typeArguments": null,
          "start": 2355,
          "end": 2372
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
              "start": 2375,
              "end": 2378
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
                      "start": 2382,
                      "end": 2386
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "array",
                          "raw": "\"array\"",
                          "start": 2388,
                          "end": 2395
                        },
                        "start": 2388,
                        "end": 2395
                      },
                      "start": 2386,
                      "end": 2395
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2382,
                    "end": 2396
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
                      "start": 2397,
                      "end": 2404
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
                          "start": 2406,
                          "end": 2407
                        },
                        "typeArguments": null,
                        "start": 2406,
                        "end": 2407
                      },
                      "start": 2404,
                      "end": 2407
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2397,
                    "end": 2407
                  }
                ],
                "start": 2380,
                "end": 2409
              },
              "start": 2378,
              "end": 2409
            },
            "accessibility": null,
            "static": false,
            "start": 2375,
            "end": 2410
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
              "start": 2411,
              "end": 2417
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "output",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2419,
                    "end": 2425
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
                          "start": 2426,
                          "end": 2427
                        },
                        "typeArguments": null,
                        "start": 2426,
                        "end": 2427
                      }
                    ],
                    "start": 2425,
                    "end": 2428
                  },
                  "start": 2419,
                  "end": 2428
                },
                "start": 2419,
                "end": 2430
              },
              "start": 2417,
              "end": 2430
            },
            "accessibility": null,
            "static": false,
            "start": 2411,
            "end": 2431
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
              "start": 2432,
              "end": 2437
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "input",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2439,
                    "end": 2444
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
                          "start": 2445,
                          "end": 2446
                        },
                        "typeArguments": null,
                        "start": 2445,
                        "end": 2446
                      }
                    ],
                    "start": 2444,
                    "end": 2447
                  },
                  "start": 2439,
                  "end": 2447
                },
                "start": 2439,
                "end": 2449
              },
              "start": 2437,
              "end": 2449
            },
            "accessibility": null,
            "static": false,
            "start": 2432,
            "end": 2449
          }
        ],
        "start": 2373,
        "end": 2451
      },
      "declare": false,
      "start": 2298,
      "end": 2451
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ZodArray",
        "optional": false,
        "typeAnnotation": null,
        "start": 2462,
        "end": 2470
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
              "start": 2471,
              "end": 2472
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "$ZodType",
                "optional": false,
                "typeAnnotation": null,
                "start": 2481,
                "end": 2489
              },
              "typeArguments": null,
              "start": 2481,
              "end": 2489
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2471,
            "end": 2489
          }
        ],
        "start": 2470,
        "end": 2490
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "ZodType",
            "optional": false,
            "typeAnnotation": null,
            "start": 2499,
            "end": 2506
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "$ZodArrayInternals",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2507,
                  "end": 2525
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
                        "start": 2526,
                        "end": 2527
                      },
                      "typeArguments": null,
                      "start": 2526,
                      "end": 2527
                    }
                  ],
                  "start": 2525,
                  "end": 2528
                },
                "start": 2507,
                "end": 2528
              }
            ],
            "start": 2506,
            "end": 2529
          },
          "start": 2499,
          "end": 2529
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
              "name": "element",
              "optional": false,
              "typeAnnotation": null,
              "start": 2532,
              "end": 2539
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
                  "start": 2541,
                  "end": 2542
                },
                "typeArguments": null,
                "start": 2541,
                "end": 2542
              },
              "start": 2539,
              "end": 2542
            },
            "accessibility": null,
            "static": false,
            "start": 2532,
            "end": 2542
          }
        ],
        "start": 2530,
        "end": 2544
      },
      "declare": false,
      "start": 2452,
      "end": 2544
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "array",
        "optional": false,
        "typeAnnotation": null,
        "start": 2562,
        "end": 2567
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
              "start": 2568,
              "end": 2569
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "$ZodType",
                "optional": false,
                "typeAnnotation": null,
                "start": 2578,
                "end": 2586
              },
              "typeArguments": null,
              "start": 2578,
              "end": 2586
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2568,
            "end": 2586
          }
        ],
        "start": 2567,
        "end": 2587
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
                "start": 2597,
                "end": 2598
              },
              "typeArguments": null,
              "start": 2597,
              "end": 2598
            },
            "start": 2595,
            "end": 2598
          },
          "start": 2588,
          "end": 2598
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ZodArray",
            "optional": false,
            "typeAnnotation": null,
            "start": 2601,
            "end": 2609
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
                  "start": 2610,
                  "end": 2611
                },
                "typeArguments": null,
                "start": 2610,
                "end": 2611
              }
            ],
            "start": 2609,
            "end": 2612
          },
          "start": 2601,
          "end": 2612
        },
        "start": 2599,
        "end": 2612
      },
      "body": null,
      "expression": false,
      "start": 2545,
      "end": 2613
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "$ZodDefaultInternals",
        "optional": false,
        "typeAnnotation": null,
        "start": 2624,
        "end": 2644
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
              "start": 2645,
              "end": 2646
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "$ZodType",
                "optional": false,
                "typeAnnotation": null,
                "start": 2655,
                "end": 2663
              },
              "typeArguments": null,
              "start": 2655,
              "end": 2663
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2645,
            "end": 2663
          }
        ],
        "start": 2644,
        "end": 2664
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
            "start": 2673,
            "end": 2690
          },
          "typeArguments": null,
          "start": 2673,
          "end": 2690
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
              "start": 2693,
              "end": 2696
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
                      "start": 2700,
                      "end": 2704
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "default",
                          "raw": "\"default\"",
                          "start": 2706,
                          "end": 2715
                        },
                        "start": 2706,
                        "end": 2715
                      },
                      "start": 2704,
                      "end": 2715
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2700,
                    "end": 2716
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "inner",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2717,
                      "end": 2722
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
                          "start": 2724,
                          "end": 2725
                        },
                        "typeArguments": null,
                        "start": 2724,
                        "end": 2725
                      },
                      "start": 2722,
                      "end": 2725
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2717,
                    "end": 2725
                  }
                ],
                "start": 2698,
                "end": 2727
              },
              "start": 2696,
              "end": 2727
            },
            "accessibility": null,
            "static": false,
            "start": 2693,
            "end": 2728
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
              "start": 2729,
              "end": 2735
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NoUndefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2737,
                  "end": 2748
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "output",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2749,
                        "end": 2755
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
                              "start": 2756,
                              "end": 2757
                            },
                            "typeArguments": null,
                            "start": 2756,
                            "end": 2757
                          }
                        ],
                        "start": 2755,
                        "end": 2758
                      },
                      "start": 2749,
                      "end": 2758
                    }
                  ],
                  "start": 2748,
                  "end": 2759
                },
                "start": 2737,
                "end": 2759
              },
              "start": 2735,
              "end": 2759
            },
            "accessibility": null,
            "static": false,
            "start": 2729,
            "end": 2760
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
              "start": 2761,
              "end": 2766
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
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
                      "start": 2768,
                      "end": 2773
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
                            "start": 2774,
                            "end": 2775
                          },
                          "typeArguments": null,
                          "start": 2774,
                          "end": 2775
                        }
                      ],
                      "start": 2773,
                      "end": 2776
                    },
                    "start": 2768,
                    "end": 2776
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 2779,
                    "end": 2788
                  }
                ],
                "start": 2768,
                "end": 2788
              },
              "start": 2766,
              "end": 2788
            },
            "accessibility": null,
            "static": false,
            "start": 2761,
            "end": 2789
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
              "start": 2790,
              "end": 2795
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "optional",
                  "raw": "\"optional\"",
                  "start": 2797,
                  "end": 2807
                },
                "start": 2797,
                "end": 2807
              },
              "start": 2795,
              "end": 2807
            },
            "accessibility": null,
            "static": false,
            "start": 2790,
            "end": 2807
          }
        ],
        "start": 2691,
        "end": 2809
      },
      "declare": false,
      "start": 2614,
      "end": 2809
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ZodDefault",
        "optional": false,
        "typeAnnotation": null,
        "start": 2820,
        "end": 2830
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
              "start": 2831,
              "end": 2832
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "$ZodType",
                "optional": false,
                "typeAnnotation": null,
                "start": 2841,
                "end": 2849
              },
              "typeArguments": null,
              "start": 2841,
              "end": 2849
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2831,
            "end": 2849
          }
        ],
        "start": 2830,
        "end": 2850
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "ZodType",
            "optional": false,
            "typeAnnotation": null,
            "start": 2859,
            "end": 2866
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "$ZodDefaultInternals",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2867,
                  "end": 2887
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
                        "start": 2888,
                        "end": 2889
                      },
                      "typeArguments": null,
                      "start": 2888,
                      "end": 2889
                    }
                  ],
                  "start": 2887,
                  "end": 2890
                },
                "start": 2867,
                "end": 2890
              }
            ],
            "start": 2866,
            "end": 2891
          },
          "start": 2859,
          "end": 2891
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 2892,
        "end": 2894
      },
      "declare": false,
      "start": 2810,
      "end": 2894
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
            "name": "Tree",
            "optional": false,
            "typeAnnotation": null,
            "start": 2902,
            "end": 2906
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "object",
              "optional": false,
              "typeAnnotation": null,
              "start": 2909,
              "end": 2915
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
                      "start": 2920,
                      "end": 2924
                    },
                    "value": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "string",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2926,
                        "end": 2932
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 2926,
                      "end": 2934
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 2920,
                    "end": 2934
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
                      "start": 2942,
                      "end": 2950
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
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "array",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2966,
                                    "end": 2971
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Tree",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2972,
                                      "end": 2976
                                    }
                                  ],
                                  "optional": false,
                                  "start": 2966,
                                  "end": 2977
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "default",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2978,
                                  "end": 2985
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2966,
                                "end": 2985
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "ArrayExpression",
                                  "elements": [],
                                  "start": 2986,
                                  "end": 2988
                                }
                              ],
                              "optional": false,
                              "start": 2966,
                              "end": 2989
                            },
                            "start": 2959,
                            "end": 2989
                          }
                        ],
                        "start": 2953,
                        "end": 2993
                      },
                      "expression": false,
                      "start": 2950,
                      "end": 2993
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 2938,
                    "end": 2993
                  }
                ],
                "start": 2916,
                "end": 2996
              }
            ],
            "optional": false,
            "start": 2909,
            "end": 2997
          },
          "definite": false,
          "start": 2902,
          "end": 2997
        }
      ],
      "declare": false,
      "start": 2896,
      "end": 2998
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 2998
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 57,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "output",
    "start": 62,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "type": "Punctuator",
    "value": "{",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "_zod",
    "start": 86,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "output",
    "start": 94,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 100,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 102,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 113,
    "end": 114
  },
  {
    "type": "String",
    "value": "\"_zod\"",
    "start": 114,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 121,
    "end": 122
  },
  {
    "type": "String",
    "value": "\"output\"",
    "start": 122,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 134,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 143,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 148,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 159,
    "end": 160
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 161,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 169,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "_zod",
    "start": 171,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 179,
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
    "value": "any",
    "start": 186,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 194,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 197,
    "end": 198
  },
  {
    "type": "String",
    "value": "\"_zod\"",
    "start": 198,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 205,
    "end": 206
  },
  {
    "type": "String",
    "value": "\"input\"",
    "start": 206,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 215,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 217,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 224,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 226,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "NoUndefined",
    "start": 231,
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
    "start": 248,
    "end": 249
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 250,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 258,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 268,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 270,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 276,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 279,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 281,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "Writeable",
    "start": 286,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 295,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 303,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 304,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 313,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 314,
    "end": 315
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 316,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 319,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 326,
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
    "value": "T",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 330,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 335,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 337,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "Prettify",
    "start": 342,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 350,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 358,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 359,
    "end": 360
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 361,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 364,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 372,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 375,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 384,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 385,
    "end": 386
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 387,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "$ZodTypeInternals",
    "start": 397,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 414,
    "end": 415
  },
  {
    "type": "Identifier",
    "value": "out",
    "start": 415,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 421,
    "end": 422
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 423,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 430,
    "end": 431
  },
  {
    "type": "Identifier",
    "value": "out",
    "start": 432,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "I",
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
    "value": "unknown",
    "start": 440,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 449,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "def",
    "start": 451,
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
    "value": "unknown",
    "start": 456,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 463,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "output",
    "start": 465,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 471,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 473,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 474,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 476,
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
    "value": "I",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 484,
    "end": 485
  },
  {
    "type": "Identifier",
    "value": "optin",
    "start": 486,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 491,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 492,
    "end": 493
  },
  {
    "type": "String",
    "value": "\"optional\"",
    "start": 494,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 505,
    "end": 506
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 507,
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
    "value": "optout",
    "start": 518,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 524,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 525,
    "end": 526
  },
  {
    "type": "String",
    "value": "\"optional\"",
    "start": 527,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 538,
    "end": 539
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 540,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 550,
    "end": 551
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 552,
    "end": 561
  },
  {
    "type": "Identifier",
    "value": "StandardProps",
    "start": 562,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 575,
    "end": 576
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 576,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 577,
    "end": 578
  },
  {
    "type": "Identifier",
    "value": "O",
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
    "value": "readonly",
    "start": 584,
    "end": 592
  },
  {
    "type": "Identifier",
    "value": "types",
    "start": 593,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 598,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 599,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 601,
    "end": 602
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 603,
    "end": 611
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 612,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 617,
    "end": 618
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 619,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 620,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 622,
    "end": 630
  },
  {
    "type": "Identifier",
    "value": "output",
    "start": 631,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 637,
    "end": 638
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 639,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 641,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 643,
    "end": 644
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 645,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 655,
    "end": 656
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 657,
    "end": 666
  },
  {
    "type": "Identifier",
    "value": "$ZodType",
    "start": 667,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 675,
    "end": 676
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 676,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 678,
    "end": 679
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 680,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 687,
    "end": 688
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 689,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 691,
    "end": 692
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 693,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 700,
    "end": 701
  },
  {
    "type": "Identifier",
    "value": "Internals",
    "start": 702,
    "end": 711
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 712,
    "end": 719
  },
  {
    "type": "Identifier",
    "value": "$ZodTypeInternals",
    "start": 720,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 737,
    "end": 738
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 738,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 739,
    "end": 740
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 741,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 742,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 744,
    "end": 745
  },
  {
    "type": "Identifier",
    "value": "$ZodTypeInternals",
    "start": 746,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 763,
    "end": 764
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 764,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 765,
    "end": 766
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 767,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 768,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Identifier",
    "value": "_zod",
    "start": 775,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 779,
    "end": 780
  },
  {
    "type": "Identifier",
    "value": "Internals",
    "start": 781,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 790,
    "end": 791
  },
  {
    "type": "String",
    "value": "\"~standard\"",
    "start": 794,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 805,
    "end": 806
  },
  {
    "type": "Identifier",
    "value": "StandardProps",
    "start": 807,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 820,
    "end": 821
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 821,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 826,
    "end": 827
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 827,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 831,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 832,
    "end": 833
  },
  {
    "type": "Identifier",
    "value": "output",
    "start": 834,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 840,
    "end": 841
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 841,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 845,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 846,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 847,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 849,
    "end": 850
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 851,
    "end": 860
  },
  {
    "type": "Identifier",
    "value": "ZodType",
    "start": 861,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 868,
    "end": 869
  },
  {
    "type": "Identifier",
    "value": "out",
    "start": 869,
    "end": 872
  },
  {
    "type": "Identifier",
    "value": "Internals",
    "start": 873,
    "end": 882
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 883,
    "end": 890
  },
  {
    "type": "Identifier",
    "value": "$ZodTypeInternals",
    "start": 891,
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
    "value": "$ZodTypeInternals",
    "start": 911,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 928,
    "end": 929
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 930,
    "end": 937
  },
  {
    "type": "Identifier",
    "value": "$ZodType",
    "start": 938,
    "end": 946
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 946,
    "end": 947
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 947,
    "end": 950
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 950,
    "end": 951
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 952,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 955,
    "end": 956
  },
  {
    "type": "Identifier",
    "value": "Internals",
    "start": 957,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 966,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 968,
    "end": 969
  },
  {
    "type": "Identifier",
    "value": "default",
    "start": 972,
    "end": 979
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 979,
    "end": 980
  },
  {
    "type": "Identifier",
    "value": "def",
    "start": 980,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 983,
    "end": 984
  },
  {
    "type": "Identifier",
    "value": "NoUndefined",
    "start": 985,
    "end": 996
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 996,
    "end": 997
  },
  {
    "type": "Identifier",
    "value": "output",
    "start": 997,
    "end": 1003
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1003,
    "end": 1004
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1004,
    "end": 1008
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": ")",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1011,
    "end": 1012
  },
  {
    "type": "Identifier",
    "value": "ZodDefault",
    "start": 1013,
    "end": 1023
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1024,
    "end": 1028
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Identifier",
    "value": "default",
    "start": 1033,
    "end": 1040
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Identifier",
    "value": "def",
    "start": 1041,
    "end": 1044
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1049,
    "end": 1051
  },
  {
    "type": "Identifier",
    "value": "NoUndefined",
    "start": 1052,
    "end": 1063
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1063,
    "end": 1064
  },
  {
    "type": "Identifier",
    "value": "output",
    "start": 1064,
    "end": 1070
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1071,
    "end": 1075
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1075,
    "end": 1076
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1076,
    "end": 1077
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1078,
    "end": 1079
  },
  {
    "type": "Identifier",
    "value": "ZodDefault",
    "start": 1080,
    "end": 1090
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1091,
    "end": 1095
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1096,
    "end": 1097
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1098,
    "end": 1099
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1100,
    "end": 1104
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 1105,
    "end": 1110
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 1113,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1125,
    "end": 1126
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1126,
    "end": 1127
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1128,
    "end": 1134
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1134,
    "end": 1135
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1135,
    "end": 1136
  },
  {
    "type": "Identifier",
    "value": "$ZodType",
    "start": 1137,
    "end": 1145
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1146,
    "end": 1147
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1147,
    "end": 1148
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1148,
    "end": 1149
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1150,
    "end": 1154
  },
  {
    "type": "Identifier",
    "value": "OptionalOut",
    "start": 1155,
    "end": 1166
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Identifier",
    "value": "_zod",
    "start": 1171,
    "end": 1175
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Identifier",
    "value": "optout",
    "start": 1179,
    "end": 1185
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "String",
    "value": "\"optional\"",
    "start": 1187,
    "end": 1197
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1200,
    "end": 1201
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1203,
    "end": 1207
  },
  {
    "type": "Identifier",
    "value": "OptionalIn",
    "start": 1208,
    "end": 1218
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1219,
    "end": 1220
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1221,
    "end": 1222
  },
  {
    "type": "Identifier",
    "value": "_zod",
    "start": 1223,
    "end": 1227
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1227,
    "end": 1228
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1229,
    "end": 1230
  },
  {
    "type": "Identifier",
    "value": "optin",
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
    "type": "String",
    "value": "\"optional\"",
    "start": 1238,
    "end": 1248
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1249,
    "end": 1250
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1251,
    "end": 1252
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1252,
    "end": 1253
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1254,
    "end": 1258
  },
  {
    "type": "Identifier",
    "value": "$InferObjectOutput",
    "start": 1259,
    "end": 1277
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1277,
    "end": 1278
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1278,
    "end": 1279
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1280,
    "end": 1287
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 1288,
    "end": 1293
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1293,
    "end": 1294
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1295,
    "end": 1296
  },
  {
    "type": "Identifier",
    "value": "Prettify",
    "start": 1297,
    "end": 1305
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1305,
    "end": 1306
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1309,
    "end": 1310
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 1311,
    "end": 1312
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1312,
    "end": 1320
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1321,
    "end": 1322
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1322,
    "end": 1323
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1324,
    "end": 1326
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1327,
    "end": 1332
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1333,
    "end": 1334
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1335,
    "end": 1337
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1339,
    "end": 1340
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1340,
    "end": 1341
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1341,
    "end": 1342
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1343,
    "end": 1350
  },
  {
    "type": "Identifier",
    "value": "OptionalOut",
    "start": 1351,
    "end": 1362
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1363,
    "end": 1364
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1365,
    "end": 1370
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1371,
    "end": 1372
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1373,
    "end": 1374
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1374,
    "end": 1375
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1375,
    "end": 1376
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1377,
    "end": 1378
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1378,
    "end": 1379
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1379,
    "end": 1380
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1380,
    "end": 1381
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1381,
    "end": 1382
  },
  {
    "type": "String",
    "value": "\"_zod\"",
    "start": 1382,
    "end": 1388
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1388,
    "end": 1389
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1389,
    "end": 1390
  },
  {
    "type": "String",
    "value": "\"output\"",
    "start": 1390,
    "end": 1398
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1398,
    "end": 1399
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1400,
    "end": 1401
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1402,
    "end": 1403
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1406,
    "end": 1407
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 1408,
    "end": 1409
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1409,
    "end": 1417
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1418,
    "end": 1419
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1419,
    "end": 1420
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1421,
    "end": 1423
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1424,
    "end": 1429
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1430,
    "end": 1431
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1432,
    "end": 1434
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1435,
    "end": 1436
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1436,
    "end": 1437
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1437,
    "end": 1438
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1438,
    "end": 1439
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1440,
    "end": 1447
  },
  {
    "type": "Identifier",
    "value": "OptionalOut",
    "start": 1448,
    "end": 1459
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1460,
    "end": 1461
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1462,
    "end": 1463
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1464,
    "end": 1465
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1466,
    "end": 1471
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1471,
    "end": 1472
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1472,
    "end": 1473
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1473,
    "end": 1474
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1475,
    "end": 1476
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1476,
    "end": 1477
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1477,
    "end": 1478
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1478,
    "end": 1479
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1479,
    "end": 1480
  },
  {
    "type": "String",
    "value": "\"_zod\"",
    "start": 1480,
    "end": 1486
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1486,
    "end": 1487
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1487,
    "end": 1488
  },
  {
    "type": "String",
    "value": "\"output\"",
    "start": 1488,
    "end": 1496
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1496,
    "end": 1497
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1498,
    "end": 1499
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1500,
    "end": 1501
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1501,
    "end": 1502
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1503,
    "end": 1507
  },
  {
    "type": "Identifier",
    "value": "$InferObjectInput",
    "start": 1508,
    "end": 1525
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1525,
    "end": 1526
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1526,
    "end": 1527
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1528,
    "end": 1535
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 1536,
    "end": 1541
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1541,
    "end": 1542
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1543,
    "end": 1544
  },
  {
    "type": "Identifier",
    "value": "Prettify",
    "start": 1545,
    "end": 1553
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1553,
    "end": 1554
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1557,
    "end": 1558
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 1559,
    "end": 1560
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1560,
    "end": 1568
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1569,
    "end": 1570
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1570,
    "end": 1571
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1572,
    "end": 1574
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1575,
    "end": 1580
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1581,
    "end": 1582
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1583,
    "end": 1585
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1586,
    "end": 1587
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1587,
    "end": 1588
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1588,
    "end": 1589
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1589,
    "end": 1590
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1591,
    "end": 1598
  },
  {
    "type": "Identifier",
    "value": "OptionalIn",
    "start": 1599,
    "end": 1609
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1610,
    "end": 1611
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1612,
    "end": 1617
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1618,
    "end": 1619
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1620,
    "end": 1621
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1621,
    "end": 1622
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1622,
    "end": 1623
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1624,
    "end": 1625
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1625,
    "end": 1626
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1626,
    "end": 1627
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1627,
    "end": 1628
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1628,
    "end": 1629
  },
  {
    "type": "String",
    "value": "\"_zod\"",
    "start": 1629,
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
    "value": "[",
    "start": 1636,
    "end": 1637
  },
  {
    "type": "String",
    "value": "\"input\"",
    "start": 1637,
    "end": 1644
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1644,
    "end": 1645
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1646,
    "end": 1647
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1648,
    "end": 1649
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1652,
    "end": 1653
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 1654,
    "end": 1655
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1655,
    "end": 1663
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1664,
    "end": 1665
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1665,
    "end": 1666
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1667,
    "end": 1669
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1670,
    "end": 1675
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1676,
    "end": 1677
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1678,
    "end": 1680
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1681,
    "end": 1682
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1682,
    "end": 1683
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1683,
    "end": 1684
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1684,
    "end": 1685
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1686,
    "end": 1693
  },
  {
    "type": "Identifier",
    "value": "OptionalIn",
    "start": 1694,
    "end": 1704
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1705,
    "end": 1706
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1707,
    "end": 1708
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1709,
    "end": 1710
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1711,
    "end": 1716
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1716,
    "end": 1717
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1717,
    "end": 1718
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1718,
    "end": 1719
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1720,
    "end": 1721
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1721,
    "end": 1722
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1722,
    "end": 1723
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1723,
    "end": 1724
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1724,
    "end": 1725
  },
  {
    "type": "String",
    "value": "\"_zod\"",
    "start": 1725,
    "end": 1731
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1731,
    "end": 1732
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1732,
    "end": 1733
  },
  {
    "type": "String",
    "value": "\"input\"",
    "start": 1733,
    "end": 1740
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1740,
    "end": 1741
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1742,
    "end": 1743
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1744,
    "end": 1745
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1745,
    "end": 1746
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1747,
    "end": 1756
  },
  {
    "type": "Identifier",
    "value": "$ZodStringInternals",
    "start": 1757,
    "end": 1776
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1777,
    "end": 1784
  },
  {
    "type": "Identifier",
    "value": "$ZodTypeInternals",
    "start": 1785,
    "end": 1802
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1803,
    "end": 1804
  },
  {
    "type": "Identifier",
    "value": "def",
    "start": 1805,
    "end": 1808
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1808,
    "end": 1809
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1810,
    "end": 1811
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1812,
    "end": 1816
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1816,
    "end": 1817
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1818,
    "end": 1826
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1827,
    "end": 1828
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1828,
    "end": 1829
  },
  {
    "type": "Identifier",
    "value": "output",
    "start": 1830,
    "end": 1836
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1836,
    "end": 1837
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1838,
    "end": 1844
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1844,
    "end": 1845
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 1846,
    "end": 1851
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1851,
    "end": 1852
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1853,
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
    "value": "interface",
    "start": 1862,
    "end": 1871
  },
  {
    "type": "Identifier",
    "value": "ZodString",
    "start": 1872,
    "end": 1881
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1882,
    "end": 1889
  },
  {
    "type": "Identifier",
    "value": "ZodType",
    "start": 1890,
    "end": 1897
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1897,
    "end": 1898
  },
  {
    "type": "Identifier",
    "value": "$ZodStringInternals",
    "start": 1898,
    "end": 1917
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1917,
    "end": 1918
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1919,
    "end": 1920
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1920,
    "end": 1921
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1922,
    "end": 1929
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1930,
    "end": 1938
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1939,
    "end": 1945
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1945,
    "end": 1946
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1946,
    "end": 1947
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1947,
    "end": 1948
  },
  {
    "type": "Identifier",
    "value": "ZodString",
    "start": 1949,
    "end": 1958
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1958,
    "end": 1959
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1960,
    "end": 1969
  },
  {
    "type": "Identifier",
    "value": "$ZodObjectInternals",
    "start": 1970,
    "end": 1989
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1989,
    "end": 1990
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 1990,
    "end": 1991
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1992,
    "end": 1999
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 2000,
    "end": 2005
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2005,
    "end": 2006
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2007,
    "end": 2014
  },
  {
    "type": "Identifier",
    "value": "$ZodTypeInternals",
    "start": 2015,
    "end": 2032
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2033,
    "end": 2034
  },
  {
    "type": "Identifier",
    "value": "def",
    "start": 2035,
    "end": 2038
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2038,
    "end": 2039
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2040,
    "end": 2041
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2042,
    "end": 2046
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2046,
    "end": 2047
  },
  {
    "type": "String",
    "value": "\"object\"",
    "start": 2048,
    "end": 2056
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2056,
    "end": 2057
  },
  {
    "type": "Identifier",
    "value": "shape",
    "start": 2058,
    "end": 2063
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2063,
    "end": 2064
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 2065,
    "end": 2066
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2067,
    "end": 2068
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2068,
    "end": 2069
  },
  {
    "type": "Identifier",
    "value": "output",
    "start": 2070,
    "end": 2076
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2076,
    "end": 2077
  },
  {
    "type": "Identifier",
    "value": "$InferObjectOutput",
    "start": 2078,
    "end": 2096
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2096,
    "end": 2097
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 2097,
    "end": 2098
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2098,
    "end": 2099
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2099,
    "end": 2100
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 2101,
    "end": 2106
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2106,
    "end": 2107
  },
  {
    "type": "Identifier",
    "value": "$InferObjectInput",
    "start": 2108,
    "end": 2125
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2125,
    "end": 2126
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 2126,
    "end": 2127
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Keyword",
    "value": "interface",
    "start": 2131,
    "end": 2140
  },
  {
    "type": "Identifier",
    "value": "ZodObject",
    "start": 2141,
    "end": 2150
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2150,
    "end": 2151
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 2151,
    "end": 2152
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2153,
    "end": 2160
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 2161,
    "end": 2166
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2166,
    "end": 2167
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2168,
    "end": 2175
  },
  {
    "type": "Identifier",
    "value": "ZodType",
    "start": 2176,
    "end": 2183
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2183,
    "end": 2184
  },
  {
    "type": "Identifier",
    "value": "$ZodObjectInternals",
    "start": 2184,
    "end": 2203
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2203,
    "end": 2204
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 2204,
    "end": 2205
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2205,
    "end": 2206
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2206,
    "end": 2207
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2208,
    "end": 2209
  },
  {
    "type": "Identifier",
    "value": "shape",
    "start": 2210,
    "end": 2215
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2215,
    "end": 2216
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 2217,
    "end": 2218
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2219,
    "end": 2220
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2221,
    "end": 2228
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2229,
    "end": 2237
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 2238,
    "end": 2244
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2244,
    "end": 2245
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2245,
    "end": 2246
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2247,
    "end": 2254
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 2255,
    "end": 2260
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2260,
    "end": 2261
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2261,
    "end": 2262
  },
  {
    "type": "Identifier",
    "value": "shape",
    "start": 2262,
    "end": 2267
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2267,
    "end": 2268
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2269,
    "end": 2270
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2270,
    "end": 2271
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2271,
    "end": 2272
  },
  {
    "type": "Identifier",
    "value": "ZodObject",
    "start": 2273,
    "end": 2282
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2282,
    "end": 2283
  },
  {
    "type": "Identifier",
    "value": "Writeable",
    "start": 2283,
    "end": 2292
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2292,
    "end": 2293
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2293,
    "end": 2294
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2294,
    "end": 2295
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2295,
    "end": 2296
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2296,
    "end": 2297
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2298,
    "end": 2307
  },
  {
    "type": "Identifier",
    "value": "$ZodArrayInternals",
    "start": 2308,
    "end": 2326
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2326,
    "end": 2327
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2327,
    "end": 2328
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2329,
    "end": 2336
  },
  {
    "type": "Identifier",
    "value": "$ZodType",
    "start": 2337,
    "end": 2345
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2345,
    "end": 2346
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2347,
    "end": 2354
  },
  {
    "type": "Identifier",
    "value": "$ZodTypeInternals",
    "start": 2355,
    "end": 2372
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2373,
    "end": 2374
  },
  {
    "type": "Identifier",
    "value": "def",
    "start": 2375,
    "end": 2378
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2378,
    "end": 2379
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2380,
    "end": 2381
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2382,
    "end": 2386
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2386,
    "end": 2387
  },
  {
    "type": "String",
    "value": "\"array\"",
    "start": 2388,
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
    "value": "element",
    "start": 2397,
    "end": 2404
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2404,
    "end": 2405
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2406,
    "end": 2407
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2408,
    "end": 2409
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2409,
    "end": 2410
  },
  {
    "type": "Identifier",
    "value": "output",
    "start": 2411,
    "end": 2417
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2417,
    "end": 2418
  },
  {
    "type": "Identifier",
    "value": "output",
    "start": 2419,
    "end": 2425
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2425,
    "end": 2426
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2426,
    "end": 2427
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2427,
    "end": 2428
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2428,
    "end": 2429
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2429,
    "end": 2430
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2430,
    "end": 2431
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 2432,
    "end": 2437
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2437,
    "end": 2438
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 2439,
    "end": 2444
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2444,
    "end": 2445
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2445,
    "end": 2446
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2446,
    "end": 2447
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2447,
    "end": 2448
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2448,
    "end": 2449
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2450,
    "end": 2451
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2452,
    "end": 2461
  },
  {
    "type": "Identifier",
    "value": "ZodArray",
    "start": 2462,
    "end": 2470
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2470,
    "end": 2471
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2471,
    "end": 2472
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2473,
    "end": 2480
  },
  {
    "type": "Identifier",
    "value": "$ZodType",
    "start": 2481,
    "end": 2489
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2489,
    "end": 2490
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2491,
    "end": 2498
  },
  {
    "type": "Identifier",
    "value": "ZodType",
    "start": 2499,
    "end": 2506
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2506,
    "end": 2507
  },
  {
    "type": "Identifier",
    "value": "$ZodArrayInternals",
    "start": 2507,
    "end": 2525
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2525,
    "end": 2526
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2526,
    "end": 2527
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2527,
    "end": 2528
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2528,
    "end": 2529
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2530,
    "end": 2531
  },
  {
    "type": "Identifier",
    "value": "element",
    "start": 2532,
    "end": 2539
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2539,
    "end": 2540
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2541,
    "end": 2542
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2543,
    "end": 2544
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2545,
    "end": 2552
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2553,
    "end": 2561
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 2562,
    "end": 2567
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2567,
    "end": 2568
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2568,
    "end": 2569
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2570,
    "end": 2577
  },
  {
    "type": "Identifier",
    "value": "$ZodType",
    "start": 2578,
    "end": 2586
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2586,
    "end": 2587
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2587,
    "end": 2588
  },
  {
    "type": "Identifier",
    "value": "element",
    "start": 2588,
    "end": 2595
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2595,
    "end": 2596
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2597,
    "end": 2598
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2598,
    "end": 2599
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2599,
    "end": 2600
  },
  {
    "type": "Identifier",
    "value": "ZodArray",
    "start": 2601,
    "end": 2609
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2609,
    "end": 2610
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2610,
    "end": 2611
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2611,
    "end": 2612
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2612,
    "end": 2613
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2614,
    "end": 2623
  },
  {
    "type": "Identifier",
    "value": "$ZodDefaultInternals",
    "start": 2624,
    "end": 2644
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2644,
    "end": 2645
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2645,
    "end": 2646
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2647,
    "end": 2654
  },
  {
    "type": "Identifier",
    "value": "$ZodType",
    "start": 2655,
    "end": 2663
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2663,
    "end": 2664
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2665,
    "end": 2672
  },
  {
    "type": "Identifier",
    "value": "$ZodTypeInternals",
    "start": 2673,
    "end": 2690
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2691,
    "end": 2692
  },
  {
    "type": "Identifier",
    "value": "def",
    "start": 2693,
    "end": 2696
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2696,
    "end": 2697
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2698,
    "end": 2699
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2700,
    "end": 2704
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2704,
    "end": 2705
  },
  {
    "type": "String",
    "value": "\"default\"",
    "start": 2706,
    "end": 2715
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2715,
    "end": 2716
  },
  {
    "type": "Identifier",
    "value": "inner",
    "start": 2717,
    "end": 2722
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2722,
    "end": 2723
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2724,
    "end": 2725
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2726,
    "end": 2727
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2727,
    "end": 2728
  },
  {
    "type": "Identifier",
    "value": "output",
    "start": 2729,
    "end": 2735
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2735,
    "end": 2736
  },
  {
    "type": "Identifier",
    "value": "NoUndefined",
    "start": 2737,
    "end": 2748
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2748,
    "end": 2749
  },
  {
    "type": "Identifier",
    "value": "output",
    "start": 2749,
    "end": 2755
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2755,
    "end": 2756
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2756,
    "end": 2757
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2757,
    "end": 2758
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2758,
    "end": 2759
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2759,
    "end": 2760
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 2761,
    "end": 2766
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2766,
    "end": 2767
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 2768,
    "end": 2773
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2773,
    "end": 2774
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2774,
    "end": 2775
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2775,
    "end": 2776
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2777,
    "end": 2778
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2779,
    "end": 2788
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2788,
    "end": 2789
  },
  {
    "type": "Identifier",
    "value": "optin",
    "start": 2790,
    "end": 2795
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2795,
    "end": 2796
  },
  {
    "type": "String",
    "value": "\"optional\"",
    "start": 2797,
    "end": 2807
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2808,
    "end": 2809
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2810,
    "end": 2819
  },
  {
    "type": "Identifier",
    "value": "ZodDefault",
    "start": 2820,
    "end": 2830
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2830,
    "end": 2831
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2831,
    "end": 2832
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2833,
    "end": 2840
  },
  {
    "type": "Identifier",
    "value": "$ZodType",
    "start": 2841,
    "end": 2849
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2849,
    "end": 2850
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2851,
    "end": 2858
  },
  {
    "type": "Identifier",
    "value": "ZodType",
    "start": 2859,
    "end": 2866
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2866,
    "end": 2867
  },
  {
    "type": "Identifier",
    "value": "$ZodDefaultInternals",
    "start": 2867,
    "end": 2887
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2887,
    "end": 2888
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2888,
    "end": 2889
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2889,
    "end": 2890
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2890,
    "end": 2891
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2892,
    "end": 2893
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2893,
    "end": 2894
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2896,
    "end": 2901
  },
  {
    "type": "Identifier",
    "value": "Tree",
    "start": 2902,
    "end": 2906
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2907,
    "end": 2908
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 2909,
    "end": 2915
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2915,
    "end": 2916
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2916,
    "end": 2917
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2920,
    "end": 2924
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2924,
    "end": 2925
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2926,
    "end": 2932
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2932,
    "end": 2933
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2933,
    "end": 2934
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2934,
    "end": 2935
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 2938,
    "end": 2941
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 2942,
    "end": 2950
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2950,
    "end": 2951
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2951,
    "end": 2952
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2953,
    "end": 2954
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2959,
    "end": 2965
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 2966,
    "end": 2971
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2971,
    "end": 2972
  },
  {
    "type": "Identifier",
    "value": "Tree",
    "start": 2972,
    "end": 2976
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2976,
    "end": 2977
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2977,
    "end": 2978
  },
  {
    "type": "Identifier",
    "value": "default",
    "start": 2978,
    "end": 2985
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2985,
    "end": 2986
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2986,
    "end": 2987
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2987,
    "end": 2988
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2988,
    "end": 2989
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2992,
    "end": 2993
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2993,
    "end": 2994
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2995,
    "end": 2996
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2996,
    "end": 2997
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2997,
    "end": 2998
  }
]
```
