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
        "name": "A1",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 7
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSLiteralType",
        "literal": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 10,
          "end": 11
        },
        "start": 10,
        "end": 11
      },
      "declare": false,
      "start": 0,
      "end": 12
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A2",
        "optional": false,
        "typeAnnotation": null,
        "start": 18,
        "end": 20
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSLiteralType",
        "literal": {
          "type": "Literal",
          "value": 1,
          "raw": "1.0",
          "start": 23,
          "end": 26
        },
        "start": 23,
        "end": 26
      },
      "declare": false,
      "start": 13,
      "end": 27
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A3",
        "optional": false,
        "typeAnnotation": null,
        "start": 33,
        "end": 35
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSLiteralType",
        "literal": {
          "type": "Literal",
          "value": 1,
          "raw": "1e0",
          "start": 38,
          "end": 41
        },
        "start": 38,
        "end": 41
      },
      "declare": false,
      "start": 28,
      "end": 42
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A4",
        "optional": false,
        "typeAnnotation": null,
        "start": 48,
        "end": 50
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSLiteralType",
        "literal": {
          "type": "Literal",
          "value": 1,
          "raw": "10e-1",
          "start": 53,
          "end": 58
        },
        "start": 53,
        "end": 58
      },
      "declare": false,
      "start": 43,
      "end": 59
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A5",
        "optional": false,
        "typeAnnotation": null,
        "start": 65,
        "end": 67
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 70,
              "end": 71
            },
            "start": 70,
            "end": 71
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 1,
              "raw": "1.0",
              "start": 74,
              "end": 77
            },
            "start": 74,
            "end": 77
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 1,
              "raw": "1e0",
              "start": 80,
              "end": 83
            },
            "start": 80,
            "end": 83
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 1,
              "raw": "10e-1",
              "start": 86,
              "end": 91
            },
            "start": 86,
            "end": 91
          }
        ],
        "start": 70,
        "end": 91
      },
      "declare": false,
      "start": 60,
      "end": 92
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 103,
        "end": 105
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
            "type": "VariableDeclaration",
            "kind": "var",
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
                        "name": "A1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 121,
                        "end": 123
                      },
                      "typeArguments": null,
                      "start": 121,
                      "end": 123
                    },
                    "start": 119,
                    "end": 123
                  },
                  "start": 118,
                  "end": 123
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 126,
                  "end": 127
                },
                "definite": false,
                "start": 118,
                "end": 127
              }
            ],
            "declare": false,
            "start": 114,
            "end": 128
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 140,
                        "end": 142
                      },
                      "typeArguments": null,
                      "start": 140,
                      "end": 142
                    },
                    "start": 138,
                    "end": 142
                  },
                  "start": 137,
                  "end": 142
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 145,
                  "end": 146
                },
                "definite": false,
                "start": 137,
                "end": 146
              }
            ],
            "declare": false,
            "start": 133,
            "end": 147
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 159,
                        "end": 161
                      },
                      "typeArguments": null,
                      "start": 159,
                      "end": 161
                    },
                    "start": 157,
                    "end": 161
                  },
                  "start": 156,
                  "end": 161
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 164,
                  "end": 165
                },
                "definite": false,
                "start": 156,
                "end": 165
              }
            ],
            "declare": false,
            "start": 152,
            "end": 166
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 178,
                        "end": 180
                      },
                      "typeArguments": null,
                      "start": 178,
                      "end": 180
                    },
                    "start": 176,
                    "end": 180
                  },
                  "start": 175,
                  "end": 180
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 183,
                  "end": 184
                },
                "definite": false,
                "start": 175,
                "end": 184
              }
            ],
            "declare": false,
            "start": 171,
            "end": 185
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A5",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 197,
                        "end": 199
                      },
                      "typeArguments": null,
                      "start": 197,
                      "end": 199
                    },
                    "start": 195,
                    "end": 199
                  },
                  "start": 194,
                  "end": 199
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 202,
                  "end": 203
                },
                "definite": false,
                "start": 194,
                "end": 203
              }
            ],
            "declare": false,
            "start": 190,
            "end": 204
          }
        ],
        "start": 108,
        "end": 206
      },
      "expression": false,
      "start": 94,
      "end": 206
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B1",
        "optional": false,
        "typeAnnotation": null,
        "start": 213,
        "end": 215
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "UnaryExpression",
              "operator": "-",
              "argument": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 219,
                "end": 220
              },
              "prefix": true,
              "start": 218,
              "end": 220
            },
            "start": 218,
            "end": 220
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 223,
              "end": 224
            },
            "start": 223,
            "end": 224
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 227,
              "end": 228
            },
            "start": 227,
            "end": 228
          }
        ],
        "start": 218,
        "end": 228
      },
      "declare": false,
      "start": 208,
      "end": 229
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B2",
        "optional": false,
        "typeAnnotation": null,
        "start": 235,
        "end": 237
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 240,
              "end": 241
            },
            "start": 240,
            "end": 241
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 244,
              "end": 245
            },
            "start": 244,
            "end": 245
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "UnaryExpression",
              "operator": "-",
              "argument": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 249,
                "end": 250
              },
              "prefix": true,
              "start": 248,
              "end": 250
            },
            "start": 248,
            "end": 250
          }
        ],
        "start": 240,
        "end": 250
      },
      "declare": false,
      "start": 230,
      "end": 251
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B3",
        "optional": false,
        "typeAnnotation": null,
        "start": 257,
        "end": 259
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 262,
              "end": 263
            },
            "start": 262,
            "end": 263
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "UnaryExpression",
              "operator": "-",
              "argument": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 267,
                "end": 268
              },
              "prefix": true,
              "start": 266,
              "end": 268
            },
            "start": 266,
            "end": 268
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 271,
              "end": 272
            },
            "start": 271,
            "end": 272
          }
        ],
        "start": 262,
        "end": 272
      },
      "declare": false,
      "start": 252,
      "end": 273
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 284,
        "end": 286
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
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 302,
                        "end": 304
                      },
                      "typeArguments": null,
                      "start": 302,
                      "end": 304
                    },
                    "start": 300,
                    "end": 304
                  },
                  "start": 299,
                  "end": 304
                },
                "init": {
                  "type": "UnaryExpression",
                  "operator": "-",
                  "argument": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 308,
                    "end": 309
                  },
                  "prefix": true,
                  "start": 307,
                  "end": 309
                },
                "definite": false,
                "start": 299,
                "end": 309
              }
            ],
            "declare": false,
            "start": 295,
            "end": 310
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 322,
                        "end": 324
                      },
                      "typeArguments": null,
                      "start": 322,
                      "end": 324
                    },
                    "start": 320,
                    "end": 324
                  },
                  "start": 319,
                  "end": 324
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 327,
                  "end": 328
                },
                "definite": false,
                "start": 319,
                "end": 328
              }
            ],
            "declare": false,
            "start": 315,
            "end": 329
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 341,
                        "end": 343
                      },
                      "typeArguments": null,
                      "start": 341,
                      "end": 343
                    },
                    "start": 339,
                    "end": 343
                  },
                  "start": 338,
                  "end": 343
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 346,
                  "end": 347
                },
                "definite": false,
                "start": 338,
                "end": 347
              }
            ],
            "declare": false,
            "start": 334,
            "end": 348
          }
        ],
        "start": 289,
        "end": 350
      },
      "expression": false,
      "start": 275,
      "end": 350
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 361,
        "end": 363
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
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 367,
                "end": 368
              },
              "start": 367,
              "end": 368
            },
            "start": 365,
            "end": 368
          },
          "start": 364,
          "end": 368
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 373,
                    "end": 374
                  },
                  "start": 373,
                  "end": 374
                },
                {
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
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 381,
                    "end": 382
                  },
                  "start": 381,
                  "end": 382
                }
              ],
              "start": 373,
              "end": 382
            },
            "start": 371,
            "end": 382
          },
          "start": 370,
          "end": 382
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 394,
                  "end": 395
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 398,
                    "end": 399
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 402,
                    "end": 403
                  },
                  "start": 398,
                  "end": 403
                },
                "definite": false,
                "start": 394,
                "end": 403
              }
            ],
            "declare": false,
            "start": 390,
            "end": 404
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 413,
                  "end": 414
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 417,
                    "end": 418
                  },
                  "operator": "-",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 421,
                    "end": 422
                  },
                  "start": 417,
                  "end": 422
                },
                "definite": false,
                "start": 413,
                "end": 422
              }
            ],
            "declare": false,
            "start": 409,
            "end": 423
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 432,
                  "end": 433
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 436,
                    "end": 437
                  },
                  "operator": "*",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 440,
                    "end": 441
                  },
                  "start": 436,
                  "end": 441
                },
                "definite": false,
                "start": 432,
                "end": 441
              }
            ],
            "declare": false,
            "start": 428,
            "end": 442
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 451,
                  "end": 452
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 455,
                    "end": 456
                  },
                  "operator": "/",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 459,
                    "end": 460
                  },
                  "start": 455,
                  "end": 460
                },
                "definite": false,
                "start": 451,
                "end": 460
              }
            ],
            "declare": false,
            "start": 447,
            "end": 461
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 470,
                  "end": 471
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 474,
                    "end": 475
                  },
                  "operator": "%",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 478,
                    "end": 479
                  },
                  "start": 474,
                  "end": 479
                },
                "definite": false,
                "start": 470,
                "end": 479
              }
            ],
            "declare": false,
            "start": 466,
            "end": 480
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 489,
                  "end": 490
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 493,
                    "end": 494
                  },
                  "operator": "|",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 497,
                    "end": 498
                  },
                  "start": 493,
                  "end": 498
                },
                "definite": false,
                "start": 489,
                "end": 498
              }
            ],
            "declare": false,
            "start": 485,
            "end": 499
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 508,
                  "end": 509
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 512,
                    "end": 513
                  },
                  "operator": "&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 516,
                    "end": 517
                  },
                  "start": 512,
                  "end": 517
                },
                "definite": false,
                "start": 508,
                "end": 517
              }
            ],
            "declare": false,
            "start": 504,
            "end": 518
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 527,
                  "end": 528
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 531,
                    "end": 532
                  },
                  "operator": "^",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 535,
                    "end": 536
                  },
                  "start": 531,
                  "end": 536
                },
                "definite": false,
                "start": 527,
                "end": 536
              }
            ],
            "declare": false,
            "start": 523,
            "end": 537
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 546,
                  "end": 547
                },
                "init": {
                  "type": "UnaryExpression",
                  "operator": "-",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 551,
                    "end": 552
                  },
                  "prefix": true,
                  "start": 550,
                  "end": 552
                },
                "definite": false,
                "start": 546,
                "end": 552
              }
            ],
            "declare": false,
            "start": 542,
            "end": 553
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 562,
                  "end": 563
                },
                "init": {
                  "type": "UnaryExpression",
                  "operator": "~",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 567,
                    "end": 568
                  },
                  "prefix": true,
                  "start": 566,
                  "end": 568
                },
                "definite": false,
                "start": 562,
                "end": 568
              }
            ],
            "declare": false,
            "start": 558,
            "end": 569
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 578,
                  "end": 579
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 582,
                    "end": 583
                  },
                  "operator": "==",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 587,
                    "end": 588
                  },
                  "start": 582,
                  "end": 588
                },
                "definite": false,
                "start": 578,
                "end": 588
              }
            ],
            "declare": false,
            "start": 574,
            "end": 589
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 598,
                  "end": 599
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 602,
                    "end": 603
                  },
                  "operator": "!=",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 607,
                    "end": 608
                  },
                  "start": 602,
                  "end": 608
                },
                "definite": false,
                "start": 598,
                "end": 608
              }
            ],
            "declare": false,
            "start": 594,
            "end": 609
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 618,
                  "end": 619
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 622,
                    "end": 623
                  },
                  "operator": "===",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 628,
                    "end": 629
                  },
                  "start": 622,
                  "end": 629
                },
                "definite": false,
                "start": 618,
                "end": 629
              }
            ],
            "declare": false,
            "start": 614,
            "end": 630
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 639,
                  "end": 640
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 643,
                    "end": 644
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 649,
                    "end": 650
                  },
                  "start": 643,
                  "end": 650
                },
                "definite": false,
                "start": 639,
                "end": 650
              }
            ],
            "declare": false,
            "start": 635,
            "end": 651
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 660,
                  "end": 661
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 664,
                    "end": 665
                  },
                  "operator": ">",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 668,
                    "end": 669
                  },
                  "start": 664,
                  "end": 669
                },
                "definite": false,
                "start": 660,
                "end": 669
              }
            ],
            "declare": false,
            "start": 656,
            "end": 670
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 679,
                  "end": 680
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 683,
                    "end": 684
                  },
                  "operator": "<",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 687,
                    "end": 688
                  },
                  "start": 683,
                  "end": 688
                },
                "definite": false,
                "start": 679,
                "end": 688
              }
            ],
            "declare": false,
            "start": 675,
            "end": 689
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 698,
                  "end": 699
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 702,
                    "end": 703
                  },
                  "operator": ">=",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 707,
                    "end": 708
                  },
                  "start": 702,
                  "end": 708
                },
                "definite": false,
                "start": 698,
                "end": 708
              }
            ],
            "declare": false,
            "start": 694,
            "end": 709
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 718,
                  "end": 719
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 722,
                    "end": 723
                  },
                  "operator": "<=",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 727,
                    "end": 728
                  },
                  "start": 722,
                  "end": 728
                },
                "definite": false,
                "start": 718,
                "end": 728
              }
            ],
            "declare": false,
            "start": 714,
            "end": 729
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 738,
                  "end": 739
                },
                "init": {
                  "type": "UnaryExpression",
                  "operator": "!",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 743,
                    "end": 744
                  },
                  "prefix": true,
                  "start": 742,
                  "end": 744
                },
                "definite": false,
                "start": 738,
                "end": 744
              }
            ],
            "declare": false,
            "start": 734,
            "end": 745
          }
        ],
        "start": 384,
        "end": 747
      },
      "expression": false,
      "start": 352,
      "end": 747
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 758,
        "end": 760
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
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 764,
                "end": 765
              },
              "start": 764,
              "end": 765
            },
            "start": 762,
            "end": 765
          },
          "start": 761,
          "end": 765
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 770,
                    "end": 771
                  },
                  "start": 770,
                  "end": 771
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 774,
                    "end": 775
                  },
                  "start": 774,
                  "end": 775
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 778,
                    "end": 779
                  },
                  "start": 778,
                  "end": 779
                }
              ],
              "start": 770,
              "end": 779
            },
            "start": 768,
            "end": 779
          },
          "start": 767,
          "end": 779
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 787,
                "end": 788
              },
              "start": 787,
              "end": 790
            },
            "directive": null,
            "start": 787,
            "end": 791
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 796,
                "end": 797
              },
              "start": 796,
              "end": 799
            },
            "directive": null,
            "start": 796,
            "end": 800
          }
        ],
        "start": 781,
        "end": 802
      },
      "expression": false,
      "start": 749,
      "end": 802
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 821,
        "end": 822
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 826,
                "end": 827
              },
              "start": 826,
              "end": 827
            },
            "start": 824,
            "end": 827
          },
          "start": 823,
          "end": 827
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 830,
          "end": 836
        },
        "start": 828,
        "end": 836
      },
      "body": null,
      "expression": false,
      "start": 804,
      "end": 837
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 855,
        "end": 856
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 860,
                "end": 861
              },
              "start": 860,
              "end": 861
            },
            "start": 858,
            "end": 861
          },
          "start": 857,
          "end": 861
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 864,
          "end": 871
        },
        "start": 862,
        "end": 871
      },
      "body": null,
      "expression": false,
      "start": 838,
      "end": 872
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 890,
        "end": 891
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 895,
              "end": 901
            },
            "start": 893,
            "end": 901
          },
          "start": 892,
          "end": 901
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 904,
          "end": 910
        },
        "start": 902,
        "end": 910
      },
      "body": null,
      "expression": false,
      "start": 873,
      "end": 911
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 922,
        "end": 924
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
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 928,
                "end": 929
              },
              "start": 928,
              "end": 929
            },
            "start": 926,
            "end": 929
          },
          "start": 925,
          "end": 929
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 934,
                    "end": 935
                  },
                  "start": 934,
                  "end": 935
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 938,
                    "end": 939
                  },
                  "start": 938,
                  "end": 939
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 942,
                    "end": 943
                  },
                  "start": 942,
                  "end": 943
                }
              ],
              "start": 934,
              "end": 943
            },
            "start": 932,
            "end": 943
          },
          "start": 931,
          "end": 943
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 955,
                  "end": 957
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "g",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 960,
                    "end": 961
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 962,
                      "end": 963
                    }
                  ],
                  "optional": false,
                  "start": 960,
                  "end": 964
                },
                "definite": false,
                "start": 955,
                "end": 964
              }
            ],
            "declare": false,
            "start": 951,
            "end": 965
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
                  "name": "z2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 974,
                  "end": 976
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "g",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 979,
                    "end": 980
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 981,
                      "end": 982
                    }
                  ],
                  "optional": false,
                  "start": 979,
                  "end": 983
                },
                "definite": false,
                "start": 974,
                "end": 983
              }
            ],
            "declare": false,
            "start": 970,
            "end": 984
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
                  "name": "z3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 993,
                  "end": 995
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "g",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 998,
                    "end": 999
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 1000,
                      "end": 1001
                    }
                  ],
                  "optional": false,
                  "start": 998,
                  "end": 1002
                },
                "definite": false,
                "start": 993,
                "end": 1002
              }
            ],
            "declare": false,
            "start": 989,
            "end": 1003
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
                  "name": "z4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1012,
                  "end": 1014
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "g",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1017,
                    "end": 1018
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1019,
                      "end": 1020
                    }
                  ],
                  "optional": false,
                  "start": 1017,
                  "end": 1021
                },
                "definite": false,
                "start": 1012,
                "end": 1021
              }
            ],
            "declare": false,
            "start": 1008,
            "end": 1022
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
                  "name": "z5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1031,
                  "end": 1033
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "g",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1036,
                    "end": 1037
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1038,
                      "end": 1039
                    }
                  ],
                  "optional": false,
                  "start": 1036,
                  "end": 1040
                },
                "definite": false,
                "start": 1031,
                "end": 1040
              }
            ],
            "declare": false,
            "start": 1027,
            "end": 1041
          }
        ],
        "start": 945,
        "end": 1043
      },
      "expression": false,
      "start": 913,
      "end": 1043
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "assertNever",
        "optional": false,
        "typeAnnotation": null,
        "start": 1054,
        "end": 1065
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSNeverKeyword",
              "start": 1069,
              "end": 1074
            },
            "start": 1067,
            "end": 1074
          },
          "start": 1066,
          "end": 1074
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNeverKeyword",
          "start": 1077,
          "end": 1082
        },
        "start": 1075,
        "end": 1082
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ThrowStatement",
            "argument": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Error",
                "optional": false,
                "typeAnnotation": null,
                "start": 1099,
                "end": 1104
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "Unexpected value",
                  "raw": "\"Unexpected value\"",
                  "start": 1105,
                  "end": 1123
                }
              ],
              "start": 1095,
              "end": 1124
            },
            "start": 1089,
            "end": 1125
          }
        ],
        "start": 1083,
        "end": 1127
      },
      "expression": false,
      "start": 1045,
      "end": 1127
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Tag",
        "optional": false,
        "typeAnnotation": null,
        "start": 1134,
        "end": 1137
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
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
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1144,
              "end": 1145
            },
            "start": 1144,
            "end": 1145
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 1148,
              "end": 1149
            },
            "start": 1148,
            "end": 1149
          }
        ],
        "start": 1140,
        "end": 1149
      },
      "declare": false,
      "start": 1129,
      "end": 1150
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1161,
        "end": 1164
      },
      "generator": false,
      "async": false,
      "declare": false,
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
                "name": "Tag",
                "optional": false,
                "typeAnnotation": null,
                "start": 1168,
                "end": 1171
              },
              "typeArguments": null,
              "start": 1168,
              "end": 1171
            },
            "start": 1166,
            "end": 1171
          },
          "start": 1165,
          "end": 1171
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1187,
              "end": 1188
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 1205,
                  "end": 1206
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "a",
                      "raw": "\"a\"",
                      "start": 1215,
                      "end": 1218
                    },
                    "start": 1208,
                    "end": 1219
                  }
                ],
                "start": 1200,
                "end": 1219
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1233,
                  "end": 1234
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "b",
                      "raw": "\"b\"",
                      "start": 1243,
                      "end": 1246
                    },
                    "start": 1236,
                    "end": 1247
                  }
                ],
                "start": 1228,
                "end": 1247
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 1261,
                  "end": 1262
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "c",
                      "raw": "\"c\"",
                      "start": 1271,
                      "end": 1274
                    },
                    "start": 1264,
                    "end": 1275
                  }
                ],
                "start": 1256,
                "end": 1275
              }
            ],
            "start": 1179,
            "end": 1281
          }
        ],
        "start": 1173,
        "end": 1283
      },
      "expression": false,
      "start": 1152,
      "end": 1283
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1294,
        "end": 1297
      },
      "generator": false,
      "async": false,
      "declare": false,
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
                "name": "Tag",
                "optional": false,
                "typeAnnotation": null,
                "start": 1301,
                "end": 1304
              },
              "typeArguments": null,
              "start": 1301,
              "end": 1304
            },
            "start": 1299,
            "end": 1304
          },
          "start": 1298,
          "end": 1304
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1320,
              "end": 1321
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 1338,
                  "end": 1339
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "a",
                      "raw": "\"a\"",
                      "start": 1348,
                      "end": 1351
                    },
                    "start": 1341,
                    "end": 1352
                  }
                ],
                "start": 1333,
                "end": 1352
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1366,
                  "end": 1367
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "b",
                      "raw": "\"b\"",
                      "start": 1376,
                      "end": 1379
                    },
                    "start": 1369,
                    "end": 1380
                  }
                ],
                "start": 1361,
                "end": 1380
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 1394,
                  "end": 1395
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "c",
                      "raw": "\"c\"",
                      "start": 1404,
                      "end": 1407
                    },
                    "start": 1397,
                    "end": 1408
                  }
                ],
                "start": 1389,
                "end": 1408
              }
            ],
            "start": 1312,
            "end": 1414
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "assertNever",
                "optional": false,
                "typeAnnotation": null,
                "start": 1426,
                "end": 1437
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1438,
                  "end": 1439
                }
              ],
              "optional": false,
              "start": 1426,
              "end": 1440
            },
            "start": 1419,
            "end": 1441
          }
        ],
        "start": 1306,
        "end": 1443
      },
      "expression": false,
      "start": 1285,
      "end": 1443
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1454,
        "end": 1457
      },
      "generator": false,
      "async": false,
      "declare": false,
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
                "name": "Tag",
                "optional": false,
                "typeAnnotation": null,
                "start": 1461,
                "end": 1464
              },
              "typeArguments": null,
              "start": 1461,
              "end": 1464
            },
            "start": 1459,
            "end": 1464
          },
          "start": 1458,
          "end": 1464
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1476,
              "end": 1477
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1489,
                    "end": 1490
                  },
                  "directive": null,
                  "start": 1489,
                  "end": 1491
                }
              ],
              "start": 1479,
              "end": 1497
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1517,
                    "end": 1518
                  },
                  "directive": null,
                  "start": 1517,
                  "end": 1519
                }
              ],
              "start": 1507,
              "end": 1525
            },
            "start": 1472,
            "end": 1525
          }
        ],
        "start": 1466,
        "end": 1527
      },
      "expression": false,
      "start": 1445,
      "end": 1527
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f13",
        "optional": false,
        "typeAnnotation": null,
        "start": 1538,
        "end": 1541
      },
      "generator": false,
      "async": false,
      "declare": false,
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
                "name": "Tag",
                "optional": false,
                "typeAnnotation": null,
                "start": 1545,
                "end": 1548
              },
              "typeArguments": null,
              "start": 1545,
              "end": 1548
            },
            "start": 1543,
            "end": 1548
          },
          "start": 1542,
          "end": 1548
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1560,
                  "end": 1561
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 1566,
                  "end": 1567
                },
                "start": 1560,
                "end": 1567
              },
              "operator": "||",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1571,
                  "end": 1572
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 1577,
                  "end": 1578
                },
                "start": 1571,
                "end": 1578
              },
              "start": 1560,
              "end": 1578
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1590,
                    "end": 1591
                  },
                  "directive": null,
                  "start": 1590,
                  "end": 1592
                }
              ],
              "start": 1580,
              "end": 1598
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1618,
                    "end": 1619
                  },
                  "directive": null,
                  "start": 1618,
                  "end": 1620
                }
              ],
              "start": 1608,
              "end": 1626
            },
            "start": 1556,
            "end": 1626
          }
        ],
        "start": 1550,
        "end": 1628
      },
      "expression": false,
      "start": 1529,
      "end": 1628
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f14",
        "optional": false,
        "typeAnnotation": null,
        "start": 1639,
        "end": 1642
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 1646,
                    "end": 1647
                  },
                  "start": 1646,
                  "end": 1647
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1650,
                    "end": 1651
                  },
                  "start": 1650,
                  "end": 1651
                },
                {
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
                }
              ],
              "start": 1646,
              "end": 1655
            },
            "start": 1644,
            "end": 1655
          },
          "start": 1643,
          "end": 1655
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1660,
              "end": 1666
            },
            "start": 1658,
            "end": 1666
          },
          "start": 1657,
          "end": 1666
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1678,
                  "end": 1679
                },
                "init": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1682,
                    "end": 1683
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1687,
                    "end": 1688
                  },
                  "start": 1682,
                  "end": 1688
                },
                "definite": false,
                "start": 1678,
                "end": 1688
              }
            ],
            "declare": false,
            "start": 1674,
            "end": 1689
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1698,
                  "end": 1699
                },
                "init": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1702,
                    "end": 1703
                  },
                  "operator": "||",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1707,
                    "end": 1708
                  },
                  "start": 1702,
                  "end": 1708
                },
                "definite": false,
                "start": 1698,
                "end": 1708
              }
            ],
            "declare": false,
            "start": 1694,
            "end": 1709
          }
        ],
        "start": 1668,
        "end": 1711
      },
      "expression": false,
      "start": 1630,
      "end": 1711
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f15",
        "optional": false,
        "typeAnnotation": null,
        "start": 1722,
        "end": 1725
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 1729,
                    "end": 1730
                  },
                  "start": 1729,
                  "end": 1730
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 1733,
                    "end": 1738
                  },
                  "start": 1733,
                  "end": 1738
                }
              ],
              "start": 1729,
              "end": 1738
            },
            "start": 1727,
            "end": 1738
          },
          "start": 1726,
          "end": 1738
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1743,
                    "end": 1744
                  },
                  "start": 1743,
                  "end": 1744
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "one",
                    "raw": "\"one\"",
                    "start": 1747,
                    "end": 1752
                  },
                  "start": 1747,
                  "end": 1752
                }
              ],
              "start": 1743,
              "end": 1752
            },
            "start": 1741,
            "end": 1752
          },
          "start": 1740,
          "end": 1752
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1764,
                  "end": 1765
                },
                "init": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1768,
                    "end": 1769
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1773,
                    "end": 1774
                  },
                  "start": 1768,
                  "end": 1774
                },
                "definite": false,
                "start": 1764,
                "end": 1774
              }
            ],
            "declare": false,
            "start": 1760,
            "end": 1775
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1784,
                  "end": 1785
                },
                "init": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1788,
                    "end": 1789
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1793,
                    "end": 1794
                  },
                  "start": 1788,
                  "end": 1794
                },
                "definite": false,
                "start": 1784,
                "end": 1794
              }
            ],
            "declare": false,
            "start": 1780,
            "end": 1795
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
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1804,
                  "end": 1805
                },
                "init": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1808,
                    "end": 1809
                  },
                  "operator": "||",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1813,
                    "end": 1814
                  },
                  "start": 1808,
                  "end": 1814
                },
                "definite": false,
                "start": 1804,
                "end": 1814
              }
            ],
            "declare": false,
            "start": 1800,
            "end": 1815
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
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1824,
                  "end": 1825
                },
                "init": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1828,
                    "end": 1829
                  },
                  "operator": "||",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1833,
                    "end": 1834
                  },
                  "start": 1828,
                  "end": 1834
                },
                "definite": false,
                "start": 1824,
                "end": 1834
              }
            ],
            "declare": false,
            "start": 1820,
            "end": 1835
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
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1844,
                  "end": 1845
                },
                "init": {
                  "type": "UnaryExpression",
                  "operator": "!",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1849,
                    "end": 1850
                  },
                  "prefix": true,
                  "start": 1848,
                  "end": 1850
                },
                "definite": false,
                "start": 1844,
                "end": 1850
              }
            ],
            "declare": false,
            "start": 1840,
            "end": 1851
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
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1860,
                  "end": 1861
                },
                "init": {
                  "type": "UnaryExpression",
                  "operator": "!",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1865,
                    "end": 1866
                  },
                  "prefix": true,
                  "start": 1864,
                  "end": 1866
                },
                "definite": false,
                "start": 1860,
                "end": 1866
              }
            ],
            "declare": false,
            "start": 1856,
            "end": 1867
          }
        ],
        "start": 1754,
        "end": 1869
      },
      "expression": false,
      "start": 1713,
      "end": 1869
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Item",
        "optional": false,
        "typeAnnotation": null,
        "start": 1876,
        "end": 1880
      },
      "typeParameters": null,
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
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1889,
                  "end": 1893
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 1895,
                      "end": 1896
                    },
                    "start": 1895,
                    "end": 1896
                  },
                  "start": 1893,
                  "end": 1896
                },
                "accessibility": null,
                "static": false,
                "start": 1889,
                "end": 1897
              },
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
                  "start": 1898,
                  "end": 1899
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1901,
                    "end": 1907
                  },
                  "start": 1899,
                  "end": 1907
                },
                "accessibility": null,
                "static": false,
                "start": 1898,
                "end": 1907
              }
            ],
            "start": 1887,
            "end": 1909
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
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1918,
                  "end": 1922
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1924,
                      "end": 1925
                    },
                    "start": 1924,
                    "end": 1925
                  },
                  "start": 1922,
                  "end": 1925
                },
                "accessibility": null,
                "static": false,
                "start": 1918,
                "end": 1926
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
                  "start": 1927,
                  "end": 1928
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1930,
                    "end": 1936
                  },
                  "start": 1928,
                  "end": 1936
                },
                "accessibility": null,
                "static": false,
                "start": 1927,
                "end": 1936
              }
            ],
            "start": 1916,
            "end": 1938
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
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1947,
                  "end": 1951
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 1953,
                      "end": 1954
                    },
                    "start": 1953,
                    "end": 1954
                  },
                  "start": 1951,
                  "end": 1954
                },
                "accessibility": null,
                "static": false,
                "start": 1947,
                "end": 1955
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1956,
                  "end": 1957
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1959,
                    "end": 1965
                  },
                  "start": 1957,
                  "end": 1965
                },
                "accessibility": null,
                "static": false,
                "start": 1956,
                "end": 1965
              }
            ],
            "start": 1945,
            "end": 1967
          }
        ],
        "start": 1887,
        "end": 1967
      },
      "declare": false,
      "start": 1871,
      "end": 1968
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f20",
        "optional": false,
        "typeAnnotation": null,
        "start": 1979,
        "end": 1982
      },
      "generator": false,
      "async": false,
      "declare": false,
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
                "name": "Item",
                "optional": false,
                "typeAnnotation": null,
                "start": 1986,
                "end": 1990
              },
              "typeArguments": null,
              "start": 1986,
              "end": 1990
            },
            "start": 1984,
            "end": 1990
          },
          "start": 1983,
          "end": 1990
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2006,
                "end": 2007
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 2008,
                "end": 2012
              },
              "optional": false,
              "computed": false,
              "start": 2006,
              "end": 2012
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 2029,
                  "end": 2030
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2039,
                        "end": 2040
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2041,
                        "end": 2042
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2039,
                      "end": 2042
                    },
                    "start": 2032,
                    "end": 2043
                  }
                ],
                "start": 2024,
                "end": 2043
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 2057,
                  "end": 2058
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2067,
                        "end": 2068
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2069,
                        "end": 2070
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2067,
                      "end": 2070
                    },
                    "start": 2060,
                    "end": 2071
                  }
                ],
                "start": 2052,
                "end": 2071
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 2085,
                  "end": 2086
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2095,
                        "end": 2096
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2097,
                        "end": 2098
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2095,
                      "end": 2098
                    },
                    "start": 2088,
                    "end": 2099
                  }
                ],
                "start": 2080,
                "end": 2099
              }
            ],
            "start": 1998,
            "end": 2105
          }
        ],
        "start": 1992,
        "end": 2107
      },
      "expression": false,
      "start": 1970,
      "end": 2107
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f21",
        "optional": false,
        "typeAnnotation": null,
        "start": 2118,
        "end": 2121
      },
      "generator": false,
      "async": false,
      "declare": false,
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
                "name": "Item",
                "optional": false,
                "typeAnnotation": null,
                "start": 2125,
                "end": 2129
              },
              "typeArguments": null,
              "start": 2125,
              "end": 2129
            },
            "start": 2123,
            "end": 2129
          },
          "start": 2122,
          "end": 2129
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2145,
                "end": 2146
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 2147,
                "end": 2151
              },
              "optional": false,
              "computed": false,
              "start": 2145,
              "end": 2151
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 2168,
                  "end": 2169
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2178,
                        "end": 2179
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2180,
                        "end": 2181
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2178,
                      "end": 2181
                    },
                    "start": 2171,
                    "end": 2182
                  }
                ],
                "start": 2163,
                "end": 2182
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 2196,
                  "end": 2197
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2206,
                        "end": 2207
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2208,
                        "end": 2209
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2206,
                      "end": 2209
                    },
                    "start": 2199,
                    "end": 2210
                  }
                ],
                "start": 2191,
                "end": 2210
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 2224,
                  "end": 2225
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2234,
                        "end": 2235
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2236,
                        "end": 2237
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2234,
                      "end": 2237
                    },
                    "start": 2227,
                    "end": 2238
                  }
                ],
                "start": 2219,
                "end": 2238
              }
            ],
            "start": 2137,
            "end": 2244
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "assertNever",
                "optional": false,
                "typeAnnotation": null,
                "start": 2256,
                "end": 2267
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2268,
                  "end": 2269
                }
              ],
              "optional": false,
              "start": 2256,
              "end": 2270
            },
            "start": 2249,
            "end": 2271
          }
        ],
        "start": 2131,
        "end": 2273
      },
      "expression": false,
      "start": 2109,
      "end": 2273
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2273
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
    "value": "A1",
    "start": 5,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8,
    "end": 9
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 11,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 13,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "A2",
    "start": 18,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 21,
    "end": 22
  },
  {
    "type": "Numeric",
    "value": "1.0",
    "start": 23,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 28,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "A3",
    "start": 33,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 36,
    "end": 37
  },
  {
    "type": "Numeric",
    "value": "1e0",
    "start": 38,
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
    "value": "type",
    "start": 43,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "A4",
    "start": 48,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 51,
    "end": 52
  },
  {
    "type": "Numeric",
    "value": "10e-1",
    "start": 53,
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
    "start": 60,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "A5",
    "start": 65,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 68,
    "end": 69
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 72,
    "end": 73
  },
  {
    "type": "Numeric",
    "value": "1.0",
    "start": 74,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 78,
    "end": 79
  },
  {
    "type": "Numeric",
    "value": "1e0",
    "start": 80,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 84,
    "end": 85
  },
  {
    "type": "Numeric",
    "value": "10e-1",
    "start": 86,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 91,
    "end": 92
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 94,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 103,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 108,
    "end": 109
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 114,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 119,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "A1",
    "start": 121,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 124,
    "end": 125
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 127,
    "end": 128
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 133,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "value": "A2",
    "start": 140,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 143,
    "end": 144
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 146,
    "end": 147
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 152,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "A3",
    "start": 159,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 162,
    "end": 163
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 165,
    "end": 166
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 171,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 176,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "A4",
    "start": 178,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 181,
    "end": 182
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 184,
    "end": 185
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 190,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 195,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "A5",
    "start": 197,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 200,
    "end": 201
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "type": "Punctuator",
    "value": "}",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 208,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "B1",
    "start": 213,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 218,
    "end": 219
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 221,
    "end": 222
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 225,
    "end": 226
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 228,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 230,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "B2",
    "start": 235,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 238,
    "end": 239
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 242,
    "end": 243
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 248,
    "end": 249
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 250,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 252,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "B3",
    "start": 257,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 260,
    "end": 261
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 266,
    "end": 267
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 269,
    "end": 270
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 271,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 272,
    "end": 273
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 275,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 284,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 289,
    "end": 290
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 295,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 300,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "B1",
    "start": 302,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 307,
    "end": 308
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 309,
    "end": 310
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 315,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 320,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "B2",
    "start": 322,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 325,
    "end": 326
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 328,
    "end": 329
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 334,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 339,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "B3",
    "start": 341,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 344,
    "end": 345
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 349,
    "end": 350
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 352,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 361,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 363,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 365,
    "end": 366
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 368,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 371,
    "end": 372
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "|",
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
    "value": "|",
    "start": 379,
    "end": 380
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 384,
    "end": 385
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 390,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 396,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 398,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 400,
    "end": 401
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 403,
    "end": 404
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 409,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 415,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 419,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 421,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 422,
    "end": 423
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 428,
    "end": 431
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 434,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 438,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 441,
    "end": 442
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 447,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 451,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 453,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 457,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 460,
    "end": 461
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 466,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 470,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 472,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": "%",
    "start": 476,
    "end": 477
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 478,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 479,
    "end": 480
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 485,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 489,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 491,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 493,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 495,
    "end": 496
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 497,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 498,
    "end": 499
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 504,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 508,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 510,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 514,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 517,
    "end": 518
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 523,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 529,
    "end": 530
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 531,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": "^",
    "start": 533,
    "end": 534
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 535,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 536,
    "end": 537
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 542,
    "end": 545
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 546,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 548,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 550,
    "end": 551
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 551,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 552,
    "end": 553
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 558,
    "end": 561
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 562,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 564,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": "~",
    "start": 566,
    "end": 567
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 567,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 568,
    "end": 569
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 574,
    "end": 577
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 578,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 580,
    "end": 581
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 582,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 584,
    "end": 586
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 588,
    "end": 589
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 594,
    "end": 597
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 598,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 600,
    "end": 601
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 602,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 604,
    "end": 606
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 607,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 608,
    "end": 609
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 614,
    "end": 617
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 618,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 620,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 622,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 624,
    "end": 627
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 628,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 629,
    "end": 630
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 635,
    "end": 638
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 639,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 641,
    "end": 642
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 643,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 645,
    "end": 648
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 649,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 650,
    "end": 651
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 656,
    "end": 659
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 660,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 662,
    "end": 663
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 664,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 666,
    "end": 667
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 668,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 669,
    "end": 670
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 675,
    "end": 678
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 679,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 681,
    "end": 682
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 683,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 685,
    "end": 686
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "type": "Keyword",
    "value": "var",
    "start": 694,
    "end": 697
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 698,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 700,
    "end": 701
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 702,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 704,
    "end": 706
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 707,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 708,
    "end": 709
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 714,
    "end": 717
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 718,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 720,
    "end": 721
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 722,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": "<=",
    "start": 724,
    "end": 726
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 727,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 728,
    "end": 729
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 734,
    "end": 737
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 738,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 740,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 742,
    "end": 743
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "type": "Punctuator",
    "value": "}",
    "start": 746,
    "end": 747
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 749,
    "end": 757
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 758,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 760,
    "end": 761
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 761,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 762,
    "end": 763
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "value": "b",
    "start": 767,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 768,
    "end": 769
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 770,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 772,
    "end": 773
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 774,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 776,
    "end": 777
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 778,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 779,
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
    "value": "a",
    "start": 787,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 788,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 790,
    "end": 791
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 796,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 797,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 799,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 801,
    "end": 802
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 804,
    "end": 811
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 812,
    "end": 820
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 821,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 822,
    "end": 823
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 823,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 824,
    "end": 825
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 826,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 827,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 828,
    "end": 829
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 830,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 836,
    "end": 837
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 838,
    "end": 845
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 846,
    "end": 854
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 855,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 856,
    "end": 857
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 857,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 858,
    "end": 859
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 860,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 861,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 862,
    "end": 863
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 864,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 871,
    "end": 872
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 873,
    "end": 880
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 881,
    "end": 889
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 890,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 891,
    "end": 892
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 892,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 893,
    "end": 894
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 895,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 901,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 902,
    "end": 903
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 904,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 910,
    "end": 911
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 913,
    "end": 921
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 922,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 924,
    "end": 925
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 925,
    "end": 926
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 926,
    "end": 927
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 928,
    "end": 929
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 929,
    "end": 930
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 931,
    "end": 932
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 932,
    "end": 933
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 934,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 936,
    "end": 937
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 938,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 940,
    "end": 941
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 942,
    "end": 943
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 943,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 945,
    "end": 946
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 951,
    "end": 954
  },
  {
    "type": "Identifier",
    "value": "z1",
    "start": 955,
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
    "value": "g",
    "start": 960,
    "end": 961
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 961,
    "end": 962
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 962,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 963,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 964,
    "end": 965
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 970,
    "end": 973
  },
  {
    "type": "Identifier",
    "value": "z2",
    "start": 974,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 977,
    "end": 978
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 979,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 980,
    "end": 981
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 981,
    "end": 982
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 982,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 983,
    "end": 984
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 989,
    "end": 992
  },
  {
    "type": "Identifier",
    "value": "z3",
    "start": 993,
    "end": 995
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 996,
    "end": 997
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 998,
    "end": 999
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1001,
    "end": 1002
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1008,
    "end": 1011
  },
  {
    "type": "Identifier",
    "value": "z4",
    "start": 1012,
    "end": 1014
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1021,
    "end": 1022
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1027,
    "end": 1030
  },
  {
    "type": "Identifier",
    "value": "z5",
    "start": 1031,
    "end": 1033
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 1036,
    "end": 1037
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1045,
    "end": 1053
  },
  {
    "type": "Identifier",
    "value": "assertNever",
    "start": 1054,
    "end": 1065
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1065,
    "end": 1066
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1066,
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
    "value": "never",
    "start": 1069,
    "end": 1074
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1074,
    "end": 1075
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1075,
    "end": 1076
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1077,
    "end": 1082
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1083,
    "end": 1084
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 1089,
    "end": 1094
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1095,
    "end": 1098
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 1099,
    "end": 1104
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "String",
    "value": "\"Unexpected value\"",
    "start": 1105,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1123,
    "end": 1124
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1126,
    "end": 1127
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1129,
    "end": 1133
  },
  {
    "type": "Identifier",
    "value": "Tag",
    "start": 1134,
    "end": 1137
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1138,
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
    "value": "|",
    "start": 1142,
    "end": 1143
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1144,
    "end": 1145
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1146,
    "end": 1147
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1148,
    "end": 1149
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1149,
    "end": 1150
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1152,
    "end": 1160
  },
  {
    "type": "Identifier",
    "value": "f10",
    "start": 1161,
    "end": 1164
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1164,
    "end": 1165
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1165,
    "end": 1166
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1166,
    "end": 1167
  },
  {
    "type": "Identifier",
    "value": "Tag",
    "start": 1168,
    "end": 1171
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1171,
    "end": 1172
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1173,
    "end": 1174
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 1179,
    "end": 1185
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1187,
    "end": 1188
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1188,
    "end": 1189
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1190,
    "end": 1191
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1200,
    "end": 1204
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1205,
    "end": 1206
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1206,
    "end": 1207
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1208,
    "end": 1214
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 1215,
    "end": 1218
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1218,
    "end": 1219
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1228,
    "end": 1232
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1233,
    "end": 1234
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1234,
    "end": 1235
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1236,
    "end": 1242
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 1243,
    "end": 1246
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1246,
    "end": 1247
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1256,
    "end": 1260
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1261,
    "end": 1262
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1262,
    "end": 1263
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1264,
    "end": 1270
  },
  {
    "type": "String",
    "value": "\"c\"",
    "start": 1271,
    "end": 1274
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1274,
    "end": 1275
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1280,
    "end": 1281
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1282,
    "end": 1283
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1285,
    "end": 1293
  },
  {
    "type": "Identifier",
    "value": "f11",
    "start": 1294,
    "end": 1297
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1297,
    "end": 1298
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1298,
    "end": 1299
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1299,
    "end": 1300
  },
  {
    "type": "Identifier",
    "value": "Tag",
    "start": 1301,
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
    "value": "{",
    "start": 1306,
    "end": 1307
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 1312,
    "end": 1318
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1319,
    "end": 1320
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1320,
    "end": 1321
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1321,
    "end": 1322
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1323,
    "end": 1324
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1333,
    "end": 1337
  },
  {
    "type": "Numeric",
    "value": "0",
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
    "type": "Keyword",
    "value": "return",
    "start": 1341,
    "end": 1347
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 1348,
    "end": 1351
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1351,
    "end": 1352
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1361,
    "end": 1365
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1366,
    "end": 1367
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1367,
    "end": 1368
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1369,
    "end": 1375
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 1376,
    "end": 1379
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1379,
    "end": 1380
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1389,
    "end": 1393
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1394,
    "end": 1395
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1395,
    "end": 1396
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1397,
    "end": 1403
  },
  {
    "type": "String",
    "value": "\"c\"",
    "start": 1404,
    "end": 1407
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1407,
    "end": 1408
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1413,
    "end": 1414
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1419,
    "end": 1425
  },
  {
    "type": "Identifier",
    "value": "assertNever",
    "start": 1426,
    "end": 1437
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1437,
    "end": 1438
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1438,
    "end": 1439
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1439,
    "end": 1440
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1440,
    "end": 1441
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1442,
    "end": 1443
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1445,
    "end": 1453
  },
  {
    "type": "Identifier",
    "value": "f12",
    "start": 1454,
    "end": 1457
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1457,
    "end": 1458
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1458,
    "end": 1459
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1459,
    "end": 1460
  },
  {
    "type": "Identifier",
    "value": "Tag",
    "start": 1461,
    "end": 1464
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1464,
    "end": 1465
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1466,
    "end": 1467
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1472,
    "end": 1474
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1475,
    "end": 1476
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1476,
    "end": 1477
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1477,
    "end": 1478
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1479,
    "end": 1480
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1489,
    "end": 1490
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1490,
    "end": 1491
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1496,
    "end": 1497
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1502,
    "end": 1506
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1507,
    "end": 1508
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1517,
    "end": 1518
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1518,
    "end": 1519
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1524,
    "end": 1525
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1526,
    "end": 1527
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1529,
    "end": 1537
  },
  {
    "type": "Identifier",
    "value": "f13",
    "start": 1538,
    "end": 1541
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1541,
    "end": 1542
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1542,
    "end": 1543
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1543,
    "end": 1544
  },
  {
    "type": "Identifier",
    "value": "Tag",
    "start": 1545,
    "end": 1548
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1548,
    "end": 1549
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1550,
    "end": 1551
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1556,
    "end": 1558
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1559,
    "end": 1560
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1560,
    "end": 1561
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1562,
    "end": 1565
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1566,
    "end": 1567
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 1568,
    "end": 1570
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1571,
    "end": 1572
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1573,
    "end": 1576
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1577,
    "end": 1578
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1578,
    "end": 1579
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1580,
    "end": 1581
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1590,
    "end": 1591
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1591,
    "end": 1592
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1597,
    "end": 1598
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1603,
    "end": 1607
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1608,
    "end": 1609
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "start": 1625,
    "end": 1626
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1627,
    "end": 1628
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1630,
    "end": 1638
  },
  {
    "type": "Identifier",
    "value": "f14",
    "start": 1639,
    "end": 1642
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1642,
    "end": 1643
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1643,
    "end": 1644
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1644,
    "end": 1645
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1646,
    "end": 1647
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1648,
    "end": 1649
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1650,
    "end": 1651
  },
  {
    "type": "Punctuator",
    "value": "|",
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
    "value": "y",
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
    "type": "Identifier",
    "value": "string",
    "start": 1660,
    "end": 1666
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1666,
    "end": 1667
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1668,
    "end": 1669
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1674,
    "end": 1677
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1678,
    "end": 1679
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1680,
    "end": 1681
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1682,
    "end": 1683
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1684,
    "end": 1686
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1687,
    "end": 1688
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1688,
    "end": 1689
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1694,
    "end": 1697
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1698,
    "end": 1699
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1700,
    "end": 1701
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1702,
    "end": 1703
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 1704,
    "end": 1706
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1707,
    "end": 1708
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1708,
    "end": 1709
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1710,
    "end": 1711
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1713,
    "end": 1721
  },
  {
    "type": "Identifier",
    "value": "f15",
    "start": 1722,
    "end": 1725
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1725,
    "end": 1726
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1726,
    "end": 1727
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1727,
    "end": 1728
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1729,
    "end": 1730
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1731,
    "end": 1732
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1733,
    "end": 1738
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1738,
    "end": 1739
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1740,
    "end": 1741
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1741,
    "end": 1742
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1743,
    "end": 1744
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1745,
    "end": 1746
  },
  {
    "type": "String",
    "value": "\"one\"",
    "start": 1747,
    "end": 1752
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "var",
    "start": 1760,
    "end": 1763
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1764,
    "end": 1765
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1766,
    "end": 1767
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1768,
    "end": 1769
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1770,
    "end": 1772
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1773,
    "end": 1774
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1774,
    "end": 1775
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1780,
    "end": 1783
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1784,
    "end": 1785
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1786,
    "end": 1787
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1788,
    "end": 1789
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1790,
    "end": 1792
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1793,
    "end": 1794
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1794,
    "end": 1795
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1800,
    "end": 1803
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1804,
    "end": 1805
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1806,
    "end": 1807
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1808,
    "end": 1809
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 1810,
    "end": 1812
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1813,
    "end": 1814
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1814,
    "end": 1815
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1820,
    "end": 1823
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1824,
    "end": 1825
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1826,
    "end": 1827
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1828,
    "end": 1829
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 1830,
    "end": 1832
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1833,
    "end": 1834
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1834,
    "end": 1835
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1840,
    "end": 1843
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1844,
    "end": 1845
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1846,
    "end": 1847
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1848,
    "end": 1849
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1849,
    "end": 1850
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1850,
    "end": 1851
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1856,
    "end": 1859
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1860,
    "end": 1861
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1862,
    "end": 1863
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1864,
    "end": 1865
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1865,
    "end": 1866
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1866,
    "end": 1867
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1868,
    "end": 1869
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1871,
    "end": 1875
  },
  {
    "type": "Identifier",
    "value": "Item",
    "start": 1876,
    "end": 1880
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1881,
    "end": 1882
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1887,
    "end": 1888
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 1889,
    "end": 1893
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1893,
    "end": 1894
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1895,
    "end": 1896
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1896,
    "end": 1897
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1898,
    "end": 1899
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1899,
    "end": 1900
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1901,
    "end": 1907
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1908,
    "end": 1909
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1910,
    "end": 1911
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1916,
    "end": 1917
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 1918,
    "end": 1922
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1922,
    "end": 1923
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1924,
    "end": 1925
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1925,
    "end": 1926
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1927,
    "end": 1928
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1928,
    "end": 1929
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1930,
    "end": 1936
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1937,
    "end": 1938
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1939,
    "end": 1940
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1945,
    "end": 1946
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 1947,
    "end": 1951
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1951,
    "end": 1952
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1953,
    "end": 1954
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1954,
    "end": 1955
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1956,
    "end": 1957
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1957,
    "end": 1958
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1959,
    "end": 1965
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1966,
    "end": 1967
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1967,
    "end": 1968
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1970,
    "end": 1978
  },
  {
    "type": "Identifier",
    "value": "f20",
    "start": 1979,
    "end": 1982
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1982,
    "end": 1983
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1983,
    "end": 1984
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1984,
    "end": 1985
  },
  {
    "type": "Identifier",
    "value": "Item",
    "start": 1986,
    "end": 1990
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1990,
    "end": 1991
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1992,
    "end": 1993
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 1998,
    "end": 2004
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2005,
    "end": 2006
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2006,
    "end": 2007
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2007,
    "end": 2008
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 2008,
    "end": 2012
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2012,
    "end": 2013
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2014,
    "end": 2015
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 2024,
    "end": 2028
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2029,
    "end": 2030
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2030,
    "end": 2031
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2032,
    "end": 2038
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2039,
    "end": 2040
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2040,
    "end": 2041
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2041,
    "end": 2042
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2042,
    "end": 2043
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 2052,
    "end": 2056
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2057,
    "end": 2058
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2058,
    "end": 2059
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2060,
    "end": 2066
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2067,
    "end": 2068
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2068,
    "end": 2069
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2069,
    "end": 2070
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2070,
    "end": 2071
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 2080,
    "end": 2084
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2085,
    "end": 2086
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2086,
    "end": 2087
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2088,
    "end": 2094
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2095,
    "end": 2096
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2096,
    "end": 2097
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2097,
    "end": 2098
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2098,
    "end": 2099
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2104,
    "end": 2105
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2106,
    "end": 2107
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2109,
    "end": 2117
  },
  {
    "type": "Identifier",
    "value": "f21",
    "start": 2118,
    "end": 2121
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2121,
    "end": 2122
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2122,
    "end": 2123
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2123,
    "end": 2124
  },
  {
    "type": "Identifier",
    "value": "Item",
    "start": 2125,
    "end": 2129
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2129,
    "end": 2130
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2131,
    "end": 2132
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 2137,
    "end": 2143
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2144,
    "end": 2145
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2145,
    "end": 2146
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2146,
    "end": 2147
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 2147,
    "end": 2151
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2151,
    "end": 2152
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2153,
    "end": 2154
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 2163,
    "end": 2167
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2168,
    "end": 2169
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2169,
    "end": 2170
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2171,
    "end": 2177
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2178,
    "end": 2179
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2179,
    "end": 2180
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2180,
    "end": 2181
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2181,
    "end": 2182
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 2191,
    "end": 2195
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2196,
    "end": 2197
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2197,
    "end": 2198
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2199,
    "end": 2205
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2206,
    "end": 2207
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2207,
    "end": 2208
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2208,
    "end": 2209
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2209,
    "end": 2210
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 2219,
    "end": 2223
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2224,
    "end": 2225
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2225,
    "end": 2226
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2227,
    "end": 2233
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2234,
    "end": 2235
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2235,
    "end": 2236
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2236,
    "end": 2237
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2237,
    "end": 2238
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2243,
    "end": 2244
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2249,
    "end": 2255
  },
  {
    "type": "Identifier",
    "value": "assertNever",
    "start": 2256,
    "end": 2267
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2267,
    "end": 2268
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2268,
    "end": 2269
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2269,
    "end": 2270
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2270,
    "end": 2271
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2272,
    "end": 2273
  }
]
```
