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
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 98,
        "end": 99
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
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 113,
              "end": 114
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 116,
                "end": 122
              },
              "start": 114,
              "end": 122
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
            "start": 106,
            "end": 123
          }
        ],
        "start": 100,
        "end": 125
      },
      "abstract": false,
      "declare": false,
      "start": 92,
      "end": 125
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
                            "start": 149,
                            "end": 155
                          },
                          "start": 147,
                          "end": 155
                        },
                        "start": 146,
                        "end": 155
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 158,
                        "end": 164
                      },
                      "start": 156,
                      "end": 164
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 145,
                    "end": 164
                  }
                ],
                "start": 143,
                "end": 166
              },
              "start": 141,
              "end": 166
            },
            "start": 139,
            "end": 166
          },
          "init": null,
          "definite": false,
          "start": 139,
          "end": 166
        }
      ],
      "declare": true,
      "start": 127,
      "end": 167
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
                            "start": 190,
                            "end": 196
                          },
                          "start": 188,
                          "end": 196
                        },
                        "start": 187,
                        "end": 196
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 199,
                        "end": 205
                      },
                      "start": 197,
                      "end": 205
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 186,
                    "end": 205
                  }
                ],
                "start": 184,
                "end": 207
              },
              "start": 182,
              "end": 207
            },
            "start": 180,
            "end": 207
          },
          "init": null,
          "definite": false,
          "start": 180,
          "end": 207
        }
      ],
      "declare": true,
      "start": 168,
      "end": 208
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
                            "start": 236,
                            "end": 242
                          },
                          "start": 234,
                          "end": 242
                        },
                        "start": 229,
                        "end": 242
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
                          "start": 245,
                          "end": 249
                        },
                        "typeArguments": null,
                        "start": 245,
                        "end": 249
                      },
                      "start": 243,
                      "end": 249
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 228,
                    "end": 249
                  }
                ],
                "start": 226,
                "end": 251
              },
              "start": 224,
              "end": 251
            },
            "start": 222,
            "end": 251
          },
          "init": null,
          "definite": false,
          "start": 222,
          "end": 251
        }
      ],
      "declare": true,
      "start": 210,
      "end": 252
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
                            "start": 279,
                            "end": 285
                          },
                          "start": 277,
                          "end": 285
                        },
                        "start": 272,
                        "end": 285
                      }
                    ],
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
                          "start": 288,
                          "end": 289
                        },
                        "typeArguments": null,
                        "start": 288,
                        "end": 289
                      },
                      "start": 286,
                      "end": 289
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 271,
                    "end": 289
                  }
                ],
                "start": 269,
                "end": 291
              },
              "start": 267,
              "end": 291
            },
            "start": 265,
            "end": 291
          },
          "init": null,
          "definite": false,
          "start": 265,
          "end": 291
        }
      ],
      "declare": true,
      "start": 253,
      "end": 292
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
                            "start": 320,
                            "end": 326
                          },
                          "start": 318,
                          "end": 326
                        },
                        "start": 313,
                        "end": 326
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
                          "start": 329,
                          "end": 333
                        },
                        "typeArguments": null,
                        "start": 329,
                        "end": 333
                      },
                      "start": 327,
                      "end": 333
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 312,
                    "end": 333
                  }
                ],
                "start": 310,
                "end": 335
              },
              "start": 308,
              "end": 335
            },
            "start": 306,
            "end": 335
          },
          "init": null,
          "definite": false,
          "start": 306,
          "end": 335
        }
      ],
      "declare": true,
      "start": 294,
      "end": 336
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
                            "start": 363,
                            "end": 369
                          },
                          "start": 361,
                          "end": 369
                        },
                        "start": 356,
                        "end": 369
                      }
                    ],
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
                          "start": 372,
                          "end": 373
                        },
                        "typeArguments": null,
                        "start": 372,
                        "end": 373
                      },
                      "start": 370,
                      "end": 373
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 355,
                    "end": 373
                  }
                ],
                "start": 353,
                "end": 375
              },
              "start": 351,
              "end": 375
            },
            "start": 349,
            "end": 375
          },
          "init": null,
          "definite": false,
          "start": 349,
          "end": 375
        }
      ],
      "declare": true,
      "start": 337,
      "end": 376
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
                            "start": 404,
                            "end": 410
                          },
                          "start": 402,
                          "end": 410
                        },
                        "start": 397,
                        "end": 410
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
                          "start": 413,
                          "end": 420
                        },
                        "typeArguments": null,
                        "start": 413,
                        "end": 420
                      },
                      "start": 411,
                      "end": 420
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 396,
                    "end": 420
                  }
                ],
                "start": 394,
                "end": 422
              },
              "start": 392,
              "end": 422
            },
            "start": 390,
            "end": 422
          },
          "init": null,
          "definite": false,
          "start": 390,
          "end": 422
        }
      ],
      "declare": true,
      "start": 378,
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
                            "start": 450,
                            "end": 456
                          },
                          "start": 448,
                          "end": 456
                        },
                        "start": 443,
                        "end": 456
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
                          "start": 459,
                          "end": 463
                        },
                        "typeArguments": null,
                        "start": 459,
                        "end": 463
                      },
                      "start": 457,
                      "end": 463
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 442,
                    "end": 463
                  }
                ],
                "start": 440,
                "end": 465
              },
              "start": 438,
              "end": 465
            },
            "start": 436,
            "end": 465
          },
          "init": null,
          "definite": false,
          "start": 436,
          "end": 465
        }
      ],
      "declare": true,
      "start": 424,
      "end": 466
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
            "start": 486,
            "end": 490
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 493,
              "end": 495
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 498,
              "end": 500
            },
            "start": 493,
            "end": 500
          },
          "definite": false,
          "start": 486,
          "end": 500
        }
      ],
      "declare": false,
      "start": 482,
      "end": 501
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
            "start": 506,
            "end": 510
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 513,
              "end": 515
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 518,
              "end": 520
            },
            "start": 513,
            "end": 520
          },
          "definite": false,
          "start": 506,
          "end": 520
        }
      ],
      "declare": false,
      "start": 502,
      "end": 521
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
            "start": 526,
            "end": 530
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 533,
              "end": 535
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null,
              "start": 538,
              "end": 540
            },
            "start": 533,
            "end": 540
          },
          "definite": false,
          "start": 526,
          "end": 540
        }
      ],
      "declare": false,
      "start": 522,
      "end": 541
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
            "start": 546,
            "end": 550
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 553,
              "end": 555
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null,
              "start": 558,
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
            "name": "r1b1",
            "optional": false,
            "typeAnnotation": null,
            "start": 567,
            "end": 571
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 574,
              "end": 576
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 579,
              "end": 581
            },
            "start": 574,
            "end": 581
          },
          "definite": false,
          "start": 567,
          "end": 581
        }
      ],
      "declare": false,
      "start": 563,
      "end": 582
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
            "start": 587,
            "end": 591
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 594,
              "end": 596
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 599,
              "end": 601
            },
            "start": 594,
            "end": 601
          },
          "definite": false,
          "start": 587,
          "end": 601
        }
      ],
      "declare": false,
      "start": 583,
      "end": 602
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
            "start": 607,
            "end": 611
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null,
              "start": 614,
              "end": 616
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 619,
              "end": 621
            },
            "start": 614,
            "end": 621
          },
          "definite": false,
          "start": 607,
          "end": 621
        }
      ],
      "declare": false,
      "start": 603,
      "end": 622
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
            "start": 627,
            "end": 631
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null,
              "start": 634,
              "end": 636
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 639,
              "end": 641
            },
            "start": 634,
            "end": 641
          },
          "definite": false,
          "start": 627,
          "end": 641
        }
      ],
      "declare": false,
      "start": 623,
      "end": 642
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
            "start": 662,
            "end": 666
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 669,
              "end": 671
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 674,
              "end": 676
            },
            "start": 669,
            "end": 676
          },
          "definite": false,
          "start": 662,
          "end": 676
        }
      ],
      "declare": false,
      "start": 658,
      "end": 677
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
            "start": 682,
            "end": 686
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 689,
              "end": 691
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 694,
              "end": 696
            },
            "start": 689,
            "end": 696
          },
          "definite": false,
          "start": 682,
          "end": 696
        }
      ],
      "declare": false,
      "start": 678,
      "end": 697
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
            "start": 702,
            "end": 706
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 709,
              "end": 711
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null,
              "start": 714,
              "end": 716
            },
            "start": 709,
            "end": 716
          },
          "definite": false,
          "start": 702,
          "end": 716
        }
      ],
      "declare": false,
      "start": 698,
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
            "name": "r2a4",
            "optional": false,
            "typeAnnotation": null,
            "start": 722,
            "end": 726
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 729,
              "end": 731
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null,
              "start": 734,
              "end": 736
            },
            "start": 729,
            "end": 736
          },
          "definite": false,
          "start": 722,
          "end": 736
        }
      ],
      "declare": false,
      "start": 718,
      "end": 737
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
            "start": 743,
            "end": 747
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 750,
              "end": 752
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 755,
              "end": 757
            },
            "start": 750,
            "end": 757
          },
          "definite": false,
          "start": 743,
          "end": 757
        }
      ],
      "declare": false,
      "start": 739,
      "end": 758
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
            "start": 763,
            "end": 767
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 770,
              "end": 772
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 775,
              "end": 777
            },
            "start": 770,
            "end": 777
          },
          "definite": false,
          "start": 763,
          "end": 777
        }
      ],
      "declare": false,
      "start": 759,
      "end": 778
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
            "start": 783,
            "end": 787
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null,
              "start": 790,
              "end": 792
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 795,
              "end": 797
            },
            "start": 790,
            "end": 797
          },
          "definite": false,
          "start": 783,
          "end": 797
        }
      ],
      "declare": false,
      "start": 779,
      "end": 798
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
            "start": 803,
            "end": 807
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null,
              "start": 810,
              "end": 812
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 815,
              "end": 817
            },
            "start": 810,
            "end": 817
          },
          "definite": false,
          "start": 803,
          "end": 817
        }
      ],
      "declare": false,
      "start": 799,
      "end": 818
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
            "start": 839,
            "end": 843
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 846,
              "end": 848
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 852,
              "end": 854
            },
            "start": 846,
            "end": 854
          },
          "definite": false,
          "start": 839,
          "end": 854
        }
      ],
      "declare": false,
      "start": 835,
      "end": 855
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
            "name": "r3a2",
            "optional": false,
            "typeAnnotation": null,
            "start": 860,
            "end": 864
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 867,
              "end": 869
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 873,
              "end": 875
            },
            "start": 867,
            "end": 875
          },
          "definite": false,
          "start": 860,
          "end": 875
        }
      ],
      "declare": false,
      "start": 856,
      "end": 876
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
            "name": "r3a3",
            "optional": false,
            "typeAnnotation": null,
            "start": 881,
            "end": 885
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 888,
              "end": 890
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null,
              "start": 894,
              "end": 896
            },
            "start": 888,
            "end": 896
          },
          "definite": false,
          "start": 881,
          "end": 896
        }
      ],
      "declare": false,
      "start": 877,
      "end": 897
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
            "name": "r3a4",
            "optional": false,
            "typeAnnotation": null,
            "start": 902,
            "end": 906
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 909,
              "end": 911
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null,
              "start": 915,
              "end": 917
            },
            "start": 909,
            "end": 917
          },
          "definite": false,
          "start": 902,
          "end": 917
        }
      ],
      "declare": false,
      "start": 898,
      "end": 918
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
            "start": 924,
            "end": 928
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 931,
              "end": 933
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 937,
              "end": 939
            },
            "start": 931,
            "end": 939
          },
          "definite": false,
          "start": 924,
          "end": 939
        }
      ],
      "declare": false,
      "start": 920,
      "end": 940
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
            "name": "r3b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 945,
            "end": 949
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 952,
              "end": 954
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 958,
              "end": 960
            },
            "start": 952,
            "end": 960
          },
          "definite": false,
          "start": 945,
          "end": 960
        }
      ],
      "declare": false,
      "start": 941,
      "end": 961
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
            "name": "r3b3",
            "optional": false,
            "typeAnnotation": null,
            "start": 966,
            "end": 970
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null,
              "start": 973,
              "end": 975
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 979,
              "end": 981
            },
            "start": 973,
            "end": 981
          },
          "definite": false,
          "start": 966,
          "end": 981
        }
      ],
      "declare": false,
      "start": 962,
      "end": 982
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
            "name": "r3b4",
            "optional": false,
            "typeAnnotation": null,
            "start": 987,
            "end": 991
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null,
              "start": 994,
              "end": 996
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1000,
              "end": 1002
            },
            "start": 994,
            "end": 1002
          },
          "definite": false,
          "start": 987,
          "end": 1002
        }
      ],
      "declare": false,
      "start": 983,
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
            "name": "r4a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1024,
            "end": 1028
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1031,
              "end": 1033
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1037,
              "end": 1039
            },
            "start": 1031,
            "end": 1039
          },
          "definite": false,
          "start": 1024,
          "end": 1039
        }
      ],
      "declare": false,
      "start": 1020,
      "end": 1040
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
            "name": "r4a2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1045,
            "end": 1049
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1052,
              "end": 1054
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1058,
              "end": 1060
            },
            "start": 1052,
            "end": 1060
          },
          "definite": false,
          "start": 1045,
          "end": 1060
        }
      ],
      "declare": false,
      "start": 1041,
      "end": 1061
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
            "name": "r4a3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1066,
            "end": 1070
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1073,
              "end": 1075
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1079,
              "end": 1081
            },
            "start": 1073,
            "end": 1081
          },
          "definite": false,
          "start": 1066,
          "end": 1081
        }
      ],
      "declare": false,
      "start": 1062,
      "end": 1082
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
            "name": "r4a4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1087,
            "end": 1091
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1094,
              "end": 1096
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1100,
              "end": 1102
            },
            "start": 1094,
            "end": 1102
          },
          "definite": false,
          "start": 1087,
          "end": 1102
        }
      ],
      "declare": false,
      "start": 1083,
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
            "name": "r4b1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1109,
            "end": 1113
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1116,
              "end": 1118
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1122,
              "end": 1124
            },
            "start": 1116,
            "end": 1124
          },
          "definite": false,
          "start": 1109,
          "end": 1124
        }
      ],
      "declare": false,
      "start": 1105,
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
            "name": "r4b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1130,
            "end": 1134
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1137,
              "end": 1139
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1143,
              "end": 1145
            },
            "start": 1137,
            "end": 1145
          },
          "definite": false,
          "start": 1130,
          "end": 1145
        }
      ],
      "declare": false,
      "start": 1126,
      "end": 1146
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
            "name": "r4b3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1151,
            "end": 1155
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1158,
              "end": 1160
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1164,
              "end": 1166
            },
            "start": 1158,
            "end": 1166
          },
          "definite": false,
          "start": 1151,
          "end": 1166
        }
      ],
      "declare": false,
      "start": 1147,
      "end": 1167
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
            "name": "r4b4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1172,
            "end": 1176
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1179,
              "end": 1181
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1185,
              "end": 1187
            },
            "start": 1179,
            "end": 1187
          },
          "definite": false,
          "start": 1172,
          "end": 1187
        }
      ],
      "declare": false,
      "start": 1168,
      "end": 1188
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
            "start": 1209,
            "end": 1213
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1216,
              "end": 1218
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1222,
              "end": 1224
            },
            "start": 1216,
            "end": 1224
          },
          "definite": false,
          "start": 1209,
          "end": 1224
        }
      ],
      "declare": false,
      "start": 1205,
      "end": 1225
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
            "name": "r5a2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1230,
            "end": 1234
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1237,
              "end": 1239
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1243,
              "end": 1245
            },
            "start": 1237,
            "end": 1245
          },
          "definite": false,
          "start": 1230,
          "end": 1245
        }
      ],
      "declare": false,
      "start": 1226,
      "end": 1246
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
            "name": "r5a3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1251,
            "end": 1255
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1258,
              "end": 1260
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1264,
              "end": 1266
            },
            "start": 1258,
            "end": 1266
          },
          "definite": false,
          "start": 1251,
          "end": 1266
        }
      ],
      "declare": false,
      "start": 1247,
      "end": 1267
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
            "name": "r5a4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1272,
            "end": 1276
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1279,
              "end": 1281
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1285,
              "end": 1287
            },
            "start": 1279,
            "end": 1287
          },
          "definite": false,
          "start": 1272,
          "end": 1287
        }
      ],
      "declare": false,
      "start": 1268,
      "end": 1288
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
            "start": 1294,
            "end": 1298
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1301,
              "end": 1303
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1307,
              "end": 1309
            },
            "start": 1301,
            "end": 1309
          },
          "definite": false,
          "start": 1294,
          "end": 1309
        }
      ],
      "declare": false,
      "start": 1290,
      "end": 1310
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
            "name": "r5b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1315,
            "end": 1319
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1322,
              "end": 1324
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1328,
              "end": 1330
            },
            "start": 1322,
            "end": 1330
          },
          "definite": false,
          "start": 1315,
          "end": 1330
        }
      ],
      "declare": false,
      "start": 1311,
      "end": 1331
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
            "name": "r5b3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1336,
            "end": 1340
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1343,
              "end": 1345
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1349,
              "end": 1351
            },
            "start": 1343,
            "end": 1351
          },
          "definite": false,
          "start": 1336,
          "end": 1351
        }
      ],
      "declare": false,
      "start": 1332,
      "end": 1352
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
            "name": "r5b4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1357,
            "end": 1361
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1364,
              "end": 1366
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1370,
              "end": 1372
            },
            "start": 1364,
            "end": 1372
          },
          "definite": false,
          "start": 1357,
          "end": 1372
        }
      ],
      "declare": false,
      "start": 1353,
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
            "name": "r6a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1394,
            "end": 1398
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1401,
              "end": 1403
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1407,
              "end": 1409
            },
            "start": 1401,
            "end": 1409
          },
          "definite": false,
          "start": 1394,
          "end": 1409
        }
      ],
      "declare": false,
      "start": 1390,
      "end": 1410
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
            "name": "r6a2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1415,
            "end": 1419
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1422,
              "end": 1424
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1428,
              "end": 1430
            },
            "start": 1422,
            "end": 1430
          },
          "definite": false,
          "start": 1415,
          "end": 1430
        }
      ],
      "declare": false,
      "start": 1411,
      "end": 1431
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
            "name": "r6a3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1436,
            "end": 1440
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1443,
              "end": 1445
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1449,
              "end": 1451
            },
            "start": 1443,
            "end": 1451
          },
          "definite": false,
          "start": 1436,
          "end": 1451
        }
      ],
      "declare": false,
      "start": 1432,
      "end": 1452
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
            "name": "r6a4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1457,
            "end": 1461
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1464,
              "end": 1466
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1470,
              "end": 1472
            },
            "start": 1464,
            "end": 1472
          },
          "definite": false,
          "start": 1457,
          "end": 1472
        }
      ],
      "declare": false,
      "start": 1453,
      "end": 1473
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
            "start": 1479,
            "end": 1483
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1486,
              "end": 1488
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1492,
              "end": 1494
            },
            "start": 1486,
            "end": 1494
          },
          "definite": false,
          "start": 1479,
          "end": 1494
        }
      ],
      "declare": false,
      "start": 1475,
      "end": 1495
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
            "name": "r6b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1500,
            "end": 1504
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1507,
              "end": 1509
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1513,
              "end": 1515
            },
            "start": 1507,
            "end": 1515
          },
          "definite": false,
          "start": 1500,
          "end": 1515
        }
      ],
      "declare": false,
      "start": 1496,
      "end": 1516
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
            "name": "r6b3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1521,
            "end": 1525
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1528,
              "end": 1530
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1534,
              "end": 1536
            },
            "start": 1528,
            "end": 1536
          },
          "definite": false,
          "start": 1521,
          "end": 1536
        }
      ],
      "declare": false,
      "start": 1517,
      "end": 1537
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
            "name": "r6b4",
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
              "name": "b4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1549,
              "end": 1551
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1555,
              "end": 1557
            },
            "start": 1549,
            "end": 1557
          },
          "definite": false,
          "start": 1542,
          "end": 1557
        }
      ],
      "declare": false,
      "start": 1538,
      "end": 1558
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
            "start": 1580,
            "end": 1584
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1587,
              "end": 1589
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1594,
              "end": 1596
            },
            "start": 1587,
            "end": 1596
          },
          "definite": false,
          "start": 1580,
          "end": 1596
        }
      ],
      "declare": false,
      "start": 1576,
      "end": 1597
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
            "name": "r7a2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1602,
            "end": 1606
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1609,
              "end": 1611
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1616,
              "end": 1618
            },
            "start": 1609,
            "end": 1618
          },
          "definite": false,
          "start": 1602,
          "end": 1618
        }
      ],
      "declare": false,
      "start": 1598,
      "end": 1619
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
            "name": "r7a3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1624,
            "end": 1628
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1631,
              "end": 1633
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1638,
              "end": 1640
            },
            "start": 1631,
            "end": 1640
          },
          "definite": false,
          "start": 1624,
          "end": 1640
        }
      ],
      "declare": false,
      "start": 1620,
      "end": 1641
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
            "name": "r7a4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1646,
            "end": 1650
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1653,
              "end": 1655
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1660,
              "end": 1662
            },
            "start": 1653,
            "end": 1662
          },
          "definite": false,
          "start": 1646,
          "end": 1662
        }
      ],
      "declare": false,
      "start": 1642,
      "end": 1663
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
            "start": 1669,
            "end": 1673
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1676,
              "end": 1678
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1683,
              "end": 1685
            },
            "start": 1676,
            "end": 1685
          },
          "definite": false,
          "start": 1669,
          "end": 1685
        }
      ],
      "declare": false,
      "start": 1665,
      "end": 1686
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
            "name": "r7b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1691,
            "end": 1695
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1698,
              "end": 1700
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1705,
              "end": 1707
            },
            "start": 1698,
            "end": 1707
          },
          "definite": false,
          "start": 1691,
          "end": 1707
        }
      ],
      "declare": false,
      "start": 1687,
      "end": 1708
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
            "name": "r7b3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1713,
            "end": 1717
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1720,
              "end": 1722
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1727,
              "end": 1729
            },
            "start": 1720,
            "end": 1729
          },
          "definite": false,
          "start": 1713,
          "end": 1729
        }
      ],
      "declare": false,
      "start": 1709,
      "end": 1730
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
            "name": "r7b4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1735,
            "end": 1739
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1742,
              "end": 1744
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1749,
              "end": 1751
            },
            "start": 1742,
            "end": 1751
          },
          "definite": false,
          "start": 1735,
          "end": 1751
        }
      ],
      "declare": false,
      "start": 1731,
      "end": 1752
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
            "start": 1774,
            "end": 1778
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1781,
              "end": 1783
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1788,
              "end": 1790
            },
            "start": 1781,
            "end": 1790
          },
          "definite": false,
          "start": 1774,
          "end": 1790
        }
      ],
      "declare": false,
      "start": 1770,
      "end": 1791
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
            "name": "r8a2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1796,
            "end": 1800
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1803,
              "end": 1805
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1810,
              "end": 1812
            },
            "start": 1803,
            "end": 1812
          },
          "definite": false,
          "start": 1796,
          "end": 1812
        }
      ],
      "declare": false,
      "start": 1792,
      "end": 1813
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
            "name": "r8a3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1818,
            "end": 1822
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1825,
              "end": 1827
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1832,
              "end": 1834
            },
            "start": 1825,
            "end": 1834
          },
          "definite": false,
          "start": 1818,
          "end": 1834
        }
      ],
      "declare": false,
      "start": 1814,
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
            "name": "r8a4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1840,
            "end": 1844
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1847,
              "end": 1849
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1854,
              "end": 1856
            },
            "start": 1847,
            "end": 1856
          },
          "definite": false,
          "start": 1840,
          "end": 1856
        }
      ],
      "declare": false,
      "start": 1836,
      "end": 1857
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
            "start": 1863,
            "end": 1867
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1870,
              "end": 1872
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1877,
              "end": 1879
            },
            "start": 1870,
            "end": 1879
          },
          "definite": false,
          "start": 1863,
          "end": 1879
        }
      ],
      "declare": false,
      "start": 1859,
      "end": 1880
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
            "name": "r8b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1885,
            "end": 1889
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1892,
              "end": 1894
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1899,
              "end": 1901
            },
            "start": 1892,
            "end": 1901
          },
          "definite": false,
          "start": 1885,
          "end": 1901
        }
      ],
      "declare": false,
      "start": 1881,
      "end": 1902
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
            "name": "r8b3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1907,
            "end": 1911
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1914,
              "end": 1916
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1921,
              "end": 1923
            },
            "start": 1914,
            "end": 1923
          },
          "definite": false,
          "start": 1907,
          "end": 1923
        }
      ],
      "declare": false,
      "start": 1903,
      "end": 1924
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
            "name": "r8b4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1929,
            "end": 1933
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1936,
              "end": 1938
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1943,
              "end": 1945
            },
            "start": 1936,
            "end": 1945
          },
          "definite": false,
          "start": 1929,
          "end": 1945
        }
      ],
      "declare": false,
      "start": 1925,
      "end": 1946
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1946
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
    "value": "class",
    "start": 92,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "C",
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
    "type": "Keyword",
    "value": "public",
    "start": 106,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 116,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 124,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 127,
    "end": 134
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 135,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 139,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 149,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 158,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 168,
    "end": 175
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 176,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 180,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 187,
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
    "value": "string",
    "start": 190,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 199,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 207,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 210,
    "end": 217
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 218,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 222,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 228,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 229,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 234,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 236,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 243,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 245,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 253,
    "end": 260
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 261,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 265,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 271,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 272,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 277,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 279,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 285,
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
    "value": "C",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 291,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 294,
    "end": 301
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 302,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 306,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "start": 312,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 313,
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
    "value": "number",
    "start": 320,
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
    "value": "Base",
    "start": 329,
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
    "value": "declare",
    "start": 337,
    "end": 344
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 345,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 349,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 353,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 355,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 356,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 361,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 363,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 370,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 375,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 378,
    "end": 385
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 386,
    "end": 389
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 390,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 396,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 397,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 402,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 404,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 410,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 411,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 413,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Identifier",
    "value": "declare",
    "start": 424,
    "end": 431
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 432,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 436,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 442,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 443,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 448,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 450,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 456,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 457,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 459,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 465,
    "end": 466
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 482,
    "end": 485
  },
  {
    "type": "Identifier",
    "value": "r1a1",
    "start": 486,
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
    "value": "a1",
    "start": 493,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 496,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 498,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 500,
    "end": 501
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 502,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "r1a2",
    "start": 506,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "value": "<",
    "start": 516,
    "end": 517
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 518,
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
    "value": "var",
    "start": 522,
    "end": 525
  },
  {
    "type": "Identifier",
    "value": "r1a3",
    "start": 526,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "value": "<",
    "start": 536,
    "end": 537
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 538,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 540,
    "end": 541
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 542,
    "end": 545
  },
  {
    "type": "Identifier",
    "value": "r1a4",
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
    "value": "a4",
    "start": 553,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 556,
    "end": 557
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 558,
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
    "start": 563,
    "end": 566
  },
  {
    "type": "Identifier",
    "value": "r1b1",
    "start": 567,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 572,
    "end": 573
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 574,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 577,
    "end": 578
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 579,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 581,
    "end": 582
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 583,
    "end": 586
  },
  {
    "type": "Identifier",
    "value": "r1b2",
    "start": 587,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 592,
    "end": 593
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 594,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 597,
    "end": 598
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 599,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 601,
    "end": 602
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 603,
    "end": 606
  },
  {
    "type": "Identifier",
    "value": "r1b3",
    "start": 607,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 612,
    "end": 613
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 614,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 617,
    "end": 618
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 619,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 621,
    "end": 622
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 623,
    "end": 626
  },
  {
    "type": "Identifier",
    "value": "r1b4",
    "start": 627,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 632,
    "end": 633
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 634,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 637,
    "end": 638
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 639,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 641,
    "end": 642
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 658,
    "end": 661
  },
  {
    "type": "Identifier",
    "value": "r2a1",
    "start": 662,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "value": ">",
    "start": 672,
    "end": 673
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 674,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 676,
    "end": 677
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 678,
    "end": 681
  },
  {
    "type": "Identifier",
    "value": "r2a2",
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
    "value": "a2",
    "start": 689,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 692,
    "end": 693
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 694,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 696,
    "end": 697
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 698,
    "end": 701
  },
  {
    "type": "Identifier",
    "value": "r2a3",
    "start": 702,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "value": ">",
    "start": 712,
    "end": 713
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 714,
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
    "start": 718,
    "end": 721
  },
  {
    "type": "Identifier",
    "value": "r2a4",
    "start": 722,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "value": ">",
    "start": 732,
    "end": 733
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 734,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 736,
    "end": 737
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 739,
    "end": 742
  },
  {
    "type": "Identifier",
    "value": "r2b1",
    "start": 743,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 748,
    "end": 749
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 750,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 753,
    "end": 754
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 755,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 757,
    "end": 758
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 759,
    "end": 762
  },
  {
    "type": "Identifier",
    "value": "r2b2",
    "start": 763,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 768,
    "end": 769
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 770,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 773,
    "end": 774
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 775,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 777,
    "end": 778
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 779,
    "end": 782
  },
  {
    "type": "Identifier",
    "value": "r2b3",
    "start": 783,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 788,
    "end": 789
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 790,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 793,
    "end": 794
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 795,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 797,
    "end": 798
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 799,
    "end": 802
  },
  {
    "type": "Identifier",
    "value": "r2b4",
    "start": 803,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 808,
    "end": 809
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 810,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 813,
    "end": 814
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 815,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 817,
    "end": 818
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 835,
    "end": 838
  },
  {
    "type": "Identifier",
    "value": "r3a1",
    "start": 839,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 844,
    "end": 845
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 846,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": "<=",
    "start": 849,
    "end": 851
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 852,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 854,
    "end": 855
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 856,
    "end": 859
  },
  {
    "type": "Identifier",
    "value": "r3a2",
    "start": 860,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 865,
    "end": 866
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 867,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": "<=",
    "start": 870,
    "end": 872
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 873,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 875,
    "end": 876
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 877,
    "end": 880
  },
  {
    "type": "Identifier",
    "value": "r3a3",
    "start": 881,
    "end": 885
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 886,
    "end": 887
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 888,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": "<=",
    "start": 891,
    "end": 893
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 894,
    "end": 896
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 896,
    "end": 897
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 898,
    "end": 901
  },
  {
    "type": "Identifier",
    "value": "r3a4",
    "start": 902,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 907,
    "end": 908
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 909,
    "end": 911
  },
  {
    "type": "Punctuator",
    "value": "<=",
    "start": 912,
    "end": 914
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 915,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 917,
    "end": 918
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 920,
    "end": 923
  },
  {
    "type": "Identifier",
    "value": "r3b1",
    "start": 924,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 929,
    "end": 930
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 931,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": "<=",
    "start": 934,
    "end": 936
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 937,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 939,
    "end": 940
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 941,
    "end": 944
  },
  {
    "type": "Identifier",
    "value": "r3b2",
    "start": 945,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 950,
    "end": 951
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 952,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": "<=",
    "start": 955,
    "end": 957
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 958,
    "end": 960
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 960,
    "end": 961
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 962,
    "end": 965
  },
  {
    "type": "Identifier",
    "value": "r3b3",
    "start": 966,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 971,
    "end": 972
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 973,
    "end": 975
  },
  {
    "type": "Punctuator",
    "value": "<=",
    "start": 976,
    "end": 978
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 979,
    "end": 981
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 981,
    "end": 982
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 983,
    "end": 986
  },
  {
    "type": "Identifier",
    "value": "r3b4",
    "start": 987,
    "end": 991
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 992,
    "end": 993
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 994,
    "end": 996
  },
  {
    "type": "Punctuator",
    "value": "<=",
    "start": 997,
    "end": 999
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 1000,
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
    "start": 1020,
    "end": 1023
  },
  {
    "type": "Identifier",
    "value": "r4a1",
    "start": 1024,
    "end": 1028
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 1031,
    "end": 1033
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 1034,
    "end": 1036
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 1037,
    "end": 1039
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1041,
    "end": 1044
  },
  {
    "type": "Identifier",
    "value": "r4a2",
    "start": 1045,
    "end": 1049
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1052,
    "end": 1054
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 1055,
    "end": 1057
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 1058,
    "end": 1060
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1062,
    "end": 1065
  },
  {
    "type": "Identifier",
    "value": "r4a3",
    "start": 1066,
    "end": 1070
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 1073,
    "end": 1075
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 1076,
    "end": 1078
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 1079,
    "end": 1081
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1083,
    "end": 1086
  },
  {
    "type": "Identifier",
    "value": "r4a4",
    "start": 1087,
    "end": 1091
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1092,
    "end": 1093
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 1094,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 1097,
    "end": 1099
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 1100,
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
    "start": 1105,
    "end": 1108
  },
  {
    "type": "Identifier",
    "value": "r4b1",
    "start": 1109,
    "end": 1113
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 1116,
    "end": 1118
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 1119,
    "end": 1121
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 1122,
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
    "start": 1126,
    "end": 1129
  },
  {
    "type": "Identifier",
    "value": "r4b2",
    "start": 1130,
    "end": 1134
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1135,
    "end": 1136
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 1137,
    "end": 1139
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 1140,
    "end": 1142
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1143,
    "end": 1145
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1145,
    "end": 1146
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1147,
    "end": 1150
  },
  {
    "type": "Identifier",
    "value": "r4b3",
    "start": 1151,
    "end": 1155
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1156,
    "end": 1157
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 1158,
    "end": 1160
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 1161,
    "end": 1163
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 1164,
    "end": 1166
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1166,
    "end": 1167
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1168,
    "end": 1171
  },
  {
    "type": "Identifier",
    "value": "r4b4",
    "start": 1172,
    "end": 1176
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 1179,
    "end": 1181
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 1182,
    "end": 1184
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 1185,
    "end": 1187
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1187,
    "end": 1188
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1205,
    "end": 1208
  },
  {
    "type": "Identifier",
    "value": "r5a1",
    "start": 1209,
    "end": 1213
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1214,
    "end": 1215
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 1216,
    "end": 1218
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1219,
    "end": 1221
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 1222,
    "end": 1224
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1224,
    "end": 1225
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1226,
    "end": 1229
  },
  {
    "type": "Identifier",
    "value": "r5a2",
    "start": 1230,
    "end": 1234
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1235,
    "end": 1236
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1237,
    "end": 1239
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1240,
    "end": 1242
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 1243,
    "end": 1245
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1245,
    "end": 1246
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1247,
    "end": 1250
  },
  {
    "type": "Identifier",
    "value": "r5a3",
    "start": 1251,
    "end": 1255
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1256,
    "end": 1257
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 1258,
    "end": 1260
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1261,
    "end": 1263
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 1264,
    "end": 1266
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1268,
    "end": 1271
  },
  {
    "type": "Identifier",
    "value": "r5a4",
    "start": 1272,
    "end": 1276
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1277,
    "end": 1278
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 1279,
    "end": 1281
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1282,
    "end": 1284
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 1285,
    "end": 1287
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1287,
    "end": 1288
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1290,
    "end": 1293
  },
  {
    "type": "Identifier",
    "value": "r5b1",
    "start": 1294,
    "end": 1298
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1299,
    "end": 1300
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 1301,
    "end": 1303
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1304,
    "end": 1306
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 1307,
    "end": 1309
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1309,
    "end": 1310
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1311,
    "end": 1314
  },
  {
    "type": "Identifier",
    "value": "r5b2",
    "start": 1315,
    "end": 1319
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1320,
    "end": 1321
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 1322,
    "end": 1324
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1325,
    "end": 1327
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1328,
    "end": 1330
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1330,
    "end": 1331
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1332,
    "end": 1335
  },
  {
    "type": "Identifier",
    "value": "r5b3",
    "start": 1336,
    "end": 1340
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1341,
    "end": 1342
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 1343,
    "end": 1345
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1346,
    "end": 1348
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 1349,
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
    "value": "var",
    "start": 1353,
    "end": 1356
  },
  {
    "type": "Identifier",
    "value": "r5b4",
    "start": 1357,
    "end": 1361
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1362,
    "end": 1363
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 1364,
    "end": 1366
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1367,
    "end": 1369
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 1370,
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
    "start": 1390,
    "end": 1393
  },
  {
    "type": "Identifier",
    "value": "r6a1",
    "start": 1394,
    "end": 1398
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1399,
    "end": 1400
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 1401,
    "end": 1403
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 1404,
    "end": 1406
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 1407,
    "end": 1409
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1409,
    "end": 1410
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1411,
    "end": 1414
  },
  {
    "type": "Identifier",
    "value": "r6a2",
    "start": 1415,
    "end": 1419
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1420,
    "end": 1421
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1422,
    "end": 1424
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 1425,
    "end": 1427
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 1428,
    "end": 1430
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1430,
    "end": 1431
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1432,
    "end": 1435
  },
  {
    "type": "Identifier",
    "value": "r6a3",
    "start": 1436,
    "end": 1440
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1441,
    "end": 1442
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 1443,
    "end": 1445
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 1446,
    "end": 1448
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 1449,
    "end": 1451
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1451,
    "end": 1452
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1453,
    "end": 1456
  },
  {
    "type": "Identifier",
    "value": "r6a4",
    "start": 1457,
    "end": 1461
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1462,
    "end": 1463
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 1464,
    "end": 1466
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 1467,
    "end": 1469
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 1470,
    "end": 1472
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1472,
    "end": 1473
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1475,
    "end": 1478
  },
  {
    "type": "Identifier",
    "value": "r6b1",
    "start": 1479,
    "end": 1483
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1484,
    "end": 1485
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 1486,
    "end": 1488
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 1489,
    "end": 1491
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 1492,
    "end": 1494
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1494,
    "end": 1495
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1496,
    "end": 1499
  },
  {
    "type": "Identifier",
    "value": "r6b2",
    "start": 1500,
    "end": 1504
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1505,
    "end": 1506
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 1507,
    "end": 1509
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 1510,
    "end": 1512
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1513,
    "end": 1515
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1515,
    "end": 1516
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1517,
    "end": 1520
  },
  {
    "type": "Identifier",
    "value": "r6b3",
    "start": 1521,
    "end": 1525
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1526,
    "end": 1527
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 1528,
    "end": 1530
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 1531,
    "end": 1533
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 1534,
    "end": 1536
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1536,
    "end": 1537
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1538,
    "end": 1541
  },
  {
    "type": "Identifier",
    "value": "r6b4",
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
    "value": "b4",
    "start": 1549,
    "end": 1551
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 1552,
    "end": 1554
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 1555,
    "end": 1557
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1557,
    "end": 1558
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1576,
    "end": 1579
  },
  {
    "type": "Identifier",
    "value": "r7a1",
    "start": 1580,
    "end": 1584
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1585,
    "end": 1586
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 1587,
    "end": 1589
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1590,
    "end": 1593
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 1594,
    "end": 1596
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1596,
    "end": 1597
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1598,
    "end": 1601
  },
  {
    "type": "Identifier",
    "value": "r7a2",
    "start": 1602,
    "end": 1606
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1607,
    "end": 1608
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1609,
    "end": 1611
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1612,
    "end": 1615
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 1616,
    "end": 1618
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1618,
    "end": 1619
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1620,
    "end": 1623
  },
  {
    "type": "Identifier",
    "value": "r7a3",
    "start": 1624,
    "end": 1628
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1629,
    "end": 1630
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 1631,
    "end": 1633
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1634,
    "end": 1637
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 1638,
    "end": 1640
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1640,
    "end": 1641
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1642,
    "end": 1645
  },
  {
    "type": "Identifier",
    "value": "r7a4",
    "start": 1646,
    "end": 1650
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1651,
    "end": 1652
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 1653,
    "end": 1655
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1656,
    "end": 1659
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 1660,
    "end": 1662
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1662,
    "end": 1663
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1665,
    "end": 1668
  },
  {
    "type": "Identifier",
    "value": "r7b1",
    "start": 1669,
    "end": 1673
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1674,
    "end": 1675
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 1676,
    "end": 1678
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1679,
    "end": 1682
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 1683,
    "end": 1685
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1685,
    "end": 1686
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1687,
    "end": 1690
  },
  {
    "type": "Identifier",
    "value": "r7b2",
    "start": 1691,
    "end": 1695
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1696,
    "end": 1697
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 1698,
    "end": 1700
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1701,
    "end": 1704
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1705,
    "end": 1707
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1707,
    "end": 1708
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1709,
    "end": 1712
  },
  {
    "type": "Identifier",
    "value": "r7b3",
    "start": 1713,
    "end": 1717
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1718,
    "end": 1719
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 1720,
    "end": 1722
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1723,
    "end": 1726
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 1727,
    "end": 1729
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1729,
    "end": 1730
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1731,
    "end": 1734
  },
  {
    "type": "Identifier",
    "value": "r7b4",
    "start": 1735,
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
    "value": "b4",
    "start": 1742,
    "end": 1744
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1745,
    "end": 1748
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 1749,
    "end": 1751
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1751,
    "end": 1752
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1770,
    "end": 1773
  },
  {
    "type": "Identifier",
    "value": "r8a1",
    "start": 1774,
    "end": 1778
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1779,
    "end": 1780
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 1781,
    "end": 1783
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1784,
    "end": 1787
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 1788,
    "end": 1790
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1790,
    "end": 1791
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1792,
    "end": 1795
  },
  {
    "type": "Identifier",
    "value": "r8a2",
    "start": 1796,
    "end": 1800
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1801,
    "end": 1802
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1803,
    "end": 1805
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1806,
    "end": 1809
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 1810,
    "end": 1812
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1812,
    "end": 1813
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1814,
    "end": 1817
  },
  {
    "type": "Identifier",
    "value": "r8a3",
    "start": 1818,
    "end": 1822
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1823,
    "end": 1824
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 1825,
    "end": 1827
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1828,
    "end": 1831
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 1832,
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
    "start": 1836,
    "end": 1839
  },
  {
    "type": "Identifier",
    "value": "r8a4",
    "start": 1840,
    "end": 1844
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1845,
    "end": 1846
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 1847,
    "end": 1849
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1850,
    "end": 1853
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 1854,
    "end": 1856
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1856,
    "end": 1857
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1859,
    "end": 1862
  },
  {
    "type": "Identifier",
    "value": "r8b1",
    "start": 1863,
    "end": 1867
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1868,
    "end": 1869
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 1870,
    "end": 1872
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1873,
    "end": 1876
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 1877,
    "end": 1879
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1879,
    "end": 1880
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1881,
    "end": 1884
  },
  {
    "type": "Identifier",
    "value": "r8b2",
    "start": 1885,
    "end": 1889
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1890,
    "end": 1891
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 1892,
    "end": 1894
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1895,
    "end": 1898
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1899,
    "end": 1901
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1901,
    "end": 1902
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1903,
    "end": 1906
  },
  {
    "type": "Identifier",
    "value": "r8b3",
    "start": 1907,
    "end": 1911
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1912,
    "end": 1913
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 1914,
    "end": 1916
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1917,
    "end": 1920
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 1921,
    "end": 1923
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1923,
    "end": 1924
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1925,
    "end": 1928
  },
  {
    "type": "Identifier",
    "value": "r8b4",
    "start": 1929,
    "end": 1933
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1934,
    "end": 1935
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 1936,
    "end": 1938
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1939,
    "end": 1942
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 1943,
    "end": 1945
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1945,
    "end": 1946
  }
]
```
