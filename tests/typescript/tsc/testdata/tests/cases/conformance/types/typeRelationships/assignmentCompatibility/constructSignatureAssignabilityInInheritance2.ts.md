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
                "typeParameters": null,
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
                        "start": 318,
                        "end": 324
                      },
                      "start": 316,
                      "end": 324
                    },
                    "start": 315,
                    "end": 324
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 329,
                      "end": 335
                    },
                    "start": 329,
                    "end": 337
                  },
                  "start": 326,
                  "end": 337
                },
                "start": 310,
                "end": 337
              },
              "start": 308,
              "end": 337
            },
            "accessibility": null,
            "static": false,
            "start": 307,
            "end": 338
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
              "start": 343,
              "end": 345
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
                        "type": "TSNumberKeyword",
                        "start": 355,
                        "end": 361
                      },
                      "start": 353,
                      "end": 361
                    },
                    "start": 352,
                    "end": 361
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 366,
                      "end": 372
                    },
                    "start": 366,
                    "end": 374
                  },
                  "start": 363,
                  "end": 374
                },
                "start": 347,
                "end": 374
              },
              "start": 345,
              "end": 374
            },
            "accessibility": null,
            "static": false,
            "start": 343,
            "end": 375
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
              "start": 380,
              "end": 382
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
                        "type": "TSNumberKeyword",
                        "start": 392,
                        "end": 398
                      },
                      "start": 390,
                      "end": 398
                    },
                    "start": 389,
                    "end": 398
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 403,
                    "end": 407
                  },
                  "start": 400,
                  "end": 407
                },
                "start": 384,
                "end": 407
              },
              "start": 382,
              "end": 407
            },
            "accessibility": null,
            "static": false,
            "start": 380,
            "end": 408
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
              "start": 413,
              "end": 415
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
                        "type": "TSStringKeyword",
                        "start": 425,
                        "end": 431
                      },
                      "start": 423,
                      "end": 431
                    },
                    "start": 422,
                    "end": 431
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
                        "start": 436,
                        "end": 442
                      },
                      "start": 434,
                      "end": 442
                    },
                    "start": 433,
                    "end": 442
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 447,
                    "end": 453
                  },
                  "start": 444,
                  "end": 453
                },
                "start": 417,
                "end": 453
              },
              "start": 415,
              "end": 453
            },
            "accessibility": null,
            "static": false,
            "start": 413,
            "end": 454
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
              "start": 459,
              "end": 461
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
                                "start": 477,
                                "end": 483
                              },
                              "start": 475,
                              "end": 483
                            },
                            "start": 472,
                            "end": 483
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 488,
                            "end": 494
                          },
                          "start": 485,
                          "end": 494
                        },
                        "start": 471,
                        "end": 494
                      },
                      "start": 469,
                      "end": 494
                    },
                    "start": 468,
                    "end": 494
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 499,
                    "end": 505
                  },
                  "start": 496,
                  "end": 505
                },
                "start": 463,
                "end": 505
              },
              "start": 461,
              "end": 505
            },
            "accessibility": null,
            "static": false,
            "start": 459,
            "end": 506
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
              "start": 511,
              "end": 513
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
                                  "start": 529,
                                  "end": 533
                                },
                                "typeArguments": null,
                                "start": 529,
                                "end": 533
                              },
                              "start": 527,
                              "end": 533
                            },
                            "start": 524,
                            "end": 533
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
                              "start": 538,
                              "end": 545
                            },
                            "typeArguments": null,
                            "start": 538,
                            "end": 545
                          },
                          "start": 535,
                          "end": 545
                        },
                        "start": 523,
                        "end": 545
                      },
                      "start": 521,
                      "end": 545
                    },
                    "start": 520,
                    "end": 545
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
                      "start": 550,
                      "end": 554
                    },
                    "typeArguments": null,
                    "start": 550,
                    "end": 554
                  },
                  "start": 547,
                  "end": 554
                },
                "start": 515,
                "end": 554
              },
              "start": 513,
              "end": 554
            },
            "accessibility": null,
            "static": false,
            "start": 511,
            "end": 555
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
              "start": 560,
              "end": 562
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
                                  "start": 578,
                                  "end": 582
                                },
                                "typeArguments": null,
                                "start": 578,
                                "end": 582
                              },
                              "start": 576,
                              "end": 582
                            },
                            "start": 573,
                            "end": 582
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
                              "start": 587,
                              "end": 594
                            },
                            "typeArguments": null,
                            "start": 587,
                            "end": 594
                          },
                          "start": 584,
                          "end": 594
                        },
                        "start": 572,
                        "end": 594
                      },
                      "start": 570,
                      "end": 594
                    },
                    "start": 569,
                    "end": 594
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
                              "start": 603,
                              "end": 607
                            },
                            "typeArguments": null,
                            "start": 603,
                            "end": 607
                          },
                          "start": 601,
                          "end": 607
                        },
                        "start": 600,
                        "end": 607
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
                          "start": 612,
                          "end": 619
                        },
                        "typeArguments": null,
                        "start": 612,
                        "end": 619
                      },
                      "start": 609,
                      "end": 619
                    },
                    "start": 599,
                    "end": 619
                  },
                  "start": 596,
                  "end": 619
                },
                "start": 564,
                "end": 619
              },
              "start": 562,
              "end": 619
            },
            "accessibility": null,
            "static": false,
            "start": 560,
            "end": 620
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
              "start": 625,
              "end": 627
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
                                  "start": 643,
                                  "end": 647
                                },
                                "typeArguments": null,
                                "start": 643,
                                "end": 647
                              },
                              "start": 641,
                              "end": 647
                            },
                            "start": 638,
                            "end": 647
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
                              "start": 652,
                              "end": 659
                            },
                            "typeArguments": null,
                            "start": 652,
                            "end": 659
                          },
                          "start": 649,
                          "end": 659
                        },
                        "start": 637,
                        "end": 659
                      },
                      "start": 635,
                      "end": 659
                    },
                    "start": 634,
                    "end": 659
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
                                  "start": 671,
                                  "end": 675
                                },
                                "typeArguments": null,
                                "start": 671,
                                "end": 675
                              },
                              "start": 669,
                              "end": 675
                            },
                            "start": 665,
                            "end": 675
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
                              "start": 680,
                              "end": 687
                            },
                            "typeArguments": null,
                            "start": 680,
                            "end": 687
                          },
                          "start": 677,
                          "end": 687
                        },
                        "start": 664,
                        "end": 687
                      },
                      "start": 662,
                      "end": 687
                    },
                    "start": 661,
                    "end": 687
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
                              "start": 696,
                              "end": 700
                            },
                            "typeArguments": null,
                            "start": 696,
                            "end": 700
                          },
                          "start": 694,
                          "end": 700
                        },
                        "start": 693,
                        "end": 700
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
                          "start": 705,
                          "end": 712
                        },
                        "typeArguments": null,
                        "start": 705,
                        "end": 712
                      },
                      "start": 702,
                      "end": 712
                    },
                    "start": 692,
                    "end": 712
                  },
                  "start": 689,
                  "end": 712
                },
                "start": 629,
                "end": 712
              },
              "start": 627,
              "end": 712
            },
            "accessibility": null,
            "static": false,
            "start": 625,
            "end": 713
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
              "start": 718,
              "end": 720
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
                                  "start": 736,
                                  "end": 740
                                },
                                "typeArguments": null,
                                "start": 736,
                                "end": 740
                              },
                              "start": 734,
                              "end": 740
                            },
                            "start": 731,
                            "end": 740
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
                              "start": 745,
                              "end": 752
                            },
                            "typeArguments": null,
                            "start": 745,
                            "end": 752
                          },
                          "start": 742,
                          "end": 752
                        },
                        "start": 730,
                        "end": 752
                      },
                      "start": 728,
                      "end": 752
                    },
                    "start": 727,
                    "end": 752
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
                                  "start": 764,
                                  "end": 768
                                },
                                "typeArguments": null,
                                "start": 764,
                                "end": 768
                              },
                              "start": 762,
                              "end": 768
                            },
                            "start": 758,
                            "end": 768
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
                              "start": 773,
                              "end": 780
                            },
                            "typeArguments": null,
                            "start": 773,
                            "end": 780
                          },
                          "start": 770,
                          "end": 780
                        },
                        "start": 757,
                        "end": 780
                      },
                      "start": 755,
                      "end": 780
                    },
                    "start": 754,
                    "end": 780
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
                              "start": 789,
                              "end": 793
                            },
                            "typeArguments": null,
                            "start": 789,
                            "end": 793
                          },
                          "start": 787,
                          "end": 793
                        },
                        "start": 786,
                        "end": 793
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
                          "start": 798,
                          "end": 805
                        },
                        "typeArguments": null,
                        "start": 798,
                        "end": 805
                      },
                      "start": 795,
                      "end": 805
                    },
                    "start": 785,
                    "end": 805
                  },
                  "start": 782,
                  "end": 805
                },
                "start": 722,
                "end": 805
              },
              "start": 720,
              "end": 805
            },
            "accessibility": null,
            "static": false,
            "start": 718,
            "end": 806
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
              "start": 811,
              "end": 814
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
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
                      "start": 824,
                      "end": 825
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
                            "start": 827,
                            "end": 834
                          },
                          "typeArguments": null,
                          "start": 827,
                          "end": 834
                        },
                        "start": 827,
                        "end": 836
                      },
                      "start": 825,
                      "end": 836
                    },
                    "value": null,
                    "start": 821,
                    "end": 836
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
                      "start": 841,
                      "end": 848
                    },
                    "typeArguments": null,
                    "start": 841,
                    "end": 848
                  },
                  "start": 838,
                  "end": 848
                },
                "start": 816,
                "end": 848
              },
              "start": 814,
              "end": 848
            },
            "accessibility": null,
            "static": false,
            "start": 811,
            "end": 849
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
              "start": 854,
              "end": 857
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
                              "start": 869,
                              "end": 872
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 874,
                                "end": 880
                              },
                              "start": 872,
                              "end": 880
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 869,
                            "end": 880
                          }
                        ],
                        "start": 867,
                        "end": 882
                      },
                      "start": 865,
                      "end": 882
                    },
                    "start": 864,
                    "end": 882
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
                              "start": 889,
                              "end": 892
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 894,
                                "end": 900
                              },
                              "start": 892,
                              "end": 900
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 889,
                            "end": 901
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
                              "start": 902,
                              "end": 905
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 907,
                                "end": 913
                              },
                              "start": 905,
                              "end": 913
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 902,
                            "end": 913
                          }
                        ],
                        "start": 887,
                        "end": 915
                      },
                      "start": 885,
                      "end": 915
                    },
                    "start": 884,
                    "end": 915
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
                      "start": 920,
                      "end": 924
                    },
                    "typeArguments": null,
                    "start": 920,
                    "end": 924
                  },
                  "start": 917,
                  "end": 924
                },
                "start": 859,
                "end": 924
              },
              "start": 857,
              "end": 924
            },
            "accessibility": null,
            "static": false,
            "start": 854,
            "end": 925
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
              "start": 930,
              "end": 933
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
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Array",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 943,
                          "end": 948
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
                                "start": 949,
                                "end": 953
                              },
                              "typeArguments": null,
                              "start": 949,
                              "end": 953
                            }
                          ],
                          "start": 948,
                          "end": 954
                        },
                        "start": 943,
                        "end": 954
                      },
                      "start": 941,
                      "end": 954
                    },
                    "start": 940,
                    "end": 954
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
                          "start": 959,
                          "end": 964
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
                                "start": 965,
                                "end": 973
                              },
                              "typeArguments": null,
                              "start": 965,
                              "end": 973
                            }
                          ],
                          "start": 964,
                          "end": 974
                        },
                        "start": 959,
                        "end": 974
                      },
                      "start": 957,
                      "end": 974
                    },
                    "start": 956,
                    "end": 974
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
                      "start": 979,
                      "end": 984
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
                            "start": 985,
                            "end": 992
                          },
                          "typeArguments": null,
                          "start": 985,
                          "end": 992
                        }
                      ],
                      "start": 984,
                      "end": 993
                    },
                    "start": 979,
                    "end": 993
                  },
                  "start": 976,
                  "end": 993
                },
                "start": 935,
                "end": 993
              },
              "start": 933,
              "end": 993
            },
            "accessibility": null,
            "static": false,
            "start": 930,
            "end": 994
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
              "start": 999,
              "end": 1002
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
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Array",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1012,
                          "end": 1017
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
                                "start": 1018,
                                "end": 1022
                              },
                              "typeArguments": null,
                              "start": 1018,
                              "end": 1022
                            }
                          ],
                          "start": 1017,
                          "end": 1023
                        },
                        "start": 1012,
                        "end": 1023
                      },
                      "start": 1010,
                      "end": 1023
                    },
                    "start": 1009,
                    "end": 1023
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
                          "start": 1028,
                          "end": 1033
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
                                "start": 1034,
                                "end": 1041
                              },
                              "typeArguments": null,
                              "start": 1034,
                              "end": 1041
                            }
                          ],
                          "start": 1033,
                          "end": 1042
                        },
                        "start": 1028,
                        "end": 1042
                      },
                      "start": 1026,
                      "end": 1042
                    },
                    "start": 1025,
                    "end": 1042
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
                      "start": 1047,
                      "end": 1052
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
                            "start": 1053,
                            "end": 1060
                          },
                          "typeArguments": null,
                          "start": 1053,
                          "end": 1060
                        }
                      ],
                      "start": 1052,
                      "end": 1061
                    },
                    "start": 1047,
                    "end": 1061
                  },
                  "start": 1044,
                  "end": 1061
                },
                "start": 1004,
                "end": 1061
              },
              "start": 1002,
              "end": 1061
            },
            "accessibility": null,
            "static": false,
            "start": 999,
            "end": 1062
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
              "start": 1067,
              "end": 1070
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
                              "start": 1082,
                              "end": 1083
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1085,
                                "end": 1091
                              },
                              "start": 1083,
                              "end": 1091
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1082,
                            "end": 1092
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
                              "start": 1093,
                              "end": 1094
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1096,
                                "end": 1102
                              },
                              "start": 1094,
                              "end": 1102
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1093,
                            "end": 1102
                          }
                        ],
                        "start": 1080,
                        "end": 1104
                      },
                      "start": 1078,
                      "end": 1104
                    },
                    "start": 1077,
                    "end": 1104
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
                      "start": 1109,
                      "end": 1115
                    },
                    "typeArguments": null,
                    "start": 1109,
                    "end": 1115
                  },
                  "start": 1106,
                  "end": 1115
                },
                "start": 1072,
                "end": 1115
              },
              "start": 1070,
              "end": 1115
            },
            "accessibility": null,
            "static": false,
            "start": 1067,
            "end": 1116
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
              "start": 1121,
              "end": 1124
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
                            "type": "TSNumberKeyword",
                            "start": 1144,
                            "end": 1150
                          },
                          "start": 1142,
                          "end": 1150
                        },
                        "start": 1141,
                        "end": 1150
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 1153,
                          "end": 1159
                        },
                        "start": 1153,
                        "end": 1161
                      },
                      "start": 1151,
                      "end": 1161
                    },
                    "start": 1136,
                    "end": 1162
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
                            "type": "TSStringKeyword",
                            "start": 1179,
                            "end": 1185
                          },
                          "start": 1177,
                          "end": 1185
                        },
                        "start": 1176,
                        "end": 1185
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 1188,
                          "end": 1194
                        },
                        "start": 1188,
                        "end": 1196
                      },
                      "start": 1186,
                      "end": 1196
                    },
                    "start": 1171,
                    "end": 1197
                  }
                ],
                "start": 1126,
                "end": 1203
              },
              "start": 1124,
              "end": 1203
            },
            "accessibility": null,
            "static": false,
            "start": 1121,
            "end": 1204
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
              "start": 1209,
              "end": 1212
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
                            "start": 1229,
                            "end": 1230
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Derived",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1239,
                              "end": 1246
                            },
                            "typeArguments": null,
                            "start": 1239,
                            "end": 1246
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 1229,
                          "end": 1246
                        }
                      ],
                      "start": 1228,
                      "end": 1247
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
                              "start": 1251,
                              "end": 1252
                            },
                            "typeArguments": null,
                            "start": 1251,
                            "end": 1252
                          },
                          "start": 1249,
                          "end": 1252
                        },
                        "start": 1248,
                        "end": 1252
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 1255,
                          "end": 1261
                        },
                        "start": 1255,
                        "end": 1263
                      },
                      "start": 1253,
                      "end": 1263
                    },
                    "start": 1224,
                    "end": 1264
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
                            "start": 1278,
                            "end": 1279
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Base",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1288,
                              "end": 1292
                            },
                            "typeArguments": null,
                            "start": 1288,
                            "end": 1292
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 1278,
                          "end": 1292
                        }
                      ],
                      "start": 1277,
                      "end": 1293
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
                              "start": 1297,
                              "end": 1298
                            },
                            "typeArguments": null,
                            "start": 1297,
                            "end": 1298
                          },
                          "start": 1295,
                          "end": 1298
                        },
                        "start": 1294,
                        "end": 1298
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 1301,
                          "end": 1307
                        },
                        "start": 1301,
                        "end": 1309
                      },
                      "start": 1299,
                      "end": 1309
                    },
                    "start": 1273,
                    "end": 1310
                  }
                ],
                "start": 1214,
                "end": 1316
              },
              "start": 1212,
              "end": 1316
            },
            "accessibility": null,
            "static": false,
            "start": 1209,
            "end": 1317
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
              "start": 1322,
              "end": 1325
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
                                    "type": "TSNumberKeyword",
                                    "start": 1353,
                                    "end": 1359
                                  },
                                  "start": 1351,
                                  "end": 1359
                                },
                                "start": 1350,
                                "end": 1359
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1364,
                                "end": 1370
                              },
                              "start": 1361,
                              "end": 1370
                            },
                            "start": 1345,
                            "end": 1370
                          },
                          "start": 1343,
                          "end": 1370
                        },
                        "start": 1342,
                        "end": 1370
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 1373,
                          "end": 1379
                        },
                        "start": 1373,
                        "end": 1381
                      },
                      "start": 1371,
                      "end": 1381
                    },
                    "start": 1337,
                    "end": 1382
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
                                    "type": "TSStringKeyword",
                                    "start": 1407,
                                    "end": 1413
                                  },
                                  "start": 1405,
                                  "end": 1413
                                },
                                "start": 1404,
                                "end": 1413
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1418,
                                "end": 1424
                              },
                              "start": 1415,
                              "end": 1424
                            },
                            "start": 1399,
                            "end": 1424
                          },
                          "start": 1397,
                          "end": 1424
                        },
                        "start": 1396,
                        "end": 1424
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 1427,
                          "end": 1433
                        },
                        "start": 1427,
                        "end": 1435
                      },
                      "start": 1425,
                      "end": 1435
                    },
                    "start": 1391,
                    "end": 1436
                  }
                ],
                "start": 1327,
                "end": 1442
              },
              "start": 1325,
              "end": 1442
            },
            "accessibility": null,
            "static": false,
            "start": 1322,
            "end": 1443
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
              "start": 1448,
              "end": 1451
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
                                        "start": 1493,
                                        "end": 1499
                                      },
                                      "start": 1491,
                                      "end": 1499
                                    },
                                    "start": 1490,
                                    "end": 1499
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 1502,
                                    "end": 1508
                                  },
                                  "start": 1500,
                                  "end": 1508
                                },
                                "start": 1485,
                                "end": 1509
                              },
                              {
                                "type": "TSConstructSignatureDeclaration",
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
                                        "start": 1530,
                                        "end": 1536
                                      },
                                      "start": 1528,
                                      "end": 1536
                                    },
                                    "start": 1527,
                                    "end": 1536
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 1539,
                                    "end": 1545
                                  },
                                  "start": 1537,
                                  "end": 1545
                                },
                                "start": 1522,
                                "end": 1546
                              }
                            ],
                            "start": 1471,
                            "end": 1556
                          },
                          "start": 1469,
                          "end": 1556
                        },
                        "start": 1468,
                        "end": 1556
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 1559,
                          "end": 1562
                        },
                        "start": 1559,
                        "end": 1564
                      },
                      "start": 1557,
                      "end": 1564
                    },
                    "start": 1463,
                    "end": 1565
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
                                        "start": 1604,
                                        "end": 1611
                                      },
                                      "start": 1602,
                                      "end": 1611
                                    },
                                    "start": 1601,
                                    "end": 1611
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSBooleanKeyword",
                                    "start": 1614,
                                    "end": 1621
                                  },
                                  "start": 1612,
                                  "end": 1621
                                },
                                "start": 1596,
                                "end": 1622
                              },
                              {
                                "type": "TSConstructSignatureDeclaration",
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
                                          "start": 1643,
                                          "end": 1647
                                        },
                                        "typeArguments": null,
                                        "start": 1643,
                                        "end": 1647
                                      },
                                      "start": 1641,
                                      "end": 1647
                                    },
                                    "start": 1640,
                                    "end": 1647
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
                                      "start": 1650,
                                      "end": 1654
                                    },
                                    "typeArguments": null,
                                    "start": 1650,
                                    "end": 1654
                                  },
                                  "start": 1648,
                                  "end": 1654
                                },
                                "start": 1635,
                                "end": 1655
                              }
                            ],
                            "start": 1582,
                            "end": 1665
                          },
                          "start": 1580,
                          "end": 1665
                        },
                        "start": 1579,
                        "end": 1665
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 1668,
                          "end": 1671
                        },
                        "start": 1668,
                        "end": 1673
                      },
                      "start": 1666,
                      "end": 1673
                    },
                    "start": 1574,
                    "end": 1674
                  }
                ],
                "start": 1453,
                "end": 1680
              },
              "start": 1451,
              "end": 1680
            },
            "accessibility": null,
            "static": false,
            "start": 1448,
            "end": 1681
          }
        ],
        "start": 285,
        "end": 1683
      },
      "declare": false,
      "start": 273,
      "end": 1683
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 1702,
        "end": 1703
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
            "start": 1712,
            "end": 1713
          },
          "typeArguments": null,
          "start": 1712,
          "end": 1713
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
              "start": 1731,
              "end": 1732
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
                        "start": 1739,
                        "end": 1740
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1739,
                      "end": 1740
                    }
                  ],
                  "start": 1738,
                  "end": 1741
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
                          "start": 1745,
                          "end": 1746
                        },
                        "typeArguments": null,
                        "start": 1745,
                        "end": 1746
                      },
                      "start": 1743,
                      "end": 1746
                    },
                    "start": 1742,
                    "end": 1746
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
                        "start": 1751,
                        "end": 1752
                      },
                      "typeArguments": null,
                      "start": 1751,
                      "end": 1752
                    },
                    "start": 1751,
                    "end": 1754
                  },
                  "start": 1748,
                  "end": 1754
                },
                "start": 1734,
                "end": 1754
              },
              "start": 1732,
              "end": 1754
            },
            "accessibility": null,
            "static": false,
            "start": 1731,
            "end": 1755
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
              "start": 1817,
              "end": 1819
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
                        "start": 1826,
                        "end": 1827
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1826,
                      "end": 1827
                    }
                  ],
                  "start": 1825,
                  "end": 1828
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
                          "start": 1832,
                          "end": 1833
                        },
                        "typeArguments": null,
                        "start": 1832,
                        "end": 1833
                      },
                      "start": 1830,
                      "end": 1833
                    },
                    "start": 1829,
                    "end": 1833
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 1838,
                      "end": 1844
                    },
                    "start": 1838,
                    "end": 1846
                  },
                  "start": 1835,
                  "end": 1846
                },
                "start": 1821,
                "end": 1846
              },
              "start": 1819,
              "end": 1846
            },
            "accessibility": null,
            "static": false,
            "start": 1817,
            "end": 1847
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
              "start": 1858,
              "end": 1860
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
                        "start": 1867,
                        "end": 1868
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1867,
                      "end": 1868
                    }
                  ],
                  "start": 1866,
                  "end": 1869
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
                          "start": 1873,
                          "end": 1874
                        },
                        "typeArguments": null,
                        "start": 1873,
                        "end": 1874
                      },
                      "start": 1871,
                      "end": 1874
                    },
                    "start": 1870,
                    "end": 1874
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
                      "start": 1879,
                      "end": 1880
                    },
                    "typeArguments": null,
                    "start": 1879,
                    "end": 1880
                  },
                  "start": 1876,
                  "end": 1880
                },
                "start": 1862,
                "end": 1880
              },
              "start": 1860,
              "end": 1880
            },
            "accessibility": null,
            "static": false,
            "start": 1858,
            "end": 1881
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
              "start": 1916,
              "end": 1918
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
                        "start": 1925,
                        "end": 1926
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1925,
                      "end": 1926
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1928,
                        "end": 1929
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1928,
                      "end": 1929
                    }
                  ],
                  "start": 1924,
                  "end": 1930
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
                          "start": 1934,
                          "end": 1935
                        },
                        "typeArguments": null,
                        "start": 1934,
                        "end": 1935
                      },
                      "start": 1932,
                      "end": 1935
                    },
                    "start": 1931,
                    "end": 1935
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
                          "start": 1940,
                          "end": 1941
                        },
                        "typeArguments": null,
                        "start": 1940,
                        "end": 1941
                      },
                      "start": 1938,
                      "end": 1941
                    },
                    "start": 1937,
                    "end": 1941
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
                      "start": 1946,
                      "end": 1947
                    },
                    "typeArguments": null,
                    "start": 1946,
                    "end": 1947
                  },
                  "start": 1943,
                  "end": 1947
                },
                "start": 1920,
                "end": 1947
              },
              "start": 1918,
              "end": 1947
            },
            "accessibility": null,
            "static": false,
            "start": 1916,
            "end": 1948
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
              "start": 2023,
              "end": 2025
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
                        "start": 2032,
                        "end": 2033
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2032,
                      "end": 2033
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2035,
                        "end": 2036
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2035,
                      "end": 2036
                    }
                  ],
                  "start": 2031,
                  "end": 2037
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
                            "start": 2042,
                            "end": 2048
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
                              "start": 2053,
                              "end": 2054
                            },
                            "typeArguments": null,
                            "start": 2053,
                            "end": 2054
                          },
                          "start": 2050,
                          "end": 2054
                        },
                        "start": 2041,
                        "end": 2054
                      },
                      "start": 2039,
                      "end": 2054
                    },
                    "start": 2038,
                    "end": 2054
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
                      "start": 2059,
                      "end": 2060
                    },
                    "typeArguments": null,
                    "start": 2059,
                    "end": 2060
                  },
                  "start": 2056,
                  "end": 2060
                },
                "start": 2027,
                "end": 2060
              },
              "start": 2025,
              "end": 2060
            },
            "accessibility": null,
            "static": false,
            "start": 2023,
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
              "name": "a6",
              "optional": false,
              "typeAnnotation": null,
              "start": 2128,
              "end": 2130
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
                        "start": 2137,
                        "end": 2138
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2147,
                          "end": 2151
                        },
                        "typeArguments": null,
                        "start": 2147,
                        "end": 2151
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2137,
                      "end": 2151
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2153,
                        "end": 2154
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2163,
                          "end": 2170
                        },
                        "typeArguments": null,
                        "start": 2163,
                        "end": 2170
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2153,
                      "end": 2170
                    }
                  ],
                  "start": 2136,
                  "end": 2171
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
                                  "start": 2181,
                                  "end": 2182
                                },
                                "typeArguments": null,
                                "start": 2181,
                                "end": 2182
                              },
                              "start": 2179,
                              "end": 2182
                            },
                            "start": 2176,
                            "end": 2182
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
                              "start": 2187,
                              "end": 2188
                            },
                            "typeArguments": null,
                            "start": 2187,
                            "end": 2188
                          },
                          "start": 2184,
                          "end": 2188
                        },
                        "start": 2175,
                        "end": 2188
                      },
                      "start": 2173,
                      "end": 2188
                    },
                    "start": 2172,
                    "end": 2188
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
                      "start": 2193,
                      "end": 2194
                    },
                    "typeArguments": null,
                    "start": 2193,
                    "end": 2194
                  },
                  "start": 2190,
                  "end": 2194
                },
                "start": 2132,
                "end": 2194
              },
              "start": 2130,
              "end": 2194
            },
            "accessibility": null,
            "static": false,
            "start": 2128,
            "end": 2195
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
              "start": 2249,
              "end": 2251
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
                        "start": 2258,
                        "end": 2259
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2268,
                          "end": 2272
                        },
                        "typeArguments": null,
                        "start": 2268,
                        "end": 2272
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2258,
                      "end": 2272
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2274,
                        "end": 2275
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2284,
                          "end": 2291
                        },
                        "typeArguments": null,
                        "start": 2284,
                        "end": 2291
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2274,
                      "end": 2291
                    }
                  ],
                  "start": 2257,
                  "end": 2292
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
                                  "start": 2302,
                                  "end": 2303
                                },
                                "typeArguments": null,
                                "start": 2302,
                                "end": 2303
                              },
                              "start": 2300,
                              "end": 2303
                            },
                            "start": 2297,
                            "end": 2303
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
                              "start": 2308,
                              "end": 2309
                            },
                            "typeArguments": null,
                            "start": 2308,
                            "end": 2309
                          },
                          "start": 2305,
                          "end": 2309
                        },
                        "start": 2296,
                        "end": 2309
                      },
                      "start": 2294,
                      "end": 2309
                    },
                    "start": 2293,
                    "end": 2309
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
                              "start": 2318,
                              "end": 2319
                            },
                            "typeArguments": null,
                            "start": 2318,
                            "end": 2319
                          },
                          "start": 2316,
                          "end": 2319
                        },
                        "start": 2315,
                        "end": 2319
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
                          "start": 2324,
                          "end": 2325
                        },
                        "typeArguments": null,
                        "start": 2324,
                        "end": 2325
                      },
                      "start": 2321,
                      "end": 2325
                    },
                    "start": 2314,
                    "end": 2325
                  },
                  "start": 2311,
                  "end": 2325
                },
                "start": 2253,
                "end": 2325
              },
              "start": 2251,
              "end": 2325
            },
            "accessibility": null,
            "static": false,
            "start": 2249,
            "end": 2326
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
              "start": 2337,
              "end": 2339
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
                        "start": 2346,
                        "end": 2347
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2356,
                          "end": 2360
                        },
                        "typeArguments": null,
                        "start": 2356,
                        "end": 2360
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2346,
                      "end": 2360
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
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
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2372,
                          "end": 2379
                        },
                        "typeArguments": null,
                        "start": 2372,
                        "end": 2379
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2362,
                      "end": 2379
                    }
                  ],
                  "start": 2345,
                  "end": 2380
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
                                  "start": 2390,
                                  "end": 2391
                                },
                                "typeArguments": null,
                                "start": 2390,
                                "end": 2391
                              },
                              "start": 2388,
                              "end": 2391
                            },
                            "start": 2385,
                            "end": 2391
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
                              "start": 2396,
                              "end": 2397
                            },
                            "typeArguments": null,
                            "start": 2396,
                            "end": 2397
                          },
                          "start": 2393,
                          "end": 2397
                        },
                        "start": 2384,
                        "end": 2397
                      },
                      "start": 2382,
                      "end": 2397
                    },
                    "start": 2381,
                    "end": 2397
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
                                  "start": 2409,
                                  "end": 2410
                                },
                                "typeArguments": null,
                                "start": 2409,
                                "end": 2410
                              },
                              "start": 2407,
                              "end": 2410
                            },
                            "start": 2403,
                            "end": 2410
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
                              "start": 2415,
                              "end": 2416
                            },
                            "typeArguments": null,
                            "start": 2415,
                            "end": 2416
                          },
                          "start": 2412,
                          "end": 2416
                        },
                        "start": 2402,
                        "end": 2416
                      },
                      "start": 2400,
                      "end": 2416
                    },
                    "start": 2399,
                    "end": 2416
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
                              "start": 2425,
                              "end": 2426
                            },
                            "typeArguments": null,
                            "start": 2425,
                            "end": 2426
                          },
                          "start": 2423,
                          "end": 2426
                        },
                        "start": 2422,
                        "end": 2426
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
                          "start": 2431,
                          "end": 2432
                        },
                        "typeArguments": null,
                        "start": 2431,
                        "end": 2432
                      },
                      "start": 2428,
                      "end": 2432
                    },
                    "start": 2421,
                    "end": 2432
                  },
                  "start": 2418,
                  "end": 2432
                },
                "start": 2341,
                "end": 2432
              },
              "start": 2339,
              "end": 2432
            },
            "accessibility": null,
            "static": false,
            "start": 2337,
            "end": 2433
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
              "start": 2444,
              "end": 2446
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
                        "start": 2453,
                        "end": 2454
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2463,
                          "end": 2467
                        },
                        "typeArguments": null,
                        "start": 2463,
                        "end": 2467
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2453,
                      "end": 2467
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2469,
                        "end": 2470
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2479,
                          "end": 2486
                        },
                        "typeArguments": null,
                        "start": 2479,
                        "end": 2486
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2469,
                      "end": 2486
                    }
                  ],
                  "start": 2452,
                  "end": 2487
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
                                  "start": 2497,
                                  "end": 2498
                                },
                                "typeArguments": null,
                                "start": 2497,
                                "end": 2498
                              },
                              "start": 2495,
                              "end": 2498
                            },
                            "start": 2492,
                            "end": 2498
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
                              "start": 2503,
                              "end": 2504
                            },
                            "typeArguments": null,
                            "start": 2503,
                            "end": 2504
                          },
                          "start": 2500,
                          "end": 2504
                        },
                        "start": 2491,
                        "end": 2504
                      },
                      "start": 2489,
                      "end": 2504
                    },
                    "start": 2488,
                    "end": 2504
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
                                      "start": 2518,
                                      "end": 2521
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSStringKeyword",
                                        "start": 2523,
                                        "end": 2529
                                      },
                                      "start": 2521,
                                      "end": 2529
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 2518,
                                    "end": 2530
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
                                      "start": 2531,
                                      "end": 2535
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 2537,
                                        "end": 2543
                                      },
                                      "start": 2535,
                                      "end": 2543
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 2531,
                                    "end": 2543
                                  }
                                ],
                                "start": 2516,
                                "end": 2545
                              },
                              "start": 2514,
                              "end": 2545
                            },
                            "start": 2510,
                            "end": 2545
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
                              "start": 2550,
                              "end": 2551
                            },
                            "typeArguments": null,
                            "start": 2550,
                            "end": 2551
                          },
                          "start": 2547,
                          "end": 2551
                        },
                        "start": 2509,
                        "end": 2551
                      },
                      "start": 2507,
                      "end": 2551
                    },
                    "start": 2506,
                    "end": 2551
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
                              "start": 2560,
                              "end": 2561
                            },
                            "typeArguments": null,
                            "start": 2560,
                            "end": 2561
                          },
                          "start": 2558,
                          "end": 2561
                        },
                        "start": 2557,
                        "end": 2561
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
                          "start": 2566,
                          "end": 2567
                        },
                        "typeArguments": null,
                        "start": 2566,
                        "end": 2567
                      },
                      "start": 2563,
                      "end": 2567
                    },
                    "start": 2556,
                    "end": 2567
                  },
                  "start": 2553,
                  "end": 2567
                },
                "start": 2448,
                "end": 2567
              },
              "start": 2446,
              "end": 2567
            },
            "accessibility": null,
            "static": false,
            "start": 2444,
            "end": 2568
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
              "start": 2622,
              "end": 2625
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
                        "start": 2632,
                        "end": 2633
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2642,
                          "end": 2649
                        },
                        "typeArguments": null,
                        "start": 2642,
                        "end": 2649
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2632,
                      "end": 2649
                    }
                  ],
                  "start": 2631,
                  "end": 2650
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
                      "start": 2654,
                      "end": 2655
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
                            "start": 2657,
                            "end": 2658
                          },
                          "typeArguments": null,
                          "start": 2657,
                          "end": 2658
                        },
                        "start": 2657,
                        "end": 2660
                      },
                      "start": 2655,
                      "end": 2660
                    },
                    "value": null,
                    "start": 2651,
                    "end": 2660
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
                      "start": 2665,
                      "end": 2666
                    },
                    "typeArguments": null,
                    "start": 2665,
                    "end": 2666
                  },
                  "start": 2662,
                  "end": 2666
                },
                "start": 2627,
                "end": 2666
              },
              "start": 2625,
              "end": 2666
            },
            "accessibility": null,
            "static": false,
            "start": 2622,
            "end": 2667
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
              "start": 2678,
              "end": 2681
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
                        "start": 2688,
                        "end": 2689
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2698,
                          "end": 2702
                        },
                        "typeArguments": null,
                        "start": 2698,
                        "end": 2702
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2688,
                      "end": 2702
                    }
                  ],
                  "start": 2687,
                  "end": 2703
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
                          "start": 2707,
                          "end": 2708
                        },
                        "typeArguments": null,
                        "start": 2707,
                        "end": 2708
                      },
                      "start": 2705,
                      "end": 2708
                    },
                    "start": 2704,
                    "end": 2708
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
                          "start": 2713,
                          "end": 2714
                        },
                        "typeArguments": null,
                        "start": 2713,
                        "end": 2714
                      },
                      "start": 2711,
                      "end": 2714
                    },
                    "start": 2710,
                    "end": 2714
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
                      "start": 2719,
                      "end": 2720
                    },
                    "typeArguments": null,
                    "start": 2719,
                    "end": 2720
                  },
                  "start": 2716,
                  "end": 2720
                },
                "start": 2683,
                "end": 2720
              },
              "start": 2681,
              "end": 2720
            },
            "accessibility": null,
            "static": false,
            "start": 2678,
            "end": 2721
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
              "start": 2732,
              "end": 2735
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
                        "start": 2742,
                        "end": 2743
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Array",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2752,
                          "end": 2757
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
                                "start": 2758,
                                "end": 2762
                              },
                              "typeArguments": null,
                              "start": 2758,
                              "end": 2762
                            }
                          ],
                          "start": 2757,
                          "end": 2763
                        },
                        "start": 2752,
                        "end": 2763
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2742,
                      "end": 2763
                    }
                  ],
                  "start": 2741,
                  "end": 2764
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
                          "start": 2768,
                          "end": 2773
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
                                "start": 2774,
                                "end": 2778
                              },
                              "typeArguments": null,
                              "start": 2774,
                              "end": 2778
                            }
                          ],
                          "start": 2773,
                          "end": 2779
                        },
                        "start": 2768,
                        "end": 2779
                      },
                      "start": 2766,
                      "end": 2779
                    },
                    "start": 2765,
                    "end": 2779
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
                          "start": 2784,
                          "end": 2785
                        },
                        "typeArguments": null,
                        "start": 2784,
                        "end": 2785
                      },
                      "start": 2782,
                      "end": 2785
                    },
                    "start": 2781,
                    "end": 2785
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
                      "start": 2790,
                      "end": 2795
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
                            "start": 2796,
                            "end": 2803
                          },
                          "typeArguments": null,
                          "start": 2796,
                          "end": 2803
                        }
                      ],
                      "start": 2795,
                      "end": 2804
                    },
                    "start": 2790,
                    "end": 2804
                  },
                  "start": 2787,
                  "end": 2804
                },
                "start": 2737,
                "end": 2804
              },
              "start": 2735,
              "end": 2804
            },
            "accessibility": null,
            "static": false,
            "start": 2732,
            "end": 2805
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
              "start": 2846,
              "end": 2849
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
                        "start": 2856,
                        "end": 2857
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Array",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2866,
                          "end": 2871
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
                                "start": 2872,
                                "end": 2879
                              },
                              "typeArguments": null,
                              "start": 2872,
                              "end": 2879
                            }
                          ],
                          "start": 2871,
                          "end": 2880
                        },
                        "start": 2866,
                        "end": 2880
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2856,
                      "end": 2880
                    }
                  ],
                  "start": 2855,
                  "end": 2881
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
                          "start": 2885,
                          "end": 2890
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
                                "start": 2891,
                                "end": 2895
                              },
                              "typeArguments": null,
                              "start": 2891,
                              "end": 2895
                            }
                          ],
                          "start": 2890,
                          "end": 2896
                        },
                        "start": 2885,
                        "end": 2896
                      },
                      "start": 2883,
                      "end": 2896
                    },
                    "start": 2882,
                    "end": 2896
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
                          "start": 2901,
                          "end": 2902
                        },
                        "typeArguments": null,
                        "start": 2901,
                        "end": 2902
                      },
                      "start": 2899,
                      "end": 2902
                    },
                    "start": 2898,
                    "end": 2902
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
                      "start": 2907,
                      "end": 2908
                    },
                    "typeArguments": null,
                    "start": 2907,
                    "end": 2908
                  },
                  "start": 2904,
                  "end": 2908
                },
                "start": 2851,
                "end": 2908
              },
              "start": 2849,
              "end": 2908
            },
            "accessibility": null,
            "static": false,
            "start": 2846,
            "end": 2909
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
              "start": 3007,
              "end": 3010
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
                        "start": 3017,
                        "end": 3018
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 3017,
                      "end": 3018
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3020,
                        "end": 3021
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 3020,
                      "end": 3021
                    }
                  ],
                  "start": 3016,
                  "end": 3022
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
                              "start": 3028,
                              "end": 3029
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
                                  "start": 3031,
                                  "end": 3032
                                },
                                "typeArguments": null,
                                "start": 3031,
                                "end": 3032
                              },
                              "start": 3029,
                              "end": 3032
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 3028,
                            "end": 3033
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
                              "start": 3034,
                              "end": 3035
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
                                  "start": 3037,
                                  "end": 3038
                                },
                                "typeArguments": null,
                                "start": 3037,
                                "end": 3038
                              },
                              "start": 3035,
                              "end": 3038
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 3034,
                            "end": 3038
                          }
                        ],
                        "start": 3026,
                        "end": 3040
                      },
                      "start": 3024,
                      "end": 3040
                    },
                    "start": 3023,
                    "end": 3040
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
                      "start": 3045,
                      "end": 3046
                    },
                    "typeArguments": null,
                    "start": 3045,
                    "end": 3046
                  },
                  "start": 3042,
                  "end": 3046
                },
                "start": 3012,
                "end": 3046
              },
              "start": 3010,
              "end": 3046
            },
            "accessibility": null,
            "static": false,
            "start": 3007,
            "end": 3047
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
              "start": 3058,
              "end": 3061
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
                        "start": 3068,
                        "end": 3069
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 3068,
                      "end": 3069
                    }
                  ],
                  "start": 3067,
                  "end": 3070
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
                          "start": 3074,
                          "end": 3075
                        },
                        "typeArguments": null,
                        "start": 3074,
                        "end": 3075
                      },
                      "start": 3072,
                      "end": 3075
                    },
                    "start": 3071,
                    "end": 3075
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
                        "start": 3080,
                        "end": 3081
                      },
                      "typeArguments": null,
                      "start": 3080,
                      "end": 3081
                    },
                    "start": 3080,
                    "end": 3083
                  },
                  "start": 3077,
                  "end": 3083
                },
                "start": 3063,
                "end": 3083
              },
              "start": 3061,
              "end": 3083
            },
            "accessibility": null,
            "static": false,
            "start": 3058,
            "end": 3084
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
              "start": 3095,
              "end": 3098
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
                        "start": 3105,
                        "end": 3106
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3115,
                          "end": 3119
                        },
                        "typeArguments": null,
                        "start": 3115,
                        "end": 3119
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 3105,
                      "end": 3119
                    }
                  ],
                  "start": 3104,
                  "end": 3120
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
                          "start": 3124,
                          "end": 3125
                        },
                        "typeArguments": null,
                        "start": 3124,
                        "end": 3125
                      },
                      "start": 3122,
                      "end": 3125
                    },
                    "start": 3121,
                    "end": 3125
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 3130,
                      "end": 3136
                    },
                    "start": 3130,
                    "end": 3138
                  },
                  "start": 3127,
                  "end": 3138
                },
                "start": 3100,
                "end": 3138
              },
              "start": 3098,
              "end": 3138
            },
            "accessibility": null,
            "static": false,
            "start": 3095,
            "end": 3139
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
              "start": 3150,
              "end": 3153
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
                        "start": 3160,
                        "end": 3161
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 3160,
                      "end": 3161
                    }
                  ],
                  "start": 3159,
                  "end": 3162
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
                                  "start": 3174,
                                  "end": 3175
                                },
                                "typeArguments": null,
                                "start": 3174,
                                "end": 3175
                              },
                              "start": 3172,
                              "end": 3175
                            },
                            "start": 3171,
                            "end": 3175
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
                              "start": 3180,
                              "end": 3181
                            },
                            "typeArguments": null,
                            "start": 3180,
                            "end": 3181
                          },
                          "start": 3177,
                          "end": 3181
                        },
                        "start": 3166,
                        "end": 3181
                      },
                      "start": 3164,
                      "end": 3181
                    },
                    "start": 3163,
                    "end": 3181
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
                        "start": 3186,
                        "end": 3187
                      },
                      "typeArguments": null,
                      "start": 3186,
                      "end": 3187
                    },
                    "start": 3186,
                    "end": 3189
                  },
                  "start": 3183,
                  "end": 3189
                },
                "start": 3155,
                "end": 3189
              },
              "start": 3153,
              "end": 3189
            },
            "accessibility": null,
            "static": false,
            "start": 3150,
            "end": 3190
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
              "start": 3201,
              "end": 3204
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
                        "start": 3211,
                        "end": 3212
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 3211,
                      "end": 3212
                    }
                  ],
                  "start": 3210,
                  "end": 3213
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
                                  "start": 3225,
                                  "end": 3226
                                },
                                "typeArguments": null,
                                "start": 3225,
                                "end": 3226
                              },
                              "start": 3223,
                              "end": 3226
                            },
                            "start": 3222,
                            "end": 3226
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
                              "start": 3231,
                              "end": 3232
                            },
                            "typeArguments": null,
                            "start": 3231,
                            "end": 3232
                          },
                          "start": 3228,
                          "end": 3232
                        },
                        "start": 3217,
                        "end": 3232
                      },
                      "start": 3215,
                      "end": 3232
                    },
                    "start": 3214,
                    "end": 3232
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
                        "start": 3237,
                        "end": 3238
                      },
                      "typeArguments": null,
                      "start": 3237,
                      "end": 3238
                    },
                    "start": 3237,
                    "end": 3240
                  },
                  "start": 3234,
                  "end": 3240
                },
                "start": 3206,
                "end": 3240
              },
              "start": 3204,
              "end": 3240
            },
            "accessibility": null,
            "static": false,
            "start": 3201,
            "end": 3241
          }
        ],
        "start": 1714,
        "end": 3292
      },
      "declare": false,
      "start": 1692,
      "end": 3292
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 102,
  "end": 3292
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
    "value": "(",
    "start": 314,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 316,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 318,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 326,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 329,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 337,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 343,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 345,
    "end": 346
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 347,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 351,
    "end": 352
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 353,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 355,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 363,
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
    "value": "[",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 374,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 380,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 382,
    "end": 383
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 384,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 388,
    "end": 389
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 389,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 390,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 392,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 398,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 400,
    "end": 402
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 403,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 407,
    "end": 408
  },
  {
    "type": "Identifier",
    "value": "a4",
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
    "value": "(",
    "start": 421,
    "end": 422
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 423,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 425,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 431,
    "end": 432
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 433,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 434,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 436,
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
    "value": "string",
    "start": 447,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 453,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 459,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 461,
    "end": 462
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 463,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 467,
    "end": 468
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 468,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 471,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 472,
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
    "value": "string",
    "start": 477,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 485,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 488,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 496,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 499,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 505,
    "end": 506
  },
  {
    "type": "Identifier",
    "value": "a6",
    "start": 511,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 513,
    "end": 514
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 515,
    "end": 518
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
    "type": "Punctuator",
    "value": "(",
    "start": 523,
    "end": 524
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 524,
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
    "value": "Base",
    "start": 529,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 533,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 535,
    "end": 537
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 538,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 545,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 547,
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
    "value": ";",
    "start": 554,
    "end": 555
  },
  {
    "type": "Identifier",
    "value": "a7",
    "start": 560,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 562,
    "end": 563
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 564,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 568,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 569,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 570,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 572,
    "end": 573
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 573,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 576,
    "end": 577
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 578,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 582,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 584,
    "end": 586
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 587,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 594,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 596,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 599,
    "end": 600
  },
  {
    "type": "Identifier",
    "value": "r",
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
    "value": "Base",
    "start": 603,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 607,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 609,
    "end": 611
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 612,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 619,
    "end": 620
  },
  {
    "type": "Identifier",
    "value": "a8",
    "start": 625,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 627,
    "end": 628
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 629,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 633,
    "end": 634
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Punctuator",
    "value": "(",
    "start": 637,
    "end": 638
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 638,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 641,
    "end": 642
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 643,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 647,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 649,
    "end": 651
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 652,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 659,
    "end": 660
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "type": "Punctuator",
    "value": "(",
    "start": 664,
    "end": 665
  },
  {
    "type": "Identifier",
    "value": "arg2",
    "start": 665,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 669,
    "end": 670
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 671,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 675,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 677,
    "end": 679
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 680,
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
    "value": "=>",
    "start": 689,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 692,
    "end": 693
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 693,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 694,
    "end": 695
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 696,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 700,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 702,
    "end": 704
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 705,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 712,
    "end": 713
  },
  {
    "type": "Identifier",
    "value": "a9",
    "start": 718,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 720,
    "end": 721
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 722,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 726,
    "end": 727
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 727,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 728,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 730,
    "end": 731
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 731,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 734,
    "end": 735
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 736,
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
    "value": "=>",
    "start": 742,
    "end": 744
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 745,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 752,
    "end": 753
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 754,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 755,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 757,
    "end": 758
  },
  {
    "type": "Identifier",
    "value": "arg2",
    "start": 758,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 762,
    "end": 763
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 764,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 768,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 770,
    "end": 772
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 773,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 780,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 782,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 785,
    "end": 786
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 786,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 787,
    "end": 788
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 789,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 793,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 795,
    "end": 797
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 798,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 805,
    "end": 806
  },
  {
    "type": "Identifier",
    "value": "a10",
    "start": 811,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 814,
    "end": 815
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 816,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 820,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 821,
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
    "value": "Derived",
    "start": 827,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 834,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 835,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 836,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 838,
    "end": 840
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 841,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 848,
    "end": 849
  },
  {
    "type": "Identifier",
    "value": "a11",
    "start": 854,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 857,
    "end": 858
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 859,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 863,
    "end": 864
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 864,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 865,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 867,
    "end": 868
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 869,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 872,
    "end": 873
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 874,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 881,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 882,
    "end": 883
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "type": "Punctuator",
    "value": "{",
    "start": 887,
    "end": 888
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 889,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 892,
    "end": 893
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 894,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 900,
    "end": 901
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 902,
    "end": 905
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 905,
    "end": 906
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 907,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 914,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 915,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 917,
    "end": 919
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 920,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 924,
    "end": 925
  },
  {
    "type": "Identifier",
    "value": "a12",
    "start": 930,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 933,
    "end": 934
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 935,
    "end": 938
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 939,
    "end": 940
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 940,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 941,
    "end": 942
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 943,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 948,
    "end": 949
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
    "value": ",",
    "start": 954,
    "end": 955
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 956,
    "end": 957
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 957,
    "end": 958
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 959,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 964,
    "end": 965
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 965,
    "end": 973
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 973,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 974,
    "end": 975
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 976,
    "end": 978
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 979,
    "end": 984
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 984,
    "end": 985
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 985,
    "end": 992
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Identifier",
    "value": "a13",
    "start": 999,
    "end": 1002
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1004,
    "end": 1007
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 1012,
    "end": 1017
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1018,
    "end": 1022
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1025,
    "end": 1026
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 1028,
    "end": 1033
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1034,
    "end": 1041
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1044,
    "end": 1046
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 1047,
    "end": 1052
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1053,
    "end": 1060
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "Identifier",
    "value": "a14",
    "start": 1067,
    "end": 1070
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1072,
    "end": 1075
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1076,
    "end": 1077
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1078,
    "end": 1079
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "value": "string",
    "start": 1085,
    "end": 1091
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1091,
    "end": 1092
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1094,
    "end": 1095
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1096,
    "end": 1102
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1103,
    "end": 1104
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1106,
    "end": 1108
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 1109,
    "end": 1115
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1115,
    "end": 1116
  },
  {
    "type": "Identifier",
    "value": "a15",
    "start": 1121,
    "end": 1124
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1126,
    "end": 1127
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1136,
    "end": 1139
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1140,
    "end": 1141
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1141,
    "end": 1142
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1142,
    "end": 1143
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1144,
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
    "value": ":",
    "start": 1151,
    "end": 1152
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1153,
    "end": 1159
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1159,
    "end": 1160
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1160,
    "end": 1161
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1161,
    "end": 1162
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1171,
    "end": 1174
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
    "value": "string",
    "start": 1179,
    "end": 1185
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1188,
    "end": 1194
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1194,
    "end": 1195
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Punctuator",
    "value": "}",
    "start": 1202,
    "end": 1203
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1203,
    "end": 1204
  },
  {
    "type": "Identifier",
    "value": "a16",
    "start": 1209,
    "end": 1212
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1212,
    "end": 1213
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1214,
    "end": 1215
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1224,
    "end": 1227
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1228,
    "end": 1229
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1229,
    "end": 1230
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1231,
    "end": 1238
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1239,
    "end": 1246
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1246,
    "end": 1247
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1247,
    "end": 1248
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1248,
    "end": 1249
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1249,
    "end": 1250
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1251,
    "end": 1252
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1252,
    "end": 1253
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1253,
    "end": 1254
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1255,
    "end": 1261
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1261,
    "end": 1262
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1262,
    "end": 1263
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1263,
    "end": 1264
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1273,
    "end": 1276
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1277,
    "end": 1278
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1278,
    "end": 1279
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1280,
    "end": 1287
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1288,
    "end": 1292
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1292,
    "end": 1293
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1293,
    "end": 1294
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1294,
    "end": 1295
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1295,
    "end": 1296
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1297,
    "end": 1298
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1298,
    "end": 1299
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1299,
    "end": 1300
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1301,
    "end": 1307
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1307,
    "end": 1308
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1308,
    "end": 1309
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1309,
    "end": 1310
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Identifier",
    "value": "a17",
    "start": 1322,
    "end": 1325
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1327,
    "end": 1328
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1337,
    "end": 1340
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1341,
    "end": 1342
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1342,
    "end": 1343
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1343,
    "end": 1344
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1345,
    "end": 1348
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1349,
    "end": 1350
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1350,
    "end": 1351
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1351,
    "end": 1352
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1353,
    "end": 1359
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1359,
    "end": 1360
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1361,
    "end": 1363
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1364,
    "end": 1370
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1370,
    "end": 1371
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1371,
    "end": 1372
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1373,
    "end": 1379
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1379,
    "end": 1380
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1380,
    "end": 1381
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1381,
    "end": 1382
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1391,
    "end": 1394
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1395,
    "end": 1396
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1396,
    "end": 1397
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1397,
    "end": 1398
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1399,
    "end": 1402
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1403,
    "end": 1404
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1404,
    "end": 1405
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1405,
    "end": 1406
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1407,
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
    "value": "=>",
    "start": 1415,
    "end": 1417
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1418,
    "end": 1424
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1424,
    "end": 1425
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1425,
    "end": 1426
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1427,
    "end": 1433
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1433,
    "end": 1434
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1434,
    "end": 1435
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1435,
    "end": 1436
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1441,
    "end": 1442
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1442,
    "end": 1443
  },
  {
    "type": "Identifier",
    "value": "a18",
    "start": 1448,
    "end": 1451
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "type": "Keyword",
    "value": "new",
    "start": 1463,
    "end": 1466
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1467,
    "end": 1468
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1468,
    "end": 1469
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1469,
    "end": 1470
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1471,
    "end": 1472
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1485,
    "end": 1488
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1489,
    "end": 1490
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1490,
    "end": 1491
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1491,
    "end": 1492
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1493,
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
    "value": ":",
    "start": 1500,
    "end": 1501
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1502,
    "end": 1508
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1508,
    "end": 1509
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1522,
    "end": 1525
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1526,
    "end": 1527
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "value": "string",
    "start": 1530,
    "end": 1536
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1536,
    "end": 1537
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1537,
    "end": 1538
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1539,
    "end": 1545
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1545,
    "end": 1546
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1555,
    "end": 1556
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1556,
    "end": 1557
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1557,
    "end": 1558
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1559,
    "end": 1562
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1562,
    "end": 1563
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1563,
    "end": 1564
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1564,
    "end": 1565
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1574,
    "end": 1577
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
    "type": "Punctuator",
    "value": "{",
    "start": 1582,
    "end": 1583
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1596,
    "end": 1599
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1600,
    "end": 1601
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1601,
    "end": 1602
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1602,
    "end": 1603
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1604,
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
    "value": ":",
    "start": 1612,
    "end": 1613
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1614,
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
    "value": "new",
    "start": 1635,
    "end": 1638
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1639,
    "end": 1640
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1640,
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
    "value": "Date",
    "start": 1643,
    "end": 1647
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1647,
    "end": 1648
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1648,
    "end": 1649
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 1650,
    "end": 1654
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1654,
    "end": 1655
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1664,
    "end": 1665
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1665,
    "end": 1666
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1666,
    "end": 1667
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1668,
    "end": 1671
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1671,
    "end": 1672
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1672,
    "end": 1673
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1673,
    "end": 1674
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1679,
    "end": 1680
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1680,
    "end": 1681
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1682,
    "end": 1683
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1692,
    "end": 1701
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1702,
    "end": 1703
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1704,
    "end": 1711
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1712,
    "end": 1713
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1714,
    "end": 1715
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "type": "Keyword",
    "value": "new",
    "start": 1734,
    "end": 1737
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1738,
    "end": 1739
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1739,
    "end": 1740
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1740,
    "end": 1741
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1741,
    "end": 1742
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1742,
    "end": 1743
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1743,
    "end": 1744
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1745,
    "end": 1746
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1746,
    "end": 1747
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1748,
    "end": 1750
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1751,
    "end": 1752
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1752,
    "end": 1753
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1753,
    "end": 1754
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1754,
    "end": 1755
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1817,
    "end": 1819
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1819,
    "end": 1820
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1821,
    "end": 1824
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1825,
    "end": 1826
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1826,
    "end": 1827
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1827,
    "end": 1828
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1828,
    "end": 1829
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1829,
    "end": 1830
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1830,
    "end": 1831
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1832,
    "end": 1833
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1833,
    "end": 1834
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1835,
    "end": 1837
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1838,
    "end": 1844
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1844,
    "end": 1845
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1845,
    "end": 1846
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1846,
    "end": 1847
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 1858,
    "end": 1860
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1860,
    "end": 1861
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1862,
    "end": 1865
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1866,
    "end": 1867
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1867,
    "end": 1868
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1868,
    "end": 1869
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1869,
    "end": 1870
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1870,
    "end": 1871
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1871,
    "end": 1872
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1873,
    "end": 1874
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1874,
    "end": 1875
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1876,
    "end": 1878
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1879,
    "end": 1880
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1880,
    "end": 1881
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 1916,
    "end": 1918
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1918,
    "end": 1919
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1920,
    "end": 1923
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1924,
    "end": 1925
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": "U",
    "start": 1928,
    "end": 1929
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1929,
    "end": 1930
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1930,
    "end": 1931
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1931,
    "end": 1932
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1932,
    "end": 1933
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1934,
    "end": 1935
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1935,
    "end": 1936
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1937,
    "end": 1938
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1938,
    "end": 1939
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1940,
    "end": 1941
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1941,
    "end": 1942
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1943,
    "end": 1945
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1946,
    "end": 1947
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1947,
    "end": 1948
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 2023,
    "end": 2025
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2025,
    "end": 2026
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2027,
    "end": 2030
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2031,
    "end": 2032
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2032,
    "end": 2033
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2033,
    "end": 2034
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2035,
    "end": 2036
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2036,
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
    "type": "Punctuator",
    "value": "(",
    "start": 2041,
    "end": 2042
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 2042,
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
    "value": "T",
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
    "value": "=>",
    "start": 2050,
    "end": 2052
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2053,
    "end": 2054
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2054,
    "end": 2055
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2056,
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
    "value": "a6",
    "start": 2128,
    "end": 2130
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2130,
    "end": 2131
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2132,
    "end": 2135
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2136,
    "end": 2137
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2137,
    "end": 2138
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2139,
    "end": 2146
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2147,
    "end": 2151
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2151,
    "end": 2152
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2153,
    "end": 2154
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2155,
    "end": 2162
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 2163,
    "end": 2170
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2170,
    "end": 2171
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2171,
    "end": 2172
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2172,
    "end": 2173
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2173,
    "end": 2174
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2175,
    "end": 2176
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 2176,
    "end": 2179
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2179,
    "end": 2180
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2181,
    "end": 2182
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2182,
    "end": 2183
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2184,
    "end": 2186
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2187,
    "end": 2188
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2188,
    "end": 2189
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2190,
    "end": 2192
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "type": "Identifier",
    "value": "a7",
    "start": 2249,
    "end": 2251
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2251,
    "end": 2252
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2253,
    "end": 2256
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2257,
    "end": 2258
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2258,
    "end": 2259
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2260,
    "end": 2267
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2268,
    "end": 2272
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2272,
    "end": 2273
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2274,
    "end": 2275
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2276,
    "end": 2283
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 2284,
    "end": 2291
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2291,
    "end": 2292
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2292,
    "end": 2293
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2293,
    "end": 2294
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2294,
    "end": 2295
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2296,
    "end": 2297
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 2297,
    "end": 2300
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2300,
    "end": 2301
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2302,
    "end": 2303
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2303,
    "end": 2304
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2305,
    "end": 2307
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2308,
    "end": 2309
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2309,
    "end": 2310
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2311,
    "end": 2313
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2314,
    "end": 2315
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 2315,
    "end": 2316
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2316,
    "end": 2317
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2318,
    "end": 2319
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2319,
    "end": 2320
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2321,
    "end": 2323
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2324,
    "end": 2325
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2325,
    "end": 2326
  },
  {
    "type": "Identifier",
    "value": "a8",
    "start": 2337,
    "end": 2339
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2339,
    "end": 2340
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2341,
    "end": 2344
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2345,
    "end": 2346
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2346,
    "end": 2347
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2348,
    "end": 2355
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2356,
    "end": 2360
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2360,
    "end": 2361
  },
  {
    "type": "Identifier",
    "value": "U",
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
    "value": "Derived",
    "start": 2372,
    "end": 2379
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2379,
    "end": 2380
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2380,
    "end": 2381
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2381,
    "end": 2382
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2382,
    "end": 2383
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2384,
    "end": 2385
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 2385,
    "end": 2388
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2388,
    "end": 2389
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2390,
    "end": 2391
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2391,
    "end": 2392
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2393,
    "end": 2395
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2396,
    "end": 2397
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2397,
    "end": 2398
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2399,
    "end": 2400
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2400,
    "end": 2401
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2402,
    "end": 2403
  },
  {
    "type": "Identifier",
    "value": "arg2",
    "start": 2403,
    "end": 2407
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2407,
    "end": 2408
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2409,
    "end": 2410
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2410,
    "end": 2411
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2412,
    "end": 2414
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2415,
    "end": 2416
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2416,
    "end": 2417
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2418,
    "end": 2420
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2421,
    "end": 2422
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 2422,
    "end": 2423
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2423,
    "end": 2424
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2425,
    "end": 2426
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2426,
    "end": 2427
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2428,
    "end": 2430
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2431,
    "end": 2432
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2432,
    "end": 2433
  },
  {
    "type": "Identifier",
    "value": "a9",
    "start": 2444,
    "end": 2446
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2446,
    "end": 2447
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2448,
    "end": 2451
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2452,
    "end": 2453
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2453,
    "end": 2454
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2455,
    "end": 2462
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2463,
    "end": 2467
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2467,
    "end": 2468
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2469,
    "end": 2470
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2471,
    "end": 2478
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 2479,
    "end": 2486
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2486,
    "end": 2487
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2487,
    "end": 2488
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2488,
    "end": 2489
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2489,
    "end": 2490
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2491,
    "end": 2492
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 2492,
    "end": 2495
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2495,
    "end": 2496
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2497,
    "end": 2498
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2498,
    "end": 2499
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2500,
    "end": 2502
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2503,
    "end": 2504
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2504,
    "end": 2505
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2506,
    "end": 2507
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2507,
    "end": 2508
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2509,
    "end": 2510
  },
  {
    "type": "Identifier",
    "value": "arg2",
    "start": 2510,
    "end": 2514
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2514,
    "end": 2515
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2516,
    "end": 2517
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2518,
    "end": 2521
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2521,
    "end": 2522
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2523,
    "end": 2529
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2529,
    "end": 2530
  },
  {
    "type": "Identifier",
    "value": "bing",
    "start": 2531,
    "end": 2535
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2535,
    "end": 2536
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2537,
    "end": 2543
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2544,
    "end": 2545
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2545,
    "end": 2546
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2547,
    "end": 2549
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2550,
    "end": 2551
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2551,
    "end": 2552
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2553,
    "end": 2555
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2556,
    "end": 2557
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 2557,
    "end": 2558
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2558,
    "end": 2559
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2560,
    "end": 2561
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2561,
    "end": 2562
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2563,
    "end": 2565
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2566,
    "end": 2567
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2567,
    "end": 2568
  },
  {
    "type": "Identifier",
    "value": "a10",
    "start": 2622,
    "end": 2625
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2625,
    "end": 2626
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2627,
    "end": 2630
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2631,
    "end": 2632
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2632,
    "end": 2633
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2634,
    "end": 2641
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 2642,
    "end": 2649
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2649,
    "end": 2650
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2650,
    "end": 2651
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2651,
    "end": 2654
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2654,
    "end": 2655
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2655,
    "end": 2656
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2657,
    "end": 2658
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2658,
    "end": 2659
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2659,
    "end": 2660
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2660,
    "end": 2661
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2662,
    "end": 2664
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2665,
    "end": 2666
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2666,
    "end": 2667
  },
  {
    "type": "Identifier",
    "value": "a11",
    "start": 2678,
    "end": 2681
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2681,
    "end": 2682
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2683,
    "end": 2686
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2687,
    "end": 2688
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2688,
    "end": 2689
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2690,
    "end": 2697
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2698,
    "end": 2702
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2702,
    "end": 2703
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2703,
    "end": 2704
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2704,
    "end": 2705
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2705,
    "end": 2706
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2707,
    "end": 2708
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2708,
    "end": 2709
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2710,
    "end": 2711
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2711,
    "end": 2712
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2713,
    "end": 2714
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2714,
    "end": 2715
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2716,
    "end": 2718
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2719,
    "end": 2720
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2720,
    "end": 2721
  },
  {
    "type": "Identifier",
    "value": "a12",
    "start": 2732,
    "end": 2735
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2735,
    "end": 2736
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2737,
    "end": 2740
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2741,
    "end": 2742
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2742,
    "end": 2743
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2744,
    "end": 2751
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 2752,
    "end": 2757
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2757,
    "end": 2758
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2758,
    "end": 2762
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2762,
    "end": 2763
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2763,
    "end": 2764
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2764,
    "end": 2765
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2765,
    "end": 2766
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2766,
    "end": 2767
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 2768,
    "end": 2773
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2773,
    "end": 2774
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2774,
    "end": 2778
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2778,
    "end": 2779
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2779,
    "end": 2780
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2781,
    "end": 2782
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2782,
    "end": 2783
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2784,
    "end": 2785
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2785,
    "end": 2786
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2787,
    "end": 2789
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 2790,
    "end": 2795
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2795,
    "end": 2796
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 2796,
    "end": 2803
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2803,
    "end": 2804
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2804,
    "end": 2805
  },
  {
    "type": "Identifier",
    "value": "a13",
    "start": 2846,
    "end": 2849
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2849,
    "end": 2850
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2851,
    "end": 2854
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2855,
    "end": 2856
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2856,
    "end": 2857
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2858,
    "end": 2865
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 2866,
    "end": 2871
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2871,
    "end": 2872
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 2872,
    "end": 2879
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2879,
    "end": 2880
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2880,
    "end": 2881
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2881,
    "end": 2882
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2882,
    "end": 2883
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2883,
    "end": 2884
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 2885,
    "end": 2890
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2890,
    "end": 2891
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2891,
    "end": 2895
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2895,
    "end": 2896
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2896,
    "end": 2897
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2898,
    "end": 2899
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2899,
    "end": 2900
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2901,
    "end": 2902
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2902,
    "end": 2903
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2904,
    "end": 2906
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2907,
    "end": 2908
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2908,
    "end": 2909
  },
  {
    "type": "Identifier",
    "value": "a14",
    "start": 3007,
    "end": 3010
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3010,
    "end": 3011
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3012,
    "end": 3015
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3016,
    "end": 3017
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3017,
    "end": 3018
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3018,
    "end": 3019
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3020,
    "end": 3021
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3021,
    "end": 3022
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3022,
    "end": 3023
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3023,
    "end": 3024
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3024,
    "end": 3025
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3026,
    "end": 3027
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3028,
    "end": 3029
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3029,
    "end": 3030
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3031,
    "end": 3032
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3032,
    "end": 3033
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3034,
    "end": 3035
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3035,
    "end": 3036
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3037,
    "end": 3038
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": ";",
    "start": 3046,
    "end": 3047
  },
  {
    "type": "Identifier",
    "value": "a15",
    "start": 3058,
    "end": 3061
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3061,
    "end": 3062
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3063,
    "end": 3066
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3067,
    "end": 3068
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3068,
    "end": 3069
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3069,
    "end": 3070
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3070,
    "end": 3071
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3071,
    "end": 3072
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3072,
    "end": 3073
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3074,
    "end": 3075
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3075,
    "end": 3076
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3077,
    "end": 3079
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3080,
    "end": 3081
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3081,
    "end": 3082
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3082,
    "end": 3083
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3083,
    "end": 3084
  },
  {
    "type": "Identifier",
    "value": "a16",
    "start": 3095,
    "end": 3098
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3098,
    "end": 3099
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3100,
    "end": 3103
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3104,
    "end": 3105
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3105,
    "end": 3106
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3107,
    "end": 3114
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 3115,
    "end": 3119
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3119,
    "end": 3120
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3120,
    "end": 3121
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3121,
    "end": 3122
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3122,
    "end": 3123
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3124,
    "end": 3125
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3125,
    "end": 3126
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3127,
    "end": 3129
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3130,
    "end": 3136
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3136,
    "end": 3137
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3137,
    "end": 3138
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3138,
    "end": 3139
  },
  {
    "type": "Identifier",
    "value": "a17",
    "start": 3150,
    "end": 3153
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3153,
    "end": 3154
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3155,
    "end": 3158
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3159,
    "end": 3160
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3160,
    "end": 3161
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3161,
    "end": 3162
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3162,
    "end": 3163
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3163,
    "end": 3164
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3164,
    "end": 3165
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3166,
    "end": 3169
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3170,
    "end": 3171
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3171,
    "end": 3172
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3172,
    "end": 3173
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3174,
    "end": 3175
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3175,
    "end": 3176
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3177,
    "end": 3179
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3180,
    "end": 3181
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3181,
    "end": 3182
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3183,
    "end": 3185
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3186,
    "end": 3187
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3187,
    "end": 3188
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3188,
    "end": 3189
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3189,
    "end": 3190
  },
  {
    "type": "Identifier",
    "value": "a18",
    "start": 3201,
    "end": 3204
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3204,
    "end": 3205
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3206,
    "end": 3209
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3210,
    "end": 3211
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3211,
    "end": 3212
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3212,
    "end": 3213
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3213,
    "end": 3214
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3214,
    "end": 3215
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3215,
    "end": 3216
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3217,
    "end": 3220
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3221,
    "end": 3222
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3222,
    "end": 3223
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3223,
    "end": 3224
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3225,
    "end": 3226
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3226,
    "end": 3227
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3228,
    "end": 3230
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3231,
    "end": 3232
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3232,
    "end": 3233
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3234,
    "end": 3236
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3237,
    "end": 3238
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3238,
    "end": 3239
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3239,
    "end": 3240
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3240,
    "end": 3241
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3291,
    "end": 3292
  }
]
```
