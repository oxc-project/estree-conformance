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
        "start": 50,
        "end": 54
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 57,
              "end": 60
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 57,
            "end": 69
          }
        ],
        "start": 55,
        "end": 71
      },
      "abstract": false,
      "declare": false,
      "start": 44,
      "end": 71
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
        "start": 78,
        "end": 85
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 94,
        "end": 98
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
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 101,
              "end": 104
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 101,
            "end": 113
          }
        ],
        "start": 99,
        "end": 115
      },
      "abstract": false,
      "declare": false,
      "start": 72,
      "end": 115
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 123,
        "end": 124
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
                    "start": 135,
                    "end": 141
                  },
                  "start": 133,
                  "end": 141
                },
                "start": 132,
                "end": 141
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
                  "start": 144,
                  "end": 148
                },
                "typeArguments": null,
                "start": 144,
                "end": 148
              },
              "start": 142,
              "end": 148
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 131,
            "end": 149
          }
        ],
        "start": 125,
        "end": 151
      },
      "abstract": false,
      "declare": false,
      "start": 117,
      "end": 151
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
        "start": 159,
        "end": 160
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
                    "start": 171,
                    "end": 177
                  },
                  "start": 169,
                  "end": 177
                },
                "start": 168,
                "end": 177
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
                  "start": 180,
                  "end": 187
                },
                "typeArguments": null,
                "start": 180,
                "end": 187
              },
              "start": 178,
              "end": 187
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 167,
            "end": 188
          }
        ],
        "start": 161,
        "end": 190
      },
      "abstract": false,
      "declare": false,
      "start": 153,
      "end": 190
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
        "start": 198,
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 200,
              "end": 201
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 200,
            "end": 201
          }
        ],
        "start": 199,
        "end": 202
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
                    "start": 213,
                    "end": 219
                  },
                  "start": 211,
                  "end": 219
                },
                "start": 210,
                "end": 219
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
                  "start": 222,
                  "end": 223
                },
                "typeArguments": null,
                "start": 222,
                "end": 223
              },
              "start": 220,
              "end": 223
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 209,
            "end": 224
          }
        ],
        "start": 203,
        "end": 226
      },
      "abstract": false,
      "declare": false,
      "start": 192,
      "end": 226
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 238,
        "end": 239
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
                    "start": 250,
                    "end": 256
                  },
                  "start": 248,
                  "end": 256
                },
                "start": 247,
                "end": 256
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
                  "start": 259,
                  "end": 266
                },
                "typeArguments": null,
                "start": 259,
                "end": 266
              },
              "start": 257,
              "end": 266
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 246,
            "end": 267
          }
        ],
        "start": 240,
        "end": 269
      },
      "declare": false,
      "start": 228,
      "end": 269
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
        "start": 277,
        "end": 279
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 288,
        "end": 289
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 290,
        "end": 293
      },
      "abstract": false,
      "declare": false,
      "start": 271,
      "end": 293
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
        "start": 301,
        "end": 303
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 312,
        "end": 313
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 314,
        "end": 317
      },
      "abstract": false,
      "declare": false,
      "start": 295,
      "end": 317
    },
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
                            "start": 336,
                            "end": 342
                          },
                          "start": 334,
                          "end": 342
                        },
                        "start": 333,
                        "end": 342
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
                          "start": 345,
                          "end": 349
                        },
                        "typeArguments": null,
                        "start": 345,
                        "end": 349
                      },
                      "start": 343,
                      "end": 349
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 332,
                    "end": 350
                  }
                ],
                "start": 326,
                "end": 352
              },
              "start": 324,
              "end": 352
            },
            "start": 323,
            "end": 352
          },
          "init": null,
          "definite": false,
          "start": 323,
          "end": 352
        }
      ],
      "declare": false,
      "start": 319,
      "end": 352
    },
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
                            "start": 366,
                            "end": 372
                          },
                          "start": 364,
                          "end": 372
                        },
                        "start": 363,
                        "end": 372
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
                          "start": 375,
                          "end": 382
                        },
                        "typeArguments": null,
                        "start": 375,
                        "end": 382
                      },
                      "start": 373,
                      "end": 382
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 362,
                    "end": 383
                  }
                ],
                "start": 360,
                "end": 385
              },
              "start": 358,
              "end": 385
            },
            "start": 357,
            "end": 385
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
                  "start": 390,
                  "end": 393
                },
                "value": {
                  "type": "TSTypeAssertion",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Derived",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 396,
                      "end": 403
                    },
                    "typeArguments": null,
                    "start": 396,
                    "end": 403
                  },
                  "expression": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 404,
                    "end": 408
                  },
                  "start": 395,
                  "end": 408
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 390,
                "end": 408
              }
            ],
            "start": 388,
            "end": 410
          },
          "definite": false,
          "start": 357,
          "end": 410
        }
      ],
      "declare": false,
      "start": 353,
      "end": 411
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 422,
        "end": 426
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
                "start": 430,
                "end": 431
              },
              "typeArguments": null,
              "start": 430,
              "end": 431
            },
            "start": 428,
            "end": 431
          },
          "start": 427,
          "end": 431
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 413,
      "end": 433
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 443,
        "end": 447
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
                "start": 451,
                "end": 452
              },
              "typeArguments": null,
              "start": 451,
              "end": 452
            },
            "start": 449,
            "end": 452
          },
          "start": 448,
          "end": 452
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 434,
      "end": 454
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 473,
        "end": 477
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
              "start": 481,
              "end": 484
            },
            "start": 479,
            "end": 484
          },
          "start": 478,
          "end": 484
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 486,
        "end": 489
      },
      "expression": false,
      "start": 464,
      "end": 489
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null,
        "start": 500,
        "end": 505
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
                "start": 509,
                "end": 510
              },
              "typeArguments": null,
              "start": 509,
              "end": 510
            },
            "start": 507,
            "end": 510
          },
          "start": 506,
          "end": 510
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 491,
      "end": 512
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null,
        "start": 522,
        "end": 527
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
                "start": 531,
                "end": 532
              },
              "typeArguments": null,
              "start": 531,
              "end": 532
            },
            "start": 529,
            "end": 532
          },
          "start": 528,
          "end": 532
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 513,
      "end": 534
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null,
        "start": 553,
        "end": 558
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
              "start": 562,
              "end": 565
            },
            "start": 560,
            "end": 565
          },
          "start": 559,
          "end": 565
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 567,
        "end": 570
      },
      "expression": false,
      "start": 544,
      "end": 570
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null,
        "start": 581,
        "end": 586
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
                "start": 590,
                "end": 591
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 592,
                    "end": 598
                  }
                ],
                "start": 591,
                "end": 599
              },
              "start": 590,
              "end": 599
            },
            "start": 588,
            "end": 599
          },
          "start": 587,
          "end": 599
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 572,
      "end": 601
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null,
        "start": 611,
        "end": 616
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
                "start": 620,
                "end": 621
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 622,
                    "end": 628
                  }
                ],
                "start": 621,
                "end": 629
              },
              "start": 620,
              "end": 629
            },
            "start": 618,
            "end": 629
          },
          "start": 617,
          "end": 629
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 602,
      "end": 631
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null,
        "start": 650,
        "end": 655
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
              "start": 659,
              "end": 662
            },
            "start": 657,
            "end": 662
          },
          "start": 656,
          "end": 662
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 664,
        "end": 667
      },
      "expression": false,
      "start": 641,
      "end": 667
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 678,
        "end": 682
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
                "start": 686,
                "end": 687
              },
              "typeArguments": null,
              "start": 686,
              "end": 687
            },
            "start": 684,
            "end": 687
          },
          "start": 683,
          "end": 687
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 669,
      "end": 689
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 707,
                "end": 708
              },
              "typeArguments": null,
              "start": 707,
              "end": 708
            },
            "start": 705,
            "end": 708
          },
          "start": 704,
          "end": 708
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 690,
      "end": 710
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 729,
        "end": 733
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
              "start": 737,
              "end": 740
            },
            "start": 735,
            "end": 740
          },
          "start": 734,
          "end": 740
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 742,
        "end": 745
      },
      "expression": false,
      "start": 720,
      "end": 745
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 756,
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
                "start": 771,
                "end": 772
              },
              "typeArguments": null,
              "start": 764,
              "end": 772
            },
            "start": 762,
            "end": 772
          },
          "start": 761,
          "end": 772
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 747,
      "end": 774
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 784,
        "end": 788
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
                "start": 799,
                "end": 800
              },
              "typeArguments": null,
              "start": 792,
              "end": 800
            },
            "start": 790,
            "end": 800
          },
          "start": 789,
          "end": 800
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 775,
      "end": 802
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 821,
        "end": 825
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
              "start": 829,
              "end": 832
            },
            "start": 827,
            "end": 832
          },
          "start": 826,
          "end": 832
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 834,
        "end": 837
      },
      "expression": false,
      "start": 812,
      "end": 837
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 848,
        "end": 852
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
                "start": 863,
                "end": 864
              },
              "typeArguments": null,
              "start": 856,
              "end": 864
            },
            "start": 854,
            "end": 864
          },
          "start": 853,
          "end": 864
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 839,
      "end": 866
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
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
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 891,
                "end": 892
              },
              "typeArguments": null,
              "start": 884,
              "end": 892
            },
            "start": 882,
            "end": 892
          },
          "start": 881,
          "end": 892
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 867,
      "end": 894
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 913,
        "end": 917
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
              "start": 921,
              "end": 924
            },
            "start": 919,
            "end": 924
          },
          "start": 918,
          "end": 924
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 926,
        "end": 929
      },
      "expression": false,
      "start": 904,
      "end": 929
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 940,
        "end": 944
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
                "start": 948,
                "end": 949
              },
              "typeArguments": null,
              "start": 948,
              "end": 949
            },
            "start": 946,
            "end": 949
          },
          "start": 945,
          "end": 949
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 931,
      "end": 951
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 961,
        "end": 965
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
                "start": 969,
                "end": 970
              },
              "typeArguments": null,
              "start": 969,
              "end": 970
            },
            "start": 967,
            "end": 970
          },
          "start": 966,
          "end": 970
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 952,
      "end": 972
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 988,
        "end": 992
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
              "start": 996,
              "end": 999
            },
            "start": 994,
            "end": 999
          },
          "start": 993,
          "end": 999
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1001,
        "end": 1004
      },
      "expression": false,
      "start": 979,
      "end": 1004
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1015,
        "end": 1020
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
                "start": 1024,
                "end": 1025
              },
              "typeArguments": null,
              "start": 1024,
              "end": 1025
            },
            "start": 1022,
            "end": 1025
          },
          "start": 1021,
          "end": 1025
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1006,
      "end": 1027
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1037,
        "end": 1042
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
                "start": 1046,
                "end": 1047
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Derived",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1048,
                      "end": 1055
                    },
                    "typeArguments": null,
                    "start": 1048,
                    "end": 1055
                  }
                ],
                "start": 1047,
                "end": 1056
              },
              "start": 1046,
              "end": 1056
            },
            "start": 1044,
            "end": 1056
          },
          "start": 1043,
          "end": 1056
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1028,
      "end": 1058
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1074,
        "end": 1079
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
              "start": 1083,
              "end": 1086
            },
            "start": 1081,
            "end": 1086
          },
          "start": 1080,
          "end": 1086
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1088,
        "end": 1091
      },
      "expression": false,
      "start": 1065,
      "end": 1091
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1102,
        "end": 1107
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
                "start": 1111,
                "end": 1112
              },
              "typeArguments": null,
              "start": 1111,
              "end": 1112
            },
            "start": 1109,
            "end": 1112
          },
          "start": 1108,
          "end": 1112
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1093,
      "end": 1114
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1124,
        "end": 1129
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
                "start": 1133,
                "end": 1135
              },
              "typeArguments": null,
              "start": 1133,
              "end": 1135
            },
            "start": 1131,
            "end": 1135
          },
          "start": 1130,
          "end": 1135
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1115,
      "end": 1137
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1156,
        "end": 1161
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
              "start": 1165,
              "end": 1168
            },
            "start": 1163,
            "end": 1168
          },
          "start": 1162,
          "end": 1168
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1170,
        "end": 1173
      },
      "expression": false,
      "start": 1147,
      "end": 1173
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5d",
        "optional": false,
        "typeAnnotation": null,
        "start": 1184,
        "end": 1189
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
                "start": 1193,
                "end": 1194
              },
              "typeArguments": null,
              "start": 1193,
              "end": 1194
            },
            "start": 1191,
            "end": 1194
          },
          "start": 1190,
          "end": 1194
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1175,
      "end": 1196
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5d",
        "optional": false,
        "typeAnnotation": null,
        "start": 1206,
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
                "name": "PB",
                "optional": false,
                "typeAnnotation": null,
                "start": 1215,
                "end": 1217
              },
              "typeArguments": null,
              "start": 1215,
              "end": 1217
            },
            "start": 1213,
            "end": 1217
          },
          "start": 1212,
          "end": 1217
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1197,
      "end": 1219
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5d",
        "optional": false,
        "typeAnnotation": null,
        "start": 1235,
        "end": 1240
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
              "start": 1244,
              "end": 1247
            },
            "start": 1242,
            "end": 1247
          },
          "start": 1241,
          "end": 1247
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1249,
        "end": 1252
      },
      "expression": false,
      "start": 1226,
      "end": 1252
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1263,
        "end": 1267
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
                "start": 1271,
                "end": 1272
              },
              "typeArguments": null,
              "start": 1271,
              "end": 1272
            },
            "start": 1269,
            "end": 1272
          },
          "start": 1268,
          "end": 1272
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1254,
      "end": 1274
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1284,
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
      "start": 1275,
      "end": 1295
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1311,
        "end": 1315
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
              "start": 1319,
              "end": 1322
            },
            "start": 1317,
            "end": 1322
          },
          "start": 1316,
          "end": 1322
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1324,
        "end": 1327
      },
      "expression": false,
      "start": 1302,
      "end": 1327
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1338,
        "end": 1342
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
                "start": 1346,
                "end": 1347
              },
              "typeArguments": null,
              "start": 1346,
              "end": 1347
            },
            "start": 1344,
            "end": 1347
          },
          "start": 1343,
          "end": 1347
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1329,
      "end": 1349
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1359,
        "end": 1363
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
                "start": 1374,
                "end": 1375
              },
              "typeArguments": null,
              "start": 1367,
              "end": 1375
            },
            "start": 1365,
            "end": 1375
          },
          "start": 1364,
          "end": 1375
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1350,
      "end": 1377
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1396,
        "end": 1400
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
              "start": 1404,
              "end": 1407
            },
            "start": 1402,
            "end": 1407
          },
          "start": 1401,
          "end": 1407
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1409,
        "end": 1412
      },
      "expression": false,
      "start": 1387,
      "end": 1412
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1423,
        "end": 1427
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
                "start": 1431,
                "end": 1432
              },
              "typeArguments": null,
              "start": 1431,
              "end": 1432
            },
            "start": 1429,
            "end": 1432
          },
          "start": 1428,
          "end": 1432
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1414,
      "end": 1434
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1444,
        "end": 1448
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
                "start": 1452,
                "end": 1453
              },
              "typeArguments": null,
              "start": 1452,
              "end": 1453
            },
            "start": 1450,
            "end": 1453
          },
          "start": 1449,
          "end": 1453
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1435,
      "end": 1455
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1474,
        "end": 1478
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
              "start": 1482,
              "end": 1485
            },
            "start": 1480,
            "end": 1485
          },
          "start": 1479,
          "end": 1485
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1487,
        "end": 1490
      },
      "expression": false,
      "start": 1465,
      "end": 1490
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1501,
        "end": 1505
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
                "start": 1509,
                "end": 1510
              },
              "typeArguments": null,
              "start": 1509,
              "end": 1510
            },
            "start": 1507,
            "end": 1510
          },
          "start": 1506,
          "end": 1510
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1492,
      "end": 1512
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1522,
        "end": 1526
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
                "start": 1530,
                "end": 1531
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1532,
                      "end": 1536
                    },
                    "typeArguments": null,
                    "start": 1532,
                    "end": 1536
                  }
                ],
                "start": 1531,
                "end": 1537
              },
              "start": 1530,
              "end": 1537
            },
            "start": 1528,
            "end": 1537
          },
          "start": 1527,
          "end": 1537
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1513,
      "end": 1539
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1555,
        "end": 1559
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
              "start": 1563,
              "end": 1566
            },
            "start": 1561,
            "end": 1566
          },
          "start": 1560,
          "end": 1566
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1568,
        "end": 1571
      },
      "expression": false,
      "start": 1546,
      "end": 1571
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1582,
        "end": 1587
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
                "start": 1591,
                "end": 1592
              },
              "typeArguments": null,
              "start": 1591,
              "end": 1592
            },
            "start": 1589,
            "end": 1592
          },
          "start": 1588,
          "end": 1592
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1573,
      "end": 1594
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1604,
        "end": 1609
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
                "start": 1620,
                "end": 1621
              },
              "typeArguments": null,
              "start": 1613,
              "end": 1621
            },
            "start": 1611,
            "end": 1621
          },
          "start": 1610,
          "end": 1621
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1595,
      "end": 1623
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1639,
        "end": 1644
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
              "start": 1648,
              "end": 1651
            },
            "start": 1646,
            "end": 1651
          },
          "start": 1645,
          "end": 1651
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1653,
        "end": 1656
      },
      "expression": false,
      "start": 1630,
      "end": 1656
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1667,
        "end": 1672
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
                "start": 1676,
                "end": 1677
              },
              "typeArguments": null,
              "start": 1676,
              "end": 1677
            },
            "start": 1674,
            "end": 1677
          },
          "start": 1673,
          "end": 1677
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1658,
      "end": 1679
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1689,
        "end": 1694
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
                "start": 1705,
                "end": 1706
              },
              "typeArguments": null,
              "start": 1698,
              "end": 1706
            },
            "start": 1696,
            "end": 1706
          },
          "start": 1695,
          "end": 1706
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1680,
      "end": 1708
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1727,
        "end": 1732
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
              "start": 1736,
              "end": 1739
            },
            "start": 1734,
            "end": 1739
          },
          "start": 1733,
          "end": 1739
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1741,
        "end": 1744
      },
      "expression": false,
      "start": 1718,
      "end": 1744
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1755,
        "end": 1761
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
                "start": 1765,
                "end": 1766
              },
              "typeArguments": null,
              "start": 1765,
              "end": 1766
            },
            "start": 1763,
            "end": 1766
          },
          "start": 1762,
          "end": 1766
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1746,
      "end": 1768
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1778,
        "end": 1784
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
                "start": 1788,
                "end": 1790
              },
              "typeArguments": null,
              "start": 1788,
              "end": 1790
            },
            "start": 1786,
            "end": 1790
          },
          "start": 1785,
          "end": 1790
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1769,
      "end": 1792
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1808,
        "end": 1814
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
              "start": 1818,
              "end": 1821
            },
            "start": 1816,
            "end": 1821
          },
          "start": 1815,
          "end": 1821
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1823,
        "end": 1826
      },
      "expression": false,
      "start": 1799,
      "end": 1826
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1837,
        "end": 1843
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
                "start": 1847,
                "end": 1848
              },
              "typeArguments": null,
              "start": 1847,
              "end": 1848
            },
            "start": 1845,
            "end": 1848
          },
          "start": 1844,
          "end": 1848
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1828,
      "end": 1850
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1860,
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
                "name": "PB",
                "optional": false,
                "typeAnnotation": null,
                "start": 1870,
                "end": 1872
              },
              "typeArguments": null,
              "start": 1870,
              "end": 1872
            },
            "start": 1868,
            "end": 1872
          },
          "start": 1867,
          "end": 1872
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1851,
      "end": 1874
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1893,
        "end": 1899
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
              "start": 1903,
              "end": 1906
            },
            "start": 1901,
            "end": 1906
          },
          "start": 1900,
          "end": 1906
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1908,
        "end": 1911
      },
      "expression": false,
      "start": 1884,
      "end": 1911
    },
    {
      "type": "TSDeclareFunction",
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 1931,
                "end": 1932
              },
              "typeArguments": null,
              "start": 1931,
              "end": 1932
            },
            "start": 1929,
            "end": 1932
          },
          "start": 1928,
          "end": 1932
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1913,
      "end": 1934
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1944,
        "end": 1949
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
                "start": 1953,
                "end": 1954
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Derived",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1955,
                      "end": 1962
                    },
                    "typeArguments": null,
                    "start": 1955,
                    "end": 1962
                  }
                ],
                "start": 1954,
                "end": 1963
              },
              "start": 1953,
              "end": 1963
            },
            "start": 1951,
            "end": 1963
          },
          "start": 1950,
          "end": 1963
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1935,
      "end": 1965
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1984,
        "end": 1989
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
              "start": 1993,
              "end": 1996
            },
            "start": 1991,
            "end": 1996
          },
          "start": 1990,
          "end": 1996
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1998,
        "end": 2001
      },
      "expression": false,
      "start": 1975,
      "end": 2001
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 2012,
        "end": 2017
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
                "start": 2021,
                "end": 2022
              },
              "typeArguments": null,
              "start": 2021,
              "end": 2022
            },
            "start": 2019,
            "end": 2022
          },
          "start": 2018,
          "end": 2022
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2003,
      "end": 2024
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 2034,
        "end": 2039
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
                "start": 2050,
                "end": 2051
              },
              "typeArguments": null,
              "start": 2043,
              "end": 2051
            },
            "start": 2041,
            "end": 2051
          },
          "start": 2040,
          "end": 2051
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2025,
      "end": 2053
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 2069,
        "end": 2074
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
              "start": 2078,
              "end": 2081
            },
            "start": 2076,
            "end": 2081
          },
          "start": 2075,
          "end": 2081
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2083,
        "end": 2086
      },
      "expression": false,
      "start": 2060,
      "end": 2086
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 2097,
        "end": 2102
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
                "start": 2106,
                "end": 2107
              },
              "typeArguments": null,
              "start": 2106,
              "end": 2107
            },
            "start": 2104,
            "end": 2107
          },
          "start": 2103,
          "end": 2107
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2088,
      "end": 2109
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 2119,
        "end": 2124
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
                "start": 2135,
                "end": 2136
              },
              "typeArguments": null,
              "start": 2128,
              "end": 2136
            },
            "start": 2126,
            "end": 2136
          },
          "start": 2125,
          "end": 2136
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2110,
      "end": 2138
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 2157,
        "end": 2162
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
              "start": 2166,
              "end": 2169
            },
            "start": 2164,
            "end": 2169
          },
          "start": 2163,
          "end": 2169
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2171,
        "end": 2174
      },
      "expression": false,
      "start": 2148,
      "end": 2174
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null,
        "start": 2185,
        "end": 2190
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
                "start": 2194,
                "end": 2195
              },
              "typeArguments": null,
              "start": 2194,
              "end": 2195
            },
            "start": 2192,
            "end": 2195
          },
          "start": 2191,
          "end": 2195
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2176,
      "end": 2197
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null,
        "start": 2207,
        "end": 2212
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
                "start": 2216,
                "end": 2218
              },
              "typeArguments": null,
              "start": 2216,
              "end": 2218
            },
            "start": 2214,
            "end": 2218
          },
          "start": 2213,
          "end": 2218
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2198,
      "end": 2220
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null,
        "start": 2236,
        "end": 2241
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
              "start": 2245,
              "end": 2248
            },
            "start": 2243,
            "end": 2248
          },
          "start": 2242,
          "end": 2248
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2250,
        "end": 2253
      },
      "expression": false,
      "start": 2227,
      "end": 2253
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo16",
        "optional": false,
        "typeAnnotation": null,
        "start": 2264,
        "end": 2269
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
                "start": 2273,
                "end": 2274
              },
              "typeArguments": null,
              "start": 2273,
              "end": 2274
            },
            "start": 2271,
            "end": 2274
          },
          "start": 2270,
          "end": 2274
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2255,
      "end": 2276
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo16",
        "optional": false,
        "typeAnnotation": null,
        "start": 2286,
        "end": 2291
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
                "start": 2295,
                "end": 2297
              },
              "typeArguments": null,
              "start": 2295,
              "end": 2297
            },
            "start": 2293,
            "end": 2297
          },
          "start": 2292,
          "end": 2297
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2277,
      "end": 2299
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo16",
        "optional": false,
        "typeAnnotation": null,
        "start": 2318,
        "end": 2323
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
              "start": 2327,
              "end": 2330
            },
            "start": 2325,
            "end": 2330
          },
          "start": 2324,
          "end": 2330
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2332,
        "end": 2335
      },
      "expression": false,
      "start": 2309,
      "end": 2335
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 44,
  "end": 2336
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
    "value": "Base",
    "start": 50,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 57,
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
    "value": ";",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 70,
    "end": 71
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 72,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 78,
    "end": 85
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 86,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 94,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 101,
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
    "value": ";",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 114,
    "end": 115
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 117,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "A",
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
    "value": "[",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 135,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 144,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 150,
    "end": 151
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 153,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 169,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 171,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 178,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 180,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 189,
    "end": 190
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 192,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 198,
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
    "value": "T",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 211,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 213,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 219,
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
    "value": "T",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 225,
    "end": 226
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 228,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 248,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 250,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 257,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 259,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 268,
    "end": 269
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 271,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "PA",
    "start": 277,
    "end": 279
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 280,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 292,
    "end": 293
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 295,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "PB",
    "start": 301,
    "end": 303
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 304,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 316,
    "end": 317
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 319,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 332,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 334,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 336,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "Base",
    "start": 345,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 351,
    "end": 352
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 353,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "[",
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
    "value": "string",
    "start": 366,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 373,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 375,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 384,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 388,
    "end": 389
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 390,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 395,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 396,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 403,
    "end": 404
  },
  {
    "type": "Null",
    "value": "null",
    "start": 404,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 410,
    "end": 411
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 413,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 422,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 426,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 427,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 428,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 432,
    "end": 433
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 434,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 443,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 447,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 449,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 451,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 452,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 453,
    "end": 454
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 464,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 473,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 477,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 478,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 479,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 481,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 486,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 488,
    "end": 489
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 491,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "foo1b",
    "start": 500,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 505,
    "end": 506
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 506,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 507,
    "end": 508
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 509,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 511,
    "end": 512
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 513,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "foo1b",
    "start": 522,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 527,
    "end": 528
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 529,
    "end": 530
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 531,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 532,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 533,
    "end": 534
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 544,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "foo1b",
    "start": 553,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 558,
    "end": 559
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 559,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 560,
    "end": 561
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 562,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 565,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 567,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 569,
    "end": 570
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 572,
    "end": 580
  },
  {
    "type": "Identifier",
    "value": "foo1c",
    "start": 581,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 586,
    "end": 587
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 588,
    "end": 589
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 590,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 591,
    "end": 592
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 592,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 598,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 599,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 600,
    "end": 601
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 602,
    "end": 610
  },
  {
    "type": "Identifier",
    "value": "foo1c",
    "start": 611,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 616,
    "end": 617
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 617,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 618,
    "end": 619
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 620,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 621,
    "end": 622
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 622,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 628,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 629,
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
    "value": "function",
    "start": 641,
    "end": 649
  },
  {
    "type": "Identifier",
    "value": "foo1c",
    "start": 650,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 655,
    "end": 656
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 656,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 657,
    "end": 658
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 659,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 662,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 664,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 666,
    "end": 667
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 669,
    "end": 677
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 678,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 682,
    "end": 683
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 683,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 684,
    "end": 685
  },
  {
    "type": "Identifier",
    "value": "I",
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
    "value": "foo2",
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
    "type": "Identifier",
    "value": "I",
    "start": 707,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 708,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 709,
    "end": 710
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 720,
    "end": 728
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 729,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 733,
    "end": 734
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 734,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 735,
    "end": 736
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 737,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 740,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 742,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 744,
    "end": 745
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 747,
    "end": 755
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 756,
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
    "value": "x",
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
    "type": "Keyword",
    "value": "typeof",
    "start": 764,
    "end": 770
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 771,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 772,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 773,
    "end": 774
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 775,
    "end": 783
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 784,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 788,
    "end": 789
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 789,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 790,
    "end": 791
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 792,
    "end": 798
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "start": 812,
    "end": 820
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 821,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 825,
    "end": 826
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 826,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 827,
    "end": 828
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 829,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 832,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 834,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 836,
    "end": 837
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 839,
    "end": 847
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 848,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 852,
    "end": 853
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 853,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 854,
    "end": 855
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 856,
    "end": 862
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "value": "foo4",
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
    "type": "Keyword",
    "value": "typeof",
    "start": 884,
    "end": 890
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 891,
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
    "value": "function",
    "start": 904,
    "end": 912
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 913,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 917,
    "end": 918
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 918,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 919,
    "end": 920
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 921,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 924,
    "end": 925
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 926,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 928,
    "end": 929
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 931,
    "end": 939
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 940,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 944,
    "end": 945
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 945,
    "end": 946
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 946,
    "end": 947
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 948,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 949,
    "end": 950
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 950,
    "end": 951
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 952,
    "end": 960
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 961,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 965,
    "end": 966
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 966,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 967,
    "end": 968
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 969,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 970,
    "end": 971
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 971,
    "end": 972
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 979,
    "end": 987
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 988,
    "end": 992
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 992,
    "end": 993
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 993,
    "end": 994
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 994,
    "end": 995
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 996,
    "end": 999
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1001,
    "end": 1002
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1003,
    "end": 1004
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1006,
    "end": 1014
  },
  {
    "type": "Identifier",
    "value": "foo5b",
    "start": 1015,
    "end": 1020
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1021,
    "end": 1022
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1024,
    "end": 1025
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1025,
    "end": 1026
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1028,
    "end": 1036
  },
  {
    "type": "Identifier",
    "value": "foo5b",
    "start": 1037,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1043,
    "end": 1044
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1048,
    "end": 1055
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1055,
    "end": 1056
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1056,
    "end": 1057
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1057,
    "end": 1058
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1065,
    "end": 1073
  },
  {
    "type": "Identifier",
    "value": "foo5b",
    "start": 1074,
    "end": 1079
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1083,
    "end": 1086
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1086,
    "end": 1087
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1088,
    "end": 1089
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1093,
    "end": 1101
  },
  {
    "type": "Identifier",
    "value": "foo5c",
    "start": 1102,
    "end": 1107
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1108,
    "end": 1109
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1113,
    "end": 1114
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1115,
    "end": 1123
  },
  {
    "type": "Identifier",
    "value": "foo5c",
    "start": 1124,
    "end": 1129
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1130,
    "end": 1131
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Identifier",
    "value": "PA",
    "start": 1133,
    "end": 1135
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1135,
    "end": 1136
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1136,
    "end": 1137
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1147,
    "end": 1155
  },
  {
    "type": "Identifier",
    "value": "foo5c",
    "start": 1156,
    "end": 1161
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1161,
    "end": 1162
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1162,
    "end": 1163
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1163,
    "end": 1164
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1165,
    "end": 1168
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1168,
    "end": 1169
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1175,
    "end": 1183
  },
  {
    "type": "Identifier",
    "value": "foo5d",
    "start": 1184,
    "end": 1189
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1189,
    "end": 1190
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1190,
    "end": 1191
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1191,
    "end": 1192
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1193,
    "end": 1194
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1194,
    "end": 1195
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1195,
    "end": 1196
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1197,
    "end": 1205
  },
  {
    "type": "Identifier",
    "value": "foo5d",
    "start": 1206,
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
    "value": "PB",
    "start": 1215,
    "end": 1217
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1217,
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
    "value": "function",
    "start": 1226,
    "end": 1234
  },
  {
    "type": "Identifier",
    "value": "foo5d",
    "start": 1235,
    "end": 1240
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1240,
    "end": 1241
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1241,
    "end": 1242
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1242,
    "end": 1243
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1244,
    "end": 1247
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1247,
    "end": 1248
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1249,
    "end": 1250
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1251,
    "end": 1252
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1254,
    "end": 1262
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 1263,
    "end": 1267
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1267,
    "end": 1268
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1268,
    "end": 1269
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1269,
    "end": 1270
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1272,
    "end": 1273
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1273,
    "end": 1274
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1275,
    "end": 1283
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 1284,
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
    "start": 1302,
    "end": 1310
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 1311,
    "end": 1315
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1315,
    "end": 1316
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1316,
    "end": 1317
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1317,
    "end": 1318
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1319,
    "end": 1322
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1322,
    "end": 1323
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1324,
    "end": 1325
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1326,
    "end": 1327
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1329,
    "end": 1337
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 1338,
    "end": 1342
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1342,
    "end": 1343
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1343,
    "end": 1344
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1344,
    "end": 1345
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1346,
    "end": 1347
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1347,
    "end": 1348
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1348,
    "end": 1349
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1350,
    "end": 1358
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 1359,
    "end": 1363
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1363,
    "end": 1364
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1364,
    "end": 1365
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1365,
    "end": 1366
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1367,
    "end": 1373
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1374,
    "end": 1375
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1375,
    "end": 1376
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1376,
    "end": 1377
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1387,
    "end": 1395
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 1396,
    "end": 1400
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1400,
    "end": 1401
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1401,
    "end": 1402
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1402,
    "end": 1403
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1404,
    "end": 1407
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1407,
    "end": 1408
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1409,
    "end": 1410
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1411,
    "end": 1412
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1414,
    "end": 1422
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 1423,
    "end": 1427
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1427,
    "end": 1428
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1428,
    "end": 1429
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1429,
    "end": 1430
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1431,
    "end": 1432
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1432,
    "end": 1433
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1433,
    "end": 1434
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1435,
    "end": 1443
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 1444,
    "end": 1448
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1448,
    "end": 1449
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1449,
    "end": 1450
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1450,
    "end": 1451
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1452,
    "end": 1453
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1453,
    "end": 1454
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1454,
    "end": 1455
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1465,
    "end": 1473
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 1474,
    "end": 1478
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1478,
    "end": 1479
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1479,
    "end": 1480
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1480,
    "end": 1481
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1482,
    "end": 1485
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1485,
    "end": 1486
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1487,
    "end": 1488
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1489,
    "end": 1490
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1492,
    "end": 1500
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 1501,
    "end": 1505
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1505,
    "end": 1506
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1506,
    "end": 1507
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1507,
    "end": 1508
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1509,
    "end": 1510
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1510,
    "end": 1511
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1511,
    "end": 1512
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1513,
    "end": 1521
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 1522,
    "end": 1526
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1526,
    "end": 1527
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1527,
    "end": 1528
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1528,
    "end": 1529
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1530,
    "end": 1531
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1531,
    "end": 1532
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1532,
    "end": 1536
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1536,
    "end": 1537
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1537,
    "end": 1538
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1538,
    "end": 1539
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1546,
    "end": 1554
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 1555,
    "end": 1559
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
    "value": ":",
    "start": 1561,
    "end": 1562
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1563,
    "end": 1566
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1566,
    "end": 1567
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1568,
    "end": 1569
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1570,
    "end": 1571
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1573,
    "end": 1581
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 1582,
    "end": 1587
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1587,
    "end": 1588
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1588,
    "end": 1589
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1589,
    "end": 1590
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1591,
    "end": 1592
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1592,
    "end": 1593
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1593,
    "end": 1594
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1595,
    "end": 1603
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 1604,
    "end": 1609
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1609,
    "end": 1610
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1610,
    "end": 1611
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1611,
    "end": 1612
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1613,
    "end": 1619
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1620,
    "end": 1621
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1621,
    "end": 1622
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1622,
    "end": 1623
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1630,
    "end": 1638
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 1639,
    "end": 1644
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1644,
    "end": 1645
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1645,
    "end": 1646
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1646,
    "end": 1647
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1648,
    "end": 1651
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1651,
    "end": 1652
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1653,
    "end": 1654
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1655,
    "end": 1656
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1658,
    "end": 1666
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 1667,
    "end": 1672
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1672,
    "end": 1673
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1673,
    "end": 1674
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1674,
    "end": 1675
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1676,
    "end": 1677
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1677,
    "end": 1678
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1678,
    "end": 1679
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1680,
    "end": 1688
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 1689,
    "end": 1694
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1694,
    "end": 1695
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1695,
    "end": 1696
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1696,
    "end": 1697
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1698,
    "end": 1704
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1705,
    "end": 1706
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1706,
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
    "value": "function",
    "start": 1718,
    "end": 1726
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 1727,
    "end": 1732
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1732,
    "end": 1733
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1733,
    "end": 1734
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1734,
    "end": 1735
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1736,
    "end": 1739
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1739,
    "end": 1740
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1741,
    "end": 1742
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1743,
    "end": 1744
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1746,
    "end": 1754
  },
  {
    "type": "Identifier",
    "value": "foo11b",
    "start": 1755,
    "end": 1761
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1761,
    "end": 1762
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1762,
    "end": 1763
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1763,
    "end": 1764
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1765,
    "end": 1766
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1766,
    "end": 1767
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1767,
    "end": 1768
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1769,
    "end": 1777
  },
  {
    "type": "Identifier",
    "value": "foo11b",
    "start": 1778,
    "end": 1784
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1784,
    "end": 1785
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1785,
    "end": 1786
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1786,
    "end": 1787
  },
  {
    "type": "Identifier",
    "value": "PA",
    "start": 1788,
    "end": 1790
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1790,
    "end": 1791
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1791,
    "end": 1792
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1799,
    "end": 1807
  },
  {
    "type": "Identifier",
    "value": "foo11b",
    "start": 1808,
    "end": 1814
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1814,
    "end": 1815
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1815,
    "end": 1816
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1816,
    "end": 1817
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1818,
    "end": 1821
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1821,
    "end": 1822
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1823,
    "end": 1824
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1825,
    "end": 1826
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1828,
    "end": 1836
  },
  {
    "type": "Identifier",
    "value": "foo11c",
    "start": 1837,
    "end": 1843
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1843,
    "end": 1844
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1844,
    "end": 1845
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1845,
    "end": 1846
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1847,
    "end": 1848
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1848,
    "end": 1849
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1849,
    "end": 1850
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1851,
    "end": 1859
  },
  {
    "type": "Identifier",
    "value": "foo11c",
    "start": 1860,
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
    "value": "PB",
    "start": 1870,
    "end": 1872
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1872,
    "end": 1873
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1873,
    "end": 1874
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1884,
    "end": 1892
  },
  {
    "type": "Identifier",
    "value": "foo11c",
    "start": 1893,
    "end": 1899
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1899,
    "end": 1900
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1900,
    "end": 1901
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1901,
    "end": 1902
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1903,
    "end": 1906
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1906,
    "end": 1907
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1908,
    "end": 1909
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1910,
    "end": 1911
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
    "value": "I",
    "start": 1931,
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
    "value": ";",
    "start": 1933,
    "end": 1934
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1935,
    "end": 1943
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 1944,
    "end": 1949
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1949,
    "end": 1950
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1950,
    "end": 1951
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1951,
    "end": 1952
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1953,
    "end": 1954
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1954,
    "end": 1955
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1955,
    "end": 1962
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1962,
    "end": 1963
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1963,
    "end": 1964
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1964,
    "end": 1965
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1975,
    "end": 1983
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 1984,
    "end": 1989
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1989,
    "end": 1990
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1990,
    "end": 1991
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1991,
    "end": 1992
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1993,
    "end": 1996
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1996,
    "end": 1997
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1998,
    "end": 1999
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2000,
    "end": 2001
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2003,
    "end": 2011
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 2012,
    "end": 2017
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2017,
    "end": 2018
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2018,
    "end": 2019
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2019,
    "end": 2020
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 2021,
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
    "value": ";",
    "start": 2023,
    "end": 2024
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2025,
    "end": 2033
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 2034,
    "end": 2039
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2039,
    "end": 2040
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2040,
    "end": 2041
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2041,
    "end": 2042
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2043,
    "end": 2049
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2050,
    "end": 2051
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2051,
    "end": 2052
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2052,
    "end": 2053
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2060,
    "end": 2068
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 2069,
    "end": 2074
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2074,
    "end": 2075
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2075,
    "end": 2076
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2076,
    "end": 2077
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2078,
    "end": 2081
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2081,
    "end": 2082
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2083,
    "end": 2084
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2085,
    "end": 2086
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2088,
    "end": 2096
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 2097,
    "end": 2102
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2102,
    "end": 2103
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2103,
    "end": 2104
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2104,
    "end": 2105
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 2106,
    "end": 2107
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2107,
    "end": 2108
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2108,
    "end": 2109
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2110,
    "end": 2118
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 2119,
    "end": 2124
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2124,
    "end": 2125
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2125,
    "end": 2126
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2126,
    "end": 2127
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2128,
    "end": 2134
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "start": 2148,
    "end": 2156
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 2157,
    "end": 2162
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2162,
    "end": 2163
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2163,
    "end": 2164
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2164,
    "end": 2165
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2166,
    "end": 2169
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2169,
    "end": 2170
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2171,
    "end": 2172
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2173,
    "end": 2174
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2176,
    "end": 2184
  },
  {
    "type": "Identifier",
    "value": "foo15",
    "start": 2185,
    "end": 2190
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2190,
    "end": 2191
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2191,
    "end": 2192
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2192,
    "end": 2193
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 2194,
    "end": 2195
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2195,
    "end": 2196
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2196,
    "end": 2197
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2198,
    "end": 2206
  },
  {
    "type": "Identifier",
    "value": "foo15",
    "start": 2207,
    "end": 2212
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2212,
    "end": 2213
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2213,
    "end": 2214
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2214,
    "end": 2215
  },
  {
    "type": "Identifier",
    "value": "PA",
    "start": 2216,
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
    "start": 2227,
    "end": 2235
  },
  {
    "type": "Identifier",
    "value": "foo15",
    "start": 2236,
    "end": 2241
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2241,
    "end": 2242
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2242,
    "end": 2243
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2243,
    "end": 2244
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2245,
    "end": 2248
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2248,
    "end": 2249
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2250,
    "end": 2251
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2252,
    "end": 2253
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2255,
    "end": 2263
  },
  {
    "type": "Identifier",
    "value": "foo16",
    "start": 2264,
    "end": 2269
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2269,
    "end": 2270
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2270,
    "end": 2271
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2271,
    "end": 2272
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 2273,
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
    "value": ";",
    "start": 2275,
    "end": 2276
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2277,
    "end": 2285
  },
  {
    "type": "Identifier",
    "value": "foo16",
    "start": 2286,
    "end": 2291
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2291,
    "end": 2292
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2292,
    "end": 2293
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2293,
    "end": 2294
  },
  {
    "type": "Identifier",
    "value": "PB",
    "start": 2295,
    "end": 2297
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "function",
    "start": 2309,
    "end": 2317
  },
  {
    "type": "Identifier",
    "value": "foo16",
    "start": 2318,
    "end": 2323
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2323,
    "end": 2324
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2324,
    "end": 2325
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2325,
    "end": 2326
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2327,
    "end": 2330
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2330,
    "end": 2331
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2332,
    "end": 2333
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2334,
    "end": 2335
  }
]
```
