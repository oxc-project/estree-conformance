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
        "name": "Getters",
        "optional": false,
        "typeAnnotation": null,
        "start": 36,
        "end": 43
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
              "start": 44,
              "end": 45
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 44,
            "end": 45
          }
        ],
        "start": 43,
        "end": 46
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 52,
          "end": 53
        },
        "constraint": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 63,
                  "end": 64
                },
                "typeArguments": null,
                "start": 63,
                "end": 64
              },
              "start": 57,
              "end": 64
            },
            {
              "type": "TSStringKeyword",
              "start": 67,
              "end": 73
            }
          ],
          "start": 57,
          "end": 73
        },
        "nameType": {
          "type": "TSTemplateLiteralType",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "get",
                "cooked": "get"
              },
              "tail": false,
              "start": 77,
              "end": 83
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 96,
              "end": 98
            }
          ],
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Capitalize",
                "optional": false,
                "typeAnnotation": null,
                "start": 83,
                "end": 93
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
                      "start": 94,
                      "end": 95
                    },
                    "typeArguments": null,
                    "start": 94,
                    "end": 95
                  }
                ],
                "start": 93,
                "end": 96
              },
              "start": 83,
              "end": 96
            }
          ],
          "start": 77,
          "end": 98
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 107,
                  "end": 108
                },
                "typeArguments": null,
                "start": 107,
                "end": 108
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 109,
                  "end": 110
                },
                "typeArguments": null,
                "start": 109,
                "end": 110
              },
              "start": 107,
              "end": 111
            },
            "start": 104,
            "end": 111
          },
          "start": 101,
          "end": 111
        },
        "optional": false,
        "readonly": null,
        "start": 49,
        "end": 113
      },
      "declare": false,
      "start": 31,
      "end": 114
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TG1",
        "optional": false,
        "typeAnnotation": null,
        "start": 120,
        "end": 123
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Getters",
          "optional": false,
          "typeAnnotation": null,
          "start": 126,
          "end": 133
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
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
                    "start": 136,
                    "end": 139
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 141,
                      "end": 147
                    },
                    "start": 139,
                    "end": 147
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 136,
                  "end": 148
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
                    "start": 149,
                    "end": 152
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 154,
                      "end": 160
                    },
                    "start": 152,
                    "end": 160
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 149,
                  "end": 161
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "baz",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 162,
                    "end": 165
                  },
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
                            "name": "z",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 169,
                            "end": 170
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "start": 172,
                              "end": 179
                            },
                            "start": 170,
                            "end": 179
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 169,
                          "end": 179
                        }
                      ],
                      "start": 167,
                      "end": 181
                    },
                    "start": 165,
                    "end": 181
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 162,
                  "end": 181
                }
              ],
              "start": 134,
              "end": 183
            }
          ],
          "start": 133,
          "end": 184
        },
        "start": 126,
        "end": 184
      },
      "declare": false,
      "start": 115,
      "end": 185
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PropDef",
        "optional": false,
        "typeAnnotation": null,
        "start": 262,
        "end": 269
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 270,
              "end": 271
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 286,
                "end": 289
              },
              "start": 280,
              "end": 289
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 270,
            "end": 289
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 291,
              "end": 292
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 291,
            "end": 292
          }
        ],
        "start": 269,
        "end": 293
      },
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
              "start": 298,
              "end": 302
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 304,
                  "end": 305
                },
                "typeArguments": null,
                "start": 304,
                "end": 305
              },
              "start": 302,
              "end": 305
            },
            "accessibility": null,
            "static": false,
            "start": 298,
            "end": 306
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 307,
              "end": 311
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
                  "start": 313,
                  "end": 314
                },
                "typeArguments": null,
                "start": 313,
                "end": 314
              },
              "start": 311,
              "end": 314
            },
            "accessibility": null,
            "static": false,
            "start": 307,
            "end": 314
          }
        ],
        "start": 296,
        "end": 316
      },
      "declare": false,
      "start": 257,
      "end": 317
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TypeFromDefs",
        "optional": false,
        "typeAnnotation": null,
        "start": 324,
        "end": 336
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
              "start": 337,
              "end": 338
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PropDef",
                "optional": false,
                "typeAnnotation": null,
                "start": 347,
                "end": 354
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 361,
                      "end": 364
                    },
                    "start": 355,
                    "end": 364
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 366,
                    "end": 369
                  }
                ],
                "start": 354,
                "end": 370
              },
              "start": 347,
              "end": 370
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 337,
            "end": 370
          }
        ],
        "start": 336,
        "end": 371
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 377,
          "end": 378
        },
        "constraint": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 382,
            "end": 383
          },
          "typeArguments": null,
          "start": 382,
          "end": 383
        },
        "nameType": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 387,
              "end": 388
            },
            "typeArguments": null,
            "start": 387,
            "end": 388
          },
          "indexType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "name",
              "raw": "'name'",
              "start": 389,
              "end": 395
            },
            "start": 389,
            "end": 395
          },
          "start": 387,
          "end": 396
        },
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 399,
              "end": 400
            },
            "typeArguments": null,
            "start": 399,
            "end": 400
          },
          "indexType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "type",
              "raw": "'type'",
              "start": 401,
              "end": 407
            },
            "start": 401,
            "end": 407
          },
          "start": 399,
          "end": 408
        },
        "optional": false,
        "readonly": null,
        "start": 374,
        "end": 410
      },
      "declare": false,
      "start": 319,
      "end": 411
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TP1",
        "optional": false,
        "typeAnnotation": null,
        "start": 418,
        "end": 421
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "TypeFromDefs",
          "optional": false,
          "typeAnnotation": null,
          "start": 424,
          "end": 436
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
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
                        "start": 439,
                        "end": 443
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "a",
                            "raw": "'a'",
                            "start": 445,
                            "end": 448
                          },
                          "start": 445,
                          "end": 448
                        },
                        "start": 443,
                        "end": 448
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 439,
                      "end": 449
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "type",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 450,
                        "end": 454
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 456,
                          "end": 462
                        },
                        "start": 454,
                        "end": 462
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 450,
                      "end": 462
                    }
                  ],
                  "start": 437,
                  "end": 464
                },
                {
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
                        "start": 469,
                        "end": 473
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "b",
                            "raw": "'b'",
                            "start": 475,
                            "end": 478
                          },
                          "start": 475,
                          "end": 478
                        },
                        "start": 473,
                        "end": 478
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 469,
                      "end": 479
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "type",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 480,
                        "end": 484
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 486,
                          "end": 492
                        },
                        "start": 484,
                        "end": 492
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 480,
                      "end": 492
                    }
                  ],
                  "start": 467,
                  "end": 494
                },
                {
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
                        "start": 499,
                        "end": 503
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "a",
                            "raw": "'a'",
                            "start": 505,
                            "end": 508
                          },
                          "start": 505,
                          "end": 508
                        },
                        "start": 503,
                        "end": 508
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 499,
                      "end": 509
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "type",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 510,
                        "end": 514
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 516,
                          "end": 523
                        },
                        "start": 514,
                        "end": 523
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 510,
                      "end": 523
                    }
                  ],
                  "start": 497,
                  "end": 525
                }
              ],
              "start": 437,
              "end": 525
            }
          ],
          "start": 436,
          "end": 526
        },
        "start": 424,
        "end": 526
      },
      "declare": false,
      "start": 413,
      "end": 527
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TA1",
        "optional": false,
        "typeAnnotation": null,
        "start": 596,
        "end": 599
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Getters",
          "optional": false,
          "typeAnnotation": null,
          "start": 602,
          "end": 609
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "start": 610,
                "end": 616
              },
              "start": 610,
              "end": 618
            }
          ],
          "start": 609,
          "end": 619
        },
        "start": 602,
        "end": 619
      },
      "declare": false,
      "start": 591,
      "end": 620
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TA2",
        "optional": false,
        "typeAnnotation": null,
        "start": 626,
        "end": 629
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Getters",
          "optional": false,
          "typeAnnotation": null,
          "start": 632,
          "end": 639
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSNumberKeyword",
                  "start": 641,
                  "end": 647
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 649,
                  "end": 656
                }
              ],
              "start": 640,
              "end": 657
            }
          ],
          "start": 639,
          "end": 658
        },
        "start": 632,
        "end": 658
      },
      "declare": false,
      "start": 621,
      "end": 659
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Methods",
        "optional": false,
        "typeAnnotation": null,
        "start": 700,
        "end": 707
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
              "start": 708,
              "end": 709
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 708,
            "end": 709
          }
        ],
        "start": 707,
        "end": 710
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 716,
          "end": 717
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 727,
              "end": 728
            },
            "typeArguments": null,
            "start": 727,
            "end": 728
          },
          "start": 721,
          "end": 728
        },
        "nameType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 732,
                "end": 733
              },
              "typeArguments": null,
              "start": 732,
              "end": 733
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 734,
                "end": 735
              },
              "typeArguments": null,
              "start": 734,
              "end": 735
            },
            "start": 732,
            "end": 736
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Function",
              "optional": false,
              "typeAnnotation": null,
              "start": 745,
              "end": 753
            },
            "typeArguments": null,
            "start": 745,
            "end": 753
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 756,
              "end": 757
            },
            "typeArguments": null,
            "start": 756,
            "end": 757
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 760,
            "end": 765
          },
          "start": 732,
          "end": 765
        },
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 768,
              "end": 769
            },
            "typeArguments": null,
            "start": 768,
            "end": 769
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 770,
              "end": 771
            },
            "typeArguments": null,
            "start": 770,
            "end": 771
          },
          "start": 768,
          "end": 772
        },
        "optional": false,
        "readonly": null,
        "start": 713,
        "end": 774
      },
      "declare": false,
      "start": 695,
      "end": 775
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TM1",
        "optional": false,
        "typeAnnotation": null,
        "start": 781,
        "end": 784
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Methods",
          "optional": false,
          "typeAnnotation": null,
          "start": 787,
          "end": 794
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 797,
                    "end": 800
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 804,
                      "end": 810
                    },
                    "start": 802,
                    "end": 810
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 797,
                  "end": 811
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 812,
                    "end": 815
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
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
                          "start": 819,
                          "end": 825
                        },
                        "start": 817,
                        "end": 825
                      },
                      "start": 816,
                      "end": 825
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 828,
                      "end": 835
                    },
                    "start": 826,
                    "end": 835
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 812,
                  "end": 836
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "baz",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 837,
                    "end": 840
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 842,
                          "end": 848
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 851,
                          "end": 857
                        }
                      ],
                      "start": 842,
                      "end": 857
                    },
                    "start": 840,
                    "end": 857
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 837,
                  "end": 857
                }
              ],
              "start": 795,
              "end": 859
            }
          ],
          "start": 794,
          "end": 860
        },
        "start": 787,
        "end": 860
      },
      "declare": false,
      "start": 776,
      "end": 861
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DoubleProp",
        "optional": false,
        "typeAnnotation": null,
        "start": 918,
        "end": 928
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
              "start": 929,
              "end": 930
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 929,
            "end": 930
          }
        ],
        "start": 928,
        "end": 931
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 937,
          "end": 938
        },
        "constraint": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 948,
                  "end": 949
                },
                "typeArguments": null,
                "start": 948,
                "end": 949
              },
              "start": 942,
              "end": 949
            },
            {
              "type": "TSStringKeyword",
              "start": 952,
              "end": 958
            }
          ],
          "start": 942,
          "end": 958
        },
        "nameType": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 962,
                  "end": 965
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "1",
                    "cooked": "1"
                  },
                  "tail": true,
                  "start": 966,
                  "end": 969
                }
              ],
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 965,
                    "end": 966
                  },
                  "typeArguments": null,
                  "start": 965,
                  "end": 966
                }
              ],
              "start": 962,
              "end": 969
            },
            {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 972,
                  "end": 975
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "2",
                    "cooked": "2"
                  },
                  "tail": true,
                  "start": 976,
                  "end": 979
                }
              ],
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 975,
                    "end": 976
                  },
                  "typeArguments": null,
                  "start": 975,
                  "end": 976
                }
              ],
              "start": 972,
              "end": 979
            }
          ],
          "start": 962,
          "end": 979
        },
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
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
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 984,
              "end": 985
            },
            "typeArguments": null,
            "start": 984,
            "end": 985
          },
          "start": 982,
          "end": 986
        },
        "optional": false,
        "readonly": null,
        "start": 934,
        "end": 988
      },
      "declare": false,
      "start": 913,
      "end": 988
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TD1",
        "optional": false,
        "typeAnnotation": null,
        "start": 994,
        "end": 997
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "DoubleProp",
          "optional": false,
          "typeAnnotation": null,
          "start": 1000,
          "end": 1010
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
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
                    "start": 1013,
                    "end": 1014
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1016,
                      "end": 1022
                    },
                    "start": 1014,
                    "end": 1022
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1013,
                  "end": 1023
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
                    "start": 1024,
                    "end": 1025
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1027,
                      "end": 1033
                    },
                    "start": 1025,
                    "end": 1033
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1024,
                  "end": 1033
                }
              ],
              "start": 1011,
              "end": 1035
            }
          ],
          "start": 1010,
          "end": 1036
        },
        "start": 1000,
        "end": 1036
      },
      "declare": false,
      "start": 989,
      "end": 1037
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TD2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1098,
        "end": 1101
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "TD1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1110,
            "end": 1113
          },
          "typeArguments": null,
          "start": 1110,
          "end": 1113
        },
        "start": 1104,
        "end": 1113
      },
      "declare": false,
      "start": 1093,
      "end": 1114
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TD3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1150,
        "end": 1153
      },
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
              "start": 1154,
              "end": 1155
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1154,
            "end": 1155
          }
        ],
        "start": 1153,
        "end": 1156
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "DoubleProp",
            "optional": false,
            "typeAnnotation": null,
            "start": 1165,
            "end": 1175
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1176,
                  "end": 1177
                },
                "typeArguments": null,
                "start": 1176,
                "end": 1177
              }
            ],
            "start": 1175,
            "end": 1178
          },
          "start": 1165,
          "end": 1178
        },
        "start": 1159,
        "end": 1178
      },
      "declare": false,
      "start": 1145,
      "end": 1179
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TD4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1208,
        "end": 1211
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "TD3",
          "optional": false,
          "typeAnnotation": null,
          "start": 1214,
          "end": 1217
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
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
                    "start": 1220,
                    "end": 1221
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1223,
                      "end": 1229
                    },
                    "start": 1221,
                    "end": 1229
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1220,
                  "end": 1230
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
                    "start": 1231,
                    "end": 1232
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1234,
                      "end": 1240
                    },
                    "start": 1232,
                    "end": 1240
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1231,
                  "end": 1240
                }
              ],
              "start": 1218,
              "end": 1242
            }
          ],
          "start": 1217,
          "end": 1243
        },
        "start": 1214,
        "end": 1243
      },
      "declare": false,
      "start": 1203,
      "end": 1244
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Lazyify",
        "optional": false,
        "typeAnnotation": null,
        "start": 1303,
        "end": 1310
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
              "start": 1311,
              "end": 1312
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1311,
            "end": 1312
          }
        ],
        "start": 1310,
        "end": 1313
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 1323,
          "end": 1324
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1334,
              "end": 1335
            },
            "typeArguments": null,
            "start": 1334,
            "end": 1335
          },
          "start": 1328,
          "end": 1335
        },
        "nameType": {
          "type": "TSTemplateLiteralType",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "get",
                "cooked": "get"
              },
              "tail": false,
              "start": 1339,
              "end": 1345
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 1367,
              "end": 1369
            }
          ],
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Capitalize",
                "optional": false,
                "typeAnnotation": null,
                "start": 1345,
                "end": 1355
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
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1356,
                          "end": 1357
                        },
                        "typeArguments": null,
                        "start": 1356,
                        "end": 1357
                      },
                      {
                        "type": "TSStringKeyword",
                        "start": 1360,
                        "end": 1366
                      }
                    ],
                    "start": 1356,
                    "end": 1366
                  }
                ],
                "start": 1355,
                "end": 1367
              },
              "start": 1345,
              "end": 1367
            }
          ],
          "start": 1339,
          "end": 1369
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1378,
                  "end": 1379
                },
                "typeArguments": null,
                "start": 1378,
                "end": 1379
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1380,
                  "end": 1381
                },
                "typeArguments": null,
                "start": 1380,
                "end": 1381
              },
              "start": 1378,
              "end": 1382
            },
            "start": 1375,
            "end": 1382
          },
          "start": 1372,
          "end": 1382
        },
        "optional": false,
        "readonly": null,
        "start": 1316,
        "end": 1384
      },
      "declare": false,
      "start": 1298,
      "end": 1385
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Person",
        "optional": false,
        "typeAnnotation": null,
        "start": 1397,
        "end": 1403
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
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 1419,
              "end": 1423
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1425,
                "end": 1431
              },
              "start": 1423,
              "end": 1431
            },
            "accessibility": null,
            "static": false,
            "start": 1410,
            "end": 1432
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "age",
              "optional": false,
              "typeAnnotation": null,
              "start": 1437,
              "end": 1440
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1442,
                "end": 1448
              },
              "start": 1440,
              "end": 1448
            },
            "accessibility": null,
            "static": false,
            "start": 1437,
            "end": 1449
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "location",
              "optional": false,
              "typeAnnotation": null,
              "start": 1454,
              "end": 1462
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1465,
                "end": 1471
              },
              "start": 1463,
              "end": 1471
            },
            "accessibility": null,
            "static": false,
            "start": 1454,
            "end": 1472
          }
        ],
        "start": 1404,
        "end": 1474
      },
      "declare": false,
      "start": 1387,
      "end": 1474
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "LazyPerson",
        "optional": false,
        "typeAnnotation": null,
        "start": 1481,
        "end": 1491
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Lazyify",
          "optional": false,
          "typeAnnotation": null,
          "start": 1494,
          "end": 1501
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Person",
                "optional": false,
                "typeAnnotation": null,
                "start": 1502,
                "end": 1508
              },
              "typeArguments": null,
              "start": 1502,
              "end": 1508
            }
          ],
          "start": 1501,
          "end": 1509
        },
        "start": 1494,
        "end": 1509
      },
      "declare": false,
      "start": 1476,
      "end": 1510
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Example",
        "optional": false,
        "typeAnnotation": null,
        "start": 1539,
        "end": 1546
      },
      "typeParameters": null,
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
              "start": 1550,
              "end": 1553
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1555,
                "end": 1561
              },
              "start": 1553,
              "end": 1561
            },
            "accessibility": null,
            "static": false,
            "start": 1550,
            "end": 1562
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
              "start": 1563,
              "end": 1566
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1568,
                "end": 1574
              },
              "start": 1566,
              "end": 1574
            },
            "accessibility": null,
            "static": false,
            "start": 1563,
            "end": 1574
          }
        ],
        "start": 1549,
        "end": 1575
      },
      "declare": false,
      "start": 1534,
      "end": 1576
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PickByValueType",
        "optional": false,
        "typeAnnotation": null,
        "start": 1583,
        "end": 1598
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
              "start": 1599,
              "end": 1600
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1599,
            "end": 1600
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
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
        "start": 1598,
        "end": 1604
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 1612,
          "end": 1613
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1623,
              "end": 1624
            },
            "typeArguments": null,
            "start": 1623,
            "end": 1624
          },
          "start": 1617,
          "end": 1624
        },
        "nameType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1628,
                "end": 1629
              },
              "typeArguments": null,
              "start": 1628,
              "end": 1629
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 1630,
                "end": 1631
              },
              "typeArguments": null,
              "start": 1630,
              "end": 1631
            },
            "start": 1628,
            "end": 1632
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 1641,
              "end": 1642
            },
            "typeArguments": null,
            "start": 1641,
            "end": 1642
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 1645,
              "end": 1646
            },
            "typeArguments": null,
            "start": 1645,
            "end": 1646
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 1649,
            "end": 1654
          },
          "start": 1628,
          "end": 1654
        },
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1657,
              "end": 1658
            },
            "typeArguments": null,
            "start": 1657,
            "end": 1658
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 1659,
              "end": 1660
            },
            "typeArguments": null,
            "start": 1659,
            "end": 1660
          },
          "start": 1657,
          "end": 1661
        },
        "optional": false,
        "readonly": null,
        "start": 1607,
        "end": 1663
      },
      "declare": false,
      "start": 1578,
      "end": 1664
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1671,
        "end": 1673
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "PickByValueType",
          "optional": false,
          "typeAnnotation": null,
          "start": 1676,
          "end": 1691
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Example",
                "optional": false,
                "typeAnnotation": null,
                "start": 1692,
                "end": 1699
              },
              "typeArguments": null,
              "start": 1692,
              "end": 1699
            },
            {
              "type": "TSStringKeyword",
              "start": 1701,
              "end": 1707
            }
          ],
          "start": 1691,
          "end": 1708
        },
        "start": 1676,
        "end": 1708
      },
      "declare": false,
      "start": 1666,
      "end": 1709
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
            "name": "e1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1720,
                  "end": 1722
                },
                "typeArguments": null,
                "start": 1720,
                "end": 1722
              },
              "start": 1718,
              "end": 1722
            },
            "start": 1716,
            "end": 1722
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
                  "start": 1731,
                  "end": 1734
                },
                "value": {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "\"hello\"",
                  "start": 1736,
                  "end": 1743
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1731,
                "end": 1743
              }
            ],
            "start": 1725,
            "end": 1745
          },
          "definite": false,
          "start": 1716,
          "end": 1745
        }
      ],
      "declare": false,
      "start": 1710,
      "end": 1746
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1752,
        "end": 1754
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1763,
            "end": 1765
          },
          "typeArguments": null,
          "start": 1763,
          "end": 1765
        },
        "start": 1757,
        "end": 1765
      },
      "declare": false,
      "start": 1747,
      "end": 1766
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
            "name": "e2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1777,
                  "end": 1779
                },
                "typeArguments": null,
                "start": 1777,
                "end": 1779
              },
              "start": 1775,
              "end": 1779
            },
            "start": 1773,
            "end": 1779
          },
          "init": {
            "type": "Literal",
            "value": "foo",
            "raw": "\"foo\"",
            "start": 1782,
            "end": 1787
          },
          "definite": false,
          "start": 1773,
          "end": 1787
        }
      ],
      "declare": false,
      "start": 1767,
      "end": 1788
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Car",
        "optional": false,
        "typeAnnotation": null,
        "start": 1822,
        "end": 1825
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 1832,
              "end": 1836
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1838,
                "end": 1844
              },
              "start": 1836,
              "end": 1844
            },
            "accessibility": null,
            "static": false,
            "start": 1832,
            "end": 1845
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "seats",
              "optional": false,
              "typeAnnotation": null,
              "start": 1850,
              "end": 1855
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1857,
                "end": 1863
              },
              "start": 1855,
              "end": 1863
            },
            "accessibility": null,
            "static": false,
            "start": 1850,
            "end": 1864
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "engine",
              "optional": false,
              "typeAnnotation": null,
              "start": 1869,
              "end": 1875
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Engine",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1877,
                  "end": 1883
                },
                "typeArguments": null,
                "start": 1877,
                "end": 1883
              },
              "start": 1875,
              "end": 1883
            },
            "accessibility": null,
            "static": false,
            "start": 1869,
            "end": 1884
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "wheels",
              "optional": false,
              "typeAnnotation": null,
              "start": 1889,
              "end": 1895
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Wheel",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1897,
                    "end": 1902
                  },
                  "typeArguments": null,
                  "start": 1897,
                  "end": 1902
                },
                "start": 1897,
                "end": 1904
              },
              "start": 1895,
              "end": 1904
            },
            "accessibility": null,
            "static": false,
            "start": 1889,
            "end": 1905
          }
        ],
        "start": 1826,
        "end": 1907
      },
      "declare": false,
      "start": 1812,
      "end": 1907
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Engine",
        "optional": false,
        "typeAnnotation": null,
        "start": 1919,
        "end": 1925
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
              "name": "manufacturer",
              "optional": false,
              "typeAnnotation": null,
              "start": 1932,
              "end": 1944
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1946,
                "end": 1952
              },
              "start": 1944,
              "end": 1952
            },
            "accessibility": null,
            "static": false,
            "start": 1932,
            "end": 1953
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "horsepower",
              "optional": false,
              "typeAnnotation": null,
              "start": 1958,
              "end": 1968
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1970,
                "end": 1976
              },
              "start": 1968,
              "end": 1976
            },
            "accessibility": null,
            "static": false,
            "start": 1958,
            "end": 1977
          }
        ],
        "start": 1926,
        "end": 1979
      },
      "declare": false,
      "start": 1909,
      "end": 1979
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Wheel",
        "optional": false,
        "typeAnnotation": null,
        "start": 1991,
        "end": 1996
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
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 2003,
              "end": 2007
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
                      "value": "summer",
                      "raw": "\"summer\"",
                      "start": 2009,
                      "end": 2017
                    },
                    "start": 2009,
                    "end": 2017
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "winter",
                      "raw": "\"winter\"",
                      "start": 2020,
                      "end": 2028
                    },
                    "start": 2020,
                    "end": 2028
                  }
                ],
                "start": 2009,
                "end": 2028
              },
              "start": 2007,
              "end": 2028
            },
            "accessibility": null,
            "static": false,
            "start": 2003,
            "end": 2029
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "radius",
              "optional": false,
              "typeAnnotation": null,
              "start": 2034,
              "end": 2040
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2042,
                "end": 2048
              },
              "start": 2040,
              "end": 2048
            },
            "accessibility": null,
            "static": false,
            "start": 2034,
            "end": 2049
          }
        ],
        "start": 1997,
        "end": 2051
      },
      "declare": false,
      "start": 1981,
      "end": 2051
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Primitive",
        "optional": false,
        "typeAnnotation": null,
        "start": 2058,
        "end": 2067
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 2070,
            "end": 2076
          },
          {
            "type": "TSNumberKeyword",
            "start": 2079,
            "end": 2085
          },
          {
            "type": "TSBooleanKeyword",
            "start": 2088,
            "end": 2095
          }
        ],
        "start": 2070,
        "end": 2095
      },
      "declare": false,
      "start": 2053,
      "end": 2096
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OnlyPrimitives",
        "optional": false,
        "typeAnnotation": null,
        "start": 2102,
        "end": 2116
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
              "start": 2117,
              "end": 2118
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2117,
            "end": 2118
          }
        ],
        "start": 2116,
        "end": 2119
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 2125,
          "end": 2126
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2136,
              "end": 2137
            },
            "typeArguments": null,
            "start": 2136,
            "end": 2137
          },
          "start": 2130,
          "end": 2137
        },
        "nameType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 2141,
                "end": 2142
              },
              "typeArguments": null,
              "start": 2141,
              "end": 2142
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 2143,
                "end": 2144
              },
              "typeArguments": null,
              "start": 2143,
              "end": 2144
            },
            "start": 2141,
            "end": 2145
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Primitive",
              "optional": false,
              "typeAnnotation": null,
              "start": 2154,
              "end": 2163
            },
            "typeArguments": null,
            "start": 2154,
            "end": 2163
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 2166,
              "end": 2167
            },
            "typeArguments": null,
            "start": 2166,
            "end": 2167
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 2170,
            "end": 2175
          },
          "start": 2141,
          "end": 2175
        },
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
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
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 2180,
              "end": 2181
            },
            "typeArguments": null,
            "start": 2180,
            "end": 2181
          },
          "start": 2178,
          "end": 2182
        },
        "optional": false,
        "readonly": null,
        "start": 2122,
        "end": 2184
      },
      "declare": false,
      "start": 2097,
      "end": 2185
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "primitiveCar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OnlyPrimitives",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2205,
                  "end": 2219
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Car",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2220,
                        "end": 2223
                      },
                      "typeArguments": null,
                      "start": 2220,
                      "end": 2223
                    }
                  ],
                  "start": 2219,
                  "end": 2224
                },
                "start": 2205,
                "end": 2224
              },
              "start": 2203,
              "end": 2224
            },
            "start": 2191,
            "end": 2224
          },
          "init": null,
          "definite": false,
          "start": 2191,
          "end": 2224
        }
      ],
      "declare": false,
      "start": 2187,
      "end": 2225
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "keys",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "OnlyPrimitives",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2279,
                    "end": 2293
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Car",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2294,
                          "end": 2297
                        },
                        "typeArguments": null,
                        "start": 2294,
                        "end": 2297
                      }
                    ],
                    "start": 2293,
                    "end": 2298
                  },
                  "start": 2279,
                  "end": 2298
                },
                "start": 2273,
                "end": 2298
              },
              "start": 2271,
              "end": 2298
            },
            "start": 2267,
            "end": 2298
          },
          "init": null,
          "definite": false,
          "start": 2267,
          "end": 2298
        }
      ],
      "declare": false,
      "start": 2263,
      "end": 2299
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "KeysOfPrimitives",
        "optional": false,
        "typeAnnotation": null,
        "start": 2328,
        "end": 2344
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
              "start": 2345,
              "end": 2346
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2345,
            "end": 2346
          }
        ],
        "start": 2344,
        "end": 2347
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "OnlyPrimitives",
            "optional": false,
            "typeAnnotation": null,
            "start": 2356,
            "end": 2370
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
                  "start": 2371,
                  "end": 2372
                },
                "typeArguments": null,
                "start": 2371,
                "end": 2372
              }
            ],
            "start": 2370,
            "end": 2373
          },
          "start": 2356,
          "end": 2373
        },
        "start": 2350,
        "end": 2373
      },
      "declare": false,
      "start": 2323,
      "end": 2374
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "carKeys",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "KeysOfPrimitives",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2389,
                  "end": 2405
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Car",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2406,
                        "end": 2409
                      },
                      "typeArguments": null,
                      "start": 2406,
                      "end": 2409
                    }
                  ],
                  "start": 2405,
                  "end": 2410
                },
                "start": 2389,
                "end": 2410
              },
              "start": 2387,
              "end": 2410
            },
            "start": 2380,
            "end": 2410
          },
          "init": null,
          "definite": false,
          "start": 2380,
          "end": 2410
        }
      ],
      "declare": false,
      "start": 2376,
      "end": 2411
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Equal",
        "optional": false,
        "typeAnnotation": null,
        "start": 2461,
        "end": 2466
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
              "start": 2467,
              "end": 2468
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2467,
            "end": 2468
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 2470,
              "end": 2471
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2470,
            "end": 2471
          }
        ],
        "start": 2466,
        "end": 2472
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
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
                  "start": 2477,
                  "end": 2478
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 2477,
                "end": 2478
              }
            ],
            "start": 2476,
            "end": 2479
          },
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
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
                  "start": 2485,
                  "end": 2486
                },
                "typeArguments": null,
                "start": 2485,
                "end": 2486
              },
              "extendsType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2495,
                  "end": 2496
                },
                "typeArguments": null,
                "start": 2495,
                "end": 2496
              },
              "trueType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 2499,
                  "end": 2500
                },
                "start": 2499,
                "end": 2500
              },
              "falseType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 2503,
                  "end": 2504
                },
                "start": 2503,
                "end": 2504
              },
              "start": 2485,
              "end": 2504
            },
            "start": 2482,
            "end": 2504
          },
          "start": 2476,
          "end": 2504
        },
        "extendsType": {
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
                  "start": 2516,
                  "end": 2517
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 2516,
                "end": 2517
              }
            ],
            "start": 2515,
            "end": 2518
          },
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
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
                  "start": 2524,
                  "end": 2525
                },
                "typeArguments": null,
                "start": 2524,
                "end": 2525
              },
              "extendsType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2534,
                  "end": 2535
                },
                "typeArguments": null,
                "start": 2534,
                "end": 2535
              },
              "trueType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 2538,
                  "end": 2539
                },
                "start": 2538,
                "end": 2539
              },
              "falseType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 2542,
                  "end": 2543
                },
                "start": 2542,
                "end": 2543
              },
              "start": 2524,
              "end": 2543
            },
            "start": 2521,
            "end": 2543
          },
          "start": 2515,
          "end": 2543
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 2547,
            "end": 2551
          },
          "start": 2547,
          "end": 2551
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 2554,
            "end": 2559
          },
          "start": 2554,
          "end": 2559
        },
        "start": 2475,
        "end": 2559
      },
      "declare": false,
      "start": 2456,
      "end": 2560
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "If",
        "optional": false,
        "typeAnnotation": null,
        "start": 2567,
        "end": 2569
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 2570,
              "end": 2574
            },
            "constraint": {
              "type": "TSBooleanKeyword",
              "start": 2583,
              "end": 2590
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2570,
            "end": 2590
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Then",
              "optional": false,
              "typeAnnotation": null,
              "start": 2592,
              "end": 2596
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2592,
            "end": 2596
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Else",
              "optional": false,
              "typeAnnotation": null,
              "start": 2598,
              "end": 2602
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2598,
            "end": 2602
          }
        ],
        "start": 2569,
        "end": 2603
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Cond",
            "optional": false,
            "typeAnnotation": null,
            "start": 2606,
            "end": 2610
          },
          "typeArguments": null,
          "start": 2606,
          "end": 2610
        },
        "extendsType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 2619,
            "end": 2623
          },
          "start": 2619,
          "end": 2623
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Then",
            "optional": false,
            "typeAnnotation": null,
            "start": 2626,
            "end": 2630
          },
          "typeArguments": null,
          "start": 2626,
          "end": 2630
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Else",
            "optional": false,
            "typeAnnotation": null,
            "start": 2633,
            "end": 2637
          },
          "typeArguments": null,
          "start": 2633,
          "end": 2637
        },
        "start": 2606,
        "end": 2637
      },
      "declare": false,
      "start": 2562,
      "end": 2638
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GetKey",
        "optional": false,
        "typeAnnotation": null,
        "start": 2645,
        "end": 2651
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 2652,
              "end": 2653
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2652,
            "end": 2653
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 2655,
              "end": 2656
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2655,
            "end": 2656
          }
        ],
        "start": 2651,
        "end": 2657
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "TP",
            "optional": false,
            "typeAnnotation": null,
            "start": 2669,
            "end": 2671
          },
          "constraint": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "S",
                "optional": false,
                "typeAnnotation": null,
                "start": 2681,
                "end": 2682
              },
              "typeArguments": null,
              "start": 2681,
              "end": 2682
            },
            "start": 2675,
            "end": 2682
          },
          "nameType": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Equal",
                "optional": false,
                "typeAnnotation": null,
                "start": 2686,
                "end": 2691
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
                        "name": "S",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2692,
                        "end": 2693
                      },
                      "typeArguments": null,
                      "start": 2692,
                      "end": 2693
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TP",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2694,
                        "end": 2696
                      },
                      "typeArguments": null,
                      "start": 2694,
                      "end": 2696
                    },
                    "start": 2692,
                    "end": 2697
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "V",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2699,
                      "end": 2700
                    },
                    "typeArguments": null,
                    "start": 2699,
                    "end": 2700
                  }
                ],
                "start": 2691,
                "end": 2701
              },
              "start": 2686,
              "end": 2701
            },
            "extendsType": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 2710,
                "end": 2714
              },
              "start": 2710,
              "end": 2714
            },
            "trueType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TP",
                "optional": false,
                "typeAnnotation": null,
                "start": 2717,
                "end": 2719
              },
              "typeArguments": null,
              "start": 2717,
              "end": 2719
            },
            "falseType": {
              "type": "TSNeverKeyword",
              "start": 2722,
              "end": 2727
            },
            "start": 2686,
            "end": 2727
          },
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 2730,
            "end": 2733
          },
          "optional": false,
          "readonly": null,
          "start": 2666,
          "end": 2735
        },
        "start": 2660,
        "end": 2735
      },
      "declare": false,
      "start": 2640,
      "end": 2736
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GetKeyWithIf",
        "optional": false,
        "typeAnnotation": null,
        "start": 2743,
        "end": 2755
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 2756,
              "end": 2757
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2756,
            "end": 2757
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 2759,
              "end": 2760
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2759,
            "end": 2760
          }
        ],
        "start": 2755,
        "end": 2761
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "TP",
            "optional": false,
            "typeAnnotation": null,
            "start": 2773,
            "end": 2775
          },
          "constraint": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "S",
                "optional": false,
                "typeAnnotation": null,
                "start": 2785,
                "end": 2786
              },
              "typeArguments": null,
              "start": 2785,
              "end": 2786
            },
            "start": 2779,
            "end": 2786
          },
          "nameType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "If",
              "optional": false,
              "typeAnnotation": null,
              "start": 2790,
              "end": 2792
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Equal",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2793,
                    "end": 2798
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
                            "name": "S",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2799,
                            "end": 2800
                          },
                          "typeArguments": null,
                          "start": 2799,
                          "end": 2800
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TP",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2801,
                            "end": 2803
                          },
                          "typeArguments": null,
                          "start": 2801,
                          "end": 2803
                        },
                        "start": 2799,
                        "end": 2804
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "V",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2806,
                          "end": 2807
                        },
                        "typeArguments": null,
                        "start": 2806,
                        "end": 2807
                      }
                    ],
                    "start": 2798,
                    "end": 2808
                  },
                  "start": 2793,
                  "end": 2808
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TP",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2810,
                    "end": 2812
                  },
                  "typeArguments": null,
                  "start": 2810,
                  "end": 2812
                },
                {
                  "type": "TSNeverKeyword",
                  "start": 2814,
                  "end": 2819
                }
              ],
              "start": 2792,
              "end": 2820
            },
            "start": 2790,
            "end": 2820
          },
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 2823,
            "end": 2826
          },
          "optional": false,
          "readonly": null,
          "start": 2770,
          "end": 2828
        },
        "start": 2764,
        "end": 2828
      },
      "declare": false,
      "start": 2738,
      "end": 2829
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GetObjWithIf",
        "optional": false,
        "typeAnnotation": null,
        "start": 2836,
        "end": 2848
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
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
              "name": "V",
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
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "TP",
          "optional": false,
          "typeAnnotation": null,
          "start": 2860,
          "end": 2862
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 2872,
              "end": 2873
            },
            "typeArguments": null,
            "start": 2872,
            "end": 2873
          },
          "start": 2866,
          "end": 2873
        },
        "nameType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "If",
            "optional": false,
            "typeAnnotation": null,
            "start": 2877,
            "end": 2879
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Equal",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2880,
                  "end": 2885
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
                          "name": "S",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2886,
                          "end": 2887
                        },
                        "typeArguments": null,
                        "start": 2886,
                        "end": 2887
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TP",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2888,
                          "end": 2890
                        },
                        "typeArguments": null,
                        "start": 2888,
                        "end": 2890
                      },
                      "start": 2886,
                      "end": 2891
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "V",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2893,
                        "end": 2894
                      },
                      "typeArguments": null,
                      "start": 2893,
                      "end": 2894
                    }
                  ],
                  "start": 2885,
                  "end": 2895
                },
                "start": 2880,
                "end": 2895
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TP",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2897,
                  "end": 2899
                },
                "typeArguments": null,
                "start": 2897,
                "end": 2899
              },
              {
                "type": "TSNeverKeyword",
                "start": 2901,
                "end": 2906
              }
            ],
            "start": 2879,
            "end": 2907
          },
          "start": 2877,
          "end": 2907
        },
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 2910,
          "end": 2913
        },
        "optional": false,
        "readonly": null,
        "start": 2857,
        "end": 2915
      },
      "declare": false,
      "start": 2831,
      "end": 2916
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Task",
        "optional": false,
        "typeAnnotation": null,
        "start": 2923,
        "end": 2927
      },
      "typeParameters": null,
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
              "name": "isDone",
              "optional": false,
              "typeAnnotation": null,
              "start": 2934,
              "end": 2940
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 2942,
                "end": 2949
              },
              "start": 2940,
              "end": 2949
            },
            "accessibility": null,
            "static": false,
            "start": 2934,
            "end": 2950
          }
        ],
        "start": 2930,
        "end": 2952
      },
      "declare": false,
      "start": 2918,
      "end": 2953
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Schema",
        "optional": false,
        "typeAnnotation": null,
        "start": 2960,
        "end": 2966
      },
      "typeParameters": null,
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
              "name": "root",
              "optional": false,
              "typeAnnotation": null,
              "start": 2973,
              "end": 2977
            },
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
                      "name": "title",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2985,
                      "end": 2990
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 2992,
                        "end": 2998
                      },
                      "start": 2990,
                      "end": 2998
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2985,
                    "end": 2999
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "task",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3004,
                      "end": 3008
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Task",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3010,
                          "end": 3014
                        },
                        "typeArguments": null,
                        "start": 3010,
                        "end": 3014
                      },
                      "start": 3008,
                      "end": 3014
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 3004,
                    "end": 3015
                  }
                ],
                "start": 2979,
                "end": 3019
              },
              "start": 2977,
              "end": 3019
            },
            "accessibility": null,
            "static": false,
            "start": 2973,
            "end": 3019
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "Task",
              "optional": false,
              "typeAnnotation": null,
              "start": 3022,
              "end": 3026
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Task",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3028,
                  "end": 3032
                },
                "typeArguments": null,
                "start": 3028,
                "end": 3032
              },
              "start": 3026,
              "end": 3032
            },
            "accessibility": null,
            "static": false,
            "start": 3022,
            "end": 3033
          }
        ],
        "start": 2969,
        "end": 3035
      },
      "declare": false,
      "start": 2955,
      "end": 3036
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Res1",
        "optional": false,
        "typeAnnotation": null,
        "start": 3043,
        "end": 3047
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "GetKey",
          "optional": false,
          "typeAnnotation": null,
          "start": 3050,
          "end": 3056
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Schema",
                "optional": false,
                "typeAnnotation": null,
                "start": 3057,
                "end": 3063
              },
              "typeArguments": null,
              "start": 3057,
              "end": 3063
            },
            {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Schema",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3065,
                    "end": 3071
                  },
                  "typeArguments": null,
                  "start": 3065,
                  "end": 3071
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "root",
                    "raw": "'root'",
                    "start": 3072,
                    "end": 3078
                  },
                  "start": 3072,
                  "end": 3078
                },
                "start": 3065,
                "end": 3079
              },
              "indexType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "task",
                  "raw": "'task'",
                  "start": 3080,
                  "end": 3086
                },
                "start": 3080,
                "end": 3086
              },
              "start": 3065,
              "end": 3087
            }
          ],
          "start": 3056,
          "end": 3088
        },
        "start": 3050,
        "end": 3088
      },
      "declare": false,
      "start": 3038,
      "end": 3089
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Res2",
        "optional": false,
        "typeAnnotation": null,
        "start": 3106,
        "end": 3110
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "GetKeyWithIf",
          "optional": false,
          "typeAnnotation": null,
          "start": 3113,
          "end": 3125
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Schema",
                "optional": false,
                "typeAnnotation": null,
                "start": 3126,
                "end": 3132
              },
              "typeArguments": null,
              "start": 3126,
              "end": 3132
            },
            {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Schema",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3134,
                    "end": 3140
                  },
                  "typeArguments": null,
                  "start": 3134,
                  "end": 3140
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "root",
                    "raw": "'root'",
                    "start": 3141,
                    "end": 3147
                  },
                  "start": 3141,
                  "end": 3147
                },
                "start": 3134,
                "end": 3148
              },
              "indexType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "task",
                  "raw": "'task'",
                  "start": 3149,
                  "end": 3155
                },
                "start": 3149,
                "end": 3155
              },
              "start": 3134,
              "end": 3156
            }
          ],
          "start": 3125,
          "end": 3157
        },
        "start": 3113,
        "end": 3157
      },
      "declare": false,
      "start": 3101,
      "end": 3158
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Res3",
        "optional": false,
        "typeAnnotation": null,
        "start": 3175,
        "end": 3179
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "GetObjWithIf",
            "optional": false,
            "typeAnnotation": null,
            "start": 3188,
            "end": 3200
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Schema",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3201,
                  "end": 3207
                },
                "typeArguments": null,
                "start": 3201,
                "end": 3207
              },
              {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Schema",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3209,
                      "end": 3215
                    },
                    "typeArguments": null,
                    "start": 3209,
                    "end": 3215
                  },
                  "indexType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "root",
                      "raw": "'root'",
                      "start": 3216,
                      "end": 3222
                    },
                    "start": 3216,
                    "end": 3222
                  },
                  "start": 3209,
                  "end": 3223
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "task",
                    "raw": "'task'",
                    "start": 3224,
                    "end": 3230
                  },
                  "start": 3224,
                  "end": 3230
                },
                "start": 3209,
                "end": 3231
              }
            ],
            "start": 3200,
            "end": 3232
          },
          "start": 3188,
          "end": 3232
        },
        "start": 3182,
        "end": 3232
      },
      "declare": false,
      "start": 3170,
      "end": 3233
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "KeysExtendedBy",
        "optional": false,
        "typeAnnotation": null,
        "start": 3273,
        "end": 3287
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
              "start": 3288,
              "end": 3289
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3288,
            "end": 3289
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 3291,
              "end": 3292
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3291,
            "end": 3292
          }
        ],
        "start": 3287,
        "end": 3293
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 3305,
            "end": 3306
          },
          "constraint": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 3316,
                "end": 3317
              },
              "typeArguments": null,
              "start": 3316,
              "end": 3317
            },
            "start": 3310,
            "end": 3317
          },
          "nameType": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 3321,
                "end": 3322
              },
              "typeArguments": null,
              "start": 3321,
              "end": 3322
            },
            "extendsType": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3331,
                  "end": 3332
                },
                "typeArguments": null,
                "start": 3331,
                "end": 3332
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3333,
                  "end": 3334
                },
                "typeArguments": null,
                "start": 3333,
                "end": 3334
              },
              "start": 3331,
              "end": 3335
            },
            "trueType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 3338,
                "end": 3339
              },
              "typeArguments": null,
              "start": 3338,
              "end": 3339
            },
            "falseType": {
              "type": "TSNeverKeyword",
              "start": 3342,
              "end": 3347
            },
            "start": 3321,
            "end": 3347
          },
          "typeAnnotation": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 3351,
                "end": 3352
              },
              "typeArguments": null,
              "start": 3351,
              "end": 3352
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 3353,
                "end": 3354
              },
              "typeArguments": null,
              "start": 3353,
              "end": 3354
            },
            "start": 3351,
            "end": 3355
          },
          "optional": false,
          "readonly": null,
          "start": 3302,
          "end": 3357
        },
        "start": 3296,
        "end": 3357
      },
      "declare": false,
      "start": 3268,
      "end": 3358
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 3370,
        "end": 3371
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
              "start": 3378,
              "end": 3379
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 3381,
                "end": 3388
              },
              "start": 3379,
              "end": 3388
            },
            "accessibility": null,
            "static": false,
            "start": 3378,
            "end": 3389
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
              "start": 3394,
              "end": 3395
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 3397,
                "end": 3403
              },
              "start": 3395,
              "end": 3403
            },
            "accessibility": null,
            "static": false,
            "start": 3394,
            "end": 3404
          }
        ],
        "start": 3372,
        "end": 3406
      },
      "declare": false,
      "start": 3360,
      "end": 3406
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 3417,
        "end": 3418
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
                "name": "KeysExtendedBy",
                "optional": false,
                "typeAnnotation": null,
                "start": 3422,
                "end": 3436
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "M",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3437,
                      "end": 3438
                    },
                    "typeArguments": null,
                    "start": 3437,
                    "end": 3438
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 3440,
                    "end": 3446
                  }
                ],
                "start": 3436,
                "end": 3447
              },
              "start": 3422,
              "end": 3447
            },
            "start": 3420,
            "end": 3447
          },
          "start": 3419,
          "end": 3447
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 3462,
              "end": 3463
            },
            "start": 3455,
            "end": 3464
          }
        ],
        "start": 3449,
        "end": 3466
      },
      "expression": false,
      "start": 3408,
      "end": 3466
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 3468,
          "end": 3469
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "a",
            "raw": "\"a\"",
            "start": 3470,
            "end": 3473
          }
        ],
        "optional": false,
        "start": 3468,
        "end": 3474
      },
      "directive": null,
      "start": 3468,
      "end": 3475
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NameMap",
        "optional": false,
        "typeAnnotation": null,
        "start": 3515,
        "end": 3522
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": "a",
              "raw": "'a'",
              "start": 3527,
              "end": 3530
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "x",
                  "raw": "'x'",
                  "start": 3532,
                  "end": 3535
                },
                "start": 3532,
                "end": 3535
              },
              "start": 3530,
              "end": 3535
            },
            "accessibility": null,
            "static": false,
            "start": 3527,
            "end": 3536
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": "b",
              "raw": "'b'",
              "start": 3537,
              "end": 3540
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "y",
                  "raw": "'y'",
                  "start": 3542,
                  "end": 3545
                },
                "start": 3542,
                "end": 3545
              },
              "start": 3540,
              "end": 3545
            },
            "accessibility": null,
            "static": false,
            "start": 3537,
            "end": 3546
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": "c",
              "raw": "'c'",
              "start": 3547,
              "end": 3550
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "z",
                  "raw": "'z'",
                  "start": 3552,
                  "end": 3555
                },
                "start": 3552,
                "end": 3555
              },
              "start": 3550,
              "end": 3555
            },
            "accessibility": null,
            "static": false,
            "start": 3547,
            "end": 3555
          }
        ],
        "start": 3525,
        "end": 3557
      },
      "declare": false,
      "start": 3510,
      "end": 3558
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TS0",
        "optional": false,
        "typeAnnotation": null,
        "start": 3602,
        "end": 3605
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
              "start": 3606,
              "end": 3607
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3606,
            "end": 3607
          }
        ],
        "start": 3605,
        "end": 3608
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 3620,
            "end": 3621
          },
          "constraint": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 3631,
                "end": 3632
              },
              "typeArguments": null,
              "start": 3631,
              "end": 3632
            },
            "start": 3625,
            "end": 3632
          },
          "nameType": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 3642,
                "end": 3648
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
                      "start": 3649,
                      "end": 3650
                    },
                    "typeArguments": null,
                    "start": 3649,
                    "end": 3650
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 3652,
                    "end": 3658
                  }
                ],
                "start": 3648,
                "end": 3659
              },
              "start": 3642,
              "end": 3659
            },
            "start": 3636,
            "end": 3659
          },
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 3662,
            "end": 3668
          },
          "optional": false,
          "readonly": null,
          "start": 3617,
          "end": 3670
        },
        "start": 3611,
        "end": 3670
      },
      "declare": false,
      "start": 3597,
      "end": 3671
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TS1",
        "optional": false,
        "typeAnnotation": null,
        "start": 3677,
        "end": 3680
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
              "start": 3681,
              "end": 3682
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3681,
            "end": 3682
          }
        ],
        "start": 3680,
        "end": 3683
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 3695,
            "end": 3696
          },
          "constraint": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 3706,
                "end": 3707
              },
              "typeArguments": null,
              "start": 3706,
              "end": 3707
            },
            "start": 3700,
            "end": 3707
          },
          "nameType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Extract",
              "optional": false,
              "typeAnnotation": null,
              "start": 3711,
              "end": 3718
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
                    "start": 3719,
                    "end": 3720
                  },
                  "typeArguments": null,
                  "start": 3719,
                  "end": 3720
                },
                {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "'a'",
                        "start": 3722,
                        "end": 3725
                      },
                      "start": 3722,
                      "end": 3725
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "b",
                        "raw": "'b'",
                        "start": 3728,
                        "end": 3731
                      },
                      "start": 3728,
                      "end": 3731
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "c",
                        "raw": "'c'",
                        "start": 3734,
                        "end": 3737
                      },
                      "start": 3734,
                      "end": 3737
                    }
                  ],
                  "start": 3722,
                  "end": 3737
                }
              ],
              "start": 3718,
              "end": 3738
            },
            "start": 3711,
            "end": 3738
          },
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 3741,
            "end": 3747
          },
          "optional": false,
          "readonly": null,
          "start": 3692,
          "end": 3749
        },
        "start": 3686,
        "end": 3749
      },
      "declare": false,
      "start": 3672,
      "end": 3750
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TS2",
        "optional": false,
        "typeAnnotation": null,
        "start": 3756,
        "end": 3759
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
              "start": 3760,
              "end": 3761
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3760,
            "end": 3761
          }
        ],
        "start": 3759,
        "end": 3762
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 3774,
            "end": 3775
          },
          "constraint": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 3785,
                "end": 3786
              },
              "typeArguments": null,
              "start": 3785,
              "end": 3786
            },
            "start": 3779,
            "end": 3786
          },
          "nameType": {
            "type": "TSIntersectionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3790,
                  "end": 3791
                },
                "typeArguments": null,
                "start": 3790,
                "end": 3791
              },
              {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "a",
                      "raw": "'a'",
                      "start": 3795,
                      "end": 3798
                    },
                    "start": 3795,
                    "end": 3798
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "b",
                      "raw": "'b'",
                      "start": 3801,
                      "end": 3804
                    },
                    "start": 3801,
                    "end": 3804
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "c",
                      "raw": "'c'",
                      "start": 3807,
                      "end": 3810
                    },
                    "start": 3807,
                    "end": 3810
                  }
                ],
                "start": 3795,
                "end": 3810
              }
            ],
            "start": 3790,
            "end": 3811
          },
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 3814,
            "end": 3820
          },
          "optional": false,
          "readonly": null,
          "start": 3771,
          "end": 3822
        },
        "start": 3765,
        "end": 3822
      },
      "declare": false,
      "start": 3751,
      "end": 3823
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TS3",
        "optional": false,
        "typeAnnotation": null,
        "start": 3829,
        "end": 3832
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
              "start": 3833,
              "end": 3834
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3833,
            "end": 3834
          }
        ],
        "start": 3832,
        "end": 3835
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 3847,
            "end": 3848
          },
          "constraint": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 3858,
                "end": 3859
              },
              "typeArguments": null,
              "start": 3858,
              "end": 3859
            },
            "start": 3852,
            "end": 3859
          },
          "nameType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Exclude",
              "optional": false,
              "typeAnnotation": null,
              "start": 3863,
              "end": 3870
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
                    "start": 3871,
                    "end": 3872
                  },
                  "typeArguments": null,
                  "start": 3871,
                  "end": 3872
                },
                {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "'a'",
                        "start": 3874,
                        "end": 3877
                      },
                      "start": 3874,
                      "end": 3877
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "b",
                        "raw": "'b'",
                        "start": 3880,
                        "end": 3883
                      },
                      "start": 3880,
                      "end": 3883
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "c",
                        "raw": "'c'",
                        "start": 3886,
                        "end": 3889
                      },
                      "start": 3886,
                      "end": 3889
                    }
                  ],
                  "start": 3874,
                  "end": 3889
                }
              ],
              "start": 3870,
              "end": 3890
            },
            "start": 3863,
            "end": 3890
          },
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 3893,
            "end": 3899
          },
          "optional": false,
          "readonly": null,
          "start": 3844,
          "end": 3901
        },
        "start": 3838,
        "end": 3901
      },
      "declare": false,
      "start": 3824,
      "end": 3902
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TS4",
        "optional": false,
        "typeAnnotation": null,
        "start": 3908,
        "end": 3911
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
              "start": 3912,
              "end": 3913
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3912,
            "end": 3913
          }
        ],
        "start": 3911,
        "end": 3914
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 3926,
            "end": 3927
          },
          "constraint": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 3937,
                "end": 3938
              },
              "typeArguments": null,
              "start": 3937,
              "end": 3938
            },
            "start": 3931,
            "end": 3938
          },
          "nameType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "NameMap",
                "optional": false,
                "typeAnnotation": null,
                "start": 3942,
                "end": 3949
              },
              "typeArguments": null,
              "start": 3942,
              "end": 3949
            },
            "indexType": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3950,
                    "end": 3951
                  },
                  "typeArguments": null,
                  "start": 3950,
                  "end": 3951
                },
                {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "NameMap",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3960,
                      "end": 3967
                    },
                    "typeArguments": null,
                    "start": 3960,
                    "end": 3967
                  },
                  "start": 3954,
                  "end": 3967
                }
              ],
              "start": 3950,
              "end": 3967
            },
            "start": 3942,
            "end": 3968
          },
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 3971,
            "end": 3977
          },
          "optional": false,
          "readonly": null,
          "start": 3923,
          "end": 3979
        },
        "start": 3917,
        "end": 3979
      },
      "declare": false,
      "start": 3903,
      "end": 3980
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TS5",
        "optional": false,
        "typeAnnotation": null,
        "start": 3986,
        "end": 3989
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
              "start": 3990,
              "end": 3991
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3990,
            "end": 3991
          }
        ],
        "start": 3989,
        "end": 3992
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 4004,
            "end": 4005
          },
          "constraint": {
            "type": "TSIntersectionType",
            "types": [
              {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4015,
                    "end": 4016
                  },
                  "typeArguments": null,
                  "start": 4015,
                  "end": 4016
                },
                "start": 4009,
                "end": 4016
              },
              {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "NameMap",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4025,
                    "end": 4032
                  },
                  "typeArguments": null,
                  "start": 4025,
                  "end": 4032
                },
                "start": 4019,
                "end": 4032
              }
            ],
            "start": 4009,
            "end": 4032
          },
          "nameType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "NameMap",
                "optional": false,
                "typeAnnotation": null,
                "start": 4036,
                "end": 4043
              },
              "typeArguments": null,
              "start": 4036,
              "end": 4043
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 4044,
                "end": 4045
              },
              "typeArguments": null,
              "start": 4044,
              "end": 4045
            },
            "start": 4036,
            "end": 4046
          },
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 4049,
            "end": 4055
          },
          "optional": false,
          "readonly": null,
          "start": 4001,
          "end": 4057
        },
        "start": 3995,
        "end": 4057
      },
      "declare": false,
      "start": 3981,
      "end": 4058
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TS6",
        "optional": false,
        "typeAnnotation": null,
        "start": 4064,
        "end": 4067
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
              "start": 4068,
              "end": 4069
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4068,
            "end": 4069
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 4071,
              "end": 4072
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4071,
            "end": 4072
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 4074,
              "end": 4075
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4074,
            "end": 4075
          }
        ],
        "start": 4067,
        "end": 4076
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 4089,
            "end": 4090
          },
          "constraint": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 4100,
                "end": 4101
              },
              "typeArguments": null,
              "start": 4100,
              "end": 4101
            },
            "start": 4094,
            "end": 4101
          },
          "nameType": {
            "type": "TSIntersectionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4105,
                  "end": 4106
                },
                "typeArguments": null,
                "start": 4105,
                "end": 4106
              },
              {
                "type": "TSConditionalType",
                "checkType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4110,
                    "end": 4111
                  },
                  "typeArguments": null,
                  "start": 4110,
                  "end": 4111
                },
                "extendsType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4120,
                    "end": 4121
                  },
                  "typeArguments": null,
                  "start": 4120,
                  "end": 4121
                },
                "trueType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4124,
                    "end": 4125
                  },
                  "typeArguments": null,
                  "start": 4124,
                  "end": 4125
                },
                "falseType": {
                  "type": "TSNeverKeyword",
                  "start": 4128,
                  "end": 4133
                },
                "start": 4110,
                "end": 4133
              }
            ],
            "start": 4105,
            "end": 4134
          },
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 4137,
            "end": 4143
          },
          "optional": false,
          "readonly": null,
          "start": 4085,
          "end": 4145
        },
        "start": 4079,
        "end": 4145
      },
      "declare": false,
      "start": 4059,
      "end": 4146
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TN0",
        "optional": false,
        "typeAnnotation": null,
        "start": 4195,
        "end": 4198
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
              "start": 4199,
              "end": 4200
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4199,
            "end": 4200
          }
        ],
        "start": 4198,
        "end": 4201
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 4213,
            "end": 4214
          },
          "constraint": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 4224,
                "end": 4225
              },
              "typeArguments": null,
              "start": 4224,
              "end": 4225
            },
            "start": 4218,
            "end": 4225
          },
          "nameType": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4229,
                  "end": 4230
                },
                "typeArguments": null,
                "start": 4229,
                "end": 4230
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4231,
                  "end": 4232
                },
                "typeArguments": null,
                "start": 4231,
                "end": 4232
              },
              "start": 4229,
              "end": 4233
            },
            "extendsType": {
              "type": "TSNumberKeyword",
              "start": 4242,
              "end": 4248
            },
            "trueType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 4251,
                "end": 4252
              },
              "typeArguments": null,
              "start": 4251,
              "end": 4252
            },
            "falseType": {
              "type": "TSNeverKeyword",
              "start": 4255,
              "end": 4260
            },
            "start": 4229,
            "end": 4260
          },
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 4263,
            "end": 4269
          },
          "optional": false,
          "readonly": null,
          "start": 4210,
          "end": 4271
        },
        "start": 4204,
        "end": 4271
      },
      "declare": false,
      "start": 4190,
      "end": 4272
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TN1",
        "optional": false,
        "typeAnnotation": null,
        "start": 4278,
        "end": 4281
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
              "start": 4282,
              "end": 4283
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4282,
            "end": 4283
          }
        ],
        "start": 4281,
        "end": 4284
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 4296,
            "end": 4297
          },
          "constraint": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 4307,
                "end": 4308
              },
              "typeArguments": null,
              "start": 4307,
              "end": 4308
            },
            "start": 4301,
            "end": 4308
          },
          "nameType": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSNumberKeyword",
              "start": 4312,
              "end": 4318
            },
            "extendsType": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4327,
                  "end": 4328
                },
                "typeArguments": null,
                "start": 4327,
                "end": 4328
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4329,
                  "end": 4330
                },
                "typeArguments": null,
                "start": 4329,
                "end": 4330
              },
              "start": 4327,
              "end": 4331
            },
            "trueType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 4334,
                "end": 4335
              },
              "typeArguments": null,
              "start": 4334,
              "end": 4335
            },
            "falseType": {
              "type": "TSNeverKeyword",
              "start": 4338,
              "end": 4343
            },
            "start": 4312,
            "end": 4343
          },
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 4346,
            "end": 4352
          },
          "optional": false,
          "readonly": null,
          "start": 4293,
          "end": 4354
        },
        "start": 4287,
        "end": 4354
      },
      "declare": false,
      "start": 4273,
      "end": 4355
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TN2",
        "optional": false,
        "typeAnnotation": null,
        "start": 4361,
        "end": 4364
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
              "start": 4365,
              "end": 4366
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4365,
            "end": 4366
          }
        ],
        "start": 4364,
        "end": 4367
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 4379,
            "end": 4380
          },
          "constraint": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 4390,
                "end": 4391
              },
              "typeArguments": null,
              "start": 4390,
              "end": 4391
            },
            "start": 4384,
            "end": 4391
          },
          "nameType": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "a",
                "raw": "'a'",
                "start": 4395,
                "end": 4398
              },
              "start": 4395,
              "end": 4398
            },
            "extendsType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 4407,
                "end": 4408
              },
              "typeArguments": null,
              "start": 4407,
              "end": 4408
            },
            "trueType": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "x",
                "raw": "'x'",
                "start": 4411,
                "end": 4414
              },
              "start": 4411,
              "end": 4414
            },
            "falseType": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "y",
                "raw": "'y'",
                "start": 4417,
                "end": 4420
              },
              "start": 4417,
              "end": 4420
            },
            "start": 4395,
            "end": 4420
          },
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 4423,
            "end": 4429
          },
          "optional": false,
          "readonly": null,
          "start": 4376,
          "end": 4431
        },
        "start": 4370,
        "end": 4431
      },
      "declare": false,
      "start": 4356,
      "end": 4432
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TN3",
        "optional": false,
        "typeAnnotation": null,
        "start": 4438,
        "end": 4441
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
              "start": 4442,
              "end": 4443
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4442,
            "end": 4443
          }
        ],
        "start": 4441,
        "end": 4444
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 4456,
            "end": 4457
          },
          "constraint": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 4467,
                "end": 4468
              },
              "typeArguments": null,
              "start": 4467,
              "end": 4468
            },
            "start": 4461,
            "end": 4468
          },
          "nameType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Exclude",
              "optional": false,
              "typeAnnotation": null,
              "start": 4472,
              "end": 4479
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Exclude",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4480,
                    "end": 4487
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Exclude",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4488,
                          "end": 4495
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
                                "start": 4496,
                                "end": 4497
                              },
                              "typeArguments": null,
                              "start": 4496,
                              "end": 4497
                            },
                            {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "c",
                                "raw": "'c'",
                                "start": 4499,
                                "end": 4502
                              },
                              "start": 4499,
                              "end": 4502
                            }
                          ],
                          "start": 4495,
                          "end": 4503
                        },
                        "start": 4488,
                        "end": 4503
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "b",
                          "raw": "'b'",
                          "start": 4505,
                          "end": 4508
                        },
                        "start": 4505,
                        "end": 4508
                      }
                    ],
                    "start": 4487,
                    "end": 4509
                  },
                  "start": 4480,
                  "end": 4509
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "a",
                    "raw": "'a'",
                    "start": 4511,
                    "end": 4514
                  },
                  "start": 4511,
                  "end": 4514
                }
              ],
              "start": 4479,
              "end": 4515
            },
            "start": 4472,
            "end": 4515
          },
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 4518,
            "end": 4524
          },
          "optional": false,
          "readonly": null,
          "start": 4453,
          "end": 4526
        },
        "start": 4447,
        "end": 4526
      },
      "declare": false,
      "start": 4433,
      "end": 4527
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TN4",
        "optional": false,
        "typeAnnotation": null,
        "start": 4533,
        "end": 4536
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
              "start": 4537,
              "end": 4538
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4537,
            "end": 4538
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 4540,
              "end": 4541
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4540,
            "end": 4541
          }
        ],
        "start": 4536,
        "end": 4542
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 4554,
            "end": 4555
          },
          "constraint": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 4565,
                "end": 4566
              },
              "typeArguments": null,
              "start": 4565,
              "end": 4566
            },
            "start": 4559,
            "end": 4566
          },
          "nameType": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4571,
                  "end": 4572
                },
                "typeArguments": null,
                "start": 4571,
                "end": 4572
              },
              "extendsType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4581,
                  "end": 4582
                },
                "typeArguments": null,
                "start": 4581,
                "end": 4582
              },
              "trueType": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4585,
                    "end": 4586
                  },
                  "typeArguments": null,
                  "start": 4585,
                  "end": 4586
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4587,
                    "end": 4588
                  },
                  "typeArguments": null,
                  "start": 4587,
                  "end": 4588
                },
                "start": 4585,
                "end": 4589
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "start": 4592,
                "end": 4597
              },
              "start": 4571,
              "end": 4597
            },
            "extendsType": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4607,
                  "end": 4608
                },
                "typeArguments": null,
                "start": 4607,
                "end": 4608
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4609,
                  "end": 4610
                },
                "typeArguments": null,
                "start": 4609,
                "end": 4610
              },
              "start": 4607,
              "end": 4611
            },
            "trueType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 4614,
                "end": 4615
              },
              "typeArguments": null,
              "start": 4614,
              "end": 4615
            },
            "falseType": {
              "type": "TSNeverKeyword",
              "start": 4618,
              "end": 4623
            },
            "start": 4570,
            "end": 4623
          },
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 4626,
            "end": 4632
          },
          "optional": false,
          "readonly": null,
          "start": 4551,
          "end": 4634
        },
        "start": 4545,
        "end": 4634
      },
      "declare": false,
      "start": 4528,
      "end": 4635
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TN5",
        "optional": false,
        "typeAnnotation": null,
        "start": 4641,
        "end": 4644
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
              "start": 4645,
              "end": 4646
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4645,
            "end": 4646
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 4648,
              "end": 4649
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4648,
            "end": 4649
          }
        ],
        "start": 4644,
        "end": 4650
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 4662,
            "end": 4663
          },
          "constraint": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 4673,
                "end": 4674
              },
              "typeArguments": null,
              "start": 4673,
              "end": 4674
            },
            "start": 4667,
            "end": 4674
          },
          "nameType": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 4687,
                "end": 4688
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4692,
                  "end": 4693
                },
                "typeArguments": null,
                "start": 4692,
                "end": 4693
              },
              "nameType": {
                "type": "TSConditionalType",
                "checkType": {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4697,
                      "end": 4698
                    },
                    "typeArguments": null,
                    "start": 4697,
                    "end": 4698
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4699,
                      "end": 4700
                    },
                    "typeArguments": null,
                    "start": 4699,
                    "end": 4700
                  },
                  "start": 4697,
                  "end": 4701
                },
                "extendsType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4710,
                    "end": 4711
                  },
                  "typeArguments": null,
                  "start": 4710,
                  "end": 4711
                },
                "trueType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4714,
                    "end": 4715
                  },
                  "typeArguments": null,
                  "start": 4714,
                  "end": 4715
                },
                "falseType": {
                  "type": "TSNeverKeyword",
                  "start": 4718,
                  "end": 4723
                },
                "start": 4697,
                "end": 4723
              },
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 4726,
                  "end": 4730
                },
                "start": 4726,
                "end": 4730
              },
              "optional": false,
              "readonly": null,
              "start": 4684,
              "end": 4732
            },
            "start": 4678,
            "end": 4732
          },
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 4735,
            "end": 4741
          },
          "optional": false,
          "readonly": null,
          "start": 4659,
          "end": 4743
        },
        "start": 4653,
        "end": 4743
      },
      "declare": false,
      "start": 4636,
      "end": 4744
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Fruit",
        "optional": false,
        "typeAnnotation": null,
        "start": 4818,
        "end": 4823
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
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
                  "start": 4838,
                  "end": 4842
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "apple",
                      "raw": "\"apple\"",
                      "start": 4844,
                      "end": 4851
                    },
                    "start": 4844,
                    "end": 4851
                  },
                  "start": 4842,
                  "end": 4851
                },
                "accessibility": null,
                "static": false,
                "start": 4838,
                "end": 4852
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "color",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4859,
                  "end": 4864
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "red",
                      "raw": "\"red\"",
                      "start": 4866,
                      "end": 4871
                    },
                    "start": 4866,
                    "end": 4871
                  },
                  "start": 4864,
                  "end": 4871
                },
                "accessibility": null,
                "static": false,
                "start": 4859,
                "end": 4872
              }
            ],
            "start": 4830,
            "end": 4878
          },
          {
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
                  "start": 4891,
                  "end": 4895
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "banana",
                      "raw": "\"banana\"",
                      "start": 4897,
                      "end": 4905
                    },
                    "start": 4897,
                    "end": 4905
                  },
                  "start": 4895,
                  "end": 4905
                },
                "accessibility": null,
                "static": false,
                "start": 4891,
                "end": 4906
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "color",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4913,
                  "end": 4918
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "yellow",
                      "raw": "\"yellow\"",
                      "start": 4920,
                      "end": 4928
                    },
                    "start": 4920,
                    "end": 4928
                  },
                  "start": 4918,
                  "end": 4928
                },
                "accessibility": null,
                "static": false,
                "start": 4913,
                "end": 4929
              }
            ],
            "start": 4883,
            "end": 4935
          },
          {
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
                  "start": 4948,
                  "end": 4952
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "orange",
                      "raw": "\"orange\"",
                      "start": 4954,
                      "end": 4962
                    },
                    "start": 4954,
                    "end": 4962
                  },
                  "start": 4952,
                  "end": 4962
                },
                "accessibility": null,
                "static": false,
                "start": 4948,
                "end": 4963
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "color",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4970,
                  "end": 4975
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "orange",
                      "raw": "\"orange\"",
                      "start": 4977,
                      "end": 4985
                    },
                    "start": 4977,
                    "end": 4985
                  },
                  "start": 4975,
                  "end": 4985
                },
                "accessibility": null,
                "static": false,
                "start": 4970,
                "end": 4986
              }
            ],
            "start": 4940,
            "end": 4992
          }
        ],
        "start": 4828,
        "end": 4992
      },
      "declare": false,
      "start": 4813,
      "end": 4993
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Result1",
        "optional": false,
        "typeAnnotation": null,
        "start": 4999,
        "end": 5006
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
              "start": 5007,
              "end": 5008
            },
            "constraint": {
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
                    "start": 5018,
                    "end": 5022
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 5024,
                          "end": 5030
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 5033,
                          "end": 5039
                        }
                      ],
                      "start": 5024,
                      "end": 5039
                    },
                    "start": 5022,
                    "end": 5039
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 5018,
                  "end": 5040
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "color",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5041,
                    "end": 5046
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 5048,
                          "end": 5054
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 5057,
                          "end": 5063
                        }
                      ],
                      "start": 5048,
                      "end": 5063
                    },
                    "start": 5046,
                    "end": 5063
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 5041,
                  "end": 5063
                }
              ],
              "start": 5017,
              "end": 5065
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5007,
            "end": 5065
          }
        ],
        "start": 5006,
        "end": 5066
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "Key",
          "optional": false,
          "typeAnnotation": null,
          "start": 5074,
          "end": 5077
        },
        "constraint": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 5081,
            "end": 5082
          },
          "typeArguments": null,
          "start": 5081,
          "end": 5082
        },
        "nameType": {
          "type": "TSTemplateLiteralType",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 5086,
              "end": 5089
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": ":",
                "cooked": ":"
              },
              "tail": false,
              "start": 5100,
              "end": 5104
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 5116,
              "end": 5118
            }
          ],
          "types": [
            {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Key",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5089,
                  "end": 5092
                },
                "typeArguments": null,
                "start": 5089,
                "end": 5092
              },
              "indexType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "name",
                  "raw": "'name'",
                  "start": 5093,
                  "end": 5099
                },
                "start": 5093,
                "end": 5099
              },
              "start": 5089,
              "end": 5100
            },
            {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Key",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5104,
                  "end": 5107
                },
                "typeArguments": null,
                "start": 5104,
                "end": 5107
              },
              "indexType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "color",
                  "raw": "'color'",
                  "start": 5108,
                  "end": 5115
                },
                "start": 5108,
                "end": 5115
              },
              "start": 5104,
              "end": 5116
            }
          ],
          "start": 5086,
          "end": 5118
        },
        "typeAnnotation": {
          "type": "TSUnknownKeyword",
          "start": 5121,
          "end": 5128
        },
        "optional": false,
        "readonly": null,
        "start": 5069,
        "end": 5130
      },
      "declare": false,
      "start": 4994,
      "end": 5131
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Result2",
        "optional": false,
        "typeAnnotation": null,
        "start": 5138,
        "end": 5145
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
              "start": 5146,
              "end": 5147
            },
            "constraint": {
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
                    "start": 5157,
                    "end": 5161
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 5163,
                          "end": 5169
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 5172,
                          "end": 5178
                        }
                      ],
                      "start": 5163,
                      "end": 5178
                    },
                    "start": 5161,
                    "end": 5178
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 5157,
                  "end": 5179
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "color",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5180,
                    "end": 5185
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 5187,
                          "end": 5193
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 5196,
                          "end": 5202
                        }
                      ],
                      "start": 5187,
                      "end": 5202
                    },
                    "start": 5185,
                    "end": 5202
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 5180,
                  "end": 5202
                }
              ],
              "start": 5156,
              "end": 5204
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5146,
            "end": 5204
          }
        ],
        "start": 5145,
        "end": 5205
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "Key",
            "optional": false,
            "typeAnnotation": null,
            "start": 5219,
            "end": 5222
          },
          "constraint": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 5226,
              "end": 5227
            },
            "typeArguments": null,
            "start": 5226,
            "end": 5227
          },
          "nameType": {
            "type": "TSTemplateLiteralType",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false,
                "start": 5231,
                "end": 5234
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": ":",
                  "cooked": ":"
                },
                "tail": false,
                "start": 5245,
                "end": 5249
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": true,
                "start": 5261,
                "end": 5263
              }
            ],
            "types": [
              {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5234,
                    "end": 5237
                  },
                  "typeArguments": null,
                  "start": 5234,
                  "end": 5237
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "name",
                    "raw": "'name'",
                    "start": 5238,
                    "end": 5244
                  },
                  "start": 5238,
                  "end": 5244
                },
                "start": 5234,
                "end": 5245
              },
              {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5249,
                    "end": 5252
                  },
                  "typeArguments": null,
                  "start": 5249,
                  "end": 5252
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "color",
                    "raw": "'color'",
                    "start": 5253,
                    "end": 5260
                  },
                  "start": 5253,
                  "end": 5260
                },
                "start": 5249,
                "end": 5261
              }
            ],
            "start": 5231,
            "end": 5263
          },
          "typeAnnotation": {
            "type": "TSUnknownKeyword",
            "start": 5266,
            "end": 5273
          },
          "optional": false,
          "readonly": null,
          "start": 5214,
          "end": 5275
        },
        "start": 5208,
        "end": 5275
      },
      "declare": false,
      "start": 5133,
      "end": 5275
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test1",
        "optional": false,
        "typeAnnotation": null,
        "start": 5281,
        "end": 5286
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Result1",
            "optional": false,
            "typeAnnotation": null,
            "start": 5295,
            "end": 5302
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Fruit",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5303,
                  "end": 5308
                },
                "typeArguments": null,
                "start": 5303,
                "end": 5308
              }
            ],
            "start": 5302,
            "end": 5309
          },
          "start": 5295,
          "end": 5309
        },
        "start": 5289,
        "end": 5309
      },
      "declare": false,
      "start": 5276,
      "end": 5309
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test2",
        "optional": false,
        "typeAnnotation": null,
        "start": 5366,
        "end": 5371
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Result2",
          "optional": false,
          "typeAnnotation": null,
          "start": 5374,
          "end": 5381
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Fruit",
                "optional": false,
                "typeAnnotation": null,
                "start": 5382,
                "end": 5387
              },
              "typeArguments": null,
              "start": 5382,
              "end": 5387
            }
          ],
          "start": 5381,
          "end": 5388
        },
        "start": 5374,
        "end": 5388
      },
      "declare": false,
      "start": 5361,
      "end": 5388
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 31,
  "end": 5439
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 31,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "Getters",
    "start": 36,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 52,
    "end": 53
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 54,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 57,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 67,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 74,
    "end": 76
  },
  {
    "type": "Template",
    "value": "`get${",
    "start": 77,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "Capitalize",
    "start": 83,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 93,
    "end": 94
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
    "type": "Template",
    "value": "}`",
    "start": 96,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 104,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 113,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 115,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "TG1",
    "start": 120,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 124,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "Getters",
    "start": 126,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 134,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 136,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 141,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 149,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 152,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 154,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 160,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 162,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 172,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 257,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "PropDef",
    "start": 262,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 269,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 270,
    "end": 271
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 272,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 280,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 286,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 289,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 296,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 298,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 305,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 307,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 311,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 316,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 319,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "TypeFromDefs",
    "start": 324,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 336,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 337,
    "end": 338
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 339,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "PropDef",
    "start": 347,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 354,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 355,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 361,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 364,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 366,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 376,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 377,
    "end": 378
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 379,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 382,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 384,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 388,
    "end": 389
  },
  {
    "type": "String",
    "value": "'name'",
    "start": 389,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 396,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 397,
    "end": 398
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 400,
    "end": 401
  },
  {
    "type": "String",
    "value": "'type'",
    "start": 401,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 407,
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
    "type": "Identifier",
    "value": "type",
    "start": 413,
    "end": 417
  },
  {
    "type": "Identifier",
    "value": "TP1",
    "start": 418,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 422,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "TypeFromDefs",
    "start": 424,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 437,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 439,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 443,
    "end": 444
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 445,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 448,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 450,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 454,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 456,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 465,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 467,
    "end": 468
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 469,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 473,
    "end": 474
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 475,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 478,
    "end": 479
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 480,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 484,
    "end": 485
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 486,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 493,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 497,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 499,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 503,
    "end": 504
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 505,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 508,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 510,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 514,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 516,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 524,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 525,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 526,
    "end": 527
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 591,
    "end": 595
  },
  {
    "type": "Identifier",
    "value": "TA1",
    "start": 596,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 600,
    "end": 601
  },
  {
    "type": "Identifier",
    "value": "Getters",
    "start": 602,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 609,
    "end": 610
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 610,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 616,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 617,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 618,
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
    "value": "type",
    "start": 621,
    "end": 625
  },
  {
    "type": "Identifier",
    "value": "TA2",
    "start": 626,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 630,
    "end": 631
  },
  {
    "type": "Identifier",
    "value": "Getters",
    "start": 632,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 639,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 640,
    "end": 641
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 641,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 647,
    "end": 648
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 649,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 656,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 657,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 658,
    "end": 659
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 695,
    "end": 699
  },
  {
    "type": "Identifier",
    "value": "Methods",
    "start": 700,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 707,
    "end": 708
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 708,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 709,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 711,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 713,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 715,
    "end": 716
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 716,
    "end": 717
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 718,
    "end": 720
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 721,
    "end": 726
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 727,
    "end": 728
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 729,
    "end": 731
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 732,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 733,
    "end": 734
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 734,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 735,
    "end": 736
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 737,
    "end": 744
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 745,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 754,
    "end": 755
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 756,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 758,
    "end": 759
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 760,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 765,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 766,
    "end": 767
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 768,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 769,
    "end": 770
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 770,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 771,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 773,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 774,
    "end": 775
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 776,
    "end": 780
  },
  {
    "type": "Identifier",
    "value": "TM1",
    "start": 781,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 785,
    "end": 786
  },
  {
    "type": "Identifier",
    "value": "Methods",
    "start": 787,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 794,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 795,
    "end": 796
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 797,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 800,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 801,
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
    "value": "number",
    "start": 804,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 810,
    "end": 811
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 812,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 815,
    "end": 816
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 816,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 817,
    "end": 818
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 819,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 825,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 826,
    "end": 827
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 828,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 835,
    "end": 836
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 837,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 840,
    "end": 841
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 842,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 849,
    "end": 850
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 851,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 858,
    "end": 859
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 859,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 860,
    "end": 861
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 913,
    "end": 917
  },
  {
    "type": "Identifier",
    "value": "DoubleProp",
    "start": 918,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 928,
    "end": 929
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 929,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 930,
    "end": 931
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 932,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 934,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 936,
    "end": 937
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 937,
    "end": 938
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 939,
    "end": 941
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 942,
    "end": 947
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 948,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 950,
    "end": 951
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 952,
    "end": 958
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 959,
    "end": 961
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 962,
    "end": 965
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 965,
    "end": 966
  },
  {
    "type": "Template",
    "value": "}1`",
    "start": 966,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 970,
    "end": 971
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 972,
    "end": 975
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 975,
    "end": 976
  },
  {
    "type": "Template",
    "value": "}2`",
    "start": 976,
    "end": 979
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "[",
    "start": 983,
    "end": 984
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 984,
    "end": 985
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 985,
    "end": 986
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 987,
    "end": 988
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 989,
    "end": 993
  },
  {
    "type": "Identifier",
    "value": "TD1",
    "start": 994,
    "end": 997
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 998,
    "end": 999
  },
  {
    "type": "Identifier",
    "value": "DoubleProp",
    "start": 1000,
    "end": 1010
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1011,
    "end": 1012
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1013,
    "end": 1014
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1016,
    "end": 1022
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1024,
    "end": 1025
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1025,
    "end": 1026
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1027,
    "end": 1033
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1036,
    "end": 1037
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1093,
    "end": 1097
  },
  {
    "type": "Identifier",
    "value": "TD2",
    "start": 1098,
    "end": 1101
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1102,
    "end": 1103
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1104,
    "end": 1109
  },
  {
    "type": "Identifier",
    "value": "TD1",
    "start": 1110,
    "end": 1113
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1113,
    "end": 1114
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1145,
    "end": 1149
  },
  {
    "type": "Identifier",
    "value": "TD3",
    "start": 1150,
    "end": 1153
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1153,
    "end": 1154
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1154,
    "end": 1155
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1155,
    "end": 1156
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1157,
    "end": 1158
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1159,
    "end": 1164
  },
  {
    "type": "Identifier",
    "value": "DoubleProp",
    "start": 1165,
    "end": 1175
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1176,
    "end": 1177
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1203,
    "end": 1207
  },
  {
    "type": "Identifier",
    "value": "TD4",
    "start": 1208,
    "end": 1211
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1212,
    "end": 1213
  },
  {
    "type": "Identifier",
    "value": "TD3",
    "start": 1214,
    "end": 1217
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1217,
    "end": 1218
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1218,
    "end": 1219
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1221,
    "end": 1222
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1223,
    "end": 1229
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1229,
    "end": 1230
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1231,
    "end": 1232
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1232,
    "end": 1233
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1234,
    "end": 1240
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1241,
    "end": 1242
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1242,
    "end": 1243
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1298,
    "end": 1302
  },
  {
    "type": "Identifier",
    "value": "Lazyify",
    "start": 1303,
    "end": 1310
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1310,
    "end": 1311
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1311,
    "end": 1312
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1312,
    "end": 1313
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1314,
    "end": 1315
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1316,
    "end": 1317
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1322,
    "end": 1323
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1323,
    "end": 1324
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1325,
    "end": 1327
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1328,
    "end": 1333
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1334,
    "end": 1335
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1336,
    "end": 1338
  },
  {
    "type": "Template",
    "value": "`get${",
    "start": 1339,
    "end": 1345
  },
  {
    "type": "Identifier",
    "value": "Capitalize",
    "start": 1345,
    "end": 1355
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1355,
    "end": 1356
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1356,
    "end": 1357
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1358,
    "end": 1359
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1360,
    "end": 1366
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1366,
    "end": 1367
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1367,
    "end": 1369
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1369,
    "end": 1370
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1370,
    "end": 1371
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "=>",
    "start": 1375,
    "end": 1377
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1378,
    "end": 1379
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1379,
    "end": 1380
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1380,
    "end": 1381
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1381,
    "end": 1382
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1383,
    "end": 1384
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1384,
    "end": 1385
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1387,
    "end": 1396
  },
  {
    "type": "Identifier",
    "value": "Person",
    "start": 1397,
    "end": 1403
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1404,
    "end": 1405
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1410,
    "end": 1418
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1419,
    "end": 1423
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1423,
    "end": 1424
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1425,
    "end": 1431
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1431,
    "end": 1432
  },
  {
    "type": "Identifier",
    "value": "age",
    "start": 1437,
    "end": 1440
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1440,
    "end": 1441
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1442,
    "end": 1448
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1448,
    "end": 1449
  },
  {
    "type": "Identifier",
    "value": "location",
    "start": 1454,
    "end": 1462
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1462,
    "end": 1463
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1463,
    "end": 1464
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1465,
    "end": 1471
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1471,
    "end": 1472
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1473,
    "end": 1474
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1476,
    "end": 1480
  },
  {
    "type": "Identifier",
    "value": "LazyPerson",
    "start": 1481,
    "end": 1491
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1492,
    "end": 1493
  },
  {
    "type": "Identifier",
    "value": "Lazyify",
    "start": 1494,
    "end": 1501
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1501,
    "end": 1502
  },
  {
    "type": "Identifier",
    "value": "Person",
    "start": 1502,
    "end": 1508
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Identifier",
    "value": "type",
    "start": 1534,
    "end": 1538
  },
  {
    "type": "Identifier",
    "value": "Example",
    "start": 1539,
    "end": 1546
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1547,
    "end": 1548
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1549,
    "end": 1550
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1550,
    "end": 1553
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1553,
    "end": 1554
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1555,
    "end": 1561
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1561,
    "end": 1562
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 1563,
    "end": 1566
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1566,
    "end": 1567
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1568,
    "end": 1574
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1574,
    "end": 1575
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1575,
    "end": 1576
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1578,
    "end": 1582
  },
  {
    "type": "Identifier",
    "value": "PickByValueType",
    "start": 1583,
    "end": 1598
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1598,
    "end": 1599
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1599,
    "end": 1600
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1600,
    "end": 1601
  },
  {
    "type": "Identifier",
    "value": "U",
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
    "value": "=",
    "start": 1605,
    "end": 1606
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1607,
    "end": 1608
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1611,
    "end": 1612
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1612,
    "end": 1613
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1614,
    "end": 1616
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1617,
    "end": 1622
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1623,
    "end": 1624
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1625,
    "end": 1627
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1628,
    "end": 1629
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1629,
    "end": 1630
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1630,
    "end": 1631
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1631,
    "end": 1632
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1633,
    "end": 1640
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1641,
    "end": 1642
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1643,
    "end": 1644
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1645,
    "end": 1646
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1647,
    "end": 1648
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1649,
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
    "value": ":",
    "start": 1655,
    "end": 1656
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1657,
    "end": 1658
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1658,
    "end": 1659
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1659,
    "end": 1660
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1660,
    "end": 1661
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1662,
    "end": 1663
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1663,
    "end": 1664
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1666,
    "end": 1670
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 1671,
    "end": 1673
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1674,
    "end": 1675
  },
  {
    "type": "Identifier",
    "value": "PickByValueType",
    "start": 1676,
    "end": 1691
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1691,
    "end": 1692
  },
  {
    "type": "Identifier",
    "value": "Example",
    "start": 1692,
    "end": 1699
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1699,
    "end": 1700
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1701,
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
    "value": ";",
    "start": 1708,
    "end": 1709
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1710,
    "end": 1715
  },
  {
    "type": "Identifier",
    "value": "e1",
    "start": 1716,
    "end": 1718
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1718,
    "end": 1719
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 1720,
    "end": 1722
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1723,
    "end": 1724
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1725,
    "end": 1726
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1731,
    "end": 1734
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1734,
    "end": 1735
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1736,
    "end": 1743
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1744,
    "end": 1745
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1745,
    "end": 1746
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1747,
    "end": 1751
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 1752,
    "end": 1754
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1755,
    "end": 1756
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1757,
    "end": 1762
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 1763,
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
    "value": "const",
    "start": 1767,
    "end": 1772
  },
  {
    "type": "Identifier",
    "value": "e2",
    "start": 1773,
    "end": 1775
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1775,
    "end": 1776
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 1777,
    "end": 1779
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1780,
    "end": 1781
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 1782,
    "end": 1787
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1787,
    "end": 1788
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1812,
    "end": 1821
  },
  {
    "type": "Identifier",
    "value": "Car",
    "start": 1822,
    "end": 1825
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1826,
    "end": 1827
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1832,
    "end": 1836
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1836,
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
    "value": ";",
    "start": 1844,
    "end": 1845
  },
  {
    "type": "Identifier",
    "value": "seats",
    "start": 1850,
    "end": 1855
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1855,
    "end": 1856
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1857,
    "end": 1863
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1863,
    "end": 1864
  },
  {
    "type": "Identifier",
    "value": "engine",
    "start": 1869,
    "end": 1875
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1875,
    "end": 1876
  },
  {
    "type": "Identifier",
    "value": "Engine",
    "start": 1877,
    "end": 1883
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1883,
    "end": 1884
  },
  {
    "type": "Identifier",
    "value": "wheels",
    "start": 1889,
    "end": 1895
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1895,
    "end": 1896
  },
  {
    "type": "Identifier",
    "value": "Wheel",
    "start": 1897,
    "end": 1902
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1902,
    "end": 1903
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1903,
    "end": 1904
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1904,
    "end": 1905
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1906,
    "end": 1907
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1909,
    "end": 1918
  },
  {
    "type": "Identifier",
    "value": "Engine",
    "start": 1919,
    "end": 1925
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1926,
    "end": 1927
  },
  {
    "type": "Identifier",
    "value": "manufacturer",
    "start": 1932,
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
    "value": "string",
    "start": 1946,
    "end": 1952
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1952,
    "end": 1953
  },
  {
    "type": "Identifier",
    "value": "horsepower",
    "start": 1958,
    "end": 1968
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1968,
    "end": 1969
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1970,
    "end": 1976
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1976,
    "end": 1977
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1978,
    "end": 1979
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1981,
    "end": 1990
  },
  {
    "type": "Identifier",
    "value": "Wheel",
    "start": 1991,
    "end": 1996
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1997,
    "end": 1998
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2003,
    "end": 2007
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2007,
    "end": 2008
  },
  {
    "type": "String",
    "value": "\"summer\"",
    "start": 2009,
    "end": 2017
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2018,
    "end": 2019
  },
  {
    "type": "String",
    "value": "\"winter\"",
    "start": 2020,
    "end": 2028
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2028,
    "end": 2029
  },
  {
    "type": "Identifier",
    "value": "radius",
    "start": 2034,
    "end": 2040
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2040,
    "end": 2041
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2042,
    "end": 2048
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2048,
    "end": 2049
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2050,
    "end": 2051
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2053,
    "end": 2057
  },
  {
    "type": "Identifier",
    "value": "Primitive",
    "start": 2058,
    "end": 2067
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2068,
    "end": 2069
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2070,
    "end": 2076
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2077,
    "end": 2078
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2079,
    "end": 2085
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2086,
    "end": 2087
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2088,
    "end": 2095
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2095,
    "end": 2096
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2097,
    "end": 2101
  },
  {
    "type": "Identifier",
    "value": "OnlyPrimitives",
    "start": 2102,
    "end": 2116
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2116,
    "end": 2117
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2117,
    "end": 2118
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2118,
    "end": 2119
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2120,
    "end": 2121
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2122,
    "end": 2123
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2124,
    "end": 2125
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2125,
    "end": 2126
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 2127,
    "end": 2129
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 2130,
    "end": 2135
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2136,
    "end": 2137
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 2138,
    "end": 2140
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2141,
    "end": 2142
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2142,
    "end": 2143
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2143,
    "end": 2144
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2144,
    "end": 2145
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2146,
    "end": 2153
  },
  {
    "type": "Identifier",
    "value": "Primitive",
    "start": 2154,
    "end": 2163
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2164,
    "end": 2165
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2166,
    "end": 2167
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2168,
    "end": 2169
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2170,
    "end": 2175
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "[",
    "start": 2179,
    "end": 2180
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2180,
    "end": 2181
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2181,
    "end": 2182
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2183,
    "end": 2184
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2184,
    "end": 2185
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2187,
    "end": 2190
  },
  {
    "type": "Identifier",
    "value": "primitiveCar",
    "start": 2191,
    "end": 2203
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2203,
    "end": 2204
  },
  {
    "type": "Identifier",
    "value": "OnlyPrimitives",
    "start": 2205,
    "end": 2219
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2219,
    "end": 2220
  },
  {
    "type": "Identifier",
    "value": "Car",
    "start": 2220,
    "end": 2223
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2223,
    "end": 2224
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2224,
    "end": 2225
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2263,
    "end": 2266
  },
  {
    "type": "Identifier",
    "value": "keys",
    "start": 2267,
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
    "value": "keyof",
    "start": 2273,
    "end": 2278
  },
  {
    "type": "Identifier",
    "value": "OnlyPrimitives",
    "start": 2279,
    "end": 2293
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2293,
    "end": 2294
  },
  {
    "type": "Identifier",
    "value": "Car",
    "start": 2294,
    "end": 2297
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Identifier",
    "value": "type",
    "start": 2323,
    "end": 2327
  },
  {
    "type": "Identifier",
    "value": "KeysOfPrimitives",
    "start": 2328,
    "end": 2344
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2344,
    "end": 2345
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2345,
    "end": 2346
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2346,
    "end": 2347
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2348,
    "end": 2349
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 2350,
    "end": 2355
  },
  {
    "type": "Identifier",
    "value": "OnlyPrimitives",
    "start": 2356,
    "end": 2370
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2370,
    "end": 2371
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2371,
    "end": 2372
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2372,
    "end": 2373
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2373,
    "end": 2374
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2376,
    "end": 2379
  },
  {
    "type": "Identifier",
    "value": "carKeys",
    "start": 2380,
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
    "value": "KeysOfPrimitives",
    "start": 2389,
    "end": 2405
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2405,
    "end": 2406
  },
  {
    "type": "Identifier",
    "value": "Car",
    "start": 2406,
    "end": 2409
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2409,
    "end": 2410
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2410,
    "end": 2411
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2456,
    "end": 2460
  },
  {
    "type": "Identifier",
    "value": "Equal",
    "start": 2461,
    "end": 2466
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2466,
    "end": 2467
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2467,
    "end": 2468
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2468,
    "end": 2469
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 2470,
    "end": 2471
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2471,
    "end": 2472
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2473,
    "end": 2474
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2475,
    "end": 2476
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2476,
    "end": 2477
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2477,
    "end": 2478
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2478,
    "end": 2479
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2479,
    "end": 2480
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2480,
    "end": 2481
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2482,
    "end": 2484
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2485,
    "end": 2486
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2487,
    "end": 2494
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2495,
    "end": 2496
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2497,
    "end": 2498
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2499,
    "end": 2500
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2501,
    "end": 2502
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2503,
    "end": 2504
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2504,
    "end": 2505
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2506,
    "end": 2513
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2514,
    "end": 2515
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2515,
    "end": 2516
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2516,
    "end": 2517
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2517,
    "end": 2518
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2518,
    "end": 2519
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2519,
    "end": 2520
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2521,
    "end": 2523
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2524,
    "end": 2525
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2526,
    "end": 2533
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 2534,
    "end": 2535
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2536,
    "end": 2537
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2538,
    "end": 2539
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2540,
    "end": 2541
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2542,
    "end": 2543
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2543,
    "end": 2544
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2545,
    "end": 2546
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2547,
    "end": 2551
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2552,
    "end": 2553
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 2554,
    "end": 2559
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2559,
    "end": 2560
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2562,
    "end": 2566
  },
  {
    "type": "Identifier",
    "value": "If",
    "start": 2567,
    "end": 2569
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2569,
    "end": 2570
  },
  {
    "type": "Identifier",
    "value": "Cond",
    "start": 2570,
    "end": 2574
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2575,
    "end": 2582
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2583,
    "end": 2590
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2590,
    "end": 2591
  },
  {
    "type": "Identifier",
    "value": "Then",
    "start": 2592,
    "end": 2596
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2596,
    "end": 2597
  },
  {
    "type": "Identifier",
    "value": "Else",
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
    "value": "=",
    "start": 2604,
    "end": 2605
  },
  {
    "type": "Identifier",
    "value": "Cond",
    "start": 2606,
    "end": 2610
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2611,
    "end": 2618
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2619,
    "end": 2623
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2624,
    "end": 2625
  },
  {
    "type": "Identifier",
    "value": "Then",
    "start": 2626,
    "end": 2630
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2631,
    "end": 2632
  },
  {
    "type": "Identifier",
    "value": "Else",
    "start": 2633,
    "end": 2637
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2637,
    "end": 2638
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2640,
    "end": 2644
  },
  {
    "type": "Identifier",
    "value": "GetKey",
    "start": 2645,
    "end": 2651
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2651,
    "end": 2652
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 2652,
    "end": 2653
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2653,
    "end": 2654
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 2655,
    "end": 2656
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2656,
    "end": 2657
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2658,
    "end": 2659
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 2660,
    "end": 2665
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2666,
    "end": 2667
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2668,
    "end": 2669
  },
  {
    "type": "Identifier",
    "value": "TP",
    "start": 2669,
    "end": 2671
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 2672,
    "end": 2674
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 2675,
    "end": 2680
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 2681,
    "end": 2682
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 2683,
    "end": 2685
  },
  {
    "type": "Identifier",
    "value": "Equal",
    "start": 2686,
    "end": 2691
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2691,
    "end": 2692
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 2692,
    "end": 2693
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2693,
    "end": 2694
  },
  {
    "type": "Identifier",
    "value": "TP",
    "start": 2694,
    "end": 2696
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2696,
    "end": 2697
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2697,
    "end": 2698
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 2699,
    "end": 2700
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2700,
    "end": 2701
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2702,
    "end": 2709
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2710,
    "end": 2714
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2715,
    "end": 2716
  },
  {
    "type": "Identifier",
    "value": "TP",
    "start": 2717,
    "end": 2719
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2720,
    "end": 2721
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2722,
    "end": 2727
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2727,
    "end": 2728
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2728,
    "end": 2729
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2730,
    "end": 2733
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2734,
    "end": 2735
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2735,
    "end": 2736
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2738,
    "end": 2742
  },
  {
    "type": "Identifier",
    "value": "GetKeyWithIf",
    "start": 2743,
    "end": 2755
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2755,
    "end": 2756
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 2756,
    "end": 2757
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2757,
    "end": 2758
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 2759,
    "end": 2760
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2760,
    "end": 2761
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2762,
    "end": 2763
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 2764,
    "end": 2769
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2770,
    "end": 2771
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2772,
    "end": 2773
  },
  {
    "type": "Identifier",
    "value": "TP",
    "start": 2773,
    "end": 2775
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 2776,
    "end": 2778
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 2779,
    "end": 2784
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 2785,
    "end": 2786
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 2787,
    "end": 2789
  },
  {
    "type": "Identifier",
    "value": "If",
    "start": 2790,
    "end": 2792
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2792,
    "end": 2793
  },
  {
    "type": "Identifier",
    "value": "Equal",
    "start": 2793,
    "end": 2798
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2798,
    "end": 2799
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 2799,
    "end": 2800
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2800,
    "end": 2801
  },
  {
    "type": "Identifier",
    "value": "TP",
    "start": 2801,
    "end": 2803
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2803,
    "end": 2804
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2804,
    "end": 2805
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 2806,
    "end": 2807
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2807,
    "end": 2808
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2808,
    "end": 2809
  },
  {
    "type": "Identifier",
    "value": "TP",
    "start": 2810,
    "end": 2812
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2812,
    "end": 2813
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2814,
    "end": 2819
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2819,
    "end": 2820
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2820,
    "end": 2821
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2821,
    "end": 2822
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2823,
    "end": 2826
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2827,
    "end": 2828
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2828,
    "end": 2829
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2831,
    "end": 2835
  },
  {
    "type": "Identifier",
    "value": "GetObjWithIf",
    "start": 2836,
    "end": 2848
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2848,
    "end": 2849
  },
  {
    "type": "Identifier",
    "value": "S",
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
    "value": "V",
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
    "value": "=",
    "start": 2855,
    "end": 2856
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2857,
    "end": 2858
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2859,
    "end": 2860
  },
  {
    "type": "Identifier",
    "value": "TP",
    "start": 2860,
    "end": 2862
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 2863,
    "end": 2865
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 2866,
    "end": 2871
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 2872,
    "end": 2873
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 2874,
    "end": 2876
  },
  {
    "type": "Identifier",
    "value": "If",
    "start": 2877,
    "end": 2879
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2879,
    "end": 2880
  },
  {
    "type": "Identifier",
    "value": "Equal",
    "start": 2880,
    "end": 2885
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2885,
    "end": 2886
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 2886,
    "end": 2887
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2887,
    "end": 2888
  },
  {
    "type": "Identifier",
    "value": "TP",
    "start": 2888,
    "end": 2890
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2890,
    "end": 2891
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2891,
    "end": 2892
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 2893,
    "end": 2894
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2894,
    "end": 2895
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2895,
    "end": 2896
  },
  {
    "type": "Identifier",
    "value": "TP",
    "start": 2897,
    "end": 2899
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2899,
    "end": 2900
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2901,
    "end": 2906
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2906,
    "end": 2907
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2907,
    "end": 2908
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2908,
    "end": 2909
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2910,
    "end": 2913
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2914,
    "end": 2915
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2915,
    "end": 2916
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2918,
    "end": 2922
  },
  {
    "type": "Identifier",
    "value": "Task",
    "start": 2923,
    "end": 2927
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2928,
    "end": 2929
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2930,
    "end": 2931
  },
  {
    "type": "Identifier",
    "value": "isDone",
    "start": 2934,
    "end": 2940
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2940,
    "end": 2941
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2942,
    "end": 2949
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2949,
    "end": 2950
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2951,
    "end": 2952
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2952,
    "end": 2953
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2955,
    "end": 2959
  },
  {
    "type": "Identifier",
    "value": "Schema",
    "start": 2960,
    "end": 2966
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2967,
    "end": 2968
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2969,
    "end": 2970
  },
  {
    "type": "Identifier",
    "value": "root",
    "start": 2973,
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
    "value": "{",
    "start": 2979,
    "end": 2980
  },
  {
    "type": "Identifier",
    "value": "title",
    "start": 2985,
    "end": 2990
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2990,
    "end": 2991
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2992,
    "end": 2998
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2998,
    "end": 2999
  },
  {
    "type": "Identifier",
    "value": "task",
    "start": 3004,
    "end": 3008
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3008,
    "end": 3009
  },
  {
    "type": "Identifier",
    "value": "Task",
    "start": 3010,
    "end": 3014
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3014,
    "end": 3015
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3018,
    "end": 3019
  },
  {
    "type": "Identifier",
    "value": "Task",
    "start": 3022,
    "end": 3026
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3026,
    "end": 3027
  },
  {
    "type": "Identifier",
    "value": "Task",
    "start": 3028,
    "end": 3032
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3032,
    "end": 3033
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3034,
    "end": 3035
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3035,
    "end": 3036
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3038,
    "end": 3042
  },
  {
    "type": "Identifier",
    "value": "Res1",
    "start": 3043,
    "end": 3047
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3048,
    "end": 3049
  },
  {
    "type": "Identifier",
    "value": "GetKey",
    "start": 3050,
    "end": 3056
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3056,
    "end": 3057
  },
  {
    "type": "Identifier",
    "value": "Schema",
    "start": 3057,
    "end": 3063
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3063,
    "end": 3064
  },
  {
    "type": "Identifier",
    "value": "Schema",
    "start": 3065,
    "end": 3071
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3071,
    "end": 3072
  },
  {
    "type": "String",
    "value": "'root'",
    "start": 3072,
    "end": 3078
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3078,
    "end": 3079
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3079,
    "end": 3080
  },
  {
    "type": "String",
    "value": "'task'",
    "start": 3080,
    "end": 3086
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3086,
    "end": 3087
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3087,
    "end": 3088
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3088,
    "end": 3089
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3101,
    "end": 3105
  },
  {
    "type": "Identifier",
    "value": "Res2",
    "start": 3106,
    "end": 3110
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3111,
    "end": 3112
  },
  {
    "type": "Identifier",
    "value": "GetKeyWithIf",
    "start": 3113,
    "end": 3125
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3125,
    "end": 3126
  },
  {
    "type": "Identifier",
    "value": "Schema",
    "start": 3126,
    "end": 3132
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3132,
    "end": 3133
  },
  {
    "type": "Identifier",
    "value": "Schema",
    "start": 3134,
    "end": 3140
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3140,
    "end": 3141
  },
  {
    "type": "String",
    "value": "'root'",
    "start": 3141,
    "end": 3147
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3147,
    "end": 3148
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3148,
    "end": 3149
  },
  {
    "type": "String",
    "value": "'task'",
    "start": 3149,
    "end": 3155
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3155,
    "end": 3156
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3156,
    "end": 3157
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3157,
    "end": 3158
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3170,
    "end": 3174
  },
  {
    "type": "Identifier",
    "value": "Res3",
    "start": 3175,
    "end": 3179
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3180,
    "end": 3181
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3182,
    "end": 3187
  },
  {
    "type": "Identifier",
    "value": "GetObjWithIf",
    "start": 3188,
    "end": 3200
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3200,
    "end": 3201
  },
  {
    "type": "Identifier",
    "value": "Schema",
    "start": 3201,
    "end": 3207
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3207,
    "end": 3208
  },
  {
    "type": "Identifier",
    "value": "Schema",
    "start": 3209,
    "end": 3215
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3215,
    "end": 3216
  },
  {
    "type": "String",
    "value": "'root'",
    "start": 3216,
    "end": 3222
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3222,
    "end": 3223
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3223,
    "end": 3224
  },
  {
    "type": "String",
    "value": "'task'",
    "start": 3224,
    "end": 3230
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3230,
    "end": 3231
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3231,
    "end": 3232
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3232,
    "end": 3233
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3268,
    "end": 3272
  },
  {
    "type": "Identifier",
    "value": "KeysExtendedBy",
    "start": 3273,
    "end": 3287
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3287,
    "end": 3288
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3288,
    "end": 3289
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3289,
    "end": 3290
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3291,
    "end": 3292
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3292,
    "end": 3293
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3294,
    "end": 3295
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3296,
    "end": 3301
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3302,
    "end": 3303
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3304,
    "end": 3305
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3305,
    "end": 3306
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 3307,
    "end": 3309
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3310,
    "end": 3315
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3316,
    "end": 3317
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 3318,
    "end": 3320
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3321,
    "end": 3322
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3323,
    "end": 3330
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3331,
    "end": 3332
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3332,
    "end": 3333
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3333,
    "end": 3334
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3334,
    "end": 3335
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3336,
    "end": 3337
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3338,
    "end": 3339
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3340,
    "end": 3341
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 3342,
    "end": 3347
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3347,
    "end": 3348
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3349,
    "end": 3350
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3351,
    "end": 3352
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3352,
    "end": 3353
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3353,
    "end": 3354
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3354,
    "end": 3355
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3356,
    "end": 3357
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3357,
    "end": 3358
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3360,
    "end": 3369
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 3370,
    "end": 3371
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3372,
    "end": 3373
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3378,
    "end": 3379
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3379,
    "end": 3380
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 3381,
    "end": 3388
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3388,
    "end": 3389
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3394,
    "end": 3395
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3395,
    "end": 3396
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3397,
    "end": 3403
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3403,
    "end": 3404
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3405,
    "end": 3406
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3408,
    "end": 3416
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 3417,
    "end": 3418
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3418,
    "end": 3419
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3419,
    "end": 3420
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3420,
    "end": 3421
  },
  {
    "type": "Identifier",
    "value": "KeysExtendedBy",
    "start": 3422,
    "end": 3436
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3436,
    "end": 3437
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 3437,
    "end": 3438
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3438,
    "end": 3439
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3440,
    "end": 3446
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3446,
    "end": 3447
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3447,
    "end": 3448
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3449,
    "end": 3450
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3455,
    "end": 3461
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3462,
    "end": 3463
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3463,
    "end": 3464
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3465,
    "end": 3466
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 3468,
    "end": 3469
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3469,
    "end": 3470
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 3470,
    "end": 3473
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3473,
    "end": 3474
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3474,
    "end": 3475
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3510,
    "end": 3514
  },
  {
    "type": "Identifier",
    "value": "NameMap",
    "start": 3515,
    "end": 3522
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3523,
    "end": 3524
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3525,
    "end": 3526
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 3527,
    "end": 3530
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3530,
    "end": 3531
  },
  {
    "type": "String",
    "value": "'x'",
    "start": 3532,
    "end": 3535
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3535,
    "end": 3536
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 3537,
    "end": 3540
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3540,
    "end": 3541
  },
  {
    "type": "String",
    "value": "'y'",
    "start": 3542,
    "end": 3545
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3545,
    "end": 3546
  },
  {
    "type": "String",
    "value": "'c'",
    "start": 3547,
    "end": 3550
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3550,
    "end": 3551
  },
  {
    "type": "String",
    "value": "'z'",
    "start": 3552,
    "end": 3555
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3556,
    "end": 3557
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3557,
    "end": 3558
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3597,
    "end": 3601
  },
  {
    "type": "Identifier",
    "value": "TS0",
    "start": 3602,
    "end": 3605
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3605,
    "end": 3606
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3606,
    "end": 3607
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3607,
    "end": 3608
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3609,
    "end": 3610
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3611,
    "end": 3616
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3617,
    "end": 3618
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3619,
    "end": 3620
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 3620,
    "end": 3621
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 3622,
    "end": 3624
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3625,
    "end": 3630
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3631,
    "end": 3632
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 3633,
    "end": 3635
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3636,
    "end": 3641
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 3642,
    "end": 3648
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3648,
    "end": 3649
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 3649,
    "end": 3650
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3650,
    "end": 3651
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3652,
    "end": 3658
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3658,
    "end": 3659
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3659,
    "end": 3660
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3660,
    "end": 3661
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3662,
    "end": 3668
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3669,
    "end": 3670
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3670,
    "end": 3671
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3672,
    "end": 3676
  },
  {
    "type": "Identifier",
    "value": "TS1",
    "start": 3677,
    "end": 3680
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3680,
    "end": 3681
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3681,
    "end": 3682
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3682,
    "end": 3683
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3684,
    "end": 3685
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3686,
    "end": 3691
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3692,
    "end": 3693
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3694,
    "end": 3695
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 3695,
    "end": 3696
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 3697,
    "end": 3699
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3700,
    "end": 3705
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3706,
    "end": 3707
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 3708,
    "end": 3710
  },
  {
    "type": "Identifier",
    "value": "Extract",
    "start": 3711,
    "end": 3718
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3718,
    "end": 3719
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 3719,
    "end": 3720
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3720,
    "end": 3721
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 3722,
    "end": 3725
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3726,
    "end": 3727
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 3728,
    "end": 3731
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3732,
    "end": 3733
  },
  {
    "type": "String",
    "value": "'c'",
    "start": 3734,
    "end": 3737
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3737,
    "end": 3738
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3738,
    "end": 3739
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3739,
    "end": 3740
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3741,
    "end": 3747
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3748,
    "end": 3749
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3749,
    "end": 3750
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3751,
    "end": 3755
  },
  {
    "type": "Identifier",
    "value": "TS2",
    "start": 3756,
    "end": 3759
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3759,
    "end": 3760
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3760,
    "end": 3761
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3761,
    "end": 3762
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3763,
    "end": 3764
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3765,
    "end": 3770
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3771,
    "end": 3772
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3773,
    "end": 3774
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 3774,
    "end": 3775
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 3776,
    "end": 3778
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3779,
    "end": 3784
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3785,
    "end": 3786
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 3787,
    "end": 3789
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 3790,
    "end": 3791
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 3792,
    "end": 3793
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3794,
    "end": 3795
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 3795,
    "end": 3798
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3799,
    "end": 3800
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 3801,
    "end": 3804
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3805,
    "end": 3806
  },
  {
    "type": "String",
    "value": "'c'",
    "start": 3807,
    "end": 3810
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3810,
    "end": 3811
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3811,
    "end": 3812
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3812,
    "end": 3813
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3814,
    "end": 3820
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3821,
    "end": 3822
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3822,
    "end": 3823
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3824,
    "end": 3828
  },
  {
    "type": "Identifier",
    "value": "TS3",
    "start": 3829,
    "end": 3832
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3832,
    "end": 3833
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3833,
    "end": 3834
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3834,
    "end": 3835
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3836,
    "end": 3837
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3838,
    "end": 3843
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3844,
    "end": 3845
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3846,
    "end": 3847
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 3847,
    "end": 3848
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 3849,
    "end": 3851
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3852,
    "end": 3857
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3858,
    "end": 3859
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 3860,
    "end": 3862
  },
  {
    "type": "Identifier",
    "value": "Exclude",
    "start": 3863,
    "end": 3870
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3870,
    "end": 3871
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 3871,
    "end": 3872
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3872,
    "end": 3873
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 3874,
    "end": 3877
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3878,
    "end": 3879
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 3880,
    "end": 3883
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3884,
    "end": 3885
  },
  {
    "type": "String",
    "value": "'c'",
    "start": 3886,
    "end": 3889
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3889,
    "end": 3890
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3890,
    "end": 3891
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3891,
    "end": 3892
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3893,
    "end": 3899
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3900,
    "end": 3901
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3901,
    "end": 3902
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3903,
    "end": 3907
  },
  {
    "type": "Identifier",
    "value": "TS4",
    "start": 3908,
    "end": 3911
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3911,
    "end": 3912
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3912,
    "end": 3913
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3913,
    "end": 3914
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3915,
    "end": 3916
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3917,
    "end": 3922
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3923,
    "end": 3924
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3925,
    "end": 3926
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 3926,
    "end": 3927
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 3928,
    "end": 3930
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3931,
    "end": 3936
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3937,
    "end": 3938
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 3939,
    "end": 3941
  },
  {
    "type": "Identifier",
    "value": "NameMap",
    "start": 3942,
    "end": 3949
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3949,
    "end": 3950
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 3950,
    "end": 3951
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 3952,
    "end": 3953
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3954,
    "end": 3959
  },
  {
    "type": "Identifier",
    "value": "NameMap",
    "start": 3960,
    "end": 3967
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3967,
    "end": 3968
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3968,
    "end": 3969
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3969,
    "end": 3970
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3971,
    "end": 3977
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3978,
    "end": 3979
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3979,
    "end": 3980
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3981,
    "end": 3985
  },
  {
    "type": "Identifier",
    "value": "TS5",
    "start": 3986,
    "end": 3989
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3989,
    "end": 3990
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3990,
    "end": 3991
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3991,
    "end": 3992
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3993,
    "end": 3994
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3995,
    "end": 4000
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4001,
    "end": 4002
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4003,
    "end": 4004
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 4004,
    "end": 4005
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 4006,
    "end": 4008
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 4009,
    "end": 4014
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4015,
    "end": 4016
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 4017,
    "end": 4018
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 4019,
    "end": 4024
  },
  {
    "type": "Identifier",
    "value": "NameMap",
    "start": 4025,
    "end": 4032
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 4033,
    "end": 4035
  },
  {
    "type": "Identifier",
    "value": "NameMap",
    "start": 4036,
    "end": 4043
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4043,
    "end": 4044
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 4044,
    "end": 4045
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4045,
    "end": 4046
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4046,
    "end": 4047
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4047,
    "end": 4048
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4049,
    "end": 4055
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4056,
    "end": 4057
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4057,
    "end": 4058
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4059,
    "end": 4063
  },
  {
    "type": "Identifier",
    "value": "TS6",
    "start": 4064,
    "end": 4067
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4067,
    "end": 4068
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4068,
    "end": 4069
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4069,
    "end": 4070
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 4071,
    "end": 4072
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4072,
    "end": 4073
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 4074,
    "end": 4075
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4075,
    "end": 4076
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4077,
    "end": 4078
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 4079,
    "end": 4084
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4085,
    "end": 4086
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4087,
    "end": 4088
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 4089,
    "end": 4090
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 4091,
    "end": 4093
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 4094,
    "end": 4099
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4100,
    "end": 4101
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 4102,
    "end": 4104
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 4105,
    "end": 4106
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 4107,
    "end": 4108
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4109,
    "end": 4110
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 4110,
    "end": 4111
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4112,
    "end": 4119
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 4120,
    "end": 4121
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4122,
    "end": 4123
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 4124,
    "end": 4125
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4126,
    "end": 4127
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 4128,
    "end": 4133
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4133,
    "end": 4134
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4134,
    "end": 4135
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4135,
    "end": 4136
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4137,
    "end": 4143
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4144,
    "end": 4145
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4145,
    "end": 4146
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4190,
    "end": 4194
  },
  {
    "type": "Identifier",
    "value": "TN0",
    "start": 4195,
    "end": 4198
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4198,
    "end": 4199
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4199,
    "end": 4200
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4200,
    "end": 4201
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4202,
    "end": 4203
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 4204,
    "end": 4209
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4210,
    "end": 4211
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4212,
    "end": 4213
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 4213,
    "end": 4214
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 4215,
    "end": 4217
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 4218,
    "end": 4223
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4224,
    "end": 4225
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 4226,
    "end": 4228
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4229,
    "end": 4230
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4230,
    "end": 4231
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 4231,
    "end": 4232
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4232,
    "end": 4233
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4234,
    "end": 4241
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4242,
    "end": 4248
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4249,
    "end": 4250
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 4251,
    "end": 4252
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4253,
    "end": 4254
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 4255,
    "end": 4260
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4260,
    "end": 4261
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4261,
    "end": 4262
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4263,
    "end": 4269
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4270,
    "end": 4271
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4271,
    "end": 4272
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4273,
    "end": 4277
  },
  {
    "type": "Identifier",
    "value": "TN1",
    "start": 4278,
    "end": 4281
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4281,
    "end": 4282
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4282,
    "end": 4283
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4283,
    "end": 4284
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4285,
    "end": 4286
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 4287,
    "end": 4292
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4293,
    "end": 4294
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4295,
    "end": 4296
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 4296,
    "end": 4297
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 4298,
    "end": 4300
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 4301,
    "end": 4306
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4307,
    "end": 4308
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 4309,
    "end": 4311
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4312,
    "end": 4318
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4319,
    "end": 4326
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4327,
    "end": 4328
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4328,
    "end": 4329
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 4329,
    "end": 4330
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4330,
    "end": 4331
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4332,
    "end": 4333
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 4334,
    "end": 4335
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4336,
    "end": 4337
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 4338,
    "end": 4343
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4343,
    "end": 4344
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4344,
    "end": 4345
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4346,
    "end": 4352
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4353,
    "end": 4354
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4354,
    "end": 4355
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4356,
    "end": 4360
  },
  {
    "type": "Identifier",
    "value": "TN2",
    "start": 4361,
    "end": 4364
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4364,
    "end": 4365
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4365,
    "end": 4366
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4366,
    "end": 4367
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4368,
    "end": 4369
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 4370,
    "end": 4375
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4376,
    "end": 4377
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4378,
    "end": 4379
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 4379,
    "end": 4380
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 4381,
    "end": 4383
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 4384,
    "end": 4389
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4390,
    "end": 4391
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 4392,
    "end": 4394
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 4395,
    "end": 4398
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4399,
    "end": 4406
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 4407,
    "end": 4408
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4409,
    "end": 4410
  },
  {
    "type": "String",
    "value": "'x'",
    "start": 4411,
    "end": 4414
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4415,
    "end": 4416
  },
  {
    "type": "String",
    "value": "'y'",
    "start": 4417,
    "end": 4420
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4420,
    "end": 4421
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4421,
    "end": 4422
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4423,
    "end": 4429
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4430,
    "end": 4431
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4431,
    "end": 4432
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4433,
    "end": 4437
  },
  {
    "type": "Identifier",
    "value": "TN3",
    "start": 4438,
    "end": 4441
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4441,
    "end": 4442
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4442,
    "end": 4443
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4443,
    "end": 4444
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4445,
    "end": 4446
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 4447,
    "end": 4452
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4453,
    "end": 4454
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4455,
    "end": 4456
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 4456,
    "end": 4457
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 4458,
    "end": 4460
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 4461,
    "end": 4466
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4467,
    "end": 4468
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 4469,
    "end": 4471
  },
  {
    "type": "Identifier",
    "value": "Exclude",
    "start": 4472,
    "end": 4479
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4479,
    "end": 4480
  },
  {
    "type": "Identifier",
    "value": "Exclude",
    "start": 4480,
    "end": 4487
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4487,
    "end": 4488
  },
  {
    "type": "Identifier",
    "value": "Exclude",
    "start": 4488,
    "end": 4495
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4495,
    "end": 4496
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 4496,
    "end": 4497
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4497,
    "end": 4498
  },
  {
    "type": "String",
    "value": "'c'",
    "start": 4499,
    "end": 4502
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4502,
    "end": 4503
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4503,
    "end": 4504
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 4505,
    "end": 4508
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4508,
    "end": 4509
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4509,
    "end": 4510
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 4511,
    "end": 4514
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4514,
    "end": 4515
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4515,
    "end": 4516
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4516,
    "end": 4517
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4518,
    "end": 4524
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4525,
    "end": 4526
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4526,
    "end": 4527
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4528,
    "end": 4532
  },
  {
    "type": "Identifier",
    "value": "TN4",
    "start": 4533,
    "end": 4536
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4536,
    "end": 4537
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4537,
    "end": 4538
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4538,
    "end": 4539
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 4540,
    "end": 4541
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4541,
    "end": 4542
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4543,
    "end": 4544
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 4545,
    "end": 4550
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4551,
    "end": 4552
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4553,
    "end": 4554
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 4554,
    "end": 4555
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 4556,
    "end": 4558
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 4559,
    "end": 4564
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4565,
    "end": 4566
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 4567,
    "end": 4569
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4570,
    "end": 4571
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 4571,
    "end": 4572
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4573,
    "end": 4580
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 4581,
    "end": 4582
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4583,
    "end": 4584
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4585,
    "end": 4586
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4586,
    "end": 4587
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 4587,
    "end": 4588
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4588,
    "end": 4589
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4590,
    "end": 4591
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 4592,
    "end": 4597
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4597,
    "end": 4598
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4599,
    "end": 4606
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4607,
    "end": 4608
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4608,
    "end": 4609
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 4609,
    "end": 4610
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4610,
    "end": 4611
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4612,
    "end": 4613
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 4614,
    "end": 4615
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4616,
    "end": 4617
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 4618,
    "end": 4623
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4623,
    "end": 4624
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4624,
    "end": 4625
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4626,
    "end": 4632
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4633,
    "end": 4634
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4634,
    "end": 4635
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4636,
    "end": 4640
  },
  {
    "type": "Identifier",
    "value": "TN5",
    "start": 4641,
    "end": 4644
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4644,
    "end": 4645
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4645,
    "end": 4646
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4646,
    "end": 4647
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 4648,
    "end": 4649
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4649,
    "end": 4650
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4651,
    "end": 4652
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 4653,
    "end": 4658
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4659,
    "end": 4660
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4661,
    "end": 4662
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 4662,
    "end": 4663
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 4664,
    "end": 4666
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 4667,
    "end": 4672
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4673,
    "end": 4674
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 4675,
    "end": 4677
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 4678,
    "end": 4683
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4684,
    "end": 4685
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4686,
    "end": 4687
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 4687,
    "end": 4688
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 4689,
    "end": 4691
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 4692,
    "end": 4693
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 4694,
    "end": 4696
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4697,
    "end": 4698
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4698,
    "end": 4699
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 4699,
    "end": 4700
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4700,
    "end": 4701
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4702,
    "end": 4709
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 4710,
    "end": 4711
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4712,
    "end": 4713
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 4714,
    "end": 4715
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4716,
    "end": 4717
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 4718,
    "end": 4723
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4723,
    "end": 4724
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4724,
    "end": 4725
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 4726,
    "end": 4730
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4731,
    "end": 4732
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4732,
    "end": 4733
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4733,
    "end": 4734
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4735,
    "end": 4741
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4742,
    "end": 4743
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4743,
    "end": 4744
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4813,
    "end": 4817
  },
  {
    "type": "Identifier",
    "value": "Fruit",
    "start": 4818,
    "end": 4823
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4824,
    "end": 4825
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4828,
    "end": 4829
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4830,
    "end": 4831
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 4838,
    "end": 4842
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4842,
    "end": 4843
  },
  {
    "type": "String",
    "value": "\"apple\"",
    "start": 4844,
    "end": 4851
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4851,
    "end": 4852
  },
  {
    "type": "Identifier",
    "value": "color",
    "start": 4859,
    "end": 4864
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4864,
    "end": 4865
  },
  {
    "type": "String",
    "value": "\"red\"",
    "start": 4866,
    "end": 4871
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4871,
    "end": 4872
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4877,
    "end": 4878
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4881,
    "end": 4882
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4883,
    "end": 4884
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 4891,
    "end": 4895
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4895,
    "end": 4896
  },
  {
    "type": "String",
    "value": "\"banana\"",
    "start": 4897,
    "end": 4905
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4905,
    "end": 4906
  },
  {
    "type": "Identifier",
    "value": "color",
    "start": 4913,
    "end": 4918
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4918,
    "end": 4919
  },
  {
    "type": "String",
    "value": "\"yellow\"",
    "start": 4920,
    "end": 4928
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4928,
    "end": 4929
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4934,
    "end": 4935
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4938,
    "end": 4939
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4940,
    "end": 4941
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 4948,
    "end": 4952
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4952,
    "end": 4953
  },
  {
    "type": "String",
    "value": "\"orange\"",
    "start": 4954,
    "end": 4962
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4962,
    "end": 4963
  },
  {
    "type": "Identifier",
    "value": "color",
    "start": 4970,
    "end": 4975
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4975,
    "end": 4976
  },
  {
    "type": "String",
    "value": "\"orange\"",
    "start": 4977,
    "end": 4985
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4985,
    "end": 4986
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4991,
    "end": 4992
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4992,
    "end": 4993
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4994,
    "end": 4998
  },
  {
    "type": "Identifier",
    "value": "Result1",
    "start": 4999,
    "end": 5006
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5006,
    "end": 5007
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5007,
    "end": 5008
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5009,
    "end": 5016
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5017,
    "end": 5018
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 5018,
    "end": 5022
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5022,
    "end": 5023
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5024,
    "end": 5030
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5031,
    "end": 5032
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5033,
    "end": 5039
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5039,
    "end": 5040
  },
  {
    "type": "Identifier",
    "value": "color",
    "start": 5041,
    "end": 5046
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5046,
    "end": 5047
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5048,
    "end": 5054
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5055,
    "end": 5056
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5057,
    "end": 5063
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5064,
    "end": 5065
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5065,
    "end": 5066
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5067,
    "end": 5068
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5069,
    "end": 5070
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5073,
    "end": 5074
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 5074,
    "end": 5077
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 5078,
    "end": 5080
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5081,
    "end": 5082
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 5083,
    "end": 5085
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 5086,
    "end": 5089
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 5089,
    "end": 5092
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5092,
    "end": 5093
  },
  {
    "type": "String",
    "value": "'name'",
    "start": 5093,
    "end": 5099
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5099,
    "end": 5100
  },
  {
    "type": "Template",
    "value": "}:${",
    "start": 5100,
    "end": 5104
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 5104,
    "end": 5107
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5107,
    "end": 5108
  },
  {
    "type": "String",
    "value": "'color'",
    "start": 5108,
    "end": 5115
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5115,
    "end": 5116
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 5116,
    "end": 5118
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5118,
    "end": 5119
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5119,
    "end": 5120
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 5121,
    "end": 5128
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5129,
    "end": 5130
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5130,
    "end": 5131
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5133,
    "end": 5137
  },
  {
    "type": "Identifier",
    "value": "Result2",
    "start": 5138,
    "end": 5145
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5145,
    "end": 5146
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5146,
    "end": 5147
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5148,
    "end": 5155
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5156,
    "end": 5157
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 5157,
    "end": 5161
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5161,
    "end": 5162
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5163,
    "end": 5169
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5170,
    "end": 5171
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5172,
    "end": 5178
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5178,
    "end": 5179
  },
  {
    "type": "Identifier",
    "value": "color",
    "start": 5180,
    "end": 5185
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5185,
    "end": 5186
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5187,
    "end": 5193
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5194,
    "end": 5195
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5196,
    "end": 5202
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5203,
    "end": 5204
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5204,
    "end": 5205
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5206,
    "end": 5207
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 5208,
    "end": 5213
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5214,
    "end": 5215
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5218,
    "end": 5219
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 5219,
    "end": 5222
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 5223,
    "end": 5225
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5226,
    "end": 5227
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 5228,
    "end": 5230
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 5231,
    "end": 5234
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 5234,
    "end": 5237
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5237,
    "end": 5238
  },
  {
    "type": "String",
    "value": "'name'",
    "start": 5238,
    "end": 5244
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5244,
    "end": 5245
  },
  {
    "type": "Template",
    "value": "}:${",
    "start": 5245,
    "end": 5249
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 5249,
    "end": 5252
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5252,
    "end": 5253
  },
  {
    "type": "String",
    "value": "'color'",
    "start": 5253,
    "end": 5260
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5260,
    "end": 5261
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 5261,
    "end": 5263
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5263,
    "end": 5264
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5264,
    "end": 5265
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 5266,
    "end": 5273
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5274,
    "end": 5275
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5276,
    "end": 5280
  },
  {
    "type": "Identifier",
    "value": "Test1",
    "start": 5281,
    "end": 5286
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5287,
    "end": 5288
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 5289,
    "end": 5294
  },
  {
    "type": "Identifier",
    "value": "Result1",
    "start": 5295,
    "end": 5302
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5302,
    "end": 5303
  },
  {
    "type": "Identifier",
    "value": "Fruit",
    "start": 5303,
    "end": 5308
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5308,
    "end": 5309
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5361,
    "end": 5365
  },
  {
    "type": "Identifier",
    "value": "Test2",
    "start": 5366,
    "end": 5371
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5372,
    "end": 5373
  },
  {
    "type": "Identifier",
    "value": "Result2",
    "start": 5374,
    "end": 5381
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5381,
    "end": 5382
  },
  {
    "type": "Identifier",
    "value": "Fruit",
    "start": 5382,
    "end": 5387
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5387,
    "end": 5388
  }
]
```
