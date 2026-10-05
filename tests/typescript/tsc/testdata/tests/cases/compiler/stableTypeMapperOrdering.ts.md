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
        "name": "Endpoint",
        "optional": false,
        "typeAnnotation": null,
        "start": 67,
        "end": 75
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Name",
              "optional": false,
              "typeAnnotation": null,
              "start": 76,
              "end": 80
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 76,
            "end": 80
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Params",
              "optional": false,
              "typeAnnotation": null,
              "start": 82,
              "end": 88
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 82,
            "end": 88
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Middleware",
              "optional": false,
              "typeAnnotation": null,
              "start": 90,
              "end": 100
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 90,
            "end": 100
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Services",
              "optional": false,
              "typeAnnotation": null,
              "start": 102,
              "end": 110
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 102,
            "end": 110
          }
        ],
        "start": 75,
        "end": 111
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 125,
              "end": 129
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 131,
                  "end": 135
                },
                "typeArguments": null,
                "start": 131,
                "end": 135
              },
              "start": 129,
              "end": 135
            },
            "accessibility": null,
            "static": false,
            "start": 116,
            "end": 136
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "params",
              "optional": false,
              "typeAnnotation": null,
              "start": 148,
              "end": 154
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Params",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 156,
                  "end": 162
                },
                "typeArguments": null,
                "start": 156,
                "end": 162
              },
              "start": 154,
              "end": 162
            },
            "accessibility": null,
            "static": false,
            "start": 139,
            "end": 163
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "middleware",
              "optional": false,
              "typeAnnotation": null,
              "start": 175,
              "end": 185
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Middleware",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 187,
                  "end": 197
                },
                "typeArguments": null,
                "start": 187,
                "end": 197
              },
              "start": 185,
              "end": 197
            },
            "accessibility": null,
            "static": false,
            "start": 166,
            "end": 198
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "services",
              "optional": false,
              "typeAnnotation": null,
              "start": 210,
              "end": 218
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Services",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 220,
                  "end": 228
                },
                "typeArguments": null,
                "start": 220,
                "end": 228
              },
              "start": 218,
              "end": 228
            },
            "accessibility": null,
            "static": false,
            "start": 201,
            "end": 229
          }
        ],
        "start": 112,
        "end": 231
      },
      "declare": false,
      "start": 57,
      "end": 231
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Same",
        "optional": false,
        "typeAnnotation": null,
        "start": 238,
        "end": 242
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 243,
              "end": 244
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 243,
            "end": 244
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null,
              "start": 246,
              "end": 247
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 246,
            "end": 247
          }
        ],
        "start": 242,
        "end": 248
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "R",
          "optional": false,
          "typeAnnotation": null,
          "start": 251,
          "end": 252
        },
        "typeArguments": null,
        "start": 251,
        "end": 252
      },
      "declare": false,
      "start": 233,
      "end": 253
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AddMiddleware",
        "optional": false,
        "typeAnnotation": null,
        "start": 260,
        "end": 273
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 274,
              "end": 275
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 274,
            "end": 275
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "I",
              "optional": false,
              "typeAnnotation": null,
              "start": 277,
              "end": 278
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 277,
            "end": 278
          }
        ],
        "start": 273,
        "end": 279
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null,
            "start": 284,
            "end": 285
          },
          "typeArguments": null,
          "start": 284,
          "end": 285
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Endpoint",
            "optional": false,
            "typeAnnotation": null,
            "start": 294,
            "end": 302
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
                    "name": "N",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 309,
                    "end": 310
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 309,
                  "end": 310
                },
                "start": 303,
                "end": 310
              },
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
                    "start": 318,
                    "end": 319
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 318,
                  "end": 319
                },
                "start": 312,
                "end": 319
              },
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "M",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 327,
                    "end": 328
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 327,
                  "end": 328
                },
                "start": 321,
                "end": 328
              },
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "S",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 336,
                    "end": 337
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 336,
                  "end": 337
                },
                "start": 330,
                "end": 337
              }
            ],
            "start": 302,
            "end": 338
          },
          "start": 294,
          "end": 338
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Endpoint",
            "optional": false,
            "typeAnnotation": null,
            "start": 345,
            "end": 353
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "N",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 354,
                  "end": 355
                },
                "typeArguments": null,
                "start": 354,
                "end": 355
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 357,
                  "end": 358
                },
                "typeArguments": null,
                "start": 357,
                "end": 358
              },
              {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "M",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 360,
                      "end": 361
                    },
                    "typeArguments": null,
                    "start": 360,
                    "end": 361
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 364,
                      "end": 365
                    },
                    "typeArguments": null,
                    "start": 364,
                    "end": 365
                  }
                ],
                "start": 360,
                "end": 365
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Same",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 367,
                  "end": 371
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "I",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 372,
                        "end": 373
                      },
                      "typeArguments": null,
                      "start": 372,
                      "end": 373
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "S",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 375,
                        "end": 376
                      },
                      "typeArguments": null,
                      "start": 375,
                      "end": 376
                    }
                  ],
                  "start": 371,
                  "end": 377
                },
                "start": 367,
                "end": 377
              }
            ],
            "start": 353,
            "end": 378
          },
          "start": 345,
          "end": 378
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 385,
          "end": 390
        },
        "start": 284,
        "end": 390
      },
      "declare": false,
      "start": 255,
      "end": 391
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Group",
        "optional": false,
        "typeAnnotation": null,
        "start": 403,
        "end": 408
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Endpoints",
              "optional": false,
              "typeAnnotation": null,
              "start": 409,
              "end": 418
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 409,
            "end": 418
          }
        ],
        "start": 408,
        "end": 419
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
              "name": "add",
              "optional": false,
              "typeAnnotation": null,
              "start": 424,
              "end": 427
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
                    "name": "N",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 428,
                    "end": 429
                  },
                  "constraint": {
                    "type": "TSStringKeyword",
                    "start": 438,
                    "end": 444
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 428,
                  "end": 444
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 446,
                    "end": 447
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 450,
                    "end": 455
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 446,
                  "end": 455
                }
              ],
              "start": 427,
              "end": 456
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "N",
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
                "start": 462,
                "end": 469
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "params",
                "optional": true,
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
                      "start": 484,
                      "end": 485
                    },
                    "typeArguments": null,
                    "start": 484,
                    "end": 485
                  },
                  "start": 482,
                  "end": 485
                },
                "start": 475,
                "end": 485
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Group",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 492,
                  "end": 497
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Endpoints",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 498,
                            "end": 507
                          },
                          "typeArguments": null,
                          "start": 498,
                          "end": 507
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Endpoint",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 510,
                            "end": 518
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "N",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 519,
                                  "end": 520
                                },
                                "typeArguments": null,
                                "start": 519,
                                "end": 520
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "P",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 522,
                                  "end": 523
                                },
                                "typeArguments": null,
                                "start": 522,
                                "end": 523
                              },
                              {
                                "type": "TSNeverKeyword",
                                "start": 525,
                                "end": 530
                              },
                              {
                                "type": "TSNeverKeyword",
                                "start": 532,
                                "end": 537
                              }
                            ],
                            "start": 518,
                            "end": 538
                          },
                          "start": 510,
                          "end": 538
                        }
                      ],
                      "start": 498,
                      "end": 538
                    }
                  ],
                  "start": 497,
                  "end": 539
                },
                "start": 492,
                "end": 539
              },
              "start": 490,
              "end": 539
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 424,
            "end": 540
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "middleware",
              "optional": false,
              "typeAnnotation": null,
              "start": 543,
              "end": 553
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
                    "name": "I",
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
              "start": 553,
              "end": 556
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "id",
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
                      "start": 561,
                      "end": 562
                    },
                    "typeArguments": null,
                    "start": 561,
                    "end": 562
                  },
                  "start": 559,
                  "end": 562
                },
                "start": 557,
                "end": 562
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Group",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 565,
                  "end": 570
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AddMiddleware",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 571,
                        "end": 584
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Endpoints",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 585,
                              "end": 594
                            },
                            "typeArguments": null,
                            "start": 585,
                            "end": 594
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "I",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 596,
                              "end": 597
                            },
                            "typeArguments": null,
                            "start": 596,
                            "end": 597
                          }
                        ],
                        "start": 584,
                        "end": 598
                      },
                      "start": 571,
                      "end": 598
                    }
                  ],
                  "start": 570,
                  "end": 599
                },
                "start": 565,
                "end": 599
              },
              "start": 563,
              "end": 599
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 543,
            "end": 600
          }
        ],
        "start": 420,
        "end": 602
      },
      "declare": false,
      "start": 393,
      "end": 602
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
            "name": "group",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Group",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 625,
                  "end": 630
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNeverKeyword",
                      "start": 631,
                      "end": 636
                    }
                  ],
                  "start": 630,
                  "end": 637
                },
                "start": 625,
                "end": 637
              },
              "start": 623,
              "end": 637
            },
            "start": 618,
            "end": 637
          },
          "init": null,
          "definite": false,
          "start": 618,
          "end": 637
        }
      ],
      "declare": true,
      "start": 604,
      "end": 638
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
              "name": "result",
              "optional": false,
              "typeAnnotation": null,
              "start": 653,
              "end": 659
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "group",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 662,
                          "end": 667
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "add",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 668,
                          "end": 671
                        },
                        "optional": false,
                        "computed": false,
                        "start": 662,
                        "end": 671
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "a",
                          "raw": "\"a\"",
                          "start": 672,
                          "end": 675
                        },
                        {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "id",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 679,
                                "end": 681
                              },
                              "value": {
                                "type": "Literal",
                                "value": "",
                                "raw": "\"\"",
                                "start": 683,
                                "end": 685
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 679,
                              "end": 685
                            }
                          ],
                          "start": 677,
                          "end": 687
                        }
                      ],
                      "optional": false,
                      "start": 662,
                      "end": 688
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "add",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 689,
                      "end": 692
                    },
                    "optional": false,
                    "computed": false,
                    "start": 662,
                    "end": 692
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "c",
                      "raw": "\"c\"",
                      "start": 693,
                      "end": 696
                    }
                  ],
                  "optional": false,
                  "start": 662,
                  "end": 697
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "middleware",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 698,
                  "end": 708
                },
                "optional": false,
                "computed": false,
                "start": 662,
                "end": 708
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Literal",
                    "value": "m",
                    "raw": "\"m\"",
                    "start": 709,
                    "end": 712
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "const",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 716,
                      "end": 721
                    },
                    "typeArguments": null,
                    "start": 716,
                    "end": 721
                  },
                  "start": 709,
                  "end": 721
                }
              ],
              "optional": false,
              "start": 662,
              "end": 722
            },
            "definite": false,
            "start": 653,
            "end": 722
          }
        ],
        "declare": false,
        "start": 647,
        "end": 723
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 640,
      "end": 723
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 57,
  "end": 723
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 57,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "Endpoint",
    "start": 67,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "Name",
    "start": 76,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "Params",
    "start": 82,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "Middleware",
    "start": 90,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 100,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "Services",
    "start": 102,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 116,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 125,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "Name",
    "start": 131,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 139,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "params",
    "start": 148,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 154,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "Params",
    "start": 156,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 166,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "middleware",
    "start": 175,
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
    "value": "Middleware",
    "start": 187,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 201,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "services",
    "start": 210,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 218,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "Services",
    "start": 220,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 233,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "Same",
    "start": 238,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 244,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 249,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 252,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 255,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "AddMiddleware",
    "start": 260,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 273,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 275,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 280,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 284,
    "end": 285
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 286,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "Endpoint",
    "start": 294,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 303,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 310,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 312,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 319,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 321,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 328,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 330,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 343,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "Endpoint",
    "start": 345,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 353,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 355,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 358,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 362,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 365,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "Same",
    "start": 367,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 371,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "I",
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
    "value": "S",
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
    "value": ">",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 383,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 385,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 390,
    "end": 391
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 393,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "Group",
    "start": 403,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 408,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "Endpoints",
    "start": 409,
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
    "value": "{",
    "start": 420,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "add",
    "start": 424,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 427,
    "end": 428
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 428,
    "end": 429
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 430,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 438,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 444,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 448,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 450,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 456,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 462,
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
    "value": "N",
    "start": 468,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 469,
    "end": 470
  },
  {
    "type": "Identifier",
    "value": "params",
    "start": 475,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 481,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 482,
    "end": 483
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 489,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 490,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "Group",
    "start": 492,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 497,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "Endpoints",
    "start": 498,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 508,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "Endpoint",
    "start": 510,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 518,
    "end": 519
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 520,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 522,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 523,
    "end": 524
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 525,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 530,
    "end": 531
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 532,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 537,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 538,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 539,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "middleware",
    "start": 543,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 553,
    "end": 554
  },
  {
    "type": "Identifier",
    "value": "I",
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
    "value": "id",
    "start": 557,
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
    "value": "I",
    "start": 561,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 562,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 563,
    "end": 564
  },
  {
    "type": "Identifier",
    "value": "Group",
    "start": 565,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 570,
    "end": 571
  },
  {
    "type": "Identifier",
    "value": "AddMiddleware",
    "start": 571,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 584,
    "end": 585
  },
  {
    "type": "Identifier",
    "value": "Endpoints",
    "start": 585,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 594,
    "end": 595
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 596,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 597,
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
    "value": ";",
    "start": 599,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 601,
    "end": 602
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 604,
    "end": 611
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 612,
    "end": 617
  },
  {
    "type": "Identifier",
    "value": "group",
    "start": 618,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 623,
    "end": 624
  },
  {
    "type": "Identifier",
    "value": "Group",
    "start": 625,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 630,
    "end": 631
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 631,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 636,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 637,
    "end": 638
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 640,
    "end": 646
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 647,
    "end": 652
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 653,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 660,
    "end": 661
  },
  {
    "type": "Identifier",
    "value": "group",
    "start": 662,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 667,
    "end": 668
  },
  {
    "type": "Identifier",
    "value": "add",
    "start": 668,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 671,
    "end": 672
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 672,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 675,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 677,
    "end": 678
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 679,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 681,
    "end": 682
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 683,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": ".",
    "start": 688,
    "end": 689
  },
  {
    "type": "Identifier",
    "value": "add",
    "start": 689,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 692,
    "end": 693
  },
  {
    "type": "String",
    "value": "\"c\"",
    "start": 693,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 696,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 697,
    "end": 698
  },
  {
    "type": "Identifier",
    "value": "middleware",
    "start": 698,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 708,
    "end": 709
  },
  {
    "type": "String",
    "value": "\"m\"",
    "start": 709,
    "end": 712
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 713,
    "end": 715
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 716,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 721,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 722,
    "end": 723
  }
]
```
