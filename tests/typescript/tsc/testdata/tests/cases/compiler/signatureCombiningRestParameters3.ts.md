__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExtensionConfig",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 25
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Options",
              "optional": false,
              "typeAnnotation": null,
              "start": 26,
              "end": 33
            },
            "constraint": null,
            "default": {
              "type": "TSAnyKeyword",
              "start": 36,
              "end": 39
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 26,
            "end": 39
          }
        ],
        "start": 25,
        "end": 40
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "extendMarkSchema",
              "optional": false,
              "typeAnnotation": null,
              "start": 45,
              "end": 61
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "this",
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
                                  "name": "name",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 99,
                                  "end": 103
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 105,
                                    "end": 111
                                  },
                                  "start": 103,
                                  "end": 111
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 99,
                                "end": 112
                              },
                              {
                                "type": "TSPropertySignature",
                                "computed": false,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "options",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 123,
                                  "end": 130
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Options",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 132,
                                      "end": 139
                                    },
                                    "typeArguments": null,
                                    "start": 132,
                                    "end": 139
                                  },
                                  "start": 130,
                                  "end": 139
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 123,
                                "end": 140
                              }
                            ],
                            "start": 87,
                            "end": 150
                          },
                          "start": 85,
                          "end": 150
                        },
                        "start": 81,
                        "end": 150
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "extension",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Mark",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 171,
                              "end": 175
                            },
                            "typeArguments": null,
                            "start": 171,
                            "end": 175
                          },
                          "start": 169,
                          "end": 175
                        },
                        "start": 160,
                        "end": 175
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Record",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 188,
                          "end": 194
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSStringKeyword",
                              "start": 195,
                              "end": 201
                            },
                            {
                              "type": "TSAnyKeyword",
                              "start": 203,
                              "end": 206
                            }
                          ],
                          "start": 194,
                          "end": 207
                        },
                        "start": 188,
                        "end": 207
                      },
                      "start": 185,
                      "end": 207
                    },
                    "start": 71,
                    "end": 207
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 215,
                    "end": 219
                  }
                ],
                "start": 68,
                "end": 219
              },
              "start": 62,
              "end": 219
            },
            "accessibility": null,
            "static": false,
            "start": 45,
            "end": 220
          }
        ],
        "start": 41,
        "end": 222
      },
      "declare": false,
      "start": 0,
      "end": 222
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Extension",
        "optional": false,
        "typeAnnotation": null,
        "start": 238,
        "end": 247
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Options",
              "optional": false,
              "typeAnnotation": null,
              "start": 248,
              "end": 255
            },
            "constraint": null,
            "default": {
              "type": "TSAnyKeyword",
              "start": 258,
              "end": 261
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 248,
            "end": 261
          }
        ],
        "start": 247,
        "end": 262
      },
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
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 267,
              "end": 271
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 273,
                "end": 279
              },
              "start": 271,
              "end": 279
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
            "start": 267,
            "end": 280
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 283,
              "end": 287
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 289,
                "end": 295
              },
              "start": 287,
              "end": 295
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
            "start": 283,
            "end": 296
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "parent",
              "optional": false,
              "typeAnnotation": null,
              "start": 299,
              "end": 305
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Extension",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 307,
                      "end": 316
                    },
                    "typeArguments": null,
                    "start": 307,
                    "end": 316
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 319,
                    "end": 323
                  }
                ],
                "start": 307,
                "end": 323
              },
              "start": 305,
              "end": 323
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
            "start": 299,
            "end": 324
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "child",
              "optional": false,
              "typeAnnotation": null,
              "start": 327,
              "end": 332
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Extension",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 334,
                      "end": 343
                    },
                    "typeArguments": null,
                    "start": 334,
                    "end": 343
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 346,
                    "end": 350
                  }
                ],
                "start": 334,
                "end": 350
              },
              "start": 332,
              "end": 350
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
            "start": 327,
            "end": 351
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "options",
              "optional": false,
              "typeAnnotation": null,
              "start": 354,
              "end": 361
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Options",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 363,
                  "end": 370
                },
                "typeArguments": null,
                "start": 363,
                "end": 370
              },
              "start": 361,
              "end": 370
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
            "start": 354,
            "end": 371
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "config",
              "optional": false,
              "typeAnnotation": null,
              "start": 374,
              "end": 380
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ExtensionConfig",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 382,
                  "end": 397
                },
                "typeArguments": null,
                "start": 382,
                "end": 397
              },
              "start": 380,
              "end": 397
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
            "start": 374,
            "end": 398
          }
        ],
        "start": 263,
        "end": 400
      },
      "abstract": false,
      "declare": true,
      "start": 224,
      "end": 400
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Node",
        "optional": false,
        "typeAnnotation": null,
        "start": 416,
        "end": 420
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Options",
              "optional": false,
              "typeAnnotation": null,
              "start": 421,
              "end": 428
            },
            "constraint": null,
            "default": {
              "type": "TSAnyKeyword",
              "start": 431,
              "end": 434
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 421,
            "end": 434
          }
        ],
        "start": 420,
        "end": 435
      },
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
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 440,
              "end": 444
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 446,
                "end": 452
              },
              "start": 444,
              "end": 452
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
            "start": 440,
            "end": 453
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 456,
              "end": 460
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 462,
                "end": 468
              },
              "start": 460,
              "end": 468
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
            "start": 456,
            "end": 469
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "parent",
              "optional": false,
              "typeAnnotation": null,
              "start": 472,
              "end": 478
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Node",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 480,
                      "end": 484
                    },
                    "typeArguments": null,
                    "start": 480,
                    "end": 484
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 487,
                    "end": 491
                  }
                ],
                "start": 480,
                "end": 491
              },
              "start": 478,
              "end": 491
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
            "start": 472,
            "end": 492
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "child",
              "optional": false,
              "typeAnnotation": null,
              "start": 495,
              "end": 500
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Node",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 502,
                      "end": 506
                    },
                    "typeArguments": null,
                    "start": 502,
                    "end": 506
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 509,
                    "end": 513
                  }
                ],
                "start": 502,
                "end": 513
              },
              "start": 500,
              "end": 513
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
            "start": 495,
            "end": 514
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "options",
              "optional": false,
              "typeAnnotation": null,
              "start": 517,
              "end": 524
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Options",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 526,
                  "end": 533
                },
                "typeArguments": null,
                "start": 526,
                "end": 533
              },
              "start": 524,
              "end": 533
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
            "start": 517,
            "end": 534
          }
        ],
        "start": 436,
        "end": 536
      },
      "abstract": false,
      "declare": true,
      "start": 402,
      "end": 536
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NodeConfig",
        "optional": false,
        "typeAnnotation": null,
        "start": 548,
        "end": 558
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Options",
              "optional": false,
              "typeAnnotation": null,
              "start": 559,
              "end": 566
            },
            "constraint": null,
            "default": {
              "type": "TSAnyKeyword",
              "start": 569,
              "end": 572
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 559,
            "end": 572
          }
        ],
        "start": 558,
        "end": 573
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "extendMarkSchema",
              "optional": false,
              "typeAnnotation": null,
              "start": 578,
              "end": 594
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "this",
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
                                  "name": "name",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 632,
                                  "end": 636
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 638,
                                    "end": 644
                                  },
                                  "start": 636,
                                  "end": 644
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 632,
                                "end": 645
                              },
                              {
                                "type": "TSPropertySignature",
                                "computed": false,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "options",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 656,
                                  "end": 663
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Options",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 665,
                                      "end": 672
                                    },
                                    "typeArguments": null,
                                    "start": 665,
                                    "end": 672
                                  },
                                  "start": 663,
                                  "end": 672
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 656,
                                "end": 673
                              }
                            ],
                            "start": 620,
                            "end": 683
                          },
                          "start": 618,
                          "end": 683
                        },
                        "start": 614,
                        "end": 683
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "extension",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Node",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 704,
                              "end": 708
                            },
                            "typeArguments": null,
                            "start": 704,
                            "end": 708
                          },
                          "start": 702,
                          "end": 708
                        },
                        "start": 693,
                        "end": 708
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Record",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 721,
                          "end": 727
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSStringKeyword",
                              "start": 728,
                              "end": 734
                            },
                            {
                              "type": "TSAnyKeyword",
                              "start": 736,
                              "end": 739
                            }
                          ],
                          "start": 727,
                          "end": 740
                        },
                        "start": 721,
                        "end": 740
                      },
                      "start": 718,
                      "end": 740
                    },
                    "start": 604,
                    "end": 740
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 748,
                    "end": 752
                  }
                ],
                "start": 601,
                "end": 752
              },
              "start": 595,
              "end": 752
            },
            "accessibility": null,
            "static": false,
            "start": 578,
            "end": 753
          }
        ],
        "start": 574,
        "end": 755
      },
      "declare": false,
      "start": 538,
      "end": 755
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Mark",
        "optional": false,
        "typeAnnotation": null,
        "start": 771,
        "end": 775
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Options",
              "optional": false,
              "typeAnnotation": null,
              "start": 776,
              "end": 783
            },
            "constraint": null,
            "default": {
              "type": "TSAnyKeyword",
              "start": 786,
              "end": 789
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 776,
            "end": 789
          }
        ],
        "start": 775,
        "end": 790
      },
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
              "name": "options",
              "optional": false,
              "typeAnnotation": null,
              "start": 795,
              "end": 802
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Options",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 804,
                  "end": 811
                },
                "typeArguments": null,
                "start": 804,
                "end": 811
              },
              "start": 802,
              "end": 811
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
            "start": 795,
            "end": 812
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "config",
              "optional": false,
              "typeAnnotation": null,
              "start": 815,
              "end": 821
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MarkConfig",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 823,
                  "end": 833
                },
                "typeArguments": null,
                "start": 823,
                "end": 833
              },
              "start": 821,
              "end": 833
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
            "start": 815,
            "end": 834
          }
        ],
        "start": 791,
        "end": 836
      },
      "abstract": false,
      "declare": true,
      "start": 757,
      "end": 836
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MarkConfig",
        "optional": false,
        "typeAnnotation": null,
        "start": 848,
        "end": 858
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Options",
              "optional": false,
              "typeAnnotation": null,
              "start": 859,
              "end": 866
            },
            "constraint": null,
            "default": {
              "type": "TSAnyKeyword",
              "start": 869,
              "end": 872
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 859,
            "end": 872
          }
        ],
        "start": 858,
        "end": 873
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "extendMarkSchema",
              "optional": false,
              "typeAnnotation": null,
              "start": 878,
              "end": 894
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "this",
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
                                  "name": "name",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 932,
                                  "end": 936
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 938,
                                    "end": 944
                                  },
                                  "start": 936,
                                  "end": 944
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 932,
                                "end": 945
                              },
                              {
                                "type": "TSPropertySignature",
                                "computed": false,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "options",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 956,
                                  "end": 963
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Options",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 965,
                                      "end": 972
                                    },
                                    "typeArguments": null,
                                    "start": 965,
                                    "end": 972
                                  },
                                  "start": 963,
                                  "end": 972
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 956,
                                "end": 973
                              }
                            ],
                            "start": 920,
                            "end": 983
                          },
                          "start": 918,
                          "end": 983
                        },
                        "start": 914,
                        "end": 983
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "extension",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Mark",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1004,
                              "end": 1008
                            },
                            "typeArguments": null,
                            "start": 1004,
                            "end": 1008
                          },
                          "start": 1002,
                          "end": 1008
                        },
                        "start": 993,
                        "end": 1008
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Record",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1021,
                          "end": 1027
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSStringKeyword",
                              "start": 1028,
                              "end": 1034
                            },
                            {
                              "type": "TSAnyKeyword",
                              "start": 1036,
                              "end": 1039
                            }
                          ],
                          "start": 1027,
                          "end": 1040
                        },
                        "start": 1021,
                        "end": 1040
                      },
                      "start": 1018,
                      "end": 1040
                    },
                    "start": 904,
                    "end": 1040
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 1048,
                    "end": 1052
                  }
                ],
                "start": 901,
                "end": 1052
              },
              "start": 895,
              "end": 1052
            },
            "accessibility": null,
            "static": false,
            "start": 878,
            "end": 1053
          }
        ],
        "start": 874,
        "end": 1055
      },
      "declare": false,
      "start": 838,
      "end": 1055
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AnyConfig",
        "optional": false,
        "typeAnnotation": null,
        "start": 1062,
        "end": 1071
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ExtensionConfig",
              "optional": false,
              "typeAnnotation": null,
              "start": 1074,
              "end": 1089
            },
            "typeArguments": null,
            "start": 1074,
            "end": 1089
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "NodeConfig",
              "optional": false,
              "typeAnnotation": null,
              "start": 1092,
              "end": 1102
            },
            "typeArguments": null,
            "start": 1092,
            "end": 1102
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "MarkConfig",
              "optional": false,
              "typeAnnotation": null,
              "start": 1105,
              "end": 1115
            },
            "typeArguments": null,
            "start": 1105,
            "end": 1115
          }
        ],
        "start": 1074,
        "end": 1115
      },
      "declare": false,
      "start": 1057,
      "end": 1116
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AnyExtension",
        "optional": false,
        "typeAnnotation": null,
        "start": 1122,
        "end": 1134
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Extension",
              "optional": false,
              "typeAnnotation": null,
              "start": 1137,
              "end": 1146
            },
            "typeArguments": null,
            "start": 1137,
            "end": 1146
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Node",
              "optional": false,
              "typeAnnotation": null,
              "start": 1149,
              "end": 1153
            },
            "typeArguments": null,
            "start": 1149,
            "end": 1153
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Mark",
              "optional": false,
              "typeAnnotation": null,
              "start": 1156,
              "end": 1160
            },
            "typeArguments": null,
            "start": 1156,
            "end": 1160
          }
        ],
        "start": 1137,
        "end": 1160
      },
      "declare": false,
      "start": 1117,
      "end": 1161
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AnyExtension",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1180,
                  "end": 1192
                },
                "typeArguments": null,
                "start": 1180,
                "end": 1192
              },
              "start": 1178,
              "end": 1192
            },
            "start": 1177,
            "end": 1192
          },
          "init": null,
          "definite": false,
          "start": 1177,
          "end": 1192
        }
      ],
      "declare": true,
      "start": 1163,
      "end": 1193
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RemoveThis",
        "optional": false,
        "typeAnnotation": null,
        "start": 1200,
        "end": 1210
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
              "start": 1211,
              "end": 1212
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1211,
            "end": 1212
          }
        ],
        "start": 1210,
        "end": 1213
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 1216,
            "end": 1217
          },
          "typeArguments": null,
          "start": 1216,
          "end": 1217
        },
        "extendsType": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "args",
                "optional": false,
                "typeAnnotation": null,
                "start": 1230,
                "end": 1234
              },
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 1236,
                  "end": 1239
                },
                "start": 1234,
                "end": 1239
              },
              "value": null,
              "start": 1227,
              "end": 1239
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1244,
              "end": 1247
            },
            "start": 1241,
            "end": 1247
          },
          "start": 1226,
          "end": 1247
        },
        "trueType": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "args",
                "optional": false,
                "typeAnnotation": null,
                "start": 1256,
                "end": 1260
              },
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Parameters",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1262,
                    "end": 1272
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1273,
                          "end": 1274
                        },
                        "typeArguments": null,
                        "start": 1273,
                        "end": 1274
                      }
                    ],
                    "start": 1272,
                    "end": 1275
                  },
                  "start": 1262,
                  "end": 1275
                },
                "start": 1260,
                "end": 1275
              },
              "value": null,
              "start": 1253,
              "end": 1275
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ReturnType",
                "optional": false,
                "typeAnnotation": null,
                "start": 1280,
                "end": 1290
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1291,
                      "end": 1292
                    },
                    "typeArguments": null,
                    "start": 1291,
                    "end": 1292
                  }
                ],
                "start": 1290,
                "end": 1293
              },
              "start": 1280,
              "end": 1293
            },
            "start": 1277,
            "end": 1293
          },
          "start": 1252,
          "end": 1293
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 1298,
            "end": 1299
          },
          "typeArguments": null,
          "start": 1298,
          "end": 1299
        },
        "start": 1216,
        "end": 1299
      },
      "declare": false,
      "start": 1195,
      "end": 1300
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getExtensionField",
        "optional": false,
        "typeAnnotation": null,
        "start": 1319,
        "end": 1336
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 1337,
              "end": 1338
            },
            "constraint": null,
            "default": {
              "type": "TSAnyKeyword",
              "start": 1341,
              "end": 1344
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 1337,
            "end": 1344
          }
        ],
        "start": 1336,
        "end": 1345
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "extension",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "AnyExtension",
                "optional": false,
                "typeAnnotation": null,
                "start": 1360,
                "end": 1372
              },
              "typeArguments": null,
              "start": 1360,
              "end": 1372
            },
            "start": 1358,
            "end": 1372
          },
          "start": 1349,
          "end": 1372
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "field",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1383,
              "end": 1389
            },
            "start": 1381,
            "end": 1389
          },
          "start": 1376,
          "end": 1389
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "RemoveThis",
            "optional": false,
            "typeAnnotation": null,
            "start": 1394,
            "end": 1404
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1405,
                  "end": 1406
                },
                "typeArguments": null,
                "start": 1405,
                "end": 1406
              }
            ],
            "start": 1404,
            "end": 1407
          },
          "start": 1394,
          "end": 1407
        },
        "start": 1392,
        "end": 1407
      },
      "body": null,
      "expression": false,
      "start": 1302,
      "end": 1408
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "extendMarkSchema",
            "optional": false,
            "typeAnnotation": null,
            "start": 1416,
            "end": 1432
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "getExtensionField",
              "optional": false,
              "typeAnnotation": null,
              "start": 1435,
              "end": 1452
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AnyConfig",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1453,
                      "end": 1462
                    },
                    "typeArguments": null,
                    "start": 1453,
                    "end": 1462
                  },
                  "indexType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "extendMarkSchema",
                      "raw": "\"extendMarkSchema\"",
                      "start": 1463,
                      "end": 1481
                    },
                    "start": 1463,
                    "end": 1481
                  },
                  "start": 1453,
                  "end": 1482
                }
              ],
              "start": 1452,
              "end": 1483
            },
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 1487,
                "end": 1488
              },
              {
                "type": "Literal",
                "value": "extendMarkSchema",
                "raw": "\"extendMarkSchema\"",
                "start": 1492,
                "end": 1510
              }
            ],
            "optional": false,
            "start": 1435,
            "end": 1513
          },
          "definite": false,
          "start": 1416,
          "end": 1513
        }
      ],
      "declare": false,
      "start": 1410,
      "end": 1514
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "extension",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Mark",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1541,
                  "end": 1545
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 1546,
                      "end": 1549
                    }
                  ],
                  "start": 1545,
                  "end": 1550
                },
                "start": 1541,
                "end": 1550
              },
              "start": 1539,
              "end": 1550
            },
            "start": 1530,
            "end": 1550
          },
          "init": null,
          "definite": false,
          "start": 1530,
          "end": 1550
        }
      ],
      "declare": true,
      "start": 1516,
      "end": 1551
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "extendMarkSchema",
        "optional": false,
        "typeAnnotation": null,
        "start": 1557,
        "end": 1573
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "extendMarkSchema",
                "optional": false,
                "typeAnnotation": null,
                "start": 1579,
                "end": 1595
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "extension",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1596,
                  "end": 1605
                }
              ],
              "optional": false,
              "start": 1579,
              "end": 1606
            },
            "directive": null,
            "start": 1579,
            "end": 1607
          }
        ],
        "start": 1575,
        "end": 1618
      },
      "alternate": null,
      "start": 1553,
      "end": 1618
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1620,
      "end": 1630
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 1630
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "ExtensionConfig",
    "start": 10,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "Options",
    "start": 26,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 34,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 36,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "extendMarkSchema",
    "start": 45,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 81,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 99,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 105,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 123,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "Options",
    "start": 132,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "extension",
    "start": 160,
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
    "value": "Mark",
    "start": 171,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 185,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 188,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 194,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 195,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 203,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 213,
    "end": 214
  },
  {
    "type": "Null",
    "value": "null",
    "start": 215,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 221,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 224,
    "end": 231
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 232,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "Extension",
    "start": 238,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 247,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "Options",
    "start": 248,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 256,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 258,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 263,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 267,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 271,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 273,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 279,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 283,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 287,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 289,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 295,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "parent",
    "start": 299,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 305,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "Extension",
    "start": 307,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 317,
    "end": 318
  },
  {
    "type": "Null",
    "value": "null",
    "start": 319,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 323,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "child",
    "start": 327,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 332,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "Extension",
    "start": 334,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 344,
    "end": 345
  },
  {
    "type": "Null",
    "value": "null",
    "start": 346,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 350,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 354,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 361,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "Options",
    "start": 363,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 370,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "config",
    "start": 374,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 380,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "ExtensionConfig",
    "start": 382,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 397,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 399,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 402,
    "end": 409
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 410,
    "end": 415
  },
  {
    "type": "Identifier",
    "value": "Node",
    "start": 416,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 420,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "Options",
    "start": 421,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 429,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 431,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 436,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 440,
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
    "value": "string",
    "start": 446,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 452,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 456,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 460,
    "end": 461
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 462,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 468,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "parent",
    "start": 472,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 478,
    "end": 479
  },
  {
    "type": "Identifier",
    "value": "Node",
    "start": 480,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 485,
    "end": 486
  },
  {
    "type": "Null",
    "value": "null",
    "start": 487,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 491,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "child",
    "start": 495,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 500,
    "end": 501
  },
  {
    "type": "Identifier",
    "value": "Node",
    "start": 502,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 507,
    "end": 508
  },
  {
    "type": "Null",
    "value": "null",
    "start": 509,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 513,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 517,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 524,
    "end": 525
  },
  {
    "type": "Identifier",
    "value": "Options",
    "start": 526,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 533,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 535,
    "end": 536
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 538,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "NodeConfig",
    "start": 548,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 558,
    "end": 559
  },
  {
    "type": "Identifier",
    "value": "Options",
    "start": 559,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 567,
    "end": 568
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 569,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 572,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 574,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "extendMarkSchema",
    "start": 578,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 594,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 595,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 601,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 603,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 604,
    "end": 605
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 614,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 618,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 620,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 632,
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
    "value": "string",
    "start": 638,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 644,
    "end": 645
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 656,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 663,
    "end": 664
  },
  {
    "type": "Identifier",
    "value": "Options",
    "start": 665,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 672,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 682,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 683,
    "end": 684
  },
  {
    "type": "Identifier",
    "value": "extension",
    "start": 693,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 702,
    "end": 703
  },
  {
    "type": "Identifier",
    "value": "Node",
    "start": 704,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 708,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 716,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 718,
    "end": 720
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 721,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 727,
    "end": 728
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 728,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 734,
    "end": 735
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 736,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 739,
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
    "value": "|",
    "start": 746,
    "end": 747
  },
  {
    "type": "Null",
    "value": "null",
    "start": 748,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 752,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 754,
    "end": 755
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 757,
    "end": 764
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 765,
    "end": 770
  },
  {
    "type": "Identifier",
    "value": "Mark",
    "start": 771,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 775,
    "end": 776
  },
  {
    "type": "Identifier",
    "value": "Options",
    "start": 776,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 784,
    "end": 785
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 786,
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
    "value": "{",
    "start": 791,
    "end": 792
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 795,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 802,
    "end": 803
  },
  {
    "type": "Identifier",
    "value": "Options",
    "start": 804,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 811,
    "end": 812
  },
  {
    "type": "Identifier",
    "value": "config",
    "start": 815,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 821,
    "end": 822
  },
  {
    "type": "Identifier",
    "value": "MarkConfig",
    "start": 823,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 833,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 835,
    "end": 836
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 838,
    "end": 847
  },
  {
    "type": "Identifier",
    "value": "MarkConfig",
    "start": 848,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 858,
    "end": 859
  },
  {
    "type": "Identifier",
    "value": "Options",
    "start": 859,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 867,
    "end": 868
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 869,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "extendMarkSchema",
    "start": 878,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 894,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 895,
    "end": 896
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 901,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 903,
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
    "value": "this",
    "start": 914,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 918,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 920,
    "end": 921
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 932,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 936,
    "end": 937
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 938,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 944,
    "end": 945
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 956,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 963,
    "end": 964
  },
  {
    "type": "Identifier",
    "value": "Options",
    "start": 965,
    "end": 972
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 972,
    "end": 973
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 982,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 983,
    "end": 984
  },
  {
    "type": "Identifier",
    "value": "extension",
    "start": 993,
    "end": 1002
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Identifier",
    "value": "Mark",
    "start": 1004,
    "end": 1008
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1018,
    "end": 1020
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 1021,
    "end": 1027
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1028,
    "end": 1034
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1036,
    "end": 1039
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1048,
    "end": 1052
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1057,
    "end": 1061
  },
  {
    "type": "Identifier",
    "value": "AnyConfig",
    "start": 1062,
    "end": 1071
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1072,
    "end": 1073
  },
  {
    "type": "Identifier",
    "value": "ExtensionConfig",
    "start": 1074,
    "end": 1089
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Identifier",
    "value": "NodeConfig",
    "start": 1092,
    "end": 1102
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1103,
    "end": 1104
  },
  {
    "type": "Identifier",
    "value": "MarkConfig",
    "start": 1105,
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
    "value": "type",
    "start": 1117,
    "end": 1121
  },
  {
    "type": "Identifier",
    "value": "AnyExtension",
    "start": 1122,
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
    "value": "Extension",
    "start": 1137,
    "end": 1146
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1147,
    "end": 1148
  },
  {
    "type": "Identifier",
    "value": "Node",
    "start": 1149,
    "end": 1153
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1154,
    "end": 1155
  },
  {
    "type": "Identifier",
    "value": "Mark",
    "start": 1156,
    "end": 1160
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1160,
    "end": 1161
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1163,
    "end": 1170
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1171,
    "end": 1176
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Identifier",
    "value": "AnyExtension",
    "start": 1180,
    "end": 1192
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1192,
    "end": 1193
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1195,
    "end": 1199
  },
  {
    "type": "Identifier",
    "value": "RemoveThis",
    "start": 1200,
    "end": 1210
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1210,
    "end": 1211
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1212,
    "end": 1213
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1214,
    "end": 1215
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1216,
    "end": 1217
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1218,
    "end": 1225
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1226,
    "end": 1227
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1227,
    "end": 1230
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 1230,
    "end": 1234
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1234,
    "end": 1235
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1236,
    "end": 1239
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1239,
    "end": 1240
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1241,
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
    "value": "?",
    "start": 1250,
    "end": 1251
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1252,
    "end": 1253
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1253,
    "end": 1256
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 1256,
    "end": 1260
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1260,
    "end": 1261
  },
  {
    "type": "Identifier",
    "value": "Parameters",
    "start": 1262,
    "end": 1272
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1272,
    "end": 1273
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1273,
    "end": 1274
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "=>",
    "start": 1277,
    "end": 1279
  },
  {
    "type": "Identifier",
    "value": "ReturnType",
    "start": 1280,
    "end": 1290
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1290,
    "end": 1291
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1291,
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
    "value": ":",
    "start": 1296,
    "end": 1297
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1298,
    "end": 1299
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1299,
    "end": 1300
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1302,
    "end": 1309
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1310,
    "end": 1318
  },
  {
    "type": "Identifier",
    "value": "getExtensionField",
    "start": 1319,
    "end": 1336
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1336,
    "end": 1337
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1337,
    "end": 1338
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1339,
    "end": 1340
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1341,
    "end": 1344
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1344,
    "end": 1345
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1345,
    "end": 1346
  },
  {
    "type": "Identifier",
    "value": "extension",
    "start": 1349,
    "end": 1358
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1358,
    "end": 1359
  },
  {
    "type": "Identifier",
    "value": "AnyExtension",
    "start": 1360,
    "end": 1372
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1372,
    "end": 1373
  },
  {
    "type": "Identifier",
    "value": "field",
    "start": 1376,
    "end": 1381
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1381,
    "end": 1382
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1383,
    "end": 1389
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1389,
    "end": 1390
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1391,
    "end": 1392
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1392,
    "end": 1393
  },
  {
    "type": "Identifier",
    "value": "RemoveThis",
    "start": 1394,
    "end": 1404
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1404,
    "end": 1405
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": ";",
    "start": 1407,
    "end": 1408
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1410,
    "end": 1415
  },
  {
    "type": "Identifier",
    "value": "extendMarkSchema",
    "start": 1416,
    "end": 1432
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1433,
    "end": 1434
  },
  {
    "type": "Identifier",
    "value": "getExtensionField",
    "start": 1435,
    "end": 1452
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1452,
    "end": 1453
  },
  {
    "type": "Identifier",
    "value": "AnyConfig",
    "start": 1453,
    "end": 1462
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1462,
    "end": 1463
  },
  {
    "type": "String",
    "value": "\"extendMarkSchema\"",
    "start": 1463,
    "end": 1481
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1481,
    "end": 1482
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1482,
    "end": 1483
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1483,
    "end": 1484
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1487,
    "end": 1488
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1488,
    "end": 1489
  },
  {
    "type": "String",
    "value": "\"extendMarkSchema\"",
    "start": 1492,
    "end": 1510
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1510,
    "end": 1511
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1512,
    "end": 1513
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1513,
    "end": 1514
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1516,
    "end": 1523
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1524,
    "end": 1529
  },
  {
    "type": "Identifier",
    "value": "extension",
    "start": 1530,
    "end": 1539
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1539,
    "end": 1540
  },
  {
    "type": "Identifier",
    "value": "Mark",
    "start": 1541,
    "end": 1545
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1545,
    "end": 1546
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1546,
    "end": 1549
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1549,
    "end": 1550
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1550,
    "end": 1551
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1553,
    "end": 1555
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1556,
    "end": 1557
  },
  {
    "type": "Identifier",
    "value": "extendMarkSchema",
    "start": 1557,
    "end": 1573
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1573,
    "end": 1574
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1575,
    "end": 1576
  },
  {
    "type": "Identifier",
    "value": "extendMarkSchema",
    "start": 1579,
    "end": 1595
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1595,
    "end": 1596
  },
  {
    "type": "Identifier",
    "value": "extension",
    "start": 1596,
    "end": 1605
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1605,
    "end": 1606
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1606,
    "end": 1607
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1617,
    "end": 1618
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1620,
    "end": 1626
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1627,
    "end": 1628
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1628,
    "end": 1629
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1629,
    "end": 1630
  }
]
```
