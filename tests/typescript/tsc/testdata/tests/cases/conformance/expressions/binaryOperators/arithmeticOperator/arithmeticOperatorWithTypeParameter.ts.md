__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 68,
        "end": 71
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 72,
              "end": 73
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 72,
            "end": 73
          }
        ],
        "start": 71,
        "end": 74
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
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
                "start": 78,
                "end": 79
              },
              "typeArguments": null,
              "start": 78,
              "end": 79
            },
            "start": 76,
            "end": 79
          },
          "start": 75,
          "end": 79
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
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
                      "type": "TSAnyKeyword",
                      "start": 95,
                      "end": 98
                    },
                    "start": 93,
                    "end": 98
                  },
                  "start": 91,
                  "end": 98
                },
                "init": null,
                "definite": true,
                "start": 91,
                "end": 98
              }
            ],
            "declare": false,
            "start": 87,
            "end": 99
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 112,
                      "end": 119
                    },
                    "start": 110,
                    "end": 119
                  },
                  "start": 108,
                  "end": 119
                },
                "init": null,
                "definite": true,
                "start": 108,
                "end": 119
              }
            ],
            "declare": false,
            "start": 104,
            "end": 120
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
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 133,
                      "end": 139
                    },
                    "start": 131,
                    "end": 139
                  },
                  "start": 129,
                  "end": 139
                },
                "init": null,
                "definite": true,
                "start": 129,
                "end": 139
              }
            ],
            "declare": false,
            "start": 125,
            "end": 140
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
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 153,
                      "end": 159
                    },
                    "start": 151,
                    "end": 159
                  },
                  "start": 149,
                  "end": 159
                },
                "init": null,
                "definite": true,
                "start": 149,
                "end": 159
              }
            ],
            "declare": false,
            "start": 145,
            "end": 160
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
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "start": 173,
                      "end": 175
                    },
                    "start": 171,
                    "end": 175
                  },
                  "start": 169,
                  "end": 175
                },
                "init": null,
                "definite": true,
                "start": 169,
                "end": 175
              }
            ],
            "declare": false,
            "start": 165,
            "end": 176
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
                  "name": "r1a1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 186,
                  "end": 190
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 193,
                    "end": 194
                  },
                  "operator": "*",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 197,
                    "end": 198
                  },
                  "start": 193,
                  "end": 198
                },
                "definite": false,
                "start": 186,
                "end": 198
              }
            ],
            "declare": false,
            "start": 182,
            "end": 199
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
                  "name": "r1a2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 208,
                  "end": 212
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 215,
                    "end": 216
                  },
                  "operator": "/",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 219,
                    "end": 220
                  },
                  "start": 215,
                  "end": 220
                },
                "definite": false,
                "start": 208,
                "end": 220
              }
            ],
            "declare": false,
            "start": 204,
            "end": 221
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
                  "name": "r1a3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 230,
                  "end": 234
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 237,
                    "end": 238
                  },
                  "operator": "%",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 241,
                    "end": 242
                  },
                  "start": 237,
                  "end": 242
                },
                "definite": false,
                "start": 230,
                "end": 242
              }
            ],
            "declare": false,
            "start": 226,
            "end": 243
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
                  "name": "r1a4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 252,
                  "end": 256
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 259,
                    "end": 260
                  },
                  "operator": "-",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 263,
                    "end": 264
                  },
                  "start": 259,
                  "end": 264
                },
                "definite": false,
                "start": 252,
                "end": 264
              }
            ],
            "declare": false,
            "start": 248,
            "end": 265
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
                  "name": "r1a5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 274,
                  "end": 278
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 281,
                    "end": 282
                  },
                  "operator": "<<",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 286,
                    "end": 287
                  },
                  "start": 281,
                  "end": 287
                },
                "definite": false,
                "start": 274,
                "end": 287
              }
            ],
            "declare": false,
            "start": 270,
            "end": 288
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
                  "name": "r1a6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 297,
                  "end": 301
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 304,
                    "end": 305
                  },
                  "operator": ">>",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 309,
                    "end": 310
                  },
                  "start": 304,
                  "end": 310
                },
                "definite": false,
                "start": 297,
                "end": 310
              }
            ],
            "declare": false,
            "start": 293,
            "end": 311
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
                  "name": "r1a7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 320,
                  "end": 324
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 327,
                    "end": 328
                  },
                  "operator": ">>>",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 333,
                    "end": 334
                  },
                  "start": 327,
                  "end": 334
                },
                "definite": false,
                "start": 320,
                "end": 334
              }
            ],
            "declare": false,
            "start": 316,
            "end": 335
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
                  "name": "r1a8",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 344,
                  "end": 348
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 351,
                    "end": 352
                  },
                  "operator": "&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 355,
                    "end": 356
                  },
                  "start": 351,
                  "end": 356
                },
                "definite": false,
                "start": 344,
                "end": 356
              }
            ],
            "declare": false,
            "start": 340,
            "end": 357
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
                  "name": "r1a9",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 366,
                  "end": 370
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 373,
                    "end": 374
                  },
                  "operator": "^",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 377,
                    "end": 378
                  },
                  "start": 373,
                  "end": 378
                },
                "definite": false,
                "start": 366,
                "end": 378
              }
            ],
            "declare": false,
            "start": 362,
            "end": 379
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
                  "name": "r1a10",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 388,
                  "end": 393
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 396,
                    "end": 397
                  },
                  "operator": "|",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 400,
                    "end": 401
                  },
                  "start": 396,
                  "end": 401
                },
                "definite": false,
                "start": 388,
                "end": 401
              }
            ],
            "declare": false,
            "start": 384,
            "end": 402
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
                  "name": "r2a1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 412,
                  "end": 416
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 419,
                    "end": 420
                  },
                  "operator": "*",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 423,
                    "end": 424
                  },
                  "start": 419,
                  "end": 424
                },
                "definite": false,
                "start": 412,
                "end": 424
              }
            ],
            "declare": false,
            "start": 408,
            "end": 425
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
                  "name": "r2a2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 434,
                  "end": 438
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 441,
                    "end": 442
                  },
                  "operator": "/",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 445,
                    "end": 446
                  },
                  "start": 441,
                  "end": 446
                },
                "definite": false,
                "start": 434,
                "end": 446
              }
            ],
            "declare": false,
            "start": 430,
            "end": 447
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
                  "name": "r2a3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 456,
                  "end": 460
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 463,
                    "end": 464
                  },
                  "operator": "%",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 467,
                    "end": 468
                  },
                  "start": 463,
                  "end": 468
                },
                "definite": false,
                "start": 456,
                "end": 468
              }
            ],
            "declare": false,
            "start": 452,
            "end": 469
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
                  "name": "r2a4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 478,
                  "end": 482
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 485,
                    "end": 486
                  },
                  "operator": "-",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 489,
                    "end": 490
                  },
                  "start": 485,
                  "end": 490
                },
                "definite": false,
                "start": 478,
                "end": 490
              }
            ],
            "declare": false,
            "start": 474,
            "end": 491
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
                  "name": "r2a5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 500,
                  "end": 504
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 507,
                    "end": 508
                  },
                  "operator": "<<",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 512,
                    "end": 513
                  },
                  "start": 507,
                  "end": 513
                },
                "definite": false,
                "start": 500,
                "end": 513
              }
            ],
            "declare": false,
            "start": 496,
            "end": 514
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
                  "name": "r2a6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 523,
                  "end": 527
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 530,
                    "end": 531
                  },
                  "operator": ">>",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 535,
                    "end": 536
                  },
                  "start": 530,
                  "end": 536
                },
                "definite": false,
                "start": 523,
                "end": 536
              }
            ],
            "declare": false,
            "start": 519,
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
                  "name": "r2a7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 546,
                  "end": 550
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 553,
                    "end": 554
                  },
                  "operator": ">>>",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 559,
                    "end": 560
                  },
                  "start": 553,
                  "end": 560
                },
                "definite": false,
                "start": 546,
                "end": 560
              }
            ],
            "declare": false,
            "start": 542,
            "end": 561
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
                  "name": "r2a8",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 570,
                  "end": 574
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 577,
                    "end": 578
                  },
                  "operator": "&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 581,
                    "end": 582
                  },
                  "start": 577,
                  "end": 582
                },
                "definite": false,
                "start": 570,
                "end": 582
              }
            ],
            "declare": false,
            "start": 566,
            "end": 583
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
                  "name": "r2a9",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 592,
                  "end": 596
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 599,
                    "end": 600
                  },
                  "operator": "^",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 603,
                    "end": 604
                  },
                  "start": 599,
                  "end": 604
                },
                "definite": false,
                "start": 592,
                "end": 604
              }
            ],
            "declare": false,
            "start": 588,
            "end": 605
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
                  "name": "r2a10",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 614,
                  "end": 619
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 622,
                    "end": 623
                  },
                  "operator": "|",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 626,
                    "end": 627
                  },
                  "start": 622,
                  "end": 627
                },
                "definite": false,
                "start": 614,
                "end": 627
              }
            ],
            "declare": false,
            "start": 610,
            "end": 628
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
                  "name": "r1b1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 638,
                  "end": 642
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 645,
                    "end": 646
                  },
                  "operator": "*",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 649,
                    "end": 650
                  },
                  "start": 645,
                  "end": 650
                },
                "definite": false,
                "start": 638,
                "end": 650
              }
            ],
            "declare": false,
            "start": 634,
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
                  "name": "r1b2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 660,
                  "end": 664
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 667,
                    "end": 668
                  },
                  "operator": "/",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 671,
                    "end": 672
                  },
                  "start": 667,
                  "end": 672
                },
                "definite": false,
                "start": 660,
                "end": 672
              }
            ],
            "declare": false,
            "start": 656,
            "end": 673
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
                  "name": "r1b3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 682,
                  "end": 686
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 689,
                    "end": 690
                  },
                  "operator": "%",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 693,
                    "end": 694
                  },
                  "start": 689,
                  "end": 694
                },
                "definite": false,
                "start": 682,
                "end": 694
              }
            ],
            "declare": false,
            "start": 678,
            "end": 695
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
                  "name": "r1b4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 704,
                  "end": 708
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 711,
                    "end": 712
                  },
                  "operator": "-",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 715,
                    "end": 716
                  },
                  "start": 711,
                  "end": 716
                },
                "definite": false,
                "start": 704,
                "end": 716
              }
            ],
            "declare": false,
            "start": 700,
            "end": 717
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
                  "name": "r1b5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 726,
                  "end": 730
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 733,
                    "end": 734
                  },
                  "operator": "<<",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 738,
                    "end": 739
                  },
                  "start": 733,
                  "end": 739
                },
                "definite": false,
                "start": 726,
                "end": 739
              }
            ],
            "declare": false,
            "start": 722,
            "end": 740
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
                  "name": "r1b6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 749,
                  "end": 753
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 756,
                    "end": 757
                  },
                  "operator": ">>",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 761,
                    "end": 762
                  },
                  "start": 756,
                  "end": 762
                },
                "definite": false,
                "start": 749,
                "end": 762
              }
            ],
            "declare": false,
            "start": 745,
            "end": 763
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
                  "name": "r1b7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 772,
                  "end": 776
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 779,
                    "end": 780
                  },
                  "operator": ">>>",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 785,
                    "end": 786
                  },
                  "start": 779,
                  "end": 786
                },
                "definite": false,
                "start": 772,
                "end": 786
              }
            ],
            "declare": false,
            "start": 768,
            "end": 787
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
                  "name": "r1b8",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 796,
                  "end": 800
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 803,
                    "end": 804
                  },
                  "operator": "&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 807,
                    "end": 808
                  },
                  "start": 803,
                  "end": 808
                },
                "definite": false,
                "start": 796,
                "end": 808
              }
            ],
            "declare": false,
            "start": 792,
            "end": 809
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
                  "name": "r1b9",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 818,
                  "end": 822
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 825,
                    "end": 826
                  },
                  "operator": "^",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 829,
                    "end": 830
                  },
                  "start": 825,
                  "end": 830
                },
                "definite": false,
                "start": 818,
                "end": 830
              }
            ],
            "declare": false,
            "start": 814,
            "end": 831
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
                  "name": "r1b10",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 840,
                  "end": 845
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 848,
                    "end": 849
                  },
                  "operator": "|",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 852,
                    "end": 853
                  },
                  "start": 848,
                  "end": 853
                },
                "definite": false,
                "start": 840,
                "end": 853
              }
            ],
            "declare": false,
            "start": 836,
            "end": 854
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
                  "name": "r2b1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 864,
                  "end": 868
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 871,
                    "end": 872
                  },
                  "operator": "*",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 875,
                    "end": 876
                  },
                  "start": 871,
                  "end": 876
                },
                "definite": false,
                "start": 864,
                "end": 876
              }
            ],
            "declare": false,
            "start": 860,
            "end": 877
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
                  "name": "r2b2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 886,
                  "end": 890
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 893,
                    "end": 894
                  },
                  "operator": "/",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 897,
                    "end": 898
                  },
                  "start": 893,
                  "end": 898
                },
                "definite": false,
                "start": 886,
                "end": 898
              }
            ],
            "declare": false,
            "start": 882,
            "end": 899
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
                  "name": "r2b3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 908,
                  "end": 912
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 915,
                    "end": 916
                  },
                  "operator": "%",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 919,
                    "end": 920
                  },
                  "start": 915,
                  "end": 920
                },
                "definite": false,
                "start": 908,
                "end": 920
              }
            ],
            "declare": false,
            "start": 904,
            "end": 921
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
                  "name": "r2b4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 930,
                  "end": 934
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 937,
                    "end": 938
                  },
                  "operator": "-",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 941,
                    "end": 942
                  },
                  "start": 937,
                  "end": 942
                },
                "definite": false,
                "start": 930,
                "end": 942
              }
            ],
            "declare": false,
            "start": 926,
            "end": 943
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
                  "name": "r2b5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 952,
                  "end": 956
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 959,
                    "end": 960
                  },
                  "operator": "<<",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 964,
                    "end": 965
                  },
                  "start": 959,
                  "end": 965
                },
                "definite": false,
                "start": 952,
                "end": 965
              }
            ],
            "declare": false,
            "start": 948,
            "end": 966
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
                  "name": "r2b6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 975,
                  "end": 979
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 982,
                    "end": 983
                  },
                  "operator": ">>",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 987,
                    "end": 988
                  },
                  "start": 982,
                  "end": 988
                },
                "definite": false,
                "start": 975,
                "end": 988
              }
            ],
            "declare": false,
            "start": 971,
            "end": 989
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
                  "name": "r2b7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 998,
                  "end": 1002
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1005,
                    "end": 1006
                  },
                  "operator": ">>>",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1011,
                    "end": 1012
                  },
                  "start": 1005,
                  "end": 1012
                },
                "definite": false,
                "start": 998,
                "end": 1012
              }
            ],
            "declare": false,
            "start": 994,
            "end": 1013
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
                  "name": "r2b8",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1022,
                  "end": 1026
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1029,
                    "end": 1030
                  },
                  "operator": "&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1033,
                    "end": 1034
                  },
                  "start": 1029,
                  "end": 1034
                },
                "definite": false,
                "start": 1022,
                "end": 1034
              }
            ],
            "declare": false,
            "start": 1018,
            "end": 1035
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
                  "name": "r2b9",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1044,
                  "end": 1048
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1051,
                    "end": 1052
                  },
                  "operator": "^",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1055,
                    "end": 1056
                  },
                  "start": 1051,
                  "end": 1056
                },
                "definite": false,
                "start": 1044,
                "end": 1056
              }
            ],
            "declare": false,
            "start": 1040,
            "end": 1057
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
                  "name": "r2b10",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1066,
                  "end": 1071
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1074,
                    "end": 1075
                  },
                  "operator": "|",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1078,
                    "end": 1079
                  },
                  "start": 1074,
                  "end": 1079
                },
                "definite": false,
                "start": 1066,
                "end": 1079
              }
            ],
            "declare": false,
            "start": 1062,
            "end": 1080
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
                  "name": "r1c1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1090,
                  "end": 1094
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1097,
                    "end": 1098
                  },
                  "operator": "*",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1101,
                    "end": 1102
                  },
                  "start": 1097,
                  "end": 1102
                },
                "definite": false,
                "start": 1090,
                "end": 1102
              }
            ],
            "declare": false,
            "start": 1086,
            "end": 1103
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
                  "name": "r1c2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1112,
                  "end": 1116
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1119,
                    "end": 1120
                  },
                  "operator": "/",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1123,
                    "end": 1124
                  },
                  "start": 1119,
                  "end": 1124
                },
                "definite": false,
                "start": 1112,
                "end": 1124
              }
            ],
            "declare": false,
            "start": 1108,
            "end": 1125
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
                  "name": "r1c3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1134,
                  "end": 1138
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1141,
                    "end": 1142
                  },
                  "operator": "%",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1145,
                    "end": 1146
                  },
                  "start": 1141,
                  "end": 1146
                },
                "definite": false,
                "start": 1134,
                "end": 1146
              }
            ],
            "declare": false,
            "start": 1130,
            "end": 1147
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
                  "name": "r1c4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1156,
                  "end": 1160
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1163,
                    "end": 1164
                  },
                  "operator": "-",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1167,
                    "end": 1168
                  },
                  "start": 1163,
                  "end": 1168
                },
                "definite": false,
                "start": 1156,
                "end": 1168
              }
            ],
            "declare": false,
            "start": 1152,
            "end": 1169
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
                  "name": "r1c5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1178,
                  "end": 1182
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1185,
                    "end": 1186
                  },
                  "operator": "<<",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1190,
                    "end": 1191
                  },
                  "start": 1185,
                  "end": 1191
                },
                "definite": false,
                "start": 1178,
                "end": 1191
              }
            ],
            "declare": false,
            "start": 1174,
            "end": 1192
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
                  "name": "r1c6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1201,
                  "end": 1205
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1208,
                    "end": 1209
                  },
                  "operator": ">>",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1213,
                    "end": 1214
                  },
                  "start": 1208,
                  "end": 1214
                },
                "definite": false,
                "start": 1201,
                "end": 1214
              }
            ],
            "declare": false,
            "start": 1197,
            "end": 1215
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
                  "name": "r1c7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1224,
                  "end": 1228
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1231,
                    "end": 1232
                  },
                  "operator": ">>>",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1237,
                    "end": 1238
                  },
                  "start": 1231,
                  "end": 1238
                },
                "definite": false,
                "start": 1224,
                "end": 1238
              }
            ],
            "declare": false,
            "start": 1220,
            "end": 1239
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
                  "name": "r1c8",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1248,
                  "end": 1252
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1255,
                    "end": 1256
                  },
                  "operator": "&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1259,
                    "end": 1260
                  },
                  "start": 1255,
                  "end": 1260
                },
                "definite": false,
                "start": 1248,
                "end": 1260
              }
            ],
            "declare": false,
            "start": 1244,
            "end": 1261
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
                  "name": "r1c9",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1270,
                  "end": 1274
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1277,
                    "end": 1278
                  },
                  "operator": "^",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1281,
                    "end": 1282
                  },
                  "start": 1277,
                  "end": 1282
                },
                "definite": false,
                "start": 1270,
                "end": 1282
              }
            ],
            "declare": false,
            "start": 1266,
            "end": 1283
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
                  "name": "r1c10",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1292,
                  "end": 1297
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1300,
                    "end": 1301
                  },
                  "operator": "|",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1304,
                    "end": 1305
                  },
                  "start": 1300,
                  "end": 1305
                },
                "definite": false,
                "start": 1292,
                "end": 1305
              }
            ],
            "declare": false,
            "start": 1288,
            "end": 1306
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
                  "name": "r2c1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1316,
                  "end": 1320
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1323,
                    "end": 1324
                  },
                  "operator": "*",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1327,
                    "end": 1328
                  },
                  "start": 1323,
                  "end": 1328
                },
                "definite": false,
                "start": 1316,
                "end": 1328
              }
            ],
            "declare": false,
            "start": 1312,
            "end": 1329
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
                  "name": "r2c2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1338,
                  "end": 1342
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1345,
                    "end": 1346
                  },
                  "operator": "/",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1349,
                    "end": 1350
                  },
                  "start": 1345,
                  "end": 1350
                },
                "definite": false,
                "start": 1338,
                "end": 1350
              }
            ],
            "declare": false,
            "start": 1334,
            "end": 1351
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
                  "name": "r2c3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1360,
                  "end": 1364
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1367,
                    "end": 1368
                  },
                  "operator": "%",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1371,
                    "end": 1372
                  },
                  "start": 1367,
                  "end": 1372
                },
                "definite": false,
                "start": 1360,
                "end": 1372
              }
            ],
            "declare": false,
            "start": 1356,
            "end": 1373
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
                  "name": "r2c4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1382,
                  "end": 1386
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1389,
                    "end": 1390
                  },
                  "operator": "-",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1393,
                    "end": 1394
                  },
                  "start": 1389,
                  "end": 1394
                },
                "definite": false,
                "start": 1382,
                "end": 1394
              }
            ],
            "declare": false,
            "start": 1378,
            "end": 1395
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
                  "name": "r2c5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1404,
                  "end": 1408
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1411,
                    "end": 1412
                  },
                  "operator": "<<",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1416,
                    "end": 1417
                  },
                  "start": 1411,
                  "end": 1417
                },
                "definite": false,
                "start": 1404,
                "end": 1417
              }
            ],
            "declare": false,
            "start": 1400,
            "end": 1418
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
                  "name": "r2c6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1427,
                  "end": 1431
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1434,
                    "end": 1435
                  },
                  "operator": ">>",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1439,
                    "end": 1440
                  },
                  "start": 1434,
                  "end": 1440
                },
                "definite": false,
                "start": 1427,
                "end": 1440
              }
            ],
            "declare": false,
            "start": 1423,
            "end": 1441
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
                  "name": "r2c7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1450,
                  "end": 1454
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1457,
                    "end": 1458
                  },
                  "operator": ">>>",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1463,
                    "end": 1464
                  },
                  "start": 1457,
                  "end": 1464
                },
                "definite": false,
                "start": 1450,
                "end": 1464
              }
            ],
            "declare": false,
            "start": 1446,
            "end": 1465
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
                  "name": "r2c8",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1474,
                  "end": 1478
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1481,
                    "end": 1482
                  },
                  "operator": "&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1485,
                    "end": 1486
                  },
                  "start": 1481,
                  "end": 1486
                },
                "definite": false,
                "start": 1474,
                "end": 1486
              }
            ],
            "declare": false,
            "start": 1470,
            "end": 1487
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
                  "name": "r2c9",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1496,
                  "end": 1500
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1503,
                    "end": 1504
                  },
                  "operator": "^",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1507,
                    "end": 1508
                  },
                  "start": 1503,
                  "end": 1508
                },
                "definite": false,
                "start": 1496,
                "end": 1508
              }
            ],
            "declare": false,
            "start": 1492,
            "end": 1509
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
                  "name": "r2c10",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1518,
                  "end": 1523
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1526,
                    "end": 1527
                  },
                  "operator": "|",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1530,
                    "end": 1531
                  },
                  "start": 1526,
                  "end": 1531
                },
                "definite": false,
                "start": 1518,
                "end": 1531
              }
            ],
            "declare": false,
            "start": 1514,
            "end": 1532
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
                  "name": "r1d1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1542,
                  "end": 1546
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1549,
                    "end": 1550
                  },
                  "operator": "*",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1553,
                    "end": 1554
                  },
                  "start": 1549,
                  "end": 1554
                },
                "definite": false,
                "start": 1542,
                "end": 1554
              }
            ],
            "declare": false,
            "start": 1538,
            "end": 1555
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
                  "name": "r1d2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1564,
                  "end": 1568
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1571,
                    "end": 1572
                  },
                  "operator": "/",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1575,
                    "end": 1576
                  },
                  "start": 1571,
                  "end": 1576
                },
                "definite": false,
                "start": 1564,
                "end": 1576
              }
            ],
            "declare": false,
            "start": 1560,
            "end": 1577
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
                  "name": "r1d3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1586,
                  "end": 1590
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1593,
                    "end": 1594
                  },
                  "operator": "%",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1597,
                    "end": 1598
                  },
                  "start": 1593,
                  "end": 1598
                },
                "definite": false,
                "start": 1586,
                "end": 1598
              }
            ],
            "declare": false,
            "start": 1582,
            "end": 1599
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
                  "name": "r1d4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1608,
                  "end": 1612
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1615,
                    "end": 1616
                  },
                  "operator": "-",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1619,
                    "end": 1620
                  },
                  "start": 1615,
                  "end": 1620
                },
                "definite": false,
                "start": 1608,
                "end": 1620
              }
            ],
            "declare": false,
            "start": 1604,
            "end": 1621
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
                  "name": "r1d5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1630,
                  "end": 1634
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1637,
                    "end": 1638
                  },
                  "operator": "<<",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1642,
                    "end": 1643
                  },
                  "start": 1637,
                  "end": 1643
                },
                "definite": false,
                "start": 1630,
                "end": 1643
              }
            ],
            "declare": false,
            "start": 1626,
            "end": 1644
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
                  "name": "r1d6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1653,
                  "end": 1657
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1660,
                    "end": 1661
                  },
                  "operator": ">>",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1665,
                    "end": 1666
                  },
                  "start": 1660,
                  "end": 1666
                },
                "definite": false,
                "start": 1653,
                "end": 1666
              }
            ],
            "declare": false,
            "start": 1649,
            "end": 1667
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
                  "name": "r1d7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1676,
                  "end": 1680
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1683,
                    "end": 1684
                  },
                  "operator": ">>>",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1689,
                    "end": 1690
                  },
                  "start": 1683,
                  "end": 1690
                },
                "definite": false,
                "start": 1676,
                "end": 1690
              }
            ],
            "declare": false,
            "start": 1672,
            "end": 1691
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
                  "name": "r1d8",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1700,
                  "end": 1704
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1707,
                    "end": 1708
                  },
                  "operator": "&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1711,
                    "end": 1712
                  },
                  "start": 1707,
                  "end": 1712
                },
                "definite": false,
                "start": 1700,
                "end": 1712
              }
            ],
            "declare": false,
            "start": 1696,
            "end": 1713
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
                  "name": "r1d9",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1722,
                  "end": 1726
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1729,
                    "end": 1730
                  },
                  "operator": "^",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1733,
                    "end": 1734
                  },
                  "start": 1729,
                  "end": 1734
                },
                "definite": false,
                "start": 1722,
                "end": 1734
              }
            ],
            "declare": false,
            "start": 1718,
            "end": 1735
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
                  "name": "r1d10",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1744,
                  "end": 1749
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1752,
                    "end": 1753
                  },
                  "operator": "|",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1756,
                    "end": 1757
                  },
                  "start": 1752,
                  "end": 1757
                },
                "definite": false,
                "start": 1744,
                "end": 1757
              }
            ],
            "declare": false,
            "start": 1740,
            "end": 1758
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
                  "name": "r2d1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1768,
                  "end": 1772
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1775,
                    "end": 1776
                  },
                  "operator": "*",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1779,
                    "end": 1780
                  },
                  "start": 1775,
                  "end": 1780
                },
                "definite": false,
                "start": 1768,
                "end": 1780
              }
            ],
            "declare": false,
            "start": 1764,
            "end": 1781
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
                  "name": "r2d2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1790,
                  "end": 1794
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1797,
                    "end": 1798
                  },
                  "operator": "/",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1801,
                    "end": 1802
                  },
                  "start": 1797,
                  "end": 1802
                },
                "definite": false,
                "start": 1790,
                "end": 1802
              }
            ],
            "declare": false,
            "start": 1786,
            "end": 1803
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
                  "name": "r2d3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1812,
                  "end": 1816
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1819,
                    "end": 1820
                  },
                  "operator": "%",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1823,
                    "end": 1824
                  },
                  "start": 1819,
                  "end": 1824
                },
                "definite": false,
                "start": 1812,
                "end": 1824
              }
            ],
            "declare": false,
            "start": 1808,
            "end": 1825
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
                  "name": "r2d4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1834,
                  "end": 1838
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1841,
                    "end": 1842
                  },
                  "operator": "-",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1845,
                    "end": 1846
                  },
                  "start": 1841,
                  "end": 1846
                },
                "definite": false,
                "start": 1834,
                "end": 1846
              }
            ],
            "declare": false,
            "start": 1830,
            "end": 1847
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
                  "name": "r2d5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1856,
                  "end": 1860
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1863,
                    "end": 1864
                  },
                  "operator": "<<",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1868,
                    "end": 1869
                  },
                  "start": 1863,
                  "end": 1869
                },
                "definite": false,
                "start": 1856,
                "end": 1869
              }
            ],
            "declare": false,
            "start": 1852,
            "end": 1870
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
                  "name": "r2d6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1879,
                  "end": 1883
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1886,
                    "end": 1887
                  },
                  "operator": ">>",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1891,
                    "end": 1892
                  },
                  "start": 1886,
                  "end": 1892
                },
                "definite": false,
                "start": 1879,
                "end": 1892
              }
            ],
            "declare": false,
            "start": 1875,
            "end": 1893
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
                  "name": "r2d7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1902,
                  "end": 1906
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1909,
                    "end": 1910
                  },
                  "operator": ">>>",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1915,
                    "end": 1916
                  },
                  "start": 1909,
                  "end": 1916
                },
                "definite": false,
                "start": 1902,
                "end": 1916
              }
            ],
            "declare": false,
            "start": 1898,
            "end": 1917
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
                  "name": "r2d8",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1926,
                  "end": 1930
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1933,
                    "end": 1934
                  },
                  "operator": "&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1937,
                    "end": 1938
                  },
                  "start": 1933,
                  "end": 1938
                },
                "definite": false,
                "start": 1926,
                "end": 1938
              }
            ],
            "declare": false,
            "start": 1922,
            "end": 1939
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
                  "name": "r2d9",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1948,
                  "end": 1952
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1955,
                    "end": 1956
                  },
                  "operator": "^",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1959,
                    "end": 1960
                  },
                  "start": 1955,
                  "end": 1960
                },
                "definite": false,
                "start": 1948,
                "end": 1960
              }
            ],
            "declare": false,
            "start": 1944,
            "end": 1961
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
                  "name": "r2d10",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1970,
                  "end": 1975
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1978,
                    "end": 1979
                  },
                  "operator": "|",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1982,
                    "end": 1983
                  },
                  "start": 1978,
                  "end": 1983
                },
                "definite": false,
                "start": 1970,
                "end": 1983
              }
            ],
            "declare": false,
            "start": 1966,
            "end": 1984
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
                  "name": "r1e1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1994,
                  "end": 1998
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2001,
                    "end": 2002
                  },
                  "operator": "*",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2005,
                    "end": 2006
                  },
                  "start": 2001,
                  "end": 2006
                },
                "definite": false,
                "start": 1994,
                "end": 2006
              }
            ],
            "declare": false,
            "start": 1990,
            "end": 2007
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
                  "name": "r1e2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2016,
                  "end": 2020
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2023,
                    "end": 2024
                  },
                  "operator": "/",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2027,
                    "end": 2028
                  },
                  "start": 2023,
                  "end": 2028
                },
                "definite": false,
                "start": 2016,
                "end": 2028
              }
            ],
            "declare": false,
            "start": 2012,
            "end": 2029
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
                  "name": "r1e3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2038,
                  "end": 2042
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2045,
                    "end": 2046
                  },
                  "operator": "%",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2049,
                    "end": 2050
                  },
                  "start": 2045,
                  "end": 2050
                },
                "definite": false,
                "start": 2038,
                "end": 2050
              }
            ],
            "declare": false,
            "start": 2034,
            "end": 2051
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
                  "name": "r1e4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2060,
                  "end": 2064
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2067,
                    "end": 2068
                  },
                  "operator": "-",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2071,
                    "end": 2072
                  },
                  "start": 2067,
                  "end": 2072
                },
                "definite": false,
                "start": 2060,
                "end": 2072
              }
            ],
            "declare": false,
            "start": 2056,
            "end": 2073
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
                  "name": "r1e5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2082,
                  "end": 2086
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2089,
                    "end": 2090
                  },
                  "operator": "<<",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2094,
                    "end": 2095
                  },
                  "start": 2089,
                  "end": 2095
                },
                "definite": false,
                "start": 2082,
                "end": 2095
              }
            ],
            "declare": false,
            "start": 2078,
            "end": 2096
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
                  "name": "r1e6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2105,
                  "end": 2109
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2112,
                    "end": 2113
                  },
                  "operator": ">>",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2117,
                    "end": 2118
                  },
                  "start": 2112,
                  "end": 2118
                },
                "definite": false,
                "start": 2105,
                "end": 2118
              }
            ],
            "declare": false,
            "start": 2101,
            "end": 2119
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
                  "name": "r1e7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2128,
                  "end": 2132
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2135,
                    "end": 2136
                  },
                  "operator": ">>>",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2141,
                    "end": 2142
                  },
                  "start": 2135,
                  "end": 2142
                },
                "definite": false,
                "start": 2128,
                "end": 2142
              }
            ],
            "declare": false,
            "start": 2124,
            "end": 2143
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
                  "name": "r1e8",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2152,
                  "end": 2156
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2159,
                    "end": 2160
                  },
                  "operator": "&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2163,
                    "end": 2164
                  },
                  "start": 2159,
                  "end": 2164
                },
                "definite": false,
                "start": 2152,
                "end": 2164
              }
            ],
            "declare": false,
            "start": 2148,
            "end": 2165
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
                  "name": "r1e9",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2174,
                  "end": 2178
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2181,
                    "end": 2182
                  },
                  "operator": "^",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2185,
                    "end": 2186
                  },
                  "start": 2181,
                  "end": 2186
                },
                "definite": false,
                "start": 2174,
                "end": 2186
              }
            ],
            "declare": false,
            "start": 2170,
            "end": 2187
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
                  "name": "r1e10",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2196,
                  "end": 2201
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2204,
                    "end": 2205
                  },
                  "operator": "|",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2208,
                    "end": 2209
                  },
                  "start": 2204,
                  "end": 2209
                },
                "definite": false,
                "start": 2196,
                "end": 2209
              }
            ],
            "declare": false,
            "start": 2192,
            "end": 2210
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
                  "name": "r2e1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2220,
                  "end": 2224
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2227,
                    "end": 2228
                  },
                  "operator": "*",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2231,
                    "end": 2232
                  },
                  "start": 2227,
                  "end": 2232
                },
                "definite": false,
                "start": 2220,
                "end": 2232
              }
            ],
            "declare": false,
            "start": 2216,
            "end": 2233
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
                  "name": "r2e2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2242,
                  "end": 2246
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2249,
                    "end": 2250
                  },
                  "operator": "/",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2253,
                    "end": 2254
                  },
                  "start": 2249,
                  "end": 2254
                },
                "definite": false,
                "start": 2242,
                "end": 2254
              }
            ],
            "declare": false,
            "start": 2238,
            "end": 2255
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
                  "name": "r2e3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2264,
                  "end": 2268
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2271,
                    "end": 2272
                  },
                  "operator": "%",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2275,
                    "end": 2276
                  },
                  "start": 2271,
                  "end": 2276
                },
                "definite": false,
                "start": 2264,
                "end": 2276
              }
            ],
            "declare": false,
            "start": 2260,
            "end": 2277
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
                  "name": "r2e4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2286,
                  "end": 2290
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2293,
                    "end": 2294
                  },
                  "operator": "-",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2297,
                    "end": 2298
                  },
                  "start": 2293,
                  "end": 2298
                },
                "definite": false,
                "start": 2286,
                "end": 2298
              }
            ],
            "declare": false,
            "start": 2282,
            "end": 2299
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
                  "name": "r2e5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2308,
                  "end": 2312
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2315,
                    "end": 2316
                  },
                  "operator": "<<",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2320,
                    "end": 2321
                  },
                  "start": 2315,
                  "end": 2321
                },
                "definite": false,
                "start": 2308,
                "end": 2321
              }
            ],
            "declare": false,
            "start": 2304,
            "end": 2322
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
                  "name": "r2e6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2331,
                  "end": 2335
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2338,
                    "end": 2339
                  },
                  "operator": ">>",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2343,
                    "end": 2344
                  },
                  "start": 2338,
                  "end": 2344
                },
                "definite": false,
                "start": 2331,
                "end": 2344
              }
            ],
            "declare": false,
            "start": 2327,
            "end": 2345
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
                  "name": "r2e7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2354,
                  "end": 2358
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2361,
                    "end": 2362
                  },
                  "operator": ">>>",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2367,
                    "end": 2368
                  },
                  "start": 2361,
                  "end": 2368
                },
                "definite": false,
                "start": 2354,
                "end": 2368
              }
            ],
            "declare": false,
            "start": 2350,
            "end": 2369
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
                  "name": "r2e8",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2378,
                  "end": 2382
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2385,
                    "end": 2386
                  },
                  "operator": "&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2389,
                    "end": 2390
                  },
                  "start": 2385,
                  "end": 2390
                },
                "definite": false,
                "start": 2378,
                "end": 2390
              }
            ],
            "declare": false,
            "start": 2374,
            "end": 2391
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
                  "name": "r2e9",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2400,
                  "end": 2404
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2407,
                    "end": 2408
                  },
                  "operator": "^",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2411,
                    "end": 2412
                  },
                  "start": 2407,
                  "end": 2412
                },
                "definite": false,
                "start": 2400,
                "end": 2412
              }
            ],
            "declare": false,
            "start": 2396,
            "end": 2413
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
                  "name": "r2e10",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2422,
                  "end": 2427
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2430,
                    "end": 2431
                  },
                  "operator": "|",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2434,
                    "end": 2435
                  },
                  "start": 2430,
                  "end": 2435
                },
                "definite": false,
                "start": 2422,
                "end": 2435
              }
            ],
            "declare": false,
            "start": 2418,
            "end": 2436
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
                  "name": "r1f1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2446,
                  "end": 2450
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2453,
                    "end": 2454
                  },
                  "operator": "*",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2457,
                    "end": 2458
                  },
                  "start": 2453,
                  "end": 2458
                },
                "definite": false,
                "start": 2446,
                "end": 2458
              }
            ],
            "declare": false,
            "start": 2442,
            "end": 2459
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
                  "name": "r1f2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2468,
                  "end": 2472
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2475,
                    "end": 2476
                  },
                  "operator": "/",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2479,
                    "end": 2480
                  },
                  "start": 2475,
                  "end": 2480
                },
                "definite": false,
                "start": 2468,
                "end": 2480
              }
            ],
            "declare": false,
            "start": 2464,
            "end": 2481
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
                  "name": "r1f3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2490,
                  "end": 2494
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2497,
                    "end": 2498
                  },
                  "operator": "%",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2501,
                    "end": 2502
                  },
                  "start": 2497,
                  "end": 2502
                },
                "definite": false,
                "start": 2490,
                "end": 2502
              }
            ],
            "declare": false,
            "start": 2486,
            "end": 2503
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
                  "name": "r1f4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2512,
                  "end": 2516
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2519,
                    "end": 2520
                  },
                  "operator": "-",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2523,
                    "end": 2524
                  },
                  "start": 2519,
                  "end": 2524
                },
                "definite": false,
                "start": 2512,
                "end": 2524
              }
            ],
            "declare": false,
            "start": 2508,
            "end": 2525
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
                  "name": "r1f5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2534,
                  "end": 2538
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2541,
                    "end": 2542
                  },
                  "operator": "<<",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2546,
                    "end": 2547
                  },
                  "start": 2541,
                  "end": 2547
                },
                "definite": false,
                "start": 2534,
                "end": 2547
              }
            ],
            "declare": false,
            "start": 2530,
            "end": 2548
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
                  "name": "r1f6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2557,
                  "end": 2561
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2564,
                    "end": 2565
                  },
                  "operator": ">>",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2569,
                    "end": 2570
                  },
                  "start": 2564,
                  "end": 2570
                },
                "definite": false,
                "start": 2557,
                "end": 2570
              }
            ],
            "declare": false,
            "start": 2553,
            "end": 2571
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
                  "name": "r1f7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2580,
                  "end": 2584
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2587,
                    "end": 2588
                  },
                  "operator": ">>>",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2593,
                    "end": 2594
                  },
                  "start": 2587,
                  "end": 2594
                },
                "definite": false,
                "start": 2580,
                "end": 2594
              }
            ],
            "declare": false,
            "start": 2576,
            "end": 2595
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
                  "name": "r1f8",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2604,
                  "end": 2608
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2611,
                    "end": 2612
                  },
                  "operator": "&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2615,
                    "end": 2616
                  },
                  "start": 2611,
                  "end": 2616
                },
                "definite": false,
                "start": 2604,
                "end": 2616
              }
            ],
            "declare": false,
            "start": 2600,
            "end": 2617
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
                  "name": "r1f9",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2626,
                  "end": 2630
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2633,
                    "end": 2634
                  },
                  "operator": "^",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2637,
                    "end": 2638
                  },
                  "start": 2633,
                  "end": 2638
                },
                "definite": false,
                "start": 2626,
                "end": 2638
              }
            ],
            "declare": false,
            "start": 2622,
            "end": 2639
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
                  "name": "r1f10",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2648,
                  "end": 2653
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2656,
                    "end": 2657
                  },
                  "operator": "|",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2660,
                    "end": 2661
                  },
                  "start": 2656,
                  "end": 2661
                },
                "definite": false,
                "start": 2648,
                "end": 2661
              }
            ],
            "declare": false,
            "start": 2644,
            "end": 2662
          }
        ],
        "start": 81,
        "end": 2664
      },
      "expression": false,
      "start": 59,
      "end": 2664
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 59,
  "end": 2664
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 59,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 68,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 81,
    "end": 82
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 87,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 95,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 98,
    "end": 99
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 104,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 112,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 119,
    "end": 120
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 125,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 133,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 139,
    "end": 140
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 145,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 151,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 153,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 159,
    "end": 160
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 165,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 175,
    "end": 176
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 182,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "r1a1",
    "start": 186,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 195,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 198,
    "end": 199
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 204,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "r1a2",
    "start": 208,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 220,
    "end": 221
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 226,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "r1a3",
    "start": 230,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 235,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "%",
    "start": 239,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "t",
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
    "type": "Keyword",
    "value": "var",
    "start": 248,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "r1a4",
    "start": 252,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 257,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 261,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 264,
    "end": 265
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 270,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "r1a5",
    "start": 274,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 279,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 283,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 287,
    "end": 288
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 293,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "r1a6",
    "start": 297,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ">>",
    "start": 306,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 310,
    "end": 311
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 316,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "r1a7",
    "start": 320,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 325,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ">>>",
    "start": 329,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 334,
    "end": 335
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 340,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "r1a8",
    "start": 344,
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
    "value": "a",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 353,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 356,
    "end": 357
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 362,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "r1a9",
    "start": 366,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 371,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "^",
    "start": 375,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 378,
    "end": 379
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 384,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "r1a10",
    "start": 388,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 394,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 396,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 398,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 401,
    "end": 402
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 408,
    "end": 411
  },
  {
    "type": "Identifier",
    "value": "r2a1",
    "start": 412,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 417,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 421,
    "end": 422
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 424,
    "end": 425
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 430,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "r2a2",
    "start": 434,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 439,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 441,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 443,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "value": "var",
    "start": 452,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "r2a3",
    "start": 456,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 461,
    "end": 462
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "%",
    "start": 465,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 468,
    "end": 469
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 474,
    "end": 477
  },
  {
    "type": "Identifier",
    "value": "r2a4",
    "start": 478,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 483,
    "end": 484
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 487,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 489,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 490,
    "end": 491
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 496,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "r2a5",
    "start": 500,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 505,
    "end": 506
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 507,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 509,
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
    "value": ";",
    "start": 513,
    "end": 514
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 519,
    "end": 522
  },
  {
    "type": "Identifier",
    "value": "r2a6",
    "start": 523,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 528,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 530,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": ">>",
    "start": 532,
    "end": 534
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "value": "r2a7",
    "start": 546,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 551,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 553,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": ">>>",
    "start": 555,
    "end": 558
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 559,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 560,
    "end": 561
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 566,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "r2a8",
    "start": 570,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 575,
    "end": 576
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 577,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 579,
    "end": 580
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "type": "Keyword",
    "value": "var",
    "start": 588,
    "end": 591
  },
  {
    "type": "Identifier",
    "value": "r2a9",
    "start": 592,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 597,
    "end": 598
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 599,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": "^",
    "start": 601,
    "end": 602
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 603,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 604,
    "end": 605
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 610,
    "end": 613
  },
  {
    "type": "Identifier",
    "value": "r2a10",
    "start": 614,
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
    "value": "t",
    "start": 622,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 624,
    "end": 625
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "type": "Keyword",
    "value": "var",
    "start": 634,
    "end": 637
  },
  {
    "type": "Identifier",
    "value": "r1b1",
    "start": 638,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 643,
    "end": 644
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 645,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 647,
    "end": 648
  },
  {
    "type": "Identifier",
    "value": "t",
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
    "value": "r1b2",
    "start": 660,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 665,
    "end": 666
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 667,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 669,
    "end": 670
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 671,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 672,
    "end": 673
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 678,
    "end": 681
  },
  {
    "type": "Identifier",
    "value": "r1b3",
    "start": 682,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 687,
    "end": 688
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 689,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": "%",
    "start": 691,
    "end": 692
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 693,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 694,
    "end": 695
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 700,
    "end": 703
  },
  {
    "type": "Identifier",
    "value": "r1b4",
    "start": 704,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 709,
    "end": 710
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 711,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 713,
    "end": 714
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 715,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 716,
    "end": 717
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 722,
    "end": 725
  },
  {
    "type": "Identifier",
    "value": "r1b5",
    "start": 726,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 731,
    "end": 732
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 733,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 735,
    "end": 737
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 738,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 739,
    "end": 740
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 745,
    "end": 748
  },
  {
    "type": "Identifier",
    "value": "r1b6",
    "start": 749,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 754,
    "end": 755
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 756,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": ">>",
    "start": 758,
    "end": 760
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 761,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 762,
    "end": 763
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 768,
    "end": 771
  },
  {
    "type": "Identifier",
    "value": "r1b7",
    "start": 772,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 777,
    "end": 778
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 779,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": ">>>",
    "start": 781,
    "end": 784
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 785,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 786,
    "end": 787
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 792,
    "end": 795
  },
  {
    "type": "Identifier",
    "value": "r1b8",
    "start": 796,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 801,
    "end": 802
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 803,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 805,
    "end": 806
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 807,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 808,
    "end": 809
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 814,
    "end": 817
  },
  {
    "type": "Identifier",
    "value": "r1b9",
    "start": 818,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 823,
    "end": 824
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 825,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": "^",
    "start": 827,
    "end": 828
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 829,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 830,
    "end": 831
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 836,
    "end": 839
  },
  {
    "type": "Identifier",
    "value": "r1b10",
    "start": 840,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 846,
    "end": 847
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 848,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 850,
    "end": 851
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 852,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 853,
    "end": 854
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 860,
    "end": 863
  },
  {
    "type": "Identifier",
    "value": "r2b1",
    "start": 864,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 869,
    "end": 870
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 871,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 873,
    "end": 874
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 875,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 876,
    "end": 877
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 882,
    "end": 885
  },
  {
    "type": "Identifier",
    "value": "r2b2",
    "start": 886,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 891,
    "end": 892
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 893,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 895,
    "end": 896
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 897,
    "end": 898
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 898,
    "end": 899
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 904,
    "end": 907
  },
  {
    "type": "Identifier",
    "value": "r2b3",
    "start": 908,
    "end": 912
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 913,
    "end": 914
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 915,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": "%",
    "start": 917,
    "end": 918
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 919,
    "end": 920
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 920,
    "end": 921
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 926,
    "end": 929
  },
  {
    "type": "Identifier",
    "value": "r2b4",
    "start": 930,
    "end": 934
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 935,
    "end": 936
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 937,
    "end": 938
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 939,
    "end": 940
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 941,
    "end": 942
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 942,
    "end": 943
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 948,
    "end": 951
  },
  {
    "type": "Identifier",
    "value": "r2b5",
    "start": 952,
    "end": 956
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 957,
    "end": 958
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 959,
    "end": 960
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 961,
    "end": 963
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 964,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 965,
    "end": 966
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 971,
    "end": 974
  },
  {
    "type": "Identifier",
    "value": "r2b6",
    "start": 975,
    "end": 979
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 980,
    "end": 981
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 982,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": ">>",
    "start": 984,
    "end": 986
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 987,
    "end": 988
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 988,
    "end": 989
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 994,
    "end": 997
  },
  {
    "type": "Identifier",
    "value": "r2b7",
    "start": 998,
    "end": 1002
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1003,
    "end": 1004
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": ">>>",
    "start": 1007,
    "end": 1010
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1011,
    "end": 1012
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1018,
    "end": 1021
  },
  {
    "type": "Identifier",
    "value": "r2b8",
    "start": 1022,
    "end": 1026
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1040,
    "end": 1043
  },
  {
    "type": "Identifier",
    "value": "r2b9",
    "start": 1044,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Punctuator",
    "value": "^",
    "start": 1053,
    "end": 1054
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1055,
    "end": 1056
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1056,
    "end": 1057
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1062,
    "end": 1065
  },
  {
    "type": "Identifier",
    "value": "r2b10",
    "start": 1066,
    "end": 1071
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1072,
    "end": 1073
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1074,
    "end": 1075
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1076,
    "end": 1077
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "type": "Keyword",
    "value": "var",
    "start": 1086,
    "end": 1089
  },
  {
    "type": "Identifier",
    "value": "r1c1",
    "start": 1090,
    "end": 1094
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1099,
    "end": 1100
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1101,
    "end": 1102
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1102,
    "end": 1103
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1108,
    "end": 1111
  },
  {
    "type": "Identifier",
    "value": "r1c2",
    "start": 1112,
    "end": 1116
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1117,
    "end": 1118
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1119,
    "end": 1120
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Identifier",
    "value": "t",
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
    "type": "Keyword",
    "value": "var",
    "start": 1130,
    "end": 1133
  },
  {
    "type": "Identifier",
    "value": "r1c3",
    "start": 1134,
    "end": 1138
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1139,
    "end": 1140
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1141,
    "end": 1142
  },
  {
    "type": "Punctuator",
    "value": "%",
    "start": 1143,
    "end": 1144
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1145,
    "end": 1146
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1146,
    "end": 1147
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1152,
    "end": 1155
  },
  {
    "type": "Identifier",
    "value": "r1c4",
    "start": 1156,
    "end": 1160
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1161,
    "end": 1162
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1163,
    "end": 1164
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 1165,
    "end": 1166
  },
  {
    "type": "Identifier",
    "value": "t",
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
    "type": "Keyword",
    "value": "var",
    "start": 1174,
    "end": 1177
  },
  {
    "type": "Identifier",
    "value": "r1c5",
    "start": 1178,
    "end": 1182
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1183,
    "end": 1184
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 1187,
    "end": 1189
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1190,
    "end": 1191
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1191,
    "end": 1192
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1197,
    "end": 1200
  },
  {
    "type": "Identifier",
    "value": "r1c6",
    "start": 1201,
    "end": 1205
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1206,
    "end": 1207
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1208,
    "end": 1209
  },
  {
    "type": "Punctuator",
    "value": ">>",
    "start": 1210,
    "end": 1212
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1214,
    "end": 1215
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1220,
    "end": 1223
  },
  {
    "type": "Identifier",
    "value": "r1c7",
    "start": 1224,
    "end": 1228
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1229,
    "end": 1230
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1231,
    "end": 1232
  },
  {
    "type": "Punctuator",
    "value": ">>>",
    "start": 1233,
    "end": 1236
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1237,
    "end": 1238
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1238,
    "end": 1239
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1244,
    "end": 1247
  },
  {
    "type": "Identifier",
    "value": "r1c8",
    "start": 1248,
    "end": 1252
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1253,
    "end": 1254
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1255,
    "end": 1256
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1257,
    "end": 1258
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1259,
    "end": 1260
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1260,
    "end": 1261
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1266,
    "end": 1269
  },
  {
    "type": "Identifier",
    "value": "r1c9",
    "start": 1270,
    "end": 1274
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1275,
    "end": 1276
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1277,
    "end": 1278
  },
  {
    "type": "Punctuator",
    "value": "^",
    "start": 1279,
    "end": 1280
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1281,
    "end": 1282
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1282,
    "end": 1283
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1288,
    "end": 1291
  },
  {
    "type": "Identifier",
    "value": "r1c10",
    "start": 1292,
    "end": 1297
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1298,
    "end": 1299
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1300,
    "end": 1301
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1302,
    "end": 1303
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1304,
    "end": 1305
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1305,
    "end": 1306
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1312,
    "end": 1315
  },
  {
    "type": "Identifier",
    "value": "r2c1",
    "start": 1316,
    "end": 1320
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1321,
    "end": 1322
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1323,
    "end": 1324
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1327,
    "end": 1328
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1328,
    "end": 1329
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1334,
    "end": 1337
  },
  {
    "type": "Identifier",
    "value": "r2c2",
    "start": 1338,
    "end": 1342
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1343,
    "end": 1344
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1345,
    "end": 1346
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1347,
    "end": 1348
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1349,
    "end": 1350
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1350,
    "end": 1351
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1356,
    "end": 1359
  },
  {
    "type": "Identifier",
    "value": "r2c3",
    "start": 1360,
    "end": 1364
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1365,
    "end": 1366
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1367,
    "end": 1368
  },
  {
    "type": "Punctuator",
    "value": "%",
    "start": 1369,
    "end": 1370
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1371,
    "end": 1372
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1372,
    "end": 1373
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1378,
    "end": 1381
  },
  {
    "type": "Identifier",
    "value": "r2c4",
    "start": 1382,
    "end": 1386
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1387,
    "end": 1388
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1389,
    "end": 1390
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 1391,
    "end": 1392
  },
  {
    "type": "Identifier",
    "value": "c",
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
    "type": "Keyword",
    "value": "var",
    "start": 1400,
    "end": 1403
  },
  {
    "type": "Identifier",
    "value": "r2c5",
    "start": 1404,
    "end": 1408
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1409,
    "end": 1410
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1411,
    "end": 1412
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 1413,
    "end": 1415
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1416,
    "end": 1417
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1417,
    "end": 1418
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1423,
    "end": 1426
  },
  {
    "type": "Identifier",
    "value": "r2c6",
    "start": 1427,
    "end": 1431
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1432,
    "end": 1433
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1434,
    "end": 1435
  },
  {
    "type": "Punctuator",
    "value": ">>",
    "start": 1436,
    "end": 1438
  },
  {
    "type": "Identifier",
    "value": "c",
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
    "type": "Keyword",
    "value": "var",
    "start": 1446,
    "end": 1449
  },
  {
    "type": "Identifier",
    "value": "r2c7",
    "start": 1450,
    "end": 1454
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1455,
    "end": 1456
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1457,
    "end": 1458
  },
  {
    "type": "Punctuator",
    "value": ">>>",
    "start": 1459,
    "end": 1462
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1463,
    "end": 1464
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1464,
    "end": 1465
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1470,
    "end": 1473
  },
  {
    "type": "Identifier",
    "value": "r2c8",
    "start": 1474,
    "end": 1478
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1479,
    "end": 1480
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1481,
    "end": 1482
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1483,
    "end": 1484
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1485,
    "end": 1486
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1486,
    "end": 1487
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1492,
    "end": 1495
  },
  {
    "type": "Identifier",
    "value": "r2c9",
    "start": 1496,
    "end": 1500
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1501,
    "end": 1502
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1503,
    "end": 1504
  },
  {
    "type": "Punctuator",
    "value": "^",
    "start": 1505,
    "end": 1506
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1507,
    "end": 1508
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1508,
    "end": 1509
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1514,
    "end": 1517
  },
  {
    "type": "Identifier",
    "value": "r2c10",
    "start": 1518,
    "end": 1523
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1524,
    "end": 1525
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1526,
    "end": 1527
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1528,
    "end": 1529
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1530,
    "end": 1531
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1531,
    "end": 1532
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1538,
    "end": 1541
  },
  {
    "type": "Identifier",
    "value": "r1d1",
    "start": 1542,
    "end": 1546
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1547,
    "end": 1548
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1549,
    "end": 1550
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1551,
    "end": 1552
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1553,
    "end": 1554
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1554,
    "end": 1555
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1560,
    "end": 1563
  },
  {
    "type": "Identifier",
    "value": "r1d2",
    "start": 1564,
    "end": 1568
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1569,
    "end": 1570
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1571,
    "end": 1572
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1573,
    "end": 1574
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1575,
    "end": 1576
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1576,
    "end": 1577
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1582,
    "end": 1585
  },
  {
    "type": "Identifier",
    "value": "r1d3",
    "start": 1586,
    "end": 1590
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1591,
    "end": 1592
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1593,
    "end": 1594
  },
  {
    "type": "Punctuator",
    "value": "%",
    "start": 1595,
    "end": 1596
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1597,
    "end": 1598
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1598,
    "end": 1599
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1604,
    "end": 1607
  },
  {
    "type": "Identifier",
    "value": "r1d4",
    "start": 1608,
    "end": 1612
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1613,
    "end": 1614
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1615,
    "end": 1616
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 1617,
    "end": 1618
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1619,
    "end": 1620
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1620,
    "end": 1621
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1626,
    "end": 1629
  },
  {
    "type": "Identifier",
    "value": "r1d5",
    "start": 1630,
    "end": 1634
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1635,
    "end": 1636
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1637,
    "end": 1638
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 1639,
    "end": 1641
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1642,
    "end": 1643
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1643,
    "end": 1644
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1649,
    "end": 1652
  },
  {
    "type": "Identifier",
    "value": "r1d6",
    "start": 1653,
    "end": 1657
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1658,
    "end": 1659
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1660,
    "end": 1661
  },
  {
    "type": "Punctuator",
    "value": ">>",
    "start": 1662,
    "end": 1664
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1665,
    "end": 1666
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1666,
    "end": 1667
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1672,
    "end": 1675
  },
  {
    "type": "Identifier",
    "value": "r1d7",
    "start": 1676,
    "end": 1680
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1681,
    "end": 1682
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1683,
    "end": 1684
  },
  {
    "type": "Punctuator",
    "value": ">>>",
    "start": 1685,
    "end": 1688
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1689,
    "end": 1690
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1690,
    "end": 1691
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1696,
    "end": 1699
  },
  {
    "type": "Identifier",
    "value": "r1d8",
    "start": 1700,
    "end": 1704
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1705,
    "end": 1706
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1707,
    "end": 1708
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1709,
    "end": 1710
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1711,
    "end": 1712
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1712,
    "end": 1713
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1718,
    "end": 1721
  },
  {
    "type": "Identifier",
    "value": "r1d9",
    "start": 1722,
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
    "value": "d",
    "start": 1729,
    "end": 1730
  },
  {
    "type": "Punctuator",
    "value": "^",
    "start": 1731,
    "end": 1732
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1733,
    "end": 1734
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1734,
    "end": 1735
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1740,
    "end": 1743
  },
  {
    "type": "Identifier",
    "value": "r1d10",
    "start": 1744,
    "end": 1749
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1750,
    "end": 1751
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1752,
    "end": 1753
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1754,
    "end": 1755
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1756,
    "end": 1757
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1757,
    "end": 1758
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1764,
    "end": 1767
  },
  {
    "type": "Identifier",
    "value": "r2d1",
    "start": 1768,
    "end": 1772
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1773,
    "end": 1774
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1775,
    "end": 1776
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1777,
    "end": 1778
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1779,
    "end": 1780
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1780,
    "end": 1781
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1786,
    "end": 1789
  },
  {
    "type": "Identifier",
    "value": "r2d2",
    "start": 1790,
    "end": 1794
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1795,
    "end": 1796
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1797,
    "end": 1798
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1799,
    "end": 1800
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1801,
    "end": 1802
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1802,
    "end": 1803
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1808,
    "end": 1811
  },
  {
    "type": "Identifier",
    "value": "r2d3",
    "start": 1812,
    "end": 1816
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1817,
    "end": 1818
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1819,
    "end": 1820
  },
  {
    "type": "Punctuator",
    "value": "%",
    "start": 1821,
    "end": 1822
  },
  {
    "type": "Identifier",
    "value": "d",
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
    "type": "Keyword",
    "value": "var",
    "start": 1830,
    "end": 1833
  },
  {
    "type": "Identifier",
    "value": "r2d4",
    "start": 1834,
    "end": 1838
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1839,
    "end": 1840
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1841,
    "end": 1842
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 1843,
    "end": 1844
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1845,
    "end": 1846
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1846,
    "end": 1847
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1852,
    "end": 1855
  },
  {
    "type": "Identifier",
    "value": "r2d5",
    "start": 1856,
    "end": 1860
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1861,
    "end": 1862
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1863,
    "end": 1864
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 1865,
    "end": 1867
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1868,
    "end": 1869
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1869,
    "end": 1870
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1875,
    "end": 1878
  },
  {
    "type": "Identifier",
    "value": "r2d6",
    "start": 1879,
    "end": 1883
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1884,
    "end": 1885
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1886,
    "end": 1887
  },
  {
    "type": "Punctuator",
    "value": ">>",
    "start": 1888,
    "end": 1890
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1891,
    "end": 1892
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1892,
    "end": 1893
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1898,
    "end": 1901
  },
  {
    "type": "Identifier",
    "value": "r2d7",
    "start": 1902,
    "end": 1906
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1907,
    "end": 1908
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1909,
    "end": 1910
  },
  {
    "type": "Punctuator",
    "value": ">>>",
    "start": 1911,
    "end": 1914
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1915,
    "end": 1916
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1916,
    "end": 1917
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1922,
    "end": 1925
  },
  {
    "type": "Identifier",
    "value": "r2d8",
    "start": 1926,
    "end": 1930
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1931,
    "end": 1932
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1933,
    "end": 1934
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1935,
    "end": 1936
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1937,
    "end": 1938
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1938,
    "end": 1939
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1944,
    "end": 1947
  },
  {
    "type": "Identifier",
    "value": "r2d9",
    "start": 1948,
    "end": 1952
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1953,
    "end": 1954
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1955,
    "end": 1956
  },
  {
    "type": "Punctuator",
    "value": "^",
    "start": 1957,
    "end": 1958
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1959,
    "end": 1960
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1960,
    "end": 1961
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1966,
    "end": 1969
  },
  {
    "type": "Identifier",
    "value": "r2d10",
    "start": 1970,
    "end": 1975
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1976,
    "end": 1977
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1978,
    "end": 1979
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1980,
    "end": 1981
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1982,
    "end": 1983
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1983,
    "end": 1984
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1990,
    "end": 1993
  },
  {
    "type": "Identifier",
    "value": "r1e1",
    "start": 1994,
    "end": 1998
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1999,
    "end": 2000
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 2001,
    "end": 2002
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2003,
    "end": 2004
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2005,
    "end": 2006
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2006,
    "end": 2007
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2012,
    "end": 2015
  },
  {
    "type": "Identifier",
    "value": "r1e2",
    "start": 2016,
    "end": 2020
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2021,
    "end": 2022
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 2023,
    "end": 2024
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 2025,
    "end": 2026
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2027,
    "end": 2028
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2028,
    "end": 2029
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2034,
    "end": 2037
  },
  {
    "type": "Identifier",
    "value": "r1e3",
    "start": 2038,
    "end": 2042
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2043,
    "end": 2044
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 2045,
    "end": 2046
  },
  {
    "type": "Punctuator",
    "value": "%",
    "start": 2047,
    "end": 2048
  },
  {
    "type": "Identifier",
    "value": "t",
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
    "type": "Keyword",
    "value": "var",
    "start": 2056,
    "end": 2059
  },
  {
    "type": "Identifier",
    "value": "r1e4",
    "start": 2060,
    "end": 2064
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2065,
    "end": 2066
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 2067,
    "end": 2068
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 2069,
    "end": 2070
  },
  {
    "type": "Identifier",
    "value": "t",
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
    "type": "Keyword",
    "value": "var",
    "start": 2078,
    "end": 2081
  },
  {
    "type": "Identifier",
    "value": "r1e5",
    "start": 2082,
    "end": 2086
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2087,
    "end": 2088
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 2089,
    "end": 2090
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 2091,
    "end": 2093
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2094,
    "end": 2095
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2095,
    "end": 2096
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2101,
    "end": 2104
  },
  {
    "type": "Identifier",
    "value": "r1e6",
    "start": 2105,
    "end": 2109
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2110,
    "end": 2111
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 2112,
    "end": 2113
  },
  {
    "type": "Punctuator",
    "value": ">>",
    "start": 2114,
    "end": 2116
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2117,
    "end": 2118
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2118,
    "end": 2119
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2124,
    "end": 2127
  },
  {
    "type": "Identifier",
    "value": "r1e7",
    "start": 2128,
    "end": 2132
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2133,
    "end": 2134
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 2135,
    "end": 2136
  },
  {
    "type": "Punctuator",
    "value": ">>>",
    "start": 2137,
    "end": 2140
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2141,
    "end": 2142
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2142,
    "end": 2143
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2148,
    "end": 2151
  },
  {
    "type": "Identifier",
    "value": "r1e8",
    "start": 2152,
    "end": 2156
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2157,
    "end": 2158
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 2159,
    "end": 2160
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 2161,
    "end": 2162
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2163,
    "end": 2164
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2164,
    "end": 2165
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2170,
    "end": 2173
  },
  {
    "type": "Identifier",
    "value": "r1e9",
    "start": 2174,
    "end": 2178
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2179,
    "end": 2180
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 2181,
    "end": 2182
  },
  {
    "type": "Punctuator",
    "value": "^",
    "start": 2183,
    "end": 2184
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2185,
    "end": 2186
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2186,
    "end": 2187
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2192,
    "end": 2195
  },
  {
    "type": "Identifier",
    "value": "r1e10",
    "start": 2196,
    "end": 2201
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2202,
    "end": 2203
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 2204,
    "end": 2205
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2206,
    "end": 2207
  },
  {
    "type": "Identifier",
    "value": "t",
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
    "value": "var",
    "start": 2216,
    "end": 2219
  },
  {
    "type": "Identifier",
    "value": "r2e1",
    "start": 2220,
    "end": 2224
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2225,
    "end": 2226
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2227,
    "end": 2228
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2229,
    "end": 2230
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 2231,
    "end": 2232
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2232,
    "end": 2233
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2238,
    "end": 2241
  },
  {
    "type": "Identifier",
    "value": "r2e2",
    "start": 2242,
    "end": 2246
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2247,
    "end": 2248
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2249,
    "end": 2250
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 2251,
    "end": 2252
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 2253,
    "end": 2254
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2254,
    "end": 2255
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2260,
    "end": 2263
  },
  {
    "type": "Identifier",
    "value": "r2e3",
    "start": 2264,
    "end": 2268
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2269,
    "end": 2270
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2271,
    "end": 2272
  },
  {
    "type": "Punctuator",
    "value": "%",
    "start": 2273,
    "end": 2274
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 2275,
    "end": 2276
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2276,
    "end": 2277
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2282,
    "end": 2285
  },
  {
    "type": "Identifier",
    "value": "r2e4",
    "start": 2286,
    "end": 2290
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2291,
    "end": 2292
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2293,
    "end": 2294
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 2295,
    "end": 2296
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 2297,
    "end": 2298
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2298,
    "end": 2299
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2304,
    "end": 2307
  },
  {
    "type": "Identifier",
    "value": "r2e5",
    "start": 2308,
    "end": 2312
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2313,
    "end": 2314
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2315,
    "end": 2316
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 2317,
    "end": 2319
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 2320,
    "end": 2321
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2321,
    "end": 2322
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2327,
    "end": 2330
  },
  {
    "type": "Identifier",
    "value": "r2e6",
    "start": 2331,
    "end": 2335
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2336,
    "end": 2337
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2338,
    "end": 2339
  },
  {
    "type": "Punctuator",
    "value": ">>",
    "start": 2340,
    "end": 2342
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 2343,
    "end": 2344
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2344,
    "end": 2345
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2350,
    "end": 2353
  },
  {
    "type": "Identifier",
    "value": "r2e7",
    "start": 2354,
    "end": 2358
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2359,
    "end": 2360
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2361,
    "end": 2362
  },
  {
    "type": "Punctuator",
    "value": ">>>",
    "start": 2363,
    "end": 2366
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 2367,
    "end": 2368
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2368,
    "end": 2369
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2374,
    "end": 2377
  },
  {
    "type": "Identifier",
    "value": "r2e8",
    "start": 2378,
    "end": 2382
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2383,
    "end": 2384
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2385,
    "end": 2386
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 2387,
    "end": 2388
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 2389,
    "end": 2390
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2390,
    "end": 2391
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2396,
    "end": 2399
  },
  {
    "type": "Identifier",
    "value": "r2e9",
    "start": 2400,
    "end": 2404
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2405,
    "end": 2406
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2407,
    "end": 2408
  },
  {
    "type": "Punctuator",
    "value": "^",
    "start": 2409,
    "end": 2410
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 2411,
    "end": 2412
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2412,
    "end": 2413
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2418,
    "end": 2421
  },
  {
    "type": "Identifier",
    "value": "r2e10",
    "start": 2422,
    "end": 2427
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2428,
    "end": 2429
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2430,
    "end": 2431
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2432,
    "end": 2433
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 2434,
    "end": 2435
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2435,
    "end": 2436
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2442,
    "end": 2445
  },
  {
    "type": "Identifier",
    "value": "r1f1",
    "start": 2446,
    "end": 2450
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2451,
    "end": 2452
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2453,
    "end": 2454
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2455,
    "end": 2456
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2457,
    "end": 2458
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2458,
    "end": 2459
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2464,
    "end": 2467
  },
  {
    "type": "Identifier",
    "value": "r1f2",
    "start": 2468,
    "end": 2472
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2473,
    "end": 2474
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2475,
    "end": 2476
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 2477,
    "end": 2478
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2479,
    "end": 2480
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2480,
    "end": 2481
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2486,
    "end": 2489
  },
  {
    "type": "Identifier",
    "value": "r1f3",
    "start": 2490,
    "end": 2494
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2495,
    "end": 2496
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2497,
    "end": 2498
  },
  {
    "type": "Punctuator",
    "value": "%",
    "start": 2499,
    "end": 2500
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2501,
    "end": 2502
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2502,
    "end": 2503
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2508,
    "end": 2511
  },
  {
    "type": "Identifier",
    "value": "r1f4",
    "start": 2512,
    "end": 2516
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2517,
    "end": 2518
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2519,
    "end": 2520
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 2521,
    "end": 2522
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2523,
    "end": 2524
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2524,
    "end": 2525
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2530,
    "end": 2533
  },
  {
    "type": "Identifier",
    "value": "r1f5",
    "start": 2534,
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
    "value": "t",
    "start": 2541,
    "end": 2542
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 2543,
    "end": 2545
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2546,
    "end": 2547
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2547,
    "end": 2548
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2553,
    "end": 2556
  },
  {
    "type": "Identifier",
    "value": "r1f6",
    "start": 2557,
    "end": 2561
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2562,
    "end": 2563
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2564,
    "end": 2565
  },
  {
    "type": "Punctuator",
    "value": ">>",
    "start": 2566,
    "end": 2568
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2569,
    "end": 2570
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2570,
    "end": 2571
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2576,
    "end": 2579
  },
  {
    "type": "Identifier",
    "value": "r1f7",
    "start": 2580,
    "end": 2584
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2585,
    "end": 2586
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2587,
    "end": 2588
  },
  {
    "type": "Punctuator",
    "value": ">>>",
    "start": 2589,
    "end": 2592
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2593,
    "end": 2594
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2594,
    "end": 2595
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2600,
    "end": 2603
  },
  {
    "type": "Identifier",
    "value": "r1f8",
    "start": 2604,
    "end": 2608
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2609,
    "end": 2610
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2611,
    "end": 2612
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 2613,
    "end": 2614
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2615,
    "end": 2616
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2616,
    "end": 2617
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2622,
    "end": 2625
  },
  {
    "type": "Identifier",
    "value": "r1f9",
    "start": 2626,
    "end": 2630
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2631,
    "end": 2632
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2633,
    "end": 2634
  },
  {
    "type": "Punctuator",
    "value": "^",
    "start": 2635,
    "end": 2636
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2637,
    "end": 2638
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2638,
    "end": 2639
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2644,
    "end": 2647
  },
  {
    "type": "Identifier",
    "value": "r1f10",
    "start": 2648,
    "end": 2653
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2654,
    "end": 2655
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2656,
    "end": 2657
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2658,
    "end": 2659
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2660,
    "end": 2661
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2661,
    "end": 2662
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2663,
    "end": 2664
  }
]
```
