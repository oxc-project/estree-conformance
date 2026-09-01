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
        "name": "TPromise",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 13
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "ResolveType",
              "optional": false,
              "typeAnnotation": null,
              "start": 14,
              "end": 25
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 14,
            "end": 25
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "RejectType",
              "optional": false,
              "typeAnnotation": null,
              "start": 27,
              "end": 37
            },
            "constraint": null,
            "default": {
              "type": "TSAnyKeyword",
              "start": 40,
              "end": 43
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 27,
            "end": 43
          }
        ],
        "start": 13,
        "end": 44
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Omit",
              "optional": false,
              "typeAnnotation": null,
              "start": 47,
              "end": 51
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 52,
                    "end": 59
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ResolveType",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 60,
                          "end": 71
                        },
                        "typeArguments": null,
                        "start": 60,
                        "end": 71
                      }
                    ],
                    "start": 59,
                    "end": 72
                  },
                  "start": 52,
                  "end": 72
                },
                {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "then",
                        "raw": "\"then\"",
                        "start": 74,
                        "end": 80
                      },
                      "start": 74,
                      "end": 80
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "catch",
                        "raw": "\"catch\"",
                        "start": 83,
                        "end": 90
                      },
                      "start": 83,
                      "end": 90
                    }
                  ],
                  "start": 74,
                  "end": 90
                }
              ],
              "start": 51,
              "end": 91
            },
            "start": 47,
            "end": 91
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSMethodSignature",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "then",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 100,
                  "end": 104
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
                        "name": "TResult1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 105,
                        "end": 113
                      },
                      "constraint": null,
                      "default": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ResolveType",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 116,
                          "end": 127
                        },
                        "typeArguments": null,
                        "start": 116,
                        "end": 127
                      },
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 105,
                      "end": 127
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TResult2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 129,
                        "end": 137
                      },
                      "constraint": null,
                      "default": {
                        "type": "TSNeverKeyword",
                        "start": 140,
                        "end": 145
                      },
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 129,
                      "end": 145
                    }
                  ],
                  "start": 104,
                  "end": 146
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "onfulfilled",
                    "optional": true,
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
                                "name": "value",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "ResolveType",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 179,
                                      "end": 190
                                    },
                                    "typeArguments": null,
                                    "start": 179,
                                    "end": 190
                                  },
                                  "start": 177,
                                  "end": 190
                                },
                                "start": 172,
                                "end": 190
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSUnionType",
                                "types": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "TResult1",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 195,
                                      "end": 203
                                    },
                                    "typeArguments": null,
                                    "start": 195,
                                    "end": 203
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "PromiseLike",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 206,
                                      "end": 217
                                    },
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "TResult1",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 218,
                                            "end": 226
                                          },
                                          "typeArguments": null,
                                          "start": 218,
                                          "end": 226
                                        }
                                      ],
                                      "start": 217,
                                      "end": 227
                                    },
                                    "start": 206,
                                    "end": 227
                                  }
                                ],
                                "start": 195,
                                "end": 227
                              },
                              "start": 192,
                              "end": 227
                            },
                            "start": 171,
                            "end": 227
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 231,
                            "end": 240
                          },
                          {
                            "type": "TSNullKeyword",
                            "start": 243,
                            "end": 247
                          }
                        ],
                        "start": 170,
                        "end": 247
                      },
                      "start": 168,
                      "end": 247
                    },
                    "start": 156,
                    "end": 247
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "onrejected",
                    "optional": true,
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
                                "name": "reason",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "RejectType",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 280,
                                      "end": 290
                                    },
                                    "typeArguments": null,
                                    "start": 280,
                                    "end": 290
                                  },
                                  "start": 278,
                                  "end": 290
                                },
                                "start": 272,
                                "end": 290
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSUnionType",
                                "types": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "TResult2",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 295,
                                      "end": 303
                                    },
                                    "typeArguments": null,
                                    "start": 295,
                                    "end": 303
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "PromiseLike",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 306,
                                      "end": 317
                                    },
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "TResult2",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 318,
                                            "end": 326
                                          },
                                          "typeArguments": null,
                                          "start": 318,
                                          "end": 326
                                        }
                                      ],
                                      "start": 317,
                                      "end": 327
                                    },
                                    "start": 306,
                                    "end": 327
                                  }
                                ],
                                "start": 295,
                                "end": 327
                              },
                              "start": 292,
                              "end": 327
                            },
                            "start": 271,
                            "end": 327
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 331,
                            "end": 340
                          },
                          {
                            "type": "TSNullKeyword",
                            "start": 343,
                            "end": 347
                          }
                        ],
                        "start": 270,
                        "end": 347
                      },
                      "start": 268,
                      "end": 347
                    },
                    "start": 257,
                    "end": 347
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TPromise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 356,
                      "end": 364
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
                                "name": "TResult1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 365,
                                "end": 373
                              },
                              "typeArguments": null,
                              "start": 365,
                              "end": 373
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "TResult2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 376,
                                "end": 384
                              },
                              "typeArguments": null,
                              "start": 376,
                              "end": 384
                            }
                          ],
                          "start": 365,
                          "end": 384
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RejectType",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 386,
                            "end": 396
                          },
                          "typeArguments": null,
                          "start": 386,
                          "end": 396
                        }
                      ],
                      "start": 364,
                      "end": 397
                    },
                    "start": 356,
                    "end": 397
                  },
                  "start": 354,
                  "end": 397
                },
                "accessibility": null,
                "readonly": false,
                "static": false,
                "start": 100,
                "end": 398
              },
              {
                "type": "TSMethodSignature",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "catch",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 403,
                  "end": 408
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
                        "name": "TResult",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 409,
                        "end": 416
                      },
                      "constraint": null,
                      "default": {
                        "type": "TSNeverKeyword",
                        "start": 419,
                        "end": 424
                      },
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 409,
                      "end": 424
                    }
                  ],
                  "start": 408,
                  "end": 425
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "onrejected",
                    "optional": true,
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
                                "name": "reason",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "RejectType",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 458,
                                      "end": 468
                                    },
                                    "typeArguments": null,
                                    "start": 458,
                                    "end": 468
                                  },
                                  "start": 456,
                                  "end": 468
                                },
                                "start": 450,
                                "end": 468
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSUnionType",
                                "types": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "TResult",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 473,
                                      "end": 480
                                    },
                                    "typeArguments": null,
                                    "start": 473,
                                    "end": 480
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "PromiseLike",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 483,
                                      "end": 494
                                    },
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "TResult",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 495,
                                            "end": 502
                                          },
                                          "typeArguments": null,
                                          "start": 495,
                                          "end": 502
                                        }
                                      ],
                                      "start": 494,
                                      "end": 503
                                    },
                                    "start": 483,
                                    "end": 503
                                  }
                                ],
                                "start": 473,
                                "end": 503
                              },
                              "start": 470,
                              "end": 503
                            },
                            "start": 449,
                            "end": 503
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 507,
                            "end": 516
                          },
                          {
                            "type": "TSNullKeyword",
                            "start": 519,
                            "end": 523
                          }
                        ],
                        "start": 448,
                        "end": 523
                      },
                      "start": 446,
                      "end": 523
                    },
                    "start": 435,
                    "end": 523
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TPromise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 532,
                      "end": 540
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
                                "name": "ResolveType",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 541,
                                "end": 552
                              },
                              "typeArguments": null,
                              "start": 541,
                              "end": 552
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "TResult",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 555,
                                "end": 562
                              },
                              "typeArguments": null,
                              "start": 555,
                              "end": 562
                            }
                          ],
                          "start": 541,
                          "end": 562
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RejectType",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 564,
                            "end": 574
                          },
                          "typeArguments": null,
                          "start": 564,
                          "end": 574
                        }
                      ],
                      "start": 540,
                      "end": 575
                    },
                    "start": 532,
                    "end": 575
                  },
                  "start": 530,
                  "end": 575
                },
                "accessibility": null,
                "readonly": false,
                "static": false,
                "start": 403,
                "end": 576
              }
            ],
            "start": 94,
            "end": 578
          }
        ],
        "start": 47,
        "end": 578
      },
      "declare": false,
      "start": 0,
      "end": 579
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "HttpResponse",
          "optional": false,
          "typeAnnotation": null,
          "start": 598,
          "end": 610
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 611,
                "end": 612
              },
              "constraint": {
                "type": "TSUnknownKeyword",
                "start": 621,
                "end": 628
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 611,
              "end": 628
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 630,
                "end": 631
              },
              "constraint": {
                "type": "TSUnknownKeyword",
                "start": 640,
                "end": 647
              },
              "default": {
                "type": "TSUnknownKeyword",
                "start": 650,
                "end": 657
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 630,
              "end": 657
            }
          ],
          "start": 610,
          "end": 658
        },
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "Response",
              "optional": false,
              "typeAnnotation": null,
              "start": 667,
              "end": 675
            },
            "typeArguments": null,
            "start": 667,
            "end": 675
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
                "name": "data",
                "optional": false,
                "typeAnnotation": null,
                "start": 682,
                "end": 686
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "D",
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
              "start": 682,
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
                "name": "error",
                "optional": false,
                "typeAnnotation": null,
                "start": 695,
                "end": 700
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 702,
                    "end": 703
                  },
                  "typeArguments": null,
                  "start": 702,
                  "end": 703
                },
                "start": 700,
                "end": 703
              },
              "accessibility": null,
              "static": false,
              "start": 695,
              "end": 704
            }
          ],
          "start": 676,
          "end": 706
        },
        "declare": false,
        "start": 588,
        "end": 706
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 581,
      "end": 706
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "HttpClient",
          "optional": false,
          "typeAnnotation": null,
          "start": 721,
          "end": 731
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "SecurityDataType",
                "optional": false,
                "typeAnnotation": null,
                "start": 732,
                "end": 748
              },
              "constraint": null,
              "default": {
                "type": "TSUnknownKeyword",
                "start": 751,
                "end": 758
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 732,
              "end": 758
            }
          ],
          "start": 731,
          "end": 759
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
                "name": "request",
                "optional": false,
                "typeAnnotation": null,
                "start": 773,
                "end": 780
              },
              "typeAnnotation": null,
              "value": {
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
                        "start": 784,
                        "end": 785
                      },
                      "constraint": null,
                      "default": {
                        "type": "TSAnyKeyword",
                        "start": 788,
                        "end": 791
                      },
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 784,
                      "end": 791
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "E",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 793,
                        "end": 794
                      },
                      "constraint": null,
                      "default": {
                        "type": "TSAnyKeyword",
                        "start": 797,
                        "end": 800
                      },
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 793,
                      "end": 800
                    }
                  ],
                  "start": 783,
                  "end": 801
                },
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TPromise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 805,
                      "end": 813
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "HttpResponse",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 814,
                            "end": 826
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
                                  "start": 827,
                                  "end": 828
                                },
                                "typeArguments": null,
                                "start": 827,
                                "end": 828
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "E",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 830,
                                  "end": 831
                                },
                                "typeArguments": null,
                                "start": 830,
                                "end": 831
                              }
                            ],
                            "start": 826,
                            "end": 832
                          },
                          "start": 814,
                          "end": 832
                        }
                      ],
                      "start": 813,
                      "end": 833
                    },
                    "start": 805,
                    "end": 833
                  },
                  "start": 803,
                  "end": 833
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "Literal",
                          "value": "",
                          "raw": "''",
                          "start": 854,
                          "end": 856
                        },
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 860,
                          "end": 863
                        },
                        "start": 854,
                        "end": 863
                      },
                      "start": 847,
                      "end": 864
                    }
                  ],
                  "start": 837,
                  "end": 870
                },
                "id": null,
                "generator": false,
                "start": 783,
                "end": 870
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "public",
              "start": 766,
              "end": 871
            }
          ],
          "start": 760,
          "end": 873
        },
        "abstract": false,
        "declare": false,
        "start": 715,
        "end": 873
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 708,
      "end": 873
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 873
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
    "value": "TPromise",
    "start": 5,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "ResolveType",
    "start": 14,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "RejectType",
    "start": 27,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 40,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 45,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "Omit",
    "start": 47,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 52,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "ResolveType",
    "start": 60,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 72,
    "end": 73
  },
  {
    "type": "String",
    "value": "\"then\"",
    "start": 74,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 81,
    "end": 82
  },
  {
    "type": "String",
    "value": "\"catch\"",
    "start": 83,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 100,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "TResult1",
    "start": 105,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "ResolveType",
    "start": 116,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "TResult2",
    "start": 129,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 138,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 140,
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
    "value": "(",
    "start": 146,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "onfulfilled",
    "start": 156,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 171,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 172,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "ResolveType",
    "start": 179,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 192,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "TResult1",
    "start": 195,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 204,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "PromiseLike",
    "start": 206,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "TResult1",
    "start": 218,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 229,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 231,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 241,
    "end": 242
  },
  {
    "type": "Null",
    "value": "null",
    "start": 243,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 247,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "onrejected",
    "start": 257,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 271,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "reason",
    "start": 272,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "RejectType",
    "start": 280,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 292,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "TResult2",
    "start": 295,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 304,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "PromiseLike",
    "start": 306,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 317,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "TResult2",
    "start": 318,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 329,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 331,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 341,
    "end": 342
  },
  {
    "type": "Null",
    "value": "null",
    "start": 343,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 353,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 354,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "TPromise",
    "start": 356,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 364,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "TResult1",
    "start": 365,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 374,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "TResult2",
    "start": 376,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 384,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "RejectType",
    "start": 386,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 396,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 397,
    "end": 398
  },
  {
    "type": "Identifier",
    "value": "catch",
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
    "value": "TResult",
    "start": 409,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 417,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 419,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 424,
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
    "value": "onrejected",
    "start": 435,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 449,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "reason",
    "start": 450,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 456,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "RejectType",
    "start": 458,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 468,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 470,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "TResult",
    "start": 473,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 481,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "PromiseLike",
    "start": 483,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 494,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "TResult",
    "start": 495,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 502,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 503,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 505,
    "end": 506
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 507,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 517,
    "end": 518
  },
  {
    "type": "Null",
    "value": "null",
    "start": 519,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 523,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 529,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 530,
    "end": 531
  },
  {
    "type": "Identifier",
    "value": "TPromise",
    "start": 532,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 540,
    "end": 541
  },
  {
    "type": "Identifier",
    "value": "ResolveType",
    "start": 541,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 553,
    "end": 554
  },
  {
    "type": "Identifier",
    "value": "TResult",
    "start": 555,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 562,
    "end": 563
  },
  {
    "type": "Identifier",
    "value": "RejectType",
    "start": 564,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 574,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 575,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Keyword",
    "value": "export",
    "start": 581,
    "end": 587
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 588,
    "end": 597
  },
  {
    "type": "Identifier",
    "value": "HttpResponse",
    "start": 598,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 610,
    "end": 611
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 611,
    "end": 612
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 613,
    "end": 620
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 621,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 628,
    "end": 629
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 630,
    "end": 631
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 632,
    "end": 639
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 640,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 648,
    "end": 649
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 650,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 657,
    "end": 658
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 659,
    "end": 666
  },
  {
    "type": "Identifier",
    "value": "Response",
    "start": 667,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 676,
    "end": 677
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 682,
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
    "value": "D",
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
    "value": "error",
    "start": 695,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 700,
    "end": 701
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 702,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "type": "Keyword",
    "value": "export",
    "start": 708,
    "end": 714
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 715,
    "end": 720
  },
  {
    "type": "Identifier",
    "value": "HttpClient",
    "start": 721,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 731,
    "end": 732
  },
  {
    "type": "Identifier",
    "value": "SecurityDataType",
    "start": 732,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 749,
    "end": 750
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 751,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 758,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 760,
    "end": 761
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 766,
    "end": 772
  },
  {
    "type": "Identifier",
    "value": "request",
    "start": 773,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 781,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 783,
    "end": 784
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 784,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 786,
    "end": 787
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 788,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 791,
    "end": 792
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 793,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 795,
    "end": 796
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 797,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 800,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 801,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 802,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 803,
    "end": 804
  },
  {
    "type": "Identifier",
    "value": "TPromise",
    "start": 805,
    "end": 813
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 813,
    "end": 814
  },
  {
    "type": "Identifier",
    "value": "HttpResponse",
    "start": 814,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 826,
    "end": 827
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 827,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 828,
    "end": 829
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 830,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 831,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 832,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 834,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 837,
    "end": 838
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 847,
    "end": 853
  },
  {
    "type": "String",
    "value": "''",
    "start": 854,
    "end": 856
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 857,
    "end": 859
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 860,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 863,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 869,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 870,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 872,
    "end": 873
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "HttpClient",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 19
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "HttpClient",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 19
          },
          "importKind": "value",
          "start": 9,
          "end": 19
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./http-client",
        "raw": "\"./http-client\"",
        "start": 27,
        "end": 42
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 43
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Api",
          "optional": false,
          "typeAnnotation": null,
          "start": 58,
          "end": 61
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "SecurityDataType",
                "optional": false,
                "typeAnnotation": null,
                "start": 62,
                "end": 78
              },
              "constraint": null,
              "default": {
                "type": "TSUnknownKeyword",
                "start": 81,
                "end": 88
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 62,
              "end": 88
            }
          ],
          "start": 61,
          "end": 89
        },
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 96,
                "end": 107
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "TSParameterProperty",
                    "accessibility": "private",
                    "decorators": [],
                    "override": false,
                    "parameter": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "http",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "HttpClient",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 122,
                            "end": 132
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "SecurityDataType",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 133,
                                  "end": 149
                                },
                                "typeArguments": null,
                                "start": 133,
                                "end": 149
                              }
                            ],
                            "start": 132,
                            "end": 150
                          },
                          "start": 122,
                          "end": 150
                        },
                        "start": 120,
                        "end": 150
                      },
                      "start": 116,
                      "end": 150
                    },
                    "readonly": false,
                    "static": false,
                    "start": 108,
                    "end": 150
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 152,
                  "end": 155
                },
                "expression": false,
                "start": 107,
                "end": 155
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 96,
              "end": 155
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "abc1",
                "optional": false,
                "typeAnnotation": null,
                "start": 161,
                "end": 165
              },
              "typeAnnotation": null,
              "value": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 174,
                        "end": 178
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "http",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 179,
                        "end": 183
                      },
                      "optional": false,
                      "computed": false,
                      "start": 174,
                      "end": 183
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "request",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 184,
                      "end": 191
                    },
                    "optional": false,
                    "computed": false,
                    "start": 174,
                    "end": 191
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 174,
                  "end": 193
                },
                "id": null,
                "generator": false,
                "start": 168,
                "end": 193
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 161,
              "end": 194
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "abc2",
                "optional": false,
                "typeAnnotation": null,
                "start": 199,
                "end": 203
              },
              "typeAnnotation": null,
              "value": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 212,
                        "end": 216
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "http",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 217,
                        "end": 221
                      },
                      "optional": false,
                      "computed": false,
                      "start": 212,
                      "end": 221
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "request",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 222,
                      "end": 229
                    },
                    "optional": false,
                    "computed": false,
                    "start": 212,
                    "end": 229
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 212,
                  "end": 231
                },
                "id": null,
                "generator": false,
                "start": 206,
                "end": 231
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 199,
              "end": 232
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "abc3",
                "optional": false,
                "typeAnnotation": null,
                "start": 237,
                "end": 241
              },
              "typeAnnotation": null,
              "value": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 250,
                        "end": 254
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "http",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 255,
                        "end": 259
                      },
                      "optional": false,
                      "computed": false,
                      "start": 250,
                      "end": 259
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "request",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 260,
                      "end": 267
                    },
                    "optional": false,
                    "computed": false,
                    "start": 250,
                    "end": 267
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 250,
                  "end": 269
                },
                "id": null,
                "generator": false,
                "start": 244,
                "end": 269
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 237,
              "end": 270
            }
          ],
          "start": 90,
          "end": 272
        },
        "abstract": false,
        "declare": false,
        "start": 52,
        "end": 272
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 45,
      "end": 272
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 272
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "HttpClient",
    "start": 9,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 22,
    "end": 26
  },
  {
    "type": "String",
    "value": "\"./http-client\"",
    "start": 27,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 42,
    "end": 43
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 45,
    "end": 51
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 52,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "Api",
    "start": 58,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "SecurityDataType",
    "start": 62,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 81,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 96,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 107,
    "end": 108
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 108,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "http",
    "start": 116,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "HttpClient",
    "start": 122,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "SecurityDataType",
    "start": 133,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 154,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "abc1",
    "start": 161,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 171,
    "end": 173
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 174,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 178,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "http",
    "start": 179,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 183,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "request",
    "start": 184,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 193,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "abc2",
    "start": 199,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "=>",
    "start": 209,
    "end": 211
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 212,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 216,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "http",
    "start": 217,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 221,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "request",
    "start": 222,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 231,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "abc3",
    "start": 237,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 247,
    "end": 249
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 250,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 254,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "http",
    "start": 255,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 259,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "request",
    "start": 260,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 271,
    "end": 272
  }
]
```
