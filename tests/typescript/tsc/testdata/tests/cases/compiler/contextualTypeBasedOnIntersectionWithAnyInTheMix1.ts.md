__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ComponentType",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 18
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 19,
              "end": 20
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 19,
            "end": 20
          }
        ],
        "start": 18,
        "end": 21
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 28,
                  "end": 29
                },
                "typeArguments": null,
                "start": 28,
                "end": 29
              },
              "start": 26,
              "end": 29
            },
            "start": 25,
            "end": 29
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 34,
            "end": 37
          },
          "start": 31,
          "end": 37
        },
        "start": 24,
        "end": 37
      },
      "declare": false,
      "start": 0,
      "end": 38
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ComponentProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 44,
        "end": 58
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 59,
              "end": 60
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 59,
            "end": 60
          }
        ],
        "start": 58,
        "end": 61
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 64,
            "end": 65
          },
          "typeArguments": null,
          "start": 64,
          "end": 65
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ComponentType",
            "optional": false,
            "typeAnnotation": null,
            "start": 74,
            "end": 87
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 94,
                    "end": 95
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 94,
                  "end": 95
                },
                "start": 88,
                "end": 95
              }
            ],
            "start": 87,
            "end": 96
          },
          "start": 74,
          "end": 96
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 99,
            "end": 100
          },
          "typeArguments": null,
          "start": 99,
          "end": 100
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 103,
          "end": 108
        },
        "start": 64,
        "end": 108
      },
      "declare": false,
      "start": 39,
      "end": 109
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Attrs",
        "optional": false,
        "typeAnnotation": null,
        "start": 116,
        "end": 121
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 122,
              "end": 123
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 122,
            "end": 123
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 125,
              "end": 126
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null,
                "start": 135,
                "end": 142
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 143,
                      "end": 144
                    },
                    "typeArguments": null,
                    "start": 143,
                    "end": 144
                  }
                ],
                "start": 142,
                "end": 145
              },
              "start": 135,
              "end": 145
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 125,
            "end": 145
          }
        ],
        "start": 121,
        "end": 146
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null,
          "start": 149,
          "end": 150
        },
        "typeArguments": null,
        "start": 149,
        "end": 150
      },
      "declare": false,
      "start": 111,
      "end": 151
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StyledFunction",
        "optional": false,
        "typeAnnotation": null,
        "start": 163,
        "end": 177
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 181,
              "end": 182
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ComponentType",
                "optional": false,
                "typeAnnotation": null,
                "start": 191,
                "end": 204
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 205,
                    "end": 208
                  }
                ],
                "start": 204,
                "end": 209
              },
              "start": 191,
              "end": 209
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 181,
            "end": 209
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "O",
              "optional": false,
              "typeAnnotation": null,
              "start": 213,
              "end": 214
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 223,
              "end": 229
            },
            "default": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 232,
              "end": 234
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 213,
            "end": 234
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 238,
              "end": 239
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 254,
                "end": 257
              },
              "start": 248,
              "end": 257
            },
            "default": {
              "type": "TSNeverKeyword",
              "start": 260,
              "end": 265
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 238,
            "end": 265
          }
        ],
        "start": 177,
        "end": 268
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "attrs",
              "optional": false,
              "typeAnnotation": null,
              "start": 273,
              "end": 278
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "start": 284,
                    "end": 285
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 284,
                  "end": 285
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "NewA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 291,
                    "end": 295
                  },
                  "constraint": {
                    "type": "TSIntersectionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Partial",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 304,
                          "end": 311
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSIntersectionType",
                              "types": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ComponentProps",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 312,
                                    "end": 326
                                  },
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "params": [
                                      {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "C",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 327,
                                          "end": 328
                                        },
                                        "typeArguments": null,
                                        "start": 327,
                                        "end": 328
                                      }
                                    ],
                                    "start": 326,
                                    "end": 329
                                  },
                                  "start": 312,
                                  "end": 329
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 332,
                                    "end": 333
                                  },
                                  "typeArguments": null,
                                  "start": 332,
                                  "end": 333
                                }
                              ],
                              "start": 312,
                              "end": 333
                            }
                          ],
                          "start": 311,
                          "end": 334
                        },
                        "start": 304,
                        "end": 334
                      },
                      {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSIndexSignature",
                            "parameters": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "others",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 354,
                                    "end": 360
                                  },
                                  "start": 352,
                                  "end": 360
                                },
                                "start": 346,
                                "end": 360
                              }
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSAnyKeyword",
                                "start": 363,
                                "end": 366
                              },
                              "start": 361,
                              "end": 366
                            },
                            "readonly": false,
                            "static": false,
                            "accessibility": null,
                            "start": 345,
                            "end": 367
                          }
                        ],
                        "start": 337,
                        "end": 373
                      }
                    ],
                    "start": 304,
                    "end": 373
                  },
                  "default": {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "start": 376,
                    "end": 378
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 291,
                  "end": 378
                }
              ],
              "start": 278,
              "end": 383
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "attrs",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Attrs",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 396,
                      "end": 401
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSIntersectionType",
                          "types": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ComponentProps",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 402,
                                "end": 416
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "C",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 417,
                                      "end": 418
                                    },
                                    "typeArguments": null,
                                    "start": 417,
                                    "end": 418
                                  }
                                ],
                                "start": 416,
                                "end": 419
                              },
                              "start": 402,
                              "end": 419
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 422,
                                "end": 423
                              },
                              "typeArguments": null,
                              "start": 422,
                              "end": 423
                            }
                          ],
                          "start": 402,
                          "end": 423
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "NewA",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 425,
                            "end": 429
                          },
                          "typeArguments": null,
                          "start": 425,
                          "end": 429
                        }
                      ],
                      "start": 401,
                      "end": 430
                    },
                    "start": 396,
                    "end": 430
                  },
                  "start": 394,
                  "end": 430
                },
                "start": 389,
                "end": 430
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "StyledFunction",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 437,
                  "end": 451
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 452,
                        "end": 453
                      },
                      "typeArguments": null,
                      "start": 452,
                      "end": 453
                    },
                    {
                      "type": "TSIntersectionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "O",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 455,
                            "end": 456
                          },
                          "typeArguments": null,
                          "start": 455,
                          "end": 456
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "NewA",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 459,
                            "end": 463
                          },
                          "typeArguments": null,
                          "start": 459,
                          "end": 463
                        }
                      ],
                      "start": 455,
                      "end": 463
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 465,
                            "end": 466
                          },
                          "typeArguments": null,
                          "start": 465,
                          "end": 466
                        },
                        {
                          "type": "TSTypeOperator",
                          "operator": "keyof",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "NewA",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 475,
                              "end": 479
                            },
                            "typeArguments": null,
                            "start": 475,
                            "end": 479
                          },
                          "start": 469,
                          "end": 479
                        }
                      ],
                      "start": 465,
                      "end": 479
                    }
                  ],
                  "start": 451,
                  "end": 480
                },
                "start": 437,
                "end": 480
              },
              "start": 435,
              "end": 480
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 273,
            "end": 481
          }
        ],
        "start": 269,
        "end": 483
      },
      "declare": false,
      "start": 153,
      "end": 483
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StyledInterface",
        "optional": false,
        "typeAnnotation": null,
        "start": 495,
        "end": 510
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
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
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 516,
                    "end": 517
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ComponentType",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 526,
                      "end": 539
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "start": 540,
                          "end": 543
                        }
                      ],
                      "start": 539,
                      "end": 544
                    },
                    "start": 526,
                    "end": 544
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 516,
                  "end": 544
                }
              ],
              "start": 515,
              "end": 545
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "component",
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
                      "start": 557,
                      "end": 558
                    },
                    "typeArguments": null,
                    "start": 557,
                    "end": 558
                  },
                  "start": 555,
                  "end": 558
                },
                "start": 546,
                "end": 558
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "StyledFunction",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 561,
                  "end": 575
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 576,
                        "end": 577
                      },
                      "typeArguments": null,
                      "start": 576,
                      "end": 577
                    }
                  ],
                  "start": 575,
                  "end": 578
                },
                "start": 561,
                "end": 578
              },
              "start": 559,
              "end": 578
            },
            "start": 515,
            "end": 579
          }
        ],
        "start": 511,
        "end": 581
      },
      "declare": false,
      "start": 485,
      "end": 581
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
            "name": "styled",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "StyledInterface",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 605,
                  "end": 620
                },
                "typeArguments": null,
                "start": 605,
                "end": 620
              },
              "start": 603,
              "end": 620
            },
            "start": 597,
            "end": 620
          },
          "init": null,
          "definite": false,
          "start": 597,
          "end": 620
        }
      ],
      "declare": true,
      "start": 583,
      "end": 621
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BaseProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 633,
        "end": 642
      },
      "typeParameters": null,
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
              "name": "as",
              "optional": false,
              "typeAnnotation": null,
              "start": 647,
              "end": 649
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "select",
                      "raw": "\"select\"",
                      "start": 652,
                      "end": 660
                    },
                    "start": 652,
                    "end": 660
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "input",
                      "raw": "\"input\"",
                      "start": 663,
                      "end": 670
                    },
                    "start": 663,
                    "end": 670
                  }
                ],
                "start": 652,
                "end": 670
              },
              "start": 650,
              "end": 670
            },
            "accessibility": null,
            "static": false,
            "start": 647,
            "end": 671
          }
        ],
        "start": 643,
        "end": 673
      },
      "declare": false,
      "start": 623,
      "end": 673
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
            "name": "Flex",
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
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "BaseProps",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 703,
                          "end": 712
                        },
                        "typeArguments": null,
                        "start": 703,
                        "end": 712
                      },
                      "start": 701,
                      "end": 712
                    },
                    "start": 696,
                    "end": 712
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNullKeyword",
                    "start": 717,
                    "end": 721
                  },
                  "start": 714,
                  "end": 721
                },
                "start": 695,
                "end": 721
              },
              "start": 693,
              "end": 721
            },
            "start": 689,
            "end": 721
          },
          "init": null,
          "definite": false,
          "start": 689,
          "end": 721
        }
      ],
      "declare": true,
      "start": 675,
      "end": 722
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "StyledSelect",
              "optional": false,
              "typeAnnotation": null,
              "start": 737,
              "end": 749
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "styled",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 752,
                    "end": 758
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Flex",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 759,
                      "end": 763
                    }
                  ],
                  "optional": false,
                  "start": 752,
                  "end": 764
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "attrs",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 765,
                  "end": 770
                },
                "optional": false,
                "computed": false,
                "start": 752,
                "end": 770
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "as",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 775,
                        "end": 777
                      },
                      "value": {
                        "type": "Literal",
                        "value": "select",
                        "raw": "\"select\"",
                        "start": 779,
                        "end": 787
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 775,
                      "end": 787
                    }
                  ],
                  "start": 771,
                  "end": 790
                }
              ],
              "optional": false,
              "start": 752,
              "end": 791
            },
            "definite": false,
            "start": 737,
            "end": 791
          }
        ],
        "declare": false,
        "start": 731,
        "end": 792
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 724,
      "end": 792
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 792
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 0,
    "end": 4
  },
  {
    "type": "Identifier",
    "value": "ComponentType",
    "start": 5,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 24,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 31,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 34,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 39,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "ComponentProps",
    "start": 44,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 64,
    "end": 65
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 66,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "ComponentType",
    "start": 74,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 88,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 103,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 111,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "Attrs",
    "start": 116,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 125,
    "end": 126
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 127,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 135,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 150,
    "end": 151
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 153,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "StyledFunction",
    "start": 163,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 181,
    "end": 182
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 183,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "ComponentType",
    "start": 191,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 204,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 205,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 213,
    "end": 214
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 215,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 223,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 234,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 238,
    "end": 239
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 240,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 248,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 254,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 258,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 260,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 269,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "attrs",
    "start": 273,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 285,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "NewA",
    "start": 291,
    "end": 295
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 296,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 304,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 311,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "ComponentProps",
    "start": 312,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 326,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 330,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 345,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "others",
    "start": 346,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 352,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 354,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 360,
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
    "value": "any",
    "start": 363,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 378,
    "end": 379
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
    "value": "attrs",
    "start": 389,
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
    "value": "Attrs",
    "start": 396,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 401,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "ComponentProps",
    "start": 402,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 416,
    "end": 417
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 420,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "U",
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
    "value": "NewA",
    "start": 425,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 429,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 435,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "StyledFunction",
    "start": 437,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 451,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 452,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 453,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 457,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "NewA",
    "start": 459,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 463,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 465,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 467,
    "end": 468
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 469,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "NewA",
    "start": 475,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 479,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 482,
    "end": 483
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 485,
    "end": 494
  },
  {
    "type": "Identifier",
    "value": "StyledInterface",
    "start": 495,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 511,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 515,
    "end": 516
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 516,
    "end": 517
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 518,
    "end": 525
  },
  {
    "type": "Identifier",
    "value": "ComponentType",
    "start": 526,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 539,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 540,
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
    "value": ">",
    "start": 544,
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
    "value": "component",
    "start": 546,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 555,
    "end": 556
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 557,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 558,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 559,
    "end": 560
  },
  {
    "type": "Identifier",
    "value": "StyledFunction",
    "start": 561,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 575,
    "end": 576
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 576,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Punctuator",
    "value": "}",
    "start": 580,
    "end": 581
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 583,
    "end": 590
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 591,
    "end": 596
  },
  {
    "type": "Identifier",
    "value": "styled",
    "start": 597,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 603,
    "end": 604
  },
  {
    "type": "Identifier",
    "value": "StyledInterface",
    "start": 605,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 620,
    "end": 621
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 623,
    "end": 632
  },
  {
    "type": "Identifier",
    "value": "BaseProps",
    "start": 633,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 643,
    "end": 644
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 647,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": "?",
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
    "type": "String",
    "value": "\"select\"",
    "start": 652,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 661,
    "end": 662
  },
  {
    "type": "String",
    "value": "\"input\"",
    "start": 663,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 670,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 672,
    "end": 673
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 675,
    "end": 682
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 683,
    "end": 688
  },
  {
    "type": "Identifier",
    "value": "Flex",
    "start": 689,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 693,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 695,
    "end": 696
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 696,
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
    "value": "BaseProps",
    "start": 703,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 712,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 714,
    "end": 716
  },
  {
    "type": "Null",
    "value": "null",
    "start": 717,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 721,
    "end": 722
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 724,
    "end": 730
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 731,
    "end": 736
  },
  {
    "type": "Identifier",
    "value": "StyledSelect",
    "start": 737,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 750,
    "end": 751
  },
  {
    "type": "Identifier",
    "value": "styled",
    "start": 752,
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
    "value": "Flex",
    "start": 759,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 763,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 764,
    "end": 765
  },
  {
    "type": "Identifier",
    "value": "attrs",
    "start": 765,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 770,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 771,
    "end": 772
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 775,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 777,
    "end": 778
  },
  {
    "type": "String",
    "value": "\"select\"",
    "start": 779,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 787,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 789,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 790,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 791,
    "end": 792
  }
]
```
