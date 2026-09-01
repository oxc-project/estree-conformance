__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A0",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 12
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 17,
              "end": 21
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 23,
                "end": 29
              },
              "start": 21,
              "end": 29
            },
            "accessibility": null,
            "static": false,
            "start": 17,
            "end": 30
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 33,
              "end": 37
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
                    "name": "A1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 40,
                    "end": 42
                  },
                  "typeArguments": null,
                  "start": 40,
                  "end": 42
                },
                "start": 40,
                "end": 44
              },
              "start": 38,
              "end": 44
            },
            "accessibility": null,
            "static": false,
            "start": 33,
            "end": 45
          }
        ],
        "start": 13,
        "end": 47
      },
      "declare": false,
      "start": 0,
      "end": 47
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A1",
        "optional": false,
        "typeAnnotation": null,
        "start": 58,
        "end": 60
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 65,
              "end": 69
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 71,
                "end": 77
              },
              "start": 69,
              "end": 77
            },
            "accessibility": null,
            "static": false,
            "start": 65,
            "end": 78
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 81,
              "end": 85
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
                    "name": "A2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 88,
                    "end": 90
                  },
                  "typeArguments": null,
                  "start": 88,
                  "end": 90
                },
                "start": 88,
                "end": 92
              },
              "start": 86,
              "end": 92
            },
            "accessibility": null,
            "static": false,
            "start": 81,
            "end": 93
          }
        ],
        "start": 61,
        "end": 95
      },
      "declare": false,
      "start": 48,
      "end": 95
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A2",
        "optional": false,
        "typeAnnotation": null,
        "start": 106,
        "end": 108
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 113,
              "end": 117
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 119,
                "end": 125
              },
              "start": 117,
              "end": 125
            },
            "accessibility": null,
            "static": false,
            "start": 113,
            "end": 126
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 129,
              "end": 133
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
                    "name": "A3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 136,
                    "end": 138
                  },
                  "typeArguments": null,
                  "start": 136,
                  "end": 138
                },
                "start": 136,
                "end": 140
              },
              "start": 134,
              "end": 140
            },
            "accessibility": null,
            "static": false,
            "start": 129,
            "end": 141
          }
        ],
        "start": 109,
        "end": 143
      },
      "declare": false,
      "start": 96,
      "end": 143
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A3",
        "optional": false,
        "typeAnnotation": null,
        "start": 154,
        "end": 156
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 161,
              "end": 165
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 167,
                "end": 173
              },
              "start": 165,
              "end": 173
            },
            "accessibility": null,
            "static": false,
            "start": 161,
            "end": 174
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 177,
              "end": 181
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
                    "name": "A4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 184,
                    "end": 186
                  },
                  "typeArguments": null,
                  "start": 184,
                  "end": 186
                },
                "start": 184,
                "end": 188
              },
              "start": 182,
              "end": 188
            },
            "accessibility": null,
            "static": false,
            "start": 177,
            "end": 189
          }
        ],
        "start": 157,
        "end": 191
      },
      "declare": false,
      "start": 144,
      "end": 191
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A4",
        "optional": false,
        "typeAnnotation": null,
        "start": 202,
        "end": 204
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 209,
              "end": 213
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 215,
                "end": 221
              },
              "start": 213,
              "end": 221
            },
            "accessibility": null,
            "static": false,
            "start": 209,
            "end": 222
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 225,
              "end": 229
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
                    "name": "A5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 232,
                    "end": 234
                  },
                  "typeArguments": null,
                  "start": 232,
                  "end": 234
                },
                "start": 232,
                "end": 236
              },
              "start": 230,
              "end": 236
            },
            "accessibility": null,
            "static": false,
            "start": 225,
            "end": 237
          }
        ],
        "start": 205,
        "end": 239
      },
      "declare": false,
      "start": 192,
      "end": 239
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A5",
        "optional": false,
        "typeAnnotation": null,
        "start": 250,
        "end": 252
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 257,
              "end": 261
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 263,
                "end": 269
              },
              "start": 261,
              "end": 269
            },
            "accessibility": null,
            "static": false,
            "start": 257,
            "end": 270
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 273,
              "end": 277
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
                    "name": "A6",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 280,
                    "end": 282
                  },
                  "typeArguments": null,
                  "start": 280,
                  "end": 282
                },
                "start": 280,
                "end": 284
              },
              "start": 278,
              "end": 284
            },
            "accessibility": null,
            "static": false,
            "start": 273,
            "end": 285
          }
        ],
        "start": 253,
        "end": 287
      },
      "declare": false,
      "start": 240,
      "end": 287
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A6",
        "optional": false,
        "typeAnnotation": null,
        "start": 298,
        "end": 300
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 305,
              "end": 309
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 311,
                "end": 317
              },
              "start": 309,
              "end": 317
            },
            "accessibility": null,
            "static": false,
            "start": 305,
            "end": 318
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 321,
              "end": 325
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
                    "name": "A7",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 328,
                    "end": 330
                  },
                  "typeArguments": null,
                  "start": 328,
                  "end": 330
                },
                "start": 328,
                "end": 332
              },
              "start": 326,
              "end": 332
            },
            "accessibility": null,
            "static": false,
            "start": 321,
            "end": 333
          }
        ],
        "start": 301,
        "end": 335
      },
      "declare": false,
      "start": 288,
      "end": 335
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A7",
        "optional": false,
        "typeAnnotation": null,
        "start": 346,
        "end": 348
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 353,
              "end": 357
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 359,
                "end": 365
              },
              "start": 357,
              "end": 365
            },
            "accessibility": null,
            "static": false,
            "start": 353,
            "end": 366
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 369,
              "end": 373
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
                    "name": "A8",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 376,
                    "end": 378
                  },
                  "typeArguments": null,
                  "start": 376,
                  "end": 378
                },
                "start": 376,
                "end": 380
              },
              "start": 374,
              "end": 380
            },
            "accessibility": null,
            "static": false,
            "start": 369,
            "end": 381
          }
        ],
        "start": 349,
        "end": 383
      },
      "declare": false,
      "start": 336,
      "end": 383
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A8",
        "optional": false,
        "typeAnnotation": null,
        "start": 394,
        "end": 396
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 401,
              "end": 405
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 407,
                "end": 413
              },
              "start": 405,
              "end": 413
            },
            "accessibility": null,
            "static": false,
            "start": 401,
            "end": 414
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 417,
              "end": 421
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
                    "name": "A9",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 424,
                    "end": 426
                  },
                  "typeArguments": null,
                  "start": 424,
                  "end": 426
                },
                "start": 424,
                "end": 428
              },
              "start": 422,
              "end": 428
            },
            "accessibility": null,
            "static": false,
            "start": 417,
            "end": 429
          }
        ],
        "start": 397,
        "end": 431
      },
      "declare": false,
      "start": 384,
      "end": 431
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A9",
        "optional": false,
        "typeAnnotation": null,
        "start": 442,
        "end": 444
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 449,
              "end": 453
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 455,
                "end": 461
              },
              "start": 453,
              "end": 461
            },
            "accessibility": null,
            "static": false,
            "start": 449,
            "end": 462
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 465,
              "end": 469
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
                    "name": "A10",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 472,
                    "end": 475
                  },
                  "typeArguments": null,
                  "start": 472,
                  "end": 475
                },
                "start": 472,
                "end": 477
              },
              "start": 470,
              "end": 477
            },
            "accessibility": null,
            "static": false,
            "start": 465,
            "end": 478
          }
        ],
        "start": 445,
        "end": 480
      },
      "declare": false,
      "start": 432,
      "end": 480
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A10",
        "optional": false,
        "typeAnnotation": null,
        "start": 491,
        "end": 494
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 499,
              "end": 503
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 505,
                "end": 511
              },
              "start": 503,
              "end": 511
            },
            "accessibility": null,
            "static": false,
            "start": 499,
            "end": 512
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 515,
              "end": 519
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
                    "name": "A11",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 522,
                    "end": 525
                  },
                  "typeArguments": null,
                  "start": 522,
                  "end": 525
                },
                "start": 522,
                "end": 527
              },
              "start": 520,
              "end": 527
            },
            "accessibility": null,
            "static": false,
            "start": 515,
            "end": 528
          }
        ],
        "start": 495,
        "end": 530
      },
      "declare": false,
      "start": 481,
      "end": 530
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A11",
        "optional": false,
        "typeAnnotation": null,
        "start": 541,
        "end": 544
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 549,
              "end": 553
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 555,
                "end": 561
              },
              "start": 553,
              "end": 561
            },
            "accessibility": null,
            "static": false,
            "start": 549,
            "end": 562
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 565,
              "end": 569
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
                    "name": "A12",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 572,
                    "end": 575
                  },
                  "typeArguments": null,
                  "start": 572,
                  "end": 575
                },
                "start": 572,
                "end": 577
              },
              "start": 570,
              "end": 577
            },
            "accessibility": null,
            "static": false,
            "start": 565,
            "end": 578
          }
        ],
        "start": 545,
        "end": 580
      },
      "declare": false,
      "start": 531,
      "end": 580
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A12",
        "optional": false,
        "typeAnnotation": null,
        "start": 591,
        "end": 594
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 599,
              "end": 603
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 605,
                "end": 611
              },
              "start": 603,
              "end": 611
            },
            "accessibility": null,
            "static": false,
            "start": 599,
            "end": 612
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 615,
              "end": 619
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
                    "name": "A13",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 622,
                    "end": 625
                  },
                  "typeArguments": null,
                  "start": 622,
                  "end": 625
                },
                "start": 622,
                "end": 627
              },
              "start": 620,
              "end": 627
            },
            "accessibility": null,
            "static": false,
            "start": 615,
            "end": 628
          }
        ],
        "start": 595,
        "end": 630
      },
      "declare": false,
      "start": 581,
      "end": 630
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A13",
        "optional": false,
        "typeAnnotation": null,
        "start": 641,
        "end": 644
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 649,
              "end": 653
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 655,
                "end": 661
              },
              "start": 653,
              "end": 661
            },
            "accessibility": null,
            "static": false,
            "start": 649,
            "end": 662
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 665,
              "end": 669
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
                    "name": "A14",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 672,
                    "end": 675
                  },
                  "typeArguments": null,
                  "start": 672,
                  "end": 675
                },
                "start": 672,
                "end": 677
              },
              "start": 670,
              "end": 677
            },
            "accessibility": null,
            "static": false,
            "start": 665,
            "end": 678
          }
        ],
        "start": 645,
        "end": 680
      },
      "declare": false,
      "start": 631,
      "end": 680
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A14",
        "optional": false,
        "typeAnnotation": null,
        "start": 691,
        "end": 694
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 699,
              "end": 703
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 705,
                "end": 711
              },
              "start": 703,
              "end": 711
            },
            "accessibility": null,
            "static": false,
            "start": 699,
            "end": 712
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 715,
              "end": 719
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
                    "name": "A15",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 722,
                    "end": 725
                  },
                  "typeArguments": null,
                  "start": 722,
                  "end": 725
                },
                "start": 722,
                "end": 727
              },
              "start": 720,
              "end": 727
            },
            "accessibility": null,
            "static": false,
            "start": 715,
            "end": 728
          }
        ],
        "start": 695,
        "end": 730
      },
      "declare": false,
      "start": 681,
      "end": 730
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A15",
        "optional": false,
        "typeAnnotation": null,
        "start": 741,
        "end": 744
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 749,
              "end": 753
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 755,
                "end": 761
              },
              "start": 753,
              "end": 761
            },
            "accessibility": null,
            "static": false,
            "start": 749,
            "end": 762
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 765,
              "end": 769
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
                    "name": "A16",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 772,
                    "end": 775
                  },
                  "typeArguments": null,
                  "start": 772,
                  "end": 775
                },
                "start": 772,
                "end": 777
              },
              "start": 770,
              "end": 777
            },
            "accessibility": null,
            "static": false,
            "start": 765,
            "end": 778
          }
        ],
        "start": 745,
        "end": 780
      },
      "declare": false,
      "start": 731,
      "end": 780
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A16",
        "optional": false,
        "typeAnnotation": null,
        "start": 791,
        "end": 794
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 799,
              "end": 803
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 805,
                "end": 811
              },
              "start": 803,
              "end": 811
            },
            "accessibility": null,
            "static": false,
            "start": 799,
            "end": 812
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 815,
              "end": 819
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
                    "name": "A17",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 822,
                    "end": 825
                  },
                  "typeArguments": null,
                  "start": 822,
                  "end": 825
                },
                "start": 822,
                "end": 827
              },
              "start": 820,
              "end": 827
            },
            "accessibility": null,
            "static": false,
            "start": 815,
            "end": 828
          }
        ],
        "start": 795,
        "end": 830
      },
      "declare": false,
      "start": 781,
      "end": 830
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A17",
        "optional": false,
        "typeAnnotation": null,
        "start": 841,
        "end": 844
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 849,
              "end": 853
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 855,
                "end": 861
              },
              "start": 853,
              "end": 861
            },
            "accessibility": null,
            "static": false,
            "start": 849,
            "end": 862
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 865,
              "end": 869
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
                    "name": "A18",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 872,
                    "end": 875
                  },
                  "typeArguments": null,
                  "start": 872,
                  "end": 875
                },
                "start": 872,
                "end": 877
              },
              "start": 870,
              "end": 877
            },
            "accessibility": null,
            "static": false,
            "start": 865,
            "end": 878
          }
        ],
        "start": 845,
        "end": 880
      },
      "declare": false,
      "start": 831,
      "end": 880
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A18",
        "optional": false,
        "typeAnnotation": null,
        "start": 891,
        "end": 894
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 899,
              "end": 903
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 905,
                "end": 911
              },
              "start": 903,
              "end": 911
            },
            "accessibility": null,
            "static": false,
            "start": 899,
            "end": 912
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 915,
              "end": 919
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
                    "name": "A19",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 922,
                    "end": 925
                  },
                  "typeArguments": null,
                  "start": 922,
                  "end": 925
                },
                "start": 922,
                "end": 927
              },
              "start": 920,
              "end": 927
            },
            "accessibility": null,
            "static": false,
            "start": 915,
            "end": 928
          }
        ],
        "start": 895,
        "end": 930
      },
      "declare": false,
      "start": 881,
      "end": 930
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A19",
        "optional": false,
        "typeAnnotation": null,
        "start": 941,
        "end": 944
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 949,
              "end": 953
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 955,
                "end": 961
              },
              "start": 953,
              "end": 961
            },
            "accessibility": null,
            "static": false,
            "start": 949,
            "end": 962
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 965,
              "end": 969
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
                    "name": "A20",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 972,
                    "end": 975
                  },
                  "typeArguments": null,
                  "start": 972,
                  "end": 975
                },
                "start": 972,
                "end": 977
              },
              "start": 970,
              "end": 977
            },
            "accessibility": null,
            "static": false,
            "start": 965,
            "end": 978
          }
        ],
        "start": 945,
        "end": 980
      },
      "declare": false,
      "start": 931,
      "end": 980
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A20",
        "optional": false,
        "typeAnnotation": null,
        "start": 991,
        "end": 994
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 999,
              "end": 1003
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1005,
                "end": 1011
              },
              "start": 1003,
              "end": 1011
            },
            "accessibility": null,
            "static": false,
            "start": 999,
            "end": 1012
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 1015,
              "end": 1019
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
                    "name": "A21",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1022,
                    "end": 1025
                  },
                  "typeArguments": null,
                  "start": 1022,
                  "end": 1025
                },
                "start": 1022,
                "end": 1027
              },
              "start": 1020,
              "end": 1027
            },
            "accessibility": null,
            "static": false,
            "start": 1015,
            "end": 1028
          }
        ],
        "start": 995,
        "end": 1030
      },
      "declare": false,
      "start": 981,
      "end": 1030
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A21",
        "optional": false,
        "typeAnnotation": null,
        "start": 1041,
        "end": 1044
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 1049,
              "end": 1053
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1055,
                "end": 1061
              },
              "start": 1053,
              "end": 1061
            },
            "accessibility": null,
            "static": false,
            "start": 1049,
            "end": 1062
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 1065,
              "end": 1069
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
                    "name": "A22",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1072,
                    "end": 1075
                  },
                  "typeArguments": null,
                  "start": 1072,
                  "end": 1075
                },
                "start": 1072,
                "end": 1077
              },
              "start": 1070,
              "end": 1077
            },
            "accessibility": null,
            "static": false,
            "start": 1065,
            "end": 1078
          }
        ],
        "start": 1045,
        "end": 1080
      },
      "declare": false,
      "start": 1031,
      "end": 1080
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A22",
        "optional": false,
        "typeAnnotation": null,
        "start": 1091,
        "end": 1094
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 1099,
              "end": 1103
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1105,
                "end": 1111
              },
              "start": 1103,
              "end": 1111
            },
            "accessibility": null,
            "static": false,
            "start": 1099,
            "end": 1112
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 1115,
              "end": 1119
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
                    "name": "A23",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1122,
                    "end": 1125
                  },
                  "typeArguments": null,
                  "start": 1122,
                  "end": 1125
                },
                "start": 1122,
                "end": 1127
              },
              "start": 1120,
              "end": 1127
            },
            "accessibility": null,
            "static": false,
            "start": 1115,
            "end": 1128
          }
        ],
        "start": 1095,
        "end": 1130
      },
      "declare": false,
      "start": 1081,
      "end": 1130
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A23",
        "optional": false,
        "typeAnnotation": null,
        "start": 1141,
        "end": 1144
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 1149,
              "end": 1153
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1155,
                "end": 1161
              },
              "start": 1153,
              "end": 1161
            },
            "accessibility": null,
            "static": false,
            "start": 1149,
            "end": 1162
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 1165,
              "end": 1169
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
                    "name": "A24",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1172,
                    "end": 1175
                  },
                  "typeArguments": null,
                  "start": 1172,
                  "end": 1175
                },
                "start": 1172,
                "end": 1177
              },
              "start": 1170,
              "end": 1177
            },
            "accessibility": null,
            "static": false,
            "start": 1165,
            "end": 1178
          }
        ],
        "start": 1145,
        "end": 1180
      },
      "declare": false,
      "start": 1131,
      "end": 1180
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A24",
        "optional": false,
        "typeAnnotation": null,
        "start": 1191,
        "end": 1194
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 1199,
              "end": 1203
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1205,
                "end": 1211
              },
              "start": 1203,
              "end": 1211
            },
            "accessibility": null,
            "static": false,
            "start": 1199,
            "end": 1212
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 1215,
              "end": 1219
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
                    "name": "A25",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1222,
                    "end": 1225
                  },
                  "typeArguments": null,
                  "start": 1222,
                  "end": 1225
                },
                "start": 1222,
                "end": 1227
              },
              "start": 1220,
              "end": 1227
            },
            "accessibility": null,
            "static": false,
            "start": 1215,
            "end": 1228
          }
        ],
        "start": 1195,
        "end": 1230
      },
      "declare": false,
      "start": 1181,
      "end": 1230
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A25",
        "optional": false,
        "typeAnnotation": null,
        "start": 1241,
        "end": 1244
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 1249,
              "end": 1253
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1255,
                "end": 1261
              },
              "start": 1253,
              "end": 1261
            },
            "accessibility": null,
            "static": false,
            "start": 1249,
            "end": 1262
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 1265,
              "end": 1269
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
                    "name": "A26",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1272,
                    "end": 1275
                  },
                  "typeArguments": null,
                  "start": 1272,
                  "end": 1275
                },
                "start": 1272,
                "end": 1277
              },
              "start": 1270,
              "end": 1277
            },
            "accessibility": null,
            "static": false,
            "start": 1265,
            "end": 1278
          }
        ],
        "start": 1245,
        "end": 1280
      },
      "declare": false,
      "start": 1231,
      "end": 1280
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A26",
        "optional": false,
        "typeAnnotation": null,
        "start": 1291,
        "end": 1294
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 1299,
              "end": 1303
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1305,
                "end": 1311
              },
              "start": 1303,
              "end": 1311
            },
            "accessibility": null,
            "static": false,
            "start": 1299,
            "end": 1312
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 1315,
              "end": 1319
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
                    "name": "A27",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1322,
                    "end": 1325
                  },
                  "typeArguments": null,
                  "start": 1322,
                  "end": 1325
                },
                "start": 1322,
                "end": 1327
              },
              "start": 1320,
              "end": 1327
            },
            "accessibility": null,
            "static": false,
            "start": 1315,
            "end": 1328
          }
        ],
        "start": 1295,
        "end": 1330
      },
      "declare": false,
      "start": 1281,
      "end": 1330
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A27",
        "optional": false,
        "typeAnnotation": null,
        "start": 1341,
        "end": 1344
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 1349,
              "end": 1353
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1355,
                "end": 1361
              },
              "start": 1353,
              "end": 1361
            },
            "accessibility": null,
            "static": false,
            "start": 1349,
            "end": 1362
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 1365,
              "end": 1369
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
                    "name": "A28",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1372,
                    "end": 1375
                  },
                  "typeArguments": null,
                  "start": 1372,
                  "end": 1375
                },
                "start": 1372,
                "end": 1377
              },
              "start": 1370,
              "end": 1377
            },
            "accessibility": null,
            "static": false,
            "start": 1365,
            "end": 1378
          }
        ],
        "start": 1345,
        "end": 1380
      },
      "declare": false,
      "start": 1331,
      "end": 1380
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A28",
        "optional": false,
        "typeAnnotation": null,
        "start": 1391,
        "end": 1394
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 1399,
              "end": 1403
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1405,
                "end": 1411
              },
              "start": 1403,
              "end": 1411
            },
            "accessibility": null,
            "static": false,
            "start": 1399,
            "end": 1412
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 1415,
              "end": 1419
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
                    "name": "A29",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1422,
                    "end": 1425
                  },
                  "typeArguments": null,
                  "start": 1422,
                  "end": 1425
                },
                "start": 1422,
                "end": 1427
              },
              "start": 1420,
              "end": 1427
            },
            "accessibility": null,
            "static": false,
            "start": 1415,
            "end": 1428
          }
        ],
        "start": 1395,
        "end": 1430
      },
      "declare": false,
      "start": 1381,
      "end": 1430
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A29",
        "optional": false,
        "typeAnnotation": null,
        "start": 1441,
        "end": 1444
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 1449,
              "end": 1453
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1455,
                "end": 1461
              },
              "start": 1453,
              "end": 1461
            },
            "accessibility": null,
            "static": false,
            "start": 1449,
            "end": 1462
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 1465,
              "end": 1469
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
                    "name": "A30",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1472,
                    "end": 1475
                  },
                  "typeArguments": null,
                  "start": 1472,
                  "end": 1475
                },
                "start": 1472,
                "end": 1477
              },
              "start": 1470,
              "end": 1477
            },
            "accessibility": null,
            "static": false,
            "start": 1465,
            "end": 1478
          }
        ],
        "start": 1445,
        "end": 1480
      },
      "declare": false,
      "start": 1431,
      "end": 1480
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A30",
        "optional": false,
        "typeAnnotation": null,
        "start": 1491,
        "end": 1494
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 1499,
              "end": 1503
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1505,
                "end": 1511
              },
              "start": 1503,
              "end": 1511
            },
            "accessibility": null,
            "static": false,
            "start": 1499,
            "end": 1512
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 1515,
              "end": 1519
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
                    "name": "A31",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1522,
                    "end": 1525
                  },
                  "typeArguments": null,
                  "start": 1522,
                  "end": 1525
                },
                "start": 1522,
                "end": 1527
              },
              "start": 1520,
              "end": 1527
            },
            "accessibility": null,
            "static": false,
            "start": 1515,
            "end": 1528
          }
        ],
        "start": 1495,
        "end": 1530
      },
      "declare": false,
      "start": 1481,
      "end": 1530
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A31",
        "optional": false,
        "typeAnnotation": null,
        "start": 1541,
        "end": 1544
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 1549,
              "end": 1553
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1555,
                "end": 1561
              },
              "start": 1553,
              "end": 1561
            },
            "accessibility": null,
            "static": false,
            "start": 1549,
            "end": 1562
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 1565,
              "end": 1569
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
                    "name": "A32",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1572,
                    "end": 1575
                  },
                  "typeArguments": null,
                  "start": 1572,
                  "end": 1575
                },
                "start": 1572,
                "end": 1577
              },
              "start": 1570,
              "end": 1577
            },
            "accessibility": null,
            "static": false,
            "start": 1565,
            "end": 1578
          }
        ],
        "start": 1545,
        "end": 1580
      },
      "declare": false,
      "start": 1531,
      "end": 1580
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A32",
        "optional": false,
        "typeAnnotation": null,
        "start": 1591,
        "end": 1594
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 1599,
              "end": 1603
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1605,
                "end": 1611
              },
              "start": 1603,
              "end": 1611
            },
            "accessibility": null,
            "static": false,
            "start": 1599,
            "end": 1612
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 1615,
              "end": 1619
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
                    "name": "A33",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1622,
                    "end": 1625
                  },
                  "typeArguments": null,
                  "start": 1622,
                  "end": 1625
                },
                "start": 1622,
                "end": 1627
              },
              "start": 1620,
              "end": 1627
            },
            "accessibility": null,
            "static": false,
            "start": 1615,
            "end": 1628
          }
        ],
        "start": 1595,
        "end": 1630
      },
      "declare": false,
      "start": 1581,
      "end": 1630
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A33",
        "optional": false,
        "typeAnnotation": null,
        "start": 1641,
        "end": 1644
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 1649,
              "end": 1653
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1655,
                "end": 1661
              },
              "start": 1653,
              "end": 1661
            },
            "accessibility": null,
            "static": false,
            "start": 1649,
            "end": 1662
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 1665,
              "end": 1669
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
                    "name": "A34",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1672,
                    "end": 1675
                  },
                  "typeArguments": null,
                  "start": 1672,
                  "end": 1675
                },
                "start": 1672,
                "end": 1677
              },
              "start": 1670,
              "end": 1677
            },
            "accessibility": null,
            "static": false,
            "start": 1665,
            "end": 1678
          }
        ],
        "start": 1645,
        "end": 1680
      },
      "declare": false,
      "start": 1631,
      "end": 1680
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A34",
        "optional": false,
        "typeAnnotation": null,
        "start": 1691,
        "end": 1694
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 1699,
              "end": 1703
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1705,
                "end": 1711
              },
              "start": 1703,
              "end": 1711
            },
            "accessibility": null,
            "static": false,
            "start": 1699,
            "end": 1712
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 1715,
              "end": 1719
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
                    "name": "A35",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1722,
                    "end": 1725
                  },
                  "typeArguments": null,
                  "start": 1722,
                  "end": 1725
                },
                "start": 1722,
                "end": 1727
              },
              "start": 1720,
              "end": 1727
            },
            "accessibility": null,
            "static": false,
            "start": 1715,
            "end": 1728
          }
        ],
        "start": 1695,
        "end": 1730
      },
      "declare": false,
      "start": 1681,
      "end": 1730
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A35",
        "optional": false,
        "typeAnnotation": null,
        "start": 1741,
        "end": 1744
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 1749,
              "end": 1753
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1755,
                "end": 1761
              },
              "start": 1753,
              "end": 1761
            },
            "accessibility": null,
            "static": false,
            "start": 1749,
            "end": 1762
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 1765,
              "end": 1769
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
                    "name": "A36",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1772,
                    "end": 1775
                  },
                  "typeArguments": null,
                  "start": 1772,
                  "end": 1775
                },
                "start": 1772,
                "end": 1777
              },
              "start": 1770,
              "end": 1777
            },
            "accessibility": null,
            "static": false,
            "start": 1765,
            "end": 1778
          }
        ],
        "start": 1745,
        "end": 1780
      },
      "declare": false,
      "start": 1731,
      "end": 1780
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A36",
        "optional": false,
        "typeAnnotation": null,
        "start": 1791,
        "end": 1794
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 1799,
              "end": 1803
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1805,
                "end": 1811
              },
              "start": 1803,
              "end": 1811
            },
            "accessibility": null,
            "static": false,
            "start": 1799,
            "end": 1812
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 1815,
              "end": 1819
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
                    "name": "A37",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1822,
                    "end": 1825
                  },
                  "typeArguments": null,
                  "start": 1822,
                  "end": 1825
                },
                "start": 1822,
                "end": 1827
              },
              "start": 1820,
              "end": 1827
            },
            "accessibility": null,
            "static": false,
            "start": 1815,
            "end": 1828
          }
        ],
        "start": 1795,
        "end": 1830
      },
      "declare": false,
      "start": 1781,
      "end": 1830
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A37",
        "optional": false,
        "typeAnnotation": null,
        "start": 1841,
        "end": 1844
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 1849,
              "end": 1853
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1855,
                "end": 1861
              },
              "start": 1853,
              "end": 1861
            },
            "accessibility": null,
            "static": false,
            "start": 1849,
            "end": 1862
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 1865,
              "end": 1869
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
                    "name": "A38",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1872,
                    "end": 1875
                  },
                  "typeArguments": null,
                  "start": 1872,
                  "end": 1875
                },
                "start": 1872,
                "end": 1877
              },
              "start": 1870,
              "end": 1877
            },
            "accessibility": null,
            "static": false,
            "start": 1865,
            "end": 1878
          }
        ],
        "start": 1845,
        "end": 1880
      },
      "declare": false,
      "start": 1831,
      "end": 1880
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A38",
        "optional": false,
        "typeAnnotation": null,
        "start": 1891,
        "end": 1894
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 1899,
              "end": 1903
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1905,
                "end": 1911
              },
              "start": 1903,
              "end": 1911
            },
            "accessibility": null,
            "static": false,
            "start": 1899,
            "end": 1912
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 1915,
              "end": 1919
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
                    "name": "A39",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1922,
                    "end": 1925
                  },
                  "typeArguments": null,
                  "start": 1922,
                  "end": 1925
                },
                "start": 1922,
                "end": 1927
              },
              "start": 1920,
              "end": 1927
            },
            "accessibility": null,
            "static": false,
            "start": 1915,
            "end": 1928
          }
        ],
        "start": 1895,
        "end": 1930
      },
      "declare": false,
      "start": 1881,
      "end": 1930
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A39",
        "optional": false,
        "typeAnnotation": null,
        "start": 1941,
        "end": 1944
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 1949,
              "end": 1953
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1955,
                "end": 1961
              },
              "start": 1953,
              "end": 1961
            },
            "accessibility": null,
            "static": false,
            "start": 1949,
            "end": 1962
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 1965,
              "end": 1969
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
                    "name": "A0",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1972,
                    "end": 1974
                  },
                  "typeArguments": null,
                  "start": 1972,
                  "end": 1974
                },
                "start": 1972,
                "end": 1976
              },
              "start": 1970,
              "end": 1976
            },
            "accessibility": null,
            "static": false,
            "start": 1965,
            "end": 1977
          }
        ],
        "start": 1945,
        "end": 1979
      },
      "declare": false,
      "start": 1931,
      "end": 1979
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B0",
        "optional": false,
        "typeAnnotation": null,
        "start": 1990,
        "end": 1992
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 1997,
              "end": 2001
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2003,
                "end": 2009
              },
              "start": 2001,
              "end": 2009
            },
            "accessibility": null,
            "static": false,
            "start": 1997,
            "end": 2010
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 2013,
              "end": 2017
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
                    "name": "B1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2020,
                    "end": 2022
                  },
                  "typeArguments": null,
                  "start": 2020,
                  "end": 2022
                },
                "start": 2020,
                "end": 2024
              },
              "start": 2018,
              "end": 2024
            },
            "accessibility": null,
            "static": false,
            "start": 2013,
            "end": 2025
          }
        ],
        "start": 1993,
        "end": 2027
      },
      "declare": false,
      "start": 1980,
      "end": 2027
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B1",
        "optional": false,
        "typeAnnotation": null,
        "start": 2038,
        "end": 2040
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 2045,
              "end": 2049
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2051,
                "end": 2057
              },
              "start": 2049,
              "end": 2057
            },
            "accessibility": null,
            "static": false,
            "start": 2045,
            "end": 2058
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 2061,
              "end": 2065
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
                    "name": "B2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2068,
                    "end": 2070
                  },
                  "typeArguments": null,
                  "start": 2068,
                  "end": 2070
                },
                "start": 2068,
                "end": 2072
              },
              "start": 2066,
              "end": 2072
            },
            "accessibility": null,
            "static": false,
            "start": 2061,
            "end": 2073
          }
        ],
        "start": 2041,
        "end": 2075
      },
      "declare": false,
      "start": 2028,
      "end": 2075
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2086,
        "end": 2088
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 2093,
              "end": 2097
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2099,
                "end": 2105
              },
              "start": 2097,
              "end": 2105
            },
            "accessibility": null,
            "static": false,
            "start": 2093,
            "end": 2106
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 2109,
              "end": 2113
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
                    "name": "B3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2116,
                    "end": 2118
                  },
                  "typeArguments": null,
                  "start": 2116,
                  "end": 2118
                },
                "start": 2116,
                "end": 2120
              },
              "start": 2114,
              "end": 2120
            },
            "accessibility": null,
            "static": false,
            "start": 2109,
            "end": 2121
          }
        ],
        "start": 2089,
        "end": 2123
      },
      "declare": false,
      "start": 2076,
      "end": 2123
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B3",
        "optional": false,
        "typeAnnotation": null,
        "start": 2134,
        "end": 2136
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 2141,
              "end": 2145
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2147,
                "end": 2153
              },
              "start": 2145,
              "end": 2153
            },
            "accessibility": null,
            "static": false,
            "start": 2141,
            "end": 2154
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 2157,
              "end": 2161
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
                    "name": "B4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2164,
                    "end": 2166
                  },
                  "typeArguments": null,
                  "start": 2164,
                  "end": 2166
                },
                "start": 2164,
                "end": 2168
              },
              "start": 2162,
              "end": 2168
            },
            "accessibility": null,
            "static": false,
            "start": 2157,
            "end": 2169
          }
        ],
        "start": 2137,
        "end": 2171
      },
      "declare": false,
      "start": 2124,
      "end": 2171
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B4",
        "optional": false,
        "typeAnnotation": null,
        "start": 2182,
        "end": 2184
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 2189,
              "end": 2193
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2195,
                "end": 2201
              },
              "start": 2193,
              "end": 2201
            },
            "accessibility": null,
            "static": false,
            "start": 2189,
            "end": 2202
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 2205,
              "end": 2209
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
                    "name": "B5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2212,
                    "end": 2214
                  },
                  "typeArguments": null,
                  "start": 2212,
                  "end": 2214
                },
                "start": 2212,
                "end": 2216
              },
              "start": 2210,
              "end": 2216
            },
            "accessibility": null,
            "static": false,
            "start": 2205,
            "end": 2217
          }
        ],
        "start": 2185,
        "end": 2219
      },
      "declare": false,
      "start": 2172,
      "end": 2219
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B5",
        "optional": false,
        "typeAnnotation": null,
        "start": 2230,
        "end": 2232
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 2237,
              "end": 2241
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2243,
                "end": 2249
              },
              "start": 2241,
              "end": 2249
            },
            "accessibility": null,
            "static": false,
            "start": 2237,
            "end": 2250
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 2253,
              "end": 2257
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
                    "name": "B6",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2260,
                    "end": 2262
                  },
                  "typeArguments": null,
                  "start": 2260,
                  "end": 2262
                },
                "start": 2260,
                "end": 2264
              },
              "start": 2258,
              "end": 2264
            },
            "accessibility": null,
            "static": false,
            "start": 2253,
            "end": 2265
          }
        ],
        "start": 2233,
        "end": 2267
      },
      "declare": false,
      "start": 2220,
      "end": 2267
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B6",
        "optional": false,
        "typeAnnotation": null,
        "start": 2278,
        "end": 2280
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 2285,
              "end": 2289
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2291,
                "end": 2297
              },
              "start": 2289,
              "end": 2297
            },
            "accessibility": null,
            "static": false,
            "start": 2285,
            "end": 2298
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 2301,
              "end": 2305
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
                    "name": "B7",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2308,
                    "end": 2310
                  },
                  "typeArguments": null,
                  "start": 2308,
                  "end": 2310
                },
                "start": 2308,
                "end": 2312
              },
              "start": 2306,
              "end": 2312
            },
            "accessibility": null,
            "static": false,
            "start": 2301,
            "end": 2313
          }
        ],
        "start": 2281,
        "end": 2315
      },
      "declare": false,
      "start": 2268,
      "end": 2315
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B7",
        "optional": false,
        "typeAnnotation": null,
        "start": 2326,
        "end": 2328
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 2333,
              "end": 2337
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2339,
                "end": 2345
              },
              "start": 2337,
              "end": 2345
            },
            "accessibility": null,
            "static": false,
            "start": 2333,
            "end": 2346
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 2349,
              "end": 2353
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
                    "name": "B8",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2356,
                    "end": 2358
                  },
                  "typeArguments": null,
                  "start": 2356,
                  "end": 2358
                },
                "start": 2356,
                "end": 2360
              },
              "start": 2354,
              "end": 2360
            },
            "accessibility": null,
            "static": false,
            "start": 2349,
            "end": 2361
          }
        ],
        "start": 2329,
        "end": 2363
      },
      "declare": false,
      "start": 2316,
      "end": 2363
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B8",
        "optional": false,
        "typeAnnotation": null,
        "start": 2374,
        "end": 2376
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 2381,
              "end": 2385
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2387,
                "end": 2393
              },
              "start": 2385,
              "end": 2393
            },
            "accessibility": null,
            "static": false,
            "start": 2381,
            "end": 2394
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 2397,
              "end": 2401
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
                    "name": "B9",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2404,
                    "end": 2406
                  },
                  "typeArguments": null,
                  "start": 2404,
                  "end": 2406
                },
                "start": 2404,
                "end": 2408
              },
              "start": 2402,
              "end": 2408
            },
            "accessibility": null,
            "static": false,
            "start": 2397,
            "end": 2409
          }
        ],
        "start": 2377,
        "end": 2411
      },
      "declare": false,
      "start": 2364,
      "end": 2411
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B9",
        "optional": false,
        "typeAnnotation": null,
        "start": 2422,
        "end": 2424
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 2429,
              "end": 2433
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2435,
                "end": 2441
              },
              "start": 2433,
              "end": 2441
            },
            "accessibility": null,
            "static": false,
            "start": 2429,
            "end": 2442
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 2445,
              "end": 2449
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
                    "name": "B10",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2452,
                    "end": 2455
                  },
                  "typeArguments": null,
                  "start": 2452,
                  "end": 2455
                },
                "start": 2452,
                "end": 2457
              },
              "start": 2450,
              "end": 2457
            },
            "accessibility": null,
            "static": false,
            "start": 2445,
            "end": 2458
          }
        ],
        "start": 2425,
        "end": 2460
      },
      "declare": false,
      "start": 2412,
      "end": 2460
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B10",
        "optional": false,
        "typeAnnotation": null,
        "start": 2471,
        "end": 2474
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 2479,
              "end": 2483
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2485,
                "end": 2491
              },
              "start": 2483,
              "end": 2491
            },
            "accessibility": null,
            "static": false,
            "start": 2479,
            "end": 2492
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 2495,
              "end": 2499
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
                    "name": "B11",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2502,
                    "end": 2505
                  },
                  "typeArguments": null,
                  "start": 2502,
                  "end": 2505
                },
                "start": 2502,
                "end": 2507
              },
              "start": 2500,
              "end": 2507
            },
            "accessibility": null,
            "static": false,
            "start": 2495,
            "end": 2508
          }
        ],
        "start": 2475,
        "end": 2510
      },
      "declare": false,
      "start": 2461,
      "end": 2510
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B11",
        "optional": false,
        "typeAnnotation": null,
        "start": 2521,
        "end": 2524
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 2529,
              "end": 2533
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2535,
                "end": 2541
              },
              "start": 2533,
              "end": 2541
            },
            "accessibility": null,
            "static": false,
            "start": 2529,
            "end": 2542
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 2545,
              "end": 2549
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
                    "name": "B12",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2552,
                    "end": 2555
                  },
                  "typeArguments": null,
                  "start": 2552,
                  "end": 2555
                },
                "start": 2552,
                "end": 2557
              },
              "start": 2550,
              "end": 2557
            },
            "accessibility": null,
            "static": false,
            "start": 2545,
            "end": 2558
          }
        ],
        "start": 2525,
        "end": 2560
      },
      "declare": false,
      "start": 2511,
      "end": 2560
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B12",
        "optional": false,
        "typeAnnotation": null,
        "start": 2571,
        "end": 2574
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 2579,
              "end": 2583
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2585,
                "end": 2591
              },
              "start": 2583,
              "end": 2591
            },
            "accessibility": null,
            "static": false,
            "start": 2579,
            "end": 2592
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 2595,
              "end": 2599
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
                    "name": "B13",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2602,
                    "end": 2605
                  },
                  "typeArguments": null,
                  "start": 2602,
                  "end": 2605
                },
                "start": 2602,
                "end": 2607
              },
              "start": 2600,
              "end": 2607
            },
            "accessibility": null,
            "static": false,
            "start": 2595,
            "end": 2608
          }
        ],
        "start": 2575,
        "end": 2610
      },
      "declare": false,
      "start": 2561,
      "end": 2610
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B13",
        "optional": false,
        "typeAnnotation": null,
        "start": 2621,
        "end": 2624
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 2629,
              "end": 2633
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2635,
                "end": 2641
              },
              "start": 2633,
              "end": 2641
            },
            "accessibility": null,
            "static": false,
            "start": 2629,
            "end": 2642
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 2645,
              "end": 2649
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
                    "name": "B14",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2652,
                    "end": 2655
                  },
                  "typeArguments": null,
                  "start": 2652,
                  "end": 2655
                },
                "start": 2652,
                "end": 2657
              },
              "start": 2650,
              "end": 2657
            },
            "accessibility": null,
            "static": false,
            "start": 2645,
            "end": 2658
          }
        ],
        "start": 2625,
        "end": 2660
      },
      "declare": false,
      "start": 2611,
      "end": 2660
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B14",
        "optional": false,
        "typeAnnotation": null,
        "start": 2671,
        "end": 2674
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 2679,
              "end": 2683
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2685,
                "end": 2691
              },
              "start": 2683,
              "end": 2691
            },
            "accessibility": null,
            "static": false,
            "start": 2679,
            "end": 2692
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 2695,
              "end": 2699
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
                    "name": "B15",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2702,
                    "end": 2705
                  },
                  "typeArguments": null,
                  "start": 2702,
                  "end": 2705
                },
                "start": 2702,
                "end": 2707
              },
              "start": 2700,
              "end": 2707
            },
            "accessibility": null,
            "static": false,
            "start": 2695,
            "end": 2708
          }
        ],
        "start": 2675,
        "end": 2710
      },
      "declare": false,
      "start": 2661,
      "end": 2710
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B15",
        "optional": false,
        "typeAnnotation": null,
        "start": 2721,
        "end": 2724
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 2729,
              "end": 2733
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2735,
                "end": 2741
              },
              "start": 2733,
              "end": 2741
            },
            "accessibility": null,
            "static": false,
            "start": 2729,
            "end": 2742
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 2745,
              "end": 2749
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
                    "name": "B16",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2752,
                    "end": 2755
                  },
                  "typeArguments": null,
                  "start": 2752,
                  "end": 2755
                },
                "start": 2752,
                "end": 2757
              },
              "start": 2750,
              "end": 2757
            },
            "accessibility": null,
            "static": false,
            "start": 2745,
            "end": 2758
          }
        ],
        "start": 2725,
        "end": 2760
      },
      "declare": false,
      "start": 2711,
      "end": 2760
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B16",
        "optional": false,
        "typeAnnotation": null,
        "start": 2771,
        "end": 2774
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 2779,
              "end": 2783
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2785,
                "end": 2791
              },
              "start": 2783,
              "end": 2791
            },
            "accessibility": null,
            "static": false,
            "start": 2779,
            "end": 2792
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 2795,
              "end": 2799
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
                    "name": "B17",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2802,
                    "end": 2805
                  },
                  "typeArguments": null,
                  "start": 2802,
                  "end": 2805
                },
                "start": 2802,
                "end": 2807
              },
              "start": 2800,
              "end": 2807
            },
            "accessibility": null,
            "static": false,
            "start": 2795,
            "end": 2808
          }
        ],
        "start": 2775,
        "end": 2810
      },
      "declare": false,
      "start": 2761,
      "end": 2810
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B17",
        "optional": false,
        "typeAnnotation": null,
        "start": 2821,
        "end": 2824
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 2829,
              "end": 2833
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2835,
                "end": 2841
              },
              "start": 2833,
              "end": 2841
            },
            "accessibility": null,
            "static": false,
            "start": 2829,
            "end": 2842
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 2845,
              "end": 2849
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
                    "name": "B18",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2852,
                    "end": 2855
                  },
                  "typeArguments": null,
                  "start": 2852,
                  "end": 2855
                },
                "start": 2852,
                "end": 2857
              },
              "start": 2850,
              "end": 2857
            },
            "accessibility": null,
            "static": false,
            "start": 2845,
            "end": 2858
          }
        ],
        "start": 2825,
        "end": 2860
      },
      "declare": false,
      "start": 2811,
      "end": 2860
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B18",
        "optional": false,
        "typeAnnotation": null,
        "start": 2871,
        "end": 2874
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 2879,
              "end": 2883
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2885,
                "end": 2891
              },
              "start": 2883,
              "end": 2891
            },
            "accessibility": null,
            "static": false,
            "start": 2879,
            "end": 2892
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 2895,
              "end": 2899
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
                    "name": "B19",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2902,
                    "end": 2905
                  },
                  "typeArguments": null,
                  "start": 2902,
                  "end": 2905
                },
                "start": 2902,
                "end": 2907
              },
              "start": 2900,
              "end": 2907
            },
            "accessibility": null,
            "static": false,
            "start": 2895,
            "end": 2908
          }
        ],
        "start": 2875,
        "end": 2910
      },
      "declare": false,
      "start": 2861,
      "end": 2910
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B19",
        "optional": false,
        "typeAnnotation": null,
        "start": 2921,
        "end": 2924
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 2929,
              "end": 2933
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2935,
                "end": 2941
              },
              "start": 2933,
              "end": 2941
            },
            "accessibility": null,
            "static": false,
            "start": 2929,
            "end": 2942
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 2945,
              "end": 2949
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
                    "name": "B20",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2952,
                    "end": 2955
                  },
                  "typeArguments": null,
                  "start": 2952,
                  "end": 2955
                },
                "start": 2952,
                "end": 2957
              },
              "start": 2950,
              "end": 2957
            },
            "accessibility": null,
            "static": false,
            "start": 2945,
            "end": 2958
          }
        ],
        "start": 2925,
        "end": 2960
      },
      "declare": false,
      "start": 2911,
      "end": 2960
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B20",
        "optional": false,
        "typeAnnotation": null,
        "start": 2971,
        "end": 2974
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 2979,
              "end": 2983
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2985,
                "end": 2991
              },
              "start": 2983,
              "end": 2991
            },
            "accessibility": null,
            "static": false,
            "start": 2979,
            "end": 2992
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 2995,
              "end": 2999
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
                    "name": "B21",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3002,
                    "end": 3005
                  },
                  "typeArguments": null,
                  "start": 3002,
                  "end": 3005
                },
                "start": 3002,
                "end": 3007
              },
              "start": 3000,
              "end": 3007
            },
            "accessibility": null,
            "static": false,
            "start": 2995,
            "end": 3008
          }
        ],
        "start": 2975,
        "end": 3010
      },
      "declare": false,
      "start": 2961,
      "end": 3010
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B21",
        "optional": false,
        "typeAnnotation": null,
        "start": 3021,
        "end": 3024
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 3029,
              "end": 3033
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 3035,
                "end": 3041
              },
              "start": 3033,
              "end": 3041
            },
            "accessibility": null,
            "static": false,
            "start": 3029,
            "end": 3042
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 3045,
              "end": 3049
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
                    "name": "B22",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3052,
                    "end": 3055
                  },
                  "typeArguments": null,
                  "start": 3052,
                  "end": 3055
                },
                "start": 3052,
                "end": 3057
              },
              "start": 3050,
              "end": 3057
            },
            "accessibility": null,
            "static": false,
            "start": 3045,
            "end": 3058
          }
        ],
        "start": 3025,
        "end": 3060
      },
      "declare": false,
      "start": 3011,
      "end": 3060
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B22",
        "optional": false,
        "typeAnnotation": null,
        "start": 3071,
        "end": 3074
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 3079,
              "end": 3083
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 3085,
                "end": 3091
              },
              "start": 3083,
              "end": 3091
            },
            "accessibility": null,
            "static": false,
            "start": 3079,
            "end": 3092
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 3095,
              "end": 3099
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
                    "name": "B23",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3102,
                    "end": 3105
                  },
                  "typeArguments": null,
                  "start": 3102,
                  "end": 3105
                },
                "start": 3102,
                "end": 3107
              },
              "start": 3100,
              "end": 3107
            },
            "accessibility": null,
            "static": false,
            "start": 3095,
            "end": 3108
          }
        ],
        "start": 3075,
        "end": 3110
      },
      "declare": false,
      "start": 3061,
      "end": 3110
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B23",
        "optional": false,
        "typeAnnotation": null,
        "start": 3121,
        "end": 3124
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 3129,
              "end": 3133
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 3135,
                "end": 3141
              },
              "start": 3133,
              "end": 3141
            },
            "accessibility": null,
            "static": false,
            "start": 3129,
            "end": 3142
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 3145,
              "end": 3149
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
                    "name": "B24",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3152,
                    "end": 3155
                  },
                  "typeArguments": null,
                  "start": 3152,
                  "end": 3155
                },
                "start": 3152,
                "end": 3157
              },
              "start": 3150,
              "end": 3157
            },
            "accessibility": null,
            "static": false,
            "start": 3145,
            "end": 3158
          }
        ],
        "start": 3125,
        "end": 3160
      },
      "declare": false,
      "start": 3111,
      "end": 3160
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B24",
        "optional": false,
        "typeAnnotation": null,
        "start": 3171,
        "end": 3174
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 3179,
              "end": 3183
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 3185,
                "end": 3191
              },
              "start": 3183,
              "end": 3191
            },
            "accessibility": null,
            "static": false,
            "start": 3179,
            "end": 3192
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 3195,
              "end": 3199
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
                    "name": "B25",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3202,
                    "end": 3205
                  },
                  "typeArguments": null,
                  "start": 3202,
                  "end": 3205
                },
                "start": 3202,
                "end": 3207
              },
              "start": 3200,
              "end": 3207
            },
            "accessibility": null,
            "static": false,
            "start": 3195,
            "end": 3208
          }
        ],
        "start": 3175,
        "end": 3210
      },
      "declare": false,
      "start": 3161,
      "end": 3210
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B25",
        "optional": false,
        "typeAnnotation": null,
        "start": 3221,
        "end": 3224
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 3229,
              "end": 3233
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 3235,
                "end": 3241
              },
              "start": 3233,
              "end": 3241
            },
            "accessibility": null,
            "static": false,
            "start": 3229,
            "end": 3242
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 3245,
              "end": 3249
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
                    "name": "B26",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3252,
                    "end": 3255
                  },
                  "typeArguments": null,
                  "start": 3252,
                  "end": 3255
                },
                "start": 3252,
                "end": 3257
              },
              "start": 3250,
              "end": 3257
            },
            "accessibility": null,
            "static": false,
            "start": 3245,
            "end": 3258
          }
        ],
        "start": 3225,
        "end": 3260
      },
      "declare": false,
      "start": 3211,
      "end": 3260
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B26",
        "optional": false,
        "typeAnnotation": null,
        "start": 3271,
        "end": 3274
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 3279,
              "end": 3283
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 3285,
                "end": 3291
              },
              "start": 3283,
              "end": 3291
            },
            "accessibility": null,
            "static": false,
            "start": 3279,
            "end": 3292
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 3295,
              "end": 3299
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
                    "name": "B27",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3302,
                    "end": 3305
                  },
                  "typeArguments": null,
                  "start": 3302,
                  "end": 3305
                },
                "start": 3302,
                "end": 3307
              },
              "start": 3300,
              "end": 3307
            },
            "accessibility": null,
            "static": false,
            "start": 3295,
            "end": 3308
          }
        ],
        "start": 3275,
        "end": 3310
      },
      "declare": false,
      "start": 3261,
      "end": 3310
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B27",
        "optional": false,
        "typeAnnotation": null,
        "start": 3321,
        "end": 3324
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 3329,
              "end": 3333
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 3335,
                "end": 3341
              },
              "start": 3333,
              "end": 3341
            },
            "accessibility": null,
            "static": false,
            "start": 3329,
            "end": 3342
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 3345,
              "end": 3349
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
                    "name": "B28",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3352,
                    "end": 3355
                  },
                  "typeArguments": null,
                  "start": 3352,
                  "end": 3355
                },
                "start": 3352,
                "end": 3357
              },
              "start": 3350,
              "end": 3357
            },
            "accessibility": null,
            "static": false,
            "start": 3345,
            "end": 3358
          }
        ],
        "start": 3325,
        "end": 3360
      },
      "declare": false,
      "start": 3311,
      "end": 3360
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B28",
        "optional": false,
        "typeAnnotation": null,
        "start": 3371,
        "end": 3374
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 3379,
              "end": 3383
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 3385,
                "end": 3391
              },
              "start": 3383,
              "end": 3391
            },
            "accessibility": null,
            "static": false,
            "start": 3379,
            "end": 3392
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 3395,
              "end": 3399
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
                    "name": "B29",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3402,
                    "end": 3405
                  },
                  "typeArguments": null,
                  "start": 3402,
                  "end": 3405
                },
                "start": 3402,
                "end": 3407
              },
              "start": 3400,
              "end": 3407
            },
            "accessibility": null,
            "static": false,
            "start": 3395,
            "end": 3408
          }
        ],
        "start": 3375,
        "end": 3410
      },
      "declare": false,
      "start": 3361,
      "end": 3410
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B29",
        "optional": false,
        "typeAnnotation": null,
        "start": 3421,
        "end": 3424
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 3429,
              "end": 3433
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 3435,
                "end": 3441
              },
              "start": 3433,
              "end": 3441
            },
            "accessibility": null,
            "static": false,
            "start": 3429,
            "end": 3442
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 3445,
              "end": 3449
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
                    "name": "B30",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3452,
                    "end": 3455
                  },
                  "typeArguments": null,
                  "start": 3452,
                  "end": 3455
                },
                "start": 3452,
                "end": 3457
              },
              "start": 3450,
              "end": 3457
            },
            "accessibility": null,
            "static": false,
            "start": 3445,
            "end": 3458
          }
        ],
        "start": 3425,
        "end": 3460
      },
      "declare": false,
      "start": 3411,
      "end": 3460
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B30",
        "optional": false,
        "typeAnnotation": null,
        "start": 3471,
        "end": 3474
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 3479,
              "end": 3483
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 3485,
                "end": 3491
              },
              "start": 3483,
              "end": 3491
            },
            "accessibility": null,
            "static": false,
            "start": 3479,
            "end": 3492
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 3495,
              "end": 3499
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
                    "name": "B31",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3502,
                    "end": 3505
                  },
                  "typeArguments": null,
                  "start": 3502,
                  "end": 3505
                },
                "start": 3502,
                "end": 3507
              },
              "start": 3500,
              "end": 3507
            },
            "accessibility": null,
            "static": false,
            "start": 3495,
            "end": 3508
          }
        ],
        "start": 3475,
        "end": 3510
      },
      "declare": false,
      "start": 3461,
      "end": 3510
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B31",
        "optional": false,
        "typeAnnotation": null,
        "start": 3521,
        "end": 3524
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 3529,
              "end": 3533
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 3535,
                "end": 3541
              },
              "start": 3533,
              "end": 3541
            },
            "accessibility": null,
            "static": false,
            "start": 3529,
            "end": 3542
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 3545,
              "end": 3549
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
                    "name": "B32",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3552,
                    "end": 3555
                  },
                  "typeArguments": null,
                  "start": 3552,
                  "end": 3555
                },
                "start": 3552,
                "end": 3557
              },
              "start": 3550,
              "end": 3557
            },
            "accessibility": null,
            "static": false,
            "start": 3545,
            "end": 3558
          }
        ],
        "start": 3525,
        "end": 3560
      },
      "declare": false,
      "start": 3511,
      "end": 3560
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B32",
        "optional": false,
        "typeAnnotation": null,
        "start": 3571,
        "end": 3574
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 3579,
              "end": 3583
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 3585,
                "end": 3591
              },
              "start": 3583,
              "end": 3591
            },
            "accessibility": null,
            "static": false,
            "start": 3579,
            "end": 3592
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 3595,
              "end": 3599
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
                    "name": "B33",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3602,
                    "end": 3605
                  },
                  "typeArguments": null,
                  "start": 3602,
                  "end": 3605
                },
                "start": 3602,
                "end": 3607
              },
              "start": 3600,
              "end": 3607
            },
            "accessibility": null,
            "static": false,
            "start": 3595,
            "end": 3608
          }
        ],
        "start": 3575,
        "end": 3610
      },
      "declare": false,
      "start": 3561,
      "end": 3610
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B33",
        "optional": false,
        "typeAnnotation": null,
        "start": 3621,
        "end": 3624
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 3629,
              "end": 3633
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 3635,
                "end": 3641
              },
              "start": 3633,
              "end": 3641
            },
            "accessibility": null,
            "static": false,
            "start": 3629,
            "end": 3642
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 3645,
              "end": 3649
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
                    "name": "B34",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3652,
                    "end": 3655
                  },
                  "typeArguments": null,
                  "start": 3652,
                  "end": 3655
                },
                "start": 3652,
                "end": 3657
              },
              "start": 3650,
              "end": 3657
            },
            "accessibility": null,
            "static": false,
            "start": 3645,
            "end": 3658
          }
        ],
        "start": 3625,
        "end": 3660
      },
      "declare": false,
      "start": 3611,
      "end": 3660
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B34",
        "optional": false,
        "typeAnnotation": null,
        "start": 3671,
        "end": 3674
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 3679,
              "end": 3683
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 3685,
                "end": 3691
              },
              "start": 3683,
              "end": 3691
            },
            "accessibility": null,
            "static": false,
            "start": 3679,
            "end": 3692
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 3695,
              "end": 3699
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
                    "name": "B35",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3702,
                    "end": 3705
                  },
                  "typeArguments": null,
                  "start": 3702,
                  "end": 3705
                },
                "start": 3702,
                "end": 3707
              },
              "start": 3700,
              "end": 3707
            },
            "accessibility": null,
            "static": false,
            "start": 3695,
            "end": 3708
          }
        ],
        "start": 3675,
        "end": 3710
      },
      "declare": false,
      "start": 3661,
      "end": 3710
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B35",
        "optional": false,
        "typeAnnotation": null,
        "start": 3721,
        "end": 3724
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 3729,
              "end": 3733
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 3735,
                "end": 3741
              },
              "start": 3733,
              "end": 3741
            },
            "accessibility": null,
            "static": false,
            "start": 3729,
            "end": 3742
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 3745,
              "end": 3749
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
                    "name": "B36",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3752,
                    "end": 3755
                  },
                  "typeArguments": null,
                  "start": 3752,
                  "end": 3755
                },
                "start": 3752,
                "end": 3757
              },
              "start": 3750,
              "end": 3757
            },
            "accessibility": null,
            "static": false,
            "start": 3745,
            "end": 3758
          }
        ],
        "start": 3725,
        "end": 3760
      },
      "declare": false,
      "start": 3711,
      "end": 3760
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B36",
        "optional": false,
        "typeAnnotation": null,
        "start": 3771,
        "end": 3774
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 3779,
              "end": 3783
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 3785,
                "end": 3791
              },
              "start": 3783,
              "end": 3791
            },
            "accessibility": null,
            "static": false,
            "start": 3779,
            "end": 3792
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 3795,
              "end": 3799
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
                    "name": "B37",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3802,
                    "end": 3805
                  },
                  "typeArguments": null,
                  "start": 3802,
                  "end": 3805
                },
                "start": 3802,
                "end": 3807
              },
              "start": 3800,
              "end": 3807
            },
            "accessibility": null,
            "static": false,
            "start": 3795,
            "end": 3808
          }
        ],
        "start": 3775,
        "end": 3810
      },
      "declare": false,
      "start": 3761,
      "end": 3810
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B37",
        "optional": false,
        "typeAnnotation": null,
        "start": 3821,
        "end": 3824
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 3829,
              "end": 3833
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 3835,
                "end": 3841
              },
              "start": 3833,
              "end": 3841
            },
            "accessibility": null,
            "static": false,
            "start": 3829,
            "end": 3842
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 3845,
              "end": 3849
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
                    "name": "B38",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3852,
                    "end": 3855
                  },
                  "typeArguments": null,
                  "start": 3852,
                  "end": 3855
                },
                "start": 3852,
                "end": 3857
              },
              "start": 3850,
              "end": 3857
            },
            "accessibility": null,
            "static": false,
            "start": 3845,
            "end": 3858
          }
        ],
        "start": 3825,
        "end": 3860
      },
      "declare": false,
      "start": 3811,
      "end": 3860
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B38",
        "optional": false,
        "typeAnnotation": null,
        "start": 3871,
        "end": 3874
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 3879,
              "end": 3883
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 3885,
                "end": 3891
              },
              "start": 3883,
              "end": 3891
            },
            "accessibility": null,
            "static": false,
            "start": 3879,
            "end": 3892
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 3895,
              "end": 3899
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
                    "name": "B39",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3902,
                    "end": 3905
                  },
                  "typeArguments": null,
                  "start": 3902,
                  "end": 3905
                },
                "start": 3902,
                "end": 3907
              },
              "start": 3900,
              "end": 3907
            },
            "accessibility": null,
            "static": false,
            "start": 3895,
            "end": 3908
          }
        ],
        "start": 3875,
        "end": 3910
      },
      "declare": false,
      "start": 3861,
      "end": 3910
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B39",
        "optional": false,
        "typeAnnotation": null,
        "start": 3921,
        "end": 3924
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 3929,
              "end": 3933
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 3935,
                "end": 3941
              },
              "start": 3933,
              "end": 3941
            },
            "accessibility": null,
            "static": false,
            "start": 3929,
            "end": 3942
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 3945,
              "end": 3949
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
                    "name": "B0",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3952,
                    "end": 3954
                  },
                  "typeArguments": null,
                  "start": 3952,
                  "end": 3954
                },
                "start": 3952,
                "end": 3956
              },
              "start": 3950,
              "end": 3956
            },
            "accessibility": null,
            "static": false,
            "start": 3945,
            "end": 3957
          }
        ],
        "start": 3925,
        "end": 3959
      },
      "declare": false,
      "start": 3911,
      "end": 3959
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
            "name": "a",
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
                  "start": 3977,
                  "end": 3979
                },
                "typeArguments": null,
                "start": 3977,
                "end": 3979
              },
              "start": 3975,
              "end": 3979
            },
            "start": 3974,
            "end": 3979
          },
          "init": null,
          "definite": false,
          "start": 3974,
          "end": 3979
        }
      ],
      "declare": true,
      "start": 3960,
      "end": 3980
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
            "name": "assigned",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B0",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3997,
                  "end": 3999
                },
                "typeArguments": null,
                "start": 3997,
                "end": 3999
              },
              "start": 3995,
              "end": 3999
            },
            "start": 3987,
            "end": 3999
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 4002,
            "end": 4003
          },
          "definite": false,
          "start": 3987,
          "end": 4003
        }
      ],
      "declare": false,
      "start": 3981,
      "end": 4004
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 4004
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "A0",
    "start": 10,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 17,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 23,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 33,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "A1",
    "start": 40,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 42,
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
    "type": "Punctuator",
    "value": "}",
    "start": 46,
    "end": 47
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 48,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "A1",
    "start": 58,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 65,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 71,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 81,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "A2",
    "start": 88,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Punctuator",
    "value": "}",
    "start": 94,
    "end": 95
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 96,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "A2",
    "start": 106,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 109,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 113,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 119,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 129,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 134,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "A3",
    "start": 136,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 142,
    "end": 143
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 144,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "A3",
    "start": 154,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 161,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 167,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 177,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 182,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "A4",
    "start": 184,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Punctuator",
    "value": "}",
    "start": 190,
    "end": 191
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 192,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "A4",
    "start": 202,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 209,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 215,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 221,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 225,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "A5",
    "start": 232,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 238,
    "end": 239
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 240,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "A5",
    "start": 250,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 253,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 257,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 261,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 263,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 269,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 273,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "A6",
    "start": 280,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 286,
    "end": 287
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 288,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "A6",
    "start": 298,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 301,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 305,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 309,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 311,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 317,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 321,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "?",
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
    "value": "A7",
    "start": 328,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "type": "Keyword",
    "value": "interface",
    "start": 336,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "A7",
    "start": 346,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 349,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 353,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 357,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 359,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 365,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 369,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 374,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "A8",
    "start": 376,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 380,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 382,
    "end": 383
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 384,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "A8",
    "start": 394,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 397,
    "end": 398
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 401,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 405,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 407,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 413,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 417,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 421,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 422,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "A9",
    "start": 424,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 427,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 430,
    "end": 431
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 432,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "A9",
    "start": 442,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 445,
    "end": 446
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 449,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 453,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 455,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 461,
    "end": 462
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 465,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 470,
    "end": 471
  },
  {
    "type": "Identifier",
    "value": "A10",
    "start": 472,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 477,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 479,
    "end": 480
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 481,
    "end": 490
  },
  {
    "type": "Identifier",
    "value": "A10",
    "start": 491,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 495,
    "end": 496
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 499,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 503,
    "end": 504
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 505,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 511,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 515,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 520,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "A11",
    "start": 522,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 525,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 526,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 529,
    "end": 530
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 531,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "A11",
    "start": 541,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 545,
    "end": 546
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 549,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 553,
    "end": 554
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 555,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 561,
    "end": 562
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 565,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": "?",
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
    "value": "A12",
    "start": 572,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 575,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 576,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 577,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 579,
    "end": 580
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 581,
    "end": 590
  },
  {
    "type": "Identifier",
    "value": "A12",
    "start": 591,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 595,
    "end": 596
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 599,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 603,
    "end": 604
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 605,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 611,
    "end": 612
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 615,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 619,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 620,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "A13",
    "start": 622,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 625,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 626,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 627,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 629,
    "end": 630
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 631,
    "end": 640
  },
  {
    "type": "Identifier",
    "value": "A13",
    "start": 641,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 645,
    "end": 646
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 649,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 653,
    "end": 654
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 655,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 661,
    "end": 662
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 665,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 669,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 670,
    "end": 671
  },
  {
    "type": "Identifier",
    "value": "A14",
    "start": 672,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 675,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 676,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 677,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 679,
    "end": 680
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 681,
    "end": 690
  },
  {
    "type": "Identifier",
    "value": "A14",
    "start": 691,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 695,
    "end": 696
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 699,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 703,
    "end": 704
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 705,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 711,
    "end": 712
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 715,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 719,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 720,
    "end": 721
  },
  {
    "type": "Identifier",
    "value": "A15",
    "start": 722,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 725,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Punctuator",
    "value": "}",
    "start": 729,
    "end": 730
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 731,
    "end": 740
  },
  {
    "type": "Identifier",
    "value": "A15",
    "start": 741,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 745,
    "end": 746
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 749,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 753,
    "end": 754
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 755,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 761,
    "end": 762
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 765,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 769,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 770,
    "end": 771
  },
  {
    "type": "Identifier",
    "value": "A16",
    "start": 772,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 775,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 776,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 777,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 779,
    "end": 780
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 781,
    "end": 790
  },
  {
    "type": "Identifier",
    "value": "A16",
    "start": 791,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 795,
    "end": 796
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 799,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 803,
    "end": 804
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 805,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 811,
    "end": 812
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 815,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 819,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 820,
    "end": 821
  },
  {
    "type": "Identifier",
    "value": "A17",
    "start": 822,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 825,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 826,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 827,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 829,
    "end": 830
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 831,
    "end": 840
  },
  {
    "type": "Identifier",
    "value": "A17",
    "start": 841,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 845,
    "end": 846
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 849,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 853,
    "end": 854
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 855,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 861,
    "end": 862
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 865,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 869,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 870,
    "end": 871
  },
  {
    "type": "Identifier",
    "value": "A18",
    "start": 872,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 875,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 876,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 877,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 879,
    "end": 880
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 881,
    "end": 890
  },
  {
    "type": "Identifier",
    "value": "A18",
    "start": 891,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 895,
    "end": 896
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 899,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 903,
    "end": 904
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 905,
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
    "value": "next",
    "start": 915,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 919,
    "end": 920
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 920,
    "end": 921
  },
  {
    "type": "Identifier",
    "value": "A19",
    "start": 922,
    "end": 925
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 925,
    "end": 926
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 926,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 927,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 929,
    "end": 930
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 931,
    "end": 940
  },
  {
    "type": "Identifier",
    "value": "A19",
    "start": 941,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 945,
    "end": 946
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 949,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 953,
    "end": 954
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 955,
    "end": 961
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 961,
    "end": 962
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 965,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 969,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 970,
    "end": 971
  },
  {
    "type": "Identifier",
    "value": "A20",
    "start": 972,
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
    "value": ";",
    "start": 977,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 979,
    "end": 980
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 981,
    "end": 990
  },
  {
    "type": "Identifier",
    "value": "A20",
    "start": 991,
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
    "value": "name",
    "start": 999,
    "end": 1003
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1003,
    "end": 1004
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1005,
    "end": 1011
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1011,
    "end": 1012
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 1015,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Identifier",
    "value": "A21",
    "start": 1022,
    "end": 1025
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1025,
    "end": 1026
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1031,
    "end": 1040
  },
  {
    "type": "Identifier",
    "value": "A21",
    "start": 1041,
    "end": 1044
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1049,
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
    "value": "string",
    "start": 1055,
    "end": 1061
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 1065,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Identifier",
    "value": "A22",
    "start": 1072,
    "end": 1075
  },
  {
    "type": "Punctuator",
    "value": "[",
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
    "type": "Punctuator",
    "value": "}",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1081,
    "end": 1090
  },
  {
    "type": "Identifier",
    "value": "A22",
    "start": 1091,
    "end": 1094
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1099,
    "end": 1103
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1103,
    "end": 1104
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1105,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 1115,
    "end": 1119
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1119,
    "end": 1120
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Identifier",
    "value": "A23",
    "start": 1122,
    "end": 1125
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1125,
    "end": 1126
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1126,
    "end": 1127
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1127,
    "end": 1128
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1131,
    "end": 1140
  },
  {
    "type": "Identifier",
    "value": "A23",
    "start": 1141,
    "end": 1144
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1145,
    "end": 1146
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1149,
    "end": 1153
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1153,
    "end": 1154
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1155,
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
    "value": "next",
    "start": 1165,
    "end": 1169
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Identifier",
    "value": "A24",
    "start": 1172,
    "end": 1175
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1176,
    "end": 1177
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1179,
    "end": 1180
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1181,
    "end": 1190
  },
  {
    "type": "Identifier",
    "value": "A24",
    "start": 1191,
    "end": 1194
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1195,
    "end": 1196
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1199,
    "end": 1203
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1203,
    "end": 1204
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1205,
    "end": 1211
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 1215,
    "end": 1219
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1219,
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
    "value": "A25",
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
    "value": ";",
    "start": 1227,
    "end": 1228
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1229,
    "end": 1230
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1231,
    "end": 1240
  },
  {
    "type": "Identifier",
    "value": "A25",
    "start": 1241,
    "end": 1244
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1245,
    "end": 1246
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1249,
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
    "value": "string",
    "start": 1255,
    "end": 1261
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1261,
    "end": 1262
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 1265,
    "end": 1269
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1269,
    "end": 1270
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1270,
    "end": 1271
  },
  {
    "type": "Identifier",
    "value": "A26",
    "start": 1272,
    "end": 1275
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1275,
    "end": 1276
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1276,
    "end": 1277
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1277,
    "end": 1278
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1279,
    "end": 1280
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1281,
    "end": 1290
  },
  {
    "type": "Identifier",
    "value": "A26",
    "start": 1291,
    "end": 1294
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1295,
    "end": 1296
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1299,
    "end": 1303
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1303,
    "end": 1304
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1305,
    "end": 1311
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1311,
    "end": 1312
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 1315,
    "end": 1319
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1319,
    "end": 1320
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1320,
    "end": 1321
  },
  {
    "type": "Identifier",
    "value": "A27",
    "start": 1322,
    "end": 1325
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1326,
    "end": 1327
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1327,
    "end": 1328
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1329,
    "end": 1330
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1331,
    "end": 1340
  },
  {
    "type": "Identifier",
    "value": "A27",
    "start": 1341,
    "end": 1344
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1345,
    "end": 1346
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1349,
    "end": 1353
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1353,
    "end": 1354
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1355,
    "end": 1361
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1361,
    "end": 1362
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 1365,
    "end": 1369
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1369,
    "end": 1370
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1370,
    "end": 1371
  },
  {
    "type": "Identifier",
    "value": "A28",
    "start": 1372,
    "end": 1375
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1375,
    "end": 1376
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1376,
    "end": 1377
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1377,
    "end": 1378
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1379,
    "end": 1380
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1381,
    "end": 1390
  },
  {
    "type": "Identifier",
    "value": "A28",
    "start": 1391,
    "end": 1394
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1395,
    "end": 1396
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1399,
    "end": 1403
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1403,
    "end": 1404
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1405,
    "end": 1411
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1411,
    "end": 1412
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 1415,
    "end": 1419
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1419,
    "end": 1420
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1420,
    "end": 1421
  },
  {
    "type": "Identifier",
    "value": "A29",
    "start": 1422,
    "end": 1425
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1425,
    "end": 1426
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1426,
    "end": 1427
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1427,
    "end": 1428
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1429,
    "end": 1430
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1431,
    "end": 1440
  },
  {
    "type": "Identifier",
    "value": "A29",
    "start": 1441,
    "end": 1444
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1445,
    "end": 1446
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1449,
    "end": 1453
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1453,
    "end": 1454
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1455,
    "end": 1461
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1461,
    "end": 1462
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 1465,
    "end": 1469
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1469,
    "end": 1470
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1470,
    "end": 1471
  },
  {
    "type": "Identifier",
    "value": "A30",
    "start": 1472,
    "end": 1475
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1475,
    "end": 1476
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1476,
    "end": 1477
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1477,
    "end": 1478
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1479,
    "end": 1480
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1481,
    "end": 1490
  },
  {
    "type": "Identifier",
    "value": "A30",
    "start": 1491,
    "end": 1494
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1495,
    "end": 1496
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1499,
    "end": 1503
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1503,
    "end": 1504
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1505,
    "end": 1511
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1511,
    "end": 1512
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 1515,
    "end": 1519
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1519,
    "end": 1520
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1520,
    "end": 1521
  },
  {
    "type": "Identifier",
    "value": "A31",
    "start": 1522,
    "end": 1525
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1525,
    "end": 1526
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1526,
    "end": 1527
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1527,
    "end": 1528
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1529,
    "end": 1530
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1531,
    "end": 1540
  },
  {
    "type": "Identifier",
    "value": "A31",
    "start": 1541,
    "end": 1544
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1545,
    "end": 1546
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1549,
    "end": 1553
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1553,
    "end": 1554
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1555,
    "end": 1561
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1561,
    "end": 1562
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 1565,
    "end": 1569
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1569,
    "end": 1570
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1570,
    "end": 1571
  },
  {
    "type": "Identifier",
    "value": "A32",
    "start": 1572,
    "end": 1575
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1575,
    "end": 1576
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1576,
    "end": 1577
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1577,
    "end": 1578
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1579,
    "end": 1580
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1581,
    "end": 1590
  },
  {
    "type": "Identifier",
    "value": "A32",
    "start": 1591,
    "end": 1594
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1595,
    "end": 1596
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1599,
    "end": 1603
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1603,
    "end": 1604
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1605,
    "end": 1611
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1611,
    "end": 1612
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 1615,
    "end": 1619
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1619,
    "end": 1620
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1620,
    "end": 1621
  },
  {
    "type": "Identifier",
    "value": "A33",
    "start": 1622,
    "end": 1625
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1625,
    "end": 1626
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1626,
    "end": 1627
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1627,
    "end": 1628
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1629,
    "end": 1630
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1631,
    "end": 1640
  },
  {
    "type": "Identifier",
    "value": "A33",
    "start": 1641,
    "end": 1644
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1645,
    "end": 1646
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1649,
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
    "value": "string",
    "start": 1655,
    "end": 1661
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1661,
    "end": 1662
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 1665,
    "end": 1669
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1669,
    "end": 1670
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1670,
    "end": 1671
  },
  {
    "type": "Identifier",
    "value": "A34",
    "start": 1672,
    "end": 1675
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1675,
    "end": 1676
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1676,
    "end": 1677
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1677,
    "end": 1678
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1679,
    "end": 1680
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1681,
    "end": 1690
  },
  {
    "type": "Identifier",
    "value": "A34",
    "start": 1691,
    "end": 1694
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1695,
    "end": 1696
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1699,
    "end": 1703
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1703,
    "end": 1704
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1705,
    "end": 1711
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1711,
    "end": 1712
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 1715,
    "end": 1719
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1719,
    "end": 1720
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1720,
    "end": 1721
  },
  {
    "type": "Identifier",
    "value": "A35",
    "start": 1722,
    "end": 1725
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1725,
    "end": 1726
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1726,
    "end": 1727
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1727,
    "end": 1728
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1729,
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
    "value": "A35",
    "start": 1741,
    "end": 1744
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1745,
    "end": 1746
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1749,
    "end": 1753
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1753,
    "end": 1754
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1755,
    "end": 1761
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1761,
    "end": 1762
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 1765,
    "end": 1769
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1769,
    "end": 1770
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1770,
    "end": 1771
  },
  {
    "type": "Identifier",
    "value": "A36",
    "start": 1772,
    "end": 1775
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1775,
    "end": 1776
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1776,
    "end": 1777
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1777,
    "end": 1778
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1779,
    "end": 1780
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1781,
    "end": 1790
  },
  {
    "type": "Identifier",
    "value": "A36",
    "start": 1791,
    "end": 1794
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1795,
    "end": 1796
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1799,
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
    "value": "string",
    "start": 1805,
    "end": 1811
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1811,
    "end": 1812
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 1815,
    "end": 1819
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1819,
    "end": 1820
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1820,
    "end": 1821
  },
  {
    "type": "Identifier",
    "value": "A37",
    "start": 1822,
    "end": 1825
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1825,
    "end": 1826
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1826,
    "end": 1827
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1827,
    "end": 1828
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1829,
    "end": 1830
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1831,
    "end": 1840
  },
  {
    "type": "Identifier",
    "value": "A37",
    "start": 1841,
    "end": 1844
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1845,
    "end": 1846
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1849,
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
    "value": "string",
    "start": 1855,
    "end": 1861
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1861,
    "end": 1862
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 1865,
    "end": 1869
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1869,
    "end": 1870
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1870,
    "end": 1871
  },
  {
    "type": "Identifier",
    "value": "A38",
    "start": 1872,
    "end": 1875
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1875,
    "end": 1876
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1876,
    "end": 1877
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1877,
    "end": 1878
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1879,
    "end": 1880
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1881,
    "end": 1890
  },
  {
    "type": "Identifier",
    "value": "A38",
    "start": 1891,
    "end": 1894
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1895,
    "end": 1896
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1899,
    "end": 1903
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1903,
    "end": 1904
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1905,
    "end": 1911
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1911,
    "end": 1912
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 1915,
    "end": 1919
  },
  {
    "type": "Punctuator",
    "value": "?",
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
    "type": "Identifier",
    "value": "A39",
    "start": 1922,
    "end": 1925
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1925,
    "end": 1926
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1926,
    "end": 1927
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1927,
    "end": 1928
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1929,
    "end": 1930
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1931,
    "end": 1940
  },
  {
    "type": "Identifier",
    "value": "A39",
    "start": 1941,
    "end": 1944
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1945,
    "end": 1946
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1949,
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
    "value": "string",
    "start": 1955,
    "end": 1961
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1961,
    "end": 1962
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 1965,
    "end": 1969
  },
  {
    "type": "Punctuator",
    "value": "?",
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
    "type": "Identifier",
    "value": "A0",
    "start": 1972,
    "end": 1974
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1974,
    "end": 1975
  },
  {
    "type": "Punctuator",
    "value": "]",
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
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1980,
    "end": 1989
  },
  {
    "type": "Identifier",
    "value": "B0",
    "start": 1990,
    "end": 1992
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1993,
    "end": 1994
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1997,
    "end": 2001
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2001,
    "end": 2002
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2003,
    "end": 2009
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2009,
    "end": 2010
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 2013,
    "end": 2017
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2017,
    "end": 2018
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2018,
    "end": 2019
  },
  {
    "type": "Identifier",
    "value": "B1",
    "start": 2020,
    "end": 2022
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2022,
    "end": 2023
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2023,
    "end": 2024
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2024,
    "end": 2025
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2026,
    "end": 2027
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2028,
    "end": 2037
  },
  {
    "type": "Identifier",
    "value": "B1",
    "start": 2038,
    "end": 2040
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2041,
    "end": 2042
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2045,
    "end": 2049
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2049,
    "end": 2050
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2051,
    "end": 2057
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2057,
    "end": 2058
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 2061,
    "end": 2065
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2065,
    "end": 2066
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2066,
    "end": 2067
  },
  {
    "type": "Identifier",
    "value": "B2",
    "start": 2068,
    "end": 2070
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2070,
    "end": 2071
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2071,
    "end": 2072
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2072,
    "end": 2073
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2074,
    "end": 2075
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2076,
    "end": 2085
  },
  {
    "type": "Identifier",
    "value": "B2",
    "start": 2086,
    "end": 2088
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2089,
    "end": 2090
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2093,
    "end": 2097
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2097,
    "end": 2098
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2099,
    "end": 2105
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2105,
    "end": 2106
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 2109,
    "end": 2113
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2113,
    "end": 2114
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2114,
    "end": 2115
  },
  {
    "type": "Identifier",
    "value": "B3",
    "start": 2116,
    "end": 2118
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2118,
    "end": 2119
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2119,
    "end": 2120
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2120,
    "end": 2121
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2122,
    "end": 2123
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2124,
    "end": 2133
  },
  {
    "type": "Identifier",
    "value": "B3",
    "start": 2134,
    "end": 2136
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2137,
    "end": 2138
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2141,
    "end": 2145
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2145,
    "end": 2146
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2147,
    "end": 2153
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2153,
    "end": 2154
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 2157,
    "end": 2161
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2161,
    "end": 2162
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2162,
    "end": 2163
  },
  {
    "type": "Identifier",
    "value": "B4",
    "start": 2164,
    "end": 2166
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2166,
    "end": 2167
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2167,
    "end": 2168
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2168,
    "end": 2169
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2170,
    "end": 2171
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2172,
    "end": 2181
  },
  {
    "type": "Identifier",
    "value": "B4",
    "start": 2182,
    "end": 2184
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2185,
    "end": 2186
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2189,
    "end": 2193
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2193,
    "end": 2194
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2195,
    "end": 2201
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2201,
    "end": 2202
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 2205,
    "end": 2209
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2209,
    "end": 2210
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2210,
    "end": 2211
  },
  {
    "type": "Identifier",
    "value": "B5",
    "start": 2212,
    "end": 2214
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2214,
    "end": 2215
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2215,
    "end": 2216
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2216,
    "end": 2217
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2218,
    "end": 2219
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2220,
    "end": 2229
  },
  {
    "type": "Identifier",
    "value": "B5",
    "start": 2230,
    "end": 2232
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2233,
    "end": 2234
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2237,
    "end": 2241
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2241,
    "end": 2242
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2243,
    "end": 2249
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2249,
    "end": 2250
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 2253,
    "end": 2257
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2257,
    "end": 2258
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2258,
    "end": 2259
  },
  {
    "type": "Identifier",
    "value": "B6",
    "start": 2260,
    "end": 2262
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2262,
    "end": 2263
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2263,
    "end": 2264
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2264,
    "end": 2265
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2266,
    "end": 2267
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2268,
    "end": 2277
  },
  {
    "type": "Identifier",
    "value": "B6",
    "start": 2278,
    "end": 2280
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2281,
    "end": 2282
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2285,
    "end": 2289
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2289,
    "end": 2290
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2291,
    "end": 2297
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2297,
    "end": 2298
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 2301,
    "end": 2305
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2305,
    "end": 2306
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2306,
    "end": 2307
  },
  {
    "type": "Identifier",
    "value": "B7",
    "start": 2308,
    "end": 2310
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2310,
    "end": 2311
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2311,
    "end": 2312
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2312,
    "end": 2313
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2314,
    "end": 2315
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2316,
    "end": 2325
  },
  {
    "type": "Identifier",
    "value": "B7",
    "start": 2326,
    "end": 2328
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2329,
    "end": 2330
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2333,
    "end": 2337
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2337,
    "end": 2338
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2339,
    "end": 2345
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2345,
    "end": 2346
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 2349,
    "end": 2353
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2353,
    "end": 2354
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2354,
    "end": 2355
  },
  {
    "type": "Identifier",
    "value": "B8",
    "start": 2356,
    "end": 2358
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2358,
    "end": 2359
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2359,
    "end": 2360
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2360,
    "end": 2361
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2362,
    "end": 2363
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2364,
    "end": 2373
  },
  {
    "type": "Identifier",
    "value": "B8",
    "start": 2374,
    "end": 2376
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2377,
    "end": 2378
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2381,
    "end": 2385
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2385,
    "end": 2386
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2387,
    "end": 2393
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2393,
    "end": 2394
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 2397,
    "end": 2401
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2401,
    "end": 2402
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2402,
    "end": 2403
  },
  {
    "type": "Identifier",
    "value": "B9",
    "start": 2404,
    "end": 2406
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2406,
    "end": 2407
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2407,
    "end": 2408
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2408,
    "end": 2409
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2410,
    "end": 2411
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2412,
    "end": 2421
  },
  {
    "type": "Identifier",
    "value": "B9",
    "start": 2422,
    "end": 2424
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2425,
    "end": 2426
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2429,
    "end": 2433
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2433,
    "end": 2434
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2435,
    "end": 2441
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2441,
    "end": 2442
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 2445,
    "end": 2449
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2449,
    "end": 2450
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2450,
    "end": 2451
  },
  {
    "type": "Identifier",
    "value": "B10",
    "start": 2452,
    "end": 2455
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2455,
    "end": 2456
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2456,
    "end": 2457
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2457,
    "end": 2458
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2459,
    "end": 2460
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2461,
    "end": 2470
  },
  {
    "type": "Identifier",
    "value": "B10",
    "start": 2471,
    "end": 2474
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2475,
    "end": 2476
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2479,
    "end": 2483
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2483,
    "end": 2484
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2485,
    "end": 2491
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2491,
    "end": 2492
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 2495,
    "end": 2499
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2499,
    "end": 2500
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2500,
    "end": 2501
  },
  {
    "type": "Identifier",
    "value": "B11",
    "start": 2502,
    "end": 2505
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2505,
    "end": 2506
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2506,
    "end": 2507
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2507,
    "end": 2508
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2509,
    "end": 2510
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2511,
    "end": 2520
  },
  {
    "type": "Identifier",
    "value": "B11",
    "start": 2521,
    "end": 2524
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2525,
    "end": 2526
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2529,
    "end": 2533
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2533,
    "end": 2534
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2535,
    "end": 2541
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2541,
    "end": 2542
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 2545,
    "end": 2549
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2549,
    "end": 2550
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2550,
    "end": 2551
  },
  {
    "type": "Identifier",
    "value": "B12",
    "start": 2552,
    "end": 2555
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2555,
    "end": 2556
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2556,
    "end": 2557
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "type": "Keyword",
    "value": "interface",
    "start": 2561,
    "end": 2570
  },
  {
    "type": "Identifier",
    "value": "B12",
    "start": 2571,
    "end": 2574
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2575,
    "end": 2576
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2579,
    "end": 2583
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2583,
    "end": 2584
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2585,
    "end": 2591
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2591,
    "end": 2592
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 2595,
    "end": 2599
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2599,
    "end": 2600
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2600,
    "end": 2601
  },
  {
    "type": "Identifier",
    "value": "B13",
    "start": 2602,
    "end": 2605
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2605,
    "end": 2606
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2606,
    "end": 2607
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2607,
    "end": 2608
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2609,
    "end": 2610
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2611,
    "end": 2620
  },
  {
    "type": "Identifier",
    "value": "B13",
    "start": 2621,
    "end": 2624
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2625,
    "end": 2626
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2629,
    "end": 2633
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2633,
    "end": 2634
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2635,
    "end": 2641
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2641,
    "end": 2642
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 2645,
    "end": 2649
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2649,
    "end": 2650
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2650,
    "end": 2651
  },
  {
    "type": "Identifier",
    "value": "B14",
    "start": 2652,
    "end": 2655
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2655,
    "end": 2656
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2656,
    "end": 2657
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2657,
    "end": 2658
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2659,
    "end": 2660
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2661,
    "end": 2670
  },
  {
    "type": "Identifier",
    "value": "B14",
    "start": 2671,
    "end": 2674
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2675,
    "end": 2676
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2679,
    "end": 2683
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2683,
    "end": 2684
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2685,
    "end": 2691
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2691,
    "end": 2692
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 2695,
    "end": 2699
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2699,
    "end": 2700
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2700,
    "end": 2701
  },
  {
    "type": "Identifier",
    "value": "B15",
    "start": 2702,
    "end": 2705
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2705,
    "end": 2706
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2706,
    "end": 2707
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2707,
    "end": 2708
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2709,
    "end": 2710
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2711,
    "end": 2720
  },
  {
    "type": "Identifier",
    "value": "B15",
    "start": 2721,
    "end": 2724
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2725,
    "end": 2726
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2729,
    "end": 2733
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2733,
    "end": 2734
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2735,
    "end": 2741
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2741,
    "end": 2742
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 2745,
    "end": 2749
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2749,
    "end": 2750
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2750,
    "end": 2751
  },
  {
    "type": "Identifier",
    "value": "B16",
    "start": 2752,
    "end": 2755
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2755,
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
    "start": 2759,
    "end": 2760
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2761,
    "end": 2770
  },
  {
    "type": "Identifier",
    "value": "B16",
    "start": 2771,
    "end": 2774
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2775,
    "end": 2776
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2779,
    "end": 2783
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2783,
    "end": 2784
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2785,
    "end": 2791
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2791,
    "end": 2792
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 2795,
    "end": 2799
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2799,
    "end": 2800
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2800,
    "end": 2801
  },
  {
    "type": "Identifier",
    "value": "B17",
    "start": 2802,
    "end": 2805
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2805,
    "end": 2806
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2806,
    "end": 2807
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2807,
    "end": 2808
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2809,
    "end": 2810
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2811,
    "end": 2820
  },
  {
    "type": "Identifier",
    "value": "B17",
    "start": 2821,
    "end": 2824
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2825,
    "end": 2826
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2829,
    "end": 2833
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2833,
    "end": 2834
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2835,
    "end": 2841
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2841,
    "end": 2842
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 2845,
    "end": 2849
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2849,
    "end": 2850
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2850,
    "end": 2851
  },
  {
    "type": "Identifier",
    "value": "B18",
    "start": 2852,
    "end": 2855
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2855,
    "end": 2856
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2856,
    "end": 2857
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2857,
    "end": 2858
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2859,
    "end": 2860
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2861,
    "end": 2870
  },
  {
    "type": "Identifier",
    "value": "B18",
    "start": 2871,
    "end": 2874
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2875,
    "end": 2876
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2879,
    "end": 2883
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2883,
    "end": 2884
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2885,
    "end": 2891
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2891,
    "end": 2892
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 2895,
    "end": 2899
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2899,
    "end": 2900
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2900,
    "end": 2901
  },
  {
    "type": "Identifier",
    "value": "B19",
    "start": 2902,
    "end": 2905
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2905,
    "end": 2906
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2906,
    "end": 2907
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2907,
    "end": 2908
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2909,
    "end": 2910
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2911,
    "end": 2920
  },
  {
    "type": "Identifier",
    "value": "B19",
    "start": 2921,
    "end": 2924
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2925,
    "end": 2926
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2929,
    "end": 2933
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2933,
    "end": 2934
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2935,
    "end": 2941
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2941,
    "end": 2942
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 2945,
    "end": 2949
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2949,
    "end": 2950
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2950,
    "end": 2951
  },
  {
    "type": "Identifier",
    "value": "B20",
    "start": 2952,
    "end": 2955
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2955,
    "end": 2956
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2956,
    "end": 2957
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2957,
    "end": 2958
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2959,
    "end": 2960
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2961,
    "end": 2970
  },
  {
    "type": "Identifier",
    "value": "B20",
    "start": 2971,
    "end": 2974
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2975,
    "end": 2976
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2979,
    "end": 2983
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2983,
    "end": 2984
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2985,
    "end": 2991
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2991,
    "end": 2992
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 2995,
    "end": 2999
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2999,
    "end": 3000
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3000,
    "end": 3001
  },
  {
    "type": "Identifier",
    "value": "B21",
    "start": 3002,
    "end": 3005
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3005,
    "end": 3006
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3006,
    "end": 3007
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3007,
    "end": 3008
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3009,
    "end": 3010
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3011,
    "end": 3020
  },
  {
    "type": "Identifier",
    "value": "B21",
    "start": 3021,
    "end": 3024
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3025,
    "end": 3026
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3029,
    "end": 3033
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3033,
    "end": 3034
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3035,
    "end": 3041
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3041,
    "end": 3042
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 3045,
    "end": 3049
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3049,
    "end": 3050
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3050,
    "end": 3051
  },
  {
    "type": "Identifier",
    "value": "B22",
    "start": 3052,
    "end": 3055
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3055,
    "end": 3056
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3056,
    "end": 3057
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3057,
    "end": 3058
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3059,
    "end": 3060
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3061,
    "end": 3070
  },
  {
    "type": "Identifier",
    "value": "B22",
    "start": 3071,
    "end": 3074
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3075,
    "end": 3076
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3079,
    "end": 3083
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3083,
    "end": 3084
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3085,
    "end": 3091
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3091,
    "end": 3092
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 3095,
    "end": 3099
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3099,
    "end": 3100
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3100,
    "end": 3101
  },
  {
    "type": "Identifier",
    "value": "B23",
    "start": 3102,
    "end": 3105
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3105,
    "end": 3106
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3106,
    "end": 3107
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3107,
    "end": 3108
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3109,
    "end": 3110
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3111,
    "end": 3120
  },
  {
    "type": "Identifier",
    "value": "B23",
    "start": 3121,
    "end": 3124
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3125,
    "end": 3126
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3129,
    "end": 3133
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3133,
    "end": 3134
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3135,
    "end": 3141
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3141,
    "end": 3142
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 3145,
    "end": 3149
  },
  {
    "type": "Punctuator",
    "value": "?",
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
    "value": "B24",
    "start": 3152,
    "end": 3155
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3155,
    "end": 3156
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3156,
    "end": 3157
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3157,
    "end": 3158
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3159,
    "end": 3160
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3161,
    "end": 3170
  },
  {
    "type": "Identifier",
    "value": "B24",
    "start": 3171,
    "end": 3174
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3175,
    "end": 3176
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3179,
    "end": 3183
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3183,
    "end": 3184
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3185,
    "end": 3191
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3191,
    "end": 3192
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 3195,
    "end": 3199
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3199,
    "end": 3200
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3200,
    "end": 3201
  },
  {
    "type": "Identifier",
    "value": "B25",
    "start": 3202,
    "end": 3205
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3205,
    "end": 3206
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3206,
    "end": 3207
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3207,
    "end": 3208
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3209,
    "end": 3210
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3211,
    "end": 3220
  },
  {
    "type": "Identifier",
    "value": "B25",
    "start": 3221,
    "end": 3224
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3225,
    "end": 3226
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3229,
    "end": 3233
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3233,
    "end": 3234
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3235,
    "end": 3241
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3241,
    "end": 3242
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 3245,
    "end": 3249
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3249,
    "end": 3250
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3250,
    "end": 3251
  },
  {
    "type": "Identifier",
    "value": "B26",
    "start": 3252,
    "end": 3255
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3255,
    "end": 3256
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3256,
    "end": 3257
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3257,
    "end": 3258
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3259,
    "end": 3260
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3261,
    "end": 3270
  },
  {
    "type": "Identifier",
    "value": "B26",
    "start": 3271,
    "end": 3274
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3275,
    "end": 3276
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3279,
    "end": 3283
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3283,
    "end": 3284
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3285,
    "end": 3291
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3291,
    "end": 3292
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 3295,
    "end": 3299
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3299,
    "end": 3300
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3300,
    "end": 3301
  },
  {
    "type": "Identifier",
    "value": "B27",
    "start": 3302,
    "end": 3305
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3305,
    "end": 3306
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3306,
    "end": 3307
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3307,
    "end": 3308
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3309,
    "end": 3310
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3311,
    "end": 3320
  },
  {
    "type": "Identifier",
    "value": "B27",
    "start": 3321,
    "end": 3324
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3325,
    "end": 3326
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3329,
    "end": 3333
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3333,
    "end": 3334
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3335,
    "end": 3341
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3341,
    "end": 3342
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 3345,
    "end": 3349
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3349,
    "end": 3350
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3350,
    "end": 3351
  },
  {
    "type": "Identifier",
    "value": "B28",
    "start": 3352,
    "end": 3355
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3355,
    "end": 3356
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3356,
    "end": 3357
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3357,
    "end": 3358
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3359,
    "end": 3360
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3361,
    "end": 3370
  },
  {
    "type": "Identifier",
    "value": "B28",
    "start": 3371,
    "end": 3374
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3375,
    "end": 3376
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3379,
    "end": 3383
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3383,
    "end": 3384
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3385,
    "end": 3391
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3391,
    "end": 3392
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 3395,
    "end": 3399
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3399,
    "end": 3400
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3400,
    "end": 3401
  },
  {
    "type": "Identifier",
    "value": "B29",
    "start": 3402,
    "end": 3405
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3405,
    "end": 3406
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3406,
    "end": 3407
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3407,
    "end": 3408
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3409,
    "end": 3410
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3411,
    "end": 3420
  },
  {
    "type": "Identifier",
    "value": "B29",
    "start": 3421,
    "end": 3424
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3425,
    "end": 3426
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3429,
    "end": 3433
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3433,
    "end": 3434
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3435,
    "end": 3441
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3441,
    "end": 3442
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 3445,
    "end": 3449
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3449,
    "end": 3450
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3450,
    "end": 3451
  },
  {
    "type": "Identifier",
    "value": "B30",
    "start": 3452,
    "end": 3455
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3455,
    "end": 3456
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3456,
    "end": 3457
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3457,
    "end": 3458
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3459,
    "end": 3460
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3461,
    "end": 3470
  },
  {
    "type": "Identifier",
    "value": "B30",
    "start": 3471,
    "end": 3474
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3475,
    "end": 3476
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3479,
    "end": 3483
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3483,
    "end": 3484
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3485,
    "end": 3491
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3491,
    "end": 3492
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 3495,
    "end": 3499
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3499,
    "end": 3500
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3500,
    "end": 3501
  },
  {
    "type": "Identifier",
    "value": "B31",
    "start": 3502,
    "end": 3505
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3505,
    "end": 3506
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3506,
    "end": 3507
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3507,
    "end": 3508
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3509,
    "end": 3510
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3511,
    "end": 3520
  },
  {
    "type": "Identifier",
    "value": "B31",
    "start": 3521,
    "end": 3524
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3525,
    "end": 3526
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3529,
    "end": 3533
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3533,
    "end": 3534
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3535,
    "end": 3541
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3541,
    "end": 3542
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 3545,
    "end": 3549
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3549,
    "end": 3550
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3550,
    "end": 3551
  },
  {
    "type": "Identifier",
    "value": "B32",
    "start": 3552,
    "end": 3555
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3555,
    "end": 3556
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3556,
    "end": 3557
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3557,
    "end": 3558
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3559,
    "end": 3560
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3561,
    "end": 3570
  },
  {
    "type": "Identifier",
    "value": "B32",
    "start": 3571,
    "end": 3574
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3575,
    "end": 3576
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3579,
    "end": 3583
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3583,
    "end": 3584
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3585,
    "end": 3591
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3591,
    "end": 3592
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 3595,
    "end": 3599
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3599,
    "end": 3600
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3600,
    "end": 3601
  },
  {
    "type": "Identifier",
    "value": "B33",
    "start": 3602,
    "end": 3605
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3605,
    "end": 3606
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3606,
    "end": 3607
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3607,
    "end": 3608
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3609,
    "end": 3610
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3611,
    "end": 3620
  },
  {
    "type": "Identifier",
    "value": "B33",
    "start": 3621,
    "end": 3624
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3625,
    "end": 3626
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3629,
    "end": 3633
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3633,
    "end": 3634
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3635,
    "end": 3641
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3641,
    "end": 3642
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 3645,
    "end": 3649
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3649,
    "end": 3650
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3650,
    "end": 3651
  },
  {
    "type": "Identifier",
    "value": "B34",
    "start": 3652,
    "end": 3655
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3655,
    "end": 3656
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3656,
    "end": 3657
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3657,
    "end": 3658
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3659,
    "end": 3660
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3661,
    "end": 3670
  },
  {
    "type": "Identifier",
    "value": "B34",
    "start": 3671,
    "end": 3674
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3675,
    "end": 3676
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3679,
    "end": 3683
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3683,
    "end": 3684
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3685,
    "end": 3691
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3691,
    "end": 3692
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 3695,
    "end": 3699
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3699,
    "end": 3700
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3700,
    "end": 3701
  },
  {
    "type": "Identifier",
    "value": "B35",
    "start": 3702,
    "end": 3705
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3705,
    "end": 3706
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Punctuator",
    "value": "}",
    "start": 3709,
    "end": 3710
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3711,
    "end": 3720
  },
  {
    "type": "Identifier",
    "value": "B35",
    "start": 3721,
    "end": 3724
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3725,
    "end": 3726
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3729,
    "end": 3733
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3733,
    "end": 3734
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3735,
    "end": 3741
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3741,
    "end": 3742
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 3745,
    "end": 3749
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3749,
    "end": 3750
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3750,
    "end": 3751
  },
  {
    "type": "Identifier",
    "value": "B36",
    "start": 3752,
    "end": 3755
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3755,
    "end": 3756
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3756,
    "end": 3757
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3757,
    "end": 3758
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3759,
    "end": 3760
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3761,
    "end": 3770
  },
  {
    "type": "Identifier",
    "value": "B36",
    "start": 3771,
    "end": 3774
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3775,
    "end": 3776
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3779,
    "end": 3783
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3783,
    "end": 3784
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3785,
    "end": 3791
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3791,
    "end": 3792
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 3795,
    "end": 3799
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3799,
    "end": 3800
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3800,
    "end": 3801
  },
  {
    "type": "Identifier",
    "value": "B37",
    "start": 3802,
    "end": 3805
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3805,
    "end": 3806
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3806,
    "end": 3807
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3807,
    "end": 3808
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3809,
    "end": 3810
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3811,
    "end": 3820
  },
  {
    "type": "Identifier",
    "value": "B37",
    "start": 3821,
    "end": 3824
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3825,
    "end": 3826
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3829,
    "end": 3833
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3833,
    "end": 3834
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3835,
    "end": 3841
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3841,
    "end": 3842
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 3845,
    "end": 3849
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3849,
    "end": 3850
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3850,
    "end": 3851
  },
  {
    "type": "Identifier",
    "value": "B38",
    "start": 3852,
    "end": 3855
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3855,
    "end": 3856
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3856,
    "end": 3857
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3857,
    "end": 3858
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3859,
    "end": 3860
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3861,
    "end": 3870
  },
  {
    "type": "Identifier",
    "value": "B38",
    "start": 3871,
    "end": 3874
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3875,
    "end": 3876
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3879,
    "end": 3883
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3883,
    "end": 3884
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3885,
    "end": 3891
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3891,
    "end": 3892
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 3895,
    "end": 3899
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3899,
    "end": 3900
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3900,
    "end": 3901
  },
  {
    "type": "Identifier",
    "value": "B39",
    "start": 3902,
    "end": 3905
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3905,
    "end": 3906
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3906,
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
    "start": 3909,
    "end": 3910
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3911,
    "end": 3920
  },
  {
    "type": "Identifier",
    "value": "B39",
    "start": 3921,
    "end": 3924
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3925,
    "end": 3926
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3929,
    "end": 3933
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3933,
    "end": 3934
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3935,
    "end": 3941
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3941,
    "end": 3942
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 3945,
    "end": 3949
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3949,
    "end": 3950
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3950,
    "end": 3951
  },
  {
    "type": "Identifier",
    "value": "B0",
    "start": 3952,
    "end": 3954
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3954,
    "end": 3955
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3955,
    "end": 3956
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3956,
    "end": 3957
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3958,
    "end": 3959
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3960,
    "end": 3967
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3968,
    "end": 3973
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3974,
    "end": 3975
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3975,
    "end": 3976
  },
  {
    "type": "Identifier",
    "value": "A0",
    "start": 3977,
    "end": 3979
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3979,
    "end": 3980
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3981,
    "end": 3986
  },
  {
    "type": "Identifier",
    "value": "assigned",
    "start": 3987,
    "end": 3995
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3995,
    "end": 3996
  },
  {
    "type": "Identifier",
    "value": "B0",
    "start": 3997,
    "end": 3999
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4000,
    "end": 4001
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4002,
    "end": 4003
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4003,
    "end": 4004
  }
]
```
