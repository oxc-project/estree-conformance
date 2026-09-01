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
                    "type": "TSNumberKeyword",
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
                    "type": "TSNumberKeyword",
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
                    "type": "TSNumberKeyword",
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
                    "type": "TSNumberKeyword",
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
                            "type": "TSNumberKeyword",
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
                            "type": "TSNumberKeyword",
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
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 390,
                  "end": 391
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
                      "start": 394,
                      "end": 401
                    },
                    "typeArguments": null,
                    "start": 394,
                    "end": 401
                  },
                  "expression": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 402,
                    "end": 406
                  },
                  "start": 393,
                  "end": 406
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 390,
                "end": 406
              }
            ],
            "start": 388,
            "end": 408
          },
          "definite": false,
          "start": 357,
          "end": 408
        }
      ],
      "declare": false,
      "start": 353,
      "end": 409
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 420,
        "end": 424
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 428,
                "end": 429
              },
              "typeArguments": null,
              "start": 428,
              "end": 429
            },
            "start": 426,
            "end": 429
          },
          "start": 425,
          "end": 429
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 411,
      "end": 431
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 441,
        "end": 445
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 449,
                "end": 450
              },
              "typeArguments": null,
              "start": 449,
              "end": 450
            },
            "start": 447,
            "end": 450
          },
          "start": 446,
          "end": 450
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 432,
      "end": 452
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 471,
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
      "start": 462,
      "end": 487
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
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
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 507,
                "end": 508
              },
              "typeArguments": null,
              "start": 507,
              "end": 508
            },
            "start": 505,
            "end": 508
          },
          "start": 504,
          "end": 508
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 489,
      "end": 510
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null,
        "start": 520,
        "end": 525
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 529,
                "end": 530
              },
              "typeArguments": null,
              "start": 529,
              "end": 530
            },
            "start": 527,
            "end": 530
          },
          "start": 526,
          "end": 530
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 511,
      "end": 532
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null,
        "start": 551,
        "end": 556
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "start": 560,
              "end": 563
            },
            "start": 558,
            "end": 563
          },
          "start": 557,
          "end": 563
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 565,
        "end": 568
      },
      "expression": false,
      "start": 542,
      "end": 568
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null,
        "start": 579,
        "end": 584
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 588,
                "end": 589
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 590,
                    "end": 596
                  }
                ],
                "start": 589,
                "end": 597
              },
              "start": 588,
              "end": 597
            },
            "start": 586,
            "end": 597
          },
          "start": 585,
          "end": 597
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 570,
      "end": 599
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null,
        "start": 609,
        "end": 614
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 618,
                "end": 619
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 620,
                    "end": 626
                  }
                ],
                "start": 619,
                "end": 627
              },
              "start": 618,
              "end": 627
            },
            "start": 616,
            "end": 627
          },
          "start": 615,
          "end": 627
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 600,
      "end": 629
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null,
        "start": 648,
        "end": 653
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "start": 657,
              "end": 660
            },
            "start": 655,
            "end": 660
          },
          "start": 654,
          "end": 660
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 662,
        "end": 665
      },
      "expression": false,
      "start": 639,
      "end": 665
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 676,
        "end": 680
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 684,
                "end": 685
              },
              "typeArguments": null,
              "start": 684,
              "end": 685
            },
            "start": 682,
            "end": 685
          },
          "start": 681,
          "end": 685
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 667,
      "end": 687
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 697,
        "end": 701
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 705,
                "end": 706
              },
              "typeArguments": null,
              "start": 705,
              "end": 706
            },
            "start": 703,
            "end": 706
          },
          "start": 702,
          "end": 706
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 688,
      "end": 708
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 727,
        "end": 731
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "start": 735,
              "end": 738
            },
            "start": 733,
            "end": 738
          },
          "start": 732,
          "end": 738
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 740,
        "end": 743
      },
      "expression": false,
      "start": 718,
      "end": 743
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 754,
        "end": 758
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 769,
                "end": 770
              },
              "typeArguments": null,
              "start": 762,
              "end": 770
            },
            "start": 760,
            "end": 770
          },
          "start": 759,
          "end": 770
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 745,
      "end": 772
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 782,
        "end": 786
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 797,
                "end": 798
              },
              "typeArguments": null,
              "start": 790,
              "end": 798
            },
            "start": 788,
            "end": 798
          },
          "start": 787,
          "end": 798
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 773,
      "end": 800
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 819,
        "end": 823
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "start": 827,
              "end": 830
            },
            "start": 825,
            "end": 830
          },
          "start": 824,
          "end": 830
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 832,
        "end": 835
      },
      "expression": false,
      "start": 810,
      "end": 835
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 846,
        "end": 850
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 861,
                "end": 862
              },
              "typeArguments": null,
              "start": 854,
              "end": 862
            },
            "start": 852,
            "end": 862
          },
          "start": 851,
          "end": 862
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 837,
      "end": 864
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 874,
        "end": 878
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 889,
                "end": 890
              },
              "typeArguments": null,
              "start": 882,
              "end": 890
            },
            "start": 880,
            "end": 890
          },
          "start": 879,
          "end": 890
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 865,
      "end": 892
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 911,
        "end": 915
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "start": 919,
              "end": 922
            },
            "start": 917,
            "end": 922
          },
          "start": 916,
          "end": 922
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 924,
        "end": 927
      },
      "expression": false,
      "start": 902,
      "end": 927
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 938,
        "end": 942
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 946,
                "end": 947
              },
              "typeArguments": null,
              "start": 946,
              "end": 947
            },
            "start": 944,
            "end": 947
          },
          "start": 943,
          "end": 947
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 929,
      "end": 949
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 959,
        "end": 963
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 967,
                "end": 968
              },
              "typeArguments": null,
              "start": 967,
              "end": 968
            },
            "start": 965,
            "end": 968
          },
          "start": 964,
          "end": 968
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 950,
      "end": 970
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 986,
        "end": 990
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "start": 994,
              "end": 997
            },
            "start": 992,
            "end": 997
          },
          "start": 991,
          "end": 997
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 999,
        "end": 1002
      },
      "expression": false,
      "start": 977,
      "end": 1002
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1013,
        "end": 1018
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 1022,
                "end": 1023
              },
              "typeArguments": null,
              "start": 1022,
              "end": 1023
            },
            "start": 1020,
            "end": 1023
          },
          "start": 1019,
          "end": 1023
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1004,
      "end": 1025
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1035,
        "end": 1040
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 1044,
                "end": 1045
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
                      "start": 1046,
                      "end": 1053
                    },
                    "typeArguments": null,
                    "start": 1046,
                    "end": 1053
                  }
                ],
                "start": 1045,
                "end": 1054
              },
              "start": 1044,
              "end": 1054
            },
            "start": 1042,
            "end": 1054
          },
          "start": 1041,
          "end": 1054
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1026,
      "end": 1056
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1072,
        "end": 1077
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "start": 1081,
              "end": 1084
            },
            "start": 1079,
            "end": 1084
          },
          "start": 1078,
          "end": 1084
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1086,
        "end": 1089
      },
      "expression": false,
      "start": 1063,
      "end": 1089
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1100,
        "end": 1105
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 1109,
                "end": 1110
              },
              "typeArguments": null,
              "start": 1109,
              "end": 1110
            },
            "start": 1107,
            "end": 1110
          },
          "start": 1106,
          "end": 1110
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1091,
      "end": 1112
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1122,
        "end": 1127
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 1131,
                "end": 1133
              },
              "typeArguments": null,
              "start": 1131,
              "end": 1133
            },
            "start": 1129,
            "end": 1133
          },
          "start": 1128,
          "end": 1133
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1113,
      "end": 1135
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1154,
        "end": 1159
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "start": 1163,
              "end": 1166
            },
            "start": 1161,
            "end": 1166
          },
          "start": 1160,
          "end": 1166
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1168,
        "end": 1171
      },
      "expression": false,
      "start": 1145,
      "end": 1171
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5d",
        "optional": false,
        "typeAnnotation": null,
        "start": 1182,
        "end": 1187
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 1191,
                "end": 1192
              },
              "typeArguments": null,
              "start": 1191,
              "end": 1192
            },
            "start": 1189,
            "end": 1192
          },
          "start": 1188,
          "end": 1192
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1173,
      "end": 1194
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5d",
        "optional": false,
        "typeAnnotation": null,
        "start": 1204,
        "end": 1209
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 1213,
                "end": 1215
              },
              "typeArguments": null,
              "start": 1213,
              "end": 1215
            },
            "start": 1211,
            "end": 1215
          },
          "start": 1210,
          "end": 1215
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1195,
      "end": 1217
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5d",
        "optional": false,
        "typeAnnotation": null,
        "start": 1233,
        "end": 1238
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "start": 1242,
              "end": 1245
            },
            "start": 1240,
            "end": 1245
          },
          "start": 1239,
          "end": 1245
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1247,
        "end": 1250
      },
      "expression": false,
      "start": 1224,
      "end": 1250
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1261,
        "end": 1265
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 1269,
                "end": 1270
              },
              "typeArguments": null,
              "start": 1269,
              "end": 1270
            },
            "start": 1267,
            "end": 1270
          },
          "start": 1266,
          "end": 1270
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1252,
      "end": 1272
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1282,
        "end": 1286
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 1290,
                "end": 1291
              },
              "typeArguments": null,
              "start": 1290,
              "end": 1291
            },
            "start": 1288,
            "end": 1291
          },
          "start": 1287,
          "end": 1291
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1273,
      "end": 1293
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1309,
        "end": 1313
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "start": 1317,
              "end": 1320
            },
            "start": 1315,
            "end": 1320
          },
          "start": 1314,
          "end": 1320
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1322,
        "end": 1325
      },
      "expression": false,
      "start": 1300,
      "end": 1325
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1336,
        "end": 1340
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 1344,
                "end": 1345
              },
              "typeArguments": null,
              "start": 1344,
              "end": 1345
            },
            "start": 1342,
            "end": 1345
          },
          "start": 1341,
          "end": 1345
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1327,
      "end": 1347
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1357,
        "end": 1361
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 1372,
                "end": 1373
              },
              "typeArguments": null,
              "start": 1365,
              "end": 1373
            },
            "start": 1363,
            "end": 1373
          },
          "start": 1362,
          "end": 1373
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1348,
      "end": 1375
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1394,
        "end": 1398
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "start": 1402,
              "end": 1405
            },
            "start": 1400,
            "end": 1405
          },
          "start": 1399,
          "end": 1405
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1407,
        "end": 1410
      },
      "expression": false,
      "start": 1385,
      "end": 1410
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1421,
        "end": 1425
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 1429,
                "end": 1430
              },
              "typeArguments": null,
              "start": 1429,
              "end": 1430
            },
            "start": 1427,
            "end": 1430
          },
          "start": 1426,
          "end": 1430
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1412,
      "end": 1432
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1442,
        "end": 1446
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 1450,
                "end": 1451
              },
              "typeArguments": null,
              "start": 1450,
              "end": 1451
            },
            "start": 1448,
            "end": 1451
          },
          "start": 1447,
          "end": 1451
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1433,
      "end": 1453
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1472,
        "end": 1476
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "start": 1480,
              "end": 1483
            },
            "start": 1478,
            "end": 1483
          },
          "start": 1477,
          "end": 1483
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1485,
        "end": 1488
      },
      "expression": false,
      "start": 1463,
      "end": 1488
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1499,
        "end": 1503
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 1507,
                "end": 1508
              },
              "typeArguments": null,
              "start": 1507,
              "end": 1508
            },
            "start": 1505,
            "end": 1508
          },
          "start": 1504,
          "end": 1508
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1490,
      "end": 1510
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1520,
        "end": 1524
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 1528,
                "end": 1529
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
                      "start": 1530,
                      "end": 1534
                    },
                    "typeArguments": null,
                    "start": 1530,
                    "end": 1534
                  }
                ],
                "start": 1529,
                "end": 1535
              },
              "start": 1528,
              "end": 1535
            },
            "start": 1526,
            "end": 1535
          },
          "start": 1525,
          "end": 1535
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1511,
      "end": 1537
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1553,
        "end": 1557
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "start": 1561,
              "end": 1564
            },
            "start": 1559,
            "end": 1564
          },
          "start": 1558,
          "end": 1564
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1566,
        "end": 1569
      },
      "expression": false,
      "start": 1544,
      "end": 1569
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1580,
        "end": 1585
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 1589,
                "end": 1590
              },
              "typeArguments": null,
              "start": 1589,
              "end": 1590
            },
            "start": 1587,
            "end": 1590
          },
          "start": 1586,
          "end": 1590
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1571,
      "end": 1592
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1602,
        "end": 1607
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 1618,
                "end": 1619
              },
              "typeArguments": null,
              "start": 1611,
              "end": 1619
            },
            "start": 1609,
            "end": 1619
          },
          "start": 1608,
          "end": 1619
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1593,
      "end": 1621
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1637,
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
              "type": "TSAnyKeyword",
              "start": 1646,
              "end": 1649
            },
            "start": 1644,
            "end": 1649
          },
          "start": 1643,
          "end": 1649
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1651,
        "end": 1654
      },
      "expression": false,
      "start": 1628,
      "end": 1654
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1665,
        "end": 1670
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 1674,
                "end": 1675
              },
              "typeArguments": null,
              "start": 1674,
              "end": 1675
            },
            "start": 1672,
            "end": 1675
          },
          "start": 1671,
          "end": 1675
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1656,
      "end": 1677
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1687,
        "end": 1692
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 1703,
                "end": 1704
              },
              "typeArguments": null,
              "start": 1696,
              "end": 1704
            },
            "start": 1694,
            "end": 1704
          },
          "start": 1693,
          "end": 1704
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1678,
      "end": 1706
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1725,
        "end": 1730
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "start": 1734,
              "end": 1737
            },
            "start": 1732,
            "end": 1737
          },
          "start": 1731,
          "end": 1737
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1739,
        "end": 1742
      },
      "expression": false,
      "start": 1716,
      "end": 1742
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1753,
        "end": 1759
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 1763,
                "end": 1764
              },
              "typeArguments": null,
              "start": 1763,
              "end": 1764
            },
            "start": 1761,
            "end": 1764
          },
          "start": 1760,
          "end": 1764
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1744,
      "end": 1766
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11b",
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
                "name": "PA",
                "optional": false,
                "typeAnnotation": null,
                "start": 1786,
                "end": 1788
              },
              "typeArguments": null,
              "start": 1786,
              "end": 1788
            },
            "start": 1784,
            "end": 1788
          },
          "start": 1783,
          "end": 1788
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1767,
      "end": 1790
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1806,
        "end": 1812
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "start": 1816,
              "end": 1819
            },
            "start": 1814,
            "end": 1819
          },
          "start": 1813,
          "end": 1819
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1821,
        "end": 1824
      },
      "expression": false,
      "start": 1797,
      "end": 1824
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1835,
        "end": 1841
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 1845,
                "end": 1846
              },
              "typeArguments": null,
              "start": 1845,
              "end": 1846
            },
            "start": 1843,
            "end": 1846
          },
          "start": 1842,
          "end": 1846
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1826,
      "end": 1848
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1858,
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
                "name": "PB",
                "optional": false,
                "typeAnnotation": null,
                "start": 1868,
                "end": 1870
              },
              "typeArguments": null,
              "start": 1868,
              "end": 1870
            },
            "start": 1866,
            "end": 1870
          },
          "start": 1865,
          "end": 1870
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1849,
      "end": 1872
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1891,
        "end": 1897
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "start": 1901,
              "end": 1904
            },
            "start": 1899,
            "end": 1904
          },
          "start": 1898,
          "end": 1904
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1906,
        "end": 1909
      },
      "expression": false,
      "start": 1882,
      "end": 1909
    },
    {
      "type": "TSDeclareFunction",
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 1929,
                "end": 1930
              },
              "typeArguments": null,
              "start": 1929,
              "end": 1930
            },
            "start": 1927,
            "end": 1930
          },
          "start": 1926,
          "end": 1930
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1911,
      "end": 1932
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1942,
        "end": 1947
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 1951,
                "end": 1952
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
                      "start": 1953,
                      "end": 1960
                    },
                    "typeArguments": null,
                    "start": 1953,
                    "end": 1960
                  }
                ],
                "start": 1952,
                "end": 1961
              },
              "start": 1951,
              "end": 1961
            },
            "start": 1949,
            "end": 1961
          },
          "start": 1948,
          "end": 1961
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1933,
      "end": 1963
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1982,
        "end": 1987
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "start": 1991,
              "end": 1994
            },
            "start": 1989,
            "end": 1994
          },
          "start": 1988,
          "end": 1994
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1996,
        "end": 1999
      },
      "expression": false,
      "start": 1973,
      "end": 1999
    },
    {
      "type": "TSDeclareFunction",
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 2019,
                "end": 2020
              },
              "typeArguments": null,
              "start": 2019,
              "end": 2020
            },
            "start": 2017,
            "end": 2020
          },
          "start": 2016,
          "end": 2020
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2001,
      "end": 2022
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 2032,
        "end": 2037
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 2048,
                "end": 2049
              },
              "typeArguments": null,
              "start": 2041,
              "end": 2049
            },
            "start": 2039,
            "end": 2049
          },
          "start": 2038,
          "end": 2049
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2023,
      "end": 2051
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 2067,
        "end": 2072
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "start": 2076,
              "end": 2079
            },
            "start": 2074,
            "end": 2079
          },
          "start": 2073,
          "end": 2079
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2081,
        "end": 2084
      },
      "expression": false,
      "start": 2058,
      "end": 2084
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 2095,
        "end": 2100
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 2104,
                "end": 2105
              },
              "typeArguments": null,
              "start": 2104,
              "end": 2105
            },
            "start": 2102,
            "end": 2105
          },
          "start": 2101,
          "end": 2105
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2086,
      "end": 2107
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 2117,
        "end": 2122
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 2133,
                "end": 2134
              },
              "typeArguments": null,
              "start": 2126,
              "end": 2134
            },
            "start": 2124,
            "end": 2134
          },
          "start": 2123,
          "end": 2134
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2108,
      "end": 2136
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 2155,
        "end": 2160
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "start": 2164,
              "end": 2167
            },
            "start": 2162,
            "end": 2167
          },
          "start": 2161,
          "end": 2167
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2169,
        "end": 2172
      },
      "expression": false,
      "start": 2146,
      "end": 2172
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null,
        "start": 2183,
        "end": 2188
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 2192,
                "end": 2193
              },
              "typeArguments": null,
              "start": 2192,
              "end": 2193
            },
            "start": 2190,
            "end": 2193
          },
          "start": 2189,
          "end": 2193
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2174,
      "end": 2195
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null,
        "start": 2205,
        "end": 2210
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 2214,
                "end": 2216
              },
              "typeArguments": null,
              "start": 2214,
              "end": 2216
            },
            "start": 2212,
            "end": 2216
          },
          "start": 2211,
          "end": 2216
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2196,
      "end": 2218
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null,
        "start": 2234,
        "end": 2239
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "start": 2243,
              "end": 2246
            },
            "start": 2241,
            "end": 2246
          },
          "start": 2240,
          "end": 2246
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2248,
        "end": 2251
      },
      "expression": false,
      "start": 2225,
      "end": 2251
    },
    {
      "type": "TSDeclareFunction",
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 2271,
                "end": 2272
              },
              "typeArguments": null,
              "start": 2271,
              "end": 2272
            },
            "start": 2269,
            "end": 2272
          },
          "start": 2268,
          "end": 2272
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2253,
      "end": 2274
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo16",
        "optional": false,
        "typeAnnotation": null,
        "start": 2284,
        "end": 2289
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "start": 2293,
                "end": 2295
              },
              "typeArguments": null,
              "start": 2293,
              "end": 2295
            },
            "start": 2291,
            "end": 2295
          },
          "start": 2290,
          "end": 2295
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2275,
      "end": 2297
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo16",
        "optional": false,
        "typeAnnotation": null,
        "start": 2316,
        "end": 2321
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "start": 2325,
              "end": 2328
            },
            "start": 2323,
            "end": 2328
          },
          "start": 2322,
          "end": 2328
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2330,
        "end": 2333
      },
      "expression": false,
      "start": 2307,
      "end": 2333
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 44,
  "end": 2334
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
    "value": "number",
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
    "value": "number",
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
    "value": "number",
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
    "value": "number",
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
    "value": "number",
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
    "value": "number",
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
    "type": "Numeric",
    "value": "0",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 393,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 394,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 401,
    "end": 402
  },
  {
    "type": "Null",
    "value": "null",
    "start": 402,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 408,
    "end": 409
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 411,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 420,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 424,
    "end": 425
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 426,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 428,
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
    "value": ";",
    "start": 430,
    "end": 431
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 432,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 441,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 445,
    "end": 446
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 447,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 450,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 451,
    "end": 452
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 462,
    "end": 470
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 471,
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
    "value": "foo1b",
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
    "value": "B",
    "start": 507,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 508,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 509,
    "end": 510
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 511,
    "end": 519
  },
  {
    "type": "Identifier",
    "value": "foo1b",
    "start": 520,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 525,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 526,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 527,
    "end": 528
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 529,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 530,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 531,
    "end": 532
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 542,
    "end": 550
  },
  {
    "type": "Identifier",
    "value": "foo1b",
    "start": 551,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 556,
    "end": 557
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 557,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 558,
    "end": 559
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 560,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 563,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 565,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 567,
    "end": 568
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 570,
    "end": 578
  },
  {
    "type": "Identifier",
    "value": "foo1c",
    "start": 579,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 584,
    "end": 585
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 585,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 586,
    "end": 587
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 588,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 589,
    "end": 590
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 590,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 596,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 597,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 598,
    "end": 599
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 600,
    "end": 608
  },
  {
    "type": "Identifier",
    "value": "foo1c",
    "start": 609,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 614,
    "end": 615
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 615,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 616,
    "end": 617
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 618,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 619,
    "end": 620
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 620,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 626,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 627,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 628,
    "end": 629
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 639,
    "end": 647
  },
  {
    "type": "Identifier",
    "value": "foo1c",
    "start": 648,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 653,
    "end": 654
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 654,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 655,
    "end": 656
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 657,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 660,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 662,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 664,
    "end": 665
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 667,
    "end": 675
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 676,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 680,
    "end": 681
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 681,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 682,
    "end": 683
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 684,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 685,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 686,
    "end": 687
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 688,
    "end": 696
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 697,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 701,
    "end": 702
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 702,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 703,
    "end": 704
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 705,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 706,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 707,
    "end": 708
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 718,
    "end": 726
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 727,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 731,
    "end": 732
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 732,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 733,
    "end": 734
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 735,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 738,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 740,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 742,
    "end": 743
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 745,
    "end": 753
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 754,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 758,
    "end": 759
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 759,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 760,
    "end": 761
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 762,
    "end": 768
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 769,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 770,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 771,
    "end": 772
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 773,
    "end": 781
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 782,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 786,
    "end": 787
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 787,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 788,
    "end": 789
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 790,
    "end": 796
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 797,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 798,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 799,
    "end": 800
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 810,
    "end": 818
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 819,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 823,
    "end": 824
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 824,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 825,
    "end": 826
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 827,
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
    "value": "{",
    "start": 832,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 834,
    "end": 835
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 837,
    "end": 845
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 846,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 850,
    "end": 851
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 851,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 852,
    "end": 853
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 854,
    "end": 860
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 861,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 862,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 863,
    "end": 864
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 865,
    "end": 873
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 874,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 878,
    "end": 879
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 879,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 880,
    "end": 881
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 882,
    "end": 888
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 889,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 890,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 891,
    "end": 892
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 902,
    "end": 910
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 911,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 915,
    "end": 916
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 916,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 917,
    "end": 918
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 919,
    "end": 922
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 922,
    "end": 923
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 924,
    "end": 925
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 926,
    "end": 927
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 929,
    "end": 937
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 938,
    "end": 942
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 942,
    "end": 943
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 943,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 944,
    "end": 945
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 946,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 947,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 948,
    "end": 949
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 950,
    "end": 958
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 959,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 963,
    "end": 964
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 964,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 965,
    "end": 966
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 967,
    "end": 968
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 968,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 969,
    "end": 970
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 977,
    "end": 985
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 986,
    "end": 990
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 990,
    "end": 991
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 991,
    "end": 992
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 992,
    "end": 993
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 994,
    "end": 997
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 997,
    "end": 998
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1001,
    "end": 1002
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1004,
    "end": 1012
  },
  {
    "type": "Identifier",
    "value": "foo5b",
    "start": 1013,
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
    "value": "x",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1024,
    "end": 1025
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1026,
    "end": 1034
  },
  {
    "type": "Identifier",
    "value": "foo5b",
    "start": 1035,
    "end": 1040
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1046,
    "end": 1053
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1053,
    "end": 1054
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1055,
    "end": 1056
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1063,
    "end": 1071
  },
  {
    "type": "Identifier",
    "value": "foo5b",
    "start": 1072,
    "end": 1077
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1078,
    "end": 1079
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1081,
    "end": 1084
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1084,
    "end": 1085
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1086,
    "end": 1087
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1088,
    "end": 1089
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1091,
    "end": 1099
  },
  {
    "type": "Identifier",
    "value": "foo5c",
    "start": 1100,
    "end": 1105
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1105,
    "end": 1106
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1106,
    "end": 1107
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1110,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1113,
    "end": 1121
  },
  {
    "type": "Identifier",
    "value": "foo5c",
    "start": 1122,
    "end": 1127
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1127,
    "end": 1128
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1128,
    "end": 1129
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "Identifier",
    "value": "PA",
    "start": 1131,
    "end": 1133
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1133,
    "end": 1134
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1134,
    "end": 1135
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1145,
    "end": 1153
  },
  {
    "type": "Identifier",
    "value": "foo5c",
    "start": 1154,
    "end": 1159
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1159,
    "end": 1160
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1160,
    "end": 1161
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1161,
    "end": 1162
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1163,
    "end": 1166
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1166,
    "end": 1167
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1168,
    "end": 1169
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1173,
    "end": 1181
  },
  {
    "type": "Identifier",
    "value": "foo5d",
    "start": 1182,
    "end": 1187
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1187,
    "end": 1188
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1188,
    "end": 1189
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1189,
    "end": 1190
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1191,
    "end": 1192
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1192,
    "end": 1193
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1193,
    "end": 1194
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1195,
    "end": 1203
  },
  {
    "type": "Identifier",
    "value": "foo5d",
    "start": 1204,
    "end": 1209
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1209,
    "end": 1210
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1210,
    "end": 1211
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Identifier",
    "value": "PB",
    "start": 1213,
    "end": 1215
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1216,
    "end": 1217
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1224,
    "end": 1232
  },
  {
    "type": "Identifier",
    "value": "foo5d",
    "start": 1233,
    "end": 1238
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1238,
    "end": 1239
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1239,
    "end": 1240
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1240,
    "end": 1241
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1242,
    "end": 1245
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1245,
    "end": 1246
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1247,
    "end": 1248
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1249,
    "end": 1250
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1252,
    "end": 1260
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 1261,
    "end": 1265
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1265,
    "end": 1266
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1267,
    "end": 1268
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1269,
    "end": 1270
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1270,
    "end": 1271
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1273,
    "end": 1281
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 1282,
    "end": 1286
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1286,
    "end": 1287
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1287,
    "end": 1288
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1288,
    "end": 1289
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1290,
    "end": 1291
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1291,
    "end": 1292
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1292,
    "end": 1293
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1300,
    "end": 1308
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 1309,
    "end": 1313
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1313,
    "end": 1314
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1314,
    "end": 1315
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1315,
    "end": 1316
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1317,
    "end": 1320
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1320,
    "end": 1321
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1322,
    "end": 1323
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1324,
    "end": 1325
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1327,
    "end": 1335
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 1336,
    "end": 1340
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1340,
    "end": 1341
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1341,
    "end": 1342
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1342,
    "end": 1343
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1344,
    "end": 1345
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1345,
    "end": 1346
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1346,
    "end": 1347
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1348,
    "end": 1356
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 1357,
    "end": 1361
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1361,
    "end": 1362
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1362,
    "end": 1363
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1363,
    "end": 1364
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1365,
    "end": 1371
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1372,
    "end": 1373
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1373,
    "end": 1374
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1374,
    "end": 1375
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1385,
    "end": 1393
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 1394,
    "end": 1398
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1398,
    "end": 1399
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1399,
    "end": 1400
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1400,
    "end": 1401
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1402,
    "end": 1405
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1405,
    "end": 1406
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1407,
    "end": 1408
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1409,
    "end": 1410
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1412,
    "end": 1420
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 1421,
    "end": 1425
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1425,
    "end": 1426
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1426,
    "end": 1427
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1427,
    "end": 1428
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1429,
    "end": 1430
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1430,
    "end": 1431
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1431,
    "end": 1432
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1433,
    "end": 1441
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 1442,
    "end": 1446
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1446,
    "end": 1447
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1447,
    "end": 1448
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1448,
    "end": 1449
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1450,
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
    "value": ";",
    "start": 1452,
    "end": 1453
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1463,
    "end": 1471
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 1472,
    "end": 1476
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1476,
    "end": 1477
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1477,
    "end": 1478
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1478,
    "end": 1479
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1480,
    "end": 1483
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1483,
    "end": 1484
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1485,
    "end": 1486
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1487,
    "end": 1488
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1490,
    "end": 1498
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 1499,
    "end": 1503
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1503,
    "end": 1504
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1504,
    "end": 1505
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1505,
    "end": 1506
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1507,
    "end": 1508
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1508,
    "end": 1509
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1509,
    "end": 1510
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1511,
    "end": 1519
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 1520,
    "end": 1524
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1524,
    "end": 1525
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1525,
    "end": 1526
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1526,
    "end": 1527
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1528,
    "end": 1529
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1529,
    "end": 1530
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1530,
    "end": 1534
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1534,
    "end": 1535
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1535,
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
    "value": "function",
    "start": 1544,
    "end": 1552
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 1553,
    "end": 1557
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1557,
    "end": 1558
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1558,
    "end": 1559
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1559,
    "end": 1560
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1561,
    "end": 1564
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1564,
    "end": 1565
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1566,
    "end": 1567
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1568,
    "end": 1569
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1571,
    "end": 1579
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 1580,
    "end": 1585
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1585,
    "end": 1586
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1586,
    "end": 1587
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1587,
    "end": 1588
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1589,
    "end": 1590
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "function",
    "start": 1593,
    "end": 1601
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 1602,
    "end": 1607
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1607,
    "end": 1608
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1608,
    "end": 1609
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1609,
    "end": 1610
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1611,
    "end": 1617
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1618,
    "end": 1619
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "function",
    "start": 1628,
    "end": 1636
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 1637,
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
    "type": "Identifier",
    "value": "any",
    "start": 1646,
    "end": 1649
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1649,
    "end": 1650
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1651,
    "end": 1652
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1653,
    "end": 1654
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1656,
    "end": 1664
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 1665,
    "end": 1670
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1670,
    "end": 1671
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1671,
    "end": 1672
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1672,
    "end": 1673
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1674,
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
    "value": ";",
    "start": 1676,
    "end": 1677
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1678,
    "end": 1686
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 1687,
    "end": 1692
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1692,
    "end": 1693
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1693,
    "end": 1694
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1694,
    "end": 1695
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1696,
    "end": 1702
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1703,
    "end": 1704
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1704,
    "end": 1705
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1705,
    "end": 1706
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1716,
    "end": 1724
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 1725,
    "end": 1730
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1730,
    "end": 1731
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1731,
    "end": 1732
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1732,
    "end": 1733
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1734,
    "end": 1737
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1737,
    "end": 1738
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1739,
    "end": 1740
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1741,
    "end": 1742
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1744,
    "end": 1752
  },
  {
    "type": "Identifier",
    "value": "foo11b",
    "start": 1753,
    "end": 1759
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1759,
    "end": 1760
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1760,
    "end": 1761
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1761,
    "end": 1762
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1763,
    "end": 1764
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1764,
    "end": 1765
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1765,
    "end": 1766
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1767,
    "end": 1775
  },
  {
    "type": "Identifier",
    "value": "foo11b",
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
    "value": "PA",
    "start": 1786,
    "end": 1788
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1788,
    "end": 1789
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1789,
    "end": 1790
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1797,
    "end": 1805
  },
  {
    "type": "Identifier",
    "value": "foo11b",
    "start": 1806,
    "end": 1812
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1812,
    "end": 1813
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1813,
    "end": 1814
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1814,
    "end": 1815
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1816,
    "end": 1819
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1819,
    "end": 1820
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1821,
    "end": 1822
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1823,
    "end": 1824
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1826,
    "end": 1834
  },
  {
    "type": "Identifier",
    "value": "foo11c",
    "start": 1835,
    "end": 1841
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1841,
    "end": 1842
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1842,
    "end": 1843
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1843,
    "end": 1844
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1845,
    "end": 1846
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1846,
    "end": 1847
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1847,
    "end": 1848
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1849,
    "end": 1857
  },
  {
    "type": "Identifier",
    "value": "foo11c",
    "start": 1858,
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
    "value": "PB",
    "start": 1868,
    "end": 1870
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1870,
    "end": 1871
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1871,
    "end": 1872
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1882,
    "end": 1890
  },
  {
    "type": "Identifier",
    "value": "foo11c",
    "start": 1891,
    "end": 1897
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1897,
    "end": 1898
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "any",
    "start": 1901,
    "end": 1904
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1904,
    "end": 1905
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1906,
    "end": 1907
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1908,
    "end": 1909
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
    "value": "I",
    "start": 1929,
    "end": 1930
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1930,
    "end": 1931
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1931,
    "end": 1932
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1933,
    "end": 1941
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 1942,
    "end": 1947
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1947,
    "end": 1948
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1948,
    "end": 1949
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1949,
    "end": 1950
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1951,
    "end": 1952
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1952,
    "end": 1953
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1953,
    "end": 1960
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1960,
    "end": 1961
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1961,
    "end": 1962
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1962,
    "end": 1963
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1973,
    "end": 1981
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 1982,
    "end": 1987
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1987,
    "end": 1988
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1988,
    "end": 1989
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1989,
    "end": 1990
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1991,
    "end": 1994
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1994,
    "end": 1995
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1996,
    "end": 1997
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1998,
    "end": 1999
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
    "value": "I",
    "start": 2019,
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
    "value": ";",
    "start": 2021,
    "end": 2022
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2023,
    "end": 2031
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 2032,
    "end": 2037
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2037,
    "end": 2038
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2038,
    "end": 2039
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2039,
    "end": 2040
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2041,
    "end": 2047
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2048,
    "end": 2049
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "function",
    "start": 2058,
    "end": 2066
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 2067,
    "end": 2072
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2072,
    "end": 2073
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2073,
    "end": 2074
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2074,
    "end": 2075
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2076,
    "end": 2079
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2079,
    "end": 2080
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2081,
    "end": 2082
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2083,
    "end": 2084
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2086,
    "end": 2094
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 2095,
    "end": 2100
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2100,
    "end": 2101
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2101,
    "end": 2102
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2102,
    "end": 2103
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 2104,
    "end": 2105
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2105,
    "end": 2106
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2106,
    "end": 2107
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2108,
    "end": 2116
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 2117,
    "end": 2122
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2122,
    "end": 2123
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2123,
    "end": 2124
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2124,
    "end": 2125
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2126,
    "end": 2132
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "start": 2146,
    "end": 2154
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 2155,
    "end": 2160
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2160,
    "end": 2161
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2161,
    "end": 2162
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2162,
    "end": 2163
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2164,
    "end": 2167
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2167,
    "end": 2168
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2169,
    "end": 2170
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2171,
    "end": 2172
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2174,
    "end": 2182
  },
  {
    "type": "Identifier",
    "value": "foo15",
    "start": 2183,
    "end": 2188
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2188,
    "end": 2189
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2189,
    "end": 2190
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2190,
    "end": 2191
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 2192,
    "end": 2193
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2193,
    "end": 2194
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2194,
    "end": 2195
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2196,
    "end": 2204
  },
  {
    "type": "Identifier",
    "value": "foo15",
    "start": 2205,
    "end": 2210
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2210,
    "end": 2211
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2211,
    "end": 2212
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2212,
    "end": 2213
  },
  {
    "type": "Identifier",
    "value": "PA",
    "start": 2214,
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
    "start": 2225,
    "end": 2233
  },
  {
    "type": "Identifier",
    "value": "foo15",
    "start": 2234,
    "end": 2239
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2239,
    "end": 2240
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2240,
    "end": 2241
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2241,
    "end": 2242
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2243,
    "end": 2246
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2246,
    "end": 2247
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2248,
    "end": 2249
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2250,
    "end": 2251
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
    "value": "I",
    "start": 2271,
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
    "value": ";",
    "start": 2273,
    "end": 2274
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2275,
    "end": 2283
  },
  {
    "type": "Identifier",
    "value": "foo16",
    "start": 2284,
    "end": 2289
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2289,
    "end": 2290
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2290,
    "end": 2291
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2291,
    "end": 2292
  },
  {
    "type": "Identifier",
    "value": "PB",
    "start": 2293,
    "end": 2295
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2295,
    "end": 2296
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2296,
    "end": 2297
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2307,
    "end": 2315
  },
  {
    "type": "Identifier",
    "value": "foo16",
    "start": 2316,
    "end": 2321
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2321,
    "end": 2322
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2322,
    "end": 2323
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2323,
    "end": 2324
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2325,
    "end": 2328
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2328,
    "end": 2329
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2330,
    "end": 2331
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2332,
    "end": 2333
  }
]
```
