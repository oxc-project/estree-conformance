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
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 108,
        "end": 109
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
              "start": 114,
              "end": 115
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 117,
                "end": 123
              },
              "start": 115,
              "end": 123
            },
            "accessibility": null,
            "static": false,
            "start": 114,
            "end": 123
          }
        ],
        "start": 112,
        "end": 125
      },
      "declare": false,
      "start": 103,
      "end": 126
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 132,
        "end": 133
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
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 138,
              "end": 139
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 141,
                "end": 147
              },
              "start": 139,
              "end": 147
            },
            "accessibility": null,
            "static": false,
            "start": 138,
            "end": 147
          }
        ],
        "start": 136,
        "end": 149
      },
      "declare": false,
      "start": 127,
      "end": 150
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 156,
        "end": 157
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [],
        "start": 160,
        "end": 162
      },
      "declare": false,
      "start": 151,
      "end": 163
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x01",
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
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 174,
                      "end": 175
                    },
                    "typeArguments": null,
                    "start": 174,
                    "end": 175
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 178,
                      "end": 179
                    },
                    "typeArguments": null,
                    "start": 178,
                    "end": 179
                  }
                ],
                "start": 174,
                "end": 179
              },
              "start": 172,
              "end": 179
            },
            "start": 169,
            "end": 179
          },
          "init": null,
          "definite": false,
          "start": 169,
          "end": 179
        }
      ],
      "declare": false,
      "start": 165,
      "end": 180
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x02",
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
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 190,
                      "end": 191
                    },
                    "typeArguments": null,
                    "start": 190,
                    "end": 191
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 194,
                      "end": 195
                    },
                    "typeArguments": null,
                    "start": 194,
                    "end": 195
                  }
                ],
                "start": 190,
                "end": 195
              },
              "start": 188,
              "end": 195
            },
            "start": 185,
            "end": 195
          },
          "init": null,
          "definite": false,
          "start": 185,
          "end": 195
        }
      ],
      "declare": false,
      "start": 181,
      "end": 196
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x03",
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
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 206,
                      "end": 207
                    },
                    "typeArguments": null,
                    "start": 206,
                    "end": 207
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 210,
                      "end": 211
                    },
                    "typeArguments": null,
                    "start": 210,
                    "end": 211
                  }
                ],
                "start": 206,
                "end": 211
              },
              "start": 204,
              "end": 211
            },
            "start": 201,
            "end": 211
          },
          "init": null,
          "definite": false,
          "start": 201,
          "end": 211
        }
      ],
      "declare": false,
      "start": 197,
      "end": 212
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x04",
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
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 222,
                      "end": 223
                    },
                    "typeArguments": null,
                    "start": 222,
                    "end": 223
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 226,
                      "end": 227
                    },
                    "typeArguments": null,
                    "start": 226,
                    "end": 227
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 230,
                      "end": 231
                    },
                    "typeArguments": null,
                    "start": 230,
                    "end": 231
                  }
                ],
                "start": 222,
                "end": 231
              },
              "start": 220,
              "end": 231
            },
            "start": 217,
            "end": 231
          },
          "init": null,
          "definite": false,
          "start": 217,
          "end": 231
        }
      ],
      "declare": false,
      "start": 213,
      "end": 232
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x05",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 242,
                    "end": 248
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 251,
                      "end": 252
                    },
                    "typeArguments": null,
                    "start": 251,
                    "end": 252
                  }
                ],
                "start": 242,
                "end": 252
              },
              "start": 240,
              "end": 252
            },
            "start": 237,
            "end": 252
          },
          "init": null,
          "definite": false,
          "start": 237,
          "end": 252
        }
      ],
      "declare": false,
      "start": 233,
      "end": 253
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x06",
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
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 263,
                      "end": 264
                    },
                    "typeArguments": null,
                    "start": 263,
                    "end": 264
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 267,
                    "end": 273
                  }
                ],
                "start": 263,
                "end": 273
              },
              "start": 261,
              "end": 273
            },
            "start": 258,
            "end": 273
          },
          "init": null,
          "definite": false,
          "start": 258,
          "end": 273
        }
      ],
      "declare": false,
      "start": 254,
      "end": 274
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x07",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 284,
                  "end": 285
                },
                "typeArguments": null,
                "start": 284,
                "end": 285
              },
              "start": 282,
              "end": 285
            },
            "start": 279,
            "end": 285
          },
          "init": null,
          "definite": false,
          "start": 279,
          "end": 285
        }
      ],
      "declare": false,
      "start": 275,
      "end": 286
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x08",
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
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 296,
                      "end": 297
                    },
                    "typeArguments": null,
                    "start": 296,
                    "end": 297
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "start": 300,
                    "end": 302
                  }
                ],
                "start": 296,
                "end": 302
              },
              "start": 294,
              "end": 302
            },
            "start": 291,
            "end": 302
          },
          "init": null,
          "definite": false,
          "start": 291,
          "end": 302
        }
      ],
      "declare": false,
      "start": 287,
      "end": 303
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x09",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "start": 313,
                    "end": 315
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 318,
                      "end": 319
                    },
                    "typeArguments": null,
                    "start": 318,
                    "end": 319
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "start": 322,
                    "end": 324
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 327,
                      "end": 328
                    },
                    "typeArguments": null,
                    "start": 327,
                    "end": 328
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "start": 331,
                    "end": 333
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 336,
                      "end": 337
                    },
                    "typeArguments": null,
                    "start": 336,
                    "end": 337
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "start": 340,
                    "end": 342
                  }
                ],
                "start": 313,
                "end": 342
              },
              "start": 311,
              "end": 342
            },
            "start": 308,
            "end": 342
          },
          "init": null,
          "definite": false,
          "start": 308,
          "end": 342
        }
      ],
      "declare": false,
      "start": 304,
      "end": 343
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 355,
        "end": 356
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 357,
        "end": 359
      },
      "declare": false,
      "start": 345,
      "end": 359
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 370,
        "end": 371
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 372,
        "end": 374
      },
      "declare": false,
      "start": 360,
      "end": 374
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x10",
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
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 385,
                      "end": 386
                    },
                    "typeArguments": null,
                    "start": 385,
                    "end": 386
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 389,
                      "end": 390
                    },
                    "typeArguments": null,
                    "start": 389,
                    "end": 390
                  }
                ],
                "start": 385,
                "end": 390
              },
              "start": 383,
              "end": 390
            },
            "start": 380,
            "end": 390
          },
          "init": null,
          "definite": false,
          "start": 380,
          "end": 390
        }
      ],
      "declare": false,
      "start": 376,
      "end": 391
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x11",
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
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 401,
                      "end": 402
                    },
                    "typeArguments": null,
                    "start": 401,
                    "end": 402
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 405,
                      "end": 406
                    },
                    "typeArguments": null,
                    "start": 405,
                    "end": 406
                  }
                ],
                "start": 401,
                "end": 406
              },
              "start": 399,
              "end": 406
            },
            "start": 396,
            "end": 406
          },
          "init": null,
          "definite": false,
          "start": 396,
          "end": 406
        }
      ],
      "declare": false,
      "start": 392,
      "end": 407
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x12",
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
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 417,
                      "end": 418
                    },
                    "typeArguments": null,
                    "start": 417,
                    "end": 418
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
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
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 425,
                      "end": 426
                    },
                    "typeArguments": null,
                    "start": 425,
                    "end": 426
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 429,
                      "end": 430
                    },
                    "typeArguments": null,
                    "start": 429,
                    "end": 430
                  }
                ],
                "start": 417,
                "end": 430
              },
              "start": 415,
              "end": 430
            },
            "start": 412,
            "end": 430
          },
          "init": null,
          "definite": false,
          "start": 412,
          "end": 430
        }
      ],
      "declare": false,
      "start": 408,
      "end": 431
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x13",
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
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 441,
                      "end": 442
                    },
                    "typeArguments": null,
                    "start": 441,
                    "end": 442
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 445,
                      "end": 446
                    },
                    "typeArguments": null,
                    "start": 445,
                    "end": 446
                  }
                ],
                "start": 441,
                "end": 446
              },
              "start": 439,
              "end": 446
            },
            "start": 436,
            "end": 446
          },
          "init": null,
          "definite": false,
          "start": 436,
          "end": 446
        }
      ],
      "declare": false,
      "start": 432,
      "end": 447
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x14",
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
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 457,
                      "end": 458
                    },
                    "typeArguments": null,
                    "start": 457,
                    "end": 458
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 461,
                      "end": 462
                    },
                    "typeArguments": null,
                    "start": 461,
                    "end": 462
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 465,
                      "end": 466
                    },
                    "typeArguments": null,
                    "start": 465,
                    "end": 466
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 469,
                      "end": 470
                    },
                    "typeArguments": null,
                    "start": 469,
                    "end": 470
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 473,
                      "end": 474
                    },
                    "typeArguments": null,
                    "start": 473,
                    "end": 474
                  }
                ],
                "start": 457,
                "end": 474
              },
              "start": 455,
              "end": 474
            },
            "start": 452,
            "end": 474
          },
          "init": null,
          "definite": false,
          "start": 452,
          "end": 474
        }
      ],
      "declare": false,
      "start": 448,
      "end": 475
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Dictionary",
        "optional": false,
        "typeAnnotation": null,
        "start": 504,
        "end": 514
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 526,
                    "end": 532
                  },
                  "start": 524,
                  "end": 532
                },
                "start": 520,
                "end": 532
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 535,
                "end": 541
              },
              "start": 533,
              "end": 541
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 519,
            "end": 541
          }
        ],
        "start": 517,
        "end": 543
      },
      "declare": false,
      "start": 499,
      "end": 544
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
            "name": "intersectDictionaries",
            "optional": false,
            "typeAnnotation": null,
            "start": 552,
            "end": 573
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "F1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 577,
                    "end": 579
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Dictionary",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 588,
                      "end": 598
                    },
                    "typeArguments": null,
                    "start": 588,
                    "end": 598
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 577,
                  "end": 598
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "F2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 600,
                    "end": 602
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Dictionary",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 611,
                      "end": 621
                    },
                    "typeArguments": null,
                    "start": 611,
                    "end": 621
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 600,
                  "end": 621
                }
              ],
              "start": 576,
              "end": 622
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "d1",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "F1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 630,
                      "end": 632
                    },
                    "typeArguments": null,
                    "start": 630,
                    "end": 632
                  },
                  "start": 628,
                  "end": 632
                },
                "start": 626,
                "end": 632
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "d2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "F2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 640,
                      "end": 642
                    },
                    "typeArguments": null,
                    "start": 640,
                    "end": 642
                  },
                  "start": 638,
                  "end": 642
                },
                "start": 636,
                "end": 642
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
                      "name": "F1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 647,
                      "end": 649
                    },
                    "typeArguments": null,
                    "start": 647,
                    "end": 649
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "F2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 652,
                      "end": 654
                    },
                    "typeArguments": null,
                    "start": 652,
                    "end": 654
                  }
                ],
                "start": 647,
                "end": 654
              },
              "start": 645,
              "end": 654
            },
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 658,
                  "end": 664
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "assign",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 665,
                  "end": 671
                },
                "optional": false,
                "computed": false,
                "start": 658,
                "end": 671
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 672,
                  "end": 674
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "d1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 676,
                  "end": 678
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "d2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 680,
                  "end": 682
                }
              ],
              "optional": false,
              "start": 658,
              "end": 683
            },
            "id": null,
            "generator": false,
            "start": 576,
            "end": 683
          },
          "definite": false,
          "start": 552,
          "end": 683
        }
      ],
      "declare": false,
      "start": 546,
      "end": 684
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
            "name": "testDictionary",
            "optional": false,
            "typeAnnotation": null,
            "start": 692,
            "end": 706
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
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
                    "start": 710,
                    "end": 711
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Dictionary",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 720,
                      "end": 730
                    },
                    "typeArguments": null,
                    "start": 720,
                    "end": 730
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 710,
                  "end": 730
                }
              ],
              "start": 709,
              "end": 731
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "_value",
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
                      "start": 740,
                      "end": 741
                    },
                    "typeArguments": null,
                    "start": 740,
                    "end": 741
                  },
                  "start": 738,
                  "end": 741
                },
                "start": 732,
                "end": 741
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 746,
              "end": 749
            },
            "id": null,
            "generator": false,
            "start": 709,
            "end": 749
          },
          "definite": false,
          "start": 692,
          "end": 749
        }
      ],
      "declare": false,
      "start": 686,
      "end": 750
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
            "name": "d1",
            "optional": false,
            "typeAnnotation": null,
            "start": 758,
            "end": 760
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 763,
            "end": 765
          },
          "definite": false,
          "start": 758,
          "end": 765
        }
      ],
      "declare": false,
      "start": 752,
      "end": 766
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "testDictionary",
          "optional": false,
          "typeAnnotation": null,
          "start": 767,
          "end": 781
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "d1",
            "optional": false,
            "typeAnnotation": null,
            "start": 782,
            "end": 784
          }
        ],
        "optional": false,
        "start": 767,
        "end": 785
      },
      "directive": null,
      "start": 767,
      "end": 786
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
            "name": "d2",
            "optional": false,
            "typeAnnotation": null,
            "start": 793,
            "end": 795
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "intersectDictionaries",
              "optional": false,
              "typeAnnotation": null,
              "start": 798,
              "end": 819
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "d1",
                "optional": false,
                "typeAnnotation": null,
                "start": 820,
                "end": 822
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "d1",
                "optional": false,
                "typeAnnotation": null,
                "start": 824,
                "end": 826
              }
            ],
            "optional": false,
            "start": 798,
            "end": 827
          },
          "definite": false,
          "start": 793,
          "end": 827
        }
      ],
      "declare": false,
      "start": 787,
      "end": 828
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "testDictionary",
          "optional": false,
          "typeAnnotation": null,
          "start": 829,
          "end": 843
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "d2",
            "optional": false,
            "typeAnnotation": null,
            "start": 844,
            "end": 846
          }
        ],
        "optional": false,
        "start": 829,
        "end": 847
      },
      "directive": null,
      "start": 829,
      "end": 848
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
            "name": "d3",
            "optional": false,
            "typeAnnotation": null,
            "start": 856,
            "end": 858
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 865,
                  "end": 866
                },
                "value": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 868,
                  "end": 870
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 865,
                "end": 870
              }
            ],
            "start": 861,
            "end": 873
          },
          "definite": false,
          "start": 856,
          "end": 873
        }
      ],
      "declare": false,
      "start": 850,
      "end": 874
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "testDictionary",
          "optional": false,
          "typeAnnotation": null,
          "start": 875,
          "end": 889
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "d3",
            "optional": false,
            "typeAnnotation": null,
            "start": 890,
            "end": 892
          }
        ],
        "optional": false,
        "start": 875,
        "end": 893
      },
      "directive": null,
      "start": 875,
      "end": 894
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
            "name": "d4",
            "optional": false,
            "typeAnnotation": null,
            "start": 901,
            "end": 903
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "intersectDictionaries",
              "optional": false,
              "typeAnnotation": null,
              "start": 906,
              "end": 927
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "d1",
                "optional": false,
                "typeAnnotation": null,
                "start": 928,
                "end": 930
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "d3",
                "optional": false,
                "typeAnnotation": null,
                "start": 932,
                "end": 934
              }
            ],
            "optional": false,
            "start": 906,
            "end": 935
          },
          "definite": false,
          "start": 901,
          "end": 935
        }
      ],
      "declare": false,
      "start": 895,
      "end": 936
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "testDictionary",
          "optional": false,
          "typeAnnotation": null,
          "start": 937,
          "end": 951
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "d4",
            "optional": false,
            "typeAnnotation": null,
            "start": 952,
            "end": 954
          }
        ],
        "optional": false,
        "start": 937,
        "end": 955
      },
      "directive": null,
      "start": 937,
      "end": 956
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
            "name": "d5",
            "optional": false,
            "typeAnnotation": null,
            "start": 963,
            "end": 965
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "intersectDictionaries",
              "optional": false,
              "typeAnnotation": null,
              "start": 968,
              "end": 989
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "d3",
                "optional": false,
                "typeAnnotation": null,
                "start": 990,
                "end": 992
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "d1",
                "optional": false,
                "typeAnnotation": null,
                "start": 994,
                "end": 996
              }
            ],
            "optional": false,
            "start": 968,
            "end": 997
          },
          "definite": false,
          "start": 963,
          "end": 997
        }
      ],
      "declare": false,
      "start": 957,
      "end": 998
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "testDictionary",
          "optional": false,
          "typeAnnotation": null,
          "start": 999,
          "end": 1013
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "d5",
            "optional": false,
            "typeAnnotation": null,
            "start": 1014,
            "end": 1016
          }
        ],
        "optional": false,
        "start": 999,
        "end": 1017
      },
      "directive": null,
      "start": 999,
      "end": 1018
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
            "name": "d6",
            "optional": false,
            "typeAnnotation": null,
            "start": 1025,
            "end": 1027
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "intersectDictionaries",
              "optional": false,
              "typeAnnotation": null,
              "start": 1030,
              "end": 1051
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "d3",
                "optional": false,
                "typeAnnotation": null,
                "start": 1052,
                "end": 1054
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "d3",
                "optional": false,
                "typeAnnotation": null,
                "start": 1056,
                "end": 1058
              }
            ],
            "optional": false,
            "start": 1030,
            "end": 1059
          },
          "definite": false,
          "start": 1025,
          "end": 1059
        }
      ],
      "declare": false,
      "start": 1019,
      "end": 1060
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "testDictionary",
          "optional": false,
          "typeAnnotation": null,
          "start": 1061,
          "end": 1075
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "d6",
            "optional": false,
            "typeAnnotation": null,
            "start": 1076,
            "end": 1078
          }
        ],
        "optional": false,
        "start": 1061,
        "end": 1079
      },
      "directive": null,
      "start": 1061,
      "end": 1080
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "choices",
        "optional": false,
        "typeAnnotation": null,
        "start": 1109,
        "end": 1116
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "IChoiceList",
              "optional": false,
              "typeAnnotation": null,
              "start": 1117,
              "end": 1128
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1149,
                          "end": 1155
                        },
                        "start": 1147,
                        "end": 1155
                      },
                      "start": 1144,
                      "end": 1155
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 1158,
                      "end": 1165
                    },
                    "start": 1156,
                    "end": 1165
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 1143,
                  "end": 1166
                }
              ],
              "start": 1137,
              "end": 1168
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1117,
            "end": 1168
          }
        ],
        "start": 1116,
        "end": 1169
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "IChoiceList",
              "optional": false,
              "typeAnnotation": null,
              "start": 1172,
              "end": 1183
            },
            "typeArguments": null,
            "start": 1172,
            "end": 1183
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
                  "name": "shoes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1192,
                  "end": 1197
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 1198,
                    "end": 1205
                  },
                  "start": 1197,
                  "end": 1205
                },
                "accessibility": null,
                "static": false,
                "start": 1192,
                "end": 1206
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "food",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1211,
                  "end": 1215
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 1216,
                    "end": 1223
                  },
                  "start": 1215,
                  "end": 1223
                },
                "accessibility": null,
                "static": false,
                "start": 1211,
                "end": 1224
              }
            ],
            "start": 1186,
            "end": 1226
          }
        ],
        "start": 1172,
        "end": 1226
      },
      "declare": false,
      "start": 1104,
      "end": 1227
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IMyChoiceList",
        "optional": false,
        "typeAnnotation": null,
        "start": 1234,
        "end": 1247
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
              "name": "car",
              "optional": false,
              "typeAnnotation": null,
              "start": 1256,
              "end": 1259
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 1261,
                  "end": 1265
                },
                "start": 1261,
                "end": 1265
              },
              "start": 1259,
              "end": 1265
            },
            "accessibility": null,
            "static": false,
            "start": 1256,
            "end": 1265
          }
        ],
        "start": 1250,
        "end": 1267
      },
      "declare": false,
      "start": 1229,
      "end": 1268
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IUnknownChoiceList",
        "optional": false,
        "typeAnnotation": null,
        "start": 1275,
        "end": 1293
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [],
        "start": 1296,
        "end": 1298
      },
      "declare": false,
      "start": 1270,
      "end": 1299
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultChoices",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "choices",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1321,
                  "end": 1328
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "start": 1329,
                      "end": 1331
                    }
                  ],
                  "start": 1328,
                  "end": 1332
                },
                "start": 1321,
                "end": 1332
              },
              "start": 1319,
              "end": 1332
            },
            "start": 1305,
            "end": 1332
          },
          "init": null,
          "definite": false,
          "start": 1305,
          "end": 1332
        }
      ],
      "declare": false,
      "start": 1301,
      "end": 1333
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultChoicesAndEmpty",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "choices",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1362,
                  "end": 1369
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSIntersectionType",
                      "types": [
                        {
                          "type": "TSTypeLiteral",
                          "members": [],
                          "start": 1370,
                          "end": 1372
                        },
                        {
                          "type": "TSTypeLiteral",
                          "members": [],
                          "start": 1375,
                          "end": 1377
                        }
                      ],
                      "start": 1370,
                      "end": 1377
                    }
                  ],
                  "start": 1369,
                  "end": 1378
                },
                "start": 1362,
                "end": 1378
              },
              "start": 1360,
              "end": 1378
            },
            "start": 1338,
            "end": 1378
          },
          "init": null,
          "definite": false,
          "start": 1338,
          "end": 1378
        }
      ],
      "declare": false,
      "start": 1334,
      "end": 1379
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "myChoices",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "choices",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1396,
                  "end": 1403
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IMyChoiceList",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1404,
                        "end": 1417
                      },
                      "typeArguments": null,
                      "start": 1404,
                      "end": 1417
                    }
                  ],
                  "start": 1403,
                  "end": 1418
                },
                "start": 1396,
                "end": 1418
              },
              "start": 1394,
              "end": 1418
            },
            "start": 1385,
            "end": 1418
          },
          "init": null,
          "definite": false,
          "start": 1385,
          "end": 1418
        }
      ],
      "declare": false,
      "start": 1381,
      "end": 1419
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "myChoicesAndEmpty",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "choices",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1443,
                  "end": 1450
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
                            "name": "IMyChoiceList",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1451,
                            "end": 1464
                          },
                          "typeArguments": null,
                          "start": 1451,
                          "end": 1464
                        },
                        {
                          "type": "TSTypeLiteral",
                          "members": [],
                          "start": 1467,
                          "end": 1469
                        }
                      ],
                      "start": 1451,
                      "end": 1469
                    }
                  ],
                  "start": 1450,
                  "end": 1470
                },
                "start": 1443,
                "end": 1470
              },
              "start": 1441,
              "end": 1470
            },
            "start": 1424,
            "end": 1470
          },
          "init": null,
          "definite": false,
          "start": 1424,
          "end": 1470
        }
      ],
      "declare": false,
      "start": 1420,
      "end": 1471
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "unknownChoices",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "choices",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1493,
                  "end": 1500
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IUnknownChoiceList",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1501,
                        "end": 1519
                      },
                      "typeArguments": null,
                      "start": 1501,
                      "end": 1519
                    }
                  ],
                  "start": 1500,
                  "end": 1520
                },
                "start": 1493,
                "end": 1520
              },
              "start": 1491,
              "end": 1520
            },
            "start": 1477,
            "end": 1520
          },
          "init": null,
          "definite": false,
          "start": 1477,
          "end": 1520
        }
      ],
      "declare": false,
      "start": 1473,
      "end": 1521
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "unknownChoicesAndEmpty",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "choices",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1550,
                  "end": 1557
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
                            "name": "IUnknownChoiceList",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1558,
                            "end": 1576
                          },
                          "typeArguments": null,
                          "start": 1558,
                          "end": 1576
                        },
                        {
                          "type": "TSTypeLiteral",
                          "members": [],
                          "start": 1579,
                          "end": 1581
                        }
                      ],
                      "start": 1558,
                      "end": 1581
                    }
                  ],
                  "start": 1557,
                  "end": 1582
                },
                "start": 1550,
                "end": 1582
              },
              "start": 1548,
              "end": 1582
            },
            "start": 1526,
            "end": 1582
          },
          "init": null,
          "definite": false,
          "start": 1526,
          "end": 1582
        }
      ],
      "declare": false,
      "start": 1522,
      "end": 1583
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1612,
        "end": 1616
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1621,
                  "end": 1622
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1624,
                    "end": 1630
                  },
                  "start": 1622,
                  "end": 1630
                },
                "accessibility": null,
                "static": false,
                "start": 1621,
                "end": 1630
              }
            ],
            "start": 1619,
            "end": 1632
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSIndexSignature",
                "parameters": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1641,
                        "end": 1647
                      },
                      "start": 1639,
                      "end": 1647
                    },
                    "start": 1638,
                    "end": 1647
                  }
                ],
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1650,
                      "end": 1654
                    },
                    "typeArguments": null,
                    "start": 1650,
                    "end": 1654
                  },
                  "start": 1648,
                  "end": 1654
                },
                "readonly": false,
                "static": false,
                "accessibility": null,
                "start": 1637,
                "end": 1654
              }
            ],
            "start": 1635,
            "end": 1656
          }
        ],
        "start": 1619,
        "end": 1656
      },
      "declare": false,
      "start": 1607,
      "end": 1657
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1663,
        "end": 1667
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1672,
                  "end": 1673
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1675,
                    "end": 1681
                  },
                  "start": 1673,
                  "end": 1681
                },
                "accessibility": null,
                "static": false,
                "start": 1672,
                "end": 1681
              }
            ],
            "start": 1670,
            "end": 1683
          },
          {
            "type": "TSMappedType",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 1689,
              "end": 1690
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 1694,
              "end": 1700
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1703,
                "end": 1707
              },
              "typeArguments": null,
              "start": 1703,
              "end": 1707
            },
            "optional": false,
            "readonly": null,
            "start": 1686,
            "end": 1709
          }
        ],
        "start": 1670,
        "end": 1709
      },
      "declare": false,
      "start": 1658,
      "end": 1710
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mock",
        "optional": false,
        "typeAnnotation": null,
        "start": 1751,
        "end": 1755
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
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 1756,
              "end": 1757
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1756,
            "end": 1757
          }
        ],
        "start": 1755,
        "end": 1758
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 1762,
                "end": 1769
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "M",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1770,
                      "end": 1771
                    },
                    "typeArguments": null,
                    "start": 1770,
                    "end": 1771
                  }
                ],
                "start": 1769,
                "end": 1772
              },
              "start": 1762,
              "end": 1772
            },
            "start": 1760,
            "end": 1772
          },
          "start": 1759,
          "end": 1772
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 1775,
              "end": 1777
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null,
                "start": 1780,
                "end": 1781
              },
              "typeArguments": null,
              "start": 1780,
              "end": 1781
            }
          ],
          "start": 1775,
          "end": 1781
        },
        "start": 1773,
        "end": 1781
      },
      "body": null,
      "expression": false,
      "start": 1734,
      "end": 1782
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "mock",
          "optional": false,
          "typeAnnotation": null,
          "start": 1783,
          "end": 1787
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ImportExpression",
            "source": {
              "type": "Literal",
              "value": "./ex",
              "raw": "'./ex'",
              "start": 1795,
              "end": 1801
            },
            "options": null,
            "phase": null,
            "start": 1788,
            "end": 1802
          }
        ],
        "optional": false,
        "start": 1783,
        "end": 1803
      },
      "directive": null,
      "start": 1783,
      "end": 1803
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 103,
  "end": 1804
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 103,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 117,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 124,
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
    "value": "type",
    "start": 127,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 141,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 151,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 162,
    "end": 163
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 165,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "x01",
    "start": 169,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 172,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 176,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 179,
    "end": 180
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 181,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "x02",
    "start": 185,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 188,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 192,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 195,
    "end": 196
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 197,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "x03",
    "start": 201,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 204,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 211,
    "end": 212
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 213,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "x04",
    "start": 217,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 224,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 228,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 231,
    "end": 232
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 233,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "x05",
    "start": 237,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 240,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 242,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 249,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 252,
    "end": 253
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 254,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "x06",
    "start": 258,
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
    "value": "C",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 265,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 267,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 273,
    "end": 274
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 275,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "x07",
    "start": 279,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 282,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 285,
    "end": 286
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 287,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "x08",
    "start": 291,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 294,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 302,
    "end": 303
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 304,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "x09",
    "start": 308,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 316,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 325,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 334,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 342,
    "end": 343
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 345,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 358,
    "end": 359
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 360,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 373,
    "end": 374
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 376,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "x10",
    "start": 380,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 383,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 387,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 389,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 390,
    "end": 391
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 392,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "x11",
    "start": 396,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 399,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 403,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 406,
    "end": 407
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 408,
    "end": 411
  },
  {
    "type": "Identifier",
    "value": "x12",
    "start": 412,
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
    "value": "A",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 419,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "B",
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
    "value": "C",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 427,
    "end": 428
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 429,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 430,
    "end": 431
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 432,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "x13",
    "start": 436,
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
    "value": "D",
    "start": 441,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 443,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 446,
    "end": 447
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 448,
    "end": 451
  },
  {
    "type": "Identifier",
    "value": "x14",
    "start": 452,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 455,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 457,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 459,
    "end": 460
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 463,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 465,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 467,
    "end": 468
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 471,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "E",
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
    "value": "type",
    "start": 499,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "Dictionary",
    "start": 504,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 517,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 519,
    "end": 520
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 520,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 524,
    "end": 525
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 526,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 532,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 533,
    "end": 534
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 535,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 542,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 543,
    "end": 544
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 546,
    "end": 551
  },
  {
    "type": "Identifier",
    "value": "intersectDictionaries",
    "start": 552,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 574,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 576,
    "end": 577
  },
  {
    "type": "Identifier",
    "value": "F1",
    "start": 577,
    "end": 579
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 580,
    "end": 587
  },
  {
    "type": "Identifier",
    "value": "Dictionary",
    "start": 588,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 598,
    "end": 599
  },
  {
    "type": "Identifier",
    "value": "F2",
    "start": 600,
    "end": 602
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 603,
    "end": 610
  },
  {
    "type": "Identifier",
    "value": "Dictionary",
    "start": 611,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 621,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 622,
    "end": 623
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 626,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 628,
    "end": 629
  },
  {
    "type": "Identifier",
    "value": "F1",
    "start": 630,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 632,
    "end": 633
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 636,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 638,
    "end": 639
  },
  {
    "type": "Identifier",
    "value": "F2",
    "start": 640,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 642,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 644,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 645,
    "end": 646
  },
  {
    "type": "Identifier",
    "value": "F1",
    "start": 647,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 650,
    "end": 651
  },
  {
    "type": "Identifier",
    "value": "F2",
    "start": 652,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 655,
    "end": 657
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 658,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 664,
    "end": 665
  },
  {
    "type": "Identifier",
    "value": "assign",
    "start": 665,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 671,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 672,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 673,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 674,
    "end": 675
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 676,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 678,
    "end": 679
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 680,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 682,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 683,
    "end": 684
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 686,
    "end": 691
  },
  {
    "type": "Identifier",
    "value": "testDictionary",
    "start": 692,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 707,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 709,
    "end": 710
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 710,
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
    "value": "Dictionary",
    "start": 720,
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
    "value": "(",
    "start": 731,
    "end": 732
  },
  {
    "type": "Identifier",
    "value": "_value",
    "start": 732,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 738,
    "end": 739
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 740,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 741,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 743,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 746,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 748,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 749,
    "end": 750
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 752,
    "end": 757
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 758,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 761,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 763,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 764,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 765,
    "end": 766
  },
  {
    "type": "Identifier",
    "value": "testDictionary",
    "start": 767,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 781,
    "end": 782
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 782,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 784,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 785,
    "end": 786
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 787,
    "end": 792
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 793,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 796,
    "end": 797
  },
  {
    "type": "Identifier",
    "value": "intersectDictionaries",
    "start": 798,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 819,
    "end": 820
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 820,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 822,
    "end": 823
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 824,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Identifier",
    "value": "testDictionary",
    "start": 829,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 843,
    "end": 844
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 844,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "const",
    "start": 850,
    "end": 855
  },
  {
    "type": "Identifier",
    "value": "d3",
    "start": 856,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 859,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 861,
    "end": 862
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 865,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 866,
    "end": 867
  },
  {
    "type": "String",
    "value": "''",
    "start": 868,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 870,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 872,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 873,
    "end": 874
  },
  {
    "type": "Identifier",
    "value": "testDictionary",
    "start": 875,
    "end": 889
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 889,
    "end": 890
  },
  {
    "type": "Identifier",
    "value": "d3",
    "start": 890,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 892,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 893,
    "end": 894
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 895,
    "end": 900
  },
  {
    "type": "Identifier",
    "value": "d4",
    "start": 901,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 904,
    "end": 905
  },
  {
    "type": "Identifier",
    "value": "intersectDictionaries",
    "start": 906,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 927,
    "end": 928
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 928,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 930,
    "end": 931
  },
  {
    "type": "Identifier",
    "value": "d3",
    "start": 932,
    "end": 934
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 934,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 935,
    "end": 936
  },
  {
    "type": "Identifier",
    "value": "testDictionary",
    "start": 937,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 951,
    "end": 952
  },
  {
    "type": "Identifier",
    "value": "d4",
    "start": 952,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "const",
    "start": 957,
    "end": 962
  },
  {
    "type": "Identifier",
    "value": "d5",
    "start": 963,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 966,
    "end": 967
  },
  {
    "type": "Identifier",
    "value": "intersectDictionaries",
    "start": 968,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 989,
    "end": 990
  },
  {
    "type": "Identifier",
    "value": "d3",
    "start": 990,
    "end": 992
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 992,
    "end": 993
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 994,
    "end": 996
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 996,
    "end": 997
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 997,
    "end": 998
  },
  {
    "type": "Identifier",
    "value": "testDictionary",
    "start": 999,
    "end": 1013
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1013,
    "end": 1014
  },
  {
    "type": "Identifier",
    "value": "d5",
    "start": 1014,
    "end": 1016
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1019,
    "end": 1024
  },
  {
    "type": "Identifier",
    "value": "d6",
    "start": 1025,
    "end": 1027
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1028,
    "end": 1029
  },
  {
    "type": "Identifier",
    "value": "intersectDictionaries",
    "start": 1030,
    "end": 1051
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Identifier",
    "value": "d3",
    "start": 1052,
    "end": 1054
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Identifier",
    "value": "d3",
    "start": 1056,
    "end": 1058
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1058,
    "end": 1059
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1059,
    "end": 1060
  },
  {
    "type": "Identifier",
    "value": "testDictionary",
    "start": 1061,
    "end": 1075
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1075,
    "end": 1076
  },
  {
    "type": "Identifier",
    "value": "d6",
    "start": 1076,
    "end": 1078
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1078,
    "end": 1079
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1104,
    "end": 1108
  },
  {
    "type": "Identifier",
    "value": "choices",
    "start": 1109,
    "end": 1116
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1116,
    "end": 1117
  },
  {
    "type": "Identifier",
    "value": "IChoiceList",
    "start": 1117,
    "end": 1128
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1129,
    "end": 1136
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1143,
    "end": 1144
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1144,
    "end": 1147
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1147,
    "end": 1148
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1149,
    "end": 1155
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1155,
    "end": 1156
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1156,
    "end": 1157
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1158,
    "end": 1165
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1165,
    "end": 1166
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1168,
    "end": 1169
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Identifier",
    "value": "IChoiceList",
    "start": 1172,
    "end": 1183
  },
  {
    "type": "Punctuator",
    "value": "&",
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
    "type": "Identifier",
    "value": "shoes",
    "start": 1192,
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
    "value": "boolean",
    "start": 1198,
    "end": 1205
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1205,
    "end": 1206
  },
  {
    "type": "Identifier",
    "value": "food",
    "start": 1211,
    "end": 1215
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1216,
    "end": 1223
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1225,
    "end": 1226
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1226,
    "end": 1227
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1229,
    "end": 1233
  },
  {
    "type": "Identifier",
    "value": "IMyChoiceList",
    "start": 1234,
    "end": 1247
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1248,
    "end": 1249
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1250,
    "end": 1251
  },
  {
    "type": "Identifier",
    "value": "car",
    "start": 1256,
    "end": 1259
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1259,
    "end": 1260
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1261,
    "end": 1265
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1267,
    "end": 1268
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1270,
    "end": 1274
  },
  {
    "type": "Identifier",
    "value": "IUnknownChoiceList",
    "start": 1275,
    "end": 1293
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1294,
    "end": 1295
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1296,
    "end": 1297
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1297,
    "end": 1298
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1298,
    "end": 1299
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1301,
    "end": 1304
  },
  {
    "type": "Identifier",
    "value": "defaultChoices",
    "start": 1305,
    "end": 1319
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1319,
    "end": 1320
  },
  {
    "type": "Identifier",
    "value": "choices",
    "start": 1321,
    "end": 1328
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1328,
    "end": 1329
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1329,
    "end": 1330
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1330,
    "end": 1331
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1331,
    "end": 1332
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1332,
    "end": 1333
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1334,
    "end": 1337
  },
  {
    "type": "Identifier",
    "value": "defaultChoicesAndEmpty",
    "start": 1338,
    "end": 1360
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1360,
    "end": 1361
  },
  {
    "type": "Identifier",
    "value": "choices",
    "start": 1362,
    "end": 1369
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1369,
    "end": 1370
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1370,
    "end": 1371
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1371,
    "end": 1372
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1373,
    "end": 1374
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1375,
    "end": 1376
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1376,
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
    "value": ";",
    "start": 1378,
    "end": 1379
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1381,
    "end": 1384
  },
  {
    "type": "Identifier",
    "value": "myChoices",
    "start": 1385,
    "end": 1394
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1394,
    "end": 1395
  },
  {
    "type": "Identifier",
    "value": "choices",
    "start": 1396,
    "end": 1403
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1403,
    "end": 1404
  },
  {
    "type": "Identifier",
    "value": "IMyChoiceList",
    "start": 1404,
    "end": 1417
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1417,
    "end": 1418
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1418,
    "end": 1419
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1420,
    "end": 1423
  },
  {
    "type": "Identifier",
    "value": "myChoicesAndEmpty",
    "start": 1424,
    "end": 1441
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1441,
    "end": 1442
  },
  {
    "type": "Identifier",
    "value": "choices",
    "start": 1443,
    "end": 1450
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1450,
    "end": 1451
  },
  {
    "type": "Identifier",
    "value": "IMyChoiceList",
    "start": 1451,
    "end": 1464
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1465,
    "end": 1466
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1467,
    "end": 1468
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1468,
    "end": 1469
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1469,
    "end": 1470
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1470,
    "end": 1471
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1473,
    "end": 1476
  },
  {
    "type": "Identifier",
    "value": "unknownChoices",
    "start": 1477,
    "end": 1491
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1491,
    "end": 1492
  },
  {
    "type": "Identifier",
    "value": "choices",
    "start": 1493,
    "end": 1500
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1500,
    "end": 1501
  },
  {
    "type": "Identifier",
    "value": "IUnknownChoiceList",
    "start": 1501,
    "end": 1519
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1519,
    "end": 1520
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1520,
    "end": 1521
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1522,
    "end": 1525
  },
  {
    "type": "Identifier",
    "value": "unknownChoicesAndEmpty",
    "start": 1526,
    "end": 1548
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1548,
    "end": 1549
  },
  {
    "type": "Identifier",
    "value": "choices",
    "start": 1550,
    "end": 1557
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1557,
    "end": 1558
  },
  {
    "type": "Identifier",
    "value": "IUnknownChoiceList",
    "start": 1558,
    "end": 1576
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1577,
    "end": 1578
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1579,
    "end": 1580
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1580,
    "end": 1581
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1581,
    "end": 1582
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1582,
    "end": 1583
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1607,
    "end": 1611
  },
  {
    "type": "Identifier",
    "value": "Foo1",
    "start": 1612,
    "end": 1616
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1617,
    "end": 1618
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1619,
    "end": 1620
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "string",
    "start": 1624,
    "end": 1630
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1631,
    "end": 1632
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1633,
    "end": 1634
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1635,
    "end": 1636
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1637,
    "end": 1638
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1638,
    "end": 1639
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1639,
    "end": 1640
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1641,
    "end": 1647
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1647,
    "end": 1648
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1648,
    "end": 1649
  },
  {
    "type": "Identifier",
    "value": "Foo1",
    "start": 1650,
    "end": 1654
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1655,
    "end": 1656
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1656,
    "end": 1657
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1658,
    "end": 1662
  },
  {
    "type": "Identifier",
    "value": "Foo2",
    "start": 1663,
    "end": 1667
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1668,
    "end": 1669
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1670,
    "end": 1671
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1672,
    "end": 1673
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1673,
    "end": 1674
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1675,
    "end": 1681
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1682,
    "end": 1683
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1684,
    "end": 1685
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1686,
    "end": 1687
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1688,
    "end": 1689
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1689,
    "end": 1690
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1691,
    "end": 1693
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1694,
    "end": 1700
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1700,
    "end": 1701
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1701,
    "end": 1702
  },
  {
    "type": "Identifier",
    "value": "Foo2",
    "start": 1703,
    "end": 1707
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1708,
    "end": 1709
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1709,
    "end": 1710
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1734,
    "end": 1741
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1742,
    "end": 1750
  },
  {
    "type": "Identifier",
    "value": "mock",
    "start": 1751,
    "end": 1755
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1755,
    "end": 1756
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 1756,
    "end": 1757
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1757,
    "end": 1758
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1758,
    "end": 1759
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 1759,
    "end": 1760
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1760,
    "end": 1761
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1762,
    "end": 1769
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1769,
    "end": 1770
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 1770,
    "end": 1771
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1771,
    "end": 1772
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Punctuator",
    "value": "}",
    "start": 1776,
    "end": 1777
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1778,
    "end": 1779
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 1780,
    "end": 1781
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1781,
    "end": 1782
  },
  {
    "type": "Identifier",
    "value": "mock",
    "start": 1783,
    "end": 1787
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1787,
    "end": 1788
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1788,
    "end": 1794
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1794,
    "end": 1795
  },
  {
    "type": "String",
    "value": "'./ex'",
    "start": 1795,
    "end": 1801
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1801,
    "end": 1802
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1802,
    "end": 1803
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 9
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 9
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8,
    "end": 9
  }
]
```
