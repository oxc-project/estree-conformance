__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
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
                      "start": 19,
                      "end": 20
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "start": 22,
                            "end": 28
                          },
                          {
                            "type": "TSNumberKeyword",
                            "start": 31,
                            "end": 37
                          }
                        ],
                        "start": 22,
                        "end": 37
                      },
                      "start": 20,
                      "end": 37
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 19,
                    "end": 37
                  }
                ],
                "start": 17,
                "end": 39
              },
              "start": 15,
              "end": 39
            },
            "start": 14,
            "end": 39
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 39
        }
      ],
      "declare": true,
      "start": 0,
      "end": 40
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
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 60,
                      "end": 61
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "start": 64,
                            "end": 70
                          },
                          {
                            "type": "TSNumberKeyword",
                            "start": 73,
                            "end": 79
                          }
                        ],
                        "start": 64,
                        "end": 79
                      },
                      "start": 62,
                      "end": 79
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 60,
                    "end": 79
                  }
                ],
                "start": 58,
                "end": 81
              },
              "start": 56,
              "end": 81
            },
            "start": 55,
            "end": 81
          },
          "init": null,
          "definite": false,
          "start": 55,
          "end": 81
        }
      ],
      "declare": true,
      "start": 41,
      "end": 82
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
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 102,
                      "end": 103
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "start": 106,
                            "end": 112
                          },
                          {
                            "type": "TSNumberKeyword",
                            "start": 115,
                            "end": 121
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 124,
                            "end": 133
                          }
                        ],
                        "start": 106,
                        "end": 133
                      },
                      "start": 104,
                      "end": 133
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 102,
                    "end": 133
                  }
                ],
                "start": 100,
                "end": 135
              },
              "start": 98,
              "end": 135
            },
            "start": 97,
            "end": 135
          },
          "init": null,
          "definite": false,
          "start": 97,
          "end": 135
        }
      ],
      "declare": true,
      "start": 83,
      "end": 136
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
            "name": "v_a",
            "optional": false,
            "typeAnnotation": null,
            "start": 144,
            "end": 147
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 155,
                  "end": 156
                },
                "start": 152,
                "end": 156
              }
            ],
            "start": 150,
            "end": 158
          },
          "definite": false,
          "start": 144,
          "end": 158
        }
      ],
      "declare": false,
      "start": 138,
      "end": 159
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
            "name": "v_b",
            "optional": false,
            "typeAnnotation": null,
            "start": 166,
            "end": 169
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 177,
                  "end": 178
                },
                "start": 174,
                "end": 178
              }
            ],
            "start": 172,
            "end": 180
          },
          "definite": false,
          "start": 166,
          "end": 180
        }
      ],
      "declare": false,
      "start": 160,
      "end": 181
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
            "name": "v_c",
            "optional": false,
            "typeAnnotation": null,
            "start": 188,
            "end": 191
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 199,
                  "end": 200
                },
                "start": 196,
                "end": 200
              }
            ],
            "start": 194,
            "end": 202
          },
          "definite": false,
          "start": 188,
          "end": 202
        }
      ],
      "declare": false,
      "start": 182,
      "end": 203
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
            "name": "v_ab",
            "optional": false,
            "typeAnnotation": null,
            "start": 210,
            "end": 214
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 222,
                  "end": 223
                },
                "start": 219,
                "end": 223
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 228,
                  "end": 229
                },
                "start": 225,
                "end": 229
              }
            ],
            "start": 217,
            "end": 231
          },
          "definite": false,
          "start": 210,
          "end": 231
        }
      ],
      "declare": false,
      "start": 204,
      "end": 232
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
            "name": "v_ac",
            "optional": false,
            "typeAnnotation": null,
            "start": 239,
            "end": 243
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 251,
                  "end": 252
                },
                "start": 248,
                "end": 252
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 257,
                  "end": 258
                },
                "start": 254,
                "end": 258
              }
            ],
            "start": 246,
            "end": 260
          },
          "definite": false,
          "start": 239,
          "end": 260
        }
      ],
      "declare": false,
      "start": 233,
      "end": 261
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
            "name": "v_ba",
            "optional": false,
            "typeAnnotation": null,
            "start": 268,
            "end": 272
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 280,
                  "end": 281
                },
                "start": 277,
                "end": 281
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 286,
                  "end": 287
                },
                "start": 283,
                "end": 287
              }
            ],
            "start": 275,
            "end": 289
          },
          "definite": false,
          "start": 268,
          "end": 289
        }
      ],
      "declare": false,
      "start": 262,
      "end": 290
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
            "name": "v_bc",
            "optional": false,
            "typeAnnotation": null,
            "start": 297,
            "end": 301
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 309,
                  "end": 310
                },
                "start": 306,
                "end": 310
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 315,
                  "end": 316
                },
                "start": 312,
                "end": 316
              }
            ],
            "start": 304,
            "end": 318
          },
          "definite": false,
          "start": 297,
          "end": 318
        }
      ],
      "declare": false,
      "start": 291,
      "end": 319
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
            "name": "v_ca",
            "optional": false,
            "typeAnnotation": null,
            "start": 326,
            "end": 330
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 338,
                  "end": 339
                },
                "start": 335,
                "end": 339
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 344,
                  "end": 345
                },
                "start": 341,
                "end": 345
              }
            ],
            "start": 333,
            "end": 347
          },
          "definite": false,
          "start": 326,
          "end": 347
        }
      ],
      "declare": false,
      "start": 320,
      "end": 348
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
            "name": "v_cb",
            "optional": false,
            "typeAnnotation": null,
            "start": 355,
            "end": 359
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 367,
                  "end": 368
                },
                "start": 364,
                "end": 368
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 373,
                  "end": 374
                },
                "start": 370,
                "end": 374
              }
            ],
            "start": 362,
            "end": 376
          },
          "definite": false,
          "start": 355,
          "end": 376
        }
      ],
      "declare": false,
      "start": 349,
      "end": 377
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
            "name": "v_abc",
            "optional": false,
            "typeAnnotation": null,
            "start": 384,
            "end": 389
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 397,
                  "end": 398
                },
                "start": 394,
                "end": 398
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 403,
                  "end": 404
                },
                "start": 400,
                "end": 404
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 409,
                  "end": 410
                },
                "start": 406,
                "end": 410
              }
            ],
            "start": 392,
            "end": 412
          },
          "definite": false,
          "start": 384,
          "end": 412
        }
      ],
      "declare": false,
      "start": 378,
      "end": 413
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
            "name": "v_acb",
            "optional": false,
            "typeAnnotation": null,
            "start": 420,
            "end": 425
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 433,
                  "end": 434
                },
                "start": 430,
                "end": 434
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 439,
                  "end": 440
                },
                "start": 436,
                "end": 440
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 445,
                  "end": 446
                },
                "start": 442,
                "end": 446
              }
            ],
            "start": 428,
            "end": 448
          },
          "definite": false,
          "start": 420,
          "end": 448
        }
      ],
      "declare": false,
      "start": 414,
      "end": 449
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
            "name": "v_bac",
            "optional": false,
            "typeAnnotation": null,
            "start": 456,
            "end": 461
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 469,
                  "end": 470
                },
                "start": 466,
                "end": 470
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 475,
                  "end": 476
                },
                "start": 472,
                "end": 476
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 481,
                  "end": 482
                },
                "start": 478,
                "end": 482
              }
            ],
            "start": 464,
            "end": 484
          },
          "definite": false,
          "start": 456,
          "end": 484
        }
      ],
      "declare": false,
      "start": 450,
      "end": 485
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
            "name": "v_bca",
            "optional": false,
            "typeAnnotation": null,
            "start": 492,
            "end": 497
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 505,
                  "end": 506
                },
                "start": 502,
                "end": 506
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 511,
                  "end": 512
                },
                "start": 508,
                "end": 512
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 517,
                  "end": 518
                },
                "start": 514,
                "end": 518
              }
            ],
            "start": 500,
            "end": 520
          },
          "definite": false,
          "start": 492,
          "end": 520
        }
      ],
      "declare": false,
      "start": 486,
      "end": 521
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
            "name": "v_cab",
            "optional": false,
            "typeAnnotation": null,
            "start": 528,
            "end": 533
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 541,
                  "end": 542
                },
                "start": 538,
                "end": 542
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 547,
                  "end": 548
                },
                "start": 544,
                "end": 548
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 553,
                  "end": 554
                },
                "start": 550,
                "end": 554
              }
            ],
            "start": 536,
            "end": 556
          },
          "definite": false,
          "start": 528,
          "end": 556
        }
      ],
      "declare": false,
      "start": 522,
      "end": 557
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
            "name": "v_cba",
            "optional": false,
            "typeAnnotation": null,
            "start": 564,
            "end": 569
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 577,
                  "end": 578
                },
                "start": 574,
                "end": 578
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 583,
                  "end": 584
                },
                "start": 580,
                "end": 584
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 589,
                  "end": 590
                },
                "start": 586,
                "end": 590
              }
            ],
            "start": 572,
            "end": 592
          },
          "definite": false,
          "start": 564,
          "end": 592
        }
      ],
      "declare": false,
      "start": 558,
      "end": 593
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 593
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
    "value": "const",
    "start": 8,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 22,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 31,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 41,
    "end": 48
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 49,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 64,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 73,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 83,
    "end": 90
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 91,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 100,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 106,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 113,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 115,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 124,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 135,
    "end": 136
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 138,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "v_a",
    "start": 144,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 152,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 158,
    "end": 159
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 160,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "v_b",
    "start": 166,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 174,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 180,
    "end": 181
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 182,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "v_c",
    "start": 188,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 196,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 202,
    "end": 203
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 204,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "v_ab",
    "start": 210,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 219,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 225,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "const",
    "start": 233,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "v_ac",
    "start": 239,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 248,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 254,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 260,
    "end": 261
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 262,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "v_ba",
    "start": 268,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 277,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 283,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 289,
    "end": 290
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 291,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "v_bc",
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
    "type": "Punctuator",
    "value": "{",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 306,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 312,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 318,
    "end": 319
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 320,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "v_ca",
    "start": 326,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 335,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 341,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Keyword",
    "value": "const",
    "start": 349,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "v_cb",
    "start": 355,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 364,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "c",
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
    "type": "Punctuator",
    "value": "...",
    "start": 370,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 376,
    "end": 377
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 378,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "v_abc",
    "start": 384,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 394,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 397,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 398,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 400,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 406,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 412,
    "end": 413
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 414,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "v_acb",
    "start": 420,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 430,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 433,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 436,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 439,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 442,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 448,
    "end": 449
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 450,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "v_bac",
    "start": 456,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 466,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 470,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 472,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 478,
    "end": 481
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 481,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Keyword",
    "value": "const",
    "start": 486,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "v_bca",
    "start": 492,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 498,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 502,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 505,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 506,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 508,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 511,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 514,
    "end": 517
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 517,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 520,
    "end": 521
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 522,
    "end": 527
  },
  {
    "type": "Identifier",
    "value": "v_cab",
    "start": 528,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 534,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 536,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 538,
    "end": 541
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 541,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 542,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 544,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 547,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 548,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 550,
    "end": 553
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 553,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 555,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 556,
    "end": 557
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 558,
    "end": 563
  },
  {
    "type": "Identifier",
    "value": "v_cba",
    "start": 564,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 570,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 572,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 574,
    "end": 577
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 577,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 578,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 580,
    "end": 583
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 583,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 584,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 586,
    "end": 589
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 589,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 591,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 592,
    "end": 593
  }
]
```
