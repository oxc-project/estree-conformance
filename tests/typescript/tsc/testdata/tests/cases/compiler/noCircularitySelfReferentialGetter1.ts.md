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
        "name": "ZodType",
        "optional": false,
        "typeAnnotation": null,
        "start": 67,
        "end": 74
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
              "name": "optional",
              "optional": false,
              "typeAnnotation": null,
              "start": 79,
              "end": 87
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
                      "value": "true",
                      "raw": "\"true\"",
                      "start": 89,
                      "end": 95
                    },
                    "start": 89,
                    "end": 95
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "false",
                      "raw": "\"false\"",
                      "start": 98,
                      "end": 105
                    },
                    "start": 98,
                    "end": 105
                  }
                ],
                "start": 89,
                "end": 105
              },
              "start": 87,
              "end": 105
            },
            "accessibility": null,
            "static": false,
            "start": 79,
            "end": 106
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "output",
              "optional": false,
              "typeAnnotation": null,
              "start": 109,
              "end": 115
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 117,
                "end": 120
              },
              "start": 115,
              "end": 120
            },
            "accessibility": null,
            "static": false,
            "start": 109,
            "end": 121
          }
        ],
        "start": 75,
        "end": 123
      },
      "declare": false,
      "start": 57,
      "end": 123
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ZodString",
        "optional": false,
        "typeAnnotation": null,
        "start": 135,
        "end": 144
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "ZodType",
            "optional": false,
            "typeAnnotation": null,
            "start": 153,
            "end": 160
          },
          "typeArguments": null,
          "start": 153,
          "end": 160
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
              "name": "optional",
              "optional": false,
              "typeAnnotation": null,
              "start": 165,
              "end": 173
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "false",
                  "raw": "\"false\"",
                  "start": 175,
                  "end": 182
                },
                "start": 175,
                "end": 182
              },
              "start": 173,
              "end": 182
            },
            "accessibility": null,
            "static": false,
            "start": 165,
            "end": 183
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "output",
              "optional": false,
              "typeAnnotation": null,
              "start": 186,
              "end": 192
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 194,
                "end": 200
              },
              "start": 192,
              "end": 200
            },
            "accessibility": null,
            "static": false,
            "start": 186,
            "end": 201
          }
        ],
        "start": 161,
        "end": 203
      },
      "declare": false,
      "start": 125,
      "end": 203
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ZodShape",
        "optional": false,
        "typeAnnotation": null,
        "start": 210,
        "end": 218
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Record",
          "optional": false,
          "typeAnnotation": null,
          "start": 221,
          "end": 227
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 228,
              "end": 234
            },
            {
              "type": "TSAnyKeyword",
              "start": 236,
              "end": 239
            }
          ],
          "start": 227,
          "end": 240
        },
        "start": 221,
        "end": 240
      },
      "declare": false,
      "start": 205,
      "end": 241
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Prettify",
        "optional": false,
        "typeAnnotation": null,
        "start": 247,
        "end": 255
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
              "start": 256,
              "end": 257
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 256,
            "end": 257
          }
        ],
        "start": 255,
        "end": 258
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSMappedType",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 264,
              "end": 265
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
                  "start": 275,
                  "end": 276
                },
                "typeArguments": null,
                "start": 275,
                "end": 276
              },
              "start": 269,
              "end": 276
            },
            "nameType": null,
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
                  "start": 279,
                  "end": 280
                },
                "typeArguments": null,
                "start": 279,
                "end": 280
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 281,
                  "end": 282
                },
                "typeArguments": null,
                "start": 281,
                "end": 282
              },
              "start": 279,
              "end": 283
            },
            "optional": false,
            "readonly": null,
            "start": 261,
            "end": 285
          },
          {
            "type": "TSTypeLiteral",
            "members": [],
            "start": 288,
            "end": 290
          }
        ],
        "start": 261,
        "end": 290
      },
      "declare": false,
      "start": 242,
      "end": 291
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InferObjectType",
        "optional": false,
        "typeAnnotation": null,
        "start": 297,
        "end": 312
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Shape",
              "optional": false,
              "typeAnnotation": null,
              "start": 313,
              "end": 318
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ZodShape",
                "optional": false,
                "typeAnnotation": null,
                "start": 327,
                "end": 335
              },
              "typeArguments": null,
              "start": 327,
              "end": 335
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 313,
            "end": 335
          }
        ],
        "start": 312,
        "end": 336
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Prettify",
          "optional": false,
          "typeAnnotation": null,
          "start": 339,
          "end": 347
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSMappedType",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 358,
                    "end": 359
                  },
                  "constraint": {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Shape",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 369,
                        "end": 374
                      },
                      "typeArguments": null,
                      "start": 369,
                      "end": 374
                    },
                    "start": 363,
                    "end": 374
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
                          "name": "Shape",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 378,
                          "end": 383
                        },
                        "typeArguments": null,
                        "start": 378,
                        "end": 383
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 384,
                          "end": 385
                        },
                        "typeArguments": null,
                        "start": 384,
                        "end": 385
                      },
                      "start": 378,
                      "end": 386
                    },
                    "extendsType": {
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
                            "name": "optional",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 397,
                            "end": 405
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "true",
                                "raw": "\"true\"",
                                "start": 407,
                                "end": 413
                              },
                              "start": 407,
                              "end": 413
                            },
                            "start": 405,
                            "end": 413
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 397,
                          "end": 413
                        }
                      ],
                      "start": 395,
                      "end": 415
                    },
                    "trueType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "k",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 424,
                        "end": 425
                      },
                      "typeArguments": null,
                      "start": 424,
                      "end": 425
                    },
                    "falseType": {
                      "type": "TSNeverKeyword",
                      "start": 434,
                      "end": 439
                    },
                    "start": 378,
                    "end": 439
                  },
                  "typeAnnotation": {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Shape",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 443,
                          "end": 448
                        },
                        "typeArguments": null,
                        "start": 443,
                        "end": 448
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 449,
                          "end": 450
                        },
                        "typeArguments": null,
                        "start": 449,
                        "end": 450
                      },
                      "start": 443,
                      "end": 451
                    },
                    "indexType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "output",
                        "raw": "\"output\"",
                        "start": 452,
                        "end": 460
                      },
                      "start": 452,
                      "end": 460
                    },
                    "start": 443,
                    "end": 461
                  },
                  "optional": true,
                  "readonly": null,
                  "start": 351,
                  "end": 466
                },
                {
                  "type": "TSMappedType",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 476,
                    "end": 477
                  },
                  "constraint": {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Shape",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 487,
                        "end": 492
                      },
                      "typeArguments": null,
                      "start": 487,
                      "end": 492
                    },
                    "start": 481,
                    "end": 492
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
                          "name": "Shape",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 496,
                          "end": 501
                        },
                        "typeArguments": null,
                        "start": 496,
                        "end": 501
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 502,
                          "end": 503
                        },
                        "typeArguments": null,
                        "start": 502,
                        "end": 503
                      },
                      "start": 496,
                      "end": 504
                    },
                    "extendsType": {
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
                            "name": "optional",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 515,
                            "end": 523
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "true",
                                "raw": "\"true\"",
                                "start": 525,
                                "end": 531
                              },
                              "start": 525,
                              "end": 531
                            },
                            "start": 523,
                            "end": 531
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 515,
                          "end": 531
                        }
                      ],
                      "start": 513,
                      "end": 533
                    },
                    "trueType": {
                      "type": "TSNeverKeyword",
                      "start": 542,
                      "end": 547
                    },
                    "falseType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "k",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 556,
                        "end": 557
                      },
                      "typeArguments": null,
                      "start": 556,
                      "end": 557
                    },
                    "start": 496,
                    "end": 557
                  },
                  "typeAnnotation": {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Shape",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 560,
                          "end": 565
                        },
                        "typeArguments": null,
                        "start": 560,
                        "end": 565
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 566,
                          "end": 567
                        },
                        "typeArguments": null,
                        "start": 566,
                        "end": 567
                      },
                      "start": 560,
                      "end": 568
                    },
                    "indexType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "output",
                        "raw": "\"output\"",
                        "start": 569,
                        "end": 577
                      },
                      "start": 569,
                      "end": 577
                    },
                    "start": 560,
                    "end": 578
                  },
                  "optional": false,
                  "readonly": null,
                  "start": 469,
                  "end": 583
                }
              ],
              "start": 351,
              "end": 583
            }
          ],
          "start": 347,
          "end": 585
        },
        "start": 339,
        "end": 585
      },
      "declare": false,
      "start": 292,
      "end": 586
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ZodObject",
        "optional": false,
        "typeAnnotation": null,
        "start": 597,
        "end": 606
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
              "start": 607,
              "end": 608
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ZodShape",
                "optional": false,
                "typeAnnotation": null,
                "start": 617,
                "end": 625
              },
              "typeArguments": null,
              "start": 617,
              "end": 625
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 607,
            "end": 625
          }
        ],
        "start": 606,
        "end": 626
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "ZodType",
            "optional": false,
            "typeAnnotation": null,
            "start": 635,
            "end": 642
          },
          "typeArguments": null,
          "start": 635,
          "end": 642
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
              "name": "optional",
              "optional": false,
              "typeAnnotation": null,
              "start": 647,
              "end": 655
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "false",
                  "raw": "\"false\"",
                  "start": 657,
                  "end": 664
                },
                "start": 657,
                "end": 664
              },
              "start": 655,
              "end": 664
            },
            "accessibility": null,
            "static": false,
            "start": 647,
            "end": 665
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "output",
              "optional": false,
              "typeAnnotation": null,
              "start": 668,
              "end": 674
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "InferObjectType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 676,
                  "end": 691
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
                        "start": 692,
                        "end": 693
                      },
                      "typeArguments": null,
                      "start": 692,
                      "end": 693
                    }
                  ],
                  "start": 691,
                  "end": 694
                },
                "start": 676,
                "end": 694
              },
              "start": 674,
              "end": 694
            },
            "accessibility": null,
            "static": false,
            "start": 668,
            "end": 695
          }
        ],
        "start": 643,
        "end": 697
      },
      "declare": false,
      "start": 587,
      "end": 697
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ZodOptional",
        "optional": false,
        "typeAnnotation": null,
        "start": 709,
        "end": 720
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
              "start": 721,
              "end": 722
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ZodType",
                "optional": false,
                "typeAnnotation": null,
                "start": 731,
                "end": 738
              },
              "typeArguments": null,
              "start": 731,
              "end": 738
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 721,
            "end": 738
          }
        ],
        "start": 720,
        "end": 739
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "ZodType",
            "optional": false,
            "typeAnnotation": null,
            "start": 748,
            "end": 755
          },
          "typeArguments": null,
          "start": 748,
          "end": 755
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
              "name": "optional",
              "optional": false,
              "typeAnnotation": null,
              "start": 760,
              "end": 768
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "true",
                  "raw": "\"true\"",
                  "start": 770,
                  "end": 776
                },
                "start": 770,
                "end": 776
              },
              "start": 768,
              "end": 776
            },
            "accessibility": null,
            "static": false,
            "start": 760,
            "end": 777
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "output",
              "optional": false,
              "typeAnnotation": null,
              "start": 780,
              "end": 786
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
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
                        "start": 788,
                        "end": 789
                      },
                      "typeArguments": null,
                      "start": 788,
                      "end": 789
                    },
                    "indexType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "output",
                        "raw": "\"output\"",
                        "start": 790,
                        "end": 798
                      },
                      "start": 790,
                      "end": 798
                    },
                    "start": 788,
                    "end": 799
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 802,
                    "end": 811
                  }
                ],
                "start": 788,
                "end": 811
              },
              "start": 786,
              "end": 811
            },
            "accessibility": null,
            "static": false,
            "start": 780,
            "end": 812
          }
        ],
        "start": 756,
        "end": 814
      },
      "declare": false,
      "start": 699,
      "end": 814
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "object",
        "optional": false,
        "typeAnnotation": null,
        "start": 833,
        "end": 839
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
              "start": 840,
              "end": 841
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ZodShape",
                "optional": false,
                "typeAnnotation": null,
                "start": 850,
                "end": 858
              },
              "typeArguments": null,
              "start": 850,
              "end": 858
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 840,
            "end": 858
          }
        ],
        "start": 839,
        "end": 859
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "shape",
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
                "start": 867,
                "end": 868
              },
              "typeArguments": null,
              "start": 867,
              "end": 868
            },
            "start": 865,
            "end": 868
          },
          "start": 860,
          "end": 868
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ZodObject",
            "optional": false,
            "typeAnnotation": null,
            "start": 871,
            "end": 880
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
                  "start": 881,
                  "end": 882
                },
                "typeArguments": null,
                "start": 881,
                "end": 882
              }
            ],
            "start": 880,
            "end": 883
          },
          "start": 871,
          "end": 883
        },
        "start": 869,
        "end": 883
      },
      "body": null,
      "expression": false,
      "start": 816,
      "end": 884
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "string",
        "optional": false,
        "typeAnnotation": null,
        "start": 902,
        "end": 908
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ZodString",
            "optional": false,
            "typeAnnotation": null,
            "start": 912,
            "end": 921
          },
          "typeArguments": null,
          "start": 912,
          "end": 921
        },
        "start": 910,
        "end": 921
      },
      "body": null,
      "expression": false,
      "start": 885,
      "end": 922
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "optional",
        "optional": false,
        "typeAnnotation": null,
        "start": 940,
        "end": 948
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
              "start": 949,
              "end": 950
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ZodType",
                "optional": false,
                "typeAnnotation": null,
                "start": 959,
                "end": 966
              },
              "typeArguments": null,
              "start": 959,
              "end": 966
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 949,
            "end": 966
          }
        ],
        "start": 948,
        "end": 967
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "schema",
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
                "start": 976,
                "end": 977
              },
              "typeArguments": null,
              "start": 976,
              "end": 977
            },
            "start": 974,
            "end": 977
          },
          "start": 968,
          "end": 977
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ZodOptional",
            "optional": false,
            "typeAnnotation": null,
            "start": 980,
            "end": 991
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
                  "start": 992,
                  "end": 993
                },
                "typeArguments": null,
                "start": 992,
                "end": 993
              }
            ],
            "start": 991,
            "end": 994
          },
          "start": 980,
          "end": 994
        },
        "start": 978,
        "end": 994
      },
      "body": null,
      "expression": false,
      "start": 923,
      "end": 995
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
            "name": "Category",
            "optional": false,
            "typeAnnotation": null,
            "start": 1003,
            "end": 1011
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "object",
              "optional": false,
              "typeAnnotation": null,
              "start": 1014,
              "end": 1020
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
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1025,
                      "end": 1029
                    },
                    "value": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "string",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1031,
                        "end": 1037
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1031,
                      "end": 1039
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1025,
                    "end": 1039
                  },
                  {
                    "type": "Property",
                    "kind": "get",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "parent",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1047,
                      "end": 1053
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "optional",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1069,
                                "end": 1077
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Category",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1078,
                                  "end": 1086
                                }
                              ],
                              "optional": false,
                              "start": 1069,
                              "end": 1087
                            },
                            "start": 1062,
                            "end": 1088
                          }
                        ],
                        "start": 1056,
                        "end": 1092
                      },
                      "expression": false,
                      "start": 1053,
                      "end": 1092
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1043,
                    "end": 1092
                  }
                ],
                "start": 1021,
                "end": 1095
              }
            ],
            "optional": false,
            "start": 1014,
            "end": 1096
          },
          "definite": false,
          "start": 1003,
          "end": 1096
        }
      ],
      "declare": false,
      "start": 997,
      "end": 1097
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 1097
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
    "value": "ZodType",
    "start": 67,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "optional",
    "start": 79,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 87,
    "end": 88
  },
  {
    "type": "String",
    "value": "\"true\"",
    "start": 89,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 96,
    "end": 97
  },
  {
    "type": "String",
    "value": "\"false\"",
    "start": 98,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "output",
    "start": 109,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 117,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 122,
    "end": 123
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 125,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "ZodString",
    "start": 135,
    "end": 144
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 145,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "ZodType",
    "start": 153,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "optional",
    "start": 165,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 173,
    "end": 174
  },
  {
    "type": "String",
    "value": "\"false\"",
    "start": 175,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 182,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "output",
    "start": 186,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 192,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 194,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 202,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 205,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "ZodShape",
    "start": 210,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 221,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 228,
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
    "value": "any",
    "start": 236,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 240,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 242,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "Prettify",
    "start": 247,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 255,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 263,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 264,
    "end": 265
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 266,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 269,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 277,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 280,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 290,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 292,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "InferObjectType",
    "start": 297,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 312,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 313,
    "end": 318
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 319,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "ZodShape",
    "start": 327,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 337,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "Prettify",
    "start": 339,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 357,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 358,
    "end": 359
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 360,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 363,
    "end": 368
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 369,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 375,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 378,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 383,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 384,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 385,
    "end": 386
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 387,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 395,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "optional",
    "start": 397,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 405,
    "end": 406
  },
  {
    "type": "String",
    "value": "\"true\"",
    "start": 407,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 422,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 432,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 434,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 439,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 441,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 443,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 448,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 450,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 451,
    "end": 452
  },
  {
    "type": "String",
    "value": "\"output\"",
    "start": 452,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 460,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 465,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 475,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 476,
    "end": 477
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 478,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 481,
    "end": 486
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 487,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 493,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 496,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 501,
    "end": 502
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 502,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 503,
    "end": 504
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 505,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 513,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "optional",
    "start": 515,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 523,
    "end": 524
  },
  {
    "type": "String",
    "value": "\"true\"",
    "start": 525,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 532,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 540,
    "end": 541
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 542,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 554,
    "end": 555
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 556,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "Shape",
    "start": 560,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 565,
    "end": 566
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 566,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 567,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 568,
    "end": 569
  },
  {
    "type": "String",
    "value": "\"output\"",
    "start": 569,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "start": 582,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Keyword",
    "value": "interface",
    "start": 587,
    "end": 596
  },
  {
    "type": "Identifier",
    "value": "ZodObject",
    "start": 597,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 606,
    "end": 607
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 607,
    "end": 608
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 609,
    "end": 616
  },
  {
    "type": "Identifier",
    "value": "ZodShape",
    "start": 617,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 625,
    "end": 626
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 627,
    "end": 634
  },
  {
    "type": "Identifier",
    "value": "ZodType",
    "start": 635,
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
    "value": "optional",
    "start": 647,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 655,
    "end": 656
  },
  {
    "type": "String",
    "value": "\"false\"",
    "start": 657,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 664,
    "end": 665
  },
  {
    "type": "Identifier",
    "value": "output",
    "start": 668,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 674,
    "end": 675
  },
  {
    "type": "Identifier",
    "value": "InferObjectType",
    "start": 676,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 691,
    "end": 692
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 692,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 693,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "type": "Keyword",
    "value": "interface",
    "start": 699,
    "end": 708
  },
  {
    "type": "Identifier",
    "value": "ZodOptional",
    "start": 709,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 720,
    "end": 721
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 721,
    "end": 722
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 723,
    "end": 730
  },
  {
    "type": "Identifier",
    "value": "ZodType",
    "start": 731,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 738,
    "end": 739
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 740,
    "end": 747
  },
  {
    "type": "Identifier",
    "value": "ZodType",
    "start": 748,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 756,
    "end": 757
  },
  {
    "type": "Identifier",
    "value": "optional",
    "start": 760,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 768,
    "end": 769
  },
  {
    "type": "String",
    "value": "\"true\"",
    "start": 770,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 776,
    "end": 777
  },
  {
    "type": "Identifier",
    "value": "output",
    "start": 780,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 786,
    "end": 787
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 788,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 789,
    "end": 790
  },
  {
    "type": "String",
    "value": "\"output\"",
    "start": 790,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 798,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 800,
    "end": 801
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 802,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 811,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 813,
    "end": 814
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 816,
    "end": 823
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 824,
    "end": 832
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 833,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 839,
    "end": 840
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 840,
    "end": 841
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 842,
    "end": 849
  },
  {
    "type": "Identifier",
    "value": "ZodShape",
    "start": 850,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 858,
    "end": 859
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 859,
    "end": 860
  },
  {
    "type": "Identifier",
    "value": "shape",
    "start": 860,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 865,
    "end": 866
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 867,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 868,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 869,
    "end": 870
  },
  {
    "type": "Identifier",
    "value": "ZodObject",
    "start": 871,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 880,
    "end": 881
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 881,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 882,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 883,
    "end": 884
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 885,
    "end": 892
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 893,
    "end": 901
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 902,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 908,
    "end": 909
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 909,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 910,
    "end": 911
  },
  {
    "type": "Identifier",
    "value": "ZodString",
    "start": 912,
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
    "value": "declare",
    "start": 923,
    "end": 930
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 931,
    "end": 939
  },
  {
    "type": "Identifier",
    "value": "optional",
    "start": 940,
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
    "value": "T",
    "start": 949,
    "end": 950
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 951,
    "end": 958
  },
  {
    "type": "Identifier",
    "value": "ZodType",
    "start": 959,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 966,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 967,
    "end": 968
  },
  {
    "type": "Identifier",
    "value": "schema",
    "start": 968,
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
    "value": "T",
    "start": 976,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 977,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 978,
    "end": 979
  },
  {
    "type": "Identifier",
    "value": "ZodOptional",
    "start": 980,
    "end": 991
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 991,
    "end": 992
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 992,
    "end": 993
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 993,
    "end": 994
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 994,
    "end": 995
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 997,
    "end": 1002
  },
  {
    "type": "Identifier",
    "value": "Category",
    "start": 1003,
    "end": 1011
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 1014,
    "end": 1020
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1021,
    "end": 1022
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1025,
    "end": 1029
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1031,
    "end": 1037
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1043,
    "end": 1046
  },
  {
    "type": "Identifier",
    "value": "parent",
    "start": 1047,
    "end": 1053
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1053,
    "end": 1054
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1056,
    "end": 1057
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1062,
    "end": 1068
  },
  {
    "type": "Identifier",
    "value": "optional",
    "start": 1069,
    "end": 1077
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Identifier",
    "value": "Category",
    "start": 1078,
    "end": 1086
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1086,
    "end": 1087
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1087,
    "end": 1088
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1091,
    "end": 1092
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1092,
    "end": 1093
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1094,
    "end": 1095
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1096,
    "end": 1097
  }
]
```
