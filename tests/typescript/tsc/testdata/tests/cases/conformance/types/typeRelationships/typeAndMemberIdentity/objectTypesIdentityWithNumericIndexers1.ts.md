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
                    "start": 62,
                    "end": 68
                  },
                  "start": 60,
                  "end": 68
                },
                "start": 59,
                "end": 68
              }
            ],
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
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 58,
            "end": 78
          }
        ],
        "start": 52,
        "end": 80
      },
      "abstract": false,
      "declare": false,
      "start": 44,
      "end": 80
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
        "start": 88,
        "end": 89
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
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
                    "start": 100,
                    "end": 106
                  },
                  "start": 98,
                  "end": 106
                },
                "start": 97,
                "end": 106
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 109,
                "end": 115
              },
              "start": 107,
              "end": 115
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 96,
            "end": 116
          }
        ],
        "start": 90,
        "end": 118
      },
      "abstract": false,
      "declare": false,
      "start": 82,
      "end": 118
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
        "start": 126,
        "end": 127
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
              "start": 128,
              "end": 129
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 128,
            "end": 129
          }
        ],
        "start": 127,
        "end": 130
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
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
                    "start": 141,
                    "end": 147
                  },
                  "start": 139,
                  "end": 147
                },
                "start": 138,
                "end": 147
              }
            ],
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
                  "start": 150,
                  "end": 151
                },
                "typeArguments": null,
                "start": 150,
                "end": 151
              },
              "start": 148,
              "end": 151
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 137,
            "end": 152
          }
        ],
        "start": 131,
        "end": 154
      },
      "abstract": false,
      "declare": false,
      "start": 120,
      "end": 154
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 166,
        "end": 167
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
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
                    "start": 178,
                    "end": 184
                  },
                  "start": 176,
                  "end": 184
                },
                "start": 175,
                "end": 184
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 187,
                "end": 193
              },
              "start": 185,
              "end": 193
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 174,
            "end": 194
          }
        ],
        "start": 168,
        "end": 196
      },
      "declare": false,
      "start": 156,
      "end": 196
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PA",
        "optional": false,
        "typeAnnotation": null,
        "start": 204,
        "end": 206
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 215,
        "end": 216
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 217,
        "end": 220
      },
      "abstract": false,
      "declare": false,
      "start": 198,
      "end": 220
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PB",
        "optional": false,
        "typeAnnotation": null,
        "start": 228,
        "end": 230
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 239,
        "end": 240
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 241,
        "end": 244
      },
      "abstract": false,
      "declare": false,
      "start": 222,
      "end": 244
    },
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
                            "start": 263,
                            "end": 269
                          },
                          "start": 261,
                          "end": 269
                        },
                        "start": 260,
                        "end": 269
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 272,
                        "end": 278
                      },
                      "start": 270,
                      "end": 278
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 259,
                    "end": 279
                  }
                ],
                "start": 253,
                "end": 281
              },
              "start": 251,
              "end": 281
            },
            "start": 250,
            "end": 281
          },
          "init": null,
          "definite": false,
          "start": 250,
          "end": 281
        }
      ],
      "declare": false,
      "start": 246,
      "end": 281
    },
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
                            "start": 295,
                            "end": 301
                          },
                          "start": 293,
                          "end": 301
                        },
                        "start": 292,
                        "end": 301
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 304,
                        "end": 310
                      },
                      "start": 302,
                      "end": 310
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 291,
                    "end": 311
                  }
                ],
                "start": 289,
                "end": 313
              },
              "start": 287,
              "end": 313
            },
            "start": 286,
            "end": 313
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 318,
                  "end": 319
                },
                "value": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 321,
                  "end": 323
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 318,
                "end": 323
              }
            ],
            "start": 316,
            "end": 325
          },
          "definite": false,
          "start": 286,
          "end": 325
        }
      ],
      "declare": false,
      "start": 282,
      "end": 326
    },
    {
      "type": "TSDeclareFunction",
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 345,
                "end": 346
              },
              "typeArguments": null,
              "start": 345,
              "end": 346
            },
            "start": 343,
            "end": 346
          },
          "start": 342,
          "end": 346
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 328,
      "end": 348
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 358,
        "end": 362
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
                "start": 366,
                "end": 367
              },
              "typeArguments": null,
              "start": 366,
              "end": 367
            },
            "start": 364,
            "end": 367
          },
          "start": 363,
          "end": 367
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 349,
      "end": 369
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 388,
        "end": 392
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
              "start": 396,
              "end": 399
            },
            "start": 394,
            "end": 399
          },
          "start": 393,
          "end": 399
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 401,
        "end": 404
      },
      "expression": false,
      "start": 379,
      "end": 404
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null,
        "start": 415,
        "end": 420
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
                "start": 424,
                "end": 425
              },
              "typeArguments": null,
              "start": 424,
              "end": 425
            },
            "start": 422,
            "end": 425
          },
          "start": 421,
          "end": 425
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 406,
      "end": 427
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null,
        "start": 437,
        "end": 442
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
                "start": 446,
                "end": 447
              },
              "typeArguments": null,
              "start": 446,
              "end": 447
            },
            "start": 444,
            "end": 447
          },
          "start": 443,
          "end": 447
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 428,
      "end": 449
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null,
        "start": 468,
        "end": 473
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
              "start": 477,
              "end": 480
            },
            "start": 475,
            "end": 480
          },
          "start": 474,
          "end": 480
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 482,
        "end": 485
      },
      "expression": false,
      "start": 459,
      "end": 485
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null,
        "start": 496,
        "end": 501
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
                "start": 505,
                "end": 506
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 507,
                    "end": 513
                  }
                ],
                "start": 506,
                "end": 514
              },
              "start": 505,
              "end": 514
            },
            "start": 503,
            "end": 514
          },
          "start": 502,
          "end": 514
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 487,
      "end": 516
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null,
        "start": 526,
        "end": 531
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
                "start": 535,
                "end": 536
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 537,
                    "end": 543
                  }
                ],
                "start": 536,
                "end": 544
              },
              "start": 535,
              "end": 544
            },
            "start": 533,
            "end": 544
          },
          "start": 532,
          "end": 544
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 517,
      "end": 546
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null,
        "start": 565,
        "end": 570
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
              "start": 574,
              "end": 577
            },
            "start": 572,
            "end": 577
          },
          "start": 571,
          "end": 577
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 579,
        "end": 582
      },
      "expression": false,
      "start": 556,
      "end": 582
    },
    {
      "type": "TSDeclareFunction",
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 601,
                "end": 602
              },
              "typeArguments": null,
              "start": 601,
              "end": 602
            },
            "start": 599,
            "end": 602
          },
          "start": 598,
          "end": 602
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 584,
      "end": 604
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 614,
        "end": 618
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
                "start": 622,
                "end": 623
              },
              "typeArguments": null,
              "start": 622,
              "end": 623
            },
            "start": 620,
            "end": 623
          },
          "start": 619,
          "end": 623
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 605,
      "end": 625
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 644,
        "end": 648
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
              "start": 652,
              "end": 655
            },
            "start": 650,
            "end": 655
          },
          "start": 649,
          "end": 655
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 657,
        "end": 660
      },
      "expression": false,
      "start": 635,
      "end": 660
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 671,
        "end": 675
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
                "start": 686,
                "end": 687
              },
              "typeArguments": null,
              "start": 679,
              "end": 687
            },
            "start": 677,
            "end": 687
          },
          "start": 676,
          "end": 687
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 662,
      "end": 689
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 699,
        "end": 703
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
                "start": 714,
                "end": 715
              },
              "typeArguments": null,
              "start": 707,
              "end": 715
            },
            "start": 705,
            "end": 715
          },
          "start": 704,
          "end": 715
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 690,
      "end": 717
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 736,
        "end": 740
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
              "start": 744,
              "end": 747
            },
            "start": 742,
            "end": 747
          },
          "start": 741,
          "end": 747
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 749,
        "end": 752
      },
      "expression": false,
      "start": 727,
      "end": 752
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
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
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 778,
                "end": 779
              },
              "typeArguments": null,
              "start": 771,
              "end": 779
            },
            "start": 769,
            "end": 779
          },
          "start": 768,
          "end": 779
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 754,
      "end": 781
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 791,
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
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 806,
                "end": 807
              },
              "typeArguments": null,
              "start": 799,
              "end": 807
            },
            "start": 797,
            "end": 807
          },
          "start": 796,
          "end": 807
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 782,
      "end": 809
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 828,
        "end": 832
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
              "start": 836,
              "end": 839
            },
            "start": 834,
            "end": 839
          },
          "start": 833,
          "end": 839
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 841,
        "end": 844
      },
      "expression": false,
      "start": 819,
      "end": 844
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 855,
        "end": 859
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
                "start": 863,
                "end": 864
              },
              "typeArguments": null,
              "start": 863,
              "end": 864
            },
            "start": 861,
            "end": 864
          },
          "start": 860,
          "end": 864
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 846,
      "end": 866
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 876,
        "end": 880
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
                "start": 884,
                "end": 885
              },
              "typeArguments": null,
              "start": 884,
              "end": 885
            },
            "start": 882,
            "end": 885
          },
          "start": 881,
          "end": 885
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 867,
      "end": 887
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 906,
        "end": 910
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
              "start": 914,
              "end": 917
            },
            "start": 912,
            "end": 917
          },
          "start": 911,
          "end": 917
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 919,
        "end": 922
      },
      "expression": false,
      "start": 897,
      "end": 922
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5b",
        "optional": false,
        "typeAnnotation": null,
        "start": 933,
        "end": 938
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
                "start": 942,
                "end": 943
              },
              "typeArguments": null,
              "start": 942,
              "end": 943
            },
            "start": 940,
            "end": 943
          },
          "start": 939,
          "end": 943
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 924,
      "end": 945
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5b",
        "optional": false,
        "typeAnnotation": null,
        "start": 955,
        "end": 960
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
                "start": 964,
                "end": 965
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 966,
                    "end": 972
                  }
                ],
                "start": 965,
                "end": 973
              },
              "start": 964,
              "end": 973
            },
            "start": 962,
            "end": 973
          },
          "start": 961,
          "end": 973
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 946,
      "end": 975
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5b",
        "optional": false,
        "typeAnnotation": null,
        "start": 994,
        "end": 999
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
              "start": 1003,
              "end": 1006
            },
            "start": 1001,
            "end": 1006
          },
          "start": 1000,
          "end": 1006
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1008,
        "end": 1011
      },
      "expression": false,
      "start": 985,
      "end": 1011
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1022,
        "end": 1027
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
                "start": 1031,
                "end": 1032
              },
              "typeArguments": null,
              "start": 1031,
              "end": 1032
            },
            "start": 1029,
            "end": 1032
          },
          "start": 1028,
          "end": 1032
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1013,
      "end": 1034
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1044,
        "end": 1049
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
                "name": "PA",
                "optional": false,
                "typeAnnotation": null,
                "start": 1053,
                "end": 1055
              },
              "typeArguments": null,
              "start": 1053,
              "end": 1055
            },
            "start": 1051,
            "end": 1055
          },
          "start": 1050,
          "end": 1055
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1035,
      "end": 1057
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1076,
        "end": 1081
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
              "start": 1085,
              "end": 1088
            },
            "start": 1083,
            "end": 1088
          },
          "start": 1082,
          "end": 1088
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1090,
        "end": 1093
      },
      "expression": false,
      "start": 1067,
      "end": 1093
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5d",
        "optional": false,
        "typeAnnotation": null,
        "start": 1104,
        "end": 1109
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
                "start": 1113,
                "end": 1114
              },
              "typeArguments": null,
              "start": 1113,
              "end": 1114
            },
            "start": 1111,
            "end": 1114
          },
          "start": 1110,
          "end": 1114
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1095,
      "end": 1116
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5d",
        "optional": false,
        "typeAnnotation": null,
        "start": 1126,
        "end": 1131
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
                "name": "PB",
                "optional": false,
                "typeAnnotation": null,
                "start": 1135,
                "end": 1137
              },
              "typeArguments": null,
              "start": 1135,
              "end": 1137
            },
            "start": 1133,
            "end": 1137
          },
          "start": 1132,
          "end": 1137
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1117,
      "end": 1139
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5d",
        "optional": false,
        "typeAnnotation": null,
        "start": 1158,
        "end": 1163
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
              "start": 1167,
              "end": 1170
            },
            "start": 1165,
            "end": 1170
          },
          "start": 1164,
          "end": 1170
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1172,
        "end": 1175
      },
      "expression": false,
      "start": 1149,
      "end": 1175
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1186,
        "end": 1190
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
                "start": 1194,
                "end": 1195
              },
              "typeArguments": null,
              "start": 1194,
              "end": 1195
            },
            "start": 1192,
            "end": 1195
          },
          "start": 1191,
          "end": 1195
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1177,
      "end": 1197
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1207,
        "end": 1211
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
                "start": 1215,
                "end": 1216
              },
              "typeArguments": null,
              "start": 1215,
              "end": 1216
            },
            "start": 1213,
            "end": 1216
          },
          "start": 1212,
          "end": 1216
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1198,
      "end": 1218
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1237,
        "end": 1241
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
              "start": 1245,
              "end": 1248
            },
            "start": 1243,
            "end": 1248
          },
          "start": 1242,
          "end": 1248
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1250,
        "end": 1253
      },
      "expression": false,
      "start": 1228,
      "end": 1253
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1264,
        "end": 1268
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
                "start": 1272,
                "end": 1273
              },
              "typeArguments": null,
              "start": 1272,
              "end": 1273
            },
            "start": 1270,
            "end": 1273
          },
          "start": 1269,
          "end": 1273
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1255,
      "end": 1275
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1285,
        "end": 1289
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
                "start": 1300,
                "end": 1301
              },
              "typeArguments": null,
              "start": 1293,
              "end": 1301
            },
            "start": 1291,
            "end": 1301
          },
          "start": 1290,
          "end": 1301
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1276,
      "end": 1303
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1322,
        "end": 1326
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
              "start": 1330,
              "end": 1333
            },
            "start": 1328,
            "end": 1333
          },
          "start": 1327,
          "end": 1333
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1335,
        "end": 1338
      },
      "expression": false,
      "start": 1313,
      "end": 1338
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1349,
        "end": 1353
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
                "start": 1357,
                "end": 1358
              },
              "typeArguments": null,
              "start": 1357,
              "end": 1358
            },
            "start": 1355,
            "end": 1358
          },
          "start": 1354,
          "end": 1358
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1340,
      "end": 1360
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1370,
        "end": 1374
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
                "start": 1378,
                "end": 1379
              },
              "typeArguments": null,
              "start": 1378,
              "end": 1379
            },
            "start": 1376,
            "end": 1379
          },
          "start": 1375,
          "end": 1379
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1361,
      "end": 1381
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1400,
        "end": 1404
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
              "start": 1408,
              "end": 1411
            },
            "start": 1406,
            "end": 1411
          },
          "start": 1405,
          "end": 1411
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1413,
        "end": 1416
      },
      "expression": false,
      "start": 1391,
      "end": 1416
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1427,
        "end": 1431
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
                "start": 1435,
                "end": 1436
              },
              "typeArguments": null,
              "start": 1435,
              "end": 1436
            },
            "start": 1433,
            "end": 1436
          },
          "start": 1432,
          "end": 1436
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1418,
      "end": 1438
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1448,
        "end": 1452
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
                "start": 1456,
                "end": 1457
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1458,
                    "end": 1464
                  }
                ],
                "start": 1457,
                "end": 1465
              },
              "start": 1456,
              "end": 1465
            },
            "start": 1454,
            "end": 1465
          },
          "start": 1453,
          "end": 1465
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1439,
      "end": 1467
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1486,
        "end": 1490
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
              "start": 1494,
              "end": 1497
            },
            "start": 1492,
            "end": 1497
          },
          "start": 1491,
          "end": 1497
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1499,
        "end": 1502
      },
      "expression": false,
      "start": 1477,
      "end": 1502
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1513,
        "end": 1518
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
                "start": 1522,
                "end": 1523
              },
              "typeArguments": null,
              "start": 1522,
              "end": 1523
            },
            "start": 1520,
            "end": 1523
          },
          "start": 1519,
          "end": 1523
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1504,
      "end": 1525
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1535,
        "end": 1540
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
                "start": 1551,
                "end": 1552
              },
              "typeArguments": null,
              "start": 1544,
              "end": 1552
            },
            "start": 1542,
            "end": 1552
          },
          "start": 1541,
          "end": 1552
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1526,
      "end": 1554
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1573,
        "end": 1578
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
              "start": 1582,
              "end": 1585
            },
            "start": 1580,
            "end": 1585
          },
          "start": 1579,
          "end": 1585
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1587,
        "end": 1590
      },
      "expression": false,
      "start": 1564,
      "end": 1590
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1601,
        "end": 1606
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
                "start": 1610,
                "end": 1611
              },
              "typeArguments": null,
              "start": 1610,
              "end": 1611
            },
            "start": 1608,
            "end": 1611
          },
          "start": 1607,
          "end": 1611
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1592,
      "end": 1613
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1623,
        "end": 1628
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
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1639,
                "end": 1640
              },
              "typeArguments": null,
              "start": 1632,
              "end": 1640
            },
            "start": 1630,
            "end": 1640
          },
          "start": 1629,
          "end": 1640
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1614,
      "end": 1642
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1661,
        "end": 1666
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
              "start": 1670,
              "end": 1673
            },
            "start": 1668,
            "end": 1673
          },
          "start": 1667,
          "end": 1673
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1675,
        "end": 1678
      },
      "expression": false,
      "start": 1652,
      "end": 1678
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1689,
        "end": 1695
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
                "start": 1699,
                "end": 1700
              },
              "typeArguments": null,
              "start": 1699,
              "end": 1700
            },
            "start": 1697,
            "end": 1700
          },
          "start": 1696,
          "end": 1700
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1680,
      "end": 1702
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1712,
        "end": 1718
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
                "name": "PA",
                "optional": false,
                "typeAnnotation": null,
                "start": 1722,
                "end": 1724
              },
              "typeArguments": null,
              "start": 1722,
              "end": 1724
            },
            "start": 1720,
            "end": 1724
          },
          "start": 1719,
          "end": 1724
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1703,
      "end": 1726
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1745,
        "end": 1751
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
              "start": 1755,
              "end": 1758
            },
            "start": 1753,
            "end": 1758
          },
          "start": 1752,
          "end": 1758
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1760,
        "end": 1763
      },
      "expression": false,
      "start": 1736,
      "end": 1763
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1774,
        "end": 1780
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
                "start": 1784,
                "end": 1785
              },
              "typeArguments": null,
              "start": 1784,
              "end": 1785
            },
            "start": 1782,
            "end": 1785
          },
          "start": 1781,
          "end": 1785
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1765,
      "end": 1787
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1797,
        "end": 1803
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
                "name": "PB",
                "optional": false,
                "typeAnnotation": null,
                "start": 1807,
                "end": 1809
              },
              "typeArguments": null,
              "start": 1807,
              "end": 1809
            },
            "start": 1805,
            "end": 1809
          },
          "start": 1804,
          "end": 1809
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1788,
      "end": 1811
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1830,
        "end": 1836
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
              "start": 1840,
              "end": 1843
            },
            "start": 1838,
            "end": 1843
          },
          "start": 1837,
          "end": 1843
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1845,
        "end": 1848
      },
      "expression": false,
      "start": 1821,
      "end": 1848
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1859,
        "end": 1864
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
                "start": 1868,
                "end": 1869
              },
              "typeArguments": null,
              "start": 1868,
              "end": 1869
            },
            "start": 1866,
            "end": 1869
          },
          "start": 1865,
          "end": 1869
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1850,
      "end": 1871
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1881,
        "end": 1886
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
                "start": 1890,
                "end": 1891
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1892,
                    "end": 1898
                  }
                ],
                "start": 1891,
                "end": 1899
              },
              "start": 1890,
              "end": 1899
            },
            "start": 1888,
            "end": 1899
          },
          "start": 1887,
          "end": 1899
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1872,
      "end": 1901
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1920,
        "end": 1925
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
              "start": 1929,
              "end": 1932
            },
            "start": 1927,
            "end": 1932
          },
          "start": 1926,
          "end": 1932
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1934,
        "end": 1937
      },
      "expression": false,
      "start": 1911,
      "end": 1937
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 1948,
        "end": 1953
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
                "start": 1957,
                "end": 1958
              },
              "typeArguments": null,
              "start": 1957,
              "end": 1958
            },
            "start": 1955,
            "end": 1958
          },
          "start": 1954,
          "end": 1958
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1939,
      "end": 1960
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 1970,
        "end": 1975
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
                "start": 1986,
                "end": 1987
              },
              "typeArguments": null,
              "start": 1979,
              "end": 1987
            },
            "start": 1977,
            "end": 1987
          },
          "start": 1976,
          "end": 1987
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1961,
      "end": 1989
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 2008,
        "end": 2013
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
              "start": 2017,
              "end": 2020
            },
            "start": 2015,
            "end": 2020
          },
          "start": 2014,
          "end": 2020
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2022,
        "end": 2025
      },
      "expression": false,
      "start": 1999,
      "end": 2025
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 2036,
        "end": 2041
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
                "start": 2045,
                "end": 2046
              },
              "typeArguments": null,
              "start": 2045,
              "end": 2046
            },
            "start": 2043,
            "end": 2046
          },
          "start": 2042,
          "end": 2046
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2027,
      "end": 2048
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 2058,
        "end": 2063
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
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 2074,
                "end": 2075
              },
              "typeArguments": null,
              "start": 2067,
              "end": 2075
            },
            "start": 2065,
            "end": 2075
          },
          "start": 2064,
          "end": 2075
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2049,
      "end": 2077
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 2096,
        "end": 2101
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
              "start": 2105,
              "end": 2108
            },
            "start": 2103,
            "end": 2108
          },
          "start": 2102,
          "end": 2108
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2110,
        "end": 2113
      },
      "expression": false,
      "start": 2087,
      "end": 2113
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null,
        "start": 2124,
        "end": 2129
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
                "start": 2133,
                "end": 2134
              },
              "typeArguments": null,
              "start": 2133,
              "end": 2134
            },
            "start": 2131,
            "end": 2134
          },
          "start": 2130,
          "end": 2134
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2115,
      "end": 2136
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null,
        "start": 2146,
        "end": 2151
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
                "name": "PA",
                "optional": false,
                "typeAnnotation": null,
                "start": 2155,
                "end": 2157
              },
              "typeArguments": null,
              "start": 2155,
              "end": 2157
            },
            "start": 2153,
            "end": 2157
          },
          "start": 2152,
          "end": 2157
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2137,
      "end": 2159
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null,
        "start": 2178,
        "end": 2183
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
              "start": 2187,
              "end": 2190
            },
            "start": 2185,
            "end": 2190
          },
          "start": 2184,
          "end": 2190
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2192,
        "end": 2195
      },
      "expression": false,
      "start": 2169,
      "end": 2195
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo16",
        "optional": false,
        "typeAnnotation": null,
        "start": 2206,
        "end": 2211
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
                "start": 2215,
                "end": 2216
              },
              "typeArguments": null,
              "start": 2215,
              "end": 2216
            },
            "start": 2213,
            "end": 2216
          },
          "start": 2212,
          "end": 2216
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2197,
      "end": 2218
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo16",
        "optional": false,
        "typeAnnotation": null,
        "start": 2228,
        "end": 2233
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
                "name": "PB",
                "optional": false,
                "typeAnnotation": null,
                "start": 2237,
                "end": 2239
              },
              "typeArguments": null,
              "start": 2237,
              "end": 2239
            },
            "start": 2235,
            "end": 2239
          },
          "start": 2234,
          "end": 2239
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2219,
      "end": 2241
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo16",
        "optional": false,
        "typeAnnotation": null,
        "start": 2260,
        "end": 2265
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
              "start": 2269,
              "end": 2272
            },
            "start": 2267,
            "end": 2272
          },
          "start": 2266,
          "end": 2272
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2274,
        "end": 2277
      },
      "expression": false,
      "start": 2251,
      "end": 2277
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 44,
  "end": 2278
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
    "type": "Punctuator",
    "value": "[",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 62,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 68,
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
    "type": "Punctuator",
    "value": "}",
    "start": 79,
    "end": 80
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 82,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Identifier",
    "value": "number",
    "start": 100,
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
    "type": "Identifier",
    "value": "string",
    "start": 109,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 117,
    "end": 118
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 120,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "number",
    "start": 141,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 153,
    "end": 154
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 156,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 174,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "number",
    "start": 178,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 185,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 187,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 195,
    "end": 196
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 198,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "PA",
    "start": 204,
    "end": 206
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 207,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "A",
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
    "value": "}",
    "start": 219,
    "end": 220
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 222,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "PB",
    "start": 228,
    "end": 230
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 231,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "B",
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
    "value": "}",
    "start": 243,
    "end": 244
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 246,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 259,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 260,
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
    "value": "number",
    "start": 263,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 270,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 272,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 280,
    "end": 281
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 282,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "type": "Punctuator",
    "value": "[",
    "start": 291,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 293,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 295,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 304,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "type": "Numeric",
    "value": "0",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 319,
    "end": 320
  },
  {
    "type": "String",
    "value": "''",
    "start": 321,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 325,
    "end": 326
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
    "value": "A",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "function",
    "start": 349,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 358,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 362,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 364,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 368,
    "end": 369
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 379,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 388,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 392,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 394,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 396,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 403,
    "end": 404
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 406,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "foo1b",
    "start": 415,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 420,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "B",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 426,
    "end": 427
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 428,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "foo1b",
    "start": 437,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 442,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 443,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 444,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "function",
    "start": 459,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "foo1b",
    "start": 468,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 473,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 475,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 477,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 482,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 484,
    "end": 485
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 487,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "foo1c",
    "start": 496,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 501,
    "end": 502
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 502,
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
    "value": "C",
    "start": 505,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 506,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 507,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 513,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 514,
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
    "value": "function",
    "start": 517,
    "end": 525
  },
  {
    "type": "Identifier",
    "value": "foo1c",
    "start": 526,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 531,
    "end": 532
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "C",
    "start": 535,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 536,
    "end": 537
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 537,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 543,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 544,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 545,
    "end": 546
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 556,
    "end": 564
  },
  {
    "type": "Identifier",
    "value": "foo1c",
    "start": 565,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 570,
    "end": 571
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 571,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 572,
    "end": 573
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 574,
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
    "start": 581,
    "end": 582
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
    "value": "I",
    "start": 601,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 602,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 603,
    "end": 604
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 605,
    "end": 613
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 614,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 618,
    "end": 619
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "I",
    "start": 622,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 623,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 624,
    "end": 625
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 635,
    "end": 643
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 644,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 648,
    "end": 649
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 649,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 650,
    "end": 651
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 652,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 655,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 657,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 659,
    "end": 660
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 662,
    "end": 670
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 671,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 675,
    "end": 676
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 676,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 677,
    "end": 678
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 679,
    "end": 685
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 686,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "function",
    "start": 690,
    "end": 698
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 699,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 703,
    "end": 704
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 704,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 705,
    "end": 706
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 707,
    "end": 713
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 714,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "function",
    "start": 727,
    "end": 735
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 736,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 740,
    "end": 741
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 741,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 742,
    "end": 743
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 744,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 747,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 749,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 751,
    "end": 752
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 754,
    "end": 762
  },
  {
    "type": "Identifier",
    "value": "foo4",
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
    "type": "Keyword",
    "value": "typeof",
    "start": 771,
    "end": 777
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "value": ";",
    "start": 780,
    "end": 781
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 782,
    "end": 790
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 791,
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
    "type": "Keyword",
    "value": "typeof",
    "start": 799,
    "end": 805
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 806,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "function",
    "start": 819,
    "end": 827
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 828,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 832,
    "end": 833
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 833,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 834,
    "end": 835
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 836,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 839,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 841,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 843,
    "end": 844
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 846,
    "end": 854
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 855,
    "end": 859
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 859,
    "end": 860
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 860,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 861,
    "end": 862
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 863,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 864,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 865,
    "end": 866
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 867,
    "end": 875
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 876,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 880,
    "end": 881
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 881,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 882,
    "end": 883
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 884,
    "end": 885
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 885,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 886,
    "end": 887
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 897,
    "end": 905
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 906,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 910,
    "end": 911
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 911,
    "end": 912
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 912,
    "end": 913
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 914,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 917,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 919,
    "end": 920
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 921,
    "end": 922
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 924,
    "end": 932
  },
  {
    "type": "Identifier",
    "value": "foo5b",
    "start": 933,
    "end": 938
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 938,
    "end": 939
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 939,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 940,
    "end": 941
  },
  {
    "type": "Identifier",
    "value": "A",
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
    "value": ";",
    "start": 944,
    "end": 945
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 946,
    "end": 954
  },
  {
    "type": "Identifier",
    "value": "foo5b",
    "start": 955,
    "end": 960
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 960,
    "end": 961
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 961,
    "end": 962
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 962,
    "end": 963
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 964,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 965,
    "end": 966
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 966,
    "end": 972
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 972,
    "end": 973
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 973,
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
    "value": "function",
    "start": 985,
    "end": 993
  },
  {
    "type": "Identifier",
    "value": "foo5b",
    "start": 994,
    "end": 999
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1001,
    "end": 1002
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1003,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1013,
    "end": 1021
  },
  {
    "type": "Identifier",
    "value": "foo5c",
    "start": 1022,
    "end": 1027
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1028,
    "end": 1029
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1035,
    "end": 1043
  },
  {
    "type": "Identifier",
    "value": "foo5c",
    "start": 1044,
    "end": 1049
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Identifier",
    "value": "PA",
    "start": 1053,
    "end": 1055
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "function",
    "start": 1067,
    "end": 1075
  },
  {
    "type": "Identifier",
    "value": "foo5c",
    "start": 1076,
    "end": 1081
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1082,
    "end": 1083
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1083,
    "end": 1084
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1085,
    "end": 1088
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1088,
    "end": 1089
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1092,
    "end": 1093
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1095,
    "end": 1103
  },
  {
    "type": "Identifier",
    "value": "foo5d",
    "start": 1104,
    "end": 1109
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1110,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1113,
    "end": 1114
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1115,
    "end": 1116
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1117,
    "end": 1125
  },
  {
    "type": "Identifier",
    "value": "foo5d",
    "start": 1126,
    "end": 1131
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1132,
    "end": 1133
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1133,
    "end": 1134
  },
  {
    "type": "Identifier",
    "value": "PB",
    "start": 1135,
    "end": 1137
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1137,
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
    "value": "function",
    "start": 1149,
    "end": 1157
  },
  {
    "type": "Identifier",
    "value": "foo5d",
    "start": 1158,
    "end": 1163
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1163,
    "end": 1164
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1164,
    "end": 1165
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1165,
    "end": 1166
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1167,
    "end": 1170
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1174,
    "end": 1175
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1177,
    "end": 1185
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 1186,
    "end": 1190
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1190,
    "end": 1191
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1191,
    "end": 1192
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1192,
    "end": 1193
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1194,
    "end": 1195
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1195,
    "end": 1196
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1196,
    "end": 1197
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1198,
    "end": 1206
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 1207,
    "end": 1211
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1212,
    "end": 1213
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1216,
    "end": 1217
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1217,
    "end": 1218
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1228,
    "end": 1236
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 1237,
    "end": 1241
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1241,
    "end": 1242
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1242,
    "end": 1243
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1245,
    "end": 1248
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Punctuator",
    "value": "}",
    "start": 1252,
    "end": 1253
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1255,
    "end": 1263
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 1264,
    "end": 1268
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1268,
    "end": 1269
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "A",
    "start": 1272,
    "end": 1273
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1273,
    "end": 1274
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1274,
    "end": 1275
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1276,
    "end": 1284
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 1285,
    "end": 1289
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1289,
    "end": 1290
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1290,
    "end": 1291
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1291,
    "end": 1292
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1293,
    "end": 1299
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1300,
    "end": 1301
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1301,
    "end": 1302
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1302,
    "end": 1303
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1313,
    "end": 1321
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 1322,
    "end": 1326
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1326,
    "end": 1327
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1327,
    "end": 1328
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1328,
    "end": 1329
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1330,
    "end": 1333
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1333,
    "end": 1334
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1335,
    "end": 1336
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1337,
    "end": 1338
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1340,
    "end": 1348
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 1349,
    "end": 1353
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1353,
    "end": 1354
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1354,
    "end": 1355
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1355,
    "end": 1356
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1357,
    "end": 1358
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1358,
    "end": 1359
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1359,
    "end": 1360
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1361,
    "end": 1369
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 1370,
    "end": 1374
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1374,
    "end": 1375
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1375,
    "end": 1376
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1376,
    "end": 1377
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1378,
    "end": 1379
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1379,
    "end": 1380
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1380,
    "end": 1381
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1391,
    "end": 1399
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 1400,
    "end": 1404
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1404,
    "end": 1405
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1405,
    "end": 1406
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1406,
    "end": 1407
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1408,
    "end": 1411
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1411,
    "end": 1412
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1413,
    "end": 1414
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1415,
    "end": 1416
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1418,
    "end": 1426
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 1427,
    "end": 1431
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1431,
    "end": 1432
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1432,
    "end": 1433
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1433,
    "end": 1434
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1435,
    "end": 1436
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1436,
    "end": 1437
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1437,
    "end": 1438
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1439,
    "end": 1447
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 1448,
    "end": 1452
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1452,
    "end": 1453
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1453,
    "end": 1454
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1454,
    "end": 1455
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1456,
    "end": 1457
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1457,
    "end": 1458
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1458,
    "end": 1464
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1464,
    "end": 1465
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1465,
    "end": 1466
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1466,
    "end": 1467
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1477,
    "end": 1485
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 1486,
    "end": 1490
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1490,
    "end": 1491
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1491,
    "end": 1492
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1492,
    "end": 1493
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1494,
    "end": 1497
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1497,
    "end": 1498
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1499,
    "end": 1500
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1501,
    "end": 1502
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1504,
    "end": 1512
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 1513,
    "end": 1518
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1518,
    "end": 1519
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "B",
    "start": 1522,
    "end": 1523
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1523,
    "end": 1524
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1524,
    "end": 1525
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1526,
    "end": 1534
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 1535,
    "end": 1540
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1540,
    "end": 1541
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1541,
    "end": 1542
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1542,
    "end": 1543
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1544,
    "end": 1550
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1551,
    "end": 1552
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1552,
    "end": 1553
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1553,
    "end": 1554
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1564,
    "end": 1572
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 1573,
    "end": 1578
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1578,
    "end": 1579
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1579,
    "end": 1580
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1580,
    "end": 1581
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1582,
    "end": 1585
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1585,
    "end": 1586
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1587,
    "end": 1588
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1589,
    "end": 1590
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1592,
    "end": 1600
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 1601,
    "end": 1606
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1606,
    "end": 1607
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1607,
    "end": 1608
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1608,
    "end": 1609
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1610,
    "end": 1611
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1611,
    "end": 1612
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1612,
    "end": 1613
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1614,
    "end": 1622
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 1623,
    "end": 1628
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1628,
    "end": 1629
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1629,
    "end": 1630
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1630,
    "end": 1631
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1632,
    "end": 1638
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1639,
    "end": 1640
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1640,
    "end": 1641
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1641,
    "end": 1642
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1652,
    "end": 1660
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 1661,
    "end": 1666
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1666,
    "end": 1667
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1667,
    "end": 1668
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1668,
    "end": 1669
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1670,
    "end": 1673
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1673,
    "end": 1674
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1675,
    "end": 1676
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1677,
    "end": 1678
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1680,
    "end": 1688
  },
  {
    "type": "Identifier",
    "value": "foo11b",
    "start": 1689,
    "end": 1695
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1695,
    "end": 1696
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1696,
    "end": 1697
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1697,
    "end": 1698
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1699,
    "end": 1700
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1700,
    "end": 1701
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1701,
    "end": 1702
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1703,
    "end": 1711
  },
  {
    "type": "Identifier",
    "value": "foo11b",
    "start": 1712,
    "end": 1718
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1718,
    "end": 1719
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "PA",
    "start": 1722,
    "end": 1724
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1724,
    "end": 1725
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1725,
    "end": 1726
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1736,
    "end": 1744
  },
  {
    "type": "Identifier",
    "value": "foo11b",
    "start": 1745,
    "end": 1751
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1751,
    "end": 1752
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1752,
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
    "value": "any",
    "start": 1755,
    "end": 1758
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1758,
    "end": 1759
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1760,
    "end": 1761
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1762,
    "end": 1763
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1765,
    "end": 1773
  },
  {
    "type": "Identifier",
    "value": "foo11c",
    "start": 1774,
    "end": 1780
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1780,
    "end": 1781
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1781,
    "end": 1782
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1782,
    "end": 1783
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1784,
    "end": 1785
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1785,
    "end": 1786
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1786,
    "end": 1787
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1788,
    "end": 1796
  },
  {
    "type": "Identifier",
    "value": "foo11c",
    "start": 1797,
    "end": 1803
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1803,
    "end": 1804
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1804,
    "end": 1805
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1805,
    "end": 1806
  },
  {
    "type": "Identifier",
    "value": "PB",
    "start": 1807,
    "end": 1809
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1809,
    "end": 1810
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1810,
    "end": 1811
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1821,
    "end": 1829
  },
  {
    "type": "Identifier",
    "value": "foo11c",
    "start": 1830,
    "end": 1836
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1836,
    "end": 1837
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1837,
    "end": 1838
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1838,
    "end": 1839
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1840,
    "end": 1843
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1843,
    "end": 1844
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1845,
    "end": 1846
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1847,
    "end": 1848
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1850,
    "end": 1858
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 1859,
    "end": 1864
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1864,
    "end": 1865
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1865,
    "end": 1866
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1866,
    "end": 1867
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1868,
    "end": 1869
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1869,
    "end": 1870
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1870,
    "end": 1871
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1872,
    "end": 1880
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 1881,
    "end": 1886
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1886,
    "end": 1887
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1887,
    "end": 1888
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1888,
    "end": 1889
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1890,
    "end": 1891
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1891,
    "end": 1892
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1892,
    "end": 1898
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1898,
    "end": 1899
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1899,
    "end": 1900
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1900,
    "end": 1901
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1911,
    "end": 1919
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 1920,
    "end": 1925
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1925,
    "end": 1926
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1926,
    "end": 1927
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1927,
    "end": 1928
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1929,
    "end": 1932
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1932,
    "end": 1933
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1934,
    "end": 1935
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1936,
    "end": 1937
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1939,
    "end": 1947
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 1948,
    "end": 1953
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1953,
    "end": 1954
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1954,
    "end": 1955
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1955,
    "end": 1956
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1957,
    "end": 1958
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1958,
    "end": 1959
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1959,
    "end": 1960
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1961,
    "end": 1969
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 1970,
    "end": 1975
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1975,
    "end": 1976
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1976,
    "end": 1977
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1977,
    "end": 1978
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1979,
    "end": 1985
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1986,
    "end": 1987
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1987,
    "end": 1988
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1988,
    "end": 1989
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1999,
    "end": 2007
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 2008,
    "end": 2013
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2013,
    "end": 2014
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2014,
    "end": 2015
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2015,
    "end": 2016
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2017,
    "end": 2020
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2020,
    "end": 2021
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2022,
    "end": 2023
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2024,
    "end": 2025
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2027,
    "end": 2035
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 2036,
    "end": 2041
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2041,
    "end": 2042
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2042,
    "end": 2043
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2043,
    "end": 2044
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 2045,
    "end": 2046
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2046,
    "end": 2047
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2047,
    "end": 2048
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2049,
    "end": 2057
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 2058,
    "end": 2063
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2063,
    "end": 2064
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2064,
    "end": 2065
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2065,
    "end": 2066
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2067,
    "end": 2073
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2074,
    "end": 2075
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2075,
    "end": 2076
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2076,
    "end": 2077
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2087,
    "end": 2095
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 2096,
    "end": 2101
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2101,
    "end": 2102
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2102,
    "end": 2103
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2103,
    "end": 2104
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2105,
    "end": 2108
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2108,
    "end": 2109
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2110,
    "end": 2111
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2112,
    "end": 2113
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2115,
    "end": 2123
  },
  {
    "type": "Identifier",
    "value": "foo15",
    "start": 2124,
    "end": 2129
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2129,
    "end": 2130
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2130,
    "end": 2131
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2131,
    "end": 2132
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 2133,
    "end": 2134
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2134,
    "end": 2135
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2135,
    "end": 2136
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2137,
    "end": 2145
  },
  {
    "type": "Identifier",
    "value": "foo15",
    "start": 2146,
    "end": 2151
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2151,
    "end": 2152
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2152,
    "end": 2153
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2153,
    "end": 2154
  },
  {
    "type": "Identifier",
    "value": "PA",
    "start": 2155,
    "end": 2157
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2157,
    "end": 2158
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2158,
    "end": 2159
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2169,
    "end": 2177
  },
  {
    "type": "Identifier",
    "value": "foo15",
    "start": 2178,
    "end": 2183
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2183,
    "end": 2184
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2184,
    "end": 2185
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2185,
    "end": 2186
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2187,
    "end": 2190
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2190,
    "end": 2191
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2192,
    "end": 2193
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2194,
    "end": 2195
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2197,
    "end": 2205
  },
  {
    "type": "Identifier",
    "value": "foo16",
    "start": 2206,
    "end": 2211
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2211,
    "end": 2212
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2212,
    "end": 2213
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2213,
    "end": 2214
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 2215,
    "end": 2216
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2216,
    "end": 2217
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2217,
    "end": 2218
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2219,
    "end": 2227
  },
  {
    "type": "Identifier",
    "value": "foo16",
    "start": 2228,
    "end": 2233
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2233,
    "end": 2234
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2234,
    "end": 2235
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2235,
    "end": 2236
  },
  {
    "type": "Identifier",
    "value": "PB",
    "start": 2237,
    "end": 2239
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2239,
    "end": 2240
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2240,
    "end": 2241
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2251,
    "end": 2259
  },
  {
    "type": "Identifier",
    "value": "foo16",
    "start": 2260,
    "end": 2265
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2265,
    "end": 2266
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2266,
    "end": 2267
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2267,
    "end": 2268
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2269,
    "end": 2272
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2272,
    "end": 2273
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2274,
    "end": 2275
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2276,
    "end": 2277
  }
]
```
