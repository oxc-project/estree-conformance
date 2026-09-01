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
        "name": "SomeProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 19
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 26,
              "end": 27
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 30,
                "end": 36
              },
              "start": 28,
              "end": 36
            },
            "accessibility": null,
            "static": false,
            "start": 26,
            "end": 37
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 42,
              "end": 43
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 46,
                "end": 52
              },
              "start": 44,
              "end": 52
            },
            "accessibility": null,
            "static": false,
            "start": 42,
            "end": 53
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "renderAs",
              "optional": false,
              "typeAnnotation": null,
              "start": 58,
              "end": 66
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "FunctionComponent1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 69,
                  "end": 87
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "SomeProps",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 88,
                        "end": 97
                      },
                      "typeArguments": null,
                      "start": 88,
                      "end": 97
                    }
                  ],
                  "start": 87,
                  "end": 98
                },
                "start": 69,
                "end": 98
              },
              "start": 67,
              "end": 98
            },
            "accessibility": null,
            "static": false,
            "start": 58,
            "end": 98
          }
        ],
        "start": 20,
        "end": 100
      },
      "declare": false,
      "start": 0,
      "end": 100
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SomePropsX",
        "optional": false,
        "typeAnnotation": null,
        "start": 107,
        "end": 117
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Required",
              "optional": false,
              "typeAnnotation": null,
              "start": 120,
              "end": 128
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Pick",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 129,
                    "end": 133
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "SomeProps",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 134,
                          "end": 143
                        },
                        "typeArguments": null,
                        "start": 134,
                        "end": 143
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "x",
                          "raw": "\"x\"",
                          "start": 145,
                          "end": 148
                        },
                        "start": 145,
                        "end": 148
                      }
                    ],
                    "start": 133,
                    "end": 149
                  },
                  "start": 129,
                  "end": 149
                }
              ],
              "start": 128,
              "end": 150
            },
            "start": 120,
            "end": 150
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Omit",
              "optional": false,
              "typeAnnotation": null,
              "start": 153,
              "end": 157
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SomeProps",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 158,
                    "end": 167
                  },
                  "typeArguments": null,
                  "start": 158,
                  "end": 167
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "x",
                    "raw": "\"x\"",
                    "start": 169,
                    "end": 172
                  },
                  "start": 169,
                  "end": 172
                }
              ],
              "start": 157,
              "end": 173
            },
            "start": 153,
            "end": 173
          }
        ],
        "start": 120,
        "end": 173
      },
      "declare": false,
      "start": 102,
      "end": 174
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SomePropsClone",
        "optional": false,
        "typeAnnotation": null,
        "start": 186,
        "end": 200
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 207,
              "end": 208
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 211,
                "end": 217
              },
              "start": 209,
              "end": 217
            },
            "accessibility": null,
            "static": false,
            "start": 207,
            "end": 218
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 223,
              "end": 224
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 227,
                "end": 233
              },
              "start": 225,
              "end": 233
            },
            "accessibility": null,
            "static": false,
            "start": 223,
            "end": 234
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "renderAs",
              "optional": false,
              "typeAnnotation": null,
              "start": 239,
              "end": 247
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "FunctionComponent2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 250,
                  "end": 268
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "SomeProps",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 269,
                        "end": 278
                      },
                      "typeArguments": null,
                      "start": 269,
                      "end": 278
                    }
                  ],
                  "start": 268,
                  "end": 279
                },
                "start": 250,
                "end": 279
              },
              "start": 248,
              "end": 279
            },
            "accessibility": null,
            "static": false,
            "start": 239,
            "end": 279
          }
        ],
        "start": 201,
        "end": 281
      },
      "declare": false,
      "start": 176,
      "end": 281
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SomePropsCloneX",
        "optional": false,
        "typeAnnotation": null,
        "start": 288,
        "end": 303
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Required",
              "optional": false,
              "typeAnnotation": null,
              "start": 306,
              "end": 314
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Pick",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 315,
                    "end": 319
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "SomePropsClone",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 320,
                          "end": 334
                        },
                        "typeArguments": null,
                        "start": 320,
                        "end": 334
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "x",
                          "raw": "\"x\"",
                          "start": 336,
                          "end": 339
                        },
                        "start": 336,
                        "end": 339
                      }
                    ],
                    "start": 319,
                    "end": 340
                  },
                  "start": 315,
                  "end": 340
                }
              ],
              "start": 314,
              "end": 341
            },
            "start": 306,
            "end": 341
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Omit",
              "optional": false,
              "typeAnnotation": null,
              "start": 344,
              "end": 348
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SomePropsClone",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 349,
                    "end": 363
                  },
                  "typeArguments": null,
                  "start": 349,
                  "end": 363
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "x",
                    "raw": "\"x\"",
                    "start": 365,
                    "end": 368
                  },
                  "start": 365,
                  "end": 368
                }
              ],
              "start": 348,
              "end": 369
            },
            "start": 344,
            "end": 369
          }
        ],
        "start": 306,
        "end": 369
      },
      "declare": false,
      "start": 283,
      "end": 370
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Validator",
        "optional": false,
        "typeAnnotation": null,
        "start": 377,
        "end": 386
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
              "start": 387,
              "end": 388
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 387,
            "end": 388
          }
        ],
        "start": 386,
        "end": 389
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 397,
                "end": 404
              },
              "start": 395,
              "end": 404
            },
            "start": 393,
            "end": 405
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "opt",
              "optional": false,
              "typeAnnotation": null,
              "start": 406,
              "end": 409
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
                  "start": 412,
                  "end": 413
                },
                "typeArguments": null,
                "start": 412,
                "end": 413
              },
              "start": 410,
              "end": 413
            },
            "accessibility": null,
            "static": false,
            "start": 406,
            "end": 413
          }
        ],
        "start": 392,
        "end": 414
      },
      "declare": false,
      "start": 372,
      "end": 415
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "WeakValidationMap",
        "optional": false,
        "typeAnnotation": null,
        "start": 421,
        "end": 438
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
              "start": 439,
              "end": 440
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 439,
            "end": 440
          }
        ],
        "start": 438,
        "end": 441
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 446,
          "end": 447
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
              "start": 457,
              "end": 458
            },
            "typeArguments": null,
            "start": 457,
            "end": 458
          },
          "start": 451,
          "end": 458
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSNullKeyword",
            "start": 462,
            "end": 466
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
                "start": 475,
                "end": 476
              },
              "typeArguments": null,
              "start": 475,
              "end": 476
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 477,
                "end": 478
              },
              "typeArguments": null,
              "start": 477,
              "end": 478
            },
            "start": 475,
            "end": 479
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Validator",
              "optional": false,
              "typeAnnotation": null,
              "start": 482,
              "end": 491
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 492,
                          "end": 493
                        },
                        "typeArguments": null,
                        "start": 492,
                        "end": 493
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 494,
                          "end": 495
                        },
                        "typeArguments": null,
                        "start": 494,
                        "end": 495
                      },
                      "start": 492,
                      "end": 496
                    },
                    {
                      "type": "TSNullKeyword",
                      "start": 499,
                      "end": 503
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 506,
                      "end": 515
                    }
                  ],
                  "start": 492,
                  "end": 515
                }
              ],
              "start": 491,
              "end": 516
            },
            "start": 482,
            "end": 516
          },
          "falseType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Validator",
              "optional": false,
              "typeAnnotation": null,
              "start": 519,
              "end": 528
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
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 529,
                      "end": 530
                    },
                    "typeArguments": null,
                    "start": 529,
                    "end": 530
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 531,
                      "end": 532
                    },
                    "typeArguments": null,
                    "start": 531,
                    "end": 532
                  },
                  "start": 529,
                  "end": 533
                }
              ],
              "start": 528,
              "end": 534
            },
            "start": 519,
            "end": 534
          },
          "start": 462,
          "end": 534
        },
        "optional": true,
        "readonly": null,
        "start": 444,
        "end": 535
      },
      "declare": false,
      "start": 416,
      "end": 536
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FunctionComponent1",
        "optional": false,
        "typeAnnotation": null,
        "start": 548,
        "end": 566
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
              "start": 567,
              "end": 568
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 567,
            "end": 568
          }
        ],
        "start": 566,
        "end": 569
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
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
                          "start": 584,
                          "end": 585
                        },
                        "typeArguments": null,
                        "start": 584,
                        "end": 585
                      },
                      {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": true,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "children",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 590,
                              "end": 598
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSUnknownKeyword",
                                "start": 601,
                                "end": 608
                              },
                              "start": 599,
                              "end": 608
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 590,
                            "end": 608
                          }
                        ],
                        "start": 588,
                        "end": 610
                      }
                    ],
                    "start": 584,
                    "end": 610
                  },
                  "start": 582,
                  "end": 610
                },
                "start": 577,
                "end": 610
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 613,
                "end": 617
              },
              "start": 611,
              "end": 617
            },
            "start": 576,
            "end": 618
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "propTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 623,
              "end": 632
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "WeakValidationMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 635,
                  "end": 652
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
                        "start": 653,
                        "end": 654
                      },
                      "typeArguments": null,
                      "start": 653,
                      "end": 654
                    }
                  ],
                  "start": 652,
                  "end": 655
                },
                "start": 635,
                "end": 655
              },
              "start": 633,
              "end": 655
            },
            "accessibility": null,
            "static": false,
            "start": 623,
            "end": 656
          }
        ],
        "start": 570,
        "end": 658
      },
      "declare": false,
      "start": 538,
      "end": 658
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FunctionComponent2",
        "optional": false,
        "typeAnnotation": null,
        "start": 670,
        "end": 688
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
              "start": 689,
              "end": 690
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 689,
            "end": 690
          }
        ],
        "start": 688,
        "end": 691
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
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
                          "start": 706,
                          "end": 707
                        },
                        "typeArguments": null,
                        "start": 706,
                        "end": 707
                      },
                      {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": true,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "children",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 712,
                              "end": 720
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSUnknownKeyword",
                                "start": 723,
                                "end": 730
                              },
                              "start": 721,
                              "end": 730
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 712,
                            "end": 730
                          }
                        ],
                        "start": 710,
                        "end": 732
                      }
                    ],
                    "start": 706,
                    "end": 732
                  },
                  "start": 704,
                  "end": 732
                },
                "start": 699,
                "end": 732
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 735,
                "end": 739
              },
              "start": 733,
              "end": 739
            },
            "start": 698,
            "end": 740
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "propTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 745,
              "end": 754
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "WeakValidationMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 757,
                  "end": 774
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
                        "start": 775,
                        "end": 776
                      },
                      "typeArguments": null,
                      "start": 775,
                      "end": 776
                    }
                  ],
                  "start": 774,
                  "end": 777
                },
                "start": 757,
                "end": 777
              },
              "start": 755,
              "end": 777
            },
            "accessibility": null,
            "static": false,
            "start": 745,
            "end": 778
          }
        ],
        "start": 692,
        "end": 780
      },
      "declare": false,
      "start": 660,
      "end": 780
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "needsComponentOfSomeProps3",
        "optional": false,
        "typeAnnotation": null,
        "start": 791,
        "end": 817
      },
      "generator": false,
      "async": false,
      "declare": false,
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
            "start": 821,
            "end": 822
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
                  "name": "SomePropsClone",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 824,
                  "end": 838
                },
                "typeArguments": null,
                "start": 824,
                "end": 838
              },
              "start": 824,
              "end": 840
            },
            "start": 822,
            "end": 840
          },
          "value": null,
          "start": 818,
          "end": 840
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 843,
          "end": 847
        },
        "start": 841,
        "end": 847
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 848,
        "end": 850
      },
      "expression": false,
      "start": 782,
      "end": 850
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
            "name": "comp3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "FunctionComponent2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 864,
                  "end": 882
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "SomePropsCloneX",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 883,
                        "end": 898
                      },
                      "typeArguments": null,
                      "start": 883,
                      "end": 898
                    }
                  ],
                  "start": 882,
                  "end": 899
                },
                "start": 864,
                "end": 899
              },
              "start": 862,
              "end": 899
            },
            "start": 857,
            "end": 899
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 902,
              "end": 906
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 910,
              "end": 913
            },
            "start": 902,
            "end": 913
          },
          "definite": false,
          "start": 857,
          "end": 913
        }
      ],
      "declare": false,
      "start": 851,
      "end": 914
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "needsComponentOfSomeProps3",
          "optional": false,
          "typeAnnotation": null,
          "start": 915,
          "end": 941
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
                  "name": "renderAs",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 944,
                  "end": 952
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "comp3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 954,
                  "end": 959
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 944,
                "end": 959
              }
            ],
            "start": 942,
            "end": 961
          }
        ],
        "optional": false,
        "start": 915,
        "end": 962
      },
      "directive": null,
      "start": 915,
      "end": 963
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "needsComponentOfSomeProps2",
        "optional": false,
        "typeAnnotation": null,
        "start": 974,
        "end": 1000
      },
      "generator": false,
      "async": false,
      "declare": false,
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
            "start": 1004,
            "end": 1005
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
                  "name": "SomeProps",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1007,
                  "end": 1016
                },
                "typeArguments": null,
                "start": 1007,
                "end": 1016
              },
              "start": 1007,
              "end": 1018
            },
            "start": 1005,
            "end": 1018
          },
          "value": null,
          "start": 1001,
          "end": 1018
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1021,
          "end": 1025
        },
        "start": 1019,
        "end": 1025
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1026,
        "end": 1028
      },
      "expression": false,
      "start": 965,
      "end": 1028
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
            "name": "comp2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "FunctionComponent1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1042,
                  "end": 1060
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "SomePropsX",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1061,
                        "end": 1071
                      },
                      "typeArguments": null,
                      "start": 1061,
                      "end": 1071
                    }
                  ],
                  "start": 1060,
                  "end": 1072
                },
                "start": 1042,
                "end": 1072
              },
              "start": 1040,
              "end": 1072
            },
            "start": 1035,
            "end": 1072
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1075,
              "end": 1079
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1083,
              "end": 1086
            },
            "start": 1075,
            "end": 1086
          },
          "definite": false,
          "start": 1035,
          "end": 1086
        }
      ],
      "declare": false,
      "start": 1029,
      "end": 1087
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "needsComponentOfSomeProps2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1088,
          "end": 1114
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
                  "name": "renderAs",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1117,
                  "end": 1125
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "comp2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1127,
                  "end": 1132
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1117,
                "end": 1132
              }
            ],
            "start": 1115,
            "end": 1134
          }
        ],
        "optional": false,
        "start": 1088,
        "end": 1135
      },
      "directive": null,
      "start": 1088,
      "end": 1136
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1136
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
    "value": "SomeProps",
    "start": 10,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 28,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 30,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 46,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 52,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "renderAs",
    "start": 58,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "FunctionComponent1",
    "start": 69,
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
    "value": "SomeProps",
    "start": 88,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 102,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "SomePropsX",
    "start": 107,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "Required",
    "start": 120,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 129,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "SomeProps",
    "start": 134,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 143,
    "end": 144
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 145,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 148,
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
    "value": "&",
    "start": 151,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "Omit",
    "start": 153,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "SomeProps",
    "start": 158,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 167,
    "end": 168
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 169,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 173,
    "end": 174
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 176,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "SomePropsClone",
    "start": 186,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 211,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 225,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 227,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 233,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "renderAs",
    "start": 239,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 248,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "FunctionComponent2",
    "start": 250,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 268,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "SomeProps",
    "start": 269,
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
    "value": "}",
    "start": 280,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 283,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "SomePropsCloneX",
    "start": 288,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 304,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "Required",
    "start": 306,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 314,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 315,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 319,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "SomePropsClone",
    "start": 320,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 334,
    "end": 335
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 336,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 342,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "Omit",
    "start": 344,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 348,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "SomePropsClone",
    "start": 349,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 363,
    "end": 364
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 365,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 368,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 369,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 372,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "Validator",
    "start": 377,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 386,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 395,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 397,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 404,
    "end": 405
  },
  {
    "type": "Identifier",
    "value": "opt",
    "start": 406,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 410,
    "end": 411
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 414,
    "end": 415
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 416,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "WeakValidationMap",
    "start": 421,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 438,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 439,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 442,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 445,
    "end": 446
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 446,
    "end": 447
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 448,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 451,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 457,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 458,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": "?",
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
    "type": "Null",
    "value": "null",
    "start": 462,
    "end": 466
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 467,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 476,
    "end": 477
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 477,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 478,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 480,
    "end": 481
  },
  {
    "type": "Identifier",
    "value": "Validator",
    "start": 482,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 491,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 493,
    "end": 494
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 497,
    "end": 498
  },
  {
    "type": "Null",
    "value": "null",
    "start": 499,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 504,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 506,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 517,
    "end": 518
  },
  {
    "type": "Identifier",
    "value": "Validator",
    "start": 519,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 528,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 529,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 530,
    "end": 531
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 531,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 532,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 533,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 534,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "value": "FunctionComponent1",
    "start": 548,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 566,
    "end": 567
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 567,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Punctuator",
    "value": "(",
    "start": 576,
    "end": 577
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 577,
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
    "value": "P",
    "start": 584,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 586,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 588,
    "end": 589
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 590,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 598,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 599,
    "end": 600
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 601,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 609,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 610,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 611,
    "end": 612
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 613,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 617,
    "end": 618
  },
  {
    "type": "Identifier",
    "value": "propTypes",
    "start": 623,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 632,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 633,
    "end": 634
  },
  {
    "type": "Identifier",
    "value": "WeakValidationMap",
    "start": 635,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 652,
    "end": 653
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 653,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 654,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 655,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 657,
    "end": 658
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 660,
    "end": 669
  },
  {
    "type": "Identifier",
    "value": "FunctionComponent2",
    "start": 670,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 688,
    "end": 689
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 689,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Punctuator",
    "value": "(",
    "start": 698,
    "end": 699
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 699,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 704,
    "end": 705
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 706,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 708,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 710,
    "end": 711
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 712,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 720,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 721,
    "end": 722
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 723,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 731,
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
    "value": ":",
    "start": 733,
    "end": 734
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 735,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 739,
    "end": 740
  },
  {
    "type": "Identifier",
    "value": "propTypes",
    "start": 745,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": "?",
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
    "type": "Identifier",
    "value": "WeakValidationMap",
    "start": 757,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 774,
    "end": 775
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 775,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 776,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 777,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 779,
    "end": 780
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 782,
    "end": 790
  },
  {
    "type": "Identifier",
    "value": "needsComponentOfSomeProps3",
    "start": 791,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 817,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 818,
    "end": 821
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 821,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 822,
    "end": 823
  },
  {
    "type": "Identifier",
    "value": "SomePropsClone",
    "start": 824,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 838,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 839,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "void",
    "start": 843,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 848,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 849,
    "end": 850
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 851,
    "end": 856
  },
  {
    "type": "Identifier",
    "value": "comp3",
    "start": 857,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 862,
    "end": 863
  },
  {
    "type": "Identifier",
    "value": "FunctionComponent2",
    "start": 864,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 882,
    "end": 883
  },
  {
    "type": "Identifier",
    "value": "SomePropsCloneX",
    "start": 883,
    "end": 898
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 898,
    "end": 899
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 900,
    "end": 901
  },
  {
    "type": "Null",
    "value": "null",
    "start": 902,
    "end": 906
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 907,
    "end": 909
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 910,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 913,
    "end": 914
  },
  {
    "type": "Identifier",
    "value": "needsComponentOfSomeProps3",
    "start": 915,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 941,
    "end": 942
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 942,
    "end": 943
  },
  {
    "type": "Identifier",
    "value": "renderAs",
    "start": 944,
    "end": 952
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 952,
    "end": 953
  },
  {
    "type": "Identifier",
    "value": "comp3",
    "start": 954,
    "end": 959
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 960,
    "end": 961
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 961,
    "end": 962
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 962,
    "end": 963
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 965,
    "end": 973
  },
  {
    "type": "Identifier",
    "value": "needsComponentOfSomeProps2",
    "start": 974,
    "end": 1000
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1001,
    "end": 1004
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Identifier",
    "value": "SomeProps",
    "start": 1007,
    "end": 1016
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1021,
    "end": 1025
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1029,
    "end": 1034
  },
  {
    "type": "Identifier",
    "value": "comp2",
    "start": 1035,
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
    "value": "FunctionComponent1",
    "start": 1042,
    "end": 1060
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Identifier",
    "value": "SomePropsX",
    "start": 1061,
    "end": 1071
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1073,
    "end": 1074
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1075,
    "end": 1079
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1080,
    "end": 1082
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1083,
    "end": 1086
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1086,
    "end": 1087
  },
  {
    "type": "Identifier",
    "value": "needsComponentOfSomeProps2",
    "start": 1088,
    "end": 1114
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1115,
    "end": 1116
  },
  {
    "type": "Identifier",
    "value": "renderAs",
    "start": 1117,
    "end": 1125
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1125,
    "end": 1126
  },
  {
    "type": "Identifier",
    "value": "comp2",
    "start": 1127,
    "end": 1132
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1133,
    "end": 1134
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1134,
    "end": 1135
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1135,
    "end": 1136
  }
]
```
