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
        "start": 67,
        "end": 71
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
              "start": 74,
              "end": 77
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 79,
                "end": 85
              },
              "start": 77,
              "end": 85
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
            "start": 74,
            "end": 86
          }
        ],
        "start": 72,
        "end": 88
      },
      "abstract": false,
      "declare": false,
      "start": 61,
      "end": 88
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
        "start": 95,
        "end": 102
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 111,
        "end": 115
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
              "start": 118,
              "end": 121
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 123,
                "end": 129
              },
              "start": 121,
              "end": 129
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
            "start": 118,
            "end": 130
          }
        ],
        "start": 116,
        "end": 132
      },
      "abstract": false,
      "declare": false,
      "start": 89,
      "end": 132
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived2",
        "optional": false,
        "typeAnnotation": null,
        "start": 139,
        "end": 147
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null,
        "start": 156,
        "end": 163
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
              "name": "baz",
              "optional": false,
              "typeAnnotation": null,
              "start": 166,
              "end": 169
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 166,
            "end": 178
          }
        ],
        "start": 164,
        "end": 180
      },
      "abstract": false,
      "declare": false,
      "start": 133,
      "end": 180
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OtherDerived",
        "optional": false,
        "typeAnnotation": null,
        "start": 187,
        "end": 199
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 208,
        "end": 212
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
              "name": "bing",
              "optional": false,
              "typeAnnotation": null,
              "start": 215,
              "end": 219
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 221,
                "end": 227
              },
              "start": 219,
              "end": 227
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
            "start": 215,
            "end": 228
          }
        ],
        "start": 213,
        "end": 230
      },
      "abstract": false,
      "declare": false,
      "start": 181,
      "end": 230
    },
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
                "type": "TSConstructorType",
                "abstract": false,
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
                        "start": 252,
                        "end": 253
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 252,
                      "end": 253
                    }
                  ],
                  "start": 251,
                  "end": 254
                },
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
                          "start": 258,
                          "end": 259
                        },
                        "typeArguments": null,
                        "start": 258,
                        "end": 259
                      },
                      "start": 256,
                      "end": 259
                    },
                    "start": 255,
                    "end": 259
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 264,
                        "end": 265
                      },
                      "typeArguments": null,
                      "start": 264,
                      "end": 265
                    },
                    "start": 264,
                    "end": 267
                  },
                  "start": 261,
                  "end": 267
                },
                "start": 247,
                "end": 267
              },
              "start": 245,
              "end": 267
            },
            "start": 244,
            "end": 267
          },
          "init": null,
          "definite": false,
          "start": 244,
          "end": 267
        }
      ],
      "declare": true,
      "start": 232,
      "end": 268
    },
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
                "type": "TSConstructorType",
                "abstract": false,
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
                        "start": 290,
                        "end": 291
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 290,
                      "end": 291
                    }
                  ],
                  "start": 289,
                  "end": 292
                },
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
                          "start": 296,
                          "end": 297
                        },
                        "typeArguments": null,
                        "start": 296,
                        "end": 297
                      },
                      "start": 294,
                      "end": 297
                    },
                    "start": 293,
                    "end": 297
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 302,
                      "end": 308
                    },
                    "start": 302,
                    "end": 310
                  },
                  "start": 299,
                  "end": 310
                },
                "start": 285,
                "end": 310
              },
              "start": 283,
              "end": 310
            },
            "start": 281,
            "end": 310
          },
          "init": null,
          "definite": false,
          "start": 281,
          "end": 310
        }
      ],
      "declare": true,
      "start": 269,
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
            "name": "a3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
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
                        "start": 333,
                        "end": 334
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 333,
                      "end": 334
                    }
                  ],
                  "start": 332,
                  "end": 335
                },
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
                          "start": 339,
                          "end": 340
                        },
                        "typeArguments": null,
                        "start": 339,
                        "end": 340
                      },
                      "start": 337,
                      "end": 340
                    },
                    "start": 336,
                    "end": 340
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 345,
                    "end": 349
                  },
                  "start": 342,
                  "end": 349
                },
                "start": 328,
                "end": 349
              },
              "start": 326,
              "end": 349
            },
            "start": 324,
            "end": 349
          },
          "init": null,
          "definite": false,
          "start": 324,
          "end": 349
        }
      ],
      "declare": true,
      "start": 312,
      "end": 350
    },
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
                "type": "TSConstructorType",
                "abstract": false,
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
                        "start": 372,
                        "end": 373
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 372,
                      "end": 373
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 375,
                        "end": 376
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 375,
                      "end": 376
                    }
                  ],
                  "start": 371,
                  "end": 377
                },
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
                          "start": 381,
                          "end": 382
                        },
                        "typeArguments": null,
                        "start": 381,
                        "end": 382
                      },
                      "start": 379,
                      "end": 382
                    },
                    "start": 378,
                    "end": 382
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 387,
                          "end": 388
                        },
                        "typeArguments": null,
                        "start": 387,
                        "end": 388
                      },
                      "start": 385,
                      "end": 388
                    },
                    "start": 384,
                    "end": 388
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 393,
                    "end": 399
                  },
                  "start": 390,
                  "end": 399
                },
                "start": 367,
                "end": 399
              },
              "start": 365,
              "end": 399
            },
            "start": 363,
            "end": 399
          },
          "init": null,
          "definite": false,
          "start": 363,
          "end": 399
        }
      ],
      "declare": true,
      "start": 351,
      "end": 400
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
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
                        "start": 422,
                        "end": 423
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 422,
                      "end": 423
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 425,
                        "end": 426
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 425,
                      "end": 426
                    }
                  ],
                  "start": 421,
                  "end": 427
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSConstructorType",
                        "abstract": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arg",
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
                                  "start": 441,
                                  "end": 442
                                },
                                "typeArguments": null,
                                "start": 441,
                                "end": 442
                              },
                              "start": 439,
                              "end": 442
                            },
                            "start": 436,
                            "end": 442
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 447,
                              "end": 448
                            },
                            "typeArguments": null,
                            "start": 447,
                            "end": 448
                          },
                          "start": 444,
                          "end": 448
                        },
                        "start": 431,
                        "end": 448
                      },
                      "start": 429,
                      "end": 448
                    },
                    "start": 428,
                    "end": 448
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
                      "start": 453,
                      "end": 454
                    },
                    "typeArguments": null,
                    "start": 453,
                    "end": 454
                  },
                  "start": 450,
                  "end": 454
                },
                "start": 417,
                "end": 454
              },
              "start": 415,
              "end": 454
            },
            "start": 413,
            "end": 454
          },
          "init": null,
          "definite": false,
          "start": 413,
          "end": 454
        }
      ],
      "declare": true,
      "start": 401,
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
            "name": "a6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
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
                        "start": 477,
                        "end": 478
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 487,
                          "end": 491
                        },
                        "typeArguments": null,
                        "start": 487,
                        "end": 491
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 477,
                      "end": 491
                    }
                  ],
                  "start": 476,
                  "end": 492
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSConstructorType",
                        "abstract": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arg",
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
                                  "start": 506,
                                  "end": 507
                                },
                                "typeArguments": null,
                                "start": 506,
                                "end": 507
                              },
                              "start": 504,
                              "end": 507
                            },
                            "start": 501,
                            "end": 507
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Derived",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 512,
                              "end": 519
                            },
                            "typeArguments": null,
                            "start": 512,
                            "end": 519
                          },
                          "start": 509,
                          "end": 519
                        },
                        "start": 496,
                        "end": 519
                      },
                      "start": 494,
                      "end": 519
                    },
                    "start": 493,
                    "end": 519
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
                      "start": 524,
                      "end": 525
                    },
                    "typeArguments": null,
                    "start": 524,
                    "end": 525
                  },
                  "start": 521,
                  "end": 525
                },
                "start": 472,
                "end": 525
              },
              "start": 470,
              "end": 525
            },
            "start": 468,
            "end": 525
          },
          "init": null,
          "definite": false,
          "start": 468,
          "end": 525
        }
      ],
      "declare": true,
      "start": 456,
      "end": 526
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a11",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
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
                        "start": 549,
                        "end": 550
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 549,
                      "end": 550
                    }
                  ],
                  "start": 548,
                  "end": 551
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
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
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 557,
                              "end": 560
                            },
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
                                  "start": 562,
                                  "end": 563
                                },
                                "typeArguments": null,
                                "start": 562,
                                "end": 563
                              },
                              "start": 560,
                              "end": 563
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 557,
                            "end": 563
                          }
                        ],
                        "start": 555,
                        "end": 565
                      },
                      "start": 553,
                      "end": 565
                    },
                    "start": 552,
                    "end": 565
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
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
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 572,
                              "end": 575
                            },
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
                                  "start": 577,
                                  "end": 578
                                },
                                "typeArguments": null,
                                "start": 577,
                                "end": 578
                              },
                              "start": 575,
                              "end": 578
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 572,
                            "end": 579
                          },
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "bar",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 580,
                              "end": 583
                            },
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
                                  "start": 585,
                                  "end": 586
                                },
                                "typeArguments": null,
                                "start": 585,
                                "end": 586
                              },
                              "start": 583,
                              "end": 586
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 580,
                            "end": 586
                          }
                        ],
                        "start": 570,
                        "end": 588
                      },
                      "start": 568,
                      "end": 588
                    },
                    "start": 567,
                    "end": 588
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 593,
                      "end": 597
                    },
                    "typeArguments": null,
                    "start": 593,
                    "end": 597
                  },
                  "start": 590,
                  "end": 597
                },
                "start": 544,
                "end": 597
              },
              "start": 542,
              "end": 597
            },
            "start": 539,
            "end": 597
          },
          "init": null,
          "definite": false,
          "start": 539,
          "end": 597
        }
      ],
      "declare": true,
      "start": 527,
      "end": 598
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a15",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
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
                        "start": 621,
                        "end": 622
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 621,
                      "end": 622
                    }
                  ],
                  "start": 620,
                  "end": 623
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
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
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 629,
                              "end": 630
                            },
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
                                  "start": 632,
                                  "end": 633
                                },
                                "typeArguments": null,
                                "start": 632,
                                "end": 633
                              },
                              "start": 630,
                              "end": 633
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 629,
                            "end": 634
                          },
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 635,
                              "end": 636
                            },
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
                                  "start": 638,
                                  "end": 639
                                },
                                "typeArguments": null,
                                "start": 638,
                                "end": 639
                              },
                              "start": 636,
                              "end": 639
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 635,
                            "end": 639
                          }
                        ],
                        "start": 627,
                        "end": 641
                      },
                      "start": 625,
                      "end": 641
                    },
                    "start": 624,
                    "end": 641
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 646,
                        "end": 647
                      },
                      "typeArguments": null,
                      "start": 646,
                      "end": 647
                    },
                    "start": 646,
                    "end": 649
                  },
                  "start": 643,
                  "end": 649
                },
                "start": 616,
                "end": 649
              },
              "start": 614,
              "end": 649
            },
            "start": 611,
            "end": 649
          },
          "init": null,
          "definite": false,
          "start": 611,
          "end": 649
        }
      ],
      "declare": true,
      "start": 599,
      "end": 650
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a16",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
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
                        "start": 673,
                        "end": 674
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 683,
                          "end": 687
                        },
                        "typeArguments": null,
                        "start": 683,
                        "end": 687
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 673,
                      "end": 687
                    }
                  ],
                  "start": 672,
                  "end": 688
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
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
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 694,
                              "end": 695
                            },
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
                                  "start": 697,
                                  "end": 698
                                },
                                "typeArguments": null,
                                "start": 697,
                                "end": 698
                              },
                              "start": 695,
                              "end": 698
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 694,
                            "end": 699
                          },
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 700,
                              "end": 701
                            },
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
                                  "start": 703,
                                  "end": 704
                                },
                                "typeArguments": null,
                                "start": 703,
                                "end": 704
                              },
                              "start": 701,
                              "end": 704
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 700,
                            "end": 704
                          }
                        ],
                        "start": 692,
                        "end": 706
                      },
                      "start": 690,
                      "end": 706
                    },
                    "start": 689,
                    "end": 706
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 711,
                        "end": 712
                      },
                      "typeArguments": null,
                      "start": 711,
                      "end": 712
                    },
                    "start": 711,
                    "end": 714
                  },
                  "start": 708,
                  "end": 714
                },
                "start": 668,
                "end": 714
              },
              "start": 666,
              "end": 714
            },
            "start": 663,
            "end": 714
          },
          "init": null,
          "definite": false,
          "start": 663,
          "end": 714
        }
      ],
      "declare": true,
      "start": 651,
      "end": 715
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a17",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
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
                            "start": 744,
                            "end": 745
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Derived",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 754,
                              "end": 761
                            },
                            "typeArguments": null,
                            "start": 754,
                            "end": 761
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 744,
                          "end": 761
                        }
                      ],
                      "start": 743,
                      "end": 762
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "abstract": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
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
                                      "start": 774,
                                      "end": 775
                                    },
                                    "typeArguments": null,
                                    "start": 774,
                                    "end": 775
                                  },
                                  "start": 772,
                                  "end": 775
                                },
                                "start": 771,
                                "end": 775
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
                                  "start": 780,
                                  "end": 781
                                },
                                "typeArguments": null,
                                "start": 780,
                                "end": 781
                              },
                              "start": 777,
                              "end": 781
                            },
                            "start": 766,
                            "end": 781
                          },
                          "start": 764,
                          "end": 781
                        },
                        "start": 763,
                        "end": 781
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 784,
                            "end": 785
                          },
                          "typeArguments": null,
                          "start": 784,
                          "end": 785
                        },
                        "start": 784,
                        "end": 787
                      },
                      "start": 782,
                      "end": 787
                    },
                    "start": 739,
                    "end": 788
                  },
                  {
                    "type": "TSConstructSignatureDeclaration",
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
                            "start": 798,
                            "end": 799
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Base",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 808,
                              "end": 812
                            },
                            "typeArguments": null,
                            "start": 808,
                            "end": 812
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 798,
                          "end": 812
                        }
                      ],
                      "start": 797,
                      "end": 813
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "abstract": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
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
                                      "start": 825,
                                      "end": 826
                                    },
                                    "typeArguments": null,
                                    "start": 825,
                                    "end": 826
                                  },
                                  "start": 823,
                                  "end": 826
                                },
                                "start": 822,
                                "end": 826
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
                                  "start": 831,
                                  "end": 832
                                },
                                "typeArguments": null,
                                "start": 831,
                                "end": 832
                              },
                              "start": 828,
                              "end": 832
                            },
                            "start": 817,
                            "end": 832
                          },
                          "start": 815,
                          "end": 832
                        },
                        "start": 814,
                        "end": 832
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 835,
                            "end": 836
                          },
                          "typeArguments": null,
                          "start": 835,
                          "end": 836
                        },
                        "start": 835,
                        "end": 838
                      },
                      "start": 833,
                      "end": 838
                    },
                    "start": 793,
                    "end": 839
                  }
                ],
                "start": 733,
                "end": 849
              },
              "start": 731,
              "end": 849
            },
            "start": 728,
            "end": 849
          },
          "init": null,
          "definite": false,
          "start": 728,
          "end": 849
        }
      ],
      "declare": true,
      "start": 716,
      "end": 850
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a18",
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
                            "type": "TSTypeLiteral",
                            "members": [
                              {
                                "type": "TSConstructSignatureDeclaration",
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
                                        "start": 897,
                                        "end": 898
                                      },
                                      "constraint": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Derived",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 907,
                                          "end": 914
                                        },
                                        "typeArguments": null,
                                        "start": 907,
                                        "end": 914
                                      },
                                      "default": null,
                                      "in": false,
                                      "out": false,
                                      "const": false,
                                      "start": 897,
                                      "end": 914
                                    }
                                  ],
                                  "start": 896,
                                  "end": 915
                                },
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "a",
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
                                          "start": 919,
                                          "end": 920
                                        },
                                        "typeArguments": null,
                                        "start": 919,
                                        "end": 920
                                      },
                                      "start": 917,
                                      "end": 920
                                    },
                                    "start": 916,
                                    "end": 920
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
                                      "start": 923,
                                      "end": 924
                                    },
                                    "typeArguments": null,
                                    "start": 923,
                                    "end": 924
                                  },
                                  "start": 921,
                                  "end": 924
                                },
                                "start": 892,
                                "end": 925
                              },
                              {
                                "type": "TSConstructSignatureDeclaration",
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
                                        "start": 939,
                                        "end": 940
                                      },
                                      "constraint": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Base",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 949,
                                          "end": 953
                                        },
                                        "typeArguments": null,
                                        "start": 949,
                                        "end": 953
                                      },
                                      "default": null,
                                      "in": false,
                                      "out": false,
                                      "const": false,
                                      "start": 939,
                                      "end": 953
                                    }
                                  ],
                                  "start": 938,
                                  "end": 954
                                },
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "a",
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
                                          "start": 958,
                                          "end": 959
                                        },
                                        "typeArguments": null,
                                        "start": 958,
                                        "end": 959
                                      },
                                      "start": 956,
                                      "end": 959
                                    },
                                    "start": 955,
                                    "end": 959
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
                                      "start": 962,
                                      "end": 963
                                    },
                                    "typeArguments": null,
                                    "start": 962,
                                    "end": 963
                                  },
                                  "start": 960,
                                  "end": 963
                                },
                                "start": 934,
                                "end": 964
                              }
                            ],
                            "start": 882,
                            "end": 970
                          },
                          "start": 880,
                          "end": 970
                        },
                        "start": 879,
                        "end": 970
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 973,
                          "end": 976
                        },
                        "start": 973,
                        "end": 978
                      },
                      "start": 971,
                      "end": 978
                    },
                    "start": 874,
                    "end": 979
                  },
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
                            "type": "TSTypeLiteral",
                            "members": [
                              {
                                "type": "TSConstructSignatureDeclaration",
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
                                        "start": 1007,
                                        "end": 1008
                                      },
                                      "constraint": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Derived2",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1017,
                                          "end": 1025
                                        },
                                        "typeArguments": null,
                                        "start": 1017,
                                        "end": 1025
                                      },
                                      "default": null,
                                      "in": false,
                                      "out": false,
                                      "const": false,
                                      "start": 1007,
                                      "end": 1025
                                    }
                                  ],
                                  "start": 1006,
                                  "end": 1026
                                },
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "a",
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
                                          "start": 1030,
                                          "end": 1031
                                        },
                                        "typeArguments": null,
                                        "start": 1030,
                                        "end": 1031
                                      },
                                      "start": 1028,
                                      "end": 1031
                                    },
                                    "start": 1027,
                                    "end": 1031
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
                                      "start": 1034,
                                      "end": 1035
                                    },
                                    "typeArguments": null,
                                    "start": 1034,
                                    "end": 1035
                                  },
                                  "start": 1032,
                                  "end": 1035
                                },
                                "start": 1002,
                                "end": 1036
                              },
                              {
                                "type": "TSConstructSignatureDeclaration",
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
                                        "start": 1050,
                                        "end": 1051
                                      },
                                      "constraint": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Base",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1060,
                                          "end": 1064
                                        },
                                        "typeArguments": null,
                                        "start": 1060,
                                        "end": 1064
                                      },
                                      "default": null,
                                      "in": false,
                                      "out": false,
                                      "const": false,
                                      "start": 1050,
                                      "end": 1064
                                    }
                                  ],
                                  "start": 1049,
                                  "end": 1065
                                },
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "a",
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
                                          "start": 1069,
                                          "end": 1070
                                        },
                                        "typeArguments": null,
                                        "start": 1069,
                                        "end": 1070
                                      },
                                      "start": 1067,
                                      "end": 1070
                                    },
                                    "start": 1066,
                                    "end": 1070
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
                                      "start": 1073,
                                      "end": 1074
                                    },
                                    "typeArguments": null,
                                    "start": 1073,
                                    "end": 1074
                                  },
                                  "start": 1071,
                                  "end": 1074
                                },
                                "start": 1045,
                                "end": 1075
                              }
                            ],
                            "start": 992,
                            "end": 1081
                          },
                          "start": 990,
                          "end": 1081
                        },
                        "start": 989,
                        "end": 1081
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 1084,
                          "end": 1087
                        },
                        "start": 1084,
                        "end": 1089
                      },
                      "start": 1082,
                      "end": 1089
                    },
                    "start": 984,
                    "end": 1090
                  }
                ],
                "start": 868,
                "end": 1092
              },
              "start": 866,
              "end": 1092
            },
            "start": 863,
            "end": 1092
          },
          "init": null,
          "definite": false,
          "start": 863,
          "end": 1092
        }
      ],
      "declare": true,
      "start": 851,
      "end": 1093
    },
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
                "type": "TSConstructorType",
                "abstract": false,
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
                        "start": 1115,
                        "end": 1116
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1115,
                      "end": 1116
                    }
                  ],
                  "start": 1114,
                  "end": 1117
                },
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
                          "start": 1121,
                          "end": 1122
                        },
                        "typeArguments": null,
                        "start": 1121,
                        "end": 1122
                      },
                      "start": 1119,
                      "end": 1122
                    },
                    "start": 1118,
                    "end": 1122
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1127,
                        "end": 1128
                      },
                      "typeArguments": null,
                      "start": 1127,
                      "end": 1128
                    },
                    "start": 1127,
                    "end": 1130
                  },
                  "start": 1124,
                  "end": 1130
                },
                "start": 1110,
                "end": 1130
              },
              "start": 1108,
              "end": 1130
            },
            "start": 1107,
            "end": 1130
          },
          "init": null,
          "definite": false,
          "start": 1107,
          "end": 1130
        }
      ],
      "declare": true,
      "start": 1095,
      "end": 1131
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 1133,
          "end": 1134
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 1137,
          "end": 1138
        },
        "start": 1133,
        "end": 1138
      },
      "directive": null,
      "start": 1133,
      "end": 1139
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 1146,
          "end": 1147
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 1150,
          "end": 1151
        },
        "start": 1146,
        "end": 1151
      },
      "directive": null,
      "start": 1146,
      "end": 1152
    },
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
                "type": "TSConstructorType",
                "abstract": false,
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
                        "start": 1180,
                        "end": 1181
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1180,
                      "end": 1181
                    }
                  ],
                  "start": 1179,
                  "end": 1182
                },
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
                          "start": 1186,
                          "end": 1187
                        },
                        "typeArguments": null,
                        "start": 1186,
                        "end": 1187
                      },
                      "start": 1184,
                      "end": 1187
                    },
                    "start": 1183,
                    "end": 1187
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 1192,
                      "end": 1198
                    },
                    "start": 1192,
                    "end": 1200
                  },
                  "start": 1189,
                  "end": 1200
                },
                "start": 1175,
                "end": 1200
              },
              "start": 1173,
              "end": 1200
            },
            "start": 1171,
            "end": 1200
          },
          "init": null,
          "definite": false,
          "start": 1171,
          "end": 1200
        }
      ],
      "declare": true,
      "start": 1159,
      "end": 1201
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1203,
          "end": 1205
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1208,
          "end": 1210
        },
        "start": 1203,
        "end": 1210
      },
      "directive": null,
      "start": 1203,
      "end": 1211
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1218,
          "end": 1220
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1223,
          "end": 1225
        },
        "start": 1218,
        "end": 1225
      },
      "directive": null,
      "start": 1218,
      "end": 1226
    },
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
                "type": "TSConstructorType",
                "abstract": false,
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
                        "start": 1254,
                        "end": 1255
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1254,
                      "end": 1255
                    }
                  ],
                  "start": 1253,
                  "end": 1256
                },
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
                          "start": 1260,
                          "end": 1261
                        },
                        "typeArguments": null,
                        "start": 1260,
                        "end": 1261
                      },
                      "start": 1258,
                      "end": 1261
                    },
                    "start": 1257,
                    "end": 1261
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
                      "start": 1266,
                      "end": 1267
                    },
                    "typeArguments": null,
                    "start": 1266,
                    "end": 1267
                  },
                  "start": 1263,
                  "end": 1267
                },
                "start": 1249,
                "end": 1267
              },
              "start": 1247,
              "end": 1267
            },
            "start": 1245,
            "end": 1267
          },
          "init": null,
          "definite": false,
          "start": 1245,
          "end": 1267
        }
      ],
      "declare": true,
      "start": 1233,
      "end": 1268
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a3",
          "optional": false,
          "typeAnnotation": null,
          "start": 1270,
          "end": 1272
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b3",
          "optional": false,
          "typeAnnotation": null,
          "start": 1275,
          "end": 1277
        },
        "start": 1270,
        "end": 1277
      },
      "directive": null,
      "start": 1270,
      "end": 1278
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b3",
          "optional": false,
          "typeAnnotation": null,
          "start": 1285,
          "end": 1287
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a3",
          "optional": false,
          "typeAnnotation": null,
          "start": 1290,
          "end": 1292
        },
        "start": 1285,
        "end": 1292
      },
      "directive": null,
      "start": 1285,
      "end": 1293
    },
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
                "type": "TSConstructorType",
                "abstract": false,
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
                        "start": 1321,
                        "end": 1322
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1321,
                      "end": 1322
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1324,
                        "end": 1325
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1324,
                      "end": 1325
                    }
                  ],
                  "start": 1320,
                  "end": 1326
                },
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
                          "start": 1330,
                          "end": 1331
                        },
                        "typeArguments": null,
                        "start": 1330,
                        "end": 1331
                      },
                      "start": 1328,
                      "end": 1331
                    },
                    "start": 1327,
                    "end": 1331
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1336,
                          "end": 1337
                        },
                        "typeArguments": null,
                        "start": 1336,
                        "end": 1337
                      },
                      "start": 1334,
                      "end": 1337
                    },
                    "start": 1333,
                    "end": 1337
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1342,
                    "end": 1348
                  },
                  "start": 1339,
                  "end": 1348
                },
                "start": 1316,
                "end": 1348
              },
              "start": 1314,
              "end": 1348
            },
            "start": 1312,
            "end": 1348
          },
          "init": null,
          "definite": false,
          "start": 1312,
          "end": 1348
        }
      ],
      "declare": true,
      "start": 1300,
      "end": 1349
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a4",
          "optional": false,
          "typeAnnotation": null,
          "start": 1351,
          "end": 1353
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b4",
          "optional": false,
          "typeAnnotation": null,
          "start": 1356,
          "end": 1358
        },
        "start": 1351,
        "end": 1358
      },
      "directive": null,
      "start": 1351,
      "end": 1359
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b4",
          "optional": false,
          "typeAnnotation": null,
          "start": 1366,
          "end": 1368
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a4",
          "optional": false,
          "typeAnnotation": null,
          "start": 1371,
          "end": 1373
        },
        "start": 1366,
        "end": 1373
      },
      "directive": null,
      "start": 1366,
      "end": 1374
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
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
                        "start": 1402,
                        "end": 1403
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1402,
                      "end": 1403
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1405,
                        "end": 1406
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1405,
                      "end": 1406
                    }
                  ],
                  "start": 1401,
                  "end": 1407
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSConstructorType",
                        "abstract": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arg",
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
                                  "start": 1421,
                                  "end": 1422
                                },
                                "typeArguments": null,
                                "start": 1421,
                                "end": 1422
                              },
                              "start": 1419,
                              "end": 1422
                            },
                            "start": 1416,
                            "end": 1422
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1427,
                              "end": 1428
                            },
                            "typeArguments": null,
                            "start": 1427,
                            "end": 1428
                          },
                          "start": 1424,
                          "end": 1428
                        },
                        "start": 1411,
                        "end": 1428
                      },
                      "start": 1409,
                      "end": 1428
                    },
                    "start": 1408,
                    "end": 1428
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
                      "start": 1433,
                      "end": 1434
                    },
                    "typeArguments": null,
                    "start": 1433,
                    "end": 1434
                  },
                  "start": 1430,
                  "end": 1434
                },
                "start": 1397,
                "end": 1434
              },
              "start": 1395,
              "end": 1434
            },
            "start": 1393,
            "end": 1434
          },
          "init": null,
          "definite": false,
          "start": 1393,
          "end": 1434
        }
      ],
      "declare": true,
      "start": 1381,
      "end": 1435
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a5",
          "optional": false,
          "typeAnnotation": null,
          "start": 1437,
          "end": 1439
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b5",
          "optional": false,
          "typeAnnotation": null,
          "start": 1442,
          "end": 1444
        },
        "start": 1437,
        "end": 1444
      },
      "directive": null,
      "start": 1437,
      "end": 1445
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b5",
          "optional": false,
          "typeAnnotation": null,
          "start": 1452,
          "end": 1454
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a5",
          "optional": false,
          "typeAnnotation": null,
          "start": 1457,
          "end": 1459
        },
        "start": 1452,
        "end": 1459
      },
      "directive": null,
      "start": 1452,
      "end": 1460
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
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
                        "start": 1488,
                        "end": 1489
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1498,
                          "end": 1502
                        },
                        "typeArguments": null,
                        "start": 1498,
                        "end": 1502
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1488,
                      "end": 1502
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1504,
                        "end": 1505
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1514,
                          "end": 1521
                        },
                        "typeArguments": null,
                        "start": 1514,
                        "end": 1521
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1504,
                      "end": 1521
                    }
                  ],
                  "start": 1487,
                  "end": 1522
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSConstructorType",
                        "abstract": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arg",
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
                                  "start": 1536,
                                  "end": 1537
                                },
                                "typeArguments": null,
                                "start": 1536,
                                "end": 1537
                              },
                              "start": 1534,
                              "end": 1537
                            },
                            "start": 1531,
                            "end": 1537
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1542,
                              "end": 1543
                            },
                            "typeArguments": null,
                            "start": 1542,
                            "end": 1543
                          },
                          "start": 1539,
                          "end": 1543
                        },
                        "start": 1526,
                        "end": 1543
                      },
                      "start": 1524,
                      "end": 1543
                    },
                    "start": 1523,
                    "end": 1543
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
                      "start": 1548,
                      "end": 1549
                    },
                    "typeArguments": null,
                    "start": 1548,
                    "end": 1549
                  },
                  "start": 1545,
                  "end": 1549
                },
                "start": 1483,
                "end": 1549
              },
              "start": 1481,
              "end": 1549
            },
            "start": 1479,
            "end": 1549
          },
          "init": null,
          "definite": false,
          "start": 1479,
          "end": 1549
        }
      ],
      "declare": true,
      "start": 1467,
      "end": 1550
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a6",
          "optional": false,
          "typeAnnotation": null,
          "start": 1552,
          "end": 1554
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b6",
          "optional": false,
          "typeAnnotation": null,
          "start": 1557,
          "end": 1559
        },
        "start": 1552,
        "end": 1559
      },
      "directive": null,
      "start": 1552,
      "end": 1560
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b6",
          "optional": false,
          "typeAnnotation": null,
          "start": 1567,
          "end": 1569
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a6",
          "optional": false,
          "typeAnnotation": null,
          "start": 1572,
          "end": 1574
        },
        "start": 1567,
        "end": 1574
      },
      "directive": null,
      "start": 1567,
      "end": 1575
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b11",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
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
                        "start": 1604,
                        "end": 1605
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1604,
                      "end": 1605
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1607,
                        "end": 1608
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1607,
                      "end": 1608
                    }
                  ],
                  "start": 1603,
                  "end": 1609
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
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
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1615,
                              "end": 1618
                            },
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
                                  "start": 1620,
                                  "end": 1621
                                },
                                "typeArguments": null,
                                "start": 1620,
                                "end": 1621
                              },
                              "start": 1618,
                              "end": 1621
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1615,
                            "end": 1621
                          }
                        ],
                        "start": 1613,
                        "end": 1623
                      },
                      "start": 1611,
                      "end": 1623
                    },
                    "start": 1610,
                    "end": 1623
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
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
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1630,
                              "end": 1633
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "U",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1635,
                                  "end": 1636
                                },
                                "typeArguments": null,
                                "start": 1635,
                                "end": 1636
                              },
                              "start": 1633,
                              "end": 1636
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1630,
                            "end": 1637
                          },
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "bar",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1638,
                              "end": 1641
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "U",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1643,
                                  "end": 1644
                                },
                                "typeArguments": null,
                                "start": 1643,
                                "end": 1644
                              },
                              "start": 1641,
                              "end": 1644
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1638,
                            "end": 1644
                          }
                        ],
                        "start": 1628,
                        "end": 1646
                      },
                      "start": 1626,
                      "end": 1646
                    },
                    "start": 1625,
                    "end": 1646
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1651,
                      "end": 1655
                    },
                    "typeArguments": null,
                    "start": 1651,
                    "end": 1655
                  },
                  "start": 1648,
                  "end": 1655
                },
                "start": 1599,
                "end": 1655
              },
              "start": 1597,
              "end": 1655
            },
            "start": 1594,
            "end": 1655
          },
          "init": null,
          "definite": false,
          "start": 1594,
          "end": 1655
        }
      ],
      "declare": true,
      "start": 1582,
      "end": 1656
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a11",
          "optional": false,
          "typeAnnotation": null,
          "start": 1658,
          "end": 1661
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b11",
          "optional": false,
          "typeAnnotation": null,
          "start": 1664,
          "end": 1667
        },
        "start": 1658,
        "end": 1667
      },
      "directive": null,
      "start": 1658,
      "end": 1668
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b11",
          "optional": false,
          "typeAnnotation": null,
          "start": 1675,
          "end": 1678
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a11",
          "optional": false,
          "typeAnnotation": null,
          "start": 1681,
          "end": 1684
        },
        "start": 1675,
        "end": 1684
      },
      "directive": null,
      "start": 1675,
      "end": 1685
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b15",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1714,
                        "end": 1715
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1714,
                      "end": 1715
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "V",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1717,
                        "end": 1718
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1717,
                      "end": 1718
                    }
                  ],
                  "start": 1713,
                  "end": 1719
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
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
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1725,
                              "end": 1726
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "U",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1728,
                                  "end": 1729
                                },
                                "typeArguments": null,
                                "start": 1728,
                                "end": 1729
                              },
                              "start": 1726,
                              "end": 1729
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1725,
                            "end": 1730
                          },
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1731,
                              "end": 1732
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "V",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1734,
                                  "end": 1735
                                },
                                "typeArguments": null,
                                "start": 1734,
                                "end": 1735
                              },
                              "start": 1732,
                              "end": 1735
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1731,
                            "end": 1736
                          }
                        ],
                        "start": 1723,
                        "end": 1738
                      },
                      "start": 1721,
                      "end": 1738
                    },
                    "start": 1720,
                    "end": 1738
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1743,
                        "end": 1744
                      },
                      "typeArguments": null,
                      "start": 1743,
                      "end": 1744
                    },
                    "start": 1743,
                    "end": 1746
                  },
                  "start": 1740,
                  "end": 1746
                },
                "start": 1709,
                "end": 1746
              },
              "start": 1707,
              "end": 1746
            },
            "start": 1704,
            "end": 1746
          },
          "init": null,
          "definite": false,
          "start": 1704,
          "end": 1746
        }
      ],
      "declare": true,
      "start": 1692,
      "end": 1747
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a15",
          "optional": false,
          "typeAnnotation": null,
          "start": 1749,
          "end": 1752
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b15",
          "optional": false,
          "typeAnnotation": null,
          "start": 1755,
          "end": 1758
        },
        "start": 1749,
        "end": 1758
      },
      "directive": null,
      "start": 1749,
      "end": 1759
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b15",
          "optional": false,
          "typeAnnotation": null,
          "start": 1766,
          "end": 1769
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a15",
          "optional": false,
          "typeAnnotation": null,
          "start": 1772,
          "end": 1775
        },
        "start": 1766,
        "end": 1775
      },
      "directive": null,
      "start": 1766,
      "end": 1776
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b16",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
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
                        "start": 1805,
                        "end": 1806
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1805,
                      "end": 1806
                    }
                  ],
                  "start": 1804,
                  "end": 1807
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
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
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1813,
                              "end": 1814
                            },
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
                                  "start": 1816,
                                  "end": 1817
                                },
                                "typeArguments": null,
                                "start": 1816,
                                "end": 1817
                              },
                              "start": 1814,
                              "end": 1817
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1813,
                            "end": 1818
                          },
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1819,
                              "end": 1820
                            },
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
                                  "start": 1822,
                                  "end": 1823
                                },
                                "typeArguments": null,
                                "start": 1822,
                                "end": 1823
                              },
                              "start": 1820,
                              "end": 1823
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1819,
                            "end": 1823
                          }
                        ],
                        "start": 1811,
                        "end": 1825
                      },
                      "start": 1809,
                      "end": 1825
                    },
                    "start": 1808,
                    "end": 1825
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1830,
                        "end": 1831
                      },
                      "typeArguments": null,
                      "start": 1830,
                      "end": 1831
                    },
                    "start": 1830,
                    "end": 1833
                  },
                  "start": 1827,
                  "end": 1833
                },
                "start": 1800,
                "end": 1833
              },
              "start": 1798,
              "end": 1833
            },
            "start": 1795,
            "end": 1833
          },
          "init": null,
          "definite": false,
          "start": 1795,
          "end": 1833
        }
      ],
      "declare": true,
      "start": 1783,
      "end": 1834
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a15",
          "optional": false,
          "typeAnnotation": null,
          "start": 1836,
          "end": 1839
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b16",
          "optional": false,
          "typeAnnotation": null,
          "start": 1842,
          "end": 1845
        },
        "start": 1836,
        "end": 1845
      },
      "directive": null,
      "start": 1836,
      "end": 1846
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b15",
          "optional": false,
          "typeAnnotation": null,
          "start": 1853,
          "end": 1856
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a16",
          "optional": false,
          "typeAnnotation": null,
          "start": 1859,
          "end": 1862
        },
        "start": 1853,
        "end": 1862
      },
      "directive": null,
      "start": 1853,
      "end": 1863
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b17",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
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
                        "start": 1892,
                        "end": 1893
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1892,
                      "end": 1893
                    }
                  ],
                  "start": 1891,
                  "end": 1894
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSConstructorType",
                        "abstract": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
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
                                  "start": 1906,
                                  "end": 1907
                                },
                                "typeArguments": null,
                                "start": 1906,
                                "end": 1907
                              },
                              "start": 1904,
                              "end": 1907
                            },
                            "start": 1903,
                            "end": 1907
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
                              "start": 1912,
                              "end": 1913
                            },
                            "typeArguments": null,
                            "start": 1912,
                            "end": 1913
                          },
                          "start": 1909,
                          "end": 1913
                        },
                        "start": 1898,
                        "end": 1913
                      },
                      "start": 1896,
                      "end": 1913
                    },
                    "start": 1895,
                    "end": 1913
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1918,
                        "end": 1919
                      },
                      "typeArguments": null,
                      "start": 1918,
                      "end": 1919
                    },
                    "start": 1918,
                    "end": 1921
                  },
                  "start": 1915,
                  "end": 1921
                },
                "start": 1887,
                "end": 1921
              },
              "start": 1885,
              "end": 1921
            },
            "start": 1882,
            "end": 1921
          },
          "init": null,
          "definite": false,
          "start": 1882,
          "end": 1921
        }
      ],
      "declare": true,
      "start": 1870,
      "end": 1922
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a17",
          "optional": false,
          "typeAnnotation": null,
          "start": 1924,
          "end": 1927
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b17",
          "optional": false,
          "typeAnnotation": null,
          "start": 1930,
          "end": 1933
        },
        "start": 1924,
        "end": 1933
      },
      "directive": null,
      "start": 1924,
      "end": 1934
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b17",
          "optional": false,
          "typeAnnotation": null,
          "start": 1941,
          "end": 1944
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a17",
          "optional": false,
          "typeAnnotation": null,
          "start": 1947,
          "end": 1950
        },
        "start": 1941,
        "end": 1950
      },
      "directive": null,
      "start": 1941,
      "end": 1951
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b18",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSConstructorType",
                        "abstract": false,
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
                                "start": 1988,
                                "end": 1989
                              },
                              "constraint": null,
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false,
                              "start": 1988,
                              "end": 1989
                            }
                          ],
                          "start": 1987,
                          "end": 1990
                        },
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
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
                                  "start": 1994,
                                  "end": 1995
                                },
                                "typeArguments": null,
                                "start": 1994,
                                "end": 1995
                              },
                              "start": 1992,
                              "end": 1995
                            },
                            "start": 1991,
                            "end": 1995
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
                              "start": 2000,
                              "end": 2001
                            },
                            "typeArguments": null,
                            "start": 2000,
                            "end": 2001
                          },
                          "start": 1997,
                          "end": 2001
                        },
                        "start": 1983,
                        "end": 2001
                      },
                      "start": 1981,
                      "end": 2001
                    },
                    "start": 1980,
                    "end": 2001
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 2006,
                      "end": 2009
                    },
                    "start": 2006,
                    "end": 2011
                  },
                  "start": 2003,
                  "end": 2011
                },
                "start": 1975,
                "end": 2011
              },
              "start": 1973,
              "end": 2011
            },
            "start": 1970,
            "end": 2011
          },
          "init": null,
          "definite": false,
          "start": 1970,
          "end": 2011
        }
      ],
      "declare": true,
      "start": 1958,
      "end": 2012
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a18",
          "optional": false,
          "typeAnnotation": null,
          "start": 2014,
          "end": 2017
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b18",
          "optional": false,
          "typeAnnotation": null,
          "start": 2020,
          "end": 2023
        },
        "start": 2014,
        "end": 2023
      },
      "directive": null,
      "start": 2014,
      "end": 2024
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b18",
          "optional": false,
          "typeAnnotation": null,
          "start": 2031,
          "end": 2034
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a18",
          "optional": false,
          "typeAnnotation": null,
          "start": 2037,
          "end": 2040
        },
        "start": 2031,
        "end": 2040
      },
      "directive": null,
      "start": 2031,
      "end": 2041
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 61,
  "end": 2047
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 61,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 67,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 74,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 79,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 87,
    "end": 88
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 89,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 95,
    "end": 102
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 103,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 111,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 118,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 123,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 131,
    "end": 132
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 133,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 139,
    "end": 147
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 148,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 156,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 166,
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
    "value": ";",
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
    "type": "Keyword",
    "value": "class",
    "start": 181,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "OtherDerived",
    "start": 187,
    "end": 199
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 200,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 208,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "bing",
    "start": 215,
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
    "value": "string",
    "start": 221,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 229,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 232,
    "end": 239
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 240,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 245,
    "end": 246
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 247,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 254,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 256,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 261,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 267,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 269,
    "end": 276
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 277,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 281,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 283,
    "end": 284
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 285,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 289,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 292,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 294,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 299,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 302,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Identifier",
    "value": "declare",
    "start": 312,
    "end": 319
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 320,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 324,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 326,
    "end": 327
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 328,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 332,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 335,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 337,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 342,
    "end": 344
  },
  {
    "type": "Keyword",
    "value": "void",
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
    "type": "Identifier",
    "value": "declare",
    "start": 351,
    "end": 358
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 359,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 363,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 365,
    "end": 366
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 367,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 371,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 373,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 377,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 379,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 382,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 384,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 385,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 390,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 393,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 399,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 401,
    "end": 408
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 409,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 413,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 415,
    "end": 416
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 417,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 421,
    "end": 422
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 423,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 427,
    "end": 428
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 429,
    "end": 430
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 431,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 435,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 436,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 439,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 441,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 442,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 444,
    "end": 446
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 450,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 454,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 456,
    "end": 463
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 464,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "a6",
    "start": 468,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 470,
    "end": 471
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 472,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 476,
    "end": 477
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 477,
    "end": 478
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 479,
    "end": 486
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 487,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 491,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 492,
    "end": 493
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 493,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 494,
    "end": 495
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 496,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 500,
    "end": 501
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 501,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 504,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 506,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 507,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 509,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 512,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 521,
    "end": 523
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 524,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 525,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 527,
    "end": 534
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 535,
    "end": 538
  },
  {
    "type": "Identifier",
    "value": "a11",
    "start": 539,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 542,
    "end": 543
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 544,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 548,
    "end": 549
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 550,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 551,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 552,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 553,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 555,
    "end": 556
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 557,
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
    "value": "T",
    "start": 562,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 564,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 565,
    "end": 566
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 567,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 568,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 570,
    "end": 571
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 572,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 575,
    "end": 576
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 577,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 578,
    "end": 579
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 580,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 583,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 585,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 588,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 590,
    "end": 592
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 593,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 597,
    "end": 598
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 599,
    "end": 606
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 607,
    "end": 610
  },
  {
    "type": "Identifier",
    "value": "a15",
    "start": 611,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 614,
    "end": 615
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 616,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 620,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 621,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 622,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 623,
    "end": 624
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 624,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 625,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 627,
    "end": 628
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 629,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 630,
    "end": 631
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 632,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 633,
    "end": 634
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 635,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 636,
    "end": 637
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 638,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 640,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 641,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 643,
    "end": 645
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 646,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 647,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 648,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 649,
    "end": 650
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 651,
    "end": 658
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 659,
    "end": 662
  },
  {
    "type": "Identifier",
    "value": "a16",
    "start": 663,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 666,
    "end": 667
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 668,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 672,
    "end": 673
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 673,
    "end": 674
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 675,
    "end": 682
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 683,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 687,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 688,
    "end": 689
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 689,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 690,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 692,
    "end": 693
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 694,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 695,
    "end": 696
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 697,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 698,
    "end": 699
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 700,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 701,
    "end": 702
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 703,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "=>",
    "start": 708,
    "end": 710
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 711,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 712,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 713,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 714,
    "end": 715
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 716,
    "end": 723
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 724,
    "end": 727
  },
  {
    "type": "Identifier",
    "value": "a17",
    "start": 728,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 731,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 733,
    "end": 734
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 739,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 743,
    "end": 744
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 744,
    "end": 745
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 746,
    "end": 753
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 754,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 761,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 762,
    "end": 763
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 763,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 764,
    "end": 765
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 766,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 770,
    "end": 771
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 771,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 772,
    "end": 773
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 774,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 775,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 777,
    "end": 779
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": ":",
    "start": 782,
    "end": 783
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 784,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 785,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 786,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 787,
    "end": 788
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 793,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 797,
    "end": 798
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 798,
    "end": 799
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 800,
    "end": 807
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 808,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 812,
    "end": 813
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 813,
    "end": 814
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 814,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 815,
    "end": 816
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 817,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 821,
    "end": 822
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 822,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 823,
    "end": 824
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 825,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 826,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 828,
    "end": 830
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 831,
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
    "value": ":",
    "start": 833,
    "end": 834
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 835,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 836,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 837,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 838,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 848,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 849,
    "end": 850
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 851,
    "end": 858
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 859,
    "end": 862
  },
  {
    "type": "Identifier",
    "value": "a18",
    "start": 863,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 866,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 868,
    "end": 869
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 874,
    "end": 877
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
    "type": "Punctuator",
    "value": "{",
    "start": 882,
    "end": 883
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 892,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 896,
    "end": 897
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 897,
    "end": 898
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 899,
    "end": 906
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 907,
    "end": 914
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 914,
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
    "value": "a",
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
    "value": "T",
    "start": 919,
    "end": 920
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 920,
    "end": 921
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 921,
    "end": 922
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 923,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 924,
    "end": 925
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 934,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 938,
    "end": 939
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 939,
    "end": 940
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 941,
    "end": 948
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 949,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 953,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 954,
    "end": 955
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 955,
    "end": 956
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 956,
    "end": 957
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 958,
    "end": 959
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 959,
    "end": 960
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 960,
    "end": 961
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 962,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 963,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": ":",
    "start": 971,
    "end": 972
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 973,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 976,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 977,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 978,
    "end": 979
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 984,
    "end": 987
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 988,
    "end": 989
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 989,
    "end": 990
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 990,
    "end": 991
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 992,
    "end": 993
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1002,
    "end": 1005
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1009,
    "end": 1016
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 1017,
    "end": 1025
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1025,
    "end": 1026
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1028,
    "end": 1029
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": "new",
    "start": 1045,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1052,
    "end": 1059
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1060,
    "end": 1064
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1065,
    "end": 1066
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1073,
    "end": 1074
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1074,
    "end": 1075
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1082,
    "end": 1083
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1084,
    "end": 1087
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1087,
    "end": 1088
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1088,
    "end": 1089
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1089,
    "end": 1090
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1091,
    "end": 1092
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1092,
    "end": 1093
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1095,
    "end": 1102
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1103,
    "end": 1106
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1108,
    "end": 1109
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1110,
    "end": 1113
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1115,
    "end": 1116
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1116,
    "end": 1117
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1117,
    "end": 1118
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1118,
    "end": 1119
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1119,
    "end": 1120
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1124,
    "end": 1126
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1127,
    "end": 1128
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1128,
    "end": 1129
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1130,
    "end": 1131
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1133,
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
    "value": "b",
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
    "type": "Identifier",
    "value": "b",
    "start": 1146,
    "end": 1147
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1148,
    "end": 1149
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "type": "Identifier",
    "value": "declare",
    "start": 1159,
    "end": 1166
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1167,
    "end": 1170
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 1171,
    "end": 1173
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1173,
    "end": 1174
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1175,
    "end": 1178
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1179,
    "end": 1180
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1180,
    "end": 1181
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1181,
    "end": 1182
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1182,
    "end": 1183
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1183,
    "end": 1184
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1184,
    "end": 1185
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1187,
    "end": 1188
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1189,
    "end": 1191
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1192,
    "end": 1198
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1200,
    "end": 1201
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1203,
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
    "value": "b2",
    "start": 1208,
    "end": 1210
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1210,
    "end": 1211
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 1218,
    "end": 1220
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1221,
    "end": 1222
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1223,
    "end": 1225
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1225,
    "end": 1226
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1233,
    "end": 1240
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1241,
    "end": 1244
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 1245,
    "end": 1247
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1247,
    "end": 1248
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1249,
    "end": 1252
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1253,
    "end": 1254
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1254,
    "end": 1255
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1255,
    "end": 1256
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1256,
    "end": 1257
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1257,
    "end": 1258
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1258,
    "end": 1259
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1260,
    "end": 1261
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1261,
    "end": 1262
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1263,
    "end": 1265
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1267,
    "end": 1268
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 1270,
    "end": 1272
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1273,
    "end": 1274
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 1275,
    "end": 1277
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1277,
    "end": 1278
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 1285,
    "end": 1287
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1288,
    "end": 1289
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 1290,
    "end": 1292
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1292,
    "end": 1293
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1300,
    "end": 1307
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1308,
    "end": 1311
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 1312,
    "end": 1314
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1314,
    "end": 1315
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1316,
    "end": 1319
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1320,
    "end": 1321
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1321,
    "end": 1322
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1322,
    "end": 1323
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1324,
    "end": 1325
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1325,
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
    "value": "T",
    "start": 1330,
    "end": 1331
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1331,
    "end": 1332
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1333,
    "end": 1334
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1334,
    "end": 1335
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1336,
    "end": 1337
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1337,
    "end": 1338
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1339,
    "end": 1341
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1342,
    "end": 1348
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1348,
    "end": 1349
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 1351,
    "end": 1353
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1354,
    "end": 1355
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 1356,
    "end": 1358
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1358,
    "end": 1359
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 1366,
    "end": 1368
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1369,
    "end": 1370
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 1371,
    "end": 1373
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1373,
    "end": 1374
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1381,
    "end": 1388
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1389,
    "end": 1392
  },
  {
    "type": "Identifier",
    "value": "b5",
    "start": 1393,
    "end": 1395
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1395,
    "end": 1396
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1397,
    "end": 1400
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1401,
    "end": 1402
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1402,
    "end": 1403
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1403,
    "end": 1404
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1405,
    "end": 1406
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1406,
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
    "type": "Keyword",
    "value": "new",
    "start": 1411,
    "end": 1414
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1415,
    "end": 1416
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 1416,
    "end": 1419
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1419,
    "end": 1420
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1421,
    "end": 1422
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1422,
    "end": 1423
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1424,
    "end": 1426
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1427,
    "end": 1428
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1428,
    "end": 1429
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1430,
    "end": 1432
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1433,
    "end": 1434
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1434,
    "end": 1435
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 1437,
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
    "value": "b5",
    "start": 1442,
    "end": 1444
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1444,
    "end": 1445
  },
  {
    "type": "Identifier",
    "value": "b5",
    "start": 1452,
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
    "value": "a5",
    "start": 1457,
    "end": 1459
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1459,
    "end": 1460
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1467,
    "end": 1474
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1475,
    "end": 1478
  },
  {
    "type": "Identifier",
    "value": "b6",
    "start": 1479,
    "end": 1481
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1481,
    "end": 1482
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1483,
    "end": 1486
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1487,
    "end": 1488
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1488,
    "end": 1489
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1490,
    "end": 1497
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1498,
    "end": 1502
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1502,
    "end": 1503
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1504,
    "end": 1505
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1506,
    "end": 1513
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1514,
    "end": 1521
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1521,
    "end": 1522
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1522,
    "end": 1523
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1523,
    "end": 1524
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1524,
    "end": 1525
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1526,
    "end": 1529
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1530,
    "end": 1531
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 1531,
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
    "value": "T",
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
    "value": "=>",
    "start": 1539,
    "end": 1541
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1542,
    "end": 1543
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1543,
    "end": 1544
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1545,
    "end": 1547
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1548,
    "end": 1549
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1549,
    "end": 1550
  },
  {
    "type": "Identifier",
    "value": "a6",
    "start": 1552,
    "end": 1554
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1555,
    "end": 1556
  },
  {
    "type": "Identifier",
    "value": "b6",
    "start": 1557,
    "end": 1559
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1559,
    "end": 1560
  },
  {
    "type": "Identifier",
    "value": "b6",
    "start": 1567,
    "end": 1569
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1570,
    "end": 1571
  },
  {
    "type": "Identifier",
    "value": "a6",
    "start": 1572,
    "end": 1574
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1574,
    "end": 1575
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1582,
    "end": 1589
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1590,
    "end": 1593
  },
  {
    "type": "Identifier",
    "value": "b11",
    "start": 1594,
    "end": 1597
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1597,
    "end": 1598
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1599,
    "end": 1602
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1603,
    "end": 1604
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1604,
    "end": 1605
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1605,
    "end": 1606
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1607,
    "end": 1608
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1608,
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
    "type": "Punctuator",
    "value": "{",
    "start": 1613,
    "end": 1614
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1615,
    "end": 1618
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1618,
    "end": 1619
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1620,
    "end": 1621
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1622,
    "end": 1623
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1623,
    "end": 1624
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1625,
    "end": 1626
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1626,
    "end": 1627
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1628,
    "end": 1629
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1630,
    "end": 1633
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1633,
    "end": 1634
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1635,
    "end": 1636
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1636,
    "end": 1637
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 1638,
    "end": 1641
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1641,
    "end": 1642
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1643,
    "end": 1644
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1645,
    "end": 1646
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1646,
    "end": 1647
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1648,
    "end": 1650
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1651,
    "end": 1655
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1655,
    "end": 1656
  },
  {
    "type": "Identifier",
    "value": "a11",
    "start": 1658,
    "end": 1661
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1662,
    "end": 1663
  },
  {
    "type": "Identifier",
    "value": "b11",
    "start": 1664,
    "end": 1667
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1667,
    "end": 1668
  },
  {
    "type": "Identifier",
    "value": "b11",
    "start": 1675,
    "end": 1678
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1679,
    "end": 1680
  },
  {
    "type": "Identifier",
    "value": "a11",
    "start": 1681,
    "end": 1684
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1684,
    "end": 1685
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1692,
    "end": 1699
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1700,
    "end": 1703
  },
  {
    "type": "Identifier",
    "value": "b15",
    "start": 1704,
    "end": 1707
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1707,
    "end": 1708
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1709,
    "end": 1712
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1713,
    "end": 1714
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1714,
    "end": 1715
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1715,
    "end": 1716
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1717,
    "end": 1718
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1718,
    "end": 1719
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1719,
    "end": 1720
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1720,
    "end": 1721
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1721,
    "end": 1722
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1723,
    "end": 1724
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1725,
    "end": 1726
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1726,
    "end": 1727
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1728,
    "end": 1729
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1729,
    "end": 1730
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "value": "V",
    "start": 1734,
    "end": 1735
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1735,
    "end": 1736
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1737,
    "end": 1738
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1738,
    "end": 1739
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1740,
    "end": 1742
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1743,
    "end": 1744
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1744,
    "end": 1745
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1745,
    "end": 1746
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1746,
    "end": 1747
  },
  {
    "type": "Identifier",
    "value": "a15",
    "start": 1749,
    "end": 1752
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1753,
    "end": 1754
  },
  {
    "type": "Identifier",
    "value": "b15",
    "start": 1755,
    "end": 1758
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1758,
    "end": 1759
  },
  {
    "type": "Identifier",
    "value": "b15",
    "start": 1766,
    "end": 1769
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1770,
    "end": 1771
  },
  {
    "type": "Identifier",
    "value": "a15",
    "start": 1772,
    "end": 1775
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1775,
    "end": 1776
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1783,
    "end": 1790
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1791,
    "end": 1794
  },
  {
    "type": "Identifier",
    "value": "b16",
    "start": 1795,
    "end": 1798
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1798,
    "end": 1799
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1800,
    "end": 1803
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1804,
    "end": 1805
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1805,
    "end": 1806
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1806,
    "end": 1807
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1807,
    "end": 1808
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1808,
    "end": 1809
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1809,
    "end": 1810
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1811,
    "end": 1812
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "value": "T",
    "start": 1816,
    "end": 1817
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1817,
    "end": 1818
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1819,
    "end": 1820
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1820,
    "end": 1821
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1822,
    "end": 1823
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1824,
    "end": 1825
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1825,
    "end": 1826
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1827,
    "end": 1829
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1830,
    "end": 1831
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1831,
    "end": 1832
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1832,
    "end": 1833
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1833,
    "end": 1834
  },
  {
    "type": "Identifier",
    "value": "a15",
    "start": 1836,
    "end": 1839
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1840,
    "end": 1841
  },
  {
    "type": "Identifier",
    "value": "b16",
    "start": 1842,
    "end": 1845
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1845,
    "end": 1846
  },
  {
    "type": "Identifier",
    "value": "b15",
    "start": 1853,
    "end": 1856
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1857,
    "end": 1858
  },
  {
    "type": "Identifier",
    "value": "a16",
    "start": 1859,
    "end": 1862
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1862,
    "end": 1863
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1870,
    "end": 1877
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1878,
    "end": 1881
  },
  {
    "type": "Identifier",
    "value": "b17",
    "start": 1882,
    "end": 1885
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1885,
    "end": 1886
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1887,
    "end": 1890
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1891,
    "end": 1892
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1892,
    "end": 1893
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1893,
    "end": 1894
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1894,
    "end": 1895
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1895,
    "end": 1896
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1896,
    "end": 1897
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1898,
    "end": 1901
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1902,
    "end": 1903
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1903,
    "end": 1904
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1904,
    "end": 1905
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1906,
    "end": 1907
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1907,
    "end": 1908
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1909,
    "end": 1911
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1912,
    "end": 1913
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1913,
    "end": 1914
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1915,
    "end": 1917
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1918,
    "end": 1919
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1919,
    "end": 1920
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1920,
    "end": 1921
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1921,
    "end": 1922
  },
  {
    "type": "Identifier",
    "value": "a17",
    "start": 1924,
    "end": 1927
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1928,
    "end": 1929
  },
  {
    "type": "Identifier",
    "value": "b17",
    "start": 1930,
    "end": 1933
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1933,
    "end": 1934
  },
  {
    "type": "Identifier",
    "value": "b17",
    "start": 1941,
    "end": 1944
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1945,
    "end": 1946
  },
  {
    "type": "Identifier",
    "value": "a17",
    "start": 1947,
    "end": 1950
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1950,
    "end": 1951
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1958,
    "end": 1965
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1966,
    "end": 1969
  },
  {
    "type": "Identifier",
    "value": "b18",
    "start": 1970,
    "end": 1973
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1973,
    "end": 1974
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1975,
    "end": 1978
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1979,
    "end": 1980
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1980,
    "end": 1981
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1981,
    "end": 1982
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1983,
    "end": 1986
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1987,
    "end": 1988
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1988,
    "end": 1989
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1989,
    "end": 1990
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1990,
    "end": 1991
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1991,
    "end": 1992
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1992,
    "end": 1993
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1994,
    "end": 1995
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1995,
    "end": 1996
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1997,
    "end": 1999
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2000,
    "end": 2001
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2001,
    "end": 2002
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2003,
    "end": 2005
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2006,
    "end": 2009
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2009,
    "end": 2010
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2010,
    "end": 2011
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2011,
    "end": 2012
  },
  {
    "type": "Identifier",
    "value": "a18",
    "start": 2014,
    "end": 2017
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2018,
    "end": 2019
  },
  {
    "type": "Identifier",
    "value": "b18",
    "start": 2020,
    "end": 2023
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2023,
    "end": 2024
  },
  {
    "type": "Identifier",
    "value": "b18",
    "start": 2031,
    "end": 2034
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2035,
    "end": 2036
  },
  {
    "type": "Identifier",
    "value": "a18",
    "start": 2037,
    "end": 2040
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2040,
    "end": 2041
  }
]
```
