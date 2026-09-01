__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 10
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 24,
              "end": 25
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 27,
                "end": 33
              },
              "start": 25,
              "end": 33
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 17,
            "end": 34
          }
        ],
        "start": 11,
        "end": 36
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 36
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null,
        "start": 44,
        "end": 51
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 60,
        "end": 64
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 78,
              "end": 79
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 81,
                "end": 87
              },
              "start": 79,
              "end": 87
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 71,
            "end": 88
          }
        ],
        "start": 65,
        "end": 90
      },
      "abstract": false,
      "declare": false,
      "start": 38,
      "end": 90
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
            "name": "a1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 106,
                            "end": 112
                          },
                          "start": 104,
                          "end": 112
                        },
                        "start": 103,
                        "end": 112
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 115,
                        "end": 121
                      },
                      "start": 113,
                      "end": 121
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 102,
                    "end": 121
                  }
                ],
                "start": 100,
                "end": 123
              },
              "start": 98,
              "end": 123
            },
            "start": 96,
            "end": 123
          },
          "init": null,
          "definite": false,
          "start": 96,
          "end": 123
        }
      ],
      "declare": false,
      "start": 92,
      "end": 124
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
            "name": "b1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 139,
                            "end": 145
                          },
                          "start": 137,
                          "end": 145
                        },
                        "start": 136,
                        "end": 145
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 148,
                        "end": 154
                      },
                      "start": 146,
                      "end": 154
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 135,
                    "end": 154
                  }
                ],
                "start": 133,
                "end": 156
              },
              "start": 131,
              "end": 156
            },
            "start": 129,
            "end": 156
          },
          "init": null,
          "definite": false,
          "start": 129,
          "end": 156
        }
      ],
      "declare": false,
      "start": 125,
      "end": 157
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
            "name": "a2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "index",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 177,
                            "end": 183
                          },
                          "start": 175,
                          "end": 183
                        },
                        "start": 170,
                        "end": 183
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 186,
                          "end": 190
                        },
                        "typeArguments": null,
                        "start": 186,
                        "end": 190
                      },
                      "start": 184,
                      "end": 190
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 169,
                    "end": 190
                  }
                ],
                "start": 167,
                "end": 192
              },
              "start": 165,
              "end": 192
            },
            "start": 163,
            "end": 192
          },
          "init": null,
          "definite": false,
          "start": 163,
          "end": 192
        }
      ],
      "declare": false,
      "start": 159,
      "end": 193
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
            "name": "b2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "index",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 212,
                            "end": 218
                          },
                          "start": 210,
                          "end": 218
                        },
                        "start": 205,
                        "end": 218
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 221,
                          "end": 228
                        },
                        "typeArguments": null,
                        "start": 221,
                        "end": 228
                      },
                      "start": 219,
                      "end": 228
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 204,
                    "end": 228
                  }
                ],
                "start": 202,
                "end": 230
              },
              "start": 200,
              "end": 230
            },
            "start": 198,
            "end": 230
          },
          "init": null,
          "definite": false,
          "start": 198,
          "end": 230
        }
      ],
      "declare": false,
      "start": 194,
      "end": 231
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
            "name": "a3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "index",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 251,
                            "end": 257
                          },
                          "start": 249,
                          "end": 257
                        },
                        "start": 244,
                        "end": 257
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 260,
                        "end": 266
                      },
                      "start": 258,
                      "end": 266
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 243,
                    "end": 266
                  }
                ],
                "start": 241,
                "end": 268
              },
              "start": 239,
              "end": 268
            },
            "start": 237,
            "end": 268
          },
          "init": null,
          "definite": false,
          "start": 237,
          "end": 268
        }
      ],
      "declare": false,
      "start": 233,
      "end": 269
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
            "name": "b3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "index",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 288,
                            "end": 294
                          },
                          "start": 286,
                          "end": 294
                        },
                        "start": 281,
                        "end": 294
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 297,
                        "end": 303
                      },
                      "start": 295,
                      "end": 303
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 280,
                    "end": 303
                  }
                ],
                "start": 278,
                "end": 305
              },
              "start": 276,
              "end": 305
            },
            "start": 274,
            "end": 305
          },
          "init": null,
          "definite": false,
          "start": 274,
          "end": 305
        }
      ],
      "declare": false,
      "start": 270,
      "end": 306
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
            "name": "a4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "index",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 326,
                            "end": 332
                          },
                          "start": 324,
                          "end": 332
                        },
                        "start": 319,
                        "end": 332
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 335,
                          "end": 339
                        },
                        "typeArguments": null,
                        "start": 335,
                        "end": 339
                      },
                      "start": 333,
                      "end": 339
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 318,
                    "end": 339
                  }
                ],
                "start": 316,
                "end": 341
              },
              "start": 314,
              "end": 341
            },
            "start": 312,
            "end": 341
          },
          "init": null,
          "definite": false,
          "start": 312,
          "end": 341
        }
      ],
      "declare": false,
      "start": 308,
      "end": 342
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
            "name": "b4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "index",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 361,
                            "end": 367
                          },
                          "start": 359,
                          "end": 367
                        },
                        "start": 354,
                        "end": 367
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 370,
                          "end": 377
                        },
                        "typeArguments": null,
                        "start": 370,
                        "end": 377
                      },
                      "start": 368,
                      "end": 377
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 353,
                    "end": 377
                  }
                ],
                "start": 351,
                "end": 379
              },
              "start": 349,
              "end": 379
            },
            "start": 347,
            "end": 379
          },
          "init": null,
          "definite": false,
          "start": 347,
          "end": 379
        }
      ],
      "declare": false,
      "start": 343,
      "end": 380
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
            "start": 400,
            "end": 404
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 407,
              "end": 409
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 412,
              "end": 414
            },
            "start": 407,
            "end": 414
          },
          "definite": false,
          "start": 400,
          "end": 414
        }
      ],
      "declare": false,
      "start": 396,
      "end": 415
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
            "start": 420,
            "end": 424
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 427,
              "end": 429
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 432,
              "end": 434
            },
            "start": 427,
            "end": 434
          },
          "definite": false,
          "start": 420,
          "end": 434
        }
      ],
      "declare": false,
      "start": 416,
      "end": 435
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
            "start": 440,
            "end": 444
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 447,
              "end": 449
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null,
              "start": 452,
              "end": 454
            },
            "start": 447,
            "end": 454
          },
          "definite": false,
          "start": 440,
          "end": 454
        }
      ],
      "declare": false,
      "start": 436,
      "end": 455
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
            "start": 460,
            "end": 464
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 467,
              "end": 469
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null,
              "start": 472,
              "end": 474
            },
            "start": 467,
            "end": 474
          },
          "definite": false,
          "start": 460,
          "end": 474
        }
      ],
      "declare": false,
      "start": 456,
      "end": 475
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
            "start": 481,
            "end": 485
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 488,
              "end": 490
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 493,
              "end": 495
            },
            "start": 488,
            "end": 495
          },
          "definite": false,
          "start": 481,
          "end": 495
        }
      ],
      "declare": false,
      "start": 477,
      "end": 496
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
            "start": 501,
            "end": 505
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 508,
              "end": 510
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 513,
              "end": 515
            },
            "start": 508,
            "end": 515
          },
          "definite": false,
          "start": 501,
          "end": 515
        }
      ],
      "declare": false,
      "start": 497,
      "end": 516
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
            "start": 521,
            "end": 525
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null,
              "start": 528,
              "end": 530
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 533,
              "end": 535
            },
            "start": 528,
            "end": 535
          },
          "definite": false,
          "start": 521,
          "end": 535
        }
      ],
      "declare": false,
      "start": 517,
      "end": 536
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
            "start": 541,
            "end": 545
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null,
              "start": 548,
              "end": 550
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 553,
              "end": 555
            },
            "start": 548,
            "end": 555
          },
          "definite": false,
          "start": 541,
          "end": 555
        }
      ],
      "declare": false,
      "start": 537,
      "end": 556
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
            "start": 576,
            "end": 580
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 583,
              "end": 585
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 588,
              "end": 590
            },
            "start": 583,
            "end": 590
          },
          "definite": false,
          "start": 576,
          "end": 590
        }
      ],
      "declare": false,
      "start": 572,
      "end": 591
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
            "start": 596,
            "end": 600
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 603,
              "end": 605
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 608,
              "end": 610
            },
            "start": 603,
            "end": 610
          },
          "definite": false,
          "start": 596,
          "end": 610
        }
      ],
      "declare": false,
      "start": 592,
      "end": 611
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
            "start": 616,
            "end": 620
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 623,
              "end": 625
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null,
              "start": 628,
              "end": 630
            },
            "start": 623,
            "end": 630
          },
          "definite": false,
          "start": 616,
          "end": 630
        }
      ],
      "declare": false,
      "start": 612,
      "end": 631
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
            "start": 636,
            "end": 640
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 643,
              "end": 645
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null,
              "start": 648,
              "end": 650
            },
            "start": 643,
            "end": 650
          },
          "definite": false,
          "start": 636,
          "end": 650
        }
      ],
      "declare": false,
      "start": 632,
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
            "name": "r2b1",
            "optional": false,
            "typeAnnotation": null,
            "start": 657,
            "end": 661
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 664,
              "end": 666
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 669,
              "end": 671
            },
            "start": 664,
            "end": 671
          },
          "definite": false,
          "start": 657,
          "end": 671
        }
      ],
      "declare": false,
      "start": 653,
      "end": 672
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
            "start": 677,
            "end": 681
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 684,
              "end": 686
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 689,
              "end": 691
            },
            "start": 684,
            "end": 691
          },
          "definite": false,
          "start": 677,
          "end": 691
        }
      ],
      "declare": false,
      "start": 673,
      "end": 692
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
            "start": 697,
            "end": 701
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null,
              "start": 704,
              "end": 706
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 709,
              "end": 711
            },
            "start": 704,
            "end": 711
          },
          "definite": false,
          "start": 697,
          "end": 711
        }
      ],
      "declare": false,
      "start": 693,
      "end": 712
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
            "start": 717,
            "end": 721
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null,
              "start": 724,
              "end": 726
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 729,
              "end": 731
            },
            "start": 724,
            "end": 731
          },
          "definite": false,
          "start": 717,
          "end": 731
        }
      ],
      "declare": false,
      "start": 713,
      "end": 732
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
            "name": "r3a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 753,
            "end": 757
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 760,
              "end": 762
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 766,
              "end": 768
            },
            "start": 760,
            "end": 768
          },
          "definite": false,
          "start": 753,
          "end": 768
        }
      ],
      "declare": false,
      "start": 749,
      "end": 769
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
            "name": "r3a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 774,
            "end": 778
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 781,
              "end": 783
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 787,
              "end": 789
            },
            "start": 781,
            "end": 789
          },
          "definite": false,
          "start": 774,
          "end": 789
        }
      ],
      "declare": false,
      "start": 770,
      "end": 790
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
            "name": "r3a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 795,
            "end": 799
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 802,
              "end": 804
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null,
              "start": 808,
              "end": 810
            },
            "start": 802,
            "end": 810
          },
          "definite": false,
          "start": 795,
          "end": 810
        }
      ],
      "declare": false,
      "start": 791,
      "end": 811
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
            "name": "r3a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 816,
            "end": 820
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 823,
              "end": 825
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null,
              "start": 829,
              "end": 831
            },
            "start": 823,
            "end": 831
          },
          "definite": false,
          "start": 816,
          "end": 831
        }
      ],
      "declare": false,
      "start": 812,
      "end": 832
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
            "name": "r3b1",
            "optional": false,
            "typeAnnotation": null,
            "start": 838,
            "end": 842
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 845,
              "end": 847
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 851,
              "end": 853
            },
            "start": 845,
            "end": 853
          },
          "definite": false,
          "start": 838,
          "end": 853
        }
      ],
      "declare": false,
      "start": 834,
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
            "name": "r3b1",
            "optional": false,
            "typeAnnotation": null,
            "start": 859,
            "end": 863
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 866,
              "end": 868
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 872,
              "end": 874
            },
            "start": 866,
            "end": 874
          },
          "definite": false,
          "start": 859,
          "end": 874
        }
      ],
      "declare": false,
      "start": 855,
      "end": 875
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
            "name": "r3b1",
            "optional": false,
            "typeAnnotation": null,
            "start": 880,
            "end": 884
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null,
              "start": 887,
              "end": 889
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 893,
              "end": 895
            },
            "start": 887,
            "end": 895
          },
          "definite": false,
          "start": 880,
          "end": 895
        }
      ],
      "declare": false,
      "start": 876,
      "end": 896
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
            "name": "r3b1",
            "optional": false,
            "typeAnnotation": null,
            "start": 901,
            "end": 905
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null,
              "start": 908,
              "end": 910
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 914,
              "end": 916
            },
            "start": 908,
            "end": 916
          },
          "definite": false,
          "start": 901,
          "end": 916
        }
      ],
      "declare": false,
      "start": 897,
      "end": 917
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
            "name": "r4a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 938,
            "end": 942
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 945,
              "end": 947
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 951,
              "end": 953
            },
            "start": 945,
            "end": 953
          },
          "definite": false,
          "start": 938,
          "end": 953
        }
      ],
      "declare": false,
      "start": 934,
      "end": 954
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
            "name": "r4a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 959,
            "end": 963
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 966,
              "end": 968
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 972,
              "end": 974
            },
            "start": 966,
            "end": 974
          },
          "definite": false,
          "start": 959,
          "end": 974
        }
      ],
      "declare": false,
      "start": 955,
      "end": 975
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
            "name": "r4a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 980,
            "end": 984
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 987,
              "end": 989
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null,
              "start": 993,
              "end": 995
            },
            "start": 987,
            "end": 995
          },
          "definite": false,
          "start": 980,
          "end": 995
        }
      ],
      "declare": false,
      "start": 976,
      "end": 996
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
            "name": "r4a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1001,
            "end": 1005
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1008,
              "end": 1010
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1014,
              "end": 1016
            },
            "start": 1008,
            "end": 1016
          },
          "definite": false,
          "start": 1001,
          "end": 1016
        }
      ],
      "declare": false,
      "start": 997,
      "end": 1017
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
            "name": "r4b1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1023,
            "end": 1027
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1030,
              "end": 1032
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1036,
              "end": 1038
            },
            "start": 1030,
            "end": 1038
          },
          "definite": false,
          "start": 1023,
          "end": 1038
        }
      ],
      "declare": false,
      "start": 1019,
      "end": 1039
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
            "name": "r4b1",
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
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1051,
              "end": 1053
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1057,
              "end": 1059
            },
            "start": 1051,
            "end": 1059
          },
          "definite": false,
          "start": 1044,
          "end": 1059
        }
      ],
      "declare": false,
      "start": 1040,
      "end": 1060
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
            "name": "r4b1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1065,
            "end": 1069
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1072,
              "end": 1074
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1078,
              "end": 1080
            },
            "start": 1072,
            "end": 1080
          },
          "definite": false,
          "start": 1065,
          "end": 1080
        }
      ],
      "declare": false,
      "start": 1061,
      "end": 1081
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
            "name": "r4b1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1086,
            "end": 1090
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1093,
              "end": 1095
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1099,
              "end": 1101
            },
            "start": 1093,
            "end": 1101
          },
          "definite": false,
          "start": 1086,
          "end": 1101
        }
      ],
      "declare": false,
      "start": 1082,
      "end": 1102
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
            "name": "r5a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1123,
            "end": 1127
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1130,
              "end": 1132
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1136,
              "end": 1138
            },
            "start": 1130,
            "end": 1138
          },
          "definite": false,
          "start": 1123,
          "end": 1138
        }
      ],
      "declare": false,
      "start": 1119,
      "end": 1139
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
            "name": "r5a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1144,
            "end": 1148
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1151,
              "end": 1153
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1157,
              "end": 1159
            },
            "start": 1151,
            "end": 1159
          },
          "definite": false,
          "start": 1144,
          "end": 1159
        }
      ],
      "declare": false,
      "start": 1140,
      "end": 1160
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
            "name": "r5a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1165,
            "end": 1169
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1172,
              "end": 1174
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1178,
              "end": 1180
            },
            "start": 1172,
            "end": 1180
          },
          "definite": false,
          "start": 1165,
          "end": 1180
        }
      ],
      "declare": false,
      "start": 1161,
      "end": 1181
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
            "name": "r5a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1186,
            "end": 1190
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1193,
              "end": 1195
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1199,
              "end": 1201
            },
            "start": 1193,
            "end": 1201
          },
          "definite": false,
          "start": 1186,
          "end": 1201
        }
      ],
      "declare": false,
      "start": 1182,
      "end": 1202
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
            "name": "r5b1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1208,
            "end": 1212
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1215,
              "end": 1217
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1221,
              "end": 1223
            },
            "start": 1215,
            "end": 1223
          },
          "definite": false,
          "start": 1208,
          "end": 1223
        }
      ],
      "declare": false,
      "start": 1204,
      "end": 1224
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
            "name": "r5b1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1229,
            "end": 1233
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1236,
              "end": 1238
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1242,
              "end": 1244
            },
            "start": 1236,
            "end": 1244
          },
          "definite": false,
          "start": 1229,
          "end": 1244
        }
      ],
      "declare": false,
      "start": 1225,
      "end": 1245
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
            "name": "r5b1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1250,
            "end": 1254
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1257,
              "end": 1259
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1263,
              "end": 1265
            },
            "start": 1257,
            "end": 1265
          },
          "definite": false,
          "start": 1250,
          "end": 1265
        }
      ],
      "declare": false,
      "start": 1246,
      "end": 1266
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
            "name": "r5b1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1271,
            "end": 1275
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1278,
              "end": 1280
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1284,
              "end": 1286
            },
            "start": 1278,
            "end": 1286
          },
          "definite": false,
          "start": 1271,
          "end": 1286
        }
      ],
      "declare": false,
      "start": 1267,
      "end": 1287
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
            "name": "r6a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1308,
            "end": 1312
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1315,
              "end": 1317
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1321,
              "end": 1323
            },
            "start": 1315,
            "end": 1323
          },
          "definite": false,
          "start": 1308,
          "end": 1323
        }
      ],
      "declare": false,
      "start": 1304,
      "end": 1324
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
            "name": "r6a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1329,
            "end": 1333
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1336,
              "end": 1338
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1342,
              "end": 1344
            },
            "start": 1336,
            "end": 1344
          },
          "definite": false,
          "start": 1329,
          "end": 1344
        }
      ],
      "declare": false,
      "start": 1325,
      "end": 1345
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
            "name": "r6a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1350,
            "end": 1354
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1357,
              "end": 1359
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1363,
              "end": 1365
            },
            "start": 1357,
            "end": 1365
          },
          "definite": false,
          "start": 1350,
          "end": 1365
        }
      ],
      "declare": false,
      "start": 1346,
      "end": 1366
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
            "name": "r6a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1371,
            "end": 1375
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1378,
              "end": 1380
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1384,
              "end": 1386
            },
            "start": 1378,
            "end": 1386
          },
          "definite": false,
          "start": 1371,
          "end": 1386
        }
      ],
      "declare": false,
      "start": 1367,
      "end": 1387
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
            "name": "r6b1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1393,
            "end": 1397
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1400,
              "end": 1402
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1406,
              "end": 1408
            },
            "start": 1400,
            "end": 1408
          },
          "definite": false,
          "start": 1393,
          "end": 1408
        }
      ],
      "declare": false,
      "start": 1389,
      "end": 1409
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
            "name": "r6b1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1414,
            "end": 1418
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1421,
              "end": 1423
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1427,
              "end": 1429
            },
            "start": 1421,
            "end": 1429
          },
          "definite": false,
          "start": 1414,
          "end": 1429
        }
      ],
      "declare": false,
      "start": 1410,
      "end": 1430
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
            "name": "r6b1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1435,
            "end": 1439
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1442,
              "end": 1444
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1448,
              "end": 1450
            },
            "start": 1442,
            "end": 1450
          },
          "definite": false,
          "start": 1435,
          "end": 1450
        }
      ],
      "declare": false,
      "start": 1431,
      "end": 1451
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
            "name": "r6b1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1456,
            "end": 1460
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1463,
              "end": 1465
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1469,
              "end": 1471
            },
            "start": 1463,
            "end": 1471
          },
          "definite": false,
          "start": 1456,
          "end": 1471
        }
      ],
      "declare": false,
      "start": 1452,
      "end": 1472
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
            "name": "r7a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1494,
            "end": 1498
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1501,
              "end": 1503
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1508,
              "end": 1510
            },
            "start": 1501,
            "end": 1510
          },
          "definite": false,
          "start": 1494,
          "end": 1510
        }
      ],
      "declare": false,
      "start": 1490,
      "end": 1511
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
            "name": "r7a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1516,
            "end": 1520
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1523,
              "end": 1525
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1530,
              "end": 1532
            },
            "start": 1523,
            "end": 1532
          },
          "definite": false,
          "start": 1516,
          "end": 1532
        }
      ],
      "declare": false,
      "start": 1512,
      "end": 1533
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
            "name": "r7a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1538,
            "end": 1542
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1545,
              "end": 1547
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1552,
              "end": 1554
            },
            "start": 1545,
            "end": 1554
          },
          "definite": false,
          "start": 1538,
          "end": 1554
        }
      ],
      "declare": false,
      "start": 1534,
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
            "name": "r7a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1560,
            "end": 1564
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1567,
              "end": 1569
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1574,
              "end": 1576
            },
            "start": 1567,
            "end": 1576
          },
          "definite": false,
          "start": 1560,
          "end": 1576
        }
      ],
      "declare": false,
      "start": 1556,
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
            "name": "r7b1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1583,
            "end": 1587
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1590,
              "end": 1592
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1597,
              "end": 1599
            },
            "start": 1590,
            "end": 1599
          },
          "definite": false,
          "start": 1583,
          "end": 1599
        }
      ],
      "declare": false,
      "start": 1579,
      "end": 1600
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
            "name": "r7b1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1605,
            "end": 1609
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1612,
              "end": 1614
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1619,
              "end": 1621
            },
            "start": 1612,
            "end": 1621
          },
          "definite": false,
          "start": 1605,
          "end": 1621
        }
      ],
      "declare": false,
      "start": 1601,
      "end": 1622
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
            "name": "r7b1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1627,
            "end": 1631
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1634,
              "end": 1636
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1641,
              "end": 1643
            },
            "start": 1634,
            "end": 1643
          },
          "definite": false,
          "start": 1627,
          "end": 1643
        }
      ],
      "declare": false,
      "start": 1623,
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
            "name": "r7b1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1649,
            "end": 1653
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1656,
              "end": 1658
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1663,
              "end": 1665
            },
            "start": 1656,
            "end": 1665
          },
          "definite": false,
          "start": 1649,
          "end": 1665
        }
      ],
      "declare": false,
      "start": 1645,
      "end": 1666
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
            "name": "r8a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1688,
            "end": 1692
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1695,
              "end": 1697
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1702,
              "end": 1704
            },
            "start": 1695,
            "end": 1704
          },
          "definite": false,
          "start": 1688,
          "end": 1704
        }
      ],
      "declare": false,
      "start": 1684,
      "end": 1705
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
            "name": "r8a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1710,
            "end": 1714
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1717,
              "end": 1719
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1724,
              "end": 1726
            },
            "start": 1717,
            "end": 1726
          },
          "definite": false,
          "start": 1710,
          "end": 1726
        }
      ],
      "declare": false,
      "start": 1706,
      "end": 1727
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
            "name": "r8a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1732,
            "end": 1736
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1739,
              "end": 1741
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1746,
              "end": 1748
            },
            "start": 1739,
            "end": 1748
          },
          "definite": false,
          "start": 1732,
          "end": 1748
        }
      ],
      "declare": false,
      "start": 1728,
      "end": 1749
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
            "name": "r8a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1754,
            "end": 1758
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1761,
              "end": 1763
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1768,
              "end": 1770
            },
            "start": 1761,
            "end": 1770
          },
          "definite": false,
          "start": 1754,
          "end": 1770
        }
      ],
      "declare": false,
      "start": 1750,
      "end": 1771
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
            "name": "r8b1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1777,
            "end": 1781
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1784,
              "end": 1786
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1791,
              "end": 1793
            },
            "start": 1784,
            "end": 1793
          },
          "definite": false,
          "start": 1777,
          "end": 1793
        }
      ],
      "declare": false,
      "start": 1773,
      "end": 1794
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
            "name": "r8b1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1799,
            "end": 1803
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1806,
              "end": 1808
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1813,
              "end": 1815
            },
            "start": 1806,
            "end": 1815
          },
          "definite": false,
          "start": 1799,
          "end": 1815
        }
      ],
      "declare": false,
      "start": 1795,
      "end": 1816
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
            "name": "r8b1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1821,
            "end": 1825
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1828,
              "end": 1830
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1835,
              "end": 1837
            },
            "start": 1828,
            "end": 1837
          },
          "definite": false,
          "start": 1821,
          "end": 1837
        }
      ],
      "declare": false,
      "start": 1817,
      "end": 1838
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
            "name": "r8b1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1843,
            "end": 1847
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1850,
              "end": 1852
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1857,
              "end": 1859
            },
            "start": 1850,
            "end": 1859
          },
          "definite": false,
          "start": 1843,
          "end": 1859
        }
      ],
      "declare": false,
      "start": 1839,
      "end": 1860
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1860
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 6,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 11,
    "end": 12
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 17,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 27,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 35,
    "end": 36
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 38,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 44,
    "end": 51
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 52,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 60,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 65,
    "end": 66
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 71,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 81,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 89,
    "end": 90
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 92,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 96,
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
    "type": "Punctuator",
    "value": "[",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "value": "]",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 113,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 115,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 123,
    "end": 124
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 125,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 129,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 139,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 146,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 148,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 156,
    "end": 157
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 159,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 163,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 169,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 170,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 175,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 177,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "Base",
    "start": 186,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 192,
    "end": 193
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 194,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 198,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 204,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 205,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 212,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 221,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 230,
    "end": 231
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 233,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 237,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 243,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 244,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 249,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 251,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 258,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 260,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 268,
    "end": 269
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 270,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 274,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 280,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 281,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 286,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 288,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 295,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 297,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 305,
    "end": 306
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 308,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 312,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 318,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 319,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 324,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 326,
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
    "value": ":",
    "start": 333,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 335,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 341,
    "end": 342
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 343,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 347,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 353,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 354,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 359,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 361,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 368,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 370,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 379,
    "end": 380
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 396,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "r1a1",
    "start": 400,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 405,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 407,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 410,
    "end": 411
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 412,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 414,
    "end": 415
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 416,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "r1a1",
    "start": 420,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 425,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 427,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 430,
    "end": 431
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 432,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 434,
    "end": 435
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 436,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "r1a1",
    "start": 440,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 445,
    "end": 446
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 447,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 450,
    "end": 451
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 452,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 454,
    "end": 455
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 456,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "r1a1",
    "start": 460,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 465,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 467,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 470,
    "end": 471
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 472,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 474,
    "end": 475
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 477,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "r1b1",
    "start": 481,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 486,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 488,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 491,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 493,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 495,
    "end": 496
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 497,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "r1b1",
    "start": 501,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 506,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 508,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 511,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 513,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 515,
    "end": 516
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 517,
    "end": 520
  },
  {
    "type": "Identifier",
    "value": "r1b1",
    "start": 521,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 526,
    "end": 527
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 528,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 531,
    "end": 532
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 533,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 535,
    "end": 536
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 537,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "r1b1",
    "start": 541,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 546,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 548,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 551,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 553,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 555,
    "end": 556
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 572,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "r2a1",
    "start": 576,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 581,
    "end": 582
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 583,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 586,
    "end": 587
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 588,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 590,
    "end": 591
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 592,
    "end": 595
  },
  {
    "type": "Identifier",
    "value": "r2a1",
    "start": 596,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 601,
    "end": 602
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 603,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 606,
    "end": 607
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 608,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 610,
    "end": 611
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 612,
    "end": 615
  },
  {
    "type": "Identifier",
    "value": "r2a1",
    "start": 616,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 621,
    "end": 622
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 623,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 626,
    "end": 627
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 628,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 630,
    "end": 631
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 632,
    "end": 635
  },
  {
    "type": "Identifier",
    "value": "r2a1",
    "start": 636,
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
    "value": "a4",
    "start": 643,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 646,
    "end": 647
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 648,
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
    "start": 653,
    "end": 656
  },
  {
    "type": "Identifier",
    "value": "r2b1",
    "start": 657,
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
    "value": "b1",
    "start": 664,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 667,
    "end": 668
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 669,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 671,
    "end": 672
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 673,
    "end": 676
  },
  {
    "type": "Identifier",
    "value": "r2b1",
    "start": 677,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 682,
    "end": 683
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 684,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 687,
    "end": 688
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 689,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 691,
    "end": 692
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 693,
    "end": 696
  },
  {
    "type": "Identifier",
    "value": "r2b1",
    "start": 697,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 702,
    "end": 703
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 704,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 707,
    "end": 708
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 709,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 711,
    "end": 712
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 713,
    "end": 716
  },
  {
    "type": "Identifier",
    "value": "r2b1",
    "start": 717,
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
    "value": "b4",
    "start": 724,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 727,
    "end": 728
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 729,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 731,
    "end": 732
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 749,
    "end": 752
  },
  {
    "type": "Identifier",
    "value": "r3a1",
    "start": 753,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 758,
    "end": 759
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 760,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": "<=",
    "start": 763,
    "end": 765
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 766,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 768,
    "end": 769
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 770,
    "end": 773
  },
  {
    "type": "Identifier",
    "value": "r3a1",
    "start": 774,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 779,
    "end": 780
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 781,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": "<=",
    "start": 784,
    "end": 786
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 787,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 789,
    "end": 790
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 791,
    "end": 794
  },
  {
    "type": "Identifier",
    "value": "r3a1",
    "start": 795,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 800,
    "end": 801
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 802,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": "<=",
    "start": 805,
    "end": 807
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 808,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 810,
    "end": 811
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 812,
    "end": 815
  },
  {
    "type": "Identifier",
    "value": "r3a1",
    "start": 816,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 821,
    "end": 822
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 823,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": "<=",
    "start": 826,
    "end": 828
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 829,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 831,
    "end": 832
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 834,
    "end": 837
  },
  {
    "type": "Identifier",
    "value": "r3b1",
    "start": 838,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 843,
    "end": 844
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 845,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": "<=",
    "start": 848,
    "end": 850
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 851,
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
    "start": 855,
    "end": 858
  },
  {
    "type": "Identifier",
    "value": "r3b1",
    "start": 859,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 864,
    "end": 865
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 866,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": "<=",
    "start": 869,
    "end": 871
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 872,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 874,
    "end": 875
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 876,
    "end": 879
  },
  {
    "type": "Identifier",
    "value": "r3b1",
    "start": 880,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 885,
    "end": 886
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 887,
    "end": 889
  },
  {
    "type": "Punctuator",
    "value": "<=",
    "start": 890,
    "end": 892
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 893,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 895,
    "end": 896
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 897,
    "end": 900
  },
  {
    "type": "Identifier",
    "value": "r3b1",
    "start": 901,
    "end": 905
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 906,
    "end": 907
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 908,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": "<=",
    "start": 911,
    "end": 913
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 914,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 916,
    "end": 917
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 934,
    "end": 937
  },
  {
    "type": "Identifier",
    "value": "r4a1",
    "start": 938,
    "end": 942
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 943,
    "end": 944
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 945,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 948,
    "end": 950
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 951,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 953,
    "end": 954
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 955,
    "end": 958
  },
  {
    "type": "Identifier",
    "value": "r4a1",
    "start": 959,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 964,
    "end": 965
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 966,
    "end": 968
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 969,
    "end": 971
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 972,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 974,
    "end": 975
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 976,
    "end": 979
  },
  {
    "type": "Identifier",
    "value": "r4a1",
    "start": 980,
    "end": 984
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 985,
    "end": 986
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 987,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 990,
    "end": 992
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 993,
    "end": 995
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 995,
    "end": 996
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 997,
    "end": 1000
  },
  {
    "type": "Identifier",
    "value": "r4a1",
    "start": 1001,
    "end": 1005
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 1008,
    "end": 1010
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 1011,
    "end": 1013
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 1014,
    "end": 1016
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1019,
    "end": 1022
  },
  {
    "type": "Identifier",
    "value": "r4b1",
    "start": 1023,
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
    "value": "b1",
    "start": 1030,
    "end": 1032
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 1033,
    "end": 1035
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 1036,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1040,
    "end": 1043
  },
  {
    "type": "Identifier",
    "value": "r4b1",
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
    "value": "b2",
    "start": 1051,
    "end": 1053
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 1054,
    "end": 1056
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1057,
    "end": 1059
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1059,
    "end": 1060
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1061,
    "end": 1064
  },
  {
    "type": "Identifier",
    "value": "r4b1",
    "start": 1065,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 1072,
    "end": 1074
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 1075,
    "end": 1077
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 1078,
    "end": 1080
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1082,
    "end": 1085
  },
  {
    "type": "Identifier",
    "value": "r4b1",
    "start": 1086,
    "end": 1090
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1091,
    "end": 1092
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 1093,
    "end": 1095
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 1096,
    "end": 1098
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 1099,
    "end": 1101
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1101,
    "end": 1102
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1119,
    "end": 1122
  },
  {
    "type": "Identifier",
    "value": "r5a1",
    "start": 1123,
    "end": 1127
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1128,
    "end": 1129
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 1130,
    "end": 1132
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1133,
    "end": 1135
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 1136,
    "end": 1138
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1138,
    "end": 1139
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1140,
    "end": 1143
  },
  {
    "type": "Identifier",
    "value": "r5a1",
    "start": 1144,
    "end": 1148
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1149,
    "end": 1150
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1151,
    "end": 1153
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1154,
    "end": 1156
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 1157,
    "end": 1159
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1159,
    "end": 1160
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1161,
    "end": 1164
  },
  {
    "type": "Identifier",
    "value": "r5a1",
    "start": 1165,
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
    "value": "a3",
    "start": 1172,
    "end": 1174
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1175,
    "end": 1177
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 1178,
    "end": 1180
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1180,
    "end": 1181
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1182,
    "end": 1185
  },
  {
    "type": "Identifier",
    "value": "r5a1",
    "start": 1186,
    "end": 1190
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1191,
    "end": 1192
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 1193,
    "end": 1195
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1196,
    "end": 1198
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 1199,
    "end": 1201
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1204,
    "end": 1207
  },
  {
    "type": "Identifier",
    "value": "r5b1",
    "start": 1208,
    "end": 1212
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 1215,
    "end": 1217
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1218,
    "end": 1220
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 1221,
    "end": 1223
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1225,
    "end": 1228
  },
  {
    "type": "Identifier",
    "value": "r5b1",
    "start": 1229,
    "end": 1233
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1234,
    "end": 1235
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 1236,
    "end": 1238
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1239,
    "end": 1241
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1242,
    "end": 1244
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1244,
    "end": 1245
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1246,
    "end": 1249
  },
  {
    "type": "Identifier",
    "value": "r5b1",
    "start": 1250,
    "end": 1254
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1255,
    "end": 1256
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 1257,
    "end": 1259
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1260,
    "end": 1262
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 1263,
    "end": 1265
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1265,
    "end": 1266
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1267,
    "end": 1270
  },
  {
    "type": "Identifier",
    "value": "r5b1",
    "start": 1271,
    "end": 1275
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1276,
    "end": 1277
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 1278,
    "end": 1280
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1281,
    "end": 1283
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 1284,
    "end": 1286
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1286,
    "end": 1287
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1304,
    "end": 1307
  },
  {
    "type": "Identifier",
    "value": "r6a1",
    "start": 1308,
    "end": 1312
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1313,
    "end": 1314
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 1315,
    "end": 1317
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 1318,
    "end": 1320
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 1321,
    "end": 1323
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1323,
    "end": 1324
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1325,
    "end": 1328
  },
  {
    "type": "Identifier",
    "value": "r6a1",
    "start": 1329,
    "end": 1333
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1334,
    "end": 1335
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1336,
    "end": 1338
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 1339,
    "end": 1341
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 1342,
    "end": 1344
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1344,
    "end": 1345
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1346,
    "end": 1349
  },
  {
    "type": "Identifier",
    "value": "r6a1",
    "start": 1350,
    "end": 1354
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1355,
    "end": 1356
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 1357,
    "end": 1359
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 1360,
    "end": 1362
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 1363,
    "end": 1365
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1365,
    "end": 1366
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1367,
    "end": 1370
  },
  {
    "type": "Identifier",
    "value": "r6a1",
    "start": 1371,
    "end": 1375
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1376,
    "end": 1377
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 1378,
    "end": 1380
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 1381,
    "end": 1383
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 1384,
    "end": 1386
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1386,
    "end": 1387
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1389,
    "end": 1392
  },
  {
    "type": "Identifier",
    "value": "r6b1",
    "start": 1393,
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
    "value": "b1",
    "start": 1400,
    "end": 1402
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 1403,
    "end": 1405
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 1406,
    "end": 1408
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1408,
    "end": 1409
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1410,
    "end": 1413
  },
  {
    "type": "Identifier",
    "value": "r6b1",
    "start": 1414,
    "end": 1418
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1419,
    "end": 1420
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 1421,
    "end": 1423
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 1424,
    "end": 1426
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1427,
    "end": 1429
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1429,
    "end": 1430
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1431,
    "end": 1434
  },
  {
    "type": "Identifier",
    "value": "r6b1",
    "start": 1435,
    "end": 1439
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1440,
    "end": 1441
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 1442,
    "end": 1444
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 1445,
    "end": 1447
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 1448,
    "end": 1450
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1450,
    "end": 1451
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1452,
    "end": 1455
  },
  {
    "type": "Identifier",
    "value": "r6b1",
    "start": 1456,
    "end": 1460
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1461,
    "end": 1462
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 1463,
    "end": 1465
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 1466,
    "end": 1468
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 1469,
    "end": 1471
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1471,
    "end": 1472
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1490,
    "end": 1493
  },
  {
    "type": "Identifier",
    "value": "r7a1",
    "start": 1494,
    "end": 1498
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1499,
    "end": 1500
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 1501,
    "end": 1503
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1504,
    "end": 1507
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 1508,
    "end": 1510
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1510,
    "end": 1511
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1512,
    "end": 1515
  },
  {
    "type": "Identifier",
    "value": "r7a1",
    "start": 1516,
    "end": 1520
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1521,
    "end": 1522
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1523,
    "end": 1525
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1526,
    "end": 1529
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 1530,
    "end": 1532
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1532,
    "end": 1533
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1534,
    "end": 1537
  },
  {
    "type": "Identifier",
    "value": "r7a1",
    "start": 1538,
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
    "value": "a3",
    "start": 1545,
    "end": 1547
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1548,
    "end": 1551
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 1552,
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
    "start": 1556,
    "end": 1559
  },
  {
    "type": "Identifier",
    "value": "r7a1",
    "start": 1560,
    "end": 1564
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1565,
    "end": 1566
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 1567,
    "end": 1569
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1570,
    "end": 1573
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 1574,
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
    "start": 1579,
    "end": 1582
  },
  {
    "type": "Identifier",
    "value": "r7b1",
    "start": 1583,
    "end": 1587
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1588,
    "end": 1589
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 1590,
    "end": 1592
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1593,
    "end": 1596
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 1597,
    "end": 1599
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1599,
    "end": 1600
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1601,
    "end": 1604
  },
  {
    "type": "Identifier",
    "value": "r7b1",
    "start": 1605,
    "end": 1609
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1610,
    "end": 1611
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 1612,
    "end": 1614
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1615,
    "end": 1618
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1619,
    "end": 1621
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1621,
    "end": 1622
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1623,
    "end": 1626
  },
  {
    "type": "Identifier",
    "value": "r7b1",
    "start": 1627,
    "end": 1631
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1632,
    "end": 1633
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 1634,
    "end": 1636
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1637,
    "end": 1640
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 1641,
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
    "start": 1645,
    "end": 1648
  },
  {
    "type": "Identifier",
    "value": "r7b1",
    "start": 1649,
    "end": 1653
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1654,
    "end": 1655
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 1656,
    "end": 1658
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1659,
    "end": 1662
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 1663,
    "end": 1665
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1665,
    "end": 1666
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1684,
    "end": 1687
  },
  {
    "type": "Identifier",
    "value": "r8a1",
    "start": 1688,
    "end": 1692
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1693,
    "end": 1694
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 1695,
    "end": 1697
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1698,
    "end": 1701
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 1702,
    "end": 1704
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1704,
    "end": 1705
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1706,
    "end": 1709
  },
  {
    "type": "Identifier",
    "value": "r8a1",
    "start": 1710,
    "end": 1714
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1715,
    "end": 1716
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1717,
    "end": 1719
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1720,
    "end": 1723
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 1724,
    "end": 1726
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1726,
    "end": 1727
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1728,
    "end": 1731
  },
  {
    "type": "Identifier",
    "value": "r8a1",
    "start": 1732,
    "end": 1736
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1737,
    "end": 1738
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 1739,
    "end": 1741
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1742,
    "end": 1745
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 1746,
    "end": 1748
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1748,
    "end": 1749
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1750,
    "end": 1753
  },
  {
    "type": "Identifier",
    "value": "r8a1",
    "start": 1754,
    "end": 1758
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1759,
    "end": 1760
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 1761,
    "end": 1763
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1764,
    "end": 1767
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 1768,
    "end": 1770
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1770,
    "end": 1771
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1773,
    "end": 1776
  },
  {
    "type": "Identifier",
    "value": "r8b1",
    "start": 1777,
    "end": 1781
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1782,
    "end": 1783
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 1784,
    "end": 1786
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1787,
    "end": 1790
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 1791,
    "end": 1793
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1793,
    "end": 1794
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1795,
    "end": 1798
  },
  {
    "type": "Identifier",
    "value": "r8b1",
    "start": 1799,
    "end": 1803
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1804,
    "end": 1805
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 1806,
    "end": 1808
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1809,
    "end": 1812
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1813,
    "end": 1815
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1815,
    "end": 1816
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1817,
    "end": 1820
  },
  {
    "type": "Identifier",
    "value": "r8b1",
    "start": 1821,
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
    "value": "b3",
    "start": 1828,
    "end": 1830
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1831,
    "end": 1834
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 1835,
    "end": 1837
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1837,
    "end": 1838
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1839,
    "end": 1842
  },
  {
    "type": "Identifier",
    "value": "r8b1",
    "start": 1843,
    "end": 1847
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1848,
    "end": 1849
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 1850,
    "end": 1852
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1853,
    "end": 1856
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 1857,
    "end": 1859
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1859,
    "end": 1860
  }
]
```
