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
        "name": "Stream1",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 12
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T_Sync",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 19
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 13,
            "end": 19
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T_Async",
              "optional": false,
              "typeAnnotation": null,
              "start": 21,
              "end": 28
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 21,
            "end": 28
          }
        ],
        "start": 12,
        "end": 29
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Iterable",
              "optional": false,
              "typeAnnotation": null,
              "start": 32,
              "end": 40
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T_Sync",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 41,
                    "end": 47
                  },
                  "typeArguments": null,
                  "start": 41,
                  "end": 47
                }
              ],
              "start": 40,
              "end": 48
            },
            "start": 32,
            "end": 48
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "AsyncIterable",
              "optional": false,
              "typeAnnotation": null,
              "start": 51,
              "end": 64
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T_Async",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 65,
                    "end": 72
                  },
                  "typeArguments": null,
                  "start": 65,
                  "end": 72
                }
              ],
              "start": 64,
              "end": 73
            },
            "start": 51,
            "end": 73
          }
        ],
        "start": 32,
        "end": 73
      },
      "declare": false,
      "start": 0,
      "end": 74
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A1",
        "optional": false,
        "typeAnnotation": null,
        "start": 82,
        "end": 84
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 85,
        "end": 87
      },
      "abstract": false,
      "declare": false,
      "start": 76,
      "end": 87
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B1",
        "optional": false,
        "typeAnnotation": null,
        "start": 94,
        "end": 96
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 97,
        "end": 99
      },
      "abstract": false,
      "declare": false,
      "start": 88,
      "end": 99
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "loop1",
        "optional": false,
        "typeAnnotation": null,
        "start": 116,
        "end": 121
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "stream",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Stream1",
                "optional": false,
                "typeAnnotation": null,
                "start": 130,
                "end": 137
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 138,
                      "end": 140
                    },
                    "typeArguments": null,
                    "start": 138,
                    "end": 140
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 142,
                      "end": 144
                    },
                    "typeArguments": null,
                    "start": 142,
                    "end": 144
                  }
                ],
                "start": 137,
                "end": 145
              },
              "start": 130,
              "end": 145
            },
            "start": 128,
            "end": 145
          },
          "start": 122,
          "end": 145
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ForOfStatement",
            "await": true,
            "left": {
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
                    "typeAnnotation": null,
                    "start": 168,
                    "end": 169
                  },
                  "init": null,
                  "definite": false,
                  "start": 168,
                  "end": 169
                }
              ],
              "declare": false,
              "start": 162,
              "end": 169
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "stream",
              "optional": false,
              "typeAnnotation": null,
              "start": 173,
              "end": 179
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 181,
              "end": 183
            },
            "start": 151,
            "end": 183
          }
        ],
        "start": 147,
        "end": 185
      },
      "expression": false,
      "start": 101,
      "end": 185
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Stream2",
        "optional": false,
        "typeAnnotation": null,
        "start": 192,
        "end": 199
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T_Sync",
              "optional": false,
              "typeAnnotation": null,
              "start": 200,
              "end": 206
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 200,
            "end": 206
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T_Async",
              "optional": false,
              "typeAnnotation": null,
              "start": 208,
              "end": 215
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 208,
            "end": 215
          }
        ],
        "start": 199,
        "end": 216
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Iterable",
              "optional": false,
              "typeAnnotation": null,
              "start": 219,
              "end": 227
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T_Sync",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 228,
                    "end": 234
                  },
                  "typeArguments": null,
                  "start": 228,
                  "end": 234
                }
              ],
              "start": 227,
              "end": 235
            },
            "start": 219,
            "end": 235
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "AsyncIterable",
              "optional": false,
              "typeAnnotation": null,
              "start": 238,
              "end": 251
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T_Async",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 252,
                    "end": 259
                  },
                  "typeArguments": null,
                  "start": 252,
                  "end": 259
                }
              ],
              "start": 251,
              "end": 260
            },
            "start": 238,
            "end": 260
          }
        ],
        "start": 219,
        "end": 260
      },
      "declare": false,
      "start": 187,
      "end": 261
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A2",
        "optional": false,
        "typeAnnotation": null,
        "start": 269,
        "end": 271
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 272,
        "end": 274
      },
      "abstract": false,
      "declare": false,
      "start": 263,
      "end": 274
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B2",
        "optional": false,
        "typeAnnotation": null,
        "start": 281,
        "end": 283
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 284,
        "end": 286
      },
      "abstract": false,
      "declare": false,
      "start": 275,
      "end": 286
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "loop2",
        "optional": false,
        "typeAnnotation": null,
        "start": 303,
        "end": 308
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "stream",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Stream2",
                "optional": false,
                "typeAnnotation": null,
                "start": 317,
                "end": 324
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 325,
                      "end": 327
                    },
                    "typeArguments": null,
                    "start": 325,
                    "end": 327
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 329,
                      "end": 331
                    },
                    "typeArguments": null,
                    "start": 329,
                    "end": 331
                  }
                ],
                "start": 324,
                "end": 332
              },
              "start": 317,
              "end": 332
            },
            "start": 315,
            "end": 332
          },
          "start": 309,
          "end": 332
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ForOfStatement",
            "await": false,
            "left": {
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
                    "typeAnnotation": null,
                    "start": 349,
                    "end": 350
                  },
                  "init": null,
                  "definite": false,
                  "start": 349,
                  "end": 350
                }
              ],
              "declare": false,
              "start": 343,
              "end": 350
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "stream",
              "optional": false,
              "typeAnnotation": null,
              "start": 354,
              "end": 360
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 362,
              "end": 364
            },
            "start": 338,
            "end": 364
          }
        ],
        "start": 334,
        "end": 366
      },
      "expression": false,
      "start": 288,
      "end": 366
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Stream3",
        "optional": false,
        "typeAnnotation": null,
        "start": 373,
        "end": 380
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T_Sync",
              "optional": false,
              "typeAnnotation": null,
              "start": 381,
              "end": 387
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 381,
            "end": 387
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T_Async",
              "optional": false,
              "typeAnnotation": null,
              "start": 389,
              "end": 396
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 389,
            "end": 396
          }
        ],
        "start": 380,
        "end": 397
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Iterable",
              "optional": false,
              "typeAnnotation": null,
              "start": 400,
              "end": 408
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T_Sync",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 409,
                    "end": 415
                  },
                  "typeArguments": null,
                  "start": 409,
                  "end": 415
                }
              ],
              "start": 408,
              "end": 416
            },
            "start": 400,
            "end": 416
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "AsyncIterable",
              "optional": false,
              "typeAnnotation": null,
              "start": 419,
              "end": 432
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T_Async",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 433,
                    "end": 440
                  },
                  "typeArguments": null,
                  "start": 433,
                  "end": 440
                }
              ],
              "start": 432,
              "end": 441
            },
            "start": 419,
            "end": 441
          }
        ],
        "start": 400,
        "end": 441
      },
      "declare": false,
      "start": 368,
      "end": 442
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A3",
        "optional": false,
        "typeAnnotation": null,
        "start": 450,
        "end": 452
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 453,
        "end": 455
      },
      "abstract": false,
      "declare": false,
      "start": 444,
      "end": 455
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B3",
        "optional": false,
        "typeAnnotation": null,
        "start": 462,
        "end": 464
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 465,
        "end": 467
      },
      "abstract": false,
      "declare": false,
      "start": 456,
      "end": 467
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "loop3",
        "optional": false,
        "typeAnnotation": null,
        "start": 484,
        "end": 489
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "stream",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Stream3",
                "optional": false,
                "typeAnnotation": null,
                "start": 498,
                "end": 505
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 506,
                      "end": 508
                    },
                    "typeArguments": null,
                    "start": 506,
                    "end": 508
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 510,
                      "end": 512
                    },
                    "typeArguments": null,
                    "start": 510,
                    "end": 512
                  }
                ],
                "start": 505,
                "end": 513
              },
              "start": 498,
              "end": 513
            },
            "start": 496,
            "end": 513
          },
          "start": 490,
          "end": 513
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ForOfStatement",
            "await": true,
            "left": {
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
                    "typeAnnotation": null,
                    "start": 536,
                    "end": 537
                  },
                  "init": null,
                  "definite": false,
                  "start": 536,
                  "end": 537
                }
              ],
              "declare": false,
              "start": 530,
              "end": 537
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "stream",
              "optional": false,
              "typeAnnotation": null,
              "start": 541,
              "end": 547
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 549,
              "end": 551
            },
            "start": 519,
            "end": 551
          },
          {
            "type": "ForOfStatement",
            "await": false,
            "left": {
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
                    "typeAnnotation": null,
                    "start": 566,
                    "end": 567
                  },
                  "init": null,
                  "definite": false,
                  "start": 566,
                  "end": 567
                }
              ],
              "declare": false,
              "start": 560,
              "end": 567
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "stream",
              "optional": false,
              "typeAnnotation": null,
              "start": 571,
              "end": 577
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 579,
              "end": 581
            },
            "start": 555,
            "end": 581
          }
        ],
        "start": 515,
        "end": 583
      },
      "expression": false,
      "start": 469,
      "end": 583
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Stream4",
        "optional": false,
        "typeAnnotation": null,
        "start": 590,
        "end": 597
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T_Sync",
              "optional": false,
              "typeAnnotation": null,
              "start": 598,
              "end": 604
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 598,
            "end": 604
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T_Async",
              "optional": false,
              "typeAnnotation": null,
              "start": 606,
              "end": 613
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 606,
            "end": 613
          }
        ],
        "start": 597,
        "end": 614
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Iterable",
              "optional": false,
              "typeAnnotation": null,
              "start": 617,
              "end": 625
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T_Sync",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 626,
                    "end": 632
                  },
                  "typeArguments": null,
                  "start": 626,
                  "end": 632
                }
              ],
              "start": 625,
              "end": 633
            },
            "start": 617,
            "end": 633
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "AsyncIterable",
              "optional": false,
              "typeAnnotation": null,
              "start": 636,
              "end": 649
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T_Async",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 650,
                    "end": 657
                  },
                  "typeArguments": null,
                  "start": 650,
                  "end": 657
                }
              ],
              "start": 649,
              "end": 658
            },
            "start": 636,
            "end": 658
          }
        ],
        "start": 617,
        "end": 658
      },
      "declare": false,
      "start": 585,
      "end": 659
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A4",
        "optional": false,
        "typeAnnotation": null,
        "start": 667,
        "end": 669
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 670,
        "end": 672
      },
      "abstract": false,
      "declare": false,
      "start": 661,
      "end": 672
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B4",
        "optional": false,
        "typeAnnotation": null,
        "start": 679,
        "end": 681
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 682,
        "end": 684
      },
      "abstract": false,
      "declare": false,
      "start": 673,
      "end": 684
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "loop4",
        "optional": false,
        "typeAnnotation": null,
        "start": 790,
        "end": 795
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "stream",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Stream4",
                "optional": false,
                "typeAnnotation": null,
                "start": 804,
                "end": 811
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A4",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 812,
                      "end": 814
                    },
                    "typeArguments": null,
                    "start": 812,
                    "end": 814
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B4",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 816,
                      "end": 818
                    },
                    "typeArguments": null,
                    "start": 816,
                    "end": 818
                  }
                ],
                "start": 811,
                "end": 819
              },
              "start": 804,
              "end": 819
            },
            "start": 802,
            "end": 819
          },
          "start": 796,
          "end": 819
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ForOfStatement",
            "await": false,
            "left": {
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
                    "typeAnnotation": null,
                    "start": 836,
                    "end": 837
                  },
                  "init": null,
                  "definite": false,
                  "start": 836,
                  "end": 837
                }
              ],
              "declare": false,
              "start": 830,
              "end": 837
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "stream",
              "optional": false,
              "typeAnnotation": null,
              "start": 841,
              "end": 847
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 849,
              "end": 851
            },
            "start": 825,
            "end": 851
          },
          {
            "type": "ForOfStatement",
            "await": true,
            "left": {
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
                    "typeAnnotation": null,
                    "start": 872,
                    "end": 873
                  },
                  "init": null,
                  "definite": false,
                  "start": 872,
                  "end": 873
                }
              ],
              "declare": false,
              "start": 866,
              "end": 873
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "stream",
              "optional": false,
              "typeAnnotation": null,
              "start": 877,
              "end": 883
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 885,
              "end": 887
            },
            "start": 855,
            "end": 887
          }
        ],
        "start": 821,
        "end": 889
      },
      "expression": false,
      "start": 775,
      "end": 889
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 889
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
    "value": "Stream1",
    "start": 5,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "T_Sync",
    "start": 13,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "T_Async",
    "start": 21,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "Iterable",
    "start": 32,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 40,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "T_Sync",
    "start": 41,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "AsyncIterable",
    "start": 51,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "T_Async",
    "start": 65,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 73,
    "end": 74
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 76,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "A1",
    "start": 82,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 86,
    "end": 87
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 88,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "B1",
    "start": 94,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 101,
    "end": 106
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 107,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "loop1",
    "start": 116,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "stream",
    "start": 122,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "Stream1",
    "start": 130,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "A1",
    "start": 138,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "B1",
    "start": 142,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 147,
    "end": 148
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 151,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 155,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 161,
    "end": 162
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 162,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 168,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 170,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "stream",
    "start": 173,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 187,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "Stream2",
    "start": 192,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 199,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "T_Sync",
    "start": 200,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 206,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "T_Async",
    "start": 208,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "Iterable",
    "start": 219,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "T_Sync",
    "start": 228,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 236,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "AsyncIterable",
    "start": 238,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "T_Async",
    "start": 252,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "class",
    "start": 263,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "A2",
    "start": 269,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 273,
    "end": 274
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 275,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "B2",
    "start": 281,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 285,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 288,
    "end": 293
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 294,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "loop2",
    "start": 303,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 308,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "stream",
    "start": 309,
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
    "value": "Stream2",
    "start": 317,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 324,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "A2",
    "start": 325,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 327,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "B2",
    "start": 329,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 334,
    "end": 335
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 338,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 342,
    "end": 343
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 343,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 349,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 351,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "stream",
    "start": 354,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "}",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 365,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 368,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "Stream3",
    "start": 373,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 380,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "T_Sync",
    "start": 381,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 387,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "T_Async",
    "start": 389,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 396,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 398,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "Iterable",
    "start": 400,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 408,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "T_Sync",
    "start": 409,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 417,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "AsyncIterable",
    "start": 419,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 432,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "T_Async",
    "start": 433,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "class",
    "start": 444,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "A3",
    "start": 450,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 454,
    "end": 455
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 456,
    "end": 461
  },
  {
    "type": "Identifier",
    "value": "B3",
    "start": 462,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 465,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 466,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 469,
    "end": 474
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 475,
    "end": 483
  },
  {
    "type": "Identifier",
    "value": "loop3",
    "start": 484,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 489,
    "end": 490
  },
  {
    "type": "Identifier",
    "value": "stream",
    "start": 490,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 496,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "Stream3",
    "start": 498,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 505,
    "end": 506
  },
  {
    "type": "Identifier",
    "value": "A3",
    "start": 506,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 508,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "B3",
    "start": 510,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 513,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 515,
    "end": 516
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 519,
    "end": 522
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 523,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 529,
    "end": 530
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 530,
    "end": 535
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 536,
    "end": 537
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 538,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "stream",
    "start": 541,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 547,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 550,
    "end": 551
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 555,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 559,
    "end": 560
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 560,
    "end": 565
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 566,
    "end": 567
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 568,
    "end": 570
  },
  {
    "type": "Identifier",
    "value": "stream",
    "start": 571,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 577,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 579,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 580,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 582,
    "end": 583
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 585,
    "end": 589
  },
  {
    "type": "Identifier",
    "value": "Stream4",
    "start": 590,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 597,
    "end": 598
  },
  {
    "type": "Identifier",
    "value": "T_Sync",
    "start": 598,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 604,
    "end": 605
  },
  {
    "type": "Identifier",
    "value": "T_Async",
    "start": 606,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 613,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 615,
    "end": 616
  },
  {
    "type": "Identifier",
    "value": "Iterable",
    "start": 617,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 625,
    "end": 626
  },
  {
    "type": "Identifier",
    "value": "T_Sync",
    "start": 626,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 632,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 634,
    "end": 635
  },
  {
    "type": "Identifier",
    "value": "AsyncIterable",
    "start": 636,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 649,
    "end": 650
  },
  {
    "type": "Identifier",
    "value": "T_Async",
    "start": 650,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 657,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 658,
    "end": 659
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 661,
    "end": 666
  },
  {
    "type": "Identifier",
    "value": "A4",
    "start": 667,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 670,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 671,
    "end": 672
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 673,
    "end": 678
  },
  {
    "type": "Identifier",
    "value": "B4",
    "start": 679,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 682,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 683,
    "end": 684
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 775,
    "end": 780
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 781,
    "end": 789
  },
  {
    "type": "Identifier",
    "value": "loop4",
    "start": 790,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 795,
    "end": 796
  },
  {
    "type": "Identifier",
    "value": "stream",
    "start": 796,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 802,
    "end": 803
  },
  {
    "type": "Identifier",
    "value": "Stream4",
    "start": 804,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 811,
    "end": 812
  },
  {
    "type": "Identifier",
    "value": "A4",
    "start": 812,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 814,
    "end": 815
  },
  {
    "type": "Identifier",
    "value": "B4",
    "start": 816,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 818,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 819,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 821,
    "end": 822
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 825,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 829,
    "end": 830
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 830,
    "end": 835
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 836,
    "end": 837
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 838,
    "end": 840
  },
  {
    "type": "Identifier",
    "value": "stream",
    "start": 841,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 847,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 849,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 850,
    "end": 851
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 855,
    "end": 858
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 859,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 865,
    "end": 866
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 866,
    "end": 871
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 872,
    "end": 873
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 874,
    "end": 876
  },
  {
    "type": "Identifier",
    "value": "stream",
    "start": 877,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 883,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 885,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 886,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 888,
    "end": 889
  }
]
```
