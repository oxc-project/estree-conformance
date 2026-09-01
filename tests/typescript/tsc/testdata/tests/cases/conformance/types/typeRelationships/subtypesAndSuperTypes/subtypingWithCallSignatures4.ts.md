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
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 290,
        "end": 294
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                      "start": 299,
                      "end": 300
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 299,
                    "end": 300
                  }
                ],
                "start": 298,
                "end": 301
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
                        "start": 305,
                        "end": 306
                      },
                      "typeArguments": null,
                      "start": 305,
                      "end": 306
                    },
                    "start": 303,
                    "end": 306
                  },
                  "start": 302,
                  "end": 306
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
                      "start": 311,
                      "end": 312
                    },
                    "typeArguments": null,
                    "start": 311,
                    "end": 312
                  },
                  "start": 311,
                  "end": 314
                },
                "start": 308,
                "end": 314
              },
              "start": 298,
              "end": 314
            },
            "start": 296,
            "end": 314
          },
          "start": 295,
          "end": 314
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 273,
      "end": 316
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 334,
        "end": 338
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 342,
              "end": 345
            },
            "start": 340,
            "end": 345
          },
          "start": 339,
          "end": 345
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 348,
          "end": 351
        },
        "start": 346,
        "end": 351
      },
      "body": null,
      "expression": false,
      "start": 317,
      "end": 352
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 371,
        "end": 375
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a2",
          "optional": false,
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
                      "start": 381,
                      "end": 382
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 381,
                    "end": 382
                  }
                ],
                "start": 380,
                "end": 383
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
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 393,
                    "end": 399
                  },
                  "start": 393,
                  "end": 401
                },
                "start": 390,
                "end": 401
              },
              "start": 380,
              "end": 401
            },
            "start": 378,
            "end": 401
          },
          "start": 376,
          "end": 401
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 354,
      "end": 403
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 421,
        "end": 425
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 429,
              "end": 432
            },
            "start": 427,
            "end": 432
          },
          "start": 426,
          "end": 432
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 435,
          "end": 438
        },
        "start": 433,
        "end": 438
      },
      "body": null,
      "expression": false,
      "start": 404,
      "end": 439
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 458,
        "end": 462
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a3",
          "optional": false,
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
                      "start": 468,
                      "end": 469
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 468,
                    "end": 469
                  }
                ],
                "start": 467,
                "end": 470
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
                        "start": 474,
                        "end": 475
                      },
                      "typeArguments": null,
                      "start": 474,
                      "end": 475
                    },
                    "start": 472,
                    "end": 475
                  },
                  "start": 471,
                  "end": 475
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 480,
                  "end": 484
                },
                "start": 477,
                "end": 484
              },
              "start": 467,
              "end": 484
            },
            "start": 465,
            "end": 484
          },
          "start": 463,
          "end": 484
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 441,
      "end": 486
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 504,
        "end": 508
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 512,
              "end": 515
            },
            "start": 510,
            "end": 515
          },
          "start": 509,
          "end": 515
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 518,
          "end": 521
        },
        "start": 516,
        "end": 521
      },
      "body": null,
      "expression": false,
      "start": 487,
      "end": 522
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 541,
        "end": 545
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a4",
          "optional": false,
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
                      "start": 551,
                      "end": 552
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 551,
                    "end": 552
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 554,
                      "end": 555
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 554,
                    "end": 555
                  }
                ],
                "start": 550,
                "end": 556
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
                        "start": 560,
                        "end": 561
                      },
                      "typeArguments": null,
                      "start": 560,
                      "end": 561
                    },
                    "start": 558,
                    "end": 561
                  },
                  "start": 557,
                  "end": 561
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
                        "start": 566,
                        "end": 567
                      },
                      "typeArguments": null,
                      "start": 566,
                      "end": 567
                    },
                    "start": 564,
                    "end": 567
                  },
                  "start": 563,
                  "end": 567
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 572,
                  "end": 578
                },
                "start": 569,
                "end": 578
              },
              "start": 550,
              "end": 578
            },
            "start": 548,
            "end": 578
          },
          "start": 546,
          "end": 578
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 524,
      "end": 580
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 598,
        "end": 602
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 606,
              "end": 609
            },
            "start": 604,
            "end": 609
          },
          "start": 603,
          "end": 609
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 612,
          "end": 615
        },
        "start": 610,
        "end": 615
      },
      "body": null,
      "expression": false,
      "start": 581,
      "end": 616
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 635,
        "end": 639
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a5",
          "optional": false,
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
                      "start": 645,
                      "end": 646
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 645,
                    "end": 646
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 648,
                      "end": 649
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 648,
                    "end": 649
                  }
                ],
                "start": 644,
                "end": 650
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
                                "start": 660,
                                "end": 661
                              },
                              "typeArguments": null,
                              "start": 660,
                              "end": 661
                            },
                            "start": 658,
                            "end": 661
                          },
                          "start": 655,
                          "end": 661
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
                            "start": 666,
                            "end": 667
                          },
                          "typeArguments": null,
                          "start": 666,
                          "end": 667
                        },
                        "start": 663,
                        "end": 667
                      },
                      "start": 654,
                      "end": 667
                    },
                    "start": 652,
                    "end": 667
                  },
                  "start": 651,
                  "end": 667
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
                    "start": 672,
                    "end": 673
                  },
                  "typeArguments": null,
                  "start": 672,
                  "end": 673
                },
                "start": 669,
                "end": 673
              },
              "start": 644,
              "end": 673
            },
            "start": 642,
            "end": 673
          },
          "start": 640,
          "end": 673
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 618,
      "end": 675
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 693,
        "end": 697
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 701,
              "end": 704
            },
            "start": 699,
            "end": 704
          },
          "start": 698,
          "end": 704
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 707,
          "end": 710
        },
        "start": 705,
        "end": 710
      },
      "body": null,
      "expression": false,
      "start": 676,
      "end": 711
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 730,
        "end": 734
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a6",
          "optional": false,
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
                      "start": 740,
                      "end": 741
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 750,
                        "end": 754
                      },
                      "typeArguments": null,
                      "start": 750,
                      "end": 754
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 740,
                    "end": 754
                  }
                ],
                "start": 739,
                "end": 755
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
                                "start": 765,
                                "end": 766
                              },
                              "typeArguments": null,
                              "start": 765,
                              "end": 766
                            },
                            "start": 763,
                            "end": 766
                          },
                          "start": 760,
                          "end": 766
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
                            "start": 771,
                            "end": 778
                          },
                          "typeArguments": null,
                          "start": 771,
                          "end": 778
                        },
                        "start": 768,
                        "end": 778
                      },
                      "start": 759,
                      "end": 778
                    },
                    "start": 757,
                    "end": 778
                  },
                  "start": 756,
                  "end": 778
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
                    "start": 783,
                    "end": 784
                  },
                  "typeArguments": null,
                  "start": 783,
                  "end": 784
                },
                "start": 780,
                "end": 784
              },
              "start": 739,
              "end": 784
            },
            "start": 737,
            "end": 784
          },
          "start": 735,
          "end": 784
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 713,
      "end": 786
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 804,
        "end": 808
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 812,
              "end": 815
            },
            "start": 810,
            "end": 815
          },
          "start": 809,
          "end": 815
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 818,
          "end": 821
        },
        "start": 816,
        "end": 821
      },
      "body": null,
      "expression": false,
      "start": 787,
      "end": 822
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 841,
        "end": 846
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a11",
          "optional": false,
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
                      "start": 853,
                      "end": 854
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 853,
                    "end": 854
                  }
                ],
                "start": 852,
                "end": 855
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
                            "start": 861,
                            "end": 864
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
                                "start": 866,
                                "end": 867
                              },
                              "typeArguments": null,
                              "start": 866,
                              "end": 867
                            },
                            "start": 864,
                            "end": 867
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 861,
                          "end": 867
                        }
                      ],
                      "start": 859,
                      "end": 869
                    },
                    "start": 857,
                    "end": 869
                  },
                  "start": 856,
                  "end": 869
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
                            "start": 876,
                            "end": 879
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
                                "start": 881,
                                "end": 882
                              },
                              "typeArguments": null,
                              "start": 881,
                              "end": 882
                            },
                            "start": 879,
                            "end": 882
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 876,
                          "end": 883
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
                            "start": 884,
                            "end": 887
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
                                "start": 889,
                                "end": 890
                              },
                              "typeArguments": null,
                              "start": 889,
                              "end": 890
                            },
                            "start": 887,
                            "end": 890
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 884,
                          "end": 890
                        }
                      ],
                      "start": 874,
                      "end": 892
                    },
                    "start": 872,
                    "end": 892
                  },
                  "start": 871,
                  "end": 892
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
                    "start": 897,
                    "end": 901
                  },
                  "typeArguments": null,
                  "start": 897,
                  "end": 901
                },
                "start": 894,
                "end": 901
              },
              "start": 852,
              "end": 901
            },
            "start": 850,
            "end": 901
          },
          "start": 847,
          "end": 901
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 824,
      "end": 903
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 921,
        "end": 926
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 930,
              "end": 933
            },
            "start": 928,
            "end": 933
          },
          "start": 927,
          "end": 933
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 936,
          "end": 939
        },
        "start": 934,
        "end": 939
      },
      "body": null,
      "expression": false,
      "start": 904,
      "end": 940
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null,
        "start": 959,
        "end": 964
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a15",
          "optional": false,
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
                      "start": 971,
                      "end": 972
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 971,
                    "end": 972
                  }
                ],
                "start": 970,
                "end": 973
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
                            "start": 979,
                            "end": 980
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
                                "start": 982,
                                "end": 983
                              },
                              "typeArguments": null,
                              "start": 982,
                              "end": 983
                            },
                            "start": 980,
                            "end": 983
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 979,
                          "end": 984
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
                            "start": 985,
                            "end": 986
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
                                "start": 988,
                                "end": 989
                              },
                              "typeArguments": null,
                              "start": 988,
                              "end": 989
                            },
                            "start": 986,
                            "end": 989
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 985,
                          "end": 989
                        }
                      ],
                      "start": 977,
                      "end": 991
                    },
                    "start": 975,
                    "end": 991
                  },
                  "start": 974,
                  "end": 991
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
                      "start": 996,
                      "end": 997
                    },
                    "typeArguments": null,
                    "start": 996,
                    "end": 997
                  },
                  "start": 996,
                  "end": 999
                },
                "start": 993,
                "end": 999
              },
              "start": 970,
              "end": 999
            },
            "start": 968,
            "end": 999
          },
          "start": 965,
          "end": 999
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 942,
      "end": 1001
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null,
        "start": 1019,
        "end": 1024
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 1028,
              "end": 1031
            },
            "start": 1026,
            "end": 1031
          },
          "start": 1025,
          "end": 1031
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1034,
          "end": 1037
        },
        "start": 1032,
        "end": 1037
      },
      "body": null,
      "expression": false,
      "start": 1002,
      "end": 1038
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo16",
        "optional": false,
        "typeAnnotation": null,
        "start": 1057,
        "end": 1062
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a16",
          "optional": false,
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
                      "start": 1069,
                      "end": 1070
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1079,
                        "end": 1083
                      },
                      "typeArguments": null,
                      "start": 1079,
                      "end": 1083
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1069,
                    "end": 1083
                  }
                ],
                "start": 1068,
                "end": 1084
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
                            "start": 1090,
                            "end": 1091
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
                                "start": 1093,
                                "end": 1094
                              },
                              "typeArguments": null,
                              "start": 1093,
                              "end": 1094
                            },
                            "start": 1091,
                            "end": 1094
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 1090,
                          "end": 1095
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
                            "start": 1096,
                            "end": 1097
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
                                "start": 1099,
                                "end": 1100
                              },
                              "typeArguments": null,
                              "start": 1099,
                              "end": 1100
                            },
                            "start": 1097,
                            "end": 1100
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 1096,
                          "end": 1100
                        }
                      ],
                      "start": 1088,
                      "end": 1102
                    },
                    "start": 1086,
                    "end": 1102
                  },
                  "start": 1085,
                  "end": 1102
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
                      "start": 1107,
                      "end": 1108
                    },
                    "typeArguments": null,
                    "start": 1107,
                    "end": 1108
                  },
                  "start": 1107,
                  "end": 1110
                },
                "start": 1104,
                "end": 1110
              },
              "start": 1068,
              "end": 1110
            },
            "start": 1066,
            "end": 1110
          },
          "start": 1063,
          "end": 1110
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1040,
      "end": 1112
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo16",
        "optional": false,
        "typeAnnotation": null,
        "start": 1130,
        "end": 1135
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 1139,
              "end": 1142
            },
            "start": 1137,
            "end": 1142
          },
          "start": 1136,
          "end": 1142
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1145,
          "end": 1148
        },
        "start": 1143,
        "end": 1148
      },
      "body": null,
      "expression": false,
      "start": 1113,
      "end": 1149
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo17",
        "optional": false,
        "typeAnnotation": null,
        "start": 1168,
        "end": 1173
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
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
                          "start": 1186,
                          "end": 1187
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Derived",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1196,
                            "end": 1203
                          },
                          "typeArguments": null,
                          "start": 1196,
                          "end": 1203
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 1186,
                        "end": 1203
                      }
                    ],
                    "start": 1185,
                    "end": 1204
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
                                    "start": 1212,
                                    "end": 1213
                                  },
                                  "typeArguments": null,
                                  "start": 1212,
                                  "end": 1213
                                },
                                "start": 1210,
                                "end": 1213
                              },
                              "start": 1209,
                              "end": 1213
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
                                "start": 1218,
                                "end": 1219
                              },
                              "typeArguments": null,
                              "start": 1218,
                              "end": 1219
                            },
                            "start": 1215,
                            "end": 1219
                          },
                          "start": 1208,
                          "end": 1219
                        },
                        "start": 1206,
                        "end": 1219
                      },
                      "start": 1205,
                      "end": 1219
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
                          "start": 1222,
                          "end": 1223
                        },
                        "typeArguments": null,
                        "start": 1222,
                        "end": 1223
                      },
                      "start": 1222,
                      "end": 1225
                    },
                    "start": 1220,
                    "end": 1225
                  },
                  "start": 1185,
                  "end": 1226
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
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1232,
                          "end": 1233
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Base",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1242,
                            "end": 1246
                          },
                          "typeArguments": null,
                          "start": 1242,
                          "end": 1246
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 1232,
                        "end": 1246
                      }
                    ],
                    "start": 1231,
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
                                    "start": 1255,
                                    "end": 1256
                                  },
                                  "typeArguments": null,
                                  "start": 1255,
                                  "end": 1256
                                },
                                "start": 1253,
                                "end": 1256
                              },
                              "start": 1252,
                              "end": 1256
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
                                "start": 1261,
                                "end": 1262
                              },
                              "typeArguments": null,
                              "start": 1261,
                              "end": 1262
                            },
                            "start": 1258,
                            "end": 1262
                          },
                          "start": 1251,
                          "end": 1262
                        },
                        "start": 1249,
                        "end": 1262
                      },
                      "start": 1248,
                      "end": 1262
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
                          "start": 1265,
                          "end": 1266
                        },
                        "typeArguments": null,
                        "start": 1265,
                        "end": 1266
                      },
                      "start": 1265,
                      "end": 1268
                    },
                    "start": 1263,
                    "end": 1268
                  },
                  "start": 1231,
                  "end": 1269
                }
              ],
              "start": 1179,
              "end": 1279
            },
            "start": 1177,
            "end": 1279
          },
          "start": 1174,
          "end": 1279
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1151,
      "end": 1281
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo17",
        "optional": false,
        "typeAnnotation": null,
        "start": 1299,
        "end": 1304
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 1308,
              "end": 1311
            },
            "start": 1306,
            "end": 1311
          },
          "start": 1305,
          "end": 1311
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1314,
          "end": 1317
        },
        "start": 1312,
        "end": 1317
      },
      "body": null,
      "expression": false,
      "start": 1282,
      "end": 1318
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo18",
        "optional": false,
        "typeAnnotation": null,
        "start": 1337,
        "end": 1342
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
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
                                      "start": 1369,
                                      "end": 1370
                                    },
                                    "constraint": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Derived",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1379,
                                        "end": 1386
                                      },
                                      "typeArguments": null,
                                      "start": 1379,
                                      "end": 1386
                                    },
                                    "default": null,
                                    "in": false,
                                    "out": false,
                                    "const": false,
                                    "start": 1369,
                                    "end": 1386
                                  }
                                ],
                                "start": 1368,
                                "end": 1387
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
                                        "start": 1391,
                                        "end": 1392
                                      },
                                      "typeArguments": null,
                                      "start": 1391,
                                      "end": 1392
                                    },
                                    "start": 1389,
                                    "end": 1392
                                  },
                                  "start": 1388,
                                  "end": 1392
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
                                    "start": 1395,
                                    "end": 1396
                                  },
                                  "typeArguments": null,
                                  "start": 1395,
                                  "end": 1396
                                },
                                "start": 1393,
                                "end": 1396
                              },
                              "start": 1368,
                              "end": 1397
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
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1407,
                                      "end": 1408
                                    },
                                    "constraint": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Base",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1417,
                                        "end": 1421
                                      },
                                      "typeArguments": null,
                                      "start": 1417,
                                      "end": 1421
                                    },
                                    "default": null,
                                    "in": false,
                                    "out": false,
                                    "const": false,
                                    "start": 1407,
                                    "end": 1421
                                  }
                                ],
                                "start": 1406,
                                "end": 1422
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
                                        "start": 1426,
                                        "end": 1427
                                      },
                                      "typeArguments": null,
                                      "start": 1426,
                                      "end": 1427
                                    },
                                    "start": 1424,
                                    "end": 1427
                                  },
                                  "start": 1423,
                                  "end": 1427
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
                                    "start": 1430,
                                    "end": 1431
                                  },
                                  "typeArguments": null,
                                  "start": 1430,
                                  "end": 1431
                                },
                                "start": 1428,
                                "end": 1431
                              },
                              "start": 1406,
                              "end": 1432
                            }
                          ],
                          "start": 1358,
                          "end": 1438
                        },
                        "start": 1356,
                        "end": 1438
                      },
                      "start": 1355,
                      "end": 1438
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 1441,
                        "end": 1444
                      },
                      "start": 1441,
                      "end": 1446
                    },
                    "start": 1439,
                    "end": 1446
                  },
                  "start": 1354,
                  "end": 1447
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
                                      "start": 1467,
                                      "end": 1468
                                    },
                                    "constraint": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Derived2",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1477,
                                        "end": 1485
                                      },
                                      "typeArguments": null,
                                      "start": 1477,
                                      "end": 1485
                                    },
                                    "default": null,
                                    "in": false,
                                    "out": false,
                                    "const": false,
                                    "start": 1467,
                                    "end": 1485
                                  }
                                ],
                                "start": 1466,
                                "end": 1486
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
                                        "start": 1490,
                                        "end": 1491
                                      },
                                      "typeArguments": null,
                                      "start": 1490,
                                      "end": 1491
                                    },
                                    "start": 1488,
                                    "end": 1491
                                  },
                                  "start": 1487,
                                  "end": 1491
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
                                    "start": 1494,
                                    "end": 1495
                                  },
                                  "typeArguments": null,
                                  "start": 1494,
                                  "end": 1495
                                },
                                "start": 1492,
                                "end": 1495
                              },
                              "start": 1466,
                              "end": 1496
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
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1506,
                                      "end": 1507
                                    },
                                    "constraint": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Base",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1516,
                                        "end": 1520
                                      },
                                      "typeArguments": null,
                                      "start": 1516,
                                      "end": 1520
                                    },
                                    "default": null,
                                    "in": false,
                                    "out": false,
                                    "const": false,
                                    "start": 1506,
                                    "end": 1520
                                  }
                                ],
                                "start": 1505,
                                "end": 1521
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
                                        "start": 1525,
                                        "end": 1526
                                      },
                                      "typeArguments": null,
                                      "start": 1525,
                                      "end": 1526
                                    },
                                    "start": 1523,
                                    "end": 1526
                                  },
                                  "start": 1522,
                                  "end": 1526
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
                                    "start": 1529,
                                    "end": 1530
                                  },
                                  "typeArguments": null,
                                  "start": 1529,
                                  "end": 1530
                                },
                                "start": 1527,
                                "end": 1530
                              },
                              "start": 1505,
                              "end": 1531
                            }
                          ],
                          "start": 1456,
                          "end": 1537
                        },
                        "start": 1454,
                        "end": 1537
                      },
                      "start": 1453,
                      "end": 1537
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 1540,
                        "end": 1543
                      },
                      "start": 1540,
                      "end": 1545
                    },
                    "start": 1538,
                    "end": 1545
                  },
                  "start": 1452,
                  "end": 1546
                }
              ],
              "start": 1348,
              "end": 1548
            },
            "start": 1346,
            "end": 1548
          },
          "start": 1343,
          "end": 1548
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1320,
      "end": 1550
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo18",
        "optional": false,
        "typeAnnotation": null,
        "start": 1568,
        "end": 1573
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 1577,
              "end": 1580
            },
            "start": 1575,
            "end": 1580
          },
          "start": 1574,
          "end": 1580
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1583,
          "end": 1586
        },
        "start": 1581,
        "end": 1586
      },
      "body": null,
      "expression": false,
      "start": 1551,
      "end": 1587
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
            "name": "r1arg",
            "optional": false,
            "typeAnnotation": null,
            "start": 1593,
            "end": 1598
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
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
                    "start": 1602,
                    "end": 1603
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1602,
                  "end": 1603
                }
              ],
              "start": 1601,
              "end": 1604
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
                      "start": 1608,
                      "end": 1609
                    },
                    "typeArguments": null,
                    "start": 1608,
                    "end": 1609
                  },
                  "start": 1606,
                  "end": 1609
                },
                "start": 1605,
                "end": 1609
              }
            ],
            "returnType": null,
            "body": {
              "type": "TSTypeAssertion",
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
                    "start": 1615,
                    "end": 1616
                  },
                  "typeArguments": null,
                  "start": 1615,
                  "end": 1616
                },
                "start": 1615,
                "end": 1618
              },
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 1619,
                "end": 1623
              },
              "start": 1614,
              "end": 1623
            },
            "id": null,
            "generator": false,
            "start": 1601,
            "end": 1623
          },
          "definite": false,
          "start": 1593,
          "end": 1623
        }
      ],
      "declare": false,
      "start": 1589,
      "end": 1624
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
            "name": "r1arg2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1629,
            "end": 1635
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
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
                    "start": 1639,
                    "end": 1640
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1639,
                  "end": 1640
                }
              ],
              "start": 1638,
              "end": 1641
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
                      "start": 1645,
                      "end": 1646
                    },
                    "typeArguments": null,
                    "start": 1645,
                    "end": 1646
                  },
                  "start": 1643,
                  "end": 1646
                },
                "start": 1642,
                "end": 1646
              }
            ],
            "returnType": null,
            "body": {
              "type": "TSTypeAssertion",
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
                    "start": 1652,
                    "end": 1653
                  },
                  "typeArguments": null,
                  "start": 1652,
                  "end": 1653
                },
                "start": 1652,
                "end": 1655
              },
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 1656,
                "end": 1660
              },
              "start": 1651,
              "end": 1660
            },
            "id": null,
            "generator": false,
            "start": 1638,
            "end": 1660
          },
          "definite": false,
          "start": 1629,
          "end": 1660
        }
      ],
      "declare": false,
      "start": 1625,
      "end": 1661
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
            "name": "r1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1666,
            "end": 1668
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1671,
              "end": 1675
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r1arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 1676,
                "end": 1681
              }
            ],
            "optional": false,
            "start": 1671,
            "end": 1682
          },
          "definite": false,
          "start": 1666,
          "end": 1682
        }
      ],
      "declare": false,
      "start": 1662,
      "end": 1683
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
            "name": "r1a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1688,
            "end": 1691
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r1arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 1695,
                "end": 1700
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r1arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1702,
                "end": 1708
              }
            ],
            "start": 1694,
            "end": 1709
          },
          "definite": false,
          "start": 1688,
          "end": 1709
        }
      ],
      "declare": false,
      "start": 1684,
      "end": 1710
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
            "name": "r1b",
            "optional": false,
            "typeAnnotation": null,
            "start": 1715,
            "end": 1718
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r1arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1722,
                "end": 1728
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r1arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 1730,
                "end": 1735
              }
            ],
            "start": 1721,
            "end": 1736
          },
          "definite": false,
          "start": 1715,
          "end": 1736
        }
      ],
      "declare": false,
      "start": 1711,
      "end": 1737
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
            "name": "r2arg",
            "optional": false,
            "typeAnnotation": null,
            "start": 1743,
            "end": 1748
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
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
                    "start": 1752,
                    "end": 1753
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1752,
                  "end": 1753
                }
              ],
              "start": 1751,
              "end": 1754
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
                      "start": 1758,
                      "end": 1759
                    },
                    "typeArguments": null,
                    "start": 1758,
                    "end": 1759
                  },
                  "start": 1756,
                  "end": 1759
                },
                "start": 1755,
                "end": 1759
              }
            ],
            "returnType": null,
            "body": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 1765,
                  "end": 1767
                }
              ],
              "start": 1764,
              "end": 1768
            },
            "id": null,
            "generator": false,
            "start": 1751,
            "end": 1768
          },
          "definite": false,
          "start": 1743,
          "end": 1768
        }
      ],
      "declare": false,
      "start": 1739,
      "end": 1769
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
            "name": "r2arg2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1774,
            "end": 1780
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
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
                    "start": 1784,
                    "end": 1785
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1784,
                  "end": 1785
                }
              ],
              "start": 1783,
              "end": 1786
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
                      "start": 1790,
                      "end": 1791
                    },
                    "typeArguments": null,
                    "start": 1790,
                    "end": 1791
                  },
                  "start": 1788,
                  "end": 1791
                },
                "start": 1787,
                "end": 1791
              }
            ],
            "returnType": null,
            "body": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 1797,
                  "end": 1799
                }
              ],
              "start": 1796,
              "end": 1800
            },
            "id": null,
            "generator": false,
            "start": 1783,
            "end": 1800
          },
          "definite": false,
          "start": 1774,
          "end": 1800
        }
      ],
      "declare": false,
      "start": 1770,
      "end": 1801
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
            "name": "r2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1806,
            "end": 1808
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1811,
              "end": 1815
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r2arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 1816,
                "end": 1821
              }
            ],
            "optional": false,
            "start": 1811,
            "end": 1822
          },
          "definite": false,
          "start": 1806,
          "end": 1822
        }
      ],
      "declare": false,
      "start": 1802,
      "end": 1823
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
            "name": "r2a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1828,
            "end": 1831
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r2arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 1835,
                "end": 1840
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r2arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1842,
                "end": 1848
              }
            ],
            "start": 1834,
            "end": 1849
          },
          "definite": false,
          "start": 1828,
          "end": 1849
        }
      ],
      "declare": false,
      "start": 1824,
      "end": 1850
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
            "name": "r2b",
            "optional": false,
            "typeAnnotation": null,
            "start": 1855,
            "end": 1858
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r2arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1862,
                "end": 1868
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r2arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 1870,
                "end": 1875
              }
            ],
            "start": 1861,
            "end": 1876
          },
          "definite": false,
          "start": 1855,
          "end": 1876
        }
      ],
      "declare": false,
      "start": 1851,
      "end": 1877
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
            "name": "r3arg",
            "optional": false,
            "typeAnnotation": null,
            "start": 1883,
            "end": 1888
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
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
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1898,
                      "end": 1899
                    },
                    "typeArguments": null,
                    "start": 1898,
                    "end": 1899
                  },
                  "start": 1896,
                  "end": 1899
                },
                "start": 1895,
                "end": 1899
              }
            ],
            "returnType": null,
            "body": {
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1905,
                  "end": 1906
                },
                "typeArguments": null,
                "start": 1905,
                "end": 1906
              },
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 1907,
                "end": 1911
              },
              "start": 1904,
              "end": 1911
            },
            "id": null,
            "generator": false,
            "start": 1891,
            "end": 1911
          },
          "definite": false,
          "start": 1883,
          "end": 1911
        }
      ],
      "declare": false,
      "start": 1879,
      "end": 1912
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
            "name": "r3arg2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1917,
            "end": 1923
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
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
                    "start": 1927,
                    "end": 1928
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1927,
                  "end": 1928
                }
              ],
              "start": 1926,
              "end": 1929
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
                      "start": 1933,
                      "end": 1934
                    },
                    "typeArguments": null,
                    "start": 1933,
                    "end": 1934
                  },
                  "start": 1931,
                  "end": 1934
                },
                "start": 1930,
                "end": 1934
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 1939,
              "end": 1942
            },
            "id": null,
            "generator": false,
            "start": 1926,
            "end": 1942
          },
          "definite": false,
          "start": 1917,
          "end": 1942
        }
      ],
      "declare": false,
      "start": 1913,
      "end": 1943
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1948,
            "end": 1950
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1953,
              "end": 1957
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r3arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 1958,
                "end": 1963
              }
            ],
            "optional": false,
            "start": 1953,
            "end": 1964
          },
          "definite": false,
          "start": 1948,
          "end": 1964
        }
      ],
      "declare": false,
      "start": 1944,
      "end": 1965
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
            "name": "r3a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1970,
            "end": 1973
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r3arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 1977,
                "end": 1982
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r3arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1984,
                "end": 1990
              }
            ],
            "start": 1976,
            "end": 1991
          },
          "definite": false,
          "start": 1970,
          "end": 1991
        }
      ],
      "declare": false,
      "start": 1966,
      "end": 1992
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
            "name": "r3b",
            "optional": false,
            "typeAnnotation": null,
            "start": 1997,
            "end": 2000
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r3arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2004,
                "end": 2010
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r3arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 2012,
                "end": 2017
              }
            ],
            "start": 2003,
            "end": 2018
          },
          "definite": false,
          "start": 1997,
          "end": 2018
        }
      ],
      "declare": false,
      "start": 1993,
      "end": 2019
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
            "name": "r4arg",
            "optional": false,
            "typeAnnotation": null,
            "start": 2025,
            "end": 2030
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
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
                    "start": 2034,
                    "end": 2035
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2034,
                  "end": 2035
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2037,
                    "end": 2038
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2037,
                  "end": 2038
                }
              ],
              "start": 2033,
              "end": 2039
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
                      "start": 2043,
                      "end": 2044
                    },
                    "typeArguments": null,
                    "start": 2043,
                    "end": 2044
                  },
                  "start": 2041,
                  "end": 2044
                },
                "start": 2040,
                "end": 2044
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
                      "start": 2049,
                      "end": 2050
                    },
                    "typeArguments": null,
                    "start": 2049,
                    "end": 2050
                  },
                  "start": 2047,
                  "end": 2050
                },
                "start": 2046,
                "end": 2050
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 2055,
              "end": 2057
            },
            "id": null,
            "generator": false,
            "start": 2033,
            "end": 2057
          },
          "definite": false,
          "start": 2025,
          "end": 2057
        }
      ],
      "declare": false,
      "start": 2021,
      "end": 2058
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
            "name": "r4arg2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2063,
            "end": 2069
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
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
                    "start": 2073,
                    "end": 2074
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2073,
                  "end": 2074
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2076,
                    "end": 2077
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2076,
                  "end": 2077
                }
              ],
              "start": 2072,
              "end": 2078
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
                      "start": 2082,
                      "end": 2083
                    },
                    "typeArguments": null,
                    "start": 2082,
                    "end": 2083
                  },
                  "start": 2080,
                  "end": 2083
                },
                "start": 2079,
                "end": 2083
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
                      "start": 2088,
                      "end": 2089
                    },
                    "typeArguments": null,
                    "start": 2088,
                    "end": 2089
                  },
                  "start": 2086,
                  "end": 2089
                },
                "start": 2085,
                "end": 2089
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 2094,
              "end": 2096
            },
            "id": null,
            "generator": false,
            "start": 2072,
            "end": 2096
          },
          "definite": false,
          "start": 2063,
          "end": 2096
        }
      ],
      "declare": false,
      "start": 2059,
      "end": 2097
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
            "name": "r4",
            "optional": false,
            "typeAnnotation": null,
            "start": 2102,
            "end": 2104
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo4",
              "optional": false,
              "typeAnnotation": null,
              "start": 2107,
              "end": 2111
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r4arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 2112,
                "end": 2117
              }
            ],
            "optional": false,
            "start": 2107,
            "end": 2118
          },
          "definite": false,
          "start": 2102,
          "end": 2118
        }
      ],
      "declare": false,
      "start": 2098,
      "end": 2119
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
            "name": "r4a",
            "optional": false,
            "typeAnnotation": null,
            "start": 2124,
            "end": 2127
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r4arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 2131,
                "end": 2136
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r4arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2138,
                "end": 2144
              }
            ],
            "start": 2130,
            "end": 2145
          },
          "definite": false,
          "start": 2124,
          "end": 2145
        }
      ],
      "declare": false,
      "start": 2120,
      "end": 2146
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
            "name": "r4b",
            "optional": false,
            "typeAnnotation": null,
            "start": 2151,
            "end": 2154
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r4arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2158,
                "end": 2164
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r4arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 2166,
                "end": 2171
              }
            ],
            "start": 2157,
            "end": 2172
          },
          "definite": false,
          "start": 2151,
          "end": 2172
        }
      ],
      "declare": false,
      "start": 2147,
      "end": 2173
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
            "name": "r5arg",
            "optional": false,
            "typeAnnotation": null,
            "start": 2179,
            "end": 2184
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
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
                    "start": 2188,
                    "end": 2189
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2188,
                  "end": 2189
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2191,
                    "end": 2192
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2191,
                  "end": 2192
                }
              ],
              "start": 2187,
              "end": 2193
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
                              "start": 2203,
                              "end": 2204
                            },
                            "typeArguments": null,
                            "start": 2203,
                            "end": 2204
                          },
                          "start": 2201,
                          "end": 2204
                        },
                        "start": 2198,
                        "end": 2204
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
                          "start": 2209,
                          "end": 2210
                        },
                        "typeArguments": null,
                        "start": 2209,
                        "end": 2210
                      },
                      "start": 2206,
                      "end": 2210
                    },
                    "start": 2197,
                    "end": 2210
                  },
                  "start": 2195,
                  "end": 2210
                },
                "start": 2194,
                "end": 2210
              }
            ],
            "returnType": null,
            "body": {
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2216,
                  "end": 2217
                },
                "typeArguments": null,
                "start": 2216,
                "end": 2217
              },
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 2218,
                "end": 2222
              },
              "start": 2215,
              "end": 2222
            },
            "id": null,
            "generator": false,
            "start": 2187,
            "end": 2222
          },
          "definite": false,
          "start": 2179,
          "end": 2222
        }
      ],
      "declare": false,
      "start": 2175,
      "end": 2223
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
            "name": "r5arg2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2228,
            "end": 2234
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
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
                    "start": 2238,
                    "end": 2239
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2238,
                  "end": 2239
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2241,
                    "end": 2242
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2241,
                  "end": 2242
                }
              ],
              "start": 2237,
              "end": 2243
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
                              "start": 2253,
                              "end": 2254
                            },
                            "typeArguments": null,
                            "start": 2253,
                            "end": 2254
                          },
                          "start": 2251,
                          "end": 2254
                        },
                        "start": 2248,
                        "end": 2254
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
                          "start": 2259,
                          "end": 2260
                        },
                        "typeArguments": null,
                        "start": 2259,
                        "end": 2260
                      },
                      "start": 2256,
                      "end": 2260
                    },
                    "start": 2247,
                    "end": 2260
                  },
                  "start": 2245,
                  "end": 2260
                },
                "start": 2244,
                "end": 2260
              }
            ],
            "returnType": null,
            "body": {
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2266,
                  "end": 2267
                },
                "typeArguments": null,
                "start": 2266,
                "end": 2267
              },
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 2268,
                "end": 2272
              },
              "start": 2265,
              "end": 2272
            },
            "id": null,
            "generator": false,
            "start": 2237,
            "end": 2272
          },
          "definite": false,
          "start": 2228,
          "end": 2272
        }
      ],
      "declare": false,
      "start": 2224,
      "end": 2273
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
            "name": "r5",
            "optional": false,
            "typeAnnotation": null,
            "start": 2278,
            "end": 2280
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo5",
              "optional": false,
              "typeAnnotation": null,
              "start": 2283,
              "end": 2287
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r5arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 2288,
                "end": 2293
              }
            ],
            "optional": false,
            "start": 2283,
            "end": 2294
          },
          "definite": false,
          "start": 2278,
          "end": 2294
        }
      ],
      "declare": false,
      "start": 2274,
      "end": 2295
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
            "name": "r5a",
            "optional": false,
            "typeAnnotation": null,
            "start": 2300,
            "end": 2303
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r5arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 2307,
                "end": 2312
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r5arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2314,
                "end": 2320
              }
            ],
            "start": 2306,
            "end": 2321
          },
          "definite": false,
          "start": 2300,
          "end": 2321
        }
      ],
      "declare": false,
      "start": 2296,
      "end": 2322
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
            "name": "r5b",
            "optional": false,
            "typeAnnotation": null,
            "start": 2327,
            "end": 2330
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r5arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2334,
                "end": 2340
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r5arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 2342,
                "end": 2347
              }
            ],
            "start": 2333,
            "end": 2348
          },
          "definite": false,
          "start": 2327,
          "end": 2348
        }
      ],
      "declare": false,
      "start": 2323,
      "end": 2349
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
            "name": "r6arg",
            "optional": false,
            "typeAnnotation": null,
            "start": 2355,
            "end": 2360
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
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
                    "start": 2364,
                    "end": 2365
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2374,
                      "end": 2378
                    },
                    "typeArguments": null,
                    "start": 2374,
                    "end": 2378
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2364,
                  "end": 2378
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2380,
                    "end": 2381
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Derived",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2390,
                      "end": 2397
                    },
                    "typeArguments": null,
                    "start": 2390,
                    "end": 2397
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2380,
                  "end": 2397
                }
              ],
              "start": 2363,
              "end": 2398
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
                              "start": 2408,
                              "end": 2409
                            },
                            "typeArguments": null,
                            "start": 2408,
                            "end": 2409
                          },
                          "start": 2406,
                          "end": 2409
                        },
                        "start": 2403,
                        "end": 2409
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
                          "start": 2414,
                          "end": 2415
                        },
                        "typeArguments": null,
                        "start": 2414,
                        "end": 2415
                      },
                      "start": 2411,
                      "end": 2415
                    },
                    "start": 2402,
                    "end": 2415
                  },
                  "start": 2400,
                  "end": 2415
                },
                "start": 2399,
                "end": 2415
              }
            ],
            "returnType": null,
            "body": {
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2421,
                  "end": 2422
                },
                "typeArguments": null,
                "start": 2421,
                "end": 2422
              },
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 2423,
                "end": 2427
              },
              "start": 2420,
              "end": 2427
            },
            "id": null,
            "generator": false,
            "start": 2363,
            "end": 2427
          },
          "definite": false,
          "start": 2355,
          "end": 2427
        }
      ],
      "declare": false,
      "start": 2351,
      "end": 2428
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
            "name": "r6arg2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2433,
            "end": 2439
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
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
                    "start": 2443,
                    "end": 2444
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2453,
                      "end": 2457
                    },
                    "typeArguments": null,
                    "start": 2453,
                    "end": 2457
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2443,
                  "end": 2457
                }
              ],
              "start": 2442,
              "end": 2458
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
                              "start": 2468,
                              "end": 2469
                            },
                            "typeArguments": null,
                            "start": 2468,
                            "end": 2469
                          },
                          "start": 2466,
                          "end": 2469
                        },
                        "start": 2463,
                        "end": 2469
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
                          "start": 2474,
                          "end": 2481
                        },
                        "typeArguments": null,
                        "start": 2474,
                        "end": 2481
                      },
                      "start": 2471,
                      "end": 2481
                    },
                    "start": 2462,
                    "end": 2481
                  },
                  "start": 2460,
                  "end": 2481
                },
                "start": 2459,
                "end": 2481
              }
            ],
            "returnType": null,
            "body": {
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2487,
                  "end": 2488
                },
                "typeArguments": null,
                "start": 2487,
                "end": 2488
              },
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 2489,
                "end": 2493
              },
              "start": 2486,
              "end": 2493
            },
            "id": null,
            "generator": false,
            "start": 2442,
            "end": 2493
          },
          "definite": false,
          "start": 2433,
          "end": 2493
        }
      ],
      "declare": false,
      "start": 2429,
      "end": 2494
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
            "name": "r6",
            "optional": false,
            "typeAnnotation": null,
            "start": 2499,
            "end": 2501
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo6",
              "optional": false,
              "typeAnnotation": null,
              "start": 2504,
              "end": 2508
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r6arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 2509,
                "end": 2514
              }
            ],
            "optional": false,
            "start": 2504,
            "end": 2515
          },
          "definite": false,
          "start": 2499,
          "end": 2515
        }
      ],
      "declare": false,
      "start": 2495,
      "end": 2516
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
            "name": "r6a",
            "optional": false,
            "typeAnnotation": null,
            "start": 2521,
            "end": 2524
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r6arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 2528,
                "end": 2533
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r6arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2535,
                "end": 2541
              }
            ],
            "start": 2527,
            "end": 2542
          },
          "definite": false,
          "start": 2521,
          "end": 2542
        }
      ],
      "declare": false,
      "start": 2517,
      "end": 2543
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
            "name": "r6b",
            "optional": false,
            "typeAnnotation": null,
            "start": 2548,
            "end": 2551
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r6arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2555,
                "end": 2561
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r6arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 2563,
                "end": 2568
              }
            ],
            "start": 2554,
            "end": 2569
          },
          "definite": false,
          "start": 2548,
          "end": 2569
        }
      ],
      "declare": false,
      "start": 2544,
      "end": 2570
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
            "name": "r11arg",
            "optional": false,
            "typeAnnotation": null,
            "start": 2576,
            "end": 2582
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
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
                    "start": 2586,
                    "end": 2587
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2586,
                  "end": 2587
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2589,
                    "end": 2590
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2589,
                  "end": 2590
                }
              ],
              "start": 2585,
              "end": 2591
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
                          "start": 2597,
                          "end": 2600
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
                              "start": 2602,
                              "end": 2603
                            },
                            "typeArguments": null,
                            "start": 2602,
                            "end": 2603
                          },
                          "start": 2600,
                          "end": 2603
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 2597,
                        "end": 2603
                      }
                    ],
                    "start": 2595,
                    "end": 2605
                  },
                  "start": 2593,
                  "end": 2605
                },
                "start": 2592,
                "end": 2605
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
                          "start": 2612,
                          "end": 2615
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
                              "start": 2617,
                              "end": 2618
                            },
                            "typeArguments": null,
                            "start": 2617,
                            "end": 2618
                          },
                          "start": 2615,
                          "end": 2618
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 2612,
                        "end": 2619
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
                          "start": 2620,
                          "end": 2623
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
                              "start": 2625,
                              "end": 2626
                            },
                            "typeArguments": null,
                            "start": 2625,
                            "end": 2626
                          },
                          "start": 2623,
                          "end": 2626
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 2620,
                        "end": 2626
                      }
                    ],
                    "start": 2610,
                    "end": 2628
                  },
                  "start": 2608,
                  "end": 2628
                },
                "start": 2607,
                "end": 2628
              }
            ],
            "returnType": null,
            "body": {
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2634,
                  "end": 2638
                },
                "typeArguments": null,
                "start": 2634,
                "end": 2638
              },
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 2639,
                "end": 2643
              },
              "start": 2633,
              "end": 2643
            },
            "id": null,
            "generator": false,
            "start": 2585,
            "end": 2643
          },
          "definite": false,
          "start": 2576,
          "end": 2643
        }
      ],
      "declare": false,
      "start": 2572,
      "end": 2644
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
            "name": "r11arg2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2649,
            "end": 2656
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
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
                    "start": 2660,
                    "end": 2661
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2660,
                  "end": 2661
                }
              ],
              "start": 2659,
              "end": 2662
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
                          "start": 2668,
                          "end": 2671
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
                              "start": 2673,
                              "end": 2674
                            },
                            "typeArguments": null,
                            "start": 2673,
                            "end": 2674
                          },
                          "start": 2671,
                          "end": 2674
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 2668,
                        "end": 2674
                      }
                    ],
                    "start": 2666,
                    "end": 2676
                  },
                  "start": 2664,
                  "end": 2676
                },
                "start": 2663,
                "end": 2676
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
                          "start": 2683,
                          "end": 2686
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
                              "start": 2688,
                              "end": 2689
                            },
                            "typeArguments": null,
                            "start": 2688,
                            "end": 2689
                          },
                          "start": 2686,
                          "end": 2689
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 2683,
                        "end": 2690
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
                          "start": 2691,
                          "end": 2694
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
                              "start": 2696,
                              "end": 2697
                            },
                            "typeArguments": null,
                            "start": 2696,
                            "end": 2697
                          },
                          "start": 2694,
                          "end": 2697
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 2691,
                        "end": 2697
                      }
                    ],
                    "start": 2681,
                    "end": 2699
                  },
                  "start": 2679,
                  "end": 2699
                },
                "start": 2678,
                "end": 2699
              }
            ],
            "returnType": null,
            "body": {
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2705,
                  "end": 2709
                },
                "typeArguments": null,
                "start": 2705,
                "end": 2709
              },
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 2710,
                "end": 2714
              },
              "start": 2704,
              "end": 2714
            },
            "id": null,
            "generator": false,
            "start": 2659,
            "end": 2714
          },
          "definite": false,
          "start": 2649,
          "end": 2714
        }
      ],
      "declare": false,
      "start": 2645,
      "end": 2715
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
            "name": "r11",
            "optional": false,
            "typeAnnotation": null,
            "start": 2720,
            "end": 2723
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo11",
              "optional": false,
              "typeAnnotation": null,
              "start": 2726,
              "end": 2731
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r11arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 2732,
                "end": 2738
              }
            ],
            "optional": false,
            "start": 2726,
            "end": 2739
          },
          "definite": false,
          "start": 2720,
          "end": 2739
        }
      ],
      "declare": false,
      "start": 2716,
      "end": 2740
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
            "name": "r11a",
            "optional": false,
            "typeAnnotation": null,
            "start": 2745,
            "end": 2749
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r11arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 2753,
                "end": 2759
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r11arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2761,
                "end": 2768
              }
            ],
            "start": 2752,
            "end": 2769
          },
          "definite": false,
          "start": 2745,
          "end": 2769
        }
      ],
      "declare": false,
      "start": 2741,
      "end": 2770
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
            "name": "r11b",
            "optional": false,
            "typeAnnotation": null,
            "start": 2775,
            "end": 2779
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r11arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2783,
                "end": 2790
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r11arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 2792,
                "end": 2798
              }
            ],
            "start": 2782,
            "end": 2799
          },
          "definite": false,
          "start": 2775,
          "end": 2799
        }
      ],
      "declare": false,
      "start": 2771,
      "end": 2800
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
            "name": "r15arg",
            "optional": false,
            "typeAnnotation": null,
            "start": 2806,
            "end": 2812
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
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
                    "start": 2816,
                    "end": 2817
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2816,
                  "end": 2817
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2819,
                    "end": 2820
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2819,
                  "end": 2820
                }
              ],
              "start": 2815,
              "end": 2821
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
                          "start": 2827,
                          "end": 2828
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
                              "start": 2830,
                              "end": 2831
                            },
                            "typeArguments": null,
                            "start": 2830,
                            "end": 2831
                          },
                          "start": 2828,
                          "end": 2831
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 2827,
                        "end": 2832
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
                          "start": 2833,
                          "end": 2834
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
                              "start": 2836,
                              "end": 2837
                            },
                            "typeArguments": null,
                            "start": 2836,
                            "end": 2837
                          },
                          "start": 2834,
                          "end": 2837
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 2833,
                        "end": 2838
                      }
                    ],
                    "start": 2825,
                    "end": 2840
                  },
                  "start": 2823,
                  "end": 2840
                },
                "start": 2822,
                "end": 2840
              }
            ],
            "returnType": null,
            "body": {
              "type": "TSTypeAssertion",
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
                    "start": 2846,
                    "end": 2847
                  },
                  "typeArguments": null,
                  "start": 2846,
                  "end": 2847
                },
                "start": 2846,
                "end": 2849
              },
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 2850,
                "end": 2854
              },
              "start": 2845,
              "end": 2854
            },
            "id": null,
            "generator": false,
            "start": 2815,
            "end": 2854
          },
          "definite": false,
          "start": 2806,
          "end": 2854
        }
      ],
      "declare": false,
      "start": 2802,
      "end": 2855
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
            "name": "r15arg2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2860,
            "end": 2867
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
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
                    "start": 2871,
                    "end": 2872
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2871,
                  "end": 2872
                }
              ],
              "start": 2870,
              "end": 2873
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
                          "start": 2879,
                          "end": 2880
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
                              "start": 2882,
                              "end": 2883
                            },
                            "typeArguments": null,
                            "start": 2882,
                            "end": 2883
                          },
                          "start": 2880,
                          "end": 2883
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 2879,
                        "end": 2884
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
                          "start": 2885,
                          "end": 2886
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
                              "start": 2888,
                              "end": 2889
                            },
                            "typeArguments": null,
                            "start": 2888,
                            "end": 2889
                          },
                          "start": 2886,
                          "end": 2889
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 2885,
                        "end": 2889
                      }
                    ],
                    "start": 2877,
                    "end": 2891
                  },
                  "start": 2875,
                  "end": 2891
                },
                "start": 2874,
                "end": 2891
              }
            ],
            "returnType": null,
            "body": {
              "type": "TSTypeAssertion",
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
                    "start": 2897,
                    "end": 2898
                  },
                  "typeArguments": null,
                  "start": 2897,
                  "end": 2898
                },
                "start": 2897,
                "end": 2900
              },
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 2901,
                "end": 2905
              },
              "start": 2896,
              "end": 2905
            },
            "id": null,
            "generator": false,
            "start": 2870,
            "end": 2905
          },
          "definite": false,
          "start": 2860,
          "end": 2905
        }
      ],
      "declare": false,
      "start": 2856,
      "end": 2906
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
            "name": "r15",
            "optional": false,
            "typeAnnotation": null,
            "start": 2911,
            "end": 2914
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo15",
              "optional": false,
              "typeAnnotation": null,
              "start": 2917,
              "end": 2922
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r15arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 2923,
                "end": 2929
              }
            ],
            "optional": false,
            "start": 2917,
            "end": 2930
          },
          "definite": false,
          "start": 2911,
          "end": 2930
        }
      ],
      "declare": false,
      "start": 2907,
      "end": 2931
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
            "name": "r15a",
            "optional": false,
            "typeAnnotation": null,
            "start": 2936,
            "end": 2940
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r15arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 2944,
                "end": 2950
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r15arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2952,
                "end": 2959
              }
            ],
            "start": 2943,
            "end": 2960
          },
          "definite": false,
          "start": 2936,
          "end": 2960
        }
      ],
      "declare": false,
      "start": 2932,
      "end": 2961
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
            "name": "r15b",
            "optional": false,
            "typeAnnotation": null,
            "start": 2966,
            "end": 2970
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r15arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2974,
                "end": 2981
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r15arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 2983,
                "end": 2989
              }
            ],
            "start": 2973,
            "end": 2990
          },
          "definite": false,
          "start": 2966,
          "end": 2990
        }
      ],
      "declare": false,
      "start": 2962,
      "end": 2991
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
            "name": "r16arg",
            "optional": false,
            "typeAnnotation": null,
            "start": 2997,
            "end": 3003
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
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
                    "start": 3007,
                    "end": 3008
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3017,
                      "end": 3021
                    },
                    "typeArguments": null,
                    "start": 3017,
                    "end": 3021
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3007,
                  "end": 3021
                }
              ],
              "start": 3006,
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
                              "name": "T",
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
            "returnType": null,
            "body": {
              "type": "TSTypeAssertion",
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
                    "start": 3046,
                    "end": 3047
                  },
                  "typeArguments": null,
                  "start": 3046,
                  "end": 3047
                },
                "start": 3046,
                "end": 3049
              },
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 3050,
                "end": 3054
              },
              "start": 3045,
              "end": 3054
            },
            "id": null,
            "generator": false,
            "start": 3006,
            "end": 3054
          },
          "definite": false,
          "start": 2997,
          "end": 3054
        }
      ],
      "declare": false,
      "start": 2993,
      "end": 3055
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
            "name": "r16arg2",
            "optional": false,
            "typeAnnotation": null,
            "start": 3060,
            "end": 3067
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
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
                    "start": 3071,
                    "end": 3072
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3081,
                      "end": 3085
                    },
                    "typeArguments": null,
                    "start": 3081,
                    "end": 3085
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3071,
                  "end": 3085
                }
              ],
              "start": 3070,
              "end": 3086
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
                          "start": 3092,
                          "end": 3093
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
                              "start": 3095,
                              "end": 3096
                            },
                            "typeArguments": null,
                            "start": 3095,
                            "end": 3096
                          },
                          "start": 3093,
                          "end": 3096
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 3092,
                        "end": 3097
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
                          "start": 3098,
                          "end": 3099
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
                              "start": 3101,
                              "end": 3102
                            },
                            "typeArguments": null,
                            "start": 3101,
                            "end": 3102
                          },
                          "start": 3099,
                          "end": 3102
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 3098,
                        "end": 3102
                      }
                    ],
                    "start": 3090,
                    "end": 3104
                  },
                  "start": 3088,
                  "end": 3104
                },
                "start": 3087,
                "end": 3104
              }
            ],
            "returnType": null,
            "body": {
              "type": "TSTypeAssertion",
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
                    "start": 3110,
                    "end": 3111
                  },
                  "typeArguments": null,
                  "start": 3110,
                  "end": 3111
                },
                "start": 3110,
                "end": 3113
              },
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 3114,
                "end": 3118
              },
              "start": 3109,
              "end": 3118
            },
            "id": null,
            "generator": false,
            "start": 3070,
            "end": 3118
          },
          "definite": false,
          "start": 3060,
          "end": 3118
        }
      ],
      "declare": false,
      "start": 3056,
      "end": 3119
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
            "name": "r16",
            "optional": false,
            "typeAnnotation": null,
            "start": 3124,
            "end": 3127
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo16",
              "optional": false,
              "typeAnnotation": null,
              "start": 3130,
              "end": 3135
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r16arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 3136,
                "end": 3142
              }
            ],
            "optional": false,
            "start": 3130,
            "end": 3143
          },
          "definite": false,
          "start": 3124,
          "end": 3143
        }
      ],
      "declare": false,
      "start": 3120,
      "end": 3144
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
            "name": "r16a",
            "optional": false,
            "typeAnnotation": null,
            "start": 3149,
            "end": 3153
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r16arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 3157,
                "end": 3163
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r16arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3165,
                "end": 3172
              }
            ],
            "start": 3156,
            "end": 3173
          },
          "definite": false,
          "start": 3149,
          "end": 3173
        }
      ],
      "declare": false,
      "start": 3145,
      "end": 3174
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
            "name": "r16b",
            "optional": false,
            "typeAnnotation": null,
            "start": 3179,
            "end": 3183
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r16arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3187,
                "end": 3194
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r16arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 3196,
                "end": 3202
              }
            ],
            "start": 3186,
            "end": 3203
          },
          "definite": false,
          "start": 3179,
          "end": 3203
        }
      ],
      "declare": false,
      "start": 3175,
      "end": 3204
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
            "name": "r17arg",
            "optional": false,
            "typeAnnotation": null,
            "start": 3210,
            "end": 3216
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
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
                    "start": 3220,
                    "end": 3221
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3220,
                  "end": 3221
                }
              ],
              "start": 3219,
              "end": 3222
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
                              "start": 3230,
                              "end": 3231
                            },
                            "typeArguments": null,
                            "start": 3230,
                            "end": 3231
                          },
                          "start": 3228,
                          "end": 3231
                        },
                        "start": 3227,
                        "end": 3231
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
                          "start": 3236,
                          "end": 3237
                        },
                        "typeArguments": null,
                        "start": 3236,
                        "end": 3237
                      },
                      "start": 3233,
                      "end": 3237
                    },
                    "start": 3226,
                    "end": 3237
                  },
                  "start": 3224,
                  "end": 3237
                },
                "start": 3223,
                "end": 3237
              }
            ],
            "returnType": null,
            "body": {
              "type": "TSTypeAssertion",
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
                    "start": 3243,
                    "end": 3244
                  },
                  "typeArguments": null,
                  "start": 3243,
                  "end": 3244
                },
                "start": 3243,
                "end": 3246
              },
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 3247,
                "end": 3251
              },
              "start": 3242,
              "end": 3251
            },
            "id": null,
            "generator": false,
            "start": 3219,
            "end": 3251
          },
          "definite": false,
          "start": 3210,
          "end": 3251
        }
      ],
      "declare": false,
      "start": 3206,
      "end": 3252
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
            "name": "r17",
            "optional": false,
            "typeAnnotation": null,
            "start": 3257,
            "end": 3260
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo17",
              "optional": false,
              "typeAnnotation": null,
              "start": 3263,
              "end": 3268
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r17arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 3269,
                "end": 3275
              }
            ],
            "optional": false,
            "start": 3263,
            "end": 3276
          },
          "definite": false,
          "start": 3257,
          "end": 3276
        }
      ],
      "declare": false,
      "start": 3253,
      "end": 3277
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
            "name": "r18arg",
            "optional": false,
            "typeAnnotation": null,
            "start": 3283,
            "end": 3289
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
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
                            "start": 3297,
                            "end": 3298
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 3297,
                          "end": 3298
                        }
                      ],
                      "start": 3296,
                      "end": 3299
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
                              "start": 3303,
                              "end": 3304
                            },
                            "typeArguments": null,
                            "start": 3303,
                            "end": 3304
                          },
                          "start": 3301,
                          "end": 3304
                        },
                        "start": 3300,
                        "end": 3304
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
                          "start": 3309,
                          "end": 3310
                        },
                        "typeArguments": null,
                        "start": 3309,
                        "end": 3310
                      },
                      "start": 3306,
                      "end": 3310
                    },
                    "start": 3296,
                    "end": 3310
                  },
                  "start": 3294,
                  "end": 3310
                },
                "start": 3293,
                "end": 3310
              }
            ],
            "returnType": null,
            "body": {
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 3316,
                  "end": 3319
                },
                "start": 3316,
                "end": 3321
              },
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 3322,
                "end": 3326
              },
              "start": 3315,
              "end": 3326
            },
            "id": null,
            "generator": false,
            "start": 3292,
            "end": 3326
          },
          "definite": false,
          "start": 3283,
          "end": 3326
        }
      ],
      "declare": false,
      "start": 3279,
      "end": 3327
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
            "name": "r18",
            "optional": false,
            "typeAnnotation": null,
            "start": 3332,
            "end": 3335
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo18",
              "optional": false,
              "typeAnnotation": null,
              "start": 3338,
              "end": 3343
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r18arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 3344,
                "end": 3350
              }
            ],
            "optional": false,
            "start": 3338,
            "end": 3351
          },
          "definite": false,
          "start": 3332,
          "end": 3351
        }
      ],
      "declare": false,
      "start": 3328,
      "end": 3352
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 102,
  "end": 3352
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
    "type": "Identifier",
    "value": "declare",
    "start": 273,
    "end": 280
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 281,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 290,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 294,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 298,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 301,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 303,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 308,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 315,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 317,
    "end": 324
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 325,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 334,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 338,
    "end": 339
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 340,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 342,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 346,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 348,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 351,
    "end": 352
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 354,
    "end": 361
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 362,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 371,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 375,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 376,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 380,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 383,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "T",
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
    "value": "[",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 400,
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
    "value": ";",
    "start": 402,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 404,
    "end": 411
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 412,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 421,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 425,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 427,
    "end": 428
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 429,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 433,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 435,
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
    "value": "declare",
    "start": 441,
    "end": 448
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 449,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 458,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 462,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 463,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 465,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 467,
    "end": 468
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 468,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 470,
    "end": 471
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 472,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "type": "Keyword",
    "value": "void",
    "start": 480,
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
    "value": ";",
    "start": 485,
    "end": 486
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 487,
    "end": 494
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 495,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 504,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 508,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 509,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 510,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 512,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 516,
    "end": 517
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 518,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 521,
    "end": 522
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 524,
    "end": 531
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 532,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 541,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 545,
    "end": 546
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 546,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 548,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 550,
    "end": 551
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 551,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 552,
    "end": 553
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 554,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 555,
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
    "value": "T",
    "start": 560,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 561,
    "end": 562
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 563,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 564,
    "end": 565
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 566,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 567,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 569,
    "end": 571
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 572,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 578,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 579,
    "end": 580
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 581,
    "end": 588
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 589,
    "end": 597
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 598,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 602,
    "end": 603
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 603,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 604,
    "end": 605
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 606,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 609,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 610,
    "end": 611
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 612,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 615,
    "end": 616
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 618,
    "end": 625
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 626,
    "end": 634
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 635,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 639,
    "end": 640
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 640,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 642,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 644,
    "end": 645
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 645,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 646,
    "end": 647
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 648,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 649,
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
    "type": "Punctuator",
    "value": "(",
    "start": 654,
    "end": 655
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 655,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 658,
    "end": 659
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 660,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 661,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 663,
    "end": 665
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 666,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 667,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 669,
    "end": 671
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 672,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 673,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 674,
    "end": 675
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 676,
    "end": 683
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 684,
    "end": 692
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 693,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 697,
    "end": 698
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 698,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 699,
    "end": 700
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 701,
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
    "value": ":",
    "start": 705,
    "end": 706
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 707,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 710,
    "end": 711
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 713,
    "end": 720
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 721,
    "end": 729
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 730,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 734,
    "end": 735
  },
  {
    "type": "Identifier",
    "value": "a6",
    "start": 735,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 737,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 739,
    "end": 740
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 740,
    "end": 741
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 742,
    "end": 749
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 750,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 754,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 755,
    "end": 756
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 756,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 757,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 759,
    "end": 760
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 760,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 763,
    "end": 764
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 765,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 766,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 768,
    "end": 770
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 771,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 778,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 780,
    "end": 782
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 783,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 784,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 785,
    "end": 786
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 787,
    "end": 794
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 795,
    "end": 803
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 804,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 808,
    "end": 809
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 809,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 810,
    "end": 811
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 812,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 815,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 816,
    "end": 817
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 818,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 821,
    "end": 822
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 824,
    "end": 831
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 832,
    "end": 840
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 841,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 846,
    "end": 847
  },
  {
    "type": "Identifier",
    "value": "a11",
    "start": 847,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 850,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 852,
    "end": 853
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 853,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 854,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 855,
    "end": 856
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 856,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 857,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 859,
    "end": 860
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 861,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 864,
    "end": 865
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 866,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 868,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 869,
    "end": 870
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 871,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 872,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 874,
    "end": 875
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 876,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 879,
    "end": 880
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 881,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 882,
    "end": 883
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 884,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 887,
    "end": 888
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 889,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "=>",
    "start": 894,
    "end": 896
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 897,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 901,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 902,
    "end": 903
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 904,
    "end": 911
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 912,
    "end": 920
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 921,
    "end": 926
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 926,
    "end": 927
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 927,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 928,
    "end": 929
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 930,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": ";",
    "start": 939,
    "end": 940
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 942,
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
    "value": "foo15",
    "start": 959,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 964,
    "end": 965
  },
  {
    "type": "Identifier",
    "value": "a15",
    "start": 965,
    "end": 968
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 968,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 970,
    "end": 971
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 971,
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
    "value": "(",
    "start": 973,
    "end": 974
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Punctuator",
    "value": "{",
    "start": 977,
    "end": 978
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 979,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 980,
    "end": 981
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 982,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 983,
    "end": 984
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 985,
    "end": 986
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 986,
    "end": 987
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 988,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 990,
    "end": 991
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 991,
    "end": 992
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 993,
    "end": 995
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 996,
    "end": 997
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 997,
    "end": 998
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 998,
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
    "value": ";",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1002,
    "end": 1009
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1010,
    "end": 1018
  },
  {
    "type": "Identifier",
    "value": "foo15",
    "start": 1019,
    "end": 1024
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1024,
    "end": 1025
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "value": "any",
    "start": 1028,
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
    "value": "any",
    "start": 1034,
    "end": 1037
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1040,
    "end": 1047
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1048,
    "end": 1056
  },
  {
    "type": "Identifier",
    "value": "foo16",
    "start": 1057,
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
    "value": "a16",
    "start": 1063,
    "end": 1066
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1071,
    "end": 1078
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1079,
    "end": 1083
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1083,
    "end": 1084
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1084,
    "end": 1085
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1085,
    "end": 1086
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "type": "Identifier",
    "value": "a",
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
    "value": "T",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1094,
    "end": 1095
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1096,
    "end": 1097
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1099,
    "end": 1100
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1101,
    "end": 1102
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1102,
    "end": 1103
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1104,
    "end": 1106
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1108,
    "end": 1109
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Identifier",
    "value": "declare",
    "start": 1113,
    "end": 1120
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1121,
    "end": 1129
  },
  {
    "type": "Identifier",
    "value": "foo16",
    "start": 1130,
    "end": 1135
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1135,
    "end": 1136
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1136,
    "end": 1137
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1139,
    "end": 1142
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1142,
    "end": 1143
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1143,
    "end": 1144
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1145,
    "end": 1148
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1148,
    "end": 1149
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1151,
    "end": 1158
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1159,
    "end": 1167
  },
  {
    "type": "Identifier",
    "value": "foo17",
    "start": 1168,
    "end": 1173
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1173,
    "end": 1174
  },
  {
    "type": "Identifier",
    "value": "a17",
    "start": 1174,
    "end": 1177
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1179,
    "end": 1180
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1188,
    "end": 1195
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1196,
    "end": 1203
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1203,
    "end": 1204
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1204,
    "end": 1205
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1205,
    "end": 1206
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1206,
    "end": 1207
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1208,
    "end": 1209
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1209,
    "end": 1210
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1210,
    "end": 1211
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1212,
    "end": 1213
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1215,
    "end": 1217
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1218,
    "end": 1219
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1219,
    "end": 1220
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1222,
    "end": 1223
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1224,
    "end": 1225
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1225,
    "end": 1226
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1231,
    "end": 1232
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1232,
    "end": 1233
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1234,
    "end": 1241
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1242,
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
    "type": "Punctuator",
    "value": "(",
    "start": 1251,
    "end": 1252
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "value": "T",
    "start": 1255,
    "end": 1256
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1256,
    "end": 1257
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1258,
    "end": 1260
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1261,
    "end": 1262
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1262,
    "end": 1263
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1263,
    "end": 1264
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1265,
    "end": 1266
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1267,
    "end": 1268
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1268,
    "end": 1269
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1278,
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
    "value": ";",
    "start": 1280,
    "end": 1281
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1282,
    "end": 1289
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1290,
    "end": 1298
  },
  {
    "type": "Identifier",
    "value": "foo17",
    "start": 1299,
    "end": 1304
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1304,
    "end": 1305
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1305,
    "end": 1306
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1306,
    "end": 1307
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1308,
    "end": 1311
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "any",
    "start": 1314,
    "end": 1317
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1317,
    "end": 1318
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1320,
    "end": 1327
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1328,
    "end": 1336
  },
  {
    "type": "Identifier",
    "value": "foo18",
    "start": 1337,
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
    "value": "a18",
    "start": 1343,
    "end": 1346
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1346,
    "end": 1347
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1348,
    "end": 1349
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1354,
    "end": 1355
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1355,
    "end": 1356
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1356,
    "end": 1357
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1358,
    "end": 1359
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1368,
    "end": 1369
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1369,
    "end": 1370
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1371,
    "end": 1378
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1379,
    "end": 1386
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1386,
    "end": 1387
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1387,
    "end": 1388
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1388,
    "end": 1389
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1389,
    "end": 1390
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1391,
    "end": 1392
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1392,
    "end": 1393
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1393,
    "end": 1394
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1395,
    "end": 1396
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1396,
    "end": 1397
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1406,
    "end": 1407
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1407,
    "end": 1408
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1409,
    "end": 1416
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1417,
    "end": 1421
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1421,
    "end": 1422
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1422,
    "end": 1423
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1423,
    "end": 1424
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1424,
    "end": 1425
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1426,
    "end": 1427
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "T",
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
    "type": "Punctuator",
    "value": "}",
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
    "value": ":",
    "start": 1439,
    "end": 1440
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1441,
    "end": 1444
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1444,
    "end": 1445
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1445,
    "end": 1446
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1446,
    "end": 1447
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
    "type": "Punctuator",
    "value": "{",
    "start": 1456,
    "end": 1457
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1466,
    "end": 1467
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1467,
    "end": 1468
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1469,
    "end": 1476
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 1477,
    "end": 1485
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1485,
    "end": 1486
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1486,
    "end": 1487
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1487,
    "end": 1488
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1488,
    "end": 1489
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1490,
    "end": 1491
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "T",
    "start": 1494,
    "end": 1495
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1495,
    "end": 1496
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1505,
    "end": 1506
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1506,
    "end": 1507
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1508,
    "end": 1515
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1516,
    "end": 1520
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1520,
    "end": 1521
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1521,
    "end": 1522
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1522,
    "end": 1523
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1523,
    "end": 1524
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1525,
    "end": 1526
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1526,
    "end": 1527
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1527,
    "end": 1528
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1529,
    "end": 1530
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1530,
    "end": 1531
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": ":",
    "start": 1538,
    "end": 1539
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1540,
    "end": 1543
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1543,
    "end": 1544
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1544,
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
    "start": 1547,
    "end": 1548
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "declare",
    "start": 1551,
    "end": 1558
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1559,
    "end": 1567
  },
  {
    "type": "Identifier",
    "value": "foo18",
    "start": 1568,
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
    "value": "a",
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
    "value": "any",
    "start": 1577,
    "end": 1580
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "any",
    "start": 1583,
    "end": 1586
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1586,
    "end": 1587
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1589,
    "end": 1592
  },
  {
    "type": "Identifier",
    "value": "r1arg",
    "start": 1593,
    "end": 1598
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1599,
    "end": 1600
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1601,
    "end": 1602
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1602,
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
    "value": "(",
    "start": 1604,
    "end": 1605
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1605,
    "end": 1606
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1606,
    "end": 1607
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1608,
    "end": 1609
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1609,
    "end": 1610
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1611,
    "end": 1613
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1614,
    "end": 1615
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1615,
    "end": 1616
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1616,
    "end": 1617
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1617,
    "end": 1618
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1618,
    "end": 1619
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1619,
    "end": 1623
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1623,
    "end": 1624
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1625,
    "end": 1628
  },
  {
    "type": "Identifier",
    "value": "r1arg2",
    "start": 1629,
    "end": 1635
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1636,
    "end": 1637
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1638,
    "end": 1639
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1639,
    "end": 1640
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1640,
    "end": 1641
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1641,
    "end": 1642
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1642,
    "end": 1643
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1643,
    "end": 1644
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "type": "Punctuator",
    "value": "<",
    "start": 1651,
    "end": 1652
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1652,
    "end": 1653
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1653,
    "end": 1654
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1654,
    "end": 1655
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1655,
    "end": 1656
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1656,
    "end": 1660
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1660,
    "end": 1661
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1662,
    "end": 1665
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 1666,
    "end": 1668
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1669,
    "end": 1670
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 1671,
    "end": 1675
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1675,
    "end": 1676
  },
  {
    "type": "Identifier",
    "value": "r1arg",
    "start": 1676,
    "end": 1681
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1681,
    "end": 1682
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1682,
    "end": 1683
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1684,
    "end": 1687
  },
  {
    "type": "Identifier",
    "value": "r1a",
    "start": 1688,
    "end": 1691
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1692,
    "end": 1693
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1694,
    "end": 1695
  },
  {
    "type": "Identifier",
    "value": "r1arg",
    "start": 1695,
    "end": 1700
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1700,
    "end": 1701
  },
  {
    "type": "Identifier",
    "value": "r1arg2",
    "start": 1702,
    "end": 1708
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1708,
    "end": 1709
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1709,
    "end": 1710
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1711,
    "end": 1714
  },
  {
    "type": "Identifier",
    "value": "r1b",
    "start": 1715,
    "end": 1718
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1719,
    "end": 1720
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1721,
    "end": 1722
  },
  {
    "type": "Identifier",
    "value": "r1arg2",
    "start": 1722,
    "end": 1728
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1728,
    "end": 1729
  },
  {
    "type": "Identifier",
    "value": "r1arg",
    "start": 1730,
    "end": 1735
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1735,
    "end": 1736
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1736,
    "end": 1737
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1739,
    "end": 1742
  },
  {
    "type": "Identifier",
    "value": "r2arg",
    "start": 1743,
    "end": 1748
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1749,
    "end": 1750
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1751,
    "end": 1752
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1752,
    "end": 1753
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1753,
    "end": 1754
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1754,
    "end": 1755
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1755,
    "end": 1756
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1756,
    "end": 1757
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1758,
    "end": 1759
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1759,
    "end": 1760
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1761,
    "end": 1763
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1764,
    "end": 1765
  },
  {
    "type": "String",
    "value": "''",
    "start": 1765,
    "end": 1767
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1767,
    "end": 1768
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1768,
    "end": 1769
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1770,
    "end": 1773
  },
  {
    "type": "Identifier",
    "value": "r2arg2",
    "start": 1774,
    "end": 1780
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1781,
    "end": 1782
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1783,
    "end": 1784
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1784,
    "end": 1785
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1785,
    "end": 1786
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1786,
    "end": 1787
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1787,
    "end": 1788
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1788,
    "end": 1789
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1790,
    "end": 1791
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1791,
    "end": 1792
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1793,
    "end": 1795
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1796,
    "end": 1797
  },
  {
    "type": "String",
    "value": "''",
    "start": 1797,
    "end": 1799
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1799,
    "end": 1800
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1800,
    "end": 1801
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1802,
    "end": 1805
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 1806,
    "end": 1808
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1809,
    "end": 1810
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 1811,
    "end": 1815
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1815,
    "end": 1816
  },
  {
    "type": "Identifier",
    "value": "r2arg",
    "start": 1816,
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
    "value": ";",
    "start": 1822,
    "end": 1823
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1824,
    "end": 1827
  },
  {
    "type": "Identifier",
    "value": "r2a",
    "start": 1828,
    "end": 1831
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1832,
    "end": 1833
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1834,
    "end": 1835
  },
  {
    "type": "Identifier",
    "value": "r2arg",
    "start": 1835,
    "end": 1840
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1840,
    "end": 1841
  },
  {
    "type": "Identifier",
    "value": "r2arg2",
    "start": 1842,
    "end": 1848
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "var",
    "start": 1851,
    "end": 1854
  },
  {
    "type": "Identifier",
    "value": "r2b",
    "start": 1855,
    "end": 1858
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1859,
    "end": 1860
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1861,
    "end": 1862
  },
  {
    "type": "Identifier",
    "value": "r2arg2",
    "start": 1862,
    "end": 1868
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1868,
    "end": 1869
  },
  {
    "type": "Identifier",
    "value": "r2arg",
    "start": 1870,
    "end": 1875
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1875,
    "end": 1876
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1876,
    "end": 1877
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1879,
    "end": 1882
  },
  {
    "type": "Identifier",
    "value": "r3arg",
    "start": 1883,
    "end": 1888
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1889,
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
    "type": "Identifier",
    "value": "T",
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
    "value": "=>",
    "start": 1901,
    "end": 1903
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1904,
    "end": 1905
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1905,
    "end": 1906
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1906,
    "end": 1907
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1907,
    "end": 1911
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1911,
    "end": 1912
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1913,
    "end": 1916
  },
  {
    "type": "Identifier",
    "value": "r3arg2",
    "start": 1917,
    "end": 1923
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1924,
    "end": 1925
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1926,
    "end": 1927
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1927,
    "end": 1928
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1928,
    "end": 1929
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1929,
    "end": 1930
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1930,
    "end": 1931
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1931,
    "end": 1932
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1933,
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
    "value": "=>",
    "start": 1936,
    "end": 1938
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1939,
    "end": 1940
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1941,
    "end": 1942
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1942,
    "end": 1943
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1944,
    "end": 1947
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 1948,
    "end": 1950
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1951,
    "end": 1952
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 1953,
    "end": 1957
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1957,
    "end": 1958
  },
  {
    "type": "Identifier",
    "value": "r3arg",
    "start": 1958,
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
    "value": "var",
    "start": 1966,
    "end": 1969
  },
  {
    "type": "Identifier",
    "value": "r3a",
    "start": 1970,
    "end": 1973
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1974,
    "end": 1975
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1976,
    "end": 1977
  },
  {
    "type": "Identifier",
    "value": "r3arg",
    "start": 1977,
    "end": 1982
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1982,
    "end": 1983
  },
  {
    "type": "Identifier",
    "value": "r3arg2",
    "start": 1984,
    "end": 1990
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1990,
    "end": 1991
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1991,
    "end": 1992
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1993,
    "end": 1996
  },
  {
    "type": "Identifier",
    "value": "r3b",
    "start": 1997,
    "end": 2000
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2001,
    "end": 2002
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2003,
    "end": 2004
  },
  {
    "type": "Identifier",
    "value": "r3arg2",
    "start": 2004,
    "end": 2010
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2010,
    "end": 2011
  },
  {
    "type": "Identifier",
    "value": "r3arg",
    "start": 2012,
    "end": 2017
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2017,
    "end": 2018
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2018,
    "end": 2019
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2021,
    "end": 2024
  },
  {
    "type": "Identifier",
    "value": "r4arg",
    "start": 2025,
    "end": 2030
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2031,
    "end": 2032
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2033,
    "end": 2034
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2034,
    "end": 2035
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2035,
    "end": 2036
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2037,
    "end": 2038
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2038,
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
    "type": "Identifier",
    "value": "T",
    "start": 2043,
    "end": 2044
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2044,
    "end": 2045
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2046,
    "end": 2047
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2047,
    "end": 2048
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2049,
    "end": 2050
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2050,
    "end": 2051
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2052,
    "end": 2054
  },
  {
    "type": "String",
    "value": "''",
    "start": 2055,
    "end": 2057
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2057,
    "end": 2058
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2059,
    "end": 2062
  },
  {
    "type": "Identifier",
    "value": "r4arg2",
    "start": 2063,
    "end": 2069
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2070,
    "end": 2071
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2072,
    "end": 2073
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2073,
    "end": 2074
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2074,
    "end": 2075
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2076,
    "end": 2077
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2077,
    "end": 2078
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2078,
    "end": 2079
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2079,
    "end": 2080
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2080,
    "end": 2081
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2082,
    "end": 2083
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2083,
    "end": 2084
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2085,
    "end": 2086
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2086,
    "end": 2087
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2088,
    "end": 2089
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2089,
    "end": 2090
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2091,
    "end": 2093
  },
  {
    "type": "String",
    "value": "''",
    "start": 2094,
    "end": 2096
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2096,
    "end": 2097
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2098,
    "end": 2101
  },
  {
    "type": "Identifier",
    "value": "r4",
    "start": 2102,
    "end": 2104
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2105,
    "end": 2106
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 2107,
    "end": 2111
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2111,
    "end": 2112
  },
  {
    "type": "Identifier",
    "value": "r4arg",
    "start": 2112,
    "end": 2117
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2117,
    "end": 2118
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2118,
    "end": 2119
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2120,
    "end": 2123
  },
  {
    "type": "Identifier",
    "value": "r4a",
    "start": 2124,
    "end": 2127
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2128,
    "end": 2129
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2130,
    "end": 2131
  },
  {
    "type": "Identifier",
    "value": "r4arg",
    "start": 2131,
    "end": 2136
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2136,
    "end": 2137
  },
  {
    "type": "Identifier",
    "value": "r4arg2",
    "start": 2138,
    "end": 2144
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2144,
    "end": 2145
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2145,
    "end": 2146
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2147,
    "end": 2150
  },
  {
    "type": "Identifier",
    "value": "r4b",
    "start": 2151,
    "end": 2154
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2155,
    "end": 2156
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2157,
    "end": 2158
  },
  {
    "type": "Identifier",
    "value": "r4arg2",
    "start": 2158,
    "end": 2164
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2164,
    "end": 2165
  },
  {
    "type": "Identifier",
    "value": "r4arg",
    "start": 2166,
    "end": 2171
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2171,
    "end": 2172
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2172,
    "end": 2173
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2175,
    "end": 2178
  },
  {
    "type": "Identifier",
    "value": "r5arg",
    "start": 2179,
    "end": 2184
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2185,
    "end": 2186
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2187,
    "end": 2188
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2188,
    "end": 2189
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2189,
    "end": 2190
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2191,
    "end": 2192
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2192,
    "end": 2193
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2193,
    "end": 2194
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2194,
    "end": 2195
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2195,
    "end": 2196
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2197,
    "end": 2198
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 2198,
    "end": 2201
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2201,
    "end": 2202
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2203,
    "end": 2204
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2204,
    "end": 2205
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2206,
    "end": 2208
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2209,
    "end": 2210
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2210,
    "end": 2211
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2212,
    "end": 2214
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2215,
    "end": 2216
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2216,
    "end": 2217
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2217,
    "end": 2218
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2218,
    "end": 2222
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2222,
    "end": 2223
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2224,
    "end": 2227
  },
  {
    "type": "Identifier",
    "value": "r5arg2",
    "start": 2228,
    "end": 2234
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2235,
    "end": 2236
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2237,
    "end": 2238
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2238,
    "end": 2239
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2239,
    "end": 2240
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2241,
    "end": 2242
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2242,
    "end": 2243
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2243,
    "end": 2244
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2244,
    "end": 2245
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2245,
    "end": 2246
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2247,
    "end": 2248
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 2248,
    "end": 2251
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2251,
    "end": 2252
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2253,
    "end": 2254
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2254,
    "end": 2255
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2256,
    "end": 2258
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2259,
    "end": 2260
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2260,
    "end": 2261
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2262,
    "end": 2264
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2265,
    "end": 2266
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2266,
    "end": 2267
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2267,
    "end": 2268
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2268,
    "end": 2272
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2272,
    "end": 2273
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2274,
    "end": 2277
  },
  {
    "type": "Identifier",
    "value": "r5",
    "start": 2278,
    "end": 2280
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2281,
    "end": 2282
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 2283,
    "end": 2287
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2287,
    "end": 2288
  },
  {
    "type": "Identifier",
    "value": "r5arg",
    "start": 2288,
    "end": 2293
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2293,
    "end": 2294
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2294,
    "end": 2295
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2296,
    "end": 2299
  },
  {
    "type": "Identifier",
    "value": "r5a",
    "start": 2300,
    "end": 2303
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2304,
    "end": 2305
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2306,
    "end": 2307
  },
  {
    "type": "Identifier",
    "value": "r5arg",
    "start": 2307,
    "end": 2312
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2312,
    "end": 2313
  },
  {
    "type": "Identifier",
    "value": "r5arg2",
    "start": 2314,
    "end": 2320
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2320,
    "end": 2321
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2321,
    "end": 2322
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2323,
    "end": 2326
  },
  {
    "type": "Identifier",
    "value": "r5b",
    "start": 2327,
    "end": 2330
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2331,
    "end": 2332
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2333,
    "end": 2334
  },
  {
    "type": "Identifier",
    "value": "r5arg2",
    "start": 2334,
    "end": 2340
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2340,
    "end": 2341
  },
  {
    "type": "Identifier",
    "value": "r5arg",
    "start": 2342,
    "end": 2347
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2347,
    "end": 2348
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2348,
    "end": 2349
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2351,
    "end": 2354
  },
  {
    "type": "Identifier",
    "value": "r6arg",
    "start": 2355,
    "end": 2360
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2361,
    "end": 2362
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2363,
    "end": 2364
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2364,
    "end": 2365
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2366,
    "end": 2373
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2374,
    "end": 2378
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2378,
    "end": 2379
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2380,
    "end": 2381
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2382,
    "end": 2389
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 2390,
    "end": 2397
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2397,
    "end": 2398
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2398,
    "end": 2399
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "arg",
    "start": 2403,
    "end": 2406
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2406,
    "end": 2407
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2408,
    "end": 2409
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2409,
    "end": 2410
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2411,
    "end": 2413
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2414,
    "end": 2415
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2415,
    "end": 2416
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2417,
    "end": 2419
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2420,
    "end": 2421
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2421,
    "end": 2422
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2422,
    "end": 2423
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2423,
    "end": 2427
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2427,
    "end": 2428
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2429,
    "end": 2432
  },
  {
    "type": "Identifier",
    "value": "r6arg2",
    "start": 2433,
    "end": 2439
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2440,
    "end": 2441
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2442,
    "end": 2443
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2443,
    "end": 2444
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2445,
    "end": 2452
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2453,
    "end": 2457
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2457,
    "end": 2458
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2458,
    "end": 2459
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2459,
    "end": 2460
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2460,
    "end": 2461
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2462,
    "end": 2463
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 2463,
    "end": 2466
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2466,
    "end": 2467
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2468,
    "end": 2469
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2469,
    "end": 2470
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2471,
    "end": 2473
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 2474,
    "end": 2481
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2481,
    "end": 2482
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2483,
    "end": 2485
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2486,
    "end": 2487
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2487,
    "end": 2488
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2488,
    "end": 2489
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2489,
    "end": 2493
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2493,
    "end": 2494
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2495,
    "end": 2498
  },
  {
    "type": "Identifier",
    "value": "r6",
    "start": 2499,
    "end": 2501
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2502,
    "end": 2503
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 2504,
    "end": 2508
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2508,
    "end": 2509
  },
  {
    "type": "Identifier",
    "value": "r6arg",
    "start": 2509,
    "end": 2514
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2514,
    "end": 2515
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2515,
    "end": 2516
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2517,
    "end": 2520
  },
  {
    "type": "Identifier",
    "value": "r6a",
    "start": 2521,
    "end": 2524
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2525,
    "end": 2526
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2527,
    "end": 2528
  },
  {
    "type": "Identifier",
    "value": "r6arg",
    "start": 2528,
    "end": 2533
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2533,
    "end": 2534
  },
  {
    "type": "Identifier",
    "value": "r6arg2",
    "start": 2535,
    "end": 2541
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2541,
    "end": 2542
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2542,
    "end": 2543
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2544,
    "end": 2547
  },
  {
    "type": "Identifier",
    "value": "r6b",
    "start": 2548,
    "end": 2551
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2552,
    "end": 2553
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2554,
    "end": 2555
  },
  {
    "type": "Identifier",
    "value": "r6arg2",
    "start": 2555,
    "end": 2561
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2561,
    "end": 2562
  },
  {
    "type": "Identifier",
    "value": "r6arg",
    "start": 2563,
    "end": 2568
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2568,
    "end": 2569
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2569,
    "end": 2570
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2572,
    "end": 2575
  },
  {
    "type": "Identifier",
    "value": "r11arg",
    "start": 2576,
    "end": 2582
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2583,
    "end": 2584
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2585,
    "end": 2586
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2586,
    "end": 2587
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2587,
    "end": 2588
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2589,
    "end": 2590
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2590,
    "end": 2591
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2591,
    "end": 2592
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2592,
    "end": 2593
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2593,
    "end": 2594
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2595,
    "end": 2596
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2597,
    "end": 2600
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2600,
    "end": 2601
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2602,
    "end": 2603
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2604,
    "end": 2605
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2605,
    "end": 2606
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2607,
    "end": 2608
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2608,
    "end": 2609
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2610,
    "end": 2611
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2612,
    "end": 2615
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2615,
    "end": 2616
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2617,
    "end": 2618
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2618,
    "end": 2619
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 2620,
    "end": 2623
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2623,
    "end": 2624
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2625,
    "end": 2626
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2627,
    "end": 2628
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2628,
    "end": 2629
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2630,
    "end": 2632
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2633,
    "end": 2634
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2634,
    "end": 2638
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2638,
    "end": 2639
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2639,
    "end": 2643
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2643,
    "end": 2644
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2645,
    "end": 2648
  },
  {
    "type": "Identifier",
    "value": "r11arg2",
    "start": 2649,
    "end": 2656
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2657,
    "end": 2658
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2659,
    "end": 2660
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2660,
    "end": 2661
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2661,
    "end": 2662
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2662,
    "end": 2663
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2663,
    "end": 2664
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2664,
    "end": 2665
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2666,
    "end": 2667
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2668,
    "end": 2671
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2671,
    "end": 2672
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2673,
    "end": 2674
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2675,
    "end": 2676
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2676,
    "end": 2677
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2678,
    "end": 2679
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2679,
    "end": 2680
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2681,
    "end": 2682
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2683,
    "end": 2686
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2686,
    "end": 2687
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2688,
    "end": 2689
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2689,
    "end": 2690
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 2691,
    "end": 2694
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2694,
    "end": 2695
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2696,
    "end": 2697
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2698,
    "end": 2699
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2699,
    "end": 2700
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2701,
    "end": 2703
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2704,
    "end": 2705
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2705,
    "end": 2709
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2709,
    "end": 2710
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2710,
    "end": 2714
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2714,
    "end": 2715
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2716,
    "end": 2719
  },
  {
    "type": "Identifier",
    "value": "r11",
    "start": 2720,
    "end": 2723
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2724,
    "end": 2725
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 2726,
    "end": 2731
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2731,
    "end": 2732
  },
  {
    "type": "Identifier",
    "value": "r11arg",
    "start": 2732,
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
    "value": ";",
    "start": 2739,
    "end": 2740
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2741,
    "end": 2744
  },
  {
    "type": "Identifier",
    "value": "r11a",
    "start": 2745,
    "end": 2749
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2750,
    "end": 2751
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2752,
    "end": 2753
  },
  {
    "type": "Identifier",
    "value": "r11arg",
    "start": 2753,
    "end": 2759
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2759,
    "end": 2760
  },
  {
    "type": "Identifier",
    "value": "r11arg2",
    "start": 2761,
    "end": 2768
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2768,
    "end": 2769
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2769,
    "end": 2770
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2771,
    "end": 2774
  },
  {
    "type": "Identifier",
    "value": "r11b",
    "start": 2775,
    "end": 2779
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2780,
    "end": 2781
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2782,
    "end": 2783
  },
  {
    "type": "Identifier",
    "value": "r11arg2",
    "start": 2783,
    "end": 2790
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2790,
    "end": 2791
  },
  {
    "type": "Identifier",
    "value": "r11arg",
    "start": 2792,
    "end": 2798
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2798,
    "end": 2799
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2799,
    "end": 2800
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2802,
    "end": 2805
  },
  {
    "type": "Identifier",
    "value": "r15arg",
    "start": 2806,
    "end": 2812
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2813,
    "end": 2814
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2815,
    "end": 2816
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2816,
    "end": 2817
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2817,
    "end": 2818
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 2819,
    "end": 2820
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2820,
    "end": 2821
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2821,
    "end": 2822
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2822,
    "end": 2823
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2823,
    "end": 2824
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2825,
    "end": 2826
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2827,
    "end": 2828
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2828,
    "end": 2829
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2830,
    "end": 2831
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2831,
    "end": 2832
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2833,
    "end": 2834
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2834,
    "end": 2835
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 2836,
    "end": 2837
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2837,
    "end": 2838
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2839,
    "end": 2840
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2840,
    "end": 2841
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2842,
    "end": 2844
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2845,
    "end": 2846
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2846,
    "end": 2847
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2847,
    "end": 2848
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2848,
    "end": 2849
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2849,
    "end": 2850
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2850,
    "end": 2854
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2854,
    "end": 2855
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2856,
    "end": 2859
  },
  {
    "type": "Identifier",
    "value": "r15arg2",
    "start": 2860,
    "end": 2867
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2868,
    "end": 2869
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2870,
    "end": 2871
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2871,
    "end": 2872
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2872,
    "end": 2873
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2873,
    "end": 2874
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2874,
    "end": 2875
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2875,
    "end": 2876
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2877,
    "end": 2878
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2879,
    "end": 2880
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2880,
    "end": 2881
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2882,
    "end": 2883
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2883,
    "end": 2884
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2885,
    "end": 2886
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2886,
    "end": 2887
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2888,
    "end": 2889
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2890,
    "end": 2891
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2891,
    "end": 2892
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2893,
    "end": 2895
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2896,
    "end": 2897
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2897,
    "end": 2898
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2898,
    "end": 2899
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2899,
    "end": 2900
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2900,
    "end": 2901
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2901,
    "end": 2905
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2905,
    "end": 2906
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2907,
    "end": 2910
  },
  {
    "type": "Identifier",
    "value": "r15",
    "start": 2911,
    "end": 2914
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2915,
    "end": 2916
  },
  {
    "type": "Identifier",
    "value": "foo15",
    "start": 2917,
    "end": 2922
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2922,
    "end": 2923
  },
  {
    "type": "Identifier",
    "value": "r15arg",
    "start": 2923,
    "end": 2929
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2929,
    "end": 2930
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2930,
    "end": 2931
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2932,
    "end": 2935
  },
  {
    "type": "Identifier",
    "value": "r15a",
    "start": 2936,
    "end": 2940
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2941,
    "end": 2942
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2943,
    "end": 2944
  },
  {
    "type": "Identifier",
    "value": "r15arg",
    "start": 2944,
    "end": 2950
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2950,
    "end": 2951
  },
  {
    "type": "Identifier",
    "value": "r15arg2",
    "start": 2952,
    "end": 2959
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2959,
    "end": 2960
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2960,
    "end": 2961
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2962,
    "end": 2965
  },
  {
    "type": "Identifier",
    "value": "r15b",
    "start": 2966,
    "end": 2970
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2971,
    "end": 2972
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2973,
    "end": 2974
  },
  {
    "type": "Identifier",
    "value": "r15arg2",
    "start": 2974,
    "end": 2981
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2981,
    "end": 2982
  },
  {
    "type": "Identifier",
    "value": "r15arg",
    "start": 2983,
    "end": 2989
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2989,
    "end": 2990
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2990,
    "end": 2991
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2993,
    "end": 2996
  },
  {
    "type": "Identifier",
    "value": "r16arg",
    "start": 2997,
    "end": 3003
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3004,
    "end": 3005
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3006,
    "end": 3007
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3007,
    "end": 3008
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3009,
    "end": 3016
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 3017,
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
    "value": "T",
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
    "type": "Punctuator",
    "value": "<",
    "start": 3045,
    "end": 3046
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3046,
    "end": 3047
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3047,
    "end": 3048
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3048,
    "end": 3049
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3049,
    "end": 3050
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3050,
    "end": 3054
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3054,
    "end": 3055
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3056,
    "end": 3059
  },
  {
    "type": "Identifier",
    "value": "r16arg2",
    "start": 3060,
    "end": 3067
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3068,
    "end": 3069
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3070,
    "end": 3071
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3071,
    "end": 3072
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3073,
    "end": 3080
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 3081,
    "end": 3085
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3085,
    "end": 3086
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3086,
    "end": 3087
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3087,
    "end": 3088
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3088,
    "end": 3089
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3090,
    "end": 3091
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3092,
    "end": 3093
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3093,
    "end": 3094
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3095,
    "end": 3096
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3096,
    "end": 3097
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3098,
    "end": 3099
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3099,
    "end": 3100
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3101,
    "end": 3102
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3103,
    "end": 3104
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3104,
    "end": 3105
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3106,
    "end": 3108
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3109,
    "end": 3110
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3110,
    "end": 3111
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3111,
    "end": 3112
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3112,
    "end": 3113
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3113,
    "end": 3114
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3114,
    "end": 3118
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3118,
    "end": 3119
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3120,
    "end": 3123
  },
  {
    "type": "Identifier",
    "value": "r16",
    "start": 3124,
    "end": 3127
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3128,
    "end": 3129
  },
  {
    "type": "Identifier",
    "value": "foo16",
    "start": 3130,
    "end": 3135
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3135,
    "end": 3136
  },
  {
    "type": "Identifier",
    "value": "r16arg",
    "start": 3136,
    "end": 3142
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3142,
    "end": 3143
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3143,
    "end": 3144
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3145,
    "end": 3148
  },
  {
    "type": "Identifier",
    "value": "r16a",
    "start": 3149,
    "end": 3153
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3154,
    "end": 3155
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3156,
    "end": 3157
  },
  {
    "type": "Identifier",
    "value": "r16arg",
    "start": 3157,
    "end": 3163
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3163,
    "end": 3164
  },
  {
    "type": "Identifier",
    "value": "r16arg2",
    "start": 3165,
    "end": 3172
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3172,
    "end": 3173
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3173,
    "end": 3174
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3175,
    "end": 3178
  },
  {
    "type": "Identifier",
    "value": "r16b",
    "start": 3179,
    "end": 3183
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3184,
    "end": 3185
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3186,
    "end": 3187
  },
  {
    "type": "Identifier",
    "value": "r16arg2",
    "start": 3187,
    "end": 3194
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3194,
    "end": 3195
  },
  {
    "type": "Identifier",
    "value": "r16arg",
    "start": 3196,
    "end": 3202
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3202,
    "end": 3203
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3203,
    "end": 3204
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3206,
    "end": 3209
  },
  {
    "type": "Identifier",
    "value": "r17arg",
    "start": 3210,
    "end": 3216
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3217,
    "end": 3218
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3219,
    "end": 3220
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3220,
    "end": 3221
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3221,
    "end": 3222
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3222,
    "end": 3223
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3223,
    "end": 3224
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3224,
    "end": 3225
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3226,
    "end": 3227
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3227,
    "end": 3228
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3228,
    "end": 3229
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3230,
    "end": 3231
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3231,
    "end": 3232
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3233,
    "end": 3235
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3236,
    "end": 3237
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3237,
    "end": 3238
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3239,
    "end": 3241
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3242,
    "end": 3243
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3243,
    "end": 3244
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3244,
    "end": 3245
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3245,
    "end": 3246
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3246,
    "end": 3247
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3247,
    "end": 3251
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3251,
    "end": 3252
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3253,
    "end": 3256
  },
  {
    "type": "Identifier",
    "value": "r17",
    "start": 3257,
    "end": 3260
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3261,
    "end": 3262
  },
  {
    "type": "Identifier",
    "value": "foo17",
    "start": 3263,
    "end": 3268
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3268,
    "end": 3269
  },
  {
    "type": "Identifier",
    "value": "r17arg",
    "start": 3269,
    "end": 3275
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3275,
    "end": 3276
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3276,
    "end": 3277
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3279,
    "end": 3282
  },
  {
    "type": "Identifier",
    "value": "r18arg",
    "start": 3283,
    "end": 3289
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3290,
    "end": 3291
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3292,
    "end": 3293
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3293,
    "end": 3294
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3294,
    "end": 3295
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3296,
    "end": 3297
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3297,
    "end": 3298
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3298,
    "end": 3299
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3299,
    "end": 3300
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3300,
    "end": 3301
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3301,
    "end": 3302
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3303,
    "end": 3304
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3304,
    "end": 3305
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3306,
    "end": 3308
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3309,
    "end": 3310
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3310,
    "end": 3311
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3312,
    "end": 3314
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3315,
    "end": 3316
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3316,
    "end": 3319
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3319,
    "end": 3320
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3320,
    "end": 3321
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3321,
    "end": 3322
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3322,
    "end": 3326
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3326,
    "end": 3327
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3328,
    "end": 3331
  },
  {
    "type": "Identifier",
    "value": "r18",
    "start": 3332,
    "end": 3335
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3336,
    "end": 3337
  },
  {
    "type": "Identifier",
    "value": "foo18",
    "start": 3338,
    "end": 3343
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3343,
    "end": 3344
  },
  {
    "type": "Identifier",
    "value": "r18arg",
    "start": 3344,
    "end": 3350
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3350,
    "end": 3351
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3351,
    "end": 3352
  }
]
```
