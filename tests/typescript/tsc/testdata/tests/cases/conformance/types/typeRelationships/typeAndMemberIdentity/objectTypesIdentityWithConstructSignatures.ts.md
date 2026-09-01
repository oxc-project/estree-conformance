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
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 50,
        "end": 51
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 58,
              "end": 69
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "type": "TSStringKeyword",
                      "start": 73,
                      "end": 79
                    },
                    "start": 71,
                    "end": 79
                  },
                  "start": 70,
                  "end": 79
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 81,
                "end": 84
              },
              "expression": false,
              "start": 69,
              "end": 84
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 58,
            "end": 84
          }
        ],
        "start": 52,
        "end": 86
      },
      "abstract": false,
      "declare": false,
      "start": 44,
      "end": 86
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 94,
        "end": 95
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 102,
              "end": 113
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "type": "TSStringKeyword",
                      "start": 117,
                      "end": 123
                    },
                    "start": 115,
                    "end": 123
                  },
                  "start": 114,
                  "end": 123
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 125,
                "end": 128
              },
              "expression": false,
              "start": 113,
              "end": 128
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 102,
            "end": 128
          }
        ],
        "start": 96,
        "end": 130
      },
      "abstract": false,
      "declare": false,
      "start": 88,
      "end": 130
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
        "start": 138,
        "end": 139
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
              "start": 140,
              "end": 141
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 140,
            "end": 141
          }
        ],
        "start": 139,
        "end": 142
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 149,
              "end": 160
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 164,
                        "end": 165
                      },
                      "typeArguments": null,
                      "start": 164,
                      "end": 165
                    },
                    "start": 162,
                    "end": 165
                  },
                  "start": 161,
                  "end": 165
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 167,
                "end": 170
              },
              "expression": false,
              "start": 160,
              "end": 170
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 149,
            "end": 170
          }
        ],
        "start": 143,
        "end": 172
      },
      "abstract": false,
      "declare": false,
      "start": 132,
      "end": 172
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 184,
        "end": 185
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
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
                    "type": "TSStringKeyword",
                    "start": 199,
                    "end": 205
                  },
                  "start": 197,
                  "end": 205
                },
                "start": 196,
                "end": 205
              }
            ],
            "returnType": null,
            "start": 192,
            "end": 207
          }
        ],
        "start": 186,
        "end": 209
      },
      "declare": false,
      "start": 174,
      "end": 209
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null,
        "start": 221,
        "end": 223
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
              "start": 224,
              "end": 225
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 224,
            "end": 225
          }
        ],
        "start": 223,
        "end": 226
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
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
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 240,
                      "end": 241
                    },
                    "typeArguments": null,
                    "start": 240,
                    "end": 241
                  },
                  "start": 238,
                  "end": 241
                },
                "start": 237,
                "end": 241
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 244,
                  "end": 245
                },
                "typeArguments": null,
                "start": 244,
                "end": 245
              },
              "start": 242,
              "end": 245
            },
            "start": 233,
            "end": 246
          }
        ],
        "start": 227,
        "end": 248
      },
      "declare": false,
      "start": 211,
      "end": 248
    },
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
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
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
                            "type": "TSStringKeyword",
                            "start": 266,
                            "end": 272
                          },
                          "start": 264,
                          "end": 272
                        },
                        "start": 263,
                        "end": 272
                      }
                    ],
                    "returnType": null,
                    "start": 259,
                    "end": 273
                  }
                ],
                "start": 257,
                "end": 275
              },
              "start": 255,
              "end": 275
            },
            "start": 254,
            "end": 275
          },
          "init": null,
          "definite": false,
          "start": 254,
          "end": 275
        }
      ],
      "declare": false,
      "start": 250,
      "end": 275
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 286,
        "end": 290
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
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 294,
                "end": 295
              },
              "typeArguments": null,
              "start": 294,
              "end": 295
            },
            "start": 292,
            "end": 295
          },
          "start": 291,
          "end": 295
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 277,
      "end": 297
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 307,
        "end": 311
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
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 315,
                "end": 316
              },
              "typeArguments": null,
              "start": 315,
              "end": 316
            },
            "start": 313,
            "end": 316
          },
          "start": 312,
          "end": 316
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 298,
      "end": 318
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 337,
        "end": 341
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
              "type": "TSAnyKeyword",
              "start": 345,
              "end": 348
            },
            "start": 343,
            "end": 348
          },
          "start": 342,
          "end": 348
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 350,
        "end": 353
      },
      "expression": false,
      "start": 328,
      "end": 353
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null,
        "start": 364,
        "end": 369
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
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 373,
                "end": 374
              },
              "typeArguments": null,
              "start": 373,
              "end": 374
            },
            "start": 371,
            "end": 374
          },
          "start": 370,
          "end": 374
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 355,
      "end": 376
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null,
        "start": 386,
        "end": 391
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
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 395,
                "end": 396
              },
              "typeArguments": null,
              "start": 395,
              "end": 396
            },
            "start": 393,
            "end": 396
          },
          "start": 392,
          "end": 396
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 377,
      "end": 398
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null,
        "start": 417,
        "end": 422
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
              "type": "TSAnyKeyword",
              "start": 426,
              "end": 429
            },
            "start": 424,
            "end": 429
          },
          "start": 423,
          "end": 429
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 431,
        "end": 434
      },
      "expression": false,
      "start": 408,
      "end": 434
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null,
        "start": 445,
        "end": 450
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
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 454,
                "end": 455
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 456,
                    "end": 462
                  }
                ],
                "start": 455,
                "end": 463
              },
              "start": 454,
              "end": 463
            },
            "start": 452,
            "end": 463
          },
          "start": 451,
          "end": 463
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 436,
      "end": 465
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null,
        "start": 475,
        "end": 480
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
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 484,
                "end": 485
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 486,
                    "end": 492
                  }
                ],
                "start": 485,
                "end": 493
              },
              "start": 484,
              "end": 493
            },
            "start": 482,
            "end": 493
          },
          "start": 481,
          "end": 493
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 466,
      "end": 495
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null,
        "start": 514,
        "end": 519
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
              "type": "TSAnyKeyword",
              "start": 523,
              "end": 526
            },
            "start": 521,
            "end": 526
          },
          "start": 520,
          "end": 526
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 528,
        "end": 531
      },
      "expression": false,
      "start": 505,
      "end": 531
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 542,
        "end": 546
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
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 550,
                "end": 551
              },
              "typeArguments": null,
              "start": 550,
              "end": 551
            },
            "start": 548,
            "end": 551
          },
          "start": 547,
          "end": 551
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 533,
      "end": 553
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 563,
        "end": 567
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
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 571,
                "end": 572
              },
              "typeArguments": null,
              "start": 571,
              "end": 572
            },
            "start": 569,
            "end": 572
          },
          "start": 568,
          "end": 572
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 554,
      "end": 574
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 593,
        "end": 597
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
              "type": "TSAnyKeyword",
              "start": 601,
              "end": 604
            },
            "start": 599,
            "end": 604
          },
          "start": 598,
          "end": 604
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 606,
        "end": 609
      },
      "expression": false,
      "start": 584,
      "end": 609
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 620,
        "end": 624
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
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 635,
                "end": 636
              },
              "typeArguments": null,
              "start": 628,
              "end": 636
            },
            "start": 626,
            "end": 636
          },
          "start": 625,
          "end": 636
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 611,
      "end": 638
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 648,
        "end": 652
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
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 663,
                "end": 664
              },
              "typeArguments": null,
              "start": 656,
              "end": 664
            },
            "start": 654,
            "end": 664
          },
          "start": 653,
          "end": 664
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 639,
      "end": 666
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 685,
        "end": 689
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
              "type": "TSAnyKeyword",
              "start": 693,
              "end": 696
            },
            "start": 691,
            "end": 696
          },
          "start": 690,
          "end": 696
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 698,
        "end": 701
      },
      "expression": false,
      "start": 676,
      "end": 701
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 712,
        "end": 716
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
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 720,
                "end": 721
              },
              "typeArguments": null,
              "start": 720,
              "end": 721
            },
            "start": 718,
            "end": 721
          },
          "start": 717,
          "end": 721
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 703,
      "end": 723
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 733,
        "end": 737
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
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 741,
                "end": 742
              },
              "typeArguments": null,
              "start": 741,
              "end": 742
            },
            "start": 739,
            "end": 742
          },
          "start": 738,
          "end": 742
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 724,
      "end": 744
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 763,
        "end": 767
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
              "type": "TSAnyKeyword",
              "start": 771,
              "end": 774
            },
            "start": 769,
            "end": 774
          },
          "start": 768,
          "end": 774
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 776,
        "end": 779
      },
      "expression": false,
      "start": 754,
      "end": 779
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5b",
        "optional": false,
        "typeAnnotation": null,
        "start": 790,
        "end": 795
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
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 799,
                "end": 800
              },
              "typeArguments": null,
              "start": 799,
              "end": 800
            },
            "start": 797,
            "end": 800
          },
          "start": 796,
          "end": 800
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 781,
      "end": 802
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5b",
        "optional": false,
        "typeAnnotation": null,
        "start": 812,
        "end": 817
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
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 821,
                "end": 822
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 823,
                    "end": 829
                  }
                ],
                "start": 822,
                "end": 830
              },
              "start": 821,
              "end": 830
            },
            "start": 819,
            "end": 830
          },
          "start": 818,
          "end": 830
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 803,
      "end": 832
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5b",
        "optional": false,
        "typeAnnotation": null,
        "start": 851,
        "end": 856
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
              "type": "TSAnyKeyword",
              "start": 860,
              "end": 863
            },
            "start": 858,
            "end": 863
          },
          "start": 857,
          "end": 863
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 865,
        "end": 868
      },
      "expression": false,
      "start": 842,
      "end": 868
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 879,
        "end": 883
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
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 887,
                "end": 888
              },
              "typeArguments": null,
              "start": 887,
              "end": 888
            },
            "start": 885,
            "end": 888
          },
          "start": 884,
          "end": 888
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 870,
      "end": 890
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 900,
        "end": 904
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
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 908,
                "end": 909
              },
              "typeArguments": null,
              "start": 908,
              "end": 909
            },
            "start": 906,
            "end": 909
          },
          "start": 905,
          "end": 909
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 891,
      "end": 911
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 928,
        "end": 932
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
              "type": "TSAnyKeyword",
              "start": 936,
              "end": 939
            },
            "start": 934,
            "end": 939
          },
          "start": 933,
          "end": 939
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 941,
        "end": 944
      },
      "expression": false,
      "start": 919,
      "end": 944
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 955,
        "end": 959
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
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 963,
                "end": 964
              },
              "typeArguments": null,
              "start": 963,
              "end": 964
            },
            "start": 961,
            "end": 964
          },
          "start": 960,
          "end": 964
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 946,
      "end": 966
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 976,
        "end": 980
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
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 991,
                "end": 992
              },
              "typeArguments": null,
              "start": 984,
              "end": 992
            },
            "start": 982,
            "end": 992
          },
          "start": 981,
          "end": 992
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 967,
      "end": 994
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1010,
        "end": 1014
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
              "type": "TSAnyKeyword",
              "start": 1018,
              "end": 1021
            },
            "start": 1016,
            "end": 1021
          },
          "start": 1015,
          "end": 1021
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1023,
        "end": 1026
      },
      "expression": false,
      "start": 1001,
      "end": 1026
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1037,
        "end": 1041
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
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 1045,
                "end": 1046
              },
              "typeArguments": null,
              "start": 1045,
              "end": 1046
            },
            "start": 1043,
            "end": 1046
          },
          "start": 1042,
          "end": 1046
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1028,
      "end": 1048
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1058,
        "end": 1062
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
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 1066,
                "end": 1067
              },
              "typeArguments": null,
              "start": 1066,
              "end": 1067
            },
            "start": 1064,
            "end": 1067
          },
          "start": 1063,
          "end": 1067
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1049,
      "end": 1069
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1085,
        "end": 1089
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
              "type": "TSAnyKeyword",
              "start": 1093,
              "end": 1096
            },
            "start": 1091,
            "end": 1096
          },
          "start": 1090,
          "end": 1096
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1098,
        "end": 1101
      },
      "expression": false,
      "start": 1076,
      "end": 1101
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1112,
        "end": 1116
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
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 1120,
                "end": 1121
              },
              "typeArguments": null,
              "start": 1120,
              "end": 1121
            },
            "start": 1118,
            "end": 1121
          },
          "start": 1117,
          "end": 1121
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1103,
      "end": 1123
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1133,
        "end": 1137
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
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 1141,
                "end": 1142
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1143,
                    "end": 1149
                  }
                ],
                "start": 1142,
                "end": 1150
              },
              "start": 1141,
              "end": 1150
            },
            "start": 1139,
            "end": 1150
          },
          "start": 1138,
          "end": 1150
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1124,
      "end": 1152
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1171,
        "end": 1175
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
              "type": "TSAnyKeyword",
              "start": 1179,
              "end": 1182
            },
            "start": 1177,
            "end": 1182
          },
          "start": 1176,
          "end": 1182
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1184,
        "end": 1187
      },
      "expression": false,
      "start": 1162,
      "end": 1187
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1198,
        "end": 1203
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
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 1207,
                "end": 1208
              },
              "typeArguments": null,
              "start": 1207,
              "end": 1208
            },
            "start": 1205,
            "end": 1208
          },
          "start": 1204,
          "end": 1208
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1189,
      "end": 1210
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1220,
        "end": 1225
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
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1236,
                "end": 1237
              },
              "typeArguments": null,
              "start": 1229,
              "end": 1237
            },
            "start": 1227,
            "end": 1237
          },
          "start": 1226,
          "end": 1237
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1211,
      "end": 1239
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1255,
        "end": 1260
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
              "type": "TSAnyKeyword",
              "start": 1264,
              "end": 1267
            },
            "start": 1262,
            "end": 1267
          },
          "start": 1261,
          "end": 1267
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1269,
        "end": 1272
      },
      "expression": false,
      "start": 1246,
      "end": 1272
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1283,
        "end": 1288
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
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 1292,
                "end": 1293
              },
              "typeArguments": null,
              "start": 1292,
              "end": 1293
            },
            "start": 1290,
            "end": 1293
          },
          "start": 1289,
          "end": 1293
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1274,
      "end": 1295
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1305,
        "end": 1310
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
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 1314,
                "end": 1315
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1316,
                    "end": 1322
                  }
                ],
                "start": 1315,
                "end": 1323
              },
              "start": 1314,
              "end": 1323
            },
            "start": 1312,
            "end": 1323
          },
          "start": 1311,
          "end": 1323
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1296,
      "end": 1325
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1341,
        "end": 1346
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
              "type": "TSAnyKeyword",
              "start": 1350,
              "end": 1353
            },
            "start": 1348,
            "end": 1353
          },
          "start": 1347,
          "end": 1353
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1355,
        "end": 1358
      },
      "expression": false,
      "start": 1332,
      "end": 1358
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1369,
        "end": 1375
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
                "name": "I2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1379,
                "end": 1381
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1382,
                    "end": 1388
                  }
                ],
                "start": 1381,
                "end": 1389
              },
              "start": 1379,
              "end": 1389
            },
            "start": 1377,
            "end": 1389
          },
          "start": 1376,
          "end": 1389
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1360,
      "end": 1391
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1401,
        "end": 1407
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
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 1411,
                "end": 1412
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1413,
                    "end": 1419
                  }
                ],
                "start": 1412,
                "end": 1420
              },
              "start": 1411,
              "end": 1420
            },
            "start": 1409,
            "end": 1420
          },
          "start": 1408,
          "end": 1420
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1392,
      "end": 1422
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1438,
        "end": 1444
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
              "type": "TSAnyKeyword",
              "start": 1448,
              "end": 1451
            },
            "start": 1446,
            "end": 1451
          },
          "start": 1445,
          "end": 1451
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1453,
        "end": 1456
      },
      "expression": false,
      "start": 1429,
      "end": 1456
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 1467,
        "end": 1472
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
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 1476,
                "end": 1477
              },
              "typeArguments": null,
              "start": 1476,
              "end": 1477
            },
            "start": 1474,
            "end": 1477
          },
          "start": 1473,
          "end": 1477
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1458,
      "end": 1479
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 1489,
        "end": 1494
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
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1505,
                "end": 1506
              },
              "typeArguments": null,
              "start": 1498,
              "end": 1506
            },
            "start": 1496,
            "end": 1506
          },
          "start": 1495,
          "end": 1506
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1480,
      "end": 1508
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 1527,
        "end": 1532
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
              "type": "TSAnyKeyword",
              "start": 1536,
              "end": 1539
            },
            "start": 1534,
            "end": 1539
          },
          "start": 1533,
          "end": 1539
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1541,
        "end": 1544
      },
      "expression": false,
      "start": 1518,
      "end": 1544
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null,
        "start": 1555,
        "end": 1560
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
                "name": "I2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1564,
                "end": 1566
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1567,
                    "end": 1573
                  }
                ],
                "start": 1566,
                "end": 1574
              },
              "start": 1564,
              "end": 1574
            },
            "start": 1562,
            "end": 1574
          },
          "start": 1561,
          "end": 1574
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1546,
      "end": 1576
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null,
        "start": 1586,
        "end": 1591
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
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 1595,
                "end": 1596
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 1597,
                    "end": 1603
                  }
                ],
                "start": 1596,
                "end": 1604
              },
              "start": 1595,
              "end": 1604
            },
            "start": 1593,
            "end": 1604
          },
          "start": 1592,
          "end": 1604
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1577,
      "end": 1606
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null,
        "start": 1622,
        "end": 1627
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
              "type": "TSAnyKeyword",
              "start": 1631,
              "end": 1634
            },
            "start": 1629,
            "end": 1634
          },
          "start": 1628,
          "end": 1634
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1636,
        "end": 1639
      },
      "expression": false,
      "start": 1613,
      "end": 1639
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 44,
  "end": 1639
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 44,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 52,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 58,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 73,
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
    "type": "Punctuator",
    "value": "}",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 85,
    "end": 86
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 88,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 102,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 113,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "string",
    "start": 117,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 129,
    "end": 130
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 132,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Identifier",
    "value": "constructor",
    "start": 149,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 160,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "}",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 171,
    "end": 172
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 174,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 186,
    "end": 187
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 192,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 195,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "string",
    "start": 199,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 208,
    "end": 209
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 211,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 221,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 223,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 227,
    "end": 228
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 233,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 236,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 238,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 247,
    "end": 248
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 250,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 257,
    "end": 258
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 259,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 262,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 264,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 266,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 274,
    "end": 275
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 277,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 286,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 290,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 292,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 296,
    "end": 297
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 298,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 307,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 311,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 313,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 317,
    "end": 318
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 328,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 337,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 341,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 343,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 345,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 352,
    "end": 353
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 355,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "foo1b",
    "start": 364,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 369,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Identifier",
    "value": "B",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "function",
    "start": 377,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "foo1b",
    "start": 386,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 391,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 393,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 396,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 397,
    "end": 398
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 408,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "foo1b",
    "start": 417,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 422,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 424,
    "end": 425
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 426,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 429,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 433,
    "end": 434
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 436,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "foo1c",
    "start": 445,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 450,
    "end": 451
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 451,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 452,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 454,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 455,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 456,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 464,
    "end": 465
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 466,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "foo1c",
    "start": 475,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 480,
    "end": 481
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 481,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 482,
    "end": 483
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 485,
    "end": 486
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 486,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 493,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 494,
    "end": 495
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 505,
    "end": 513
  },
  {
    "type": "Identifier",
    "value": "foo1c",
    "start": 514,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 519,
    "end": 520
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 521,
    "end": 522
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 523,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 526,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 530,
    "end": 531
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 533,
    "end": 541
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 542,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 546,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 547,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 548,
    "end": 549
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 550,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "function",
    "start": 554,
    "end": 562
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 563,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 567,
    "end": 568
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 568,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 569,
    "end": 570
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 571,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 572,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 573,
    "end": 574
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 584,
    "end": 592
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 593,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 597,
    "end": 598
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Identifier",
    "value": "any",
    "start": 601,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 604,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 606,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 608,
    "end": 609
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 611,
    "end": 619
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 620,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 624,
    "end": 625
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 625,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 626,
    "end": 627
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 628,
    "end": 634
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 635,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 636,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 637,
    "end": 638
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 639,
    "end": 647
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 648,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 652,
    "end": 653
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 653,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 654,
    "end": 655
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 656,
    "end": 662
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 663,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 664,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 665,
    "end": 666
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 676,
    "end": 684
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 685,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 689,
    "end": 690
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 690,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 691,
    "end": 692
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 693,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 696,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 698,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 700,
    "end": 701
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 703,
    "end": 711
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 712,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 716,
    "end": 717
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 717,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 718,
    "end": 719
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 720,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 721,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 722,
    "end": 723
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 724,
    "end": 732
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 733,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 737,
    "end": 738
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 738,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 739,
    "end": 740
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 741,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 742,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 743,
    "end": 744
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 754,
    "end": 762
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 763,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 767,
    "end": 768
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 768,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 769,
    "end": 770
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 771,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 774,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 776,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 778,
    "end": 779
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 781,
    "end": 789
  },
  {
    "type": "Identifier",
    "value": "foo5b",
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
    "value": "x",
    "start": 796,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 797,
    "end": 798
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 799,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 800,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 801,
    "end": 802
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 803,
    "end": 811
  },
  {
    "type": "Identifier",
    "value": "foo5b",
    "start": 812,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 817,
    "end": 818
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 818,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 819,
    "end": 820
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 821,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 822,
    "end": 823
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 823,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 829,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 830,
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
    "value": "function",
    "start": 842,
    "end": 850
  },
  {
    "type": "Identifier",
    "value": "foo5b",
    "start": 851,
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
    "type": "Identifier",
    "value": "any",
    "start": 860,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 863,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 865,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 867,
    "end": 868
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 870,
    "end": 878
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 879,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 883,
    "end": 884
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 884,
    "end": 885
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 885,
    "end": 886
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 887,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 888,
    "end": 889
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 889,
    "end": 890
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 891,
    "end": 899
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 900,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 904,
    "end": 905
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 905,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 906,
    "end": 907
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 908,
    "end": 909
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 909,
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
    "start": 919,
    "end": 927
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 928,
    "end": 932
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 932,
    "end": 933
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 933,
    "end": 934
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 934,
    "end": 935
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 936,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 939,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 941,
    "end": 942
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 943,
    "end": 944
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 946,
    "end": 954
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 955,
    "end": 959
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 959,
    "end": 960
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 960,
    "end": 961
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 961,
    "end": 962
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 963,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "function",
    "start": 967,
    "end": 975
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 976,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 980,
    "end": 981
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 981,
    "end": 982
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 982,
    "end": 983
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 984,
    "end": 990
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 991,
    "end": 992
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 992,
    "end": 993
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 993,
    "end": 994
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1001,
    "end": 1009
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 1010,
    "end": 1014
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1018,
    "end": 1021
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1021,
    "end": 1022
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1025,
    "end": 1026
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1028,
    "end": 1036
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 1037,
    "end": 1041
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1043,
    "end": 1044
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1049,
    "end": 1057
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 1058,
    "end": 1062
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1062,
    "end": 1063
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1063,
    "end": 1064
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1076,
    "end": 1084
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 1085,
    "end": 1089
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1089,
    "end": 1090
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1091,
    "end": 1092
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1093,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1096,
    "end": 1097
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1098,
    "end": 1099
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1100,
    "end": 1101
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1103,
    "end": 1111
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 1112,
    "end": 1116
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1116,
    "end": 1117
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1117,
    "end": 1118
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1118,
    "end": 1119
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1124,
    "end": 1132
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 1133,
    "end": 1137
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1138,
    "end": 1139
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1139,
    "end": 1140
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1141,
    "end": 1142
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1142,
    "end": 1143
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1143,
    "end": 1149
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1149,
    "end": 1150
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1150,
    "end": 1151
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1151,
    "end": 1152
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1162,
    "end": 1170
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 1171,
    "end": 1175
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1176,
    "end": 1177
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1179,
    "end": 1182
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1182,
    "end": 1183
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1184,
    "end": 1185
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1189,
    "end": 1197
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 1198,
    "end": 1203
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1203,
    "end": 1204
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1204,
    "end": 1205
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1205,
    "end": 1206
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1207,
    "end": 1208
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1208,
    "end": 1209
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1209,
    "end": 1210
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1211,
    "end": 1219
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 1220,
    "end": 1225
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1225,
    "end": 1226
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1226,
    "end": 1227
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1227,
    "end": 1228
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1229,
    "end": 1235
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1236,
    "end": 1237
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "function",
    "start": 1246,
    "end": 1254
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 1255,
    "end": 1260
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1260,
    "end": 1261
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Identifier",
    "value": "any",
    "start": 1264,
    "end": 1267
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1267,
    "end": 1268
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1269,
    "end": 1270
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1274,
    "end": 1282
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 1283,
    "end": 1288
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1288,
    "end": 1289
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1289,
    "end": 1290
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1290,
    "end": 1291
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1292,
    "end": 1293
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1293,
    "end": 1294
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1294,
    "end": 1295
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1296,
    "end": 1304
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 1305,
    "end": 1310
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1310,
    "end": 1311
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1311,
    "end": 1312
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1312,
    "end": 1313
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1314,
    "end": 1315
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1315,
    "end": 1316
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1316,
    "end": 1322
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1322,
    "end": 1323
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1323,
    "end": 1324
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1324,
    "end": 1325
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1332,
    "end": 1340
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 1341,
    "end": 1346
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1346,
    "end": 1347
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1347,
    "end": 1348
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1348,
    "end": 1349
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1350,
    "end": 1353
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1353,
    "end": 1354
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1355,
    "end": 1356
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1357,
    "end": 1358
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1360,
    "end": 1368
  },
  {
    "type": "Identifier",
    "value": "foo12b",
    "start": 1369,
    "end": 1375
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1375,
    "end": 1376
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1376,
    "end": 1377
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1377,
    "end": 1378
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 1379,
    "end": 1381
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1381,
    "end": 1382
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1382,
    "end": 1388
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1388,
    "end": 1389
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1389,
    "end": 1390
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1390,
    "end": 1391
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1392,
    "end": 1400
  },
  {
    "type": "Identifier",
    "value": "foo12b",
    "start": 1401,
    "end": 1407
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1407,
    "end": 1408
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1408,
    "end": 1409
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1409,
    "end": 1410
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1411,
    "end": 1412
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1412,
    "end": 1413
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1413,
    "end": 1419
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1419,
    "end": 1420
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1420,
    "end": 1421
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1421,
    "end": 1422
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1429,
    "end": 1437
  },
  {
    "type": "Identifier",
    "value": "foo12b",
    "start": 1438,
    "end": 1444
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1444,
    "end": 1445
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1445,
    "end": 1446
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1446,
    "end": 1447
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1448,
    "end": 1451
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1451,
    "end": 1452
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1453,
    "end": 1454
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1455,
    "end": 1456
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1458,
    "end": 1466
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 1467,
    "end": 1472
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1472,
    "end": 1473
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1473,
    "end": 1474
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1474,
    "end": 1475
  },
  {
    "type": "Identifier",
    "value": "I",
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
    "value": ";",
    "start": 1478,
    "end": 1479
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1480,
    "end": 1488
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 1489,
    "end": 1494
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1494,
    "end": 1495
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1495,
    "end": 1496
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1496,
    "end": 1497
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1498,
    "end": 1504
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1505,
    "end": 1506
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1506,
    "end": 1507
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1507,
    "end": 1508
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1518,
    "end": 1526
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 1527,
    "end": 1532
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1532,
    "end": 1533
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1533,
    "end": 1534
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1534,
    "end": 1535
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1536,
    "end": 1539
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1539,
    "end": 1540
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1541,
    "end": 1542
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1543,
    "end": 1544
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1546,
    "end": 1554
  },
  {
    "type": "Identifier",
    "value": "foo15",
    "start": 1555,
    "end": 1560
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1560,
    "end": 1561
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1561,
    "end": 1562
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1562,
    "end": 1563
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 1564,
    "end": 1566
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1566,
    "end": 1567
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1567,
    "end": 1573
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1573,
    "end": 1574
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1574,
    "end": 1575
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1575,
    "end": 1576
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1577,
    "end": 1585
  },
  {
    "type": "Identifier",
    "value": "foo15",
    "start": 1586,
    "end": 1591
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1591,
    "end": 1592
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1592,
    "end": 1593
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1593,
    "end": 1594
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1595,
    "end": 1596
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1596,
    "end": 1597
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1597,
    "end": 1603
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1603,
    "end": 1604
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1604,
    "end": 1605
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1605,
    "end": 1606
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1613,
    "end": 1621
  },
  {
    "type": "Identifier",
    "value": "foo15",
    "start": 1622,
    "end": 1627
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1627,
    "end": 1628
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1628,
    "end": 1629
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1629,
    "end": 1630
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1631,
    "end": 1634
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1634,
    "end": 1635
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1636,
    "end": 1637
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1638,
    "end": 1639
  }
]
```
