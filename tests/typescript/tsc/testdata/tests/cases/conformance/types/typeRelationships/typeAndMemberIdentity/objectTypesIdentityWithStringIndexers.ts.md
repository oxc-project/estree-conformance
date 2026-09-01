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
                    "type": "TSStringKeyword",
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
                    "type": "TSStringKeyword",
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
                    "type": "TSStringKeyword",
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
                    "type": "TSStringKeyword",
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
                            "type": "TSStringKeyword",
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
                            "type": "TSStringKeyword",
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 318,
                  "end": 321
                },
                "value": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 323,
                  "end": 325
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 318,
                "end": 325
              }
            ],
            "start": 316,
            "end": 327
          },
          "definite": false,
          "start": 286,
          "end": 327
        }
      ],
      "declare": false,
      "start": 282,
      "end": 328
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 339,
        "end": 343
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
                "start": 347,
                "end": 348
              },
              "typeArguments": null,
              "start": 347,
              "end": 348
            },
            "start": 345,
            "end": 348
          },
          "start": 344,
          "end": 348
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 330,
      "end": 350
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 360,
        "end": 364
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
                "start": 368,
                "end": 369
              },
              "typeArguments": null,
              "start": 368,
              "end": 369
            },
            "start": 366,
            "end": 369
          },
          "start": 365,
          "end": 369
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 351,
      "end": 371
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 390,
        "end": 394
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
              "start": 398,
              "end": 401
            },
            "start": 396,
            "end": 401
          },
          "start": 395,
          "end": 401
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 403,
        "end": 406
      },
      "expression": false,
      "start": 381,
      "end": 406
    },
    {
      "type": "TSDeclareFunction",
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 426,
                "end": 427
              },
              "typeArguments": null,
              "start": 426,
              "end": 427
            },
            "start": 424,
            "end": 427
          },
          "start": 423,
          "end": 427
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 408,
      "end": 429
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null,
        "start": 439,
        "end": 444
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
                "start": 448,
                "end": 449
              },
              "typeArguments": null,
              "start": 448,
              "end": 449
            },
            "start": 446,
            "end": 449
          },
          "start": 445,
          "end": 449
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 430,
      "end": 451
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null,
        "start": 470,
        "end": 475
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
              "start": 479,
              "end": 482
            },
            "start": 477,
            "end": 482
          },
          "start": 476,
          "end": 482
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 484,
        "end": 487
      },
      "expression": false,
      "start": 461,
      "end": 487
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null,
        "start": 498,
        "end": 503
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
                "start": 507,
                "end": 508
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 509,
                    "end": 515
                  }
                ],
                "start": 508,
                "end": 516
              },
              "start": 507,
              "end": 516
            },
            "start": 505,
            "end": 516
          },
          "start": 504,
          "end": 516
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 489,
      "end": 518
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null,
        "start": 528,
        "end": 533
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
                "start": 537,
                "end": 538
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 539,
                    "end": 545
                  }
                ],
                "start": 538,
                "end": 546
              },
              "start": 537,
              "end": 546
            },
            "start": 535,
            "end": 546
          },
          "start": 534,
          "end": 546
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 519,
      "end": 548
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null,
        "start": 567,
        "end": 572
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
              "start": 576,
              "end": 579
            },
            "start": 574,
            "end": 579
          },
          "start": 573,
          "end": 579
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 581,
        "end": 584
      },
      "expression": false,
      "start": 558,
      "end": 584
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 595,
        "end": 599
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
                "start": 603,
                "end": 604
              },
              "typeArguments": null,
              "start": 603,
              "end": 604
            },
            "start": 601,
            "end": 604
          },
          "start": 600,
          "end": 604
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 586,
      "end": 606
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 616,
        "end": 620
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
                "start": 624,
                "end": 625
              },
              "typeArguments": null,
              "start": 624,
              "end": 625
            },
            "start": 622,
            "end": 625
          },
          "start": 621,
          "end": 625
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 607,
      "end": 627
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 646,
        "end": 650
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
              "start": 654,
              "end": 657
            },
            "start": 652,
            "end": 657
          },
          "start": 651,
          "end": 657
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 659,
        "end": 662
      },
      "expression": false,
      "start": 637,
      "end": 662
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 673,
        "end": 677
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
                "start": 688,
                "end": 689
              },
              "typeArguments": null,
              "start": 681,
              "end": 689
            },
            "start": 679,
            "end": 689
          },
          "start": 678,
          "end": 689
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 664,
      "end": 691
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 701,
        "end": 705
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
                "start": 716,
                "end": 717
              },
              "typeArguments": null,
              "start": 709,
              "end": 717
            },
            "start": 707,
            "end": 717
          },
          "start": 706,
          "end": 717
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 692,
      "end": 719
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 738,
        "end": 742
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
              "start": 746,
              "end": 749
            },
            "start": 744,
            "end": 749
          },
          "start": 743,
          "end": 749
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 751,
        "end": 754
      },
      "expression": false,
      "start": 729,
      "end": 754
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 765,
        "end": 769
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
                "start": 780,
                "end": 781
              },
              "typeArguments": null,
              "start": 773,
              "end": 781
            },
            "start": 771,
            "end": 781
          },
          "start": 770,
          "end": 781
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 756,
      "end": 783
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 793,
        "end": 797
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
                "start": 808,
                "end": 809
              },
              "typeArguments": null,
              "start": 801,
              "end": 809
            },
            "start": 799,
            "end": 809
          },
          "start": 798,
          "end": 809
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 784,
      "end": 811
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 830,
        "end": 834
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
              "start": 838,
              "end": 841
            },
            "start": 836,
            "end": 841
          },
          "start": 835,
          "end": 841
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 843,
        "end": 846
      },
      "expression": false,
      "start": 821,
      "end": 846
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 857,
        "end": 861
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
                "start": 865,
                "end": 866
              },
              "typeArguments": null,
              "start": 865,
              "end": 866
            },
            "start": 863,
            "end": 866
          },
          "start": 862,
          "end": 866
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 848,
      "end": 868
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 878,
        "end": 882
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
                "start": 886,
                "end": 887
              },
              "typeArguments": null,
              "start": 886,
              "end": 887
            },
            "start": 884,
            "end": 887
          },
          "start": 883,
          "end": 887
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 869,
      "end": 889
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 908,
        "end": 912
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
              "start": 916,
              "end": 919
            },
            "start": 914,
            "end": 919
          },
          "start": 913,
          "end": 919
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 921,
        "end": 924
      },
      "expression": false,
      "start": 899,
      "end": 924
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5b",
        "optional": false,
        "typeAnnotation": null,
        "start": 935,
        "end": 940
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
                "start": 944,
                "end": 945
              },
              "typeArguments": null,
              "start": 944,
              "end": 945
            },
            "start": 942,
            "end": 945
          },
          "start": 941,
          "end": 945
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 926,
      "end": 947
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5b",
        "optional": false,
        "typeAnnotation": null,
        "start": 957,
        "end": 962
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
                "start": 966,
                "end": 967
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 968,
                    "end": 974
                  }
                ],
                "start": 967,
                "end": 975
              },
              "start": 966,
              "end": 975
            },
            "start": 964,
            "end": 975
          },
          "start": 963,
          "end": 975
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 948,
      "end": 977
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5b",
        "optional": false,
        "typeAnnotation": null,
        "start": 996,
        "end": 1001
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
              "start": 1005,
              "end": 1008
            },
            "start": 1003,
            "end": 1008
          },
          "start": 1002,
          "end": 1008
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1010,
        "end": 1013
      },
      "expression": false,
      "start": 987,
      "end": 1013
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1024,
        "end": 1029
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
                "start": 1033,
                "end": 1034
              },
              "typeArguments": null,
              "start": 1033,
              "end": 1034
            },
            "start": 1031,
            "end": 1034
          },
          "start": 1030,
          "end": 1034
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1015,
      "end": 1036
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1046,
        "end": 1051
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
                "start": 1055,
                "end": 1057
              },
              "typeArguments": null,
              "start": 1055,
              "end": 1057
            },
            "start": 1053,
            "end": 1057
          },
          "start": 1052,
          "end": 1057
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1037,
      "end": 1059
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1078,
        "end": 1083
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
              "start": 1087,
              "end": 1090
            },
            "start": 1085,
            "end": 1090
          },
          "start": 1084,
          "end": 1090
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1092,
        "end": 1095
      },
      "expression": false,
      "start": 1069,
      "end": 1095
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5d",
        "optional": false,
        "typeAnnotation": null,
        "start": 1106,
        "end": 1111
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
                "start": 1115,
                "end": 1116
              },
              "typeArguments": null,
              "start": 1115,
              "end": 1116
            },
            "start": 1113,
            "end": 1116
          },
          "start": 1112,
          "end": 1116
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1097,
      "end": 1118
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5d",
        "optional": false,
        "typeAnnotation": null,
        "start": 1128,
        "end": 1133
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
                "start": 1137,
                "end": 1139
              },
              "typeArguments": null,
              "start": 1137,
              "end": 1139
            },
            "start": 1135,
            "end": 1139
          },
          "start": 1134,
          "end": 1139
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1119,
      "end": 1141
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5d",
        "optional": false,
        "typeAnnotation": null,
        "start": 1160,
        "end": 1165
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
              "start": 1169,
              "end": 1172
            },
            "start": 1167,
            "end": 1172
          },
          "start": 1166,
          "end": 1172
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1174,
        "end": 1177
      },
      "expression": false,
      "start": 1151,
      "end": 1177
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1188,
        "end": 1192
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
                "start": 1196,
                "end": 1197
              },
              "typeArguments": null,
              "start": 1196,
              "end": 1197
            },
            "start": 1194,
            "end": 1197
          },
          "start": 1193,
          "end": 1197
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1179,
      "end": 1199
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1209,
        "end": 1213
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
                "start": 1217,
                "end": 1218
              },
              "typeArguments": null,
              "start": 1217,
              "end": 1218
            },
            "start": 1215,
            "end": 1218
          },
          "start": 1214,
          "end": 1218
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1200,
      "end": 1220
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1239,
        "end": 1243
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
              "start": 1247,
              "end": 1250
            },
            "start": 1245,
            "end": 1250
          },
          "start": 1244,
          "end": 1250
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1252,
        "end": 1255
      },
      "expression": false,
      "start": 1230,
      "end": 1255
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1266,
        "end": 1270
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
                "start": 1274,
                "end": 1275
              },
              "typeArguments": null,
              "start": 1274,
              "end": 1275
            },
            "start": 1272,
            "end": 1275
          },
          "start": 1271,
          "end": 1275
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1257,
      "end": 1277
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1287,
        "end": 1291
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
                "start": 1302,
                "end": 1303
              },
              "typeArguments": null,
              "start": 1295,
              "end": 1303
            },
            "start": 1293,
            "end": 1303
          },
          "start": 1292,
          "end": 1303
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1278,
      "end": 1305
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1324,
        "end": 1328
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
              "start": 1332,
              "end": 1335
            },
            "start": 1330,
            "end": 1335
          },
          "start": 1329,
          "end": 1335
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1337,
        "end": 1340
      },
      "expression": false,
      "start": 1315,
      "end": 1340
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1351,
        "end": 1355
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
                "start": 1359,
                "end": 1360
              },
              "typeArguments": null,
              "start": 1359,
              "end": 1360
            },
            "start": 1357,
            "end": 1360
          },
          "start": 1356,
          "end": 1360
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1342,
      "end": 1362
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1372,
        "end": 1376
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
                "start": 1380,
                "end": 1381
              },
              "typeArguments": null,
              "start": 1380,
              "end": 1381
            },
            "start": 1378,
            "end": 1381
          },
          "start": 1377,
          "end": 1381
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1363,
      "end": 1383
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1402,
        "end": 1406
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
              "start": 1410,
              "end": 1413
            },
            "start": 1408,
            "end": 1413
          },
          "start": 1407,
          "end": 1413
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1415,
        "end": 1418
      },
      "expression": false,
      "start": 1393,
      "end": 1418
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1429,
        "end": 1433
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
                "start": 1437,
                "end": 1438
              },
              "typeArguments": null,
              "start": 1437,
              "end": 1438
            },
            "start": 1435,
            "end": 1438
          },
          "start": 1434,
          "end": 1438
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1420,
      "end": 1440
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1450,
        "end": 1454
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
                "start": 1458,
                "end": 1459
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1460,
                    "end": 1466
                  }
                ],
                "start": 1459,
                "end": 1467
              },
              "start": 1458,
              "end": 1467
            },
            "start": 1456,
            "end": 1467
          },
          "start": 1455,
          "end": 1467
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1441,
      "end": 1469
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1488,
        "end": 1492
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
              "start": 1496,
              "end": 1499
            },
            "start": 1494,
            "end": 1499
          },
          "start": 1493,
          "end": 1499
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1501,
        "end": 1504
      },
      "expression": false,
      "start": 1479,
      "end": 1504
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1515,
        "end": 1520
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
                "start": 1524,
                "end": 1525
              },
              "typeArguments": null,
              "start": 1524,
              "end": 1525
            },
            "start": 1522,
            "end": 1525
          },
          "start": 1521,
          "end": 1525
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1506,
      "end": 1527
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1537,
        "end": 1542
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
                "start": 1553,
                "end": 1554
              },
              "typeArguments": null,
              "start": 1546,
              "end": 1554
            },
            "start": 1544,
            "end": 1554
          },
          "start": 1543,
          "end": 1554
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1528,
      "end": 1556
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1575,
        "end": 1580
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
              "start": 1584,
              "end": 1587
            },
            "start": 1582,
            "end": 1587
          },
          "start": 1581,
          "end": 1587
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1589,
        "end": 1592
      },
      "expression": false,
      "start": 1566,
      "end": 1592
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1603,
        "end": 1608
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
                "start": 1612,
                "end": 1613
              },
              "typeArguments": null,
              "start": 1612,
              "end": 1613
            },
            "start": 1610,
            "end": 1613
          },
          "start": 1609,
          "end": 1613
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1594,
      "end": 1615
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1625,
        "end": 1630
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
                "start": 1641,
                "end": 1642
              },
              "typeArguments": null,
              "start": 1634,
              "end": 1642
            },
            "start": 1632,
            "end": 1642
          },
          "start": 1631,
          "end": 1642
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1616,
      "end": 1644
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1663,
        "end": 1668
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
              "start": 1672,
              "end": 1675
            },
            "start": 1670,
            "end": 1675
          },
          "start": 1669,
          "end": 1675
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1677,
        "end": 1680
      },
      "expression": false,
      "start": 1654,
      "end": 1680
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1691,
        "end": 1697
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
                "start": 1701,
                "end": 1702
              },
              "typeArguments": null,
              "start": 1701,
              "end": 1702
            },
            "start": 1699,
            "end": 1702
          },
          "start": 1698,
          "end": 1702
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1682,
      "end": 1704
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1714,
        "end": 1720
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
                "start": 1724,
                "end": 1726
              },
              "typeArguments": null,
              "start": 1724,
              "end": 1726
            },
            "start": 1722,
            "end": 1726
          },
          "start": 1721,
          "end": 1726
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1705,
      "end": 1728
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1747,
        "end": 1753
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
              "start": 1757,
              "end": 1760
            },
            "start": 1755,
            "end": 1760
          },
          "start": 1754,
          "end": 1760
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1762,
        "end": 1765
      },
      "expression": false,
      "start": 1738,
      "end": 1765
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1776,
        "end": 1782
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
                "start": 1786,
                "end": 1787
              },
              "typeArguments": null,
              "start": 1786,
              "end": 1787
            },
            "start": 1784,
            "end": 1787
          },
          "start": 1783,
          "end": 1787
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1767,
      "end": 1789
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1799,
        "end": 1805
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
                "start": 1809,
                "end": 1811
              },
              "typeArguments": null,
              "start": 1809,
              "end": 1811
            },
            "start": 1807,
            "end": 1811
          },
          "start": 1806,
          "end": 1811
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1790,
      "end": 1813
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1832,
        "end": 1838
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
              "start": 1842,
              "end": 1845
            },
            "start": 1840,
            "end": 1845
          },
          "start": 1839,
          "end": 1845
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1847,
        "end": 1850
      },
      "expression": false,
      "start": 1823,
      "end": 1850
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1861,
        "end": 1866
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
                "start": 1870,
                "end": 1871
              },
              "typeArguments": null,
              "start": 1870,
              "end": 1871
            },
            "start": 1868,
            "end": 1871
          },
          "start": 1867,
          "end": 1871
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1852,
      "end": 1873
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1883,
        "end": 1888
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
                "start": 1892,
                "end": 1893
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1894,
                    "end": 1900
                  }
                ],
                "start": 1893,
                "end": 1901
              },
              "start": 1892,
              "end": 1901
            },
            "start": 1890,
            "end": 1901
          },
          "start": 1889,
          "end": 1901
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1874,
      "end": 1903
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1922,
        "end": 1927
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
              "start": 1931,
              "end": 1934
            },
            "start": 1929,
            "end": 1934
          },
          "start": 1928,
          "end": 1934
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1936,
        "end": 1939
      },
      "expression": false,
      "start": 1913,
      "end": 1939
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 1950,
        "end": 1955
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
                "start": 1959,
                "end": 1960
              },
              "typeArguments": null,
              "start": 1959,
              "end": 1960
            },
            "start": 1957,
            "end": 1960
          },
          "start": 1956,
          "end": 1960
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1941,
      "end": 1962
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 1972,
        "end": 1977
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
                "start": 1988,
                "end": 1989
              },
              "typeArguments": null,
              "start": 1981,
              "end": 1989
            },
            "start": 1979,
            "end": 1989
          },
          "start": 1978,
          "end": 1989
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1963,
      "end": 1991
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 2010,
        "end": 2015
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
              "start": 2019,
              "end": 2022
            },
            "start": 2017,
            "end": 2022
          },
          "start": 2016,
          "end": 2022
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2024,
        "end": 2027
      },
      "expression": false,
      "start": 2001,
      "end": 2027
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 2038,
        "end": 2043
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
                "start": 2047,
                "end": 2048
              },
              "typeArguments": null,
              "start": 2047,
              "end": 2048
            },
            "start": 2045,
            "end": 2048
          },
          "start": 2044,
          "end": 2048
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2029,
      "end": 2050
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 2060,
        "end": 2065
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
                "start": 2076,
                "end": 2077
              },
              "typeArguments": null,
              "start": 2069,
              "end": 2077
            },
            "start": 2067,
            "end": 2077
          },
          "start": 2066,
          "end": 2077
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2051,
      "end": 2079
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 2098,
        "end": 2103
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
              "start": 2107,
              "end": 2110
            },
            "start": 2105,
            "end": 2110
          },
          "start": 2104,
          "end": 2110
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2112,
        "end": 2115
      },
      "expression": false,
      "start": 2089,
      "end": 2115
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null,
        "start": 2126,
        "end": 2131
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
                "start": 2135,
                "end": 2136
              },
              "typeArguments": null,
              "start": 2135,
              "end": 2136
            },
            "start": 2133,
            "end": 2136
          },
          "start": 2132,
          "end": 2136
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2117,
      "end": 2138
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null,
        "start": 2148,
        "end": 2153
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
                "start": 2157,
                "end": 2159
              },
              "typeArguments": null,
              "start": 2157,
              "end": 2159
            },
            "start": 2155,
            "end": 2159
          },
          "start": 2154,
          "end": 2159
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2139,
      "end": 2161
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null,
        "start": 2180,
        "end": 2185
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
              "start": 2189,
              "end": 2192
            },
            "start": 2187,
            "end": 2192
          },
          "start": 2186,
          "end": 2192
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2194,
        "end": 2197
      },
      "expression": false,
      "start": 2171,
      "end": 2197
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo16",
        "optional": false,
        "typeAnnotation": null,
        "start": 2208,
        "end": 2213
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
                "start": 2217,
                "end": 2218
              },
              "typeArguments": null,
              "start": 2217,
              "end": 2218
            },
            "start": 2215,
            "end": 2218
          },
          "start": 2214,
          "end": 2218
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2199,
      "end": 2220
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo16",
        "optional": false,
        "typeAnnotation": null,
        "start": 2230,
        "end": 2235
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
                "start": 2239,
                "end": 2241
              },
              "typeArguments": null,
              "start": 2239,
              "end": 2241
            },
            "start": 2237,
            "end": 2241
          },
          "start": 2236,
          "end": 2241
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2221,
      "end": 2243
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo16",
        "optional": false,
        "typeAnnotation": null,
        "start": 2262,
        "end": 2267
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
              "start": 2271,
              "end": 2274
            },
            "start": 2269,
            "end": 2274
          },
          "start": 2268,
          "end": 2274
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2276,
        "end": 2279
      },
      "expression": false,
      "start": 2253,
      "end": 2279
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 44,
  "end": 2280
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
    "value": "string",
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
    "value": "string",
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
    "value": "string",
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
    "value": "string",
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
    "value": "string",
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
    "value": "string",
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
    "type": "Identifier",
    "value": "foo",
    "start": 318,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 321,
    "end": 322
  },
  {
    "type": "String",
    "value": "''",
    "start": 323,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 327,
    "end": 328
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 330,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 339,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 343,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 345,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 347,
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
    "value": ";",
    "start": 349,
    "end": 350
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 351,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 360,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 364,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 365,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 366,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 368,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 370,
    "end": 371
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 381,
    "end": 389
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 390,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 394,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 396,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 398,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 405,
    "end": 406
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
    "value": "B",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "function",
    "start": 430,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "foo1b",
    "start": 439,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 444,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 446,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 450,
    "end": 451
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 461,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "foo1b",
    "start": 470,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 475,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 477,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 479,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 482,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 486,
    "end": 487
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 489,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "foo1c",
    "start": 498,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 503,
    "end": 504
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 504,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 505,
    "end": 506
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 507,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 508,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 509,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "function",
    "start": 519,
    "end": 527
  },
  {
    "type": "Identifier",
    "value": "foo1c",
    "start": 528,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 533,
    "end": 534
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 534,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 535,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 537,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 538,
    "end": 539
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 539,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 545,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 546,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 547,
    "end": 548
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 558,
    "end": 566
  },
  {
    "type": "Identifier",
    "value": "foo1c",
    "start": 567,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 572,
    "end": 573
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 573,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 574,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 576,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 579,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 581,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 583,
    "end": 584
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 586,
    "end": 594
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 595,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 599,
    "end": 600
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 600,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 601,
    "end": 602
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 603,
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
    "value": ";",
    "start": 605,
    "end": 606
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 607,
    "end": 615
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 616,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 620,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 621,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 622,
    "end": 623
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 624,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 625,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 626,
    "end": 627
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 637,
    "end": 645
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 646,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 650,
    "end": 651
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 651,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 652,
    "end": 653
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 654,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 657,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 659,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 661,
    "end": 662
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 664,
    "end": 672
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 673,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 677,
    "end": 678
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 678,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 679,
    "end": 680
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 681,
    "end": 687
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 688,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 689,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 690,
    "end": 691
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 692,
    "end": 700
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 701,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 705,
    "end": 706
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 706,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 707,
    "end": 708
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 709,
    "end": 715
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 716,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 717,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 718,
    "end": 719
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 729,
    "end": 737
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 738,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 742,
    "end": 743
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 743,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 744,
    "end": 745
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 746,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 749,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 751,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 753,
    "end": 754
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 756,
    "end": 764
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 765,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 769,
    "end": 770
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 770,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 771,
    "end": 772
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 773,
    "end": 779
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 780,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 781,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 782,
    "end": 783
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 784,
    "end": 792
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 793,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 797,
    "end": 798
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 798,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 799,
    "end": 800
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 801,
    "end": 807
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 808,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 809,
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
    "value": "function",
    "start": 821,
    "end": 829
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 830,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 834,
    "end": 835
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 835,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 836,
    "end": 837
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 838,
    "end": 841
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 841,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 843,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 845,
    "end": 846
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 848,
    "end": 856
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 857,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 861,
    "end": 862
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 862,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 863,
    "end": 864
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 865,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 866,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 867,
    "end": 868
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 869,
    "end": 877
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 878,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 882,
    "end": 883
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 883,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 884,
    "end": 885
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 886,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 887,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 888,
    "end": 889
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 899,
    "end": 907
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 908,
    "end": 912
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 912,
    "end": 913
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 913,
    "end": 914
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 914,
    "end": 915
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 916,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 919,
    "end": 920
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 921,
    "end": 922
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 923,
    "end": 924
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 926,
    "end": 934
  },
  {
    "type": "Identifier",
    "value": "foo5b",
    "start": 935,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 940,
    "end": 941
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 941,
    "end": 942
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 942,
    "end": 943
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 944,
    "end": 945
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 945,
    "end": 946
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 946,
    "end": 947
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 948,
    "end": 956
  },
  {
    "type": "Identifier",
    "value": "foo5b",
    "start": 957,
    "end": 962
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 962,
    "end": 963
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 963,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 964,
    "end": 965
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 966,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 967,
    "end": 968
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 968,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 974,
    "end": 975
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 975,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 976,
    "end": 977
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 987,
    "end": 995
  },
  {
    "type": "Identifier",
    "value": "foo5b",
    "start": 996,
    "end": 1001
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1001,
    "end": 1002
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1002,
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
    "value": "any",
    "start": 1005,
    "end": 1008
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1015,
    "end": 1023
  },
  {
    "type": "Identifier",
    "value": "foo5c",
    "start": 1024,
    "end": 1029
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1037,
    "end": 1045
  },
  {
    "type": "Identifier",
    "value": "foo5c",
    "start": 1046,
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
    "value": "x",
    "start": 1052,
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
    "value": "PA",
    "start": 1055,
    "end": 1057
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1057,
    "end": 1058
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1058,
    "end": 1059
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1069,
    "end": 1077
  },
  {
    "type": "Identifier",
    "value": "foo5c",
    "start": 1078,
    "end": 1083
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1083,
    "end": 1084
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1084,
    "end": 1085
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1085,
    "end": 1086
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1087,
    "end": 1090
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1092,
    "end": 1093
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1094,
    "end": 1095
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1097,
    "end": 1105
  },
  {
    "type": "Identifier",
    "value": "foo5d",
    "start": 1106,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1113,
    "end": 1114
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1115,
    "end": 1116
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1116,
    "end": 1117
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1117,
    "end": 1118
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1119,
    "end": 1127
  },
  {
    "type": "Identifier",
    "value": "foo5d",
    "start": 1128,
    "end": 1133
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1133,
    "end": 1134
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1134,
    "end": 1135
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1135,
    "end": 1136
  },
  {
    "type": "Identifier",
    "value": "PB",
    "start": 1137,
    "end": 1139
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1139,
    "end": 1140
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1140,
    "end": 1141
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1151,
    "end": 1159
  },
  {
    "type": "Identifier",
    "value": "foo5d",
    "start": 1160,
    "end": 1165
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1165,
    "end": 1166
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1166,
    "end": 1167
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1169,
    "end": 1172
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1174,
    "end": 1175
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1176,
    "end": 1177
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1179,
    "end": 1187
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 1188,
    "end": 1192
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1192,
    "end": 1193
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1193,
    "end": 1194
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1194,
    "end": 1195
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1196,
    "end": 1197
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1197,
    "end": 1198
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1200,
    "end": 1208
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 1209,
    "end": 1213
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1214,
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
    "value": "I",
    "start": 1217,
    "end": 1218
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1218,
    "end": 1219
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1219,
    "end": 1220
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1230,
    "end": 1238
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 1239,
    "end": 1243
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1244,
    "end": 1245
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1245,
    "end": 1246
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1247,
    "end": 1250
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1250,
    "end": 1251
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1252,
    "end": 1253
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1254,
    "end": 1255
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1257,
    "end": 1265
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 1266,
    "end": 1270
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1270,
    "end": 1271
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1272,
    "end": 1273
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1274,
    "end": 1275
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1275,
    "end": 1276
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1276,
    "end": 1277
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1278,
    "end": 1286
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 1287,
    "end": 1291
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1291,
    "end": 1292
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1292,
    "end": 1293
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1293,
    "end": 1294
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1295,
    "end": 1301
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1302,
    "end": 1303
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1303,
    "end": 1304
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1304,
    "end": 1305
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1315,
    "end": 1323
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 1324,
    "end": 1328
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1328,
    "end": 1329
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1329,
    "end": 1330
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1330,
    "end": 1331
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1332,
    "end": 1335
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1335,
    "end": 1336
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1337,
    "end": 1338
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1339,
    "end": 1340
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1342,
    "end": 1350
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 1351,
    "end": 1355
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1355,
    "end": 1356
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1356,
    "end": 1357
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1357,
    "end": 1358
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1359,
    "end": 1360
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1360,
    "end": 1361
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1361,
    "end": 1362
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1363,
    "end": 1371
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 1372,
    "end": 1376
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1376,
    "end": 1377
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1377,
    "end": 1378
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1378,
    "end": 1379
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1380,
    "end": 1381
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1381,
    "end": 1382
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1382,
    "end": 1383
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1393,
    "end": 1401
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 1402,
    "end": 1406
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1406,
    "end": 1407
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1407,
    "end": 1408
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1408,
    "end": 1409
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1410,
    "end": 1413
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1413,
    "end": 1414
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1415,
    "end": 1416
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1417,
    "end": 1418
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1420,
    "end": 1428
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 1429,
    "end": 1433
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1433,
    "end": 1434
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1434,
    "end": 1435
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1435,
    "end": 1436
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1437,
    "end": 1438
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1438,
    "end": 1439
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1439,
    "end": 1440
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1441,
    "end": 1449
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 1450,
    "end": 1454
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1454,
    "end": 1455
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1455,
    "end": 1456
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1456,
    "end": 1457
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1458,
    "end": 1459
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1459,
    "end": 1460
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1460,
    "end": 1466
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1466,
    "end": 1467
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1467,
    "end": 1468
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1468,
    "end": 1469
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1479,
    "end": 1487
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 1488,
    "end": 1492
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1492,
    "end": 1493
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1493,
    "end": 1494
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1494,
    "end": 1495
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1496,
    "end": 1499
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1499,
    "end": 1500
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1501,
    "end": 1502
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1503,
    "end": 1504
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1506,
    "end": 1514
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 1515,
    "end": 1520
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1520,
    "end": 1521
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1521,
    "end": 1522
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1522,
    "end": 1523
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1524,
    "end": 1525
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1525,
    "end": 1526
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1526,
    "end": 1527
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1528,
    "end": 1536
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 1537,
    "end": 1542
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1542,
    "end": 1543
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1543,
    "end": 1544
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1544,
    "end": 1545
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1546,
    "end": 1552
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1553,
    "end": 1554
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1554,
    "end": 1555
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1555,
    "end": 1556
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1566,
    "end": 1574
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 1575,
    "end": 1580
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1580,
    "end": 1581
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1581,
    "end": 1582
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1582,
    "end": 1583
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1584,
    "end": 1587
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1587,
    "end": 1588
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1589,
    "end": 1590
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1591,
    "end": 1592
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1594,
    "end": 1602
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 1603,
    "end": 1608
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1608,
    "end": 1609
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1609,
    "end": 1610
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1610,
    "end": 1611
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1612,
    "end": 1613
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1613,
    "end": 1614
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1614,
    "end": 1615
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1616,
    "end": 1624
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 1625,
    "end": 1630
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1630,
    "end": 1631
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1631,
    "end": 1632
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1632,
    "end": 1633
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1634,
    "end": 1640
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1641,
    "end": 1642
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "function",
    "start": 1654,
    "end": 1662
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 1663,
    "end": 1668
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1668,
    "end": 1669
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "any",
    "start": 1672,
    "end": 1675
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1675,
    "end": 1676
  },
  {
    "type": "Punctuator",
    "value": "{",
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
    "value": "function",
    "start": 1682,
    "end": 1690
  },
  {
    "type": "Identifier",
    "value": "foo11b",
    "start": 1691,
    "end": 1697
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1697,
    "end": 1698
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1698,
    "end": 1699
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1699,
    "end": 1700
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1701,
    "end": 1702
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1702,
    "end": 1703
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1703,
    "end": 1704
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1705,
    "end": 1713
  },
  {
    "type": "Identifier",
    "value": "foo11b",
    "start": 1714,
    "end": 1720
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1720,
    "end": 1721
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1721,
    "end": 1722
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1722,
    "end": 1723
  },
  {
    "type": "Identifier",
    "value": "PA",
    "start": 1724,
    "end": 1726
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "function",
    "start": 1738,
    "end": 1746
  },
  {
    "type": "Identifier",
    "value": "foo11b",
    "start": 1747,
    "end": 1753
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1753,
    "end": 1754
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1754,
    "end": 1755
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1755,
    "end": 1756
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1757,
    "end": 1760
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1760,
    "end": 1761
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1762,
    "end": 1763
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1764,
    "end": 1765
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1767,
    "end": 1775
  },
  {
    "type": "Identifier",
    "value": "foo11c",
    "start": 1776,
    "end": 1782
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1782,
    "end": 1783
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1783,
    "end": 1784
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1784,
    "end": 1785
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1786,
    "end": 1787
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1787,
    "end": 1788
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1788,
    "end": 1789
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1790,
    "end": 1798
  },
  {
    "type": "Identifier",
    "value": "foo11c",
    "start": 1799,
    "end": 1805
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1805,
    "end": 1806
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1806,
    "end": 1807
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1807,
    "end": 1808
  },
  {
    "type": "Identifier",
    "value": "PB",
    "start": 1809,
    "end": 1811
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1811,
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
    "value": "function",
    "start": 1823,
    "end": 1831
  },
  {
    "type": "Identifier",
    "value": "foo11c",
    "start": 1832,
    "end": 1838
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1838,
    "end": 1839
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1839,
    "end": 1840
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1840,
    "end": 1841
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1842,
    "end": 1845
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1845,
    "end": 1846
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1847,
    "end": 1848
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1849,
    "end": 1850
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1852,
    "end": 1860
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 1861,
    "end": 1866
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1866,
    "end": 1867
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1867,
    "end": 1868
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1868,
    "end": 1869
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1870,
    "end": 1871
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1871,
    "end": 1872
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1872,
    "end": 1873
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1874,
    "end": 1882
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 1883,
    "end": 1888
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1888,
    "end": 1889
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1889,
    "end": 1890
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1890,
    "end": 1891
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1892,
    "end": 1893
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1893,
    "end": 1894
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1894,
    "end": 1900
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1900,
    "end": 1901
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1901,
    "end": 1902
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1902,
    "end": 1903
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1913,
    "end": 1921
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 1922,
    "end": 1927
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1927,
    "end": 1928
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1928,
    "end": 1929
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1929,
    "end": 1930
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1931,
    "end": 1934
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1934,
    "end": 1935
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1936,
    "end": 1937
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1938,
    "end": 1939
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1941,
    "end": 1949
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 1950,
    "end": 1955
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1955,
    "end": 1956
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "I",
    "start": 1959,
    "end": 1960
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1960,
    "end": 1961
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1961,
    "end": 1962
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1963,
    "end": 1971
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 1972,
    "end": 1977
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1977,
    "end": 1978
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1978,
    "end": 1979
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1979,
    "end": 1980
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1981,
    "end": 1987
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1988,
    "end": 1989
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1989,
    "end": 1990
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1990,
    "end": 1991
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2001,
    "end": 2009
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 2010,
    "end": 2015
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2015,
    "end": 2016
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2016,
    "end": 2017
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2017,
    "end": 2018
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2019,
    "end": 2022
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2022,
    "end": 2023
  },
  {
    "type": "Punctuator",
    "value": "{",
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
    "value": "function",
    "start": 2029,
    "end": 2037
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 2038,
    "end": 2043
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2043,
    "end": 2044
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2044,
    "end": 2045
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2045,
    "end": 2046
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 2047,
    "end": 2048
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2048,
    "end": 2049
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2049,
    "end": 2050
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2051,
    "end": 2059
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 2060,
    "end": 2065
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2065,
    "end": 2066
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2066,
    "end": 2067
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2067,
    "end": 2068
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2069,
    "end": 2075
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2076,
    "end": 2077
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2077,
    "end": 2078
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2078,
    "end": 2079
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2089,
    "end": 2097
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 2098,
    "end": 2103
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2103,
    "end": 2104
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2104,
    "end": 2105
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2105,
    "end": 2106
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2107,
    "end": 2110
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2110,
    "end": 2111
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2112,
    "end": 2113
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2114,
    "end": 2115
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2117,
    "end": 2125
  },
  {
    "type": "Identifier",
    "value": "foo15",
    "start": 2126,
    "end": 2131
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2131,
    "end": 2132
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2132,
    "end": 2133
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2133,
    "end": 2134
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 2135,
    "end": 2136
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2136,
    "end": 2137
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2137,
    "end": 2138
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2139,
    "end": 2147
  },
  {
    "type": "Identifier",
    "value": "foo15",
    "start": 2148,
    "end": 2153
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2153,
    "end": 2154
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2154,
    "end": 2155
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2155,
    "end": 2156
  },
  {
    "type": "Identifier",
    "value": "PA",
    "start": 2157,
    "end": 2159
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2159,
    "end": 2160
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2160,
    "end": 2161
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2171,
    "end": 2179
  },
  {
    "type": "Identifier",
    "value": "foo15",
    "start": 2180,
    "end": 2185
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2185,
    "end": 2186
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2186,
    "end": 2187
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2187,
    "end": 2188
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2189,
    "end": 2192
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2192,
    "end": 2193
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2194,
    "end": 2195
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2196,
    "end": 2197
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2199,
    "end": 2207
  },
  {
    "type": "Identifier",
    "value": "foo16",
    "start": 2208,
    "end": 2213
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2213,
    "end": 2214
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2214,
    "end": 2215
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2215,
    "end": 2216
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 2217,
    "end": 2218
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2218,
    "end": 2219
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2219,
    "end": 2220
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2221,
    "end": 2229
  },
  {
    "type": "Identifier",
    "value": "foo16",
    "start": 2230,
    "end": 2235
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2235,
    "end": 2236
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2236,
    "end": 2237
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2237,
    "end": 2238
  },
  {
    "type": "Identifier",
    "value": "PB",
    "start": 2239,
    "end": 2241
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2241,
    "end": 2242
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2242,
    "end": 2243
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2253,
    "end": 2261
  },
  {
    "type": "Identifier",
    "value": "foo16",
    "start": 2262,
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
    "value": ":",
    "start": 2269,
    "end": 2270
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2271,
    "end": 2274
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2274,
    "end": 2275
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2276,
    "end": 2277
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2278,
    "end": 2279
  }
]
```
