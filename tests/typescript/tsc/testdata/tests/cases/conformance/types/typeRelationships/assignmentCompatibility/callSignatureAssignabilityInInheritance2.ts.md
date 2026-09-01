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
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 314,
                        "end": 320
                      },
                      "start": 312,
                      "end": 320
                    },
                    "start": 311,
                    "end": 320
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 325,
                      "end": 331
                    },
                    "start": 325,
                    "end": 333
                  },
                  "start": 322,
                  "end": 333
                },
                "start": 310,
                "end": 333
              },
              "start": 308,
              "end": 333
            },
            "accessibility": null,
            "static": false,
            "start": 307,
            "end": 334
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
              "start": 339,
              "end": 341
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 347,
                        "end": 353
                      },
                      "start": 345,
                      "end": 353
                    },
                    "start": 344,
                    "end": 353
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 358,
                      "end": 364
                    },
                    "start": 358,
                    "end": 366
                  },
                  "start": 355,
                  "end": 366
                },
                "start": 343,
                "end": 366
              },
              "start": 341,
              "end": 366
            },
            "accessibility": null,
            "static": false,
            "start": 339,
            "end": 367
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
              "start": 372,
              "end": 374
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 380,
                        "end": 386
                      },
                      "start": 378,
                      "end": 386
                    },
                    "start": 377,
                    "end": 386
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 391,
                    "end": 395
                  },
                  "start": 388,
                  "end": 395
                },
                "start": 376,
                "end": 395
              },
              "start": 374,
              "end": 395
            },
            "accessibility": null,
            "static": false,
            "start": 372,
            "end": 396
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
              "start": 401,
              "end": 403
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
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
                        "start": 409,
                        "end": 415
                      },
                      "start": 407,
                      "end": 415
                    },
                    "start": 406,
                    "end": 415
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 420,
                        "end": 426
                      },
                      "start": 418,
                      "end": 426
                    },
                    "start": 417,
                    "end": 426
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 431,
                    "end": 437
                  },
                  "start": 428,
                  "end": 437
                },
                "start": 405,
                "end": 437
              },
              "start": 403,
              "end": 437
            },
            "accessibility": null,
            "static": false,
            "start": 401,
            "end": 438
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
              "start": 443,
              "end": 445
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
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
                                "type": "TSStringKeyword",
                                "start": 457,
                                "end": 463
                              },
                              "start": 455,
                              "end": 463
                            },
                            "start": 452,
                            "end": 463
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 468,
                            "end": 474
                          },
                          "start": 465,
                          "end": 474
                        },
                        "start": 451,
                        "end": 474
                      },
                      "start": 449,
                      "end": 474
                    },
                    "start": 448,
                    "end": 474
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 479,
                    "end": 485
                  },
                  "start": 476,
                  "end": 485
                },
                "start": 447,
                "end": 485
              },
              "start": 445,
              "end": 485
            },
            "accessibility": null,
            "static": false,
            "start": 443,
            "end": 486
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
              "start": 491,
              "end": 493
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
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
                                  "name": "Base",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 505,
                                  "end": 509
                                },
                                "typeArguments": null,
                                "start": 505,
                                "end": 509
                              },
                              "start": 503,
                              "end": 509
                            },
                            "start": 500,
                            "end": 509
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
                              "start": 514,
                              "end": 521
                            },
                            "typeArguments": null,
                            "start": 514,
                            "end": 521
                          },
                          "start": 511,
                          "end": 521
                        },
                        "start": 499,
                        "end": 521
                      },
                      "start": 497,
                      "end": 521
                    },
                    "start": 496,
                    "end": 521
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
                      "start": 526,
                      "end": 530
                    },
                    "typeArguments": null,
                    "start": 526,
                    "end": 530
                  },
                  "start": 523,
                  "end": 530
                },
                "start": 495,
                "end": 530
              },
              "start": 493,
              "end": 530
            },
            "accessibility": null,
            "static": false,
            "start": 491,
            "end": 531
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a7",
              "optional": false,
              "typeAnnotation": null,
              "start": 536,
              "end": 538
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
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
                                  "name": "Base",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 550,
                                  "end": 554
                                },
                                "typeArguments": null,
                                "start": 550,
                                "end": 554
                              },
                              "start": 548,
                              "end": 554
                            },
                            "start": 545,
                            "end": 554
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
                              "start": 559,
                              "end": 566
                            },
                            "typeArguments": null,
                            "start": 559,
                            "end": 566
                          },
                          "start": 556,
                          "end": 566
                        },
                        "start": 544,
                        "end": 566
                      },
                      "start": 542,
                      "end": 566
                    },
                    "start": 541,
                    "end": 566
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r",
                        "optional": false,
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
                              "start": 575,
                              "end": 579
                            },
                            "typeArguments": null,
                            "start": 575,
                            "end": 579
                          },
                          "start": 573,
                          "end": 579
                        },
                        "start": 572,
                        "end": 579
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
                          "start": 584,
                          "end": 591
                        },
                        "typeArguments": null,
                        "start": 584,
                        "end": 591
                      },
                      "start": 581,
                      "end": 591
                    },
                    "start": 571,
                    "end": 591
                  },
                  "start": 568,
                  "end": 591
                },
                "start": 540,
                "end": 591
              },
              "start": 538,
              "end": 591
            },
            "accessibility": null,
            "static": false,
            "start": 536,
            "end": 592
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a8",
              "optional": false,
              "typeAnnotation": null,
              "start": 597,
              "end": 599
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
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
                                  "name": "Base",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 611,
                                  "end": 615
                                },
                                "typeArguments": null,
                                "start": 611,
                                "end": 615
                              },
                              "start": 609,
                              "end": 615
                            },
                            "start": 606,
                            "end": 615
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
                              "start": 620,
                              "end": 627
                            },
                            "typeArguments": null,
                            "start": 620,
                            "end": 627
                          },
                          "start": 617,
                          "end": 627
                        },
                        "start": 605,
                        "end": 627
                      },
                      "start": 603,
                      "end": 627
                    },
                    "start": 602,
                    "end": 627
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
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
                            "name": "arg2",
                            "optional": false,
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
                                  "start": 639,
                                  "end": 643
                                },
                                "typeArguments": null,
                                "start": 639,
                                "end": 643
                              },
                              "start": 637,
                              "end": 643
                            },
                            "start": 633,
                            "end": 643
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
                              "start": 648,
                              "end": 655
                            },
                            "typeArguments": null,
                            "start": 648,
                            "end": 655
                          },
                          "start": 645,
                          "end": 655
                        },
                        "start": 632,
                        "end": 655
                      },
                      "start": 630,
                      "end": 655
                    },
                    "start": 629,
                    "end": 655
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r",
                        "optional": false,
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
                              "start": 664,
                              "end": 668
                            },
                            "typeArguments": null,
                            "start": 664,
                            "end": 668
                          },
                          "start": 662,
                          "end": 668
                        },
                        "start": 661,
                        "end": 668
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
                          "start": 673,
                          "end": 680
                        },
                        "typeArguments": null,
                        "start": 673,
                        "end": 680
                      },
                      "start": 670,
                      "end": 680
                    },
                    "start": 660,
                    "end": 680
                  },
                  "start": 657,
                  "end": 680
                },
                "start": 601,
                "end": 680
              },
              "start": 599,
              "end": 680
            },
            "accessibility": null,
            "static": false,
            "start": 597,
            "end": 681
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a9",
              "optional": false,
              "typeAnnotation": null,
              "start": 686,
              "end": 688
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
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
                                  "name": "Base",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 700,
                                  "end": 704
                                },
                                "typeArguments": null,
                                "start": 700,
                                "end": 704
                              },
                              "start": 698,
                              "end": 704
                            },
                            "start": 695,
                            "end": 704
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
                              "start": 709,
                              "end": 716
                            },
                            "typeArguments": null,
                            "start": 709,
                            "end": 716
                          },
                          "start": 706,
                          "end": 716
                        },
                        "start": 694,
                        "end": 716
                      },
                      "start": 692,
                      "end": 716
                    },
                    "start": 691,
                    "end": 716
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
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
                            "name": "arg2",
                            "optional": false,
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
                                  "start": 728,
                                  "end": 732
                                },
                                "typeArguments": null,
                                "start": 728,
                                "end": 732
                              },
                              "start": 726,
                              "end": 732
                            },
                            "start": 722,
                            "end": 732
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
                              "start": 737,
                              "end": 744
                            },
                            "typeArguments": null,
                            "start": 737,
                            "end": 744
                          },
                          "start": 734,
                          "end": 744
                        },
                        "start": 721,
                        "end": 744
                      },
                      "start": 719,
                      "end": 744
                    },
                    "start": 718,
                    "end": 744
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r",
                        "optional": false,
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
                              "start": 753,
                              "end": 757
                            },
                            "typeArguments": null,
                            "start": 753,
                            "end": 757
                          },
                          "start": 751,
                          "end": 757
                        },
                        "start": 750,
                        "end": 757
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
                          "start": 762,
                          "end": 769
                        },
                        "typeArguments": null,
                        "start": 762,
                        "end": 769
                      },
                      "start": 759,
                      "end": 769
                    },
                    "start": 749,
                    "end": 769
                  },
                  "start": 746,
                  "end": 769
                },
                "start": 690,
                "end": 769
              },
              "start": 688,
              "end": 769
            },
            "accessibility": null,
            "static": false,
            "start": 686,
            "end": 770
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a10",
              "optional": false,
              "typeAnnotation": null,
              "start": 775,
              "end": 778
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 784,
                      "end": 785
                    },
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Derived",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 787,
                            "end": 794
                          },
                          "typeArguments": null,
                          "start": 787,
                          "end": 794
                        },
                        "start": 787,
                        "end": 796
                      },
                      "start": 785,
                      "end": 796
                    },
                    "value": null,
                    "start": 781,
                    "end": 796
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
                      "start": 801,
                      "end": 808
                    },
                    "typeArguments": null,
                    "start": 801,
                    "end": 808
                  },
                  "start": 798,
                  "end": 808
                },
                "start": 780,
                "end": 808
              },
              "start": 778,
              "end": 808
            },
            "accessibility": null,
            "static": false,
            "start": 775,
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
              "name": "a11",
              "optional": false,
              "typeAnnotation": null,
              "start": 814,
              "end": 817
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
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
                              "start": 825,
                              "end": 828
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 830,
                                "end": 836
                              },
                              "start": 828,
                              "end": 836
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 825,
                            "end": 836
                          }
                        ],
                        "start": 823,
                        "end": 838
                      },
                      "start": 821,
                      "end": 838
                    },
                    "start": 820,
                    "end": 838
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
                              "start": 845,
                              "end": 848
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 850,
                                "end": 856
                              },
                              "start": 848,
                              "end": 856
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 845,
                            "end": 857
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
                              "start": 858,
                              "end": 861
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 863,
                                "end": 869
                              },
                              "start": 861,
                              "end": 869
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 858,
                            "end": 869
                          }
                        ],
                        "start": 843,
                        "end": 871
                      },
                      "start": 841,
                      "end": 871
                    },
                    "start": 840,
                    "end": 871
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
                      "start": 876,
                      "end": 880
                    },
                    "typeArguments": null,
                    "start": 876,
                    "end": 880
                  },
                  "start": 873,
                  "end": 880
                },
                "start": 819,
                "end": 880
              },
              "start": 817,
              "end": 880
            },
            "accessibility": null,
            "static": false,
            "start": 814,
            "end": 881
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a12",
              "optional": false,
              "typeAnnotation": null,
              "start": 886,
              "end": 889
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
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
                          "name": "Array",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 895,
                          "end": 900
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
                                "start": 901,
                                "end": 905
                              },
                              "typeArguments": null,
                              "start": 901,
                              "end": 905
                            }
                          ],
                          "start": 900,
                          "end": 906
                        },
                        "start": 895,
                        "end": 906
                      },
                      "start": 893,
                      "end": 906
                    },
                    "start": 892,
                    "end": 906
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
                          "name": "Array",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 911,
                          "end": 916
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Derived2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 917,
                                "end": 925
                              },
                              "typeArguments": null,
                              "start": 917,
                              "end": 925
                            }
                          ],
                          "start": 916,
                          "end": 926
                        },
                        "start": 911,
                        "end": 926
                      },
                      "start": 909,
                      "end": 926
                    },
                    "start": 908,
                    "end": 926
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 931,
                      "end": 936
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
                            "start": 937,
                            "end": 944
                          },
                          "typeArguments": null,
                          "start": 937,
                          "end": 944
                        }
                      ],
                      "start": 936,
                      "end": 945
                    },
                    "start": 931,
                    "end": 945
                  },
                  "start": 928,
                  "end": 945
                },
                "start": 891,
                "end": 945
              },
              "start": 889,
              "end": 945
            },
            "accessibility": null,
            "static": false,
            "start": 886,
            "end": 946
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a13",
              "optional": false,
              "typeAnnotation": null,
              "start": 951,
              "end": 954
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
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
                          "name": "Array",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 960,
                          "end": 965
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
                                "start": 966,
                                "end": 970
                              },
                              "typeArguments": null,
                              "start": 966,
                              "end": 970
                            }
                          ],
                          "start": 965,
                          "end": 971
                        },
                        "start": 960,
                        "end": 971
                      },
                      "start": 958,
                      "end": 971
                    },
                    "start": 957,
                    "end": 971
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
                          "name": "Array",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 976,
                          "end": 981
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
                                "start": 982,
                                "end": 989
                              },
                              "typeArguments": null,
                              "start": 982,
                              "end": 989
                            }
                          ],
                          "start": 981,
                          "end": 990
                        },
                        "start": 976,
                        "end": 990
                      },
                      "start": 974,
                      "end": 990
                    },
                    "start": 973,
                    "end": 990
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 995,
                      "end": 1000
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
                            "start": 1001,
                            "end": 1008
                          },
                          "typeArguments": null,
                          "start": 1001,
                          "end": 1008
                        }
                      ],
                      "start": 1000,
                      "end": 1009
                    },
                    "start": 995,
                    "end": 1009
                  },
                  "start": 992,
                  "end": 1009
                },
                "start": 956,
                "end": 1009
              },
              "start": 954,
              "end": 1009
            },
            "accessibility": null,
            "static": false,
            "start": 951,
            "end": 1010
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a14",
              "optional": false,
              "typeAnnotation": null,
              "start": 1015,
              "end": 1018
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
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
                              "start": 1026,
                              "end": 1027
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1029,
                                "end": 1035
                              },
                              "start": 1027,
                              "end": 1035
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1026,
                            "end": 1036
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
                              "start": 1037,
                              "end": 1038
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1040,
                                "end": 1046
                              },
                              "start": 1038,
                              "end": 1046
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1037,
                            "end": 1046
                          }
                        ],
                        "start": 1024,
                        "end": 1048
                      },
                      "start": 1022,
                      "end": 1048
                    },
                    "start": 1021,
                    "end": 1048
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Object",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1053,
                      "end": 1059
                    },
                    "typeArguments": null,
                    "start": 1053,
                    "end": 1059
                  },
                  "start": 1050,
                  "end": 1059
                },
                "start": 1020,
                "end": 1059
              },
              "start": 1018,
              "end": 1059
            },
            "accessibility": null,
            "static": false,
            "start": 1015,
            "end": 1060
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
              "start": 1065,
              "end": 1068
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1084,
                            "end": 1090
                          },
                          "start": 1082,
                          "end": 1090
                        },
                        "start": 1081,
                        "end": 1090
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 1093,
                          "end": 1099
                        },
                        "start": 1093,
                        "end": 1101
                      },
                      "start": 1091,
                      "end": 1101
                    },
                    "start": 1080,
                    "end": 1102
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
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
                            "start": 1115,
                            "end": 1121
                          },
                          "start": 1113,
                          "end": 1121
                        },
                        "start": 1112,
                        "end": 1121
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 1124,
                          "end": 1130
                        },
                        "start": 1124,
                        "end": 1132
                      },
                      "start": 1122,
                      "end": 1132
                    },
                    "start": 1111,
                    "end": 1133
                  }
                ],
                "start": 1070,
                "end": 1139
              },
              "start": 1068,
              "end": 1139
            },
            "accessibility": null,
            "static": false,
            "start": 1065,
            "end": 1140
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
              "start": 1145,
              "end": 1148
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
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
                            "start": 1161,
                            "end": 1162
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Derived",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1171,
                              "end": 1178
                            },
                            "typeArguments": null,
                            "start": 1171,
                            "end": 1178
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 1161,
                          "end": 1178
                        }
                      ],
                      "start": 1160,
                      "end": 1179
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
                              "start": 1183,
                              "end": 1184
                            },
                            "typeArguments": null,
                            "start": 1183,
                            "end": 1184
                          },
                          "start": 1181,
                          "end": 1184
                        },
                        "start": 1180,
                        "end": 1184
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 1187,
                          "end": 1193
                        },
                        "start": 1187,
                        "end": 1195
                      },
                      "start": 1185,
                      "end": 1195
                    },
                    "start": 1160,
                    "end": 1196
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
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
                            "start": 1206,
                            "end": 1207
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Base",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1216,
                              "end": 1220
                            },
                            "typeArguments": null,
                            "start": 1216,
                            "end": 1220
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 1206,
                          "end": 1220
                        }
                      ],
                      "start": 1205,
                      "end": 1221
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
                              "start": 1225,
                              "end": 1226
                            },
                            "typeArguments": null,
                            "start": 1225,
                            "end": 1226
                          },
                          "start": 1223,
                          "end": 1226
                        },
                        "start": 1222,
                        "end": 1226
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 1229,
                          "end": 1235
                        },
                        "start": 1229,
                        "end": 1237
                      },
                      "start": 1227,
                      "end": 1237
                    },
                    "start": 1205,
                    "end": 1238
                  }
                ],
                "start": 1150,
                "end": 1244
              },
              "start": 1148,
              "end": 1244
            },
            "accessibility": null,
            "static": false,
            "start": 1145,
            "end": 1245
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
              "start": 1250,
              "end": 1253
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
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
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 1273,
                                    "end": 1279
                                  },
                                  "start": 1271,
                                  "end": 1279
                                },
                                "start": 1270,
                                "end": 1279
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1284,
                                "end": 1290
                              },
                              "start": 1281,
                              "end": 1290
                            },
                            "start": 1269,
                            "end": 1290
                          },
                          "start": 1267,
                          "end": 1290
                        },
                        "start": 1266,
                        "end": 1290
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 1293,
                          "end": 1299
                        },
                        "start": 1293,
                        "end": 1301
                      },
                      "start": 1291,
                      "end": 1301
                    },
                    "start": 1265,
                    "end": 1302
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
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
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 1319,
                                    "end": 1325
                                  },
                                  "start": 1317,
                                  "end": 1325
                                },
                                "start": 1316,
                                "end": 1325
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1330,
                                "end": 1336
                              },
                              "start": 1327,
                              "end": 1336
                            },
                            "start": 1315,
                            "end": 1336
                          },
                          "start": 1313,
                          "end": 1336
                        },
                        "start": 1312,
                        "end": 1336
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 1339,
                          "end": 1345
                        },
                        "start": 1339,
                        "end": 1347
                      },
                      "start": 1337,
                      "end": 1347
                    },
                    "start": 1311,
                    "end": 1348
                  }
                ],
                "start": 1255,
                "end": 1354
              },
              "start": 1253,
              "end": 1354
            },
            "accessibility": null,
            "static": false,
            "start": 1250,
            "end": 1355
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
              "start": 1360,
              "end": 1363
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
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
                                "type": "TSCallSignatureDeclaration",
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
                                        "type": "TSNumberKeyword",
                                        "start": 1397,
                                        "end": 1403
                                      },
                                      "start": 1395,
                                      "end": 1403
                                    },
                                    "start": 1394,
                                    "end": 1403
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 1406,
                                    "end": 1412
                                  },
                                  "start": 1404,
                                  "end": 1412
                                },
                                "start": 1393,
                                "end": 1413
                              },
                              {
                                "type": "TSCallSignatureDeclaration",
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
                                        "type": "TSStringKeyword",
                                        "start": 1430,
                                        "end": 1436
                                      },
                                      "start": 1428,
                                      "end": 1436
                                    },
                                    "start": 1427,
                                    "end": 1436
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 1439,
                                    "end": 1445
                                  },
                                  "start": 1437,
                                  "end": 1445
                                },
                                "start": 1426,
                                "end": 1446
                              }
                            ],
                            "start": 1379,
                            "end": 1456
                          },
                          "start": 1377,
                          "end": 1456
                        },
                        "start": 1376,
                        "end": 1456
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 1459,
                          "end": 1462
                        },
                        "start": 1459,
                        "end": 1464
                      },
                      "start": 1457,
                      "end": 1464
                    },
                    "start": 1375,
                    "end": 1465
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
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
                                "type": "TSCallSignatureDeclaration",
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
                                        "type": "TSBooleanKeyword",
                                        "start": 1496,
                                        "end": 1503
                                      },
                                      "start": 1494,
                                      "end": 1503
                                    },
                                    "start": 1493,
                                    "end": 1503
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSBooleanKeyword",
                                    "start": 1506,
                                    "end": 1513
                                  },
                                  "start": 1504,
                                  "end": 1513
                                },
                                "start": 1492,
                                "end": 1514
                              },
                              {
                                "type": "TSCallSignatureDeclaration",
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
                                          "name": "Date",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1531,
                                          "end": 1535
                                        },
                                        "typeArguments": null,
                                        "start": 1531,
                                        "end": 1535
                                      },
                                      "start": 1529,
                                      "end": 1535
                                    },
                                    "start": 1528,
                                    "end": 1535
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Date",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1538,
                                      "end": 1542
                                    },
                                    "typeArguments": null,
                                    "start": 1538,
                                    "end": 1542
                                  },
                                  "start": 1536,
                                  "end": 1542
                                },
                                "start": 1527,
                                "end": 1543
                              }
                            ],
                            "start": 1478,
                            "end": 1553
                          },
                          "start": 1476,
                          "end": 1553
                        },
                        "start": 1475,
                        "end": 1553
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 1556,
                          "end": 1559
                        },
                        "start": 1556,
                        "end": 1561
                      },
                      "start": 1554,
                      "end": 1561
                    },
                    "start": 1474,
                    "end": 1562
                  }
                ],
                "start": 1365,
                "end": 1568
              },
              "start": 1363,
              "end": 1568
            },
            "accessibility": null,
            "static": false,
            "start": 1360,
            "end": 1569
          }
        ],
        "start": 285,
        "end": 1571
      },
      "declare": false,
      "start": 273,
      "end": 1571
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 1590,
        "end": 1591
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
            "start": 1600,
            "end": 1601
          },
          "typeArguments": null,
          "start": 1600,
          "end": 1601
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
              "start": 1619,
              "end": 1620
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 1623,
                        "end": 1624
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1623,
                      "end": 1624
                    }
                  ],
                  "start": 1622,
                  "end": 1625
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
                          "start": 1629,
                          "end": 1630
                        },
                        "typeArguments": null,
                        "start": 1629,
                        "end": 1630
                      },
                      "start": 1627,
                      "end": 1630
                    },
                    "start": 1626,
                    "end": 1630
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
                        "start": 1635,
                        "end": 1636
                      },
                      "typeArguments": null,
                      "start": 1635,
                      "end": 1636
                    },
                    "start": 1635,
                    "end": 1638
                  },
                  "start": 1632,
                  "end": 1638
                },
                "start": 1622,
                "end": 1638
              },
              "start": 1620,
              "end": 1638
            },
            "accessibility": null,
            "static": false,
            "start": 1619,
            "end": 1639
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
              "start": 1701,
              "end": 1703
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 1706,
                        "end": 1707
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1706,
                      "end": 1707
                    }
                  ],
                  "start": 1705,
                  "end": 1708
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
                          "start": 1712,
                          "end": 1713
                        },
                        "typeArguments": null,
                        "start": 1712,
                        "end": 1713
                      },
                      "start": 1710,
                      "end": 1713
                    },
                    "start": 1709,
                    "end": 1713
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 1718,
                      "end": 1724
                    },
                    "start": 1718,
                    "end": 1726
                  },
                  "start": 1715,
                  "end": 1726
                },
                "start": 1705,
                "end": 1726
              },
              "start": 1703,
              "end": 1726
            },
            "accessibility": null,
            "static": false,
            "start": 1701,
            "end": 1727
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
              "start": 1738,
              "end": 1740
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 1743,
                        "end": 1744
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1743,
                      "end": 1744
                    }
                  ],
                  "start": 1742,
                  "end": 1745
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
                          "start": 1749,
                          "end": 1750
                        },
                        "typeArguments": null,
                        "start": 1749,
                        "end": 1750
                      },
                      "start": 1747,
                      "end": 1750
                    },
                    "start": 1746,
                    "end": 1750
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
                      "start": 1755,
                      "end": 1756
                    },
                    "typeArguments": null,
                    "start": 1755,
                    "end": 1756
                  },
                  "start": 1752,
                  "end": 1756
                },
                "start": 1742,
                "end": 1756
              },
              "start": 1740,
              "end": 1756
            },
            "accessibility": null,
            "static": false,
            "start": 1738,
            "end": 1757
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
              "start": 1792,
              "end": 1794
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 1797,
                        "end": 1798
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1797,
                      "end": 1798
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1800,
                        "end": 1801
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1800,
                      "end": 1801
                    }
                  ],
                  "start": 1796,
                  "end": 1802
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
                          "start": 1806,
                          "end": 1807
                        },
                        "typeArguments": null,
                        "start": 1806,
                        "end": 1807
                      },
                      "start": 1804,
                      "end": 1807
                    },
                    "start": 1803,
                    "end": 1807
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
                          "start": 1812,
                          "end": 1813
                        },
                        "typeArguments": null,
                        "start": 1812,
                        "end": 1813
                      },
                      "start": 1810,
                      "end": 1813
                    },
                    "start": 1809,
                    "end": 1813
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
                      "start": 1818,
                      "end": 1819
                    },
                    "typeArguments": null,
                    "start": 1818,
                    "end": 1819
                  },
                  "start": 1815,
                  "end": 1819
                },
                "start": 1796,
                "end": 1819
              },
              "start": 1794,
              "end": 1819
            },
            "accessibility": null,
            "static": false,
            "start": 1792,
            "end": 1820
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
              "start": 1895,
              "end": 1897
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 1900,
                        "end": 1901
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1900,
                      "end": 1901
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1903,
                        "end": 1904
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1903,
                      "end": 1904
                    }
                  ],
                  "start": 1899,
                  "end": 1905
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
                                  "start": 1915,
                                  "end": 1916
                                },
                                "typeArguments": null,
                                "start": 1915,
                                "end": 1916
                              },
                              "start": 1913,
                              "end": 1916
                            },
                            "start": 1910,
                            "end": 1916
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
                              "start": 1921,
                              "end": 1922
                            },
                            "typeArguments": null,
                            "start": 1921,
                            "end": 1922
                          },
                          "start": 1918,
                          "end": 1922
                        },
                        "start": 1909,
                        "end": 1922
                      },
                      "start": 1907,
                      "end": 1922
                    },
                    "start": 1906,
                    "end": 1922
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
                      "start": 1927,
                      "end": 1928
                    },
                    "typeArguments": null,
                    "start": 1927,
                    "end": 1928
                  },
                  "start": 1924,
                  "end": 1928
                },
                "start": 1899,
                "end": 1928
              },
              "start": 1897,
              "end": 1928
            },
            "accessibility": null,
            "static": false,
            "start": 1895,
            "end": 1929
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
              "start": 1996,
              "end": 1998
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 2001,
                        "end": 2002
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2011,
                          "end": 2015
                        },
                        "typeArguments": null,
                        "start": 2011,
                        "end": 2015
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2001,
                      "end": 2015
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2017,
                        "end": 2018
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2027,
                          "end": 2034
                        },
                        "typeArguments": null,
                        "start": 2027,
                        "end": 2034
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2017,
                      "end": 2034
                    }
                  ],
                  "start": 2000,
                  "end": 2035
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
                            "start": 2040,
                            "end": 2046
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
                              "start": 2051,
                              "end": 2052
                            },
                            "typeArguments": null,
                            "start": 2051,
                            "end": 2052
                          },
                          "start": 2048,
                          "end": 2052
                        },
                        "start": 2039,
                        "end": 2052
                      },
                      "start": 2037,
                      "end": 2052
                    },
                    "start": 2036,
                    "end": 2052
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
                      "start": 2057,
                      "end": 2058
                    },
                    "typeArguments": null,
                    "start": 2057,
                    "end": 2058
                  },
                  "start": 2054,
                  "end": 2058
                },
                "start": 2000,
                "end": 2058
              },
              "start": 1998,
              "end": 2058
            },
            "accessibility": null,
            "static": false,
            "start": 1996,
            "end": 2059
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a7",
              "optional": false,
              "typeAnnotation": null,
              "start": 2113,
              "end": 2115
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 2118,
                        "end": 2119
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2128,
                          "end": 2132
                        },
                        "typeArguments": null,
                        "start": 2128,
                        "end": 2132
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2118,
                      "end": 2132
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2134,
                        "end": 2135
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2144,
                          "end": 2151
                        },
                        "typeArguments": null,
                        "start": 2144,
                        "end": 2151
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2134,
                      "end": 2151
                    }
                  ],
                  "start": 2117,
                  "end": 2152
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
                                  "start": 2162,
                                  "end": 2163
                                },
                                "typeArguments": null,
                                "start": 2162,
                                "end": 2163
                              },
                              "start": 2160,
                              "end": 2163
                            },
                            "start": 2157,
                            "end": 2163
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
                              "start": 2168,
                              "end": 2169
                            },
                            "typeArguments": null,
                            "start": 2168,
                            "end": 2169
                          },
                          "start": 2165,
                          "end": 2169
                        },
                        "start": 2156,
                        "end": 2169
                      },
                      "start": 2154,
                      "end": 2169
                    },
                    "start": 2153,
                    "end": 2169
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r",
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
                              "start": 2178,
                              "end": 2179
                            },
                            "typeArguments": null,
                            "start": 2178,
                            "end": 2179
                          },
                          "start": 2176,
                          "end": 2179
                        },
                        "start": 2175,
                        "end": 2179
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
                          "start": 2184,
                          "end": 2185
                        },
                        "typeArguments": null,
                        "start": 2184,
                        "end": 2185
                      },
                      "start": 2181,
                      "end": 2185
                    },
                    "start": 2174,
                    "end": 2185
                  },
                  "start": 2171,
                  "end": 2185
                },
                "start": 2117,
                "end": 2185
              },
              "start": 2115,
              "end": 2185
            },
            "accessibility": null,
            "static": false,
            "start": 2113,
            "end": 2186
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a8",
              "optional": false,
              "typeAnnotation": null,
              "start": 2197,
              "end": 2199
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 2202,
                        "end": 2203
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2212,
                          "end": 2216
                        },
                        "typeArguments": null,
                        "start": 2212,
                        "end": 2216
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2202,
                      "end": 2216
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2218,
                        "end": 2219
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2228,
                          "end": 2235
                        },
                        "typeArguments": null,
                        "start": 2228,
                        "end": 2235
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2218,
                      "end": 2235
                    }
                  ],
                  "start": 2201,
                  "end": 2236
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
                                  "start": 2246,
                                  "end": 2247
                                },
                                "typeArguments": null,
                                "start": 2246,
                                "end": 2247
                              },
                              "start": 2244,
                              "end": 2247
                            },
                            "start": 2241,
                            "end": 2247
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
                              "start": 2252,
                              "end": 2253
                            },
                            "typeArguments": null,
                            "start": 2252,
                            "end": 2253
                          },
                          "start": 2249,
                          "end": 2253
                        },
                        "start": 2240,
                        "end": 2253
                      },
                      "start": 2238,
                      "end": 2253
                    },
                    "start": 2237,
                    "end": 2253
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
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
                            "name": "arg2",
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
                                  "start": 2265,
                                  "end": 2266
                                },
                                "typeArguments": null,
                                "start": 2265,
                                "end": 2266
                              },
                              "start": 2263,
                              "end": 2266
                            },
                            "start": 2259,
                            "end": 2266
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
                              "start": 2271,
                              "end": 2272
                            },
                            "typeArguments": null,
                            "start": 2271,
                            "end": 2272
                          },
                          "start": 2268,
                          "end": 2272
                        },
                        "start": 2258,
                        "end": 2272
                      },
                      "start": 2256,
                      "end": 2272
                    },
                    "start": 2255,
                    "end": 2272
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r",
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
                              "start": 2281,
                              "end": 2282
                            },
                            "typeArguments": null,
                            "start": 2281,
                            "end": 2282
                          },
                          "start": 2279,
                          "end": 2282
                        },
                        "start": 2278,
                        "end": 2282
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
                          "start": 2287,
                          "end": 2288
                        },
                        "typeArguments": null,
                        "start": 2287,
                        "end": 2288
                      },
                      "start": 2284,
                      "end": 2288
                    },
                    "start": 2277,
                    "end": 2288
                  },
                  "start": 2274,
                  "end": 2288
                },
                "start": 2201,
                "end": 2288
              },
              "start": 2199,
              "end": 2288
            },
            "accessibility": null,
            "static": false,
            "start": 2197,
            "end": 2289
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a9",
              "optional": false,
              "typeAnnotation": null,
              "start": 2300,
              "end": 2302
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 2305,
                        "end": 2306
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2315,
                          "end": 2319
                        },
                        "typeArguments": null,
                        "start": 2315,
                        "end": 2319
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2305,
                      "end": 2319
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2321,
                        "end": 2322
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2331,
                          "end": 2338
                        },
                        "typeArguments": null,
                        "start": 2331,
                        "end": 2338
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2321,
                      "end": 2338
                    }
                  ],
                  "start": 2304,
                  "end": 2339
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
                                  "start": 2349,
                                  "end": 2350
                                },
                                "typeArguments": null,
                                "start": 2349,
                                "end": 2350
                              },
                              "start": 2347,
                              "end": 2350
                            },
                            "start": 2344,
                            "end": 2350
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
                              "start": 2355,
                              "end": 2356
                            },
                            "typeArguments": null,
                            "start": 2355,
                            "end": 2356
                          },
                          "start": 2352,
                          "end": 2356
                        },
                        "start": 2343,
                        "end": 2356
                      },
                      "start": 2341,
                      "end": 2356
                    },
                    "start": 2340,
                    "end": 2356
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
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
                            "name": "arg2",
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
                                      "start": 2370,
                                      "end": 2373
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSStringKeyword",
                                        "start": 2375,
                                        "end": 2381
                                      },
                                      "start": 2373,
                                      "end": 2381
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 2370,
                                    "end": 2382
                                  },
                                  {
                                    "type": "TSPropertySignature",
                                    "computed": false,
                                    "optional": false,
                                    "readonly": false,
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "bing",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2383,
                                      "end": 2387
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 2389,
                                        "end": 2395
                                      },
                                      "start": 2387,
                                      "end": 2395
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 2383,
                                    "end": 2395
                                  }
                                ],
                                "start": 2368,
                                "end": 2397
                              },
                              "start": 2366,
                              "end": 2397
                            },
                            "start": 2362,
                            "end": 2397
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
                              "start": 2402,
                              "end": 2403
                            },
                            "typeArguments": null,
                            "start": 2402,
                            "end": 2403
                          },
                          "start": 2399,
                          "end": 2403
                        },
                        "start": 2361,
                        "end": 2403
                      },
                      "start": 2359,
                      "end": 2403
                    },
                    "start": 2358,
                    "end": 2403
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r",
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
                              "start": 2412,
                              "end": 2413
                            },
                            "typeArguments": null,
                            "start": 2412,
                            "end": 2413
                          },
                          "start": 2410,
                          "end": 2413
                        },
                        "start": 2409,
                        "end": 2413
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
                          "start": 2418,
                          "end": 2419
                        },
                        "typeArguments": null,
                        "start": 2418,
                        "end": 2419
                      },
                      "start": 2415,
                      "end": 2419
                    },
                    "start": 2408,
                    "end": 2419
                  },
                  "start": 2405,
                  "end": 2419
                },
                "start": 2304,
                "end": 2419
              },
              "start": 2302,
              "end": 2419
            },
            "accessibility": null,
            "static": false,
            "start": 2300,
            "end": 2420
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a10",
              "optional": false,
              "typeAnnotation": null,
              "start": 2474,
              "end": 2477
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 2480,
                        "end": 2481
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2490,
                          "end": 2497
                        },
                        "typeArguments": null,
                        "start": 2490,
                        "end": 2497
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2480,
                      "end": 2497
                    }
                  ],
                  "start": 2479,
                  "end": 2498
                },
                "params": [
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2502,
                      "end": 2503
                    },
                    "optional": false,
                    "typeAnnotation": {
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
                            "start": 2505,
                            "end": 2506
                          },
                          "typeArguments": null,
                          "start": 2505,
                          "end": 2506
                        },
                        "start": 2505,
                        "end": 2508
                      },
                      "start": 2503,
                      "end": 2508
                    },
                    "value": null,
                    "start": 2499,
                    "end": 2508
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
                      "start": 2513,
                      "end": 2514
                    },
                    "typeArguments": null,
                    "start": 2513,
                    "end": 2514
                  },
                  "start": 2510,
                  "end": 2514
                },
                "start": 2479,
                "end": 2514
              },
              "start": 2477,
              "end": 2514
            },
            "accessibility": null,
            "static": false,
            "start": 2474,
            "end": 2515
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
              "start": 2526,
              "end": 2529
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 2532,
                        "end": 2533
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2542,
                          "end": 2546
                        },
                        "typeArguments": null,
                        "start": 2542,
                        "end": 2546
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2532,
                      "end": 2546
                    }
                  ],
                  "start": 2531,
                  "end": 2547
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
                          "start": 2551,
                          "end": 2552
                        },
                        "typeArguments": null,
                        "start": 2551,
                        "end": 2552
                      },
                      "start": 2549,
                      "end": 2552
                    },
                    "start": 2548,
                    "end": 2552
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
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2557,
                          "end": 2558
                        },
                        "typeArguments": null,
                        "start": 2557,
                        "end": 2558
                      },
                      "start": 2555,
                      "end": 2558
                    },
                    "start": 2554,
                    "end": 2558
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
                      "start": 2563,
                      "end": 2564
                    },
                    "typeArguments": null,
                    "start": 2563,
                    "end": 2564
                  },
                  "start": 2560,
                  "end": 2564
                },
                "start": 2531,
                "end": 2564
              },
              "start": 2529,
              "end": 2564
            },
            "accessibility": null,
            "static": false,
            "start": 2526,
            "end": 2565
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a12",
              "optional": false,
              "typeAnnotation": null,
              "start": 2576,
              "end": 2579
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 2582,
                        "end": 2583
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Array",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2592,
                          "end": 2597
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
                                "start": 2598,
                                "end": 2602
                              },
                              "typeArguments": null,
                              "start": 2598,
                              "end": 2602
                            }
                          ],
                          "start": 2597,
                          "end": 2603
                        },
                        "start": 2592,
                        "end": 2603
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2582,
                      "end": 2603
                    }
                  ],
                  "start": 2581,
                  "end": 2604
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
                          "name": "Array",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2608,
                          "end": 2613
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
                                "start": 2614,
                                "end": 2618
                              },
                              "typeArguments": null,
                              "start": 2614,
                              "end": 2618
                            }
                          ],
                          "start": 2613,
                          "end": 2619
                        },
                        "start": 2608,
                        "end": 2619
                      },
                      "start": 2606,
                      "end": 2619
                    },
                    "start": 2605,
                    "end": 2619
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
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2624,
                          "end": 2625
                        },
                        "typeArguments": null,
                        "start": 2624,
                        "end": 2625
                      },
                      "start": 2622,
                      "end": 2625
                    },
                    "start": 2621,
                    "end": 2625
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2630,
                      "end": 2635
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
                            "start": 2636,
                            "end": 2643
                          },
                          "typeArguments": null,
                          "start": 2636,
                          "end": 2643
                        }
                      ],
                      "start": 2635,
                      "end": 2644
                    },
                    "start": 2630,
                    "end": 2644
                  },
                  "start": 2627,
                  "end": 2644
                },
                "start": 2581,
                "end": 2644
              },
              "start": 2579,
              "end": 2644
            },
            "accessibility": null,
            "static": false,
            "start": 2576,
            "end": 2645
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a13",
              "optional": false,
              "typeAnnotation": null,
              "start": 2686,
              "end": 2689
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 2692,
                        "end": 2693
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Array",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2702,
                          "end": 2707
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
                                "start": 2708,
                                "end": 2715
                              },
                              "typeArguments": null,
                              "start": 2708,
                              "end": 2715
                            }
                          ],
                          "start": 2707,
                          "end": 2716
                        },
                        "start": 2702,
                        "end": 2716
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2692,
                      "end": 2716
                    }
                  ],
                  "start": 2691,
                  "end": 2717
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
                          "name": "Array",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2721,
                          "end": 2726
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
                                "start": 2727,
                                "end": 2731
                              },
                              "typeArguments": null,
                              "start": 2727,
                              "end": 2731
                            }
                          ],
                          "start": 2726,
                          "end": 2732
                        },
                        "start": 2721,
                        "end": 2732
                      },
                      "start": 2719,
                      "end": 2732
                    },
                    "start": 2718,
                    "end": 2732
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
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2737,
                          "end": 2738
                        },
                        "typeArguments": null,
                        "start": 2737,
                        "end": 2738
                      },
                      "start": 2735,
                      "end": 2738
                    },
                    "start": 2734,
                    "end": 2738
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
                      "start": 2743,
                      "end": 2744
                    },
                    "typeArguments": null,
                    "start": 2743,
                    "end": 2744
                  },
                  "start": 2740,
                  "end": 2744
                },
                "start": 2691,
                "end": 2744
              },
              "start": 2689,
              "end": 2744
            },
            "accessibility": null,
            "static": false,
            "start": 2686,
            "end": 2745
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a14",
              "optional": false,
              "typeAnnotation": null,
              "start": 2843,
              "end": 2846
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 2849,
                        "end": 2850
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2849,
                      "end": 2850
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2852,
                        "end": 2853
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2852,
                      "end": 2853
                    }
                  ],
                  "start": 2848,
                  "end": 2854
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
                              "start": 2860,
                              "end": 2861
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
                                  "start": 2863,
                                  "end": 2864
                                },
                                "typeArguments": null,
                                "start": 2863,
                                "end": 2864
                              },
                              "start": 2861,
                              "end": 2864
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 2860,
                            "end": 2865
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
                              "start": 2866,
                              "end": 2867
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
                                  "start": 2869,
                                  "end": 2870
                                },
                                "typeArguments": null,
                                "start": 2869,
                                "end": 2870
                              },
                              "start": 2867,
                              "end": 2870
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 2866,
                            "end": 2870
                          }
                        ],
                        "start": 2858,
                        "end": 2872
                      },
                      "start": 2856,
                      "end": 2872
                    },
                    "start": 2855,
                    "end": 2872
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
                      "start": 2877,
                      "end": 2878
                    },
                    "typeArguments": null,
                    "start": 2877,
                    "end": 2878
                  },
                  "start": 2874,
                  "end": 2878
                },
                "start": 2848,
                "end": 2878
              },
              "start": 2846,
              "end": 2878
            },
            "accessibility": null,
            "static": false,
            "start": 2843,
            "end": 2879
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
              "start": 2890,
              "end": 2893
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 2896,
                        "end": 2897
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2896,
                      "end": 2897
                    }
                  ],
                  "start": 2895,
                  "end": 2898
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
                          "start": 2902,
                          "end": 2903
                        },
                        "typeArguments": null,
                        "start": 2902,
                        "end": 2903
                      },
                      "start": 2900,
                      "end": 2903
                    },
                    "start": 2899,
                    "end": 2903
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
                        "start": 2908,
                        "end": 2909
                      },
                      "typeArguments": null,
                      "start": 2908,
                      "end": 2909
                    },
                    "start": 2908,
                    "end": 2911
                  },
                  "start": 2905,
                  "end": 2911
                },
                "start": 2895,
                "end": 2911
              },
              "start": 2893,
              "end": 2911
            },
            "accessibility": null,
            "static": false,
            "start": 2890,
            "end": 2912
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
              "start": 2923,
              "end": 2926
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 2929,
                        "end": 2930
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2939,
                          "end": 2943
                        },
                        "typeArguments": null,
                        "start": 2939,
                        "end": 2943
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2929,
                      "end": 2943
                    }
                  ],
                  "start": 2928,
                  "end": 2944
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
                          "start": 2948,
                          "end": 2949
                        },
                        "typeArguments": null,
                        "start": 2948,
                        "end": 2949
                      },
                      "start": 2946,
                      "end": 2949
                    },
                    "start": 2945,
                    "end": 2949
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 2954,
                      "end": 2960
                    },
                    "start": 2954,
                    "end": 2962
                  },
                  "start": 2951,
                  "end": 2962
                },
                "start": 2928,
                "end": 2962
              },
              "start": 2926,
              "end": 2962
            },
            "accessibility": null,
            "static": false,
            "start": 2923,
            "end": 2963
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
              "start": 2974,
              "end": 2977
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 2980,
                        "end": 2981
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2980,
                      "end": 2981
                    }
                  ],
                  "start": 2979,
                  "end": 2982
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
                                  "start": 2990,
                                  "end": 2991
                                },
                                "typeArguments": null,
                                "start": 2990,
                                "end": 2991
                              },
                              "start": 2988,
                              "end": 2991
                            },
                            "start": 2987,
                            "end": 2991
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
                              "start": 2996,
                              "end": 2997
                            },
                            "typeArguments": null,
                            "start": 2996,
                            "end": 2997
                          },
                          "start": 2993,
                          "end": 2997
                        },
                        "start": 2986,
                        "end": 2997
                      },
                      "start": 2984,
                      "end": 2997
                    },
                    "start": 2983,
                    "end": 2997
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
                        "start": 3002,
                        "end": 3003
                      },
                      "typeArguments": null,
                      "start": 3002,
                      "end": 3003
                    },
                    "start": 3002,
                    "end": 3005
                  },
                  "start": 2999,
                  "end": 3005
                },
                "start": 2979,
                "end": 3005
              },
              "start": 2977,
              "end": 3005
            },
            "accessibility": null,
            "static": false,
            "start": 2974,
            "end": 3006
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
              "start": 3017,
              "end": 3020
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 3023,
                        "end": 3024
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 3023,
                      "end": 3024
                    }
                  ],
                  "start": 3022,
                  "end": 3025
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
                                  "start": 3033,
                                  "end": 3034
                                },
                                "typeArguments": null,
                                "start": 3033,
                                "end": 3034
                              },
                              "start": 3031,
                              "end": 3034
                            },
                            "start": 3030,
                            "end": 3034
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
                              "start": 3039,
                              "end": 3040
                            },
                            "typeArguments": null,
                            "start": 3039,
                            "end": 3040
                          },
                          "start": 3036,
                          "end": 3040
                        },
                        "start": 3029,
                        "end": 3040
                      },
                      "start": 3027,
                      "end": 3040
                    },
                    "start": 3026,
                    "end": 3040
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
                        "start": 3045,
                        "end": 3046
                      },
                      "typeArguments": null,
                      "start": 3045,
                      "end": 3046
                    },
                    "start": 3045,
                    "end": 3048
                  },
                  "start": 3042,
                  "end": 3048
                },
                "start": 3022,
                "end": 3048
              },
              "start": 3020,
              "end": 3048
            },
            "accessibility": null,
            "static": false,
            "start": 3017,
            "end": 3049
          }
        ],
        "start": 1602,
        "end": 3100
      },
      "declare": false,
      "start": 1580,
      "end": 3100
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 102,
  "end": 3100
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
    "type": "Punctuator",
    "value": "(",
    "start": 310,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 312,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 314,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 322,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 325,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 331,
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
    "value": ";",
    "start": 333,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 339,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 341,
    "end": 342
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
    "value": "number",
    "start": 347,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 353,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 355,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 358,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 365,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 366,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 372,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 376,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 378,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 380,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 388,
    "end": 390
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 391,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 395,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 401,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 405,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 406,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 407,
    "end": 408
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 409,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 415,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "value": "number",
    "start": 420,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 428,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 431,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 437,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 443,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 445,
    "end": 446
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
    "type": "Punctuator",
    "value": "(",
    "start": 451,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 452,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 455,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 457,
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
    "value": "=>",
    "start": 465,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 468,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 476,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 479,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 485,
    "end": 486
  },
  {
    "type": "Identifier",
    "value": "a6",
    "start": 491,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 493,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 495,
    "end": 496
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 496,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 497,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 499,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 500,
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
    "value": "Base",
    "start": 505,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 509,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 511,
    "end": 513
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 514,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 521,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 523,
    "end": 525
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 526,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 530,
    "end": 531
  },
  {
    "type": "Identifier",
    "value": "a7",
    "start": 536,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 538,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 540,
    "end": 541
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 541,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 542,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 544,
    "end": 545
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 545,
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
    "value": "Base",
    "start": 550,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 554,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 556,
    "end": 558
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 559,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 566,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 568,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 571,
    "end": 572
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 572,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 573,
    "end": 574
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 575,
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
    "value": "=>",
    "start": 581,
    "end": 583
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 584,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 591,
    "end": 592
  },
  {
    "type": "Identifier",
    "value": "a8",
    "start": 597,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 599,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 601,
    "end": 602
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 602,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 603,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 605,
    "end": 606
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 606,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 609,
    "end": 610
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 611,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 615,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 617,
    "end": 619
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 620,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 627,
    "end": 628
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "type": "Punctuator",
    "value": "(",
    "start": 632,
    "end": 633
  },
  {
    "type": "Identifier",
    "value": "arg2",
    "start": 633,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 637,
    "end": 638
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 639,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 643,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 645,
    "end": 647
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 648,
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
    "value": "=>",
    "start": 657,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 660,
    "end": 661
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 661,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 662,
    "end": 663
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 664,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 668,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 670,
    "end": 672
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 673,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 680,
    "end": 681
  },
  {
    "type": "Identifier",
    "value": "a9",
    "start": 686,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 688,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 690,
    "end": 691
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Punctuator",
    "value": "(",
    "start": 694,
    "end": 695
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 695,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 698,
    "end": 699
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 700,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 704,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 706,
    "end": 708
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 709,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 716,
    "end": 717
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 718,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 719,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 721,
    "end": 722
  },
  {
    "type": "Identifier",
    "value": "arg2",
    "start": 722,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 726,
    "end": 727
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 728,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 732,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 734,
    "end": 736
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 737,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 744,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 746,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 749,
    "end": 750
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 750,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 751,
    "end": 752
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 753,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 757,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 759,
    "end": 761
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 762,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 769,
    "end": 770
  },
  {
    "type": "Identifier",
    "value": "a10",
    "start": 775,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 778,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 780,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 781,
    "end": 784
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 784,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 785,
    "end": 786
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 787,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 794,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 795,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 796,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 798,
    "end": 800
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 801,
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
    "value": "a11",
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
    "value": "(",
    "start": 819,
    "end": 820
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 820,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 821,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 823,
    "end": 824
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 825,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 828,
    "end": 829
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 830,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 837,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 838,
    "end": 839
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 840,
    "end": 841
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "type": "Identifier",
    "value": "foo",
    "start": 845,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 848,
    "end": 849
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 850,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 856,
    "end": 857
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 858,
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
    "value": "string",
    "start": 863,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 870,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 871,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 873,
    "end": 875
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 876,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 880,
    "end": 881
  },
  {
    "type": "Identifier",
    "value": "a12",
    "start": 886,
    "end": 889
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 889,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 891,
    "end": 892
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 892,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 893,
    "end": 894
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 895,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 900,
    "end": 901
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 901,
    "end": 905
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 905,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 906,
    "end": 907
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 908,
    "end": 909
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 909,
    "end": 910
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 911,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 916,
    "end": 917
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 917,
    "end": 925
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 925,
    "end": 926
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 926,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 928,
    "end": 930
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 931,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 936,
    "end": 937
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 937,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 944,
    "end": 945
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 945,
    "end": 946
  },
  {
    "type": "Identifier",
    "value": "a13",
    "start": 951,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 954,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 956,
    "end": 957
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 957,
    "end": 958
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 958,
    "end": 959
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 960,
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
    "value": "Base",
    "start": 966,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 970,
    "end": 971
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 971,
    "end": 972
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 973,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 974,
    "end": 975
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 976,
    "end": 981
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 981,
    "end": 982
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 982,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 989,
    "end": 990
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 990,
    "end": 991
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 992,
    "end": 994
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 995,
    "end": 1000
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1001,
    "end": 1008
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Identifier",
    "value": "a14",
    "start": 1015,
    "end": 1018
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1018,
    "end": 1019
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
    "type": "Punctuator",
    "value": "{",
    "start": 1024,
    "end": 1025
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1029,
    "end": 1035
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1040,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1050,
    "end": 1052
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 1053,
    "end": 1059
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1059,
    "end": 1060
  },
  {
    "type": "Identifier",
    "value": "a15",
    "start": 1065,
    "end": 1068
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "number",
    "start": 1084,
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
    "value": ":",
    "start": 1091,
    "end": 1092
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1093,
    "end": 1099
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1099,
    "end": 1100
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1100,
    "end": 1101
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1101,
    "end": 1102
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
    "value": "string",
    "start": 1115,
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
    "value": ":",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1124,
    "end": 1130
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1130,
    "end": 1131
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1132,
    "end": 1133
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1138,
    "end": 1139
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1139,
    "end": 1140
  },
  {
    "type": "Identifier",
    "value": "a16",
    "start": 1145,
    "end": 1148
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1148,
    "end": 1149
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1150,
    "end": 1151
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1160,
    "end": 1161
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1161,
    "end": 1162
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1163,
    "end": 1170
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1171,
    "end": 1178
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1179,
    "end": 1180
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1180,
    "end": 1181
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1181,
    "end": 1182
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1183,
    "end": 1184
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1184,
    "end": 1185
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1187,
    "end": 1193
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1193,
    "end": 1194
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Punctuator",
    "value": "<",
    "start": 1205,
    "end": 1206
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1206,
    "end": 1207
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1208,
    "end": 1215
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1216,
    "end": 1220
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1221,
    "end": 1222
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1222,
    "end": 1223
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1225,
    "end": 1226
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Identifier",
    "value": "number",
    "start": 1229,
    "end": 1235
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1235,
    "end": 1236
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1236,
    "end": 1237
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1237,
    "end": 1238
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1244,
    "end": 1245
  },
  {
    "type": "Identifier",
    "value": "a17",
    "start": 1250,
    "end": 1253
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1253,
    "end": 1254
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1255,
    "end": 1256
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
    "type": "Punctuator",
    "value": "(",
    "start": 1269,
    "end": 1270
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1270,
    "end": 1271
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1273,
    "end": 1279
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1279,
    "end": 1280
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1281,
    "end": 1283
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1284,
    "end": 1290
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Identifier",
    "value": "number",
    "start": 1293,
    "end": 1299
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1299,
    "end": 1300
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1300,
    "end": 1301
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1301,
    "end": 1302
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1311,
    "end": 1312
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1312,
    "end": 1313
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1313,
    "end": 1314
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1315,
    "end": 1316
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "value": "string",
    "start": 1319,
    "end": 1325
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1327,
    "end": 1329
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1330,
    "end": 1336
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1336,
    "end": 1337
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1337,
    "end": 1338
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1339,
    "end": 1345
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1345,
    "end": 1346
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1346,
    "end": 1347
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1347,
    "end": 1348
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1353,
    "end": 1354
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1354,
    "end": 1355
  },
  {
    "type": "Identifier",
    "value": "a18",
    "start": 1360,
    "end": 1363
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1363,
    "end": 1364
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1365,
    "end": 1366
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
    "type": "Punctuator",
    "value": "{",
    "start": 1379,
    "end": 1380
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1393,
    "end": 1394
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1394,
    "end": 1395
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1395,
    "end": 1396
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1397,
    "end": 1403
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1403,
    "end": 1404
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1404,
    "end": 1405
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1406,
    "end": 1412
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1412,
    "end": 1413
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1426,
    "end": 1427
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1427,
    "end": 1428
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1428,
    "end": 1429
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1430,
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
    "value": ":",
    "start": 1437,
    "end": 1438
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1439,
    "end": 1445
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1445,
    "end": 1446
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1455,
    "end": 1456
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1456,
    "end": 1457
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1457,
    "end": 1458
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1459,
    "end": 1462
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1462,
    "end": 1463
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1463,
    "end": 1464
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1464,
    "end": 1465
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1474,
    "end": 1475
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1475,
    "end": 1476
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1476,
    "end": 1477
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1478,
    "end": 1479
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1492,
    "end": 1493
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "value": "boolean",
    "start": 1496,
    "end": 1503
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1503,
    "end": 1504
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1504,
    "end": 1505
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1506,
    "end": 1513
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1513,
    "end": 1514
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1527,
    "end": 1528
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1528,
    "end": 1529
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1529,
    "end": 1530
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 1531,
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
    "value": ":",
    "start": 1536,
    "end": 1537
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 1538,
    "end": 1542
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1542,
    "end": 1543
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1552,
    "end": 1553
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1553,
    "end": 1554
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1554,
    "end": 1555
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1556,
    "end": 1559
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1559,
    "end": 1560
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1560,
    "end": 1561
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1561,
    "end": 1562
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1567,
    "end": 1568
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "value": "interface",
    "start": 1580,
    "end": 1589
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1590,
    "end": 1591
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1592,
    "end": 1599
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1600,
    "end": 1601
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1602,
    "end": 1603
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1619,
    "end": 1620
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1620,
    "end": 1621
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1622,
    "end": 1623
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1623,
    "end": 1624
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1624,
    "end": 1625
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1625,
    "end": 1626
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1626,
    "end": 1627
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1627,
    "end": 1628
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1629,
    "end": 1630
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1630,
    "end": 1631
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1632,
    "end": 1634
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1635,
    "end": 1636
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1636,
    "end": 1637
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1637,
    "end": 1638
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1638,
    "end": 1639
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1701,
    "end": 1703
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1703,
    "end": 1704
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1705,
    "end": 1706
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1706,
    "end": 1707
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1707,
    "end": 1708
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1708,
    "end": 1709
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1709,
    "end": 1710
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1710,
    "end": 1711
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1712,
    "end": 1713
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1713,
    "end": 1714
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1715,
    "end": 1717
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1718,
    "end": 1724
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1724,
    "end": 1725
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1725,
    "end": 1726
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1726,
    "end": 1727
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 1738,
    "end": 1740
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1740,
    "end": 1741
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1742,
    "end": 1743
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1743,
    "end": 1744
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1744,
    "end": 1745
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1745,
    "end": 1746
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1746,
    "end": 1747
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1747,
    "end": 1748
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1749,
    "end": 1750
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1750,
    "end": 1751
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1752,
    "end": 1754
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1755,
    "end": 1756
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1756,
    "end": 1757
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 1792,
    "end": 1794
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1794,
    "end": 1795
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1796,
    "end": 1797
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1797,
    "end": 1798
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1798,
    "end": 1799
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1800,
    "end": 1801
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1801,
    "end": 1802
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1802,
    "end": 1803
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1803,
    "end": 1804
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1804,
    "end": 1805
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1806,
    "end": 1807
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1807,
    "end": 1808
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1809,
    "end": 1810
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1810,
    "end": 1811
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1812,
    "end": 1813
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1813,
    "end": 1814
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1815,
    "end": 1817
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1818,
    "end": 1819
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1819,
    "end": 1820
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 1895,
    "end": 1897
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1897,
    "end": 1898
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1899,
    "end": 1900
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1900,
    "end": 1901
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1901,
    "end": 1902
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1903,
    "end": 1904
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1904,
    "end": 1905
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1905,
    "end": 1906
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1906,
    "end": 1907
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1907,
    "end": 1908
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1909,
    "end": 1910
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 1910,
    "end": 1913
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1913,
    "end": 1914
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1915,
    "end": 1916
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1916,
    "end": 1917
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1918,
    "end": 1920
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1921,
    "end": 1922
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1922,
    "end": 1923
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1924,
    "end": 1926
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1927,
    "end": 1928
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1928,
    "end": 1929
  },
  {
    "type": "Identifier",
    "value": "a6",
    "start": 1996,
    "end": 1998
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1998,
    "end": 1999
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2000,
    "end": 2001
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2001,
    "end": 2002
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2003,
    "end": 2010
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2011,
    "end": 2015
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2015,
    "end": 2016
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2017,
    "end": 2018
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2019,
    "end": 2026
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 2027,
    "end": 2034
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2034,
    "end": 2035
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2035,
    "end": 2036
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2036,
    "end": 2037
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2037,
    "end": 2038
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2039,
    "end": 2040
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 2040,
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
    "value": "T",
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
    "value": "=>",
    "start": 2048,
    "end": 2050
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2051,
    "end": 2052
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2052,
    "end": 2053
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2054,
    "end": 2056
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2057,
    "end": 2058
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2058,
    "end": 2059
  },
  {
    "type": "Identifier",
    "value": "a7",
    "start": 2113,
    "end": 2115
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2115,
    "end": 2116
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2117,
    "end": 2118
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2118,
    "end": 2119
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2120,
    "end": 2127
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2128,
    "end": 2132
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2132,
    "end": 2133
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2134,
    "end": 2135
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2136,
    "end": 2143
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 2144,
    "end": 2151
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2151,
    "end": 2152
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2152,
    "end": 2153
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2153,
    "end": 2154
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2154,
    "end": 2155
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2156,
    "end": 2157
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 2157,
    "end": 2160
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2160,
    "end": 2161
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2162,
    "end": 2163
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2163,
    "end": 2164
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2165,
    "end": 2167
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2168,
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
    "value": "=>",
    "start": 2171,
    "end": 2173
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2174,
    "end": 2175
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 2175,
    "end": 2176
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2176,
    "end": 2177
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2178,
    "end": 2179
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2179,
    "end": 2180
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2181,
    "end": 2183
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2184,
    "end": 2185
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2185,
    "end": 2186
  },
  {
    "type": "Identifier",
    "value": "a8",
    "start": 2197,
    "end": 2199
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2199,
    "end": 2200
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2201,
    "end": 2202
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2202,
    "end": 2203
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2204,
    "end": 2211
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2212,
    "end": 2216
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2216,
    "end": 2217
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2218,
    "end": 2219
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2220,
    "end": 2227
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 2228,
    "end": 2235
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2235,
    "end": 2236
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2236,
    "end": 2237
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2237,
    "end": 2238
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2238,
    "end": 2239
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2240,
    "end": 2241
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 2241,
    "end": 2244
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2244,
    "end": 2245
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2246,
    "end": 2247
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2247,
    "end": 2248
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2249,
    "end": 2251
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2252,
    "end": 2253
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2253,
    "end": 2254
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2255,
    "end": 2256
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2256,
    "end": 2257
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2258,
    "end": 2259
  },
  {
    "type": "Identifier",
    "value": "arg2",
    "start": 2259,
    "end": 2263
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2263,
    "end": 2264
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2265,
    "end": 2266
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2266,
    "end": 2267
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2268,
    "end": 2270
  },
  {
    "type": "Identifier",
    "value": "U",
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
    "value": "=>",
    "start": 2274,
    "end": 2276
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2277,
    "end": 2278
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 2278,
    "end": 2279
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2279,
    "end": 2280
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2281,
    "end": 2282
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2282,
    "end": 2283
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2284,
    "end": 2286
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2287,
    "end": 2288
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2288,
    "end": 2289
  },
  {
    "type": "Identifier",
    "value": "a9",
    "start": 2300,
    "end": 2302
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2302,
    "end": 2303
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2304,
    "end": 2305
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2305,
    "end": 2306
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2307,
    "end": 2314
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2315,
    "end": 2319
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2319,
    "end": 2320
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2321,
    "end": 2322
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2323,
    "end": 2330
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 2331,
    "end": 2338
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2338,
    "end": 2339
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2339,
    "end": 2340
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2340,
    "end": 2341
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2341,
    "end": 2342
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2343,
    "end": 2344
  },
  {
    "type": "Identifier",
    "value": "arg",
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
    "type": "Identifier",
    "value": "T",
    "start": 2349,
    "end": 2350
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2350,
    "end": 2351
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2352,
    "end": 2354
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2355,
    "end": 2356
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2356,
    "end": 2357
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2358,
    "end": 2359
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2359,
    "end": 2360
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2361,
    "end": 2362
  },
  {
    "type": "Identifier",
    "value": "arg2",
    "start": 2362,
    "end": 2366
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2366,
    "end": 2367
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2368,
    "end": 2369
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2370,
    "end": 2373
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2373,
    "end": 2374
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2375,
    "end": 2381
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2381,
    "end": 2382
  },
  {
    "type": "Identifier",
    "value": "bing",
    "start": 2383,
    "end": 2387
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2387,
    "end": 2388
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2389,
    "end": 2395
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2396,
    "end": 2397
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2397,
    "end": 2398
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2399,
    "end": 2401
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2402,
    "end": 2403
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2403,
    "end": 2404
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2405,
    "end": 2407
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2408,
    "end": 2409
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 2409,
    "end": 2410
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2410,
    "end": 2411
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2412,
    "end": 2413
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2413,
    "end": 2414
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2415,
    "end": 2417
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2418,
    "end": 2419
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2419,
    "end": 2420
  },
  {
    "type": "Identifier",
    "value": "a10",
    "start": 2474,
    "end": 2477
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2477,
    "end": 2478
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2479,
    "end": 2480
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2480,
    "end": 2481
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2482,
    "end": 2489
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 2490,
    "end": 2497
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2497,
    "end": 2498
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2498,
    "end": 2499
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2499,
    "end": 2502
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2502,
    "end": 2503
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2503,
    "end": 2504
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2505,
    "end": 2506
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2506,
    "end": 2507
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2507,
    "end": 2508
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2508,
    "end": 2509
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2510,
    "end": 2512
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2513,
    "end": 2514
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2514,
    "end": 2515
  },
  {
    "type": "Identifier",
    "value": "a11",
    "start": 2526,
    "end": 2529
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2529,
    "end": 2530
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2531,
    "end": 2532
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2532,
    "end": 2533
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2534,
    "end": 2541
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2542,
    "end": 2546
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2546,
    "end": 2547
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2547,
    "end": 2548
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2548,
    "end": 2549
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2549,
    "end": 2550
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2551,
    "end": 2552
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2552,
    "end": 2553
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2554,
    "end": 2555
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2555,
    "end": 2556
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2557,
    "end": 2558
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2558,
    "end": 2559
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2560,
    "end": 2562
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2563,
    "end": 2564
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2564,
    "end": 2565
  },
  {
    "type": "Identifier",
    "value": "a12",
    "start": 2576,
    "end": 2579
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2579,
    "end": 2580
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2581,
    "end": 2582
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2582,
    "end": 2583
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2584,
    "end": 2591
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 2592,
    "end": 2597
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2597,
    "end": 2598
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2598,
    "end": 2602
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2602,
    "end": 2603
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2603,
    "end": 2604
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2604,
    "end": 2605
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2605,
    "end": 2606
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2606,
    "end": 2607
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 2608,
    "end": 2613
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2613,
    "end": 2614
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2614,
    "end": 2618
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2618,
    "end": 2619
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2619,
    "end": 2620
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2621,
    "end": 2622
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2622,
    "end": 2623
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2624,
    "end": 2625
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2625,
    "end": 2626
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2627,
    "end": 2629
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 2630,
    "end": 2635
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2635,
    "end": 2636
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 2636,
    "end": 2643
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2643,
    "end": 2644
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2644,
    "end": 2645
  },
  {
    "type": "Identifier",
    "value": "a13",
    "start": 2686,
    "end": 2689
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2689,
    "end": 2690
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2691,
    "end": 2692
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2692,
    "end": 2693
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2694,
    "end": 2701
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 2702,
    "end": 2707
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2707,
    "end": 2708
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 2708,
    "end": 2715
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2715,
    "end": 2716
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2716,
    "end": 2717
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2717,
    "end": 2718
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2718,
    "end": 2719
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2719,
    "end": 2720
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 2721,
    "end": 2726
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2726,
    "end": 2727
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2727,
    "end": 2731
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2731,
    "end": 2732
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2732,
    "end": 2733
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2734,
    "end": 2735
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2735,
    "end": 2736
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2737,
    "end": 2738
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2738,
    "end": 2739
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2740,
    "end": 2742
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2743,
    "end": 2744
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2744,
    "end": 2745
  },
  {
    "type": "Identifier",
    "value": "a14",
    "start": 2843,
    "end": 2846
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2846,
    "end": 2847
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2848,
    "end": 2849
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2849,
    "end": 2850
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2850,
    "end": 2851
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2852,
    "end": 2853
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2853,
    "end": 2854
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2854,
    "end": 2855
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2855,
    "end": 2856
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2856,
    "end": 2857
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2858,
    "end": 2859
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2860,
    "end": 2861
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2861,
    "end": 2862
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2863,
    "end": 2864
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2864,
    "end": 2865
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2866,
    "end": 2867
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2867,
    "end": 2868
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2869,
    "end": 2870
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2871,
    "end": 2872
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2872,
    "end": 2873
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2874,
    "end": 2876
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2877,
    "end": 2878
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2878,
    "end": 2879
  },
  {
    "type": "Identifier",
    "value": "a15",
    "start": 2890,
    "end": 2893
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2893,
    "end": 2894
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2895,
    "end": 2896
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2896,
    "end": 2897
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2897,
    "end": 2898
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2898,
    "end": 2899
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2899,
    "end": 2900
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2900,
    "end": 2901
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2902,
    "end": 2903
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2903,
    "end": 2904
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2905,
    "end": 2907
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2908,
    "end": 2909
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2909,
    "end": 2910
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2910,
    "end": 2911
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2911,
    "end": 2912
  },
  {
    "type": "Identifier",
    "value": "a16",
    "start": 2923,
    "end": 2926
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2926,
    "end": 2927
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2928,
    "end": 2929
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2929,
    "end": 2930
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2931,
    "end": 2938
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2939,
    "end": 2943
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2943,
    "end": 2944
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2944,
    "end": 2945
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2945,
    "end": 2946
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2946,
    "end": 2947
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2948,
    "end": 2949
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2949,
    "end": 2950
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2951,
    "end": 2953
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2954,
    "end": 2960
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2960,
    "end": 2961
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2961,
    "end": 2962
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2962,
    "end": 2963
  },
  {
    "type": "Identifier",
    "value": "a17",
    "start": 2974,
    "end": 2977
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2977,
    "end": 2978
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2979,
    "end": 2980
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2980,
    "end": 2981
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2981,
    "end": 2982
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2982,
    "end": 2983
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2983,
    "end": 2984
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2984,
    "end": 2985
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2986,
    "end": 2987
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2987,
    "end": 2988
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2988,
    "end": 2989
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2990,
    "end": 2991
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2991,
    "end": 2992
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2993,
    "end": 2995
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2996,
    "end": 2997
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2997,
    "end": 2998
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2999,
    "end": 3001
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3002,
    "end": 3003
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3003,
    "end": 3004
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3004,
    "end": 3005
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3005,
    "end": 3006
  },
  {
    "type": "Identifier",
    "value": "a18",
    "start": 3017,
    "end": 3020
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3020,
    "end": 3021
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3022,
    "end": 3023
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3023,
    "end": 3024
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3024,
    "end": 3025
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3025,
    "end": 3026
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3026,
    "end": 3027
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3027,
    "end": 3028
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3029,
    "end": 3030
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3030,
    "end": 3031
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3031,
    "end": 3032
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3033,
    "end": 3034
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3034,
    "end": 3035
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3036,
    "end": 3038
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3039,
    "end": 3040
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3040,
    "end": 3041
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3042,
    "end": 3044
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3045,
    "end": 3046
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3046,
    "end": 3047
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3047,
    "end": 3048
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3048,
    "end": 3049
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3099,
    "end": 3100
  }
]
```
