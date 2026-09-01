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
        "start": 108,
        "end": 112
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
              "start": 115,
              "end": 118
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 120,
                "end": 126
              },
              "start": 118,
              "end": 126
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
            "start": 115,
            "end": 127
          }
        ],
        "start": 113,
        "end": 129
      },
      "abstract": false,
      "declare": false,
      "start": 102,
      "end": 129
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
        "start": 136,
        "end": 143
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 152,
        "end": 156
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
              "start": 159,
              "end": 162
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 164,
                "end": 170
              },
              "start": 162,
              "end": 170
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
            "start": 159,
            "end": 171
          }
        ],
        "start": 157,
        "end": 173
      },
      "abstract": false,
      "declare": false,
      "start": 130,
      "end": 173
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
        "start": 180,
        "end": 188
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null,
        "start": 197,
        "end": 204
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
              "start": 207,
              "end": 210
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 207,
            "end": 219
          }
        ],
        "start": 205,
        "end": 221
      },
      "abstract": false,
      "declare": false,
      "start": 174,
      "end": 221
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
        "start": 228,
        "end": 240
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 249,
        "end": 253
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
              "start": 256,
              "end": 260
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 262,
                "end": 268
              },
              "start": 260,
              "end": 268
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
            "start": 256,
            "end": 269
          }
        ],
        "start": 254,
        "end": 271
      },
      "abstract": false,
      "declare": false,
      "start": 222,
      "end": 271
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 283,
        "end": 284
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
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
              "start": 307,
              "end": 308
            },
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
                        "start": 315,
                        "end": 316
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 315,
                      "end": 316
                    }
                  ],
                  "start": 314,
                  "end": 317
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
                          "start": 321,
                          "end": 322
                        },
                        "typeArguments": null,
                        "start": 321,
                        "end": 322
                      },
                      "start": 319,
                      "end": 322
                    },
                    "start": 318,
                    "end": 322
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
                        "start": 327,
                        "end": 328
                      },
                      "typeArguments": null,
                      "start": 327,
                      "end": 328
                    },
                    "start": 327,
                    "end": 330
                  },
                  "start": 324,
                  "end": 330
                },
                "start": 310,
                "end": 330
              },
              "start": 308,
              "end": 330
            },
            "accessibility": null,
            "static": false,
            "start": 307,
            "end": 331
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 336,
              "end": 338
            },
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
                        "start": 345,
                        "end": 346
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 345,
                      "end": 346
                    }
                  ],
                  "start": 344,
                  "end": 347
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
                          "start": 351,
                          "end": 352
                        },
                        "typeArguments": null,
                        "start": 351,
                        "end": 352
                      },
                      "start": 349,
                      "end": 352
                    },
                    "start": 348,
                    "end": 352
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 357,
                      "end": 363
                    },
                    "start": 357,
                    "end": 365
                  },
                  "start": 354,
                  "end": 365
                },
                "start": 340,
                "end": 365
              },
              "start": 338,
              "end": 365
            },
            "accessibility": null,
            "static": false,
            "start": 336,
            "end": 366
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 371,
              "end": 373
            },
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
                        "start": 380,
                        "end": 381
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 380,
                      "end": 381
                    }
                  ],
                  "start": 379,
                  "end": 382
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
                          "start": 386,
                          "end": 387
                        },
                        "typeArguments": null,
                        "start": 386,
                        "end": 387
                      },
                      "start": 384,
                      "end": 387
                    },
                    "start": 383,
                    "end": 387
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 392,
                    "end": 396
                  },
                  "start": 389,
                  "end": 396
                },
                "start": 375,
                "end": 396
              },
              "start": 373,
              "end": 396
            },
            "accessibility": null,
            "static": false,
            "start": 371,
            "end": 397
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 402,
              "end": 404
            },
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
                        "start": 411,
                        "end": 412
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 411,
                      "end": 412
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 414,
                        "end": 415
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 414,
                      "end": 415
                    }
                  ],
                  "start": 410,
                  "end": 416
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
                          "start": 420,
                          "end": 421
                        },
                        "typeArguments": null,
                        "start": 420,
                        "end": 421
                      },
                      "start": 418,
                      "end": 421
                    },
                    "start": 417,
                    "end": 421
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
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 432,
                    "end": 438
                  },
                  "start": 429,
                  "end": 438
                },
                "start": 406,
                "end": 438
              },
              "start": 404,
              "end": 438
            },
            "accessibility": null,
            "static": false,
            "start": 402,
            "end": 439
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a5",
              "optional": false,
              "typeAnnotation": null,
              "start": 444,
              "end": 446
            },
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
                        "start": 453,
                        "end": 454
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 453,
                      "end": 454
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 456,
                        "end": 457
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 456,
                      "end": 457
                    }
                  ],
                  "start": 452,
                  "end": 458
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
                        "type": "TSFunctionType",
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
                                  "start": 468,
                                  "end": 469
                                },
                                "typeArguments": null,
                                "start": 468,
                                "end": 469
                              },
                              "start": 466,
                              "end": 469
                            },
                            "start": 463,
                            "end": 469
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
                              "start": 474,
                              "end": 475
                            },
                            "typeArguments": null,
                            "start": 474,
                            "end": 475
                          },
                          "start": 471,
                          "end": 475
                        },
                        "start": 462,
                        "end": 475
                      },
                      "start": 460,
                      "end": 475
                    },
                    "start": 459,
                    "end": 475
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
                      "start": 480,
                      "end": 481
                    },
                    "typeArguments": null,
                    "start": 480,
                    "end": 481
                  },
                  "start": 477,
                  "end": 481
                },
                "start": 448,
                "end": 481
              },
              "start": 446,
              "end": 481
            },
            "accessibility": null,
            "static": false,
            "start": 444,
            "end": 482
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a6",
              "optional": false,
              "typeAnnotation": null,
              "start": 487,
              "end": 489
            },
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
                        "start": 496,
                        "end": 497
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 506,
                          "end": 510
                        },
                        "typeArguments": null,
                        "start": 506,
                        "end": 510
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 496,
                      "end": 510
                    }
                  ],
                  "start": 495,
                  "end": 511
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
                        "type": "TSFunctionType",
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
                                  "start": 521,
                                  "end": 522
                                },
                                "typeArguments": null,
                                "start": 521,
                                "end": 522
                              },
                              "start": 519,
                              "end": 522
                            },
                            "start": 516,
                            "end": 522
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
                              "start": 527,
                              "end": 534
                            },
                            "typeArguments": null,
                            "start": 527,
                            "end": 534
                          },
                          "start": 524,
                          "end": 534
                        },
                        "start": 515,
                        "end": 534
                      },
                      "start": 513,
                      "end": 534
                    },
                    "start": 512,
                    "end": 534
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
                      "start": 539,
                      "end": 540
                    },
                    "typeArguments": null,
                    "start": 539,
                    "end": 540
                  },
                  "start": 536,
                  "end": 540
                },
                "start": 491,
                "end": 540
              },
              "start": 489,
              "end": 540
            },
            "accessibility": null,
            "static": false,
            "start": 487,
            "end": 541
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a11",
              "optional": false,
              "typeAnnotation": null,
              "start": 546,
              "end": 549
            },
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
                        "start": 556,
                        "end": 557
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 556,
                      "end": 557
                    }
                  ],
                  "start": 555,
                  "end": 558
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
                              "start": 564,
                              "end": 567
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
                                  "start": 569,
                                  "end": 570
                                },
                                "typeArguments": null,
                                "start": 569,
                                "end": 570
                              },
                              "start": 567,
                              "end": 570
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 564,
                            "end": 570
                          }
                        ],
                        "start": 562,
                        "end": 572
                      },
                      "start": 560,
                      "end": 572
                    },
                    "start": 559,
                    "end": 572
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
                              "start": 579,
                              "end": 582
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
                                  "start": 584,
                                  "end": 585
                                },
                                "typeArguments": null,
                                "start": 584,
                                "end": 585
                              },
                              "start": 582,
                              "end": 585
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 579,
                            "end": 586
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
                              "start": 587,
                              "end": 590
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
                                  "start": 592,
                                  "end": 593
                                },
                                "typeArguments": null,
                                "start": 592,
                                "end": 593
                              },
                              "start": 590,
                              "end": 593
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 587,
                            "end": 593
                          }
                        ],
                        "start": 577,
                        "end": 595
                      },
                      "start": 575,
                      "end": 595
                    },
                    "start": 574,
                    "end": 595
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
                      "start": 600,
                      "end": 604
                    },
                    "typeArguments": null,
                    "start": 600,
                    "end": 604
                  },
                  "start": 597,
                  "end": 604
                },
                "start": 551,
                "end": 604
              },
              "start": 549,
              "end": 604
            },
            "accessibility": null,
            "static": false,
            "start": 546,
            "end": 605
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a15",
              "optional": false,
              "typeAnnotation": null,
              "start": 610,
              "end": 613
            },
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
                        "start": 620,
                        "end": 621
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 620,
                      "end": 621
                    }
                  ],
                  "start": 619,
                  "end": 622
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
                              "start": 628,
                              "end": 629
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
                                  "start": 631,
                                  "end": 632
                                },
                                "typeArguments": null,
                                "start": 631,
                                "end": 632
                              },
                              "start": 629,
                              "end": 632
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 628,
                            "end": 633
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
                              "start": 634,
                              "end": 635
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
                                  "start": 637,
                                  "end": 638
                                },
                                "typeArguments": null,
                                "start": 637,
                                "end": 638
                              },
                              "start": 635,
                              "end": 638
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 634,
                            "end": 638
                          }
                        ],
                        "start": 626,
                        "end": 640
                      },
                      "start": 624,
                      "end": 640
                    },
                    "start": 623,
                    "end": 640
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
                        "start": 645,
                        "end": 646
                      },
                      "typeArguments": null,
                      "start": 645,
                      "end": 646
                    },
                    "start": 645,
                    "end": 648
                  },
                  "start": 642,
                  "end": 648
                },
                "start": 615,
                "end": 648
              },
              "start": 613,
              "end": 648
            },
            "accessibility": null,
            "static": false,
            "start": 610,
            "end": 649
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a16",
              "optional": false,
              "typeAnnotation": null,
              "start": 654,
              "end": 657
            },
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
                        "start": 664,
                        "end": 665
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 674,
                          "end": 678
                        },
                        "typeArguments": null,
                        "start": 674,
                        "end": 678
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 664,
                      "end": 678
                    }
                  ],
                  "start": 663,
                  "end": 679
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
                              "start": 685,
                              "end": 686
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
                                  "start": 688,
                                  "end": 689
                                },
                                "typeArguments": null,
                                "start": 688,
                                "end": 689
                              },
                              "start": 686,
                              "end": 689
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 685,
                            "end": 690
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
                              "start": 691,
                              "end": 692
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
                                  "start": 694,
                                  "end": 695
                                },
                                "typeArguments": null,
                                "start": 694,
                                "end": 695
                              },
                              "start": 692,
                              "end": 695
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 691,
                            "end": 695
                          }
                        ],
                        "start": 683,
                        "end": 697
                      },
                      "start": 681,
                      "end": 697
                    },
                    "start": 680,
                    "end": 697
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
                        "start": 702,
                        "end": 703
                      },
                      "typeArguments": null,
                      "start": 702,
                      "end": 703
                    },
                    "start": 702,
                    "end": 705
                  },
                  "start": 699,
                  "end": 705
                },
                "start": 659,
                "end": 705
              },
              "start": 657,
              "end": 705
            },
            "accessibility": null,
            "static": false,
            "start": 654,
            "end": 706
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a17",
              "optional": false,
              "typeAnnotation": null,
              "start": 711,
              "end": 714
            },
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
                            "start": 731,
                            "end": 732
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Base",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 741,
                              "end": 745
                            },
                            "typeArguments": null,
                            "start": 741,
                            "end": 745
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 731,
                          "end": 745
                        }
                      ],
                      "start": 730,
                      "end": 746
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
                              "start": 750,
                              "end": 751
                            },
                            "typeArguments": null,
                            "start": 750,
                            "end": 751
                          },
                          "start": 748,
                          "end": 751
                        },
                        "start": 747,
                        "end": 751
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
                            "start": 754,
                            "end": 755
                          },
                          "typeArguments": null,
                          "start": 754,
                          "end": 755
                        },
                        "start": 754,
                        "end": 757
                      },
                      "start": 752,
                      "end": 757
                    },
                    "start": 726,
                    "end": 758
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
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 772,
                            "end": 773
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Derived",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 782,
                              "end": 789
                            },
                            "typeArguments": null,
                            "start": 782,
                            "end": 789
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 772,
                          "end": 789
                        }
                      ],
                      "start": 771,
                      "end": 790
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
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 794,
                              "end": 795
                            },
                            "typeArguments": null,
                            "start": 794,
                            "end": 795
                          },
                          "start": 792,
                          "end": 795
                        },
                        "start": 791,
                        "end": 795
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
                            "start": 798,
                            "end": 799
                          },
                          "typeArguments": null,
                          "start": 798,
                          "end": 799
                        },
                        "start": 798,
                        "end": 801
                      },
                      "start": 796,
                      "end": 801
                    },
                    "start": 767,
                    "end": 802
                  }
                ],
                "start": 716,
                "end": 808
              },
              "start": 714,
              "end": 808
            },
            "accessibility": null,
            "static": false,
            "start": 711,
            "end": 809
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a18",
              "optional": false,
              "typeAnnotation": null,
              "start": 814,
              "end": 817
            },
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
                            "start": 834,
                            "end": 835
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Derived",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 844,
                              "end": 851
                            },
                            "typeArguments": null,
                            "start": 844,
                            "end": 851
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 834,
                          "end": 851
                        }
                      ],
                      "start": 833,
                      "end": 852
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
                              "start": 856,
                              "end": 857
                            },
                            "typeArguments": null,
                            "start": 856,
                            "end": 857
                          },
                          "start": 854,
                          "end": 857
                        },
                        "start": 853,
                        "end": 857
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 860,
                          "end": 866
                        },
                        "start": 860,
                        "end": 868
                      },
                      "start": 858,
                      "end": 868
                    },
                    "start": 829,
                    "end": 869
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
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 883,
                            "end": 884
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Base",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 893,
                              "end": 897
                            },
                            "typeArguments": null,
                            "start": 893,
                            "end": 897
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 883,
                          "end": 897
                        }
                      ],
                      "start": 882,
                      "end": 898
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
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 902,
                              "end": 903
                            },
                            "typeArguments": null,
                            "start": 902,
                            "end": 903
                          },
                          "start": 900,
                          "end": 903
                        },
                        "start": 899,
                        "end": 903
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 906,
                          "end": 912
                        },
                        "start": 906,
                        "end": 914
                      },
                      "start": 904,
                      "end": 914
                    },
                    "start": 878,
                    "end": 915
                  }
                ],
                "start": 819,
                "end": 921
              },
              "start": 817,
              "end": 921
            },
            "accessibility": null,
            "static": false,
            "start": 814,
            "end": 922
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a19",
              "optional": false,
              "typeAnnotation": null,
              "start": 927,
              "end": 930
            },
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
                            "start": 947,
                            "end": 948
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Derived",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 957,
                              "end": 964
                            },
                            "typeArguments": null,
                            "start": 957,
                            "end": 964
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 947,
                          "end": 964
                        }
                      ],
                      "start": 946,
                      "end": 965
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
                                      "start": 977,
                                      "end": 978
                                    },
                                    "typeArguments": null,
                                    "start": 977,
                                    "end": 978
                                  },
                                  "start": 975,
                                  "end": 978
                                },
                                "start": 974,
                                "end": 978
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
                                  "start": 983,
                                  "end": 984
                                },
                                "typeArguments": null,
                                "start": 983,
                                "end": 984
                              },
                              "start": 980,
                              "end": 984
                            },
                            "start": 969,
                            "end": 984
                          },
                          "start": 967,
                          "end": 984
                        },
                        "start": 966,
                        "end": 984
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
                            "start": 987,
                            "end": 988
                          },
                          "typeArguments": null,
                          "start": 987,
                          "end": 988
                        },
                        "start": 987,
                        "end": 990
                      },
                      "start": 985,
                      "end": 990
                    },
                    "start": 942,
                    "end": 991
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
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1005,
                            "end": 1006
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Base",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1015,
                              "end": 1019
                            },
                            "typeArguments": null,
                            "start": 1015,
                            "end": 1019
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 1005,
                          "end": 1019
                        }
                      ],
                      "start": 1004,
                      "end": 1020
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
                                      "name": "U",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1032,
                                      "end": 1033
                                    },
                                    "typeArguments": null,
                                    "start": 1032,
                                    "end": 1033
                                  },
                                  "start": 1030,
                                  "end": 1033
                                },
                                "start": 1029,
                                "end": 1033
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
                                  "start": 1038,
                                  "end": 1039
                                },
                                "typeArguments": null,
                                "start": 1038,
                                "end": 1039
                              },
                              "start": 1035,
                              "end": 1039
                            },
                            "start": 1024,
                            "end": 1039
                          },
                          "start": 1022,
                          "end": 1039
                        },
                        "start": 1021,
                        "end": 1039
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
                            "start": 1042,
                            "end": 1043
                          },
                          "typeArguments": null,
                          "start": 1042,
                          "end": 1043
                        },
                        "start": 1042,
                        "end": 1045
                      },
                      "start": 1040,
                      "end": 1045
                    },
                    "start": 1000,
                    "end": 1046
                  }
                ],
                "start": 932,
                "end": 1052
              },
              "start": 930,
              "end": 1052
            },
            "accessibility": null,
            "static": false,
            "start": 927,
            "end": 1053
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a20",
              "optional": false,
              "typeAnnotation": null,
              "start": 1058,
              "end": 1061
            },
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
                                        "start": 1100,
                                        "end": 1101
                                      },
                                      "constraint": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Derived",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1110,
                                          "end": 1117
                                        },
                                        "typeArguments": null,
                                        "start": 1110,
                                        "end": 1117
                                      },
                                      "default": null,
                                      "in": false,
                                      "out": false,
                                      "const": false,
                                      "start": 1100,
                                      "end": 1117
                                    }
                                  ],
                                  "start": 1099,
                                  "end": 1118
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
                                          "start": 1122,
                                          "end": 1123
                                        },
                                        "typeArguments": null,
                                        "start": 1122,
                                        "end": 1123
                                      },
                                      "start": 1120,
                                      "end": 1123
                                    },
                                    "start": 1119,
                                    "end": 1123
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
                                      "start": 1126,
                                      "end": 1127
                                    },
                                    "typeArguments": null,
                                    "start": 1126,
                                    "end": 1127
                                  },
                                  "start": 1124,
                                  "end": 1127
                                },
                                "start": 1095,
                                "end": 1128
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
                                        "name": "U",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1146,
                                        "end": 1147
                                      },
                                      "constraint": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Base",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1156,
                                          "end": 1160
                                        },
                                        "typeArguments": null,
                                        "start": 1156,
                                        "end": 1160
                                      },
                                      "default": null,
                                      "in": false,
                                      "out": false,
                                      "const": false,
                                      "start": 1146,
                                      "end": 1160
                                    }
                                  ],
                                  "start": 1145,
                                  "end": 1161
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
                                          "name": "U",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1165,
                                          "end": 1166
                                        },
                                        "typeArguments": null,
                                        "start": 1165,
                                        "end": 1166
                                      },
                                      "start": 1163,
                                      "end": 1166
                                    },
                                    "start": 1162,
                                    "end": 1166
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
                                      "start": 1169,
                                      "end": 1170
                                    },
                                    "typeArguments": null,
                                    "start": 1169,
                                    "end": 1170
                                  },
                                  "start": 1167,
                                  "end": 1170
                                },
                                "start": 1141,
                                "end": 1171
                              }
                            ],
                            "start": 1081,
                            "end": 1181
                          },
                          "start": 1079,
                          "end": 1181
                        },
                        "start": 1078,
                        "end": 1181
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 1184,
                          "end": 1187
                        },
                        "start": 1184,
                        "end": 1189
                      },
                      "start": 1182,
                      "end": 1189
                    },
                    "start": 1073,
                    "end": 1190
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
                                        "start": 1226,
                                        "end": 1227
                                      },
                                      "constraint": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Base",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1236,
                                          "end": 1240
                                        },
                                        "typeArguments": null,
                                        "start": 1236,
                                        "end": 1240
                                      },
                                      "default": null,
                                      "in": false,
                                      "out": false,
                                      "const": false,
                                      "start": 1226,
                                      "end": 1240
                                    }
                                  ],
                                  "start": 1225,
                                  "end": 1241
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
                                          "start": 1245,
                                          "end": 1246
                                        },
                                        "typeArguments": null,
                                        "start": 1245,
                                        "end": 1246
                                      },
                                      "start": 1243,
                                      "end": 1246
                                    },
                                    "start": 1242,
                                    "end": 1246
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
                                      "start": 1249,
                                      "end": 1250
                                    },
                                    "typeArguments": null,
                                    "start": 1249,
                                    "end": 1250
                                  },
                                  "start": 1247,
                                  "end": 1250
                                },
                                "start": 1221,
                                "end": 1251
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
                                        "name": "U",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1269,
                                        "end": 1270
                                      },
                                      "constraint": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Derived2",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1279,
                                          "end": 1287
                                        },
                                        "typeArguments": null,
                                        "start": 1279,
                                        "end": 1287
                                      },
                                      "default": null,
                                      "in": false,
                                      "out": false,
                                      "const": false,
                                      "start": 1269,
                                      "end": 1287
                                    }
                                  ],
                                  "start": 1268,
                                  "end": 1288
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
                                          "name": "U",
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
                                      "start": 1296,
                                      "end": 1297
                                    },
                                    "typeArguments": null,
                                    "start": 1296,
                                    "end": 1297
                                  },
                                  "start": 1294,
                                  "end": 1297
                                },
                                "start": 1264,
                                "end": 1298
                              }
                            ],
                            "start": 1207,
                            "end": 1308
                          },
                          "start": 1205,
                          "end": 1308
                        },
                        "start": 1204,
                        "end": 1308
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 1311,
                          "end": 1314
                        },
                        "start": 1311,
                        "end": 1316
                      },
                      "start": 1309,
                      "end": 1316
                    },
                    "start": 1199,
                    "end": 1317
                  }
                ],
                "start": 1063,
                "end": 1323
              },
              "start": 1061,
              "end": 1323
            },
            "accessibility": null,
            "static": false,
            "start": 1058,
            "end": 1324
          }
        ],
        "start": 285,
        "end": 1326
      },
      "declare": false,
      "start": 273,
      "end": 1326
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 1345,
        "end": 1346
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 1355,
            "end": 1356
          },
          "typeArguments": null,
          "start": 1355,
          "end": 1356
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
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
              "start": 1374,
              "end": 1375
            },
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
                        "start": 1382,
                        "end": 1383
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1382,
                      "end": 1383
                    }
                  ],
                  "start": 1381,
                  "end": 1384
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
                          "start": 1388,
                          "end": 1389
                        },
                        "typeArguments": null,
                        "start": 1388,
                        "end": 1389
                      },
                      "start": 1386,
                      "end": 1389
                    },
                    "start": 1385,
                    "end": 1389
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
                        "start": 1394,
                        "end": 1395
                      },
                      "typeArguments": null,
                      "start": 1394,
                      "end": 1395
                    },
                    "start": 1394,
                    "end": 1397
                  },
                  "start": 1391,
                  "end": 1397
                },
                "start": 1377,
                "end": 1397
              },
              "start": 1375,
              "end": 1397
            },
            "accessibility": null,
            "static": false,
            "start": 1374,
            "end": 1398
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1460,
              "end": 1462
            },
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
                        "start": 1469,
                        "end": 1470
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1469,
                      "end": 1470
                    }
                  ],
                  "start": 1468,
                  "end": 1471
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
                          "start": 1475,
                          "end": 1476
                        },
                        "typeArguments": null,
                        "start": 1475,
                        "end": 1476
                      },
                      "start": 1473,
                      "end": 1476
                    },
                    "start": 1472,
                    "end": 1476
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 1481,
                      "end": 1487
                    },
                    "start": 1481,
                    "end": 1489
                  },
                  "start": 1478,
                  "end": 1489
                },
                "start": 1464,
                "end": 1489
              },
              "start": 1462,
              "end": 1489
            },
            "accessibility": null,
            "static": false,
            "start": 1460,
            "end": 1490
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1501,
              "end": 1503
            },
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
                        "start": 1510,
                        "end": 1511
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1510,
                      "end": 1511
                    }
                  ],
                  "start": 1509,
                  "end": 1512
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
                          "start": 1516,
                          "end": 1517
                        },
                        "typeArguments": null,
                        "start": 1516,
                        "end": 1517
                      },
                      "start": 1514,
                      "end": 1517
                    },
                    "start": 1513,
                    "end": 1517
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
                      "start": 1522,
                      "end": 1523
                    },
                    "typeArguments": null,
                    "start": 1522,
                    "end": 1523
                  },
                  "start": 1519,
                  "end": 1523
                },
                "start": 1505,
                "end": 1523
              },
              "start": 1503,
              "end": 1523
            },
            "accessibility": null,
            "static": false,
            "start": 1501,
            "end": 1524
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1559,
              "end": 1561
            },
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
                        "start": 1568,
                        "end": 1569
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1568,
                      "end": 1569
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1571,
                        "end": 1572
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1571,
                      "end": 1572
                    }
                  ],
                  "start": 1567,
                  "end": 1573
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
                          "start": 1577,
                          "end": 1578
                        },
                        "typeArguments": null,
                        "start": 1577,
                        "end": 1578
                      },
                      "start": 1575,
                      "end": 1578
                    },
                    "start": 1574,
                    "end": 1578
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
                          "start": 1583,
                          "end": 1584
                        },
                        "typeArguments": null,
                        "start": 1583,
                        "end": 1584
                      },
                      "start": 1581,
                      "end": 1584
                    },
                    "start": 1580,
                    "end": 1584
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1589,
                    "end": 1595
                  },
                  "start": 1586,
                  "end": 1595
                },
                "start": 1563,
                "end": 1595
              },
              "start": 1561,
              "end": 1595
            },
            "accessibility": null,
            "static": false,
            "start": 1559,
            "end": 1596
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a5",
              "optional": false,
              "typeAnnotation": null,
              "start": 1671,
              "end": 1673
            },
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
                        "start": 1680,
                        "end": 1681
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1680,
                      "end": 1681
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1683,
                        "end": 1684
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1683,
                      "end": 1684
                    }
                  ],
                  "start": 1679,
                  "end": 1685
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
                        "type": "TSFunctionType",
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
                                  "start": 1695,
                                  "end": 1696
                                },
                                "typeArguments": null,
                                "start": 1695,
                                "end": 1696
                              },
                              "start": 1693,
                              "end": 1696
                            },
                            "start": 1690,
                            "end": 1696
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
                              "start": 1701,
                              "end": 1702
                            },
                            "typeArguments": null,
                            "start": 1701,
                            "end": 1702
                          },
                          "start": 1698,
                          "end": 1702
                        },
                        "start": 1689,
                        "end": 1702
                      },
                      "start": 1687,
                      "end": 1702
                    },
                    "start": 1686,
                    "end": 1702
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
                      "start": 1707,
                      "end": 1708
                    },
                    "typeArguments": null,
                    "start": 1707,
                    "end": 1708
                  },
                  "start": 1704,
                  "end": 1708
                },
                "start": 1675,
                "end": 1708
              },
              "start": 1673,
              "end": 1708
            },
            "accessibility": null,
            "static": false,
            "start": 1671,
            "end": 1709
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a6",
              "optional": false,
              "typeAnnotation": null,
              "start": 1776,
              "end": 1778
            },
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
                        "start": 1785,
                        "end": 1786
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1795,
                          "end": 1799
                        },
                        "typeArguments": null,
                        "start": 1795,
                        "end": 1799
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1785,
                      "end": 1799
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1801,
                        "end": 1802
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1811,
                          "end": 1818
                        },
                        "typeArguments": null,
                        "start": 1811,
                        "end": 1818
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1801,
                      "end": 1818
                    }
                  ],
                  "start": 1784,
                  "end": 1819
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
                        "type": "TSFunctionType",
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
                                  "start": 1829,
                                  "end": 1830
                                },
                                "typeArguments": null,
                                "start": 1829,
                                "end": 1830
                              },
                              "start": 1827,
                              "end": 1830
                            },
                            "start": 1824,
                            "end": 1830
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
                              "start": 1835,
                              "end": 1836
                            },
                            "typeArguments": null,
                            "start": 1835,
                            "end": 1836
                          },
                          "start": 1832,
                          "end": 1836
                        },
                        "start": 1823,
                        "end": 1836
                      },
                      "start": 1821,
                      "end": 1836
                    },
                    "start": 1820,
                    "end": 1836
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
                      "start": 1841,
                      "end": 1842
                    },
                    "typeArguments": null,
                    "start": 1841,
                    "end": 1842
                  },
                  "start": 1838,
                  "end": 1842
                },
                "start": 1780,
                "end": 1842
              },
              "start": 1778,
              "end": 1842
            },
            "accessibility": null,
            "static": false,
            "start": 1776,
            "end": 1843
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a11",
              "optional": false,
              "typeAnnotation": null,
              "start": 1897,
              "end": 1900
            },
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
                        "start": 1907,
                        "end": 1908
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1907,
                      "end": 1908
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1910,
                        "end": 1911
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1910,
                      "end": 1911
                    }
                  ],
                  "start": 1906,
                  "end": 1912
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
                              "start": 1918,
                              "end": 1921
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
                                  "start": 1923,
                                  "end": 1924
                                },
                                "typeArguments": null,
                                "start": 1923,
                                "end": 1924
                              },
                              "start": 1921,
                              "end": 1924
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1918,
                            "end": 1924
                          }
                        ],
                        "start": 1916,
                        "end": 1926
                      },
                      "start": 1914,
                      "end": 1926
                    },
                    "start": 1913,
                    "end": 1926
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
                              "start": 1933,
                              "end": 1936
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
                                  "start": 1938,
                                  "end": 1939
                                },
                                "typeArguments": null,
                                "start": 1938,
                                "end": 1939
                              },
                              "start": 1936,
                              "end": 1939
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1933,
                            "end": 1940
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
                              "start": 1941,
                              "end": 1944
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
                                  "start": 1946,
                                  "end": 1947
                                },
                                "typeArguments": null,
                                "start": 1946,
                                "end": 1947
                              },
                              "start": 1944,
                              "end": 1947
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1941,
                            "end": 1947
                          }
                        ],
                        "start": 1931,
                        "end": 1949
                      },
                      "start": 1929,
                      "end": 1949
                    },
                    "start": 1928,
                    "end": 1949
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
                      "start": 1954,
                      "end": 1958
                    },
                    "typeArguments": null,
                    "start": 1954,
                    "end": 1958
                  },
                  "start": 1951,
                  "end": 1958
                },
                "start": 1902,
                "end": 1958
              },
              "start": 1900,
              "end": 1958
            },
            "accessibility": null,
            "static": false,
            "start": 1897,
            "end": 1959
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a15",
              "optional": false,
              "typeAnnotation": null,
              "start": 1970,
              "end": 1973
            },
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
                        "start": 1980,
                        "end": 1981
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1980,
                      "end": 1981
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "V",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1983,
                        "end": 1984
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1983,
                      "end": 1984
                    }
                  ],
                  "start": 1979,
                  "end": 1985
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
                              "start": 1991,
                              "end": 1992
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
                            "accessibility": null,
                            "static": false,
                            "start": 1991,
                            "end": 1996
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
                              "start": 1997,
                              "end": 1998
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
                                  "start": 2000,
                                  "end": 2001
                                },
                                "typeArguments": null,
                                "start": 2000,
                                "end": 2001
                              },
                              "start": 1998,
                              "end": 2001
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1997,
                            "end": 2002
                          }
                        ],
                        "start": 1989,
                        "end": 2004
                      },
                      "start": 1987,
                      "end": 2004
                    },
                    "start": 1986,
                    "end": 2004
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
                        "start": 2009,
                        "end": 2010
                      },
                      "typeArguments": null,
                      "start": 2009,
                      "end": 2010
                    },
                    "start": 2009,
                    "end": 2012
                  },
                  "start": 2006,
                  "end": 2012
                },
                "start": 1975,
                "end": 2012
              },
              "start": 1973,
              "end": 2012
            },
            "accessibility": null,
            "static": false,
            "start": 1970,
            "end": 2013
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a16",
              "optional": false,
              "typeAnnotation": null,
              "start": 2038,
              "end": 2041
            },
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
                        "start": 2048,
                        "end": 2049
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2048,
                      "end": 2049
                    }
                  ],
                  "start": 2047,
                  "end": 2050
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
                              "start": 2056,
                              "end": 2057
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
                                  "start": 2059,
                                  "end": 2060
                                },
                                "typeArguments": null,
                                "start": 2059,
                                "end": 2060
                              },
                              "start": 2057,
                              "end": 2060
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 2056,
                            "end": 2061
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
                              "start": 2062,
                              "end": 2063
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
                                  "start": 2065,
                                  "end": 2066
                                },
                                "typeArguments": null,
                                "start": 2065,
                                "end": 2066
                              },
                              "start": 2063,
                              "end": 2066
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 2062,
                            "end": 2066
                          }
                        ],
                        "start": 2054,
                        "end": 2068
                      },
                      "start": 2052,
                      "end": 2068
                    },
                    "start": 2051,
                    "end": 2068
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
                        "start": 2073,
                        "end": 2074
                      },
                      "typeArguments": null,
                      "start": 2073,
                      "end": 2074
                    },
                    "start": 2073,
                    "end": 2076
                  },
                  "start": 2070,
                  "end": 2076
                },
                "start": 2043,
                "end": 2076
              },
              "start": 2041,
              "end": 2076
            },
            "accessibility": null,
            "static": false,
            "start": 2038,
            "end": 2077
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a17",
              "optional": false,
              "typeAnnotation": null,
              "start": 2117,
              "end": 2120
            },
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
                        "start": 2127,
                        "end": 2128
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2137,
                          "end": 2141
                        },
                        "typeArguments": null,
                        "start": 2137,
                        "end": 2141
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2127,
                      "end": 2141
                    }
                  ],
                  "start": 2126,
                  "end": 2142
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
                          "start": 2146,
                          "end": 2147
                        },
                        "typeArguments": null,
                        "start": 2146,
                        "end": 2147
                      },
                      "start": 2144,
                      "end": 2147
                    },
                    "start": 2143,
                    "end": 2147
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
                        "start": 2152,
                        "end": 2153
                      },
                      "typeArguments": null,
                      "start": 2152,
                      "end": 2153
                    },
                    "start": 2152,
                    "end": 2155
                  },
                  "start": 2149,
                  "end": 2155
                },
                "start": 2122,
                "end": 2155
              },
              "start": 2120,
              "end": 2155
            },
            "accessibility": null,
            "static": false,
            "start": 2117,
            "end": 2156
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a18",
              "optional": false,
              "typeAnnotation": null,
              "start": 2196,
              "end": 2199
            },
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
                        "start": 2206,
                        "end": 2207
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2216,
                          "end": 2220
                        },
                        "typeArguments": null,
                        "start": 2216,
                        "end": 2220
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2206,
                      "end": 2220
                    }
                  ],
                  "start": 2205,
                  "end": 2221
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
                          "start": 2225,
                          "end": 2226
                        },
                        "typeArguments": null,
                        "start": 2225,
                        "end": 2226
                      },
                      "start": 2223,
                      "end": 2226
                    },
                    "start": 2222,
                    "end": 2226
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 2231,
                      "end": 2237
                    },
                    "start": 2231,
                    "end": 2239
                  },
                  "start": 2228,
                  "end": 2239
                },
                "start": 2201,
                "end": 2239
              },
              "start": 2199,
              "end": 2239
            },
            "accessibility": null,
            "static": false,
            "start": 2196,
            "end": 2240
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a19",
              "optional": false,
              "typeAnnotation": null,
              "start": 2280,
              "end": 2283
            },
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
                        "start": 2290,
                        "end": 2291
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2300,
                          "end": 2304
                        },
                        "typeArguments": null,
                        "start": 2300,
                        "end": 2304
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2290,
                      "end": 2304
                    }
                  ],
                  "start": 2289,
                  "end": 2305
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
                                  "start": 2317,
                                  "end": 2318
                                },
                                "typeArguments": null,
                                "start": 2317,
                                "end": 2318
                              },
                              "start": 2315,
                              "end": 2318
                            },
                            "start": 2314,
                            "end": 2318
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
                              "start": 2323,
                              "end": 2324
                            },
                            "typeArguments": null,
                            "start": 2323,
                            "end": 2324
                          },
                          "start": 2320,
                          "end": 2324
                        },
                        "start": 2309,
                        "end": 2324
                      },
                      "start": 2307,
                      "end": 2324
                    },
                    "start": 2306,
                    "end": 2324
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
                        "start": 2329,
                        "end": 2330
                      },
                      "typeArguments": null,
                      "start": 2329,
                      "end": 2330
                    },
                    "start": 2329,
                    "end": 2332
                  },
                  "start": 2326,
                  "end": 2332
                },
                "start": 2285,
                "end": 2332
              },
              "start": 2283,
              "end": 2332
            },
            "accessibility": null,
            "static": false,
            "start": 2280,
            "end": 2333
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a20",
              "optional": false,
              "typeAnnotation": null,
              "start": 2344,
              "end": 2347
            },
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
                                "start": 2362,
                                "end": 2363
                              },
                              "constraint": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Base",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2372,
                                  "end": 2376
                                },
                                "typeArguments": null,
                                "start": 2372,
                                "end": 2376
                              },
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false,
                              "start": 2362,
                              "end": 2376
                            }
                          ],
                          "start": 2361,
                          "end": 2377
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
                                  "start": 2381,
                                  "end": 2382
                                },
                                "typeArguments": null,
                                "start": 2381,
                                "end": 2382
                              },
                              "start": 2379,
                              "end": 2382
                            },
                            "start": 2378,
                            "end": 2382
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
                              "start": 2387,
                              "end": 2388
                            },
                            "typeArguments": null,
                            "start": 2387,
                            "end": 2388
                          },
                          "start": 2384,
                          "end": 2388
                        },
                        "start": 2357,
                        "end": 2388
                      },
                      "start": 2355,
                      "end": 2388
                    },
                    "start": 2354,
                    "end": 2388
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 2393,
                      "end": 2396
                    },
                    "start": 2393,
                    "end": 2398
                  },
                  "start": 2390,
                  "end": 2398
                },
                "start": 2349,
                "end": 2398
              },
              "start": 2347,
              "end": 2398
            },
            "accessibility": null,
            "static": false,
            "start": 2344,
            "end": 2399
          }
        ],
        "start": 1357,
        "end": 2407
      },
      "declare": false,
      "start": 1335,
      "end": 2407
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 102,
  "end": 2407
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 102,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 108,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 113,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 115,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 120,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 128,
    "end": 129
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 130,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 136,
    "end": 143
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 144,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 152,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 159,
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
    "value": "string",
    "start": 164,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 172,
    "end": 173
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 174,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 180,
    "end": 188
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 189,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 197,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 207,
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
    "value": ";",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 220,
    "end": 221
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 222,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "OtherDerived",
    "start": 228,
    "end": 240
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 241,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 249,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 254,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "bing",
    "start": 256,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 260,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 262,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 270,
    "end": 271
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 273,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 285,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 307,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 308,
    "end": 309
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 310,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 314,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 317,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Identifier",
    "value": "T",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 324,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 330,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 336,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 338,
    "end": 339
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 340,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 344,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 347,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 349,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 354,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 357,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 365,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 371,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 373,
    "end": 374
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 375,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 379,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 380,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 382,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 384,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 389,
    "end": 391
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 392,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 396,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 402,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 404,
    "end": 405
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 406,
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
    "value": "T",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 412,
    "end": 413
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 414,
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
    "value": "(",
    "start": 416,
    "end": 417
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 418,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 421,
    "end": 422
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "value": "U",
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
    "value": "=>",
    "start": 429,
    "end": 431
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 432,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 438,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 444,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 446,
    "end": 447
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 448,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 452,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 454,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 456,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 457,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 458,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 460,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 462,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 463,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 466,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 468,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 471,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 477,
    "end": 479
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 481,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "a6",
    "start": 487,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 489,
    "end": 490
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 491,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 495,
    "end": 496
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 496,
    "end": 497
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 498,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 506,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 511,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 513,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 515,
    "end": 516
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 516,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 519,
    "end": 520
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 521,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 522,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 524,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 527,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 534,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 536,
    "end": 538
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 539,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 540,
    "end": 541
  },
  {
    "type": "Identifier",
    "value": "a11",
    "start": 546,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 549,
    "end": 550
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 551,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 555,
    "end": 556
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 556,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 557,
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
    "type": "Punctuator",
    "value": "{",
    "start": 562,
    "end": 563
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 564,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 567,
    "end": 568
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 569,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 571,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 572,
    "end": 573
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 574,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 575,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 577,
    "end": 578
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 579,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 582,
    "end": 583
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 584,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 585,
    "end": 586
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 587,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 590,
    "end": 591
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 592,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 594,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 595,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 597,
    "end": 599
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 600,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 604,
    "end": 605
  },
  {
    "type": "Identifier",
    "value": "a15",
    "start": 610,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 613,
    "end": 614
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 615,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 619,
    "end": 620
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 620,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 621,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 622,
    "end": 623
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 623,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 624,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 626,
    "end": 627
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 628,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 629,
    "end": 630
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 631,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 632,
    "end": 633
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 634,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 635,
    "end": 636
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 637,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 639,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 640,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 642,
    "end": 644
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 645,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 646,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 647,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 648,
    "end": 649
  },
  {
    "type": "Identifier",
    "value": "a16",
    "start": 654,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 657,
    "end": 658
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 659,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 663,
    "end": 664
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 664,
    "end": 665
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 666,
    "end": 673
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 674,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 678,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 679,
    "end": 680
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 680,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 681,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 683,
    "end": 684
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 685,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 686,
    "end": 687
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 688,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 689,
    "end": 690
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 691,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 692,
    "end": 693
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 694,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 696,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 697,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 699,
    "end": 701
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 702,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 703,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 704,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 705,
    "end": 706
  },
  {
    "type": "Identifier",
    "value": "a17",
    "start": 711,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 714,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 716,
    "end": 717
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 726,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 730,
    "end": 731
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 731,
    "end": 732
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 733,
    "end": 740
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 741,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 745,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 746,
    "end": 747
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 747,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 748,
    "end": 749
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 750,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 751,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 752,
    "end": 753
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 754,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 755,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 756,
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
    "value": "new",
    "start": 767,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 771,
    "end": 772
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 772,
    "end": 773
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 774,
    "end": 781
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 782,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 789,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 790,
    "end": 791
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 791,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 792,
    "end": 793
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 794,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 795,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 796,
    "end": 797
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 798,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 799,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Punctuator",
    "value": "}",
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
    "type": "Identifier",
    "value": "a18",
    "start": 814,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 817,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 819,
    "end": 820
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 829,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 833,
    "end": 834
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 834,
    "end": 835
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 836,
    "end": 843
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 844,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 851,
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
    "type": "Identifier",
    "value": "T",
    "start": 856,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "number",
    "start": 860,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 866,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 867,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 868,
    "end": 869
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 878,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 882,
    "end": 883
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 883,
    "end": 884
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 885,
    "end": 892
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 893,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 897,
    "end": 898
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 898,
    "end": 899
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 899,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 900,
    "end": 901
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 902,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 903,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 904,
    "end": 905
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 906,
    "end": 912
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 912,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 913,
    "end": 914
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 914,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 920,
    "end": 921
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 921,
    "end": 922
  },
  {
    "type": "Identifier",
    "value": "a19",
    "start": 927,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 930,
    "end": 931
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 932,
    "end": 933
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 942,
    "end": 945
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 946,
    "end": 947
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 947,
    "end": 948
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 949,
    "end": 956
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 957,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 964,
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
    "type": "Keyword",
    "value": "new",
    "start": 969,
    "end": 972
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 973,
    "end": 974
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 974,
    "end": 975
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 975,
    "end": 976
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 977,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 978,
    "end": 979
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 980,
    "end": 982
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 983,
    "end": 984
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 984,
    "end": 985
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 985,
    "end": 986
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 987,
    "end": 988
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 988,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 989,
    "end": 990
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 990,
    "end": 991
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1000,
    "end": 1003
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1007,
    "end": 1014
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1015,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1019,
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
    "type": "Keyword",
    "value": "new",
    "start": 1024,
    "end": 1027
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1028,
    "end": 1029
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1035,
    "end": 1037
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1043,
    "end": 1044
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Identifier",
    "value": "a20",
    "start": 1058,
    "end": 1061
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1063,
    "end": 1064
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1073,
    "end": 1076
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
    "type": "Punctuator",
    "value": "{",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1095,
    "end": 1098
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1099,
    "end": 1100
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1100,
    "end": 1101
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1102,
    "end": 1109
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1110,
    "end": 1117
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1117,
    "end": 1118
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1118,
    "end": 1119
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1119,
    "end": 1120
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1123,
    "end": 1124
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1126,
    "end": 1127
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1127,
    "end": 1128
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1141,
    "end": 1144
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1145,
    "end": 1146
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1146,
    "end": 1147
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1148,
    "end": 1155
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1156,
    "end": 1160
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1160,
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
    "value": "a",
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
    "value": "U",
    "start": 1165,
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
    "value": ":",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1180,
    "end": 1181
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1181,
    "end": 1182
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1182,
    "end": 1183
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1184,
    "end": 1187
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1187,
    "end": 1188
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1188,
    "end": 1189
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1189,
    "end": 1190
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1199,
    "end": 1202
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
    "type": "Punctuator",
    "value": "{",
    "start": 1207,
    "end": 1208
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1221,
    "end": 1224
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1225,
    "end": 1226
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1226,
    "end": 1227
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1228,
    "end": 1235
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1236,
    "end": 1240
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1240,
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
    "value": "a",
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
    "value": "T",
    "start": 1245,
    "end": 1246
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1246,
    "end": 1247
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1247,
    "end": 1248
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1249,
    "end": 1250
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1250,
    "end": 1251
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1264,
    "end": 1267
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1268,
    "end": 1269
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1269,
    "end": 1270
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1271,
    "end": 1278
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 1279,
    "end": 1287
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1287,
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
    "value": "a",
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
    "value": "U",
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
    "value": ":",
    "start": 1294,
    "end": 1295
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1296,
    "end": 1297
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1297,
    "end": 1298
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1307,
    "end": 1308
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1308,
    "end": 1309
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1309,
    "end": 1310
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1311,
    "end": 1314
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1314,
    "end": 1315
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1315,
    "end": 1316
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1316,
    "end": 1317
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1322,
    "end": 1323
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1323,
    "end": 1324
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1335,
    "end": 1344
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1345,
    "end": 1346
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1347,
    "end": 1354
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1355,
    "end": 1356
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1357,
    "end": 1358
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1374,
    "end": 1375
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1375,
    "end": 1376
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1377,
    "end": 1380
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1381,
    "end": 1382
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1382,
    "end": 1383
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1383,
    "end": 1384
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1384,
    "end": 1385
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1385,
    "end": 1386
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1386,
    "end": 1387
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": "=>",
    "start": 1391,
    "end": 1393
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1394,
    "end": 1395
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1395,
    "end": 1396
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1396,
    "end": 1397
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1397,
    "end": 1398
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1460,
    "end": 1462
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1462,
    "end": 1463
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1464,
    "end": 1467
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1468,
    "end": 1469
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1469,
    "end": 1470
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1470,
    "end": 1471
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1471,
    "end": 1472
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1472,
    "end": 1473
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1473,
    "end": 1474
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1475,
    "end": 1476
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1476,
    "end": 1477
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1478,
    "end": 1480
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1481,
    "end": 1487
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1487,
    "end": 1488
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1488,
    "end": 1489
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1489,
    "end": 1490
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 1501,
    "end": 1503
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1503,
    "end": 1504
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1505,
    "end": 1508
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1509,
    "end": 1510
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1510,
    "end": 1511
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1511,
    "end": 1512
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1512,
    "end": 1513
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1513,
    "end": 1514
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1514,
    "end": 1515
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1516,
    "end": 1517
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1517,
    "end": 1518
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1519,
    "end": 1521
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1522,
    "end": 1523
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1523,
    "end": 1524
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 1559,
    "end": 1561
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1561,
    "end": 1562
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1563,
    "end": 1566
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1567,
    "end": 1568
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1568,
    "end": 1569
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1569,
    "end": 1570
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1571,
    "end": 1572
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1572,
    "end": 1573
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1573,
    "end": 1574
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1574,
    "end": 1575
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1575,
    "end": 1576
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1577,
    "end": 1578
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1578,
    "end": 1579
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1580,
    "end": 1581
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1581,
    "end": 1582
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1583,
    "end": 1584
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1584,
    "end": 1585
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1586,
    "end": 1588
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1589,
    "end": 1595
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1595,
    "end": 1596
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 1671,
    "end": 1673
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1673,
    "end": 1674
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1675,
    "end": 1678
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1679,
    "end": 1680
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1680,
    "end": 1681
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1681,
    "end": 1682
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1683,
    "end": 1684
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1684,
    "end": 1685
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1685,
    "end": 1686
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1686,
    "end": 1687
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1687,
    "end": 1688
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1689,
    "end": 1690
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 1690,
    "end": 1693
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1693,
    "end": 1694
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1695,
    "end": 1696
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1696,
    "end": 1697
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1698,
    "end": 1700
  },
  {
    "type": "Identifier",
    "value": "U",
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
    "value": "=>",
    "start": 1704,
    "end": 1706
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1707,
    "end": 1708
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1708,
    "end": 1709
  },
  {
    "type": "Identifier",
    "value": "a6",
    "start": 1776,
    "end": 1778
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1778,
    "end": 1779
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1780,
    "end": 1783
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1784,
    "end": 1785
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1785,
    "end": 1786
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1787,
    "end": 1794
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1795,
    "end": 1799
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1799,
    "end": 1800
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1801,
    "end": 1802
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1803,
    "end": 1810
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1811,
    "end": 1818
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1818,
    "end": 1819
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1819,
    "end": 1820
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1820,
    "end": 1821
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1821,
    "end": 1822
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1823,
    "end": 1824
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 1824,
    "end": 1827
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1827,
    "end": 1828
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1829,
    "end": 1830
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1830,
    "end": 1831
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1832,
    "end": 1834
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1835,
    "end": 1836
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1836,
    "end": 1837
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1838,
    "end": 1840
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1841,
    "end": 1842
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1842,
    "end": 1843
  },
  {
    "type": "Identifier",
    "value": "a11",
    "start": 1897,
    "end": 1900
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1900,
    "end": 1901
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1902,
    "end": 1905
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1906,
    "end": 1907
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1907,
    "end": 1908
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1908,
    "end": 1909
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1910,
    "end": 1911
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1911,
    "end": 1912
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1912,
    "end": 1913
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1913,
    "end": 1914
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1914,
    "end": 1915
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1916,
    "end": 1917
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1918,
    "end": 1921
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1921,
    "end": 1922
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1923,
    "end": 1924
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1925,
    "end": 1926
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1926,
    "end": 1927
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "type": "Punctuator",
    "value": "{",
    "start": 1931,
    "end": 1932
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1933,
    "end": 1936
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1936,
    "end": 1937
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1938,
    "end": 1939
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1939,
    "end": 1940
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 1941,
    "end": 1944
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1944,
    "end": 1945
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1946,
    "end": 1947
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1948,
    "end": 1949
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1949,
    "end": 1950
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1951,
    "end": 1953
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1954,
    "end": 1958
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1958,
    "end": 1959
  },
  {
    "type": "Identifier",
    "value": "a15",
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
    "value": "<",
    "start": 1979,
    "end": 1980
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1980,
    "end": 1981
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1981,
    "end": 1982
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1983,
    "end": 1984
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1984,
    "end": 1985
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1985,
    "end": 1986
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1986,
    "end": 1987
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1987,
    "end": 1988
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1989,
    "end": 1990
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
    "value": "U",
    "start": 1994,
    "end": 1995
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1995,
    "end": 1996
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1997,
    "end": 1998
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1998,
    "end": 1999
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 2000,
    "end": 2001
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2001,
    "end": 2002
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2003,
    "end": 2004
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2004,
    "end": 2005
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2006,
    "end": 2008
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2009,
    "end": 2010
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2010,
    "end": 2011
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2011,
    "end": 2012
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2012,
    "end": 2013
  },
  {
    "type": "Identifier",
    "value": "a16",
    "start": 2038,
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
    "value": "new",
    "start": 2043,
    "end": 2046
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2047,
    "end": 2048
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2048,
    "end": 2049
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2049,
    "end": 2050
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2050,
    "end": 2051
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2051,
    "end": 2052
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2052,
    "end": 2053
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2054,
    "end": 2055
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2056,
    "end": 2057
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2057,
    "end": 2058
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2059,
    "end": 2060
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2060,
    "end": 2061
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2062,
    "end": 2063
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2063,
    "end": 2064
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2065,
    "end": 2066
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2067,
    "end": 2068
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2068,
    "end": 2069
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2070,
    "end": 2072
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2073,
    "end": 2074
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2074,
    "end": 2075
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Identifier",
    "value": "a17",
    "start": 2117,
    "end": 2120
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2120,
    "end": 2121
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2122,
    "end": 2125
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2126,
    "end": 2127
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2127,
    "end": 2128
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2129,
    "end": 2136
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2137,
    "end": 2141
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2141,
    "end": 2142
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2142,
    "end": 2143
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2143,
    "end": 2144
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2144,
    "end": 2145
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2146,
    "end": 2147
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2147,
    "end": 2148
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2149,
    "end": 2151
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2152,
    "end": 2153
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2153,
    "end": 2154
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2154,
    "end": 2155
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2155,
    "end": 2156
  },
  {
    "type": "Identifier",
    "value": "a18",
    "start": 2196,
    "end": 2199
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2199,
    "end": 2200
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2201,
    "end": 2204
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2205,
    "end": 2206
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2206,
    "end": 2207
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2208,
    "end": 2215
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2216,
    "end": 2220
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2220,
    "end": 2221
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2221,
    "end": 2222
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2222,
    "end": 2223
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2223,
    "end": 2224
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2225,
    "end": 2226
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2226,
    "end": 2227
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2228,
    "end": 2230
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2231,
    "end": 2237
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2237,
    "end": 2238
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2238,
    "end": 2239
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2239,
    "end": 2240
  },
  {
    "type": "Identifier",
    "value": "a19",
    "start": 2280,
    "end": 2283
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2283,
    "end": 2284
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2285,
    "end": 2288
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2289,
    "end": 2290
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2290,
    "end": 2291
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2292,
    "end": 2299
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2300,
    "end": 2304
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2304,
    "end": 2305
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2305,
    "end": 2306
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2306,
    "end": 2307
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2307,
    "end": 2308
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2309,
    "end": 2312
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2313,
    "end": 2314
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2314,
    "end": 2315
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2315,
    "end": 2316
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2317,
    "end": 2318
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2318,
    "end": 2319
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2320,
    "end": 2322
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2323,
    "end": 2324
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2324,
    "end": 2325
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2326,
    "end": 2328
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2329,
    "end": 2330
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2330,
    "end": 2331
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2331,
    "end": 2332
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2332,
    "end": 2333
  },
  {
    "type": "Identifier",
    "value": "a20",
    "start": 2344,
    "end": 2347
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2347,
    "end": 2348
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2349,
    "end": 2352
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2353,
    "end": 2354
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2354,
    "end": 2355
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2355,
    "end": 2356
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2357,
    "end": 2360
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2361,
    "end": 2362
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2362,
    "end": 2363
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2364,
    "end": 2371
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2372,
    "end": 2376
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2376,
    "end": 2377
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2377,
    "end": 2378
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2378,
    "end": 2379
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2379,
    "end": 2380
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2381,
    "end": 2382
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2382,
    "end": 2383
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2384,
    "end": 2386
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2387,
    "end": 2388
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2388,
    "end": 2389
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2390,
    "end": 2392
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2393,
    "end": 2396
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2396,
    "end": 2397
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2397,
    "end": 2398
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2398,
    "end": 2399
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2406,
    "end": 2407
  }
]
```
