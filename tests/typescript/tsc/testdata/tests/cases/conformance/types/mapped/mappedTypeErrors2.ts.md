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
        "name": "AB",
        "optional": false,
        "typeAnnotation": null,
        "start": 28,
        "end": 30
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 39,
              "end": 40
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "'a'",
                  "start": 42,
                  "end": 45
                },
                "start": 42,
                "end": 45
              },
              "start": 40,
              "end": 45
            },
            "accessibility": null,
            "static": false,
            "start": 39,
            "end": 45
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
              "start": 50,
              "end": 51
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "'a'",
                  "start": 53,
                  "end": 56
                },
                "start": 53,
                "end": 56
              },
              "start": 51,
              "end": 56
            },
            "accessibility": null,
            "static": false,
            "start": 50,
            "end": 56
          }
        ],
        "start": 33,
        "end": 58
      },
      "declare": false,
      "start": 23,
      "end": 59
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T1",
        "optional": false,
        "typeAnnotation": null,
        "start": 66,
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
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 69,
              "end": 70
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 85,
                  "end": 87
                },
                "typeArguments": null,
                "start": 85,
                "end": 87
              },
              "start": 79,
              "end": 87
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 69,
            "end": 87
          }
        ],
        "start": 68,
        "end": 88
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": null,
          "start": 94,
          "end": 97
        },
        "constraint": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "AB",
              "optional": false,
              "typeAnnotation": null,
              "start": 101,
              "end": 103
            },
            "typeArguments": null,
            "start": 101,
            "end": 103
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 104,
              "end": 105
            },
            "typeArguments": null,
            "start": 104,
            "end": 105
          },
          "start": 101,
          "end": 106
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 109,
            "end": 113
          },
          "start": 109,
          "end": 113
        },
        "optional": false,
        "readonly": null,
        "start": 91,
        "end": 115
      },
      "declare": false,
      "start": 61,
      "end": 116
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null,
        "start": 122,
        "end": 124
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 125,
              "end": 126
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "a",
                    "raw": "'a'",
                    "start": 135,
                    "end": 138
                  },
                  "start": 135,
                  "end": 138
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "b",
                    "raw": "'b'",
                    "start": 139,
                    "end": 142
                  },
                  "start": 139,
                  "end": 142
                }
              ],
              "start": 135,
              "end": 142
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 125,
            "end": 142
          }
        ],
        "start": 124,
        "end": 143
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T1",
            "optional": false,
            "typeAnnotation": null,
            "start": 146,
            "end": 148
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 149,
                  "end": 150
                },
                "typeArguments": null,
                "start": 149,
                "end": 150
              }
            ],
            "start": 148,
            "end": 151
          },
          "start": 146,
          "end": 151
        },
        "indexType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 152,
            "end": 153
          },
          "typeArguments": null,
          "start": 152,
          "end": 153
        },
        "start": 146,
        "end": 154
      },
      "declare": false,
      "start": 117,
      "end": 155
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "R",
        "optional": false,
        "typeAnnotation": null,
        "start": 171,
        "end": 172
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "AB",
            "optional": false,
            "typeAnnotation": null,
            "start": 175,
            "end": 177
          },
          "typeArguments": null,
          "start": 175,
          "end": 177
        },
        "indexType": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "AB",
              "optional": false,
              "typeAnnotation": null,
              "start": 184,
              "end": 186
            },
            "typeArguments": null,
            "start": 184,
            "end": 186
          },
          "start": 178,
          "end": 186
        },
        "start": 175,
        "end": 187
      },
      "declare": false,
      "start": 166,
      "end": 188
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T3",
        "optional": false,
        "typeAnnotation": null,
        "start": 201,
        "end": 203
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": null,
          "start": 209,
          "end": 212
        },
        "constraint": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "R",
            "optional": false,
            "typeAnnotation": null,
            "start": 216,
            "end": 217
          },
          "typeArguments": null,
          "start": 216,
          "end": 217
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 220,
            "end": 224
          },
          "start": 220,
          "end": 224
        },
        "optional": false,
        "readonly": null,
        "start": 206,
        "end": 226
      },
      "declare": false,
      "start": 196,
      "end": 227
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T4",
        "optional": false,
        "typeAnnotation": null,
        "start": 233,
        "end": 235
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 236,
              "end": 237
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "a",
                    "raw": "'a'",
                    "start": 246,
                    "end": 249
                  },
                  "start": 246,
                  "end": 249
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "b",
                    "raw": "'b'",
                    "start": 250,
                    "end": 253
                  },
                  "start": 250,
                  "end": 253
                }
              ],
              "start": 246,
              "end": 253
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 236,
            "end": 253
          }
        ],
        "start": 235,
        "end": 254
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T3",
            "optional": false,
            "typeAnnotation": null,
            "start": 257,
            "end": 259
          },
          "typeArguments": null,
          "start": 257,
          "end": 259
        },
        "indexType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 260,
            "end": 261
          },
          "typeArguments": null,
          "start": 260,
          "end": 261
        },
        "start": 257,
        "end": 262
      },
      "declare": false,
      "start": 228,
      "end": 262
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T5",
        "optional": false,
        "typeAnnotation": null,
        "start": 278,
        "end": 280
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
              "start": 281,
              "end": 282
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "a",
                    "raw": "'a'",
                    "start": 291,
                    "end": 294
                  },
                  "start": 291,
                  "end": 294
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "b",
                    "raw": "'b'",
                    "start": 295,
                    "end": 298
                  },
                  "start": 295,
                  "end": 298
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "extra",
                    "raw": "'extra'",
                    "start": 299,
                    "end": 306
                  },
                  "start": 299,
                  "end": 306
                }
              ],
              "start": 291,
              "end": 306
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 281,
            "end": 306
          }
        ],
        "start": 280,
        "end": 307
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "key",
            "optional": false,
            "typeAnnotation": null,
            "start": 312,
            "end": 315
          },
          "constraint": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "AB",
                "optional": false,
                "typeAnnotation": null,
                "start": 319,
                "end": 321
              },
              "typeArguments": null,
              "start": 319,
              "end": 321
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "S",
                "optional": false,
                "typeAnnotation": null,
                "start": 322,
                "end": 323
              },
              "typeArguments": null,
              "start": 322,
              "end": 323
            },
            "start": 319,
            "end": 324
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 327,
              "end": 331
            },
            "start": 327,
            "end": 331
          },
          "optional": false,
          "readonly": null,
          "start": 310,
          "end": 332
        },
        "indexType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "S",
            "optional": false,
            "typeAnnotation": null,
            "start": 333,
            "end": 334
          },
          "typeArguments": null,
          "start": 333,
          "end": 334
        },
        "start": 310,
        "end": 335
      },
      "declare": false,
      "start": 273,
      "end": 336
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T6",
        "optional": false,
        "typeAnnotation": null,
        "start": 352,
        "end": 354
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
              "start": 355,
              "end": 356
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "a",
                    "raw": "'a'",
                    "start": 365,
                    "end": 368
                  },
                  "start": 365,
                  "end": 368
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "b",
                    "raw": "'b'",
                    "start": 369,
                    "end": 372
                  },
                  "start": 369,
                  "end": 372
                }
              ],
              "start": 365,
              "end": 372
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 355,
            "end": 372
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "L",
              "optional": false,
              "typeAnnotation": null,
              "start": 374,
              "end": 375
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "a",
                    "raw": "'a'",
                    "start": 384,
                    "end": 387
                  },
                  "start": 384,
                  "end": 387
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "b",
                    "raw": "'b'",
                    "start": 388,
                    "end": 391
                  },
                  "start": 388,
                  "end": 391
                }
              ],
              "start": 384,
              "end": 391
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 374,
            "end": 391
          }
        ],
        "start": 354,
        "end": 392
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "key",
            "optional": false,
            "typeAnnotation": null,
            "start": 397,
            "end": 400
          },
          "constraint": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "AB",
                "optional": false,
                "typeAnnotation": null,
                "start": 404,
                "end": 406
              },
              "typeArguments": null,
              "start": 404,
              "end": 406
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "S",
                "optional": false,
                "typeAnnotation": null,
                "start": 407,
                "end": 408
              },
              "typeArguments": null,
              "start": 407,
              "end": 408
            },
            "start": 404,
            "end": 409
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 412,
              "end": 416
            },
            "start": 412,
            "end": 416
          },
          "optional": false,
          "readonly": null,
          "start": 395,
          "end": 417
        },
        "indexType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "L",
            "optional": false,
            "typeAnnotation": null,
            "start": 418,
            "end": 419
          },
          "typeArguments": null,
          "start": 418,
          "end": 419
        },
        "start": 395,
        "end": 420
      },
      "declare": false,
      "start": 347,
      "end": 421
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T7",
        "optional": false,
        "typeAnnotation": null,
        "start": 437,
        "end": 439
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
              "start": 440,
              "end": 441
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "a",
                    "raw": "'a'",
                    "start": 450,
                    "end": 453
                  },
                  "start": 450,
                  "end": 453
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "b",
                    "raw": "'b'",
                    "start": 454,
                    "end": 457
                  },
                  "start": 454,
                  "end": 457
                }
              ],
              "start": 450,
              "end": 457
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 440,
            "end": 457
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "L",
              "optional": false,
              "typeAnnotation": null,
              "start": 459,
              "end": 460
            },
            "constraint": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "a",
                "raw": "'a'",
                "start": 469,
                "end": 472
              },
              "start": 469,
              "end": 472
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 459,
            "end": 472
          }
        ],
        "start": 439,
        "end": 473
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "key",
            "optional": false,
            "typeAnnotation": null,
            "start": 478,
            "end": 481
          },
          "constraint": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "AB",
                "optional": false,
                "typeAnnotation": null,
                "start": 485,
                "end": 487
              },
              "typeArguments": null,
              "start": 485,
              "end": 487
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "S",
                "optional": false,
                "typeAnnotation": null,
                "start": 488,
                "end": 489
              },
              "typeArguments": null,
              "start": 488,
              "end": 489
            },
            "start": 485,
            "end": 490
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 493,
              "end": 497
            },
            "start": 493,
            "end": 497
          },
          "optional": false,
          "readonly": null,
          "start": 476,
          "end": 498
        },
        "indexType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "L",
            "optional": false,
            "typeAnnotation": null,
            "start": 499,
            "end": 500
          },
          "typeArguments": null,
          "start": 499,
          "end": 500
        },
        "start": 476,
        "end": 501
      },
      "declare": false,
      "start": 432,
      "end": 502
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 23,
  "end": 502
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 23,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "AB",
    "start": 28,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 40,
    "end": 41
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 42,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 51,
    "end": 52
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 53,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 61,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 66,
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
    "value": "K",
    "start": 69,
    "end": 70
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 71,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 79,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "AB",
    "start": 85,
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
    "type": "Punctuator",
    "value": "{",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 94,
    "end": 97
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 98,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "AB",
    "start": 101,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "start": 107,
    "end": 108
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 109,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 117,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 122,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 124,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 125,
    "end": 126
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 127,
    "end": 134
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 135,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 138,
    "end": 139
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 139,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 146,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "K",
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
    "value": "[",
    "start": 151,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "start": 166,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "AB",
    "start": 175,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 178,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "AB",
    "start": 184,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 196,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "T3",
    "start": 201,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 209,
    "end": 212
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 213,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 218,
    "end": 219
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 220,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 226,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 228,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "T4",
    "start": 233,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 235,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 236,
    "end": 237
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 238,
    "end": 245
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 246,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 249,
    "end": 250
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 250,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 255,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "T3",
    "start": 257,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 259,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 261,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 273,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "T5",
    "start": 278,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 280,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 281,
    "end": 282
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 283,
    "end": 290
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 291,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 294,
    "end": 295
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 295,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 298,
    "end": 299
  },
  {
    "type": "String",
    "value": "'extra'",
    "start": 299,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 311,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 312,
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
    "value": "AB",
    "start": 319,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 321,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 325,
    "end": 326
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 327,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 332,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "start": 347,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "T6",
    "start": 352,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 354,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 355,
    "end": 356
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 357,
    "end": 364
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 365,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 368,
    "end": 369
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 369,
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
    "value": "L",
    "start": 374,
    "end": 375
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 376,
    "end": 383
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 384,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 387,
    "end": 388
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 388,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 396,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 397,
    "end": 400
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 401,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "AB",
    "start": 404,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 406,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 410,
    "end": 411
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 412,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 417,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "L",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 420,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 432,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "T7",
    "start": 437,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 439,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 440,
    "end": 441
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 442,
    "end": 449
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 450,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 453,
    "end": 454
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 454,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 457,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "L",
    "start": 459,
    "end": 460
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 461,
    "end": 468
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 469,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 477,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 478,
    "end": 481
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 482,
    "end": 484
  },
  {
    "type": "Identifier",
    "value": "AB",
    "start": 485,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 487,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "S",
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
    "value": "]",
    "start": 490,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 491,
    "end": 492
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 493,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 497,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 498,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "L",
    "start": 499,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 501,
    "end": 502
  }
]
```
