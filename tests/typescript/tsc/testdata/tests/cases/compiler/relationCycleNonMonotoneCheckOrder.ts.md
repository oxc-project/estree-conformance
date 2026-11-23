__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "inferenceConstraint",
        "optional": false,
        "typeAnnotation": null,
        "start": 282,
        "end": 301
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 313,
              "end": 314
            },
            "typeParameters": null,
            "typeAnnotation": {
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
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 319,
                    "end": 320
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "c",
                        "raw": "\"c\"",
                        "start": 323,
                        "end": 326
                      },
                      "start": 323,
                      "end": 326
                    },
                    "start": 321,
                    "end": 326
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 319,
                  "end": 327
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 328,
                    "end": 329
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
                            "name": "S",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 331,
                            "end": 332
                          },
                          "typeArguments": null,
                          "start": 331,
                          "end": 332
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "G",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 335,
                            "end": 336
                          },
                          "typeArguments": null,
                          "start": 335,
                          "end": 336
                        }
                      ],
                      "start": 331,
                      "end": 336
                    },
                    "start": 329,
                    "end": 336
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 328,
                  "end": 337
                },
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
                    "start": 338,
                    "end": 339
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 341,
                      "end": 347
                    },
                    "start": 339,
                    "end": 347
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 338,
                  "end": 347
                }
              ],
              "start": 317,
              "end": 349
            },
            "declare": false,
            "start": 308,
            "end": 350
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 360,
              "end": 361
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 370,
                          "end": 376
                        },
                        "start": 368,
                        "end": 376
                      },
                      "start": 367,
                      "end": 376
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "c",
                            "raw": "\"c\"",
                            "start": 379,
                            "end": 382
                          },
                          "start": 379,
                          "end": 382
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "G",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 385,
                            "end": 386
                          },
                          "typeArguments": null,
                          "start": 385,
                          "end": 386
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 389,
                          "end": 395
                        }
                      ],
                      "start": 379,
                      "end": 395
                    },
                    "start": 377,
                    "end": 395
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 366,
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
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 397,
                    "end": 398
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "G",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 400,
                        "end": 401
                      },
                      "typeArguments": null,
                      "start": 400,
                      "end": 401
                    },
                    "start": 398,
                    "end": 401
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 397,
                  "end": 402
                },
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
                    "start": 403,
                    "end": 404
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 406,
                        "end": 407
                      },
                      "start": 406,
                      "end": 407
                    },
                    "start": 404,
                    "end": 407
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 403,
                  "end": 407
                }
              ],
              "start": 364,
              "end": 409
            },
            "declare": false,
            "start": 355,
            "end": 410
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 420,
              "end": 421
            },
            "typeParameters": null,
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
                      "start": 425,
                      "end": 426
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 435,
                        "end": 436
                      },
                      "typeArguments": null,
                      "start": 435,
                      "end": 436
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 425,
                    "end": 436
                  }
                ],
                "start": 424,
                "end": 437
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
                        "start": 441,
                        "end": 442
                      },
                      "typeArguments": null,
                      "start": 441,
                      "end": 442
                    },
                    "start": 439,
                    "end": 442
                  },
                  "start": 438,
                  "end": 442
                }
              ],
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
                      "start": 447,
                      "end": 448
                    },
                    "typeArguments": null,
                    "start": 447,
                    "end": 448
                  },
                  "indexType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "k",
                      "raw": "\"k\"",
                      "start": 449,
                      "end": 452
                    },
                    "start": 449,
                    "end": 452
                  },
                  "start": 447,
                  "end": 453
                },
                "start": 444,
                "end": 453
              },
              "start": 424,
              "end": 453
            },
            "declare": false,
            "start": 415,
            "end": 454
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "G",
              "optional": false,
              "typeAnnotation": null,
              "start": 464,
              "end": 465
            },
            "typeParameters": null,
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
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 472,
                        "end": 473
                      },
                      "typeArguments": null,
                      "start": 472,
                      "end": 473
                    },
                    "start": 470,
                    "end": 473
                  },
                  "start": 469,
                  "end": 473
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "c",
                        "raw": "\"c\"",
                        "start": 478,
                        "end": 481
                      },
                      "start": 478,
                      "end": 481
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "G",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 484,
                        "end": 485
                      },
                      "typeArguments": null,
                      "start": 484,
                      "end": 485
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 488,
                      "end": 494
                    }
                  ],
                  "start": 478,
                  "end": 494
                },
                "start": 475,
                "end": 494
              },
              "start": 468,
              "end": 494
            },
            "declare": false,
            "start": 459,
            "end": 495
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
                  "name": "r1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConditionalType",
                      "checkType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "S",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 517,
                          "end": 518
                        },
                        "typeArguments": null,
                        "start": 517,
                        "end": 518
                      },
                      "extendsType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "G",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 527,
                          "end": 528
                        },
                        "typeArguments": null,
                        "start": 527,
                        "end": 528
                      },
                      "trueType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "start": 531,
                          "end": 535
                        },
                        "start": 531,
                        "end": 535
                      },
                      "falseType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": false,
                          "raw": "false",
                          "start": 538,
                          "end": 543
                        },
                        "start": 538,
                        "end": 543
                      },
                      "start": 517,
                      "end": 543
                    },
                    "start": 515,
                    "end": 543
                  },
                  "start": 513,
                  "end": 543
                },
                "init": null,
                "definite": false,
                "start": 513,
                "end": 543
              }
            ],
            "declare": true,
            "start": 501,
            "end": 544
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
                  "name": "r2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConditionalType",
                      "checkType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 565,
                          "end": 566
                        },
                        "typeArguments": null,
                        "start": 565,
                        "end": 566
                      },
                      "extendsType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 575,
                          "end": 576
                        },
                        "typeArguments": null,
                        "start": 575,
                        "end": 576
                      },
                      "trueType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "start": 579,
                          "end": 583
                        },
                        "start": 579,
                        "end": 583
                      },
                      "falseType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": false,
                          "raw": "false",
                          "start": 586,
                          "end": 591
                        },
                        "start": 586,
                        "end": 591
                      },
                      "start": 565,
                      "end": 591
                    },
                    "start": 563,
                    "end": 591
                  },
                  "start": 561,
                  "end": 591
                },
                "init": null,
                "definite": false,
                "start": 561,
                "end": 591
              }
            ],
            "declare": true,
            "start": 549,
            "end": 592
          }
        ],
        "start": 302,
        "end": 594
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 272,
      "end": 594
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "inferenceConstraintMethod",
        "optional": false,
        "typeAnnotation": null,
        "start": 675,
        "end": 700
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 712,
              "end": 713
            },
            "typeParameters": null,
            "typeAnnotation": {
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
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 718,
                    "end": 719
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "c",
                        "raw": "\"c\"",
                        "start": 722,
                        "end": 725
                      },
                      "start": 722,
                      "end": 725
                    },
                    "start": 720,
                    "end": 725
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 718,
                  "end": 726
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 727,
                    "end": 728
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
                            "name": "S",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 730,
                            "end": 731
                          },
                          "typeArguments": null,
                          "start": 730,
                          "end": 731
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "G",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 734,
                            "end": 735
                          },
                          "typeArguments": null,
                          "start": 734,
                          "end": 735
                        }
                      ],
                      "start": 730,
                      "end": 735
                    },
                    "start": 728,
                    "end": 735
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 727,
                  "end": 736
                },
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
                    "start": 737,
                    "end": 738
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 740,
                      "end": 746
                    },
                    "start": 738,
                    "end": 746
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 737,
                  "end": 746
                }
              ],
              "start": 716,
              "end": 748
            },
            "declare": false,
            "start": 707,
            "end": 749
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 759,
              "end": 760
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 769,
                          "end": 775
                        },
                        "start": 767,
                        "end": 775
                      },
                      "start": 766,
                      "end": 775
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "c",
                            "raw": "\"c\"",
                            "start": 778,
                            "end": 781
                          },
                          "start": 778,
                          "end": 781
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "G",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 784,
                            "end": 785
                          },
                          "typeArguments": null,
                          "start": 784,
                          "end": 785
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 788,
                          "end": 794
                        }
                      ],
                      "start": 778,
                      "end": 794
                    },
                    "start": 776,
                    "end": 794
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 765,
                  "end": 795
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 796,
                    "end": 797
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "G",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 799,
                        "end": 800
                      },
                      "typeArguments": null,
                      "start": 799,
                      "end": 800
                    },
                    "start": 797,
                    "end": 800
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 796,
                  "end": 801
                },
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
                    "start": 802,
                    "end": 803
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 805,
                        "end": 806
                      },
                      "start": 805,
                      "end": 806
                    },
                    "start": 803,
                    "end": 806
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 802,
                  "end": 806
                }
              ],
              "start": 763,
              "end": 808
            },
            "declare": false,
            "start": 754,
            "end": 809
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 819,
              "end": 820
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 825,
                    "end": 826
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
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 827,
                          "end": 828
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 837,
                            "end": 838
                          },
                          "typeArguments": null,
                          "start": 837,
                          "end": 838
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 827,
                        "end": 838
                      }
                    ],
                    "start": 826,
                    "end": 839
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
                            "start": 843,
                            "end": 844
                          },
                          "typeArguments": null,
                          "start": 843,
                          "end": 844
                        },
                        "start": 841,
                        "end": 844
                      },
                      "start": 840,
                      "end": 844
                    }
                  ],
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
                          "start": 847,
                          "end": 848
                        },
                        "typeArguments": null,
                        "start": 847,
                        "end": 848
                      },
                      "indexType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "k",
                          "raw": "\"k\"",
                          "start": 849,
                          "end": 852
                        },
                        "start": 849,
                        "end": 852
                      },
                      "start": 847,
                      "end": 853
                    },
                    "start": 845,
                    "end": 853
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 825,
                  "end": 853
                }
              ],
              "start": 823,
              "end": 855
            },
            "declare": false,
            "start": 814,
            "end": 856
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "G",
              "optional": false,
              "typeAnnotation": null,
              "start": 866,
              "end": 867
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 872,
                    "end": 873
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
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 877,
                            "end": 878
                          },
                          "typeArguments": null,
                          "start": 877,
                          "end": 878
                        },
                        "start": 875,
                        "end": 878
                      },
                      "start": 874,
                      "end": 878
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "c",
                            "raw": "\"c\"",
                            "start": 881,
                            "end": 884
                          },
                          "start": 881,
                          "end": 884
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "G",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 887,
                            "end": 888
                          },
                          "typeArguments": null,
                          "start": 887,
                          "end": 888
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 891,
                          "end": 897
                        }
                      ],
                      "start": 881,
                      "end": 897
                    },
                    "start": 879,
                    "end": 897
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 872,
                  "end": 897
                }
              ],
              "start": 870,
              "end": 899
            },
            "declare": false,
            "start": 861,
            "end": 900
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
                  "name": "r1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConditionalType",
                      "checkType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "S",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 922,
                          "end": 923
                        },
                        "typeArguments": null,
                        "start": 922,
                        "end": 923
                      },
                      "extendsType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "G",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 932,
                          "end": 933
                        },
                        "typeArguments": null,
                        "start": 932,
                        "end": 933
                      },
                      "trueType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "start": 936,
                          "end": 940
                        },
                        "start": 936,
                        "end": 940
                      },
                      "falseType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": false,
                          "raw": "false",
                          "start": 943,
                          "end": 948
                        },
                        "start": 943,
                        "end": 948
                      },
                      "start": 922,
                      "end": 948
                    },
                    "start": 920,
                    "end": 948
                  },
                  "start": 918,
                  "end": 948
                },
                "init": null,
                "definite": false,
                "start": 918,
                "end": 948
              }
            ],
            "declare": true,
            "start": 906,
            "end": 949
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
                  "name": "r2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConditionalType",
                      "checkType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 970,
                          "end": 971
                        },
                        "typeArguments": null,
                        "start": 970,
                        "end": 971
                      },
                      "extendsType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 980,
                          "end": 981
                        },
                        "typeArguments": null,
                        "start": 980,
                        "end": 981
                      },
                      "trueType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "start": 984,
                          "end": 988
                        },
                        "start": 984,
                        "end": 988
                      },
                      "falseType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": false,
                          "raw": "false",
                          "start": 991,
                          "end": 996
                        },
                        "start": 991,
                        "end": 996
                      },
                      "start": 970,
                      "end": 996
                    },
                    "start": 968,
                    "end": 996
                  },
                  "start": 966,
                  "end": 996
                },
                "init": null,
                "definite": false,
                "start": 966,
                "end": 996
              }
            ],
            "declare": true,
            "start": 954,
            "end": 997
          }
        ],
        "start": 701,
        "end": 999
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 665,
      "end": 999
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "inferenceConstraintMutual",
        "optional": false,
        "typeAnnotation": null,
        "start": 1266,
        "end": 1291
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1303,
              "end": 1305
            },
            "typeParameters": null,
            "typeAnnotation": {
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
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1310,
                    "end": 1311
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "c",
                        "raw": "\"c\"",
                        "start": 1314,
                        "end": 1317
                      },
                      "start": 1314,
                      "end": 1317
                    },
                    "start": 1312,
                    "end": 1317
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1310,
                  "end": 1318
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1319,
                    "end": 1320
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
                            "name": "S2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1322,
                            "end": 1324
                          },
                          "typeArguments": null,
                          "start": 1322,
                          "end": 1324
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "G2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1327,
                            "end": 1329
                          },
                          "typeArguments": null,
                          "start": 1327,
                          "end": 1329
                        }
                      ],
                      "start": 1322,
                      "end": 1329
                    },
                    "start": 1320,
                    "end": 1329
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1319,
                  "end": 1329
                }
              ],
              "start": 1308,
              "end": 1331
            },
            "declare": false,
            "start": 1298,
            "end": 1332
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1342,
              "end": 1344
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
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
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "c",
                            "raw": "\"c\"",
                            "start": 1362,
                            "end": 1365
                          },
                          "start": 1362,
                          "end": 1365
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "G2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1368,
                            "end": 1370
                          },
                          "typeArguments": null,
                          "start": 1368,
                          "end": 1370
                        }
                      ],
                      "start": 1362,
                      "end": 1370
                    },
                    "start": 1360,
                    "end": 1370
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 1349,
                  "end": 1371
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1372,
                    "end": 1373
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "G2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1375,
                        "end": 1377
                      },
                      "typeArguments": null,
                      "start": 1375,
                      "end": 1377
                    },
                    "start": 1373,
                    "end": 1377
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1372,
                  "end": 1377
                }
              ],
              "start": 1347,
              "end": 1379
            },
            "declare": false,
            "start": 1337,
            "end": 1380
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "S1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1390,
              "end": 1392
            },
            "typeParameters": null,
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
                      "start": 1396,
                      "end": 1397
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1406,
                        "end": 1408
                      },
                      "typeArguments": null,
                      "start": 1406,
                      "end": 1408
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1396,
                    "end": 1408
                  }
                ],
                "start": 1395,
                "end": 1409
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
                        "start": 1413,
                        "end": 1414
                      },
                      "typeArguments": null,
                      "start": 1413,
                      "end": 1414
                    },
                    "start": 1411,
                    "end": 1414
                  },
                  "start": 1410,
                  "end": 1414
                }
              ],
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
                      "start": 1419,
                      "end": 1420
                    },
                    "typeArguments": null,
                    "start": 1419,
                    "end": 1420
                  },
                  "indexType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "k",
                      "raw": "\"k\"",
                      "start": 1421,
                      "end": 1424
                    },
                    "start": 1421,
                    "end": 1424
                  },
                  "start": 1419,
                  "end": 1425
                },
                "start": 1416,
                "end": 1425
              },
              "start": 1395,
              "end": 1425
            },
            "declare": false,
            "start": 1385,
            "end": 1426
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "G1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1436,
              "end": 1438
            },
            "typeParameters": null,
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
                        "name": "A1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1445,
                        "end": 1447
                      },
                      "typeArguments": null,
                      "start": 1445,
                      "end": 1447
                    },
                    "start": 1443,
                    "end": 1447
                  },
                  "start": 1442,
                  "end": 1447
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "c",
                        "raw": "\"c\"",
                        "start": 1452,
                        "end": 1455
                      },
                      "start": 1452,
                      "end": 1455
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "G2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1458,
                        "end": 1460
                      },
                      "typeArguments": null,
                      "start": 1458,
                      "end": 1460
                    }
                  ],
                  "start": 1452,
                  "end": 1460
                },
                "start": 1449,
                "end": 1460
              },
              "start": 1441,
              "end": 1460
            },
            "declare": false,
            "start": 1431,
            "end": 1461
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1471,
              "end": 1473
            },
            "typeParameters": null,
            "typeAnnotation": {
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
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1478,
                    "end": 1479
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "d",
                        "raw": "\"d\"",
                        "start": 1482,
                        "end": 1485
                      },
                      "start": 1482,
                      "end": 1485
                    },
                    "start": 1480,
                    "end": 1485
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1478,
                  "end": 1486
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1487,
                    "end": 1488
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
                            "name": "S1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1490,
                            "end": 1492
                          },
                          "typeArguments": null,
                          "start": 1490,
                          "end": 1492
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "G1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1495,
                            "end": 1497
                          },
                          "typeArguments": null,
                          "start": 1495,
                          "end": 1497
                        }
                      ],
                      "start": 1490,
                      "end": 1497
                    },
                    "start": 1488,
                    "end": 1497
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1487,
                  "end": 1497
                }
              ],
              "start": 1476,
              "end": 1499
            },
            "declare": false,
            "start": 1466,
            "end": 1500
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1510,
              "end": 1512
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1521,
                          "end": 1527
                        },
                        "start": 1519,
                        "end": 1527
                      },
                      "start": 1518,
                      "end": 1527
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "d",
                            "raw": "\"d\"",
                            "start": 1530,
                            "end": 1533
                          },
                          "start": 1530,
                          "end": 1533
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "G1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1536,
                            "end": 1538
                          },
                          "typeArguments": null,
                          "start": 1536,
                          "end": 1538
                        }
                      ],
                      "start": 1530,
                      "end": 1538
                    },
                    "start": 1528,
                    "end": 1538
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 1517,
                  "end": 1539
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1540,
                    "end": 1541
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "G1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1543,
                        "end": 1545
                      },
                      "typeArguments": null,
                      "start": 1543,
                      "end": 1545
                    },
                    "start": 1541,
                    "end": 1545
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1540,
                  "end": 1545
                }
              ],
              "start": 1515,
              "end": 1547
            },
            "declare": false,
            "start": 1505,
            "end": 1548
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "S2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1558,
              "end": 1560
            },
            "typeParameters": null,
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
                      "start": 1564,
                      "end": 1565
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1574,
                        "end": 1576
                      },
                      "typeArguments": null,
                      "start": 1574,
                      "end": 1576
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1564,
                    "end": 1576
                  }
                ],
                "start": 1563,
                "end": 1577
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
                        "start": 1581,
                        "end": 1582
                      },
                      "typeArguments": null,
                      "start": 1581,
                      "end": 1582
                    },
                    "start": 1579,
                    "end": 1582
                  },
                  "start": 1578,
                  "end": 1582
                }
              ],
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
                      "start": 1587,
                      "end": 1588
                    },
                    "typeArguments": null,
                    "start": 1587,
                    "end": 1588
                  },
                  "indexType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "k",
                      "raw": "\"k\"",
                      "start": 1589,
                      "end": 1592
                    },
                    "start": 1589,
                    "end": 1592
                  },
                  "start": 1587,
                  "end": 1593
                },
                "start": 1584,
                "end": 1593
              },
              "start": 1563,
              "end": 1593
            },
            "declare": false,
            "start": 1553,
            "end": 1594
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "G2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1604,
              "end": 1606
            },
            "typeParameters": null,
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
                        "name": "A2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1613,
                        "end": 1615
                      },
                      "typeArguments": null,
                      "start": 1613,
                      "end": 1615
                    },
                    "start": 1611,
                    "end": 1615
                  },
                  "start": 1610,
                  "end": 1615
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "d",
                        "raw": "\"d\"",
                        "start": 1620,
                        "end": 1623
                      },
                      "start": 1620,
                      "end": 1623
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "G1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1626,
                        "end": 1628
                      },
                      "typeArguments": null,
                      "start": 1626,
                      "end": 1628
                    }
                  ],
                  "start": 1620,
                  "end": 1628
                },
                "start": 1617,
                "end": 1628
              },
              "start": 1609,
              "end": 1628
            },
            "declare": false,
            "start": 1599,
            "end": 1629
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
                  "name": "s1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "S1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1651,
                        "end": 1653
                      },
                      "typeArguments": null,
                      "start": 1651,
                      "end": 1653
                    },
                    "start": 1649,
                    "end": 1653
                  },
                  "start": 1647,
                  "end": 1653
                },
                "init": null,
                "definite": false,
                "start": 1647,
                "end": 1653
              }
            ],
            "declare": true,
            "start": 1635,
            "end": 1654
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
                  "name": "s2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "S2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1675,
                        "end": 1677
                      },
                      "typeArguments": null,
                      "start": 1675,
                      "end": 1677
                    },
                    "start": 1673,
                    "end": 1677
                  },
                  "start": 1671,
                  "end": 1677
                },
                "init": null,
                "definite": false,
                "start": 1671,
                "end": 1677
              }
            ],
            "declare": true,
            "start": 1659,
            "end": 1678
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
                  "name": "g1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "G1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1691,
                        "end": 1693
                      },
                      "typeArguments": null,
                      "start": 1691,
                      "end": 1693
                    },
                    "start": 1689,
                    "end": 1693
                  },
                  "start": 1687,
                  "end": 1693
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1696,
                  "end": 1698
                },
                "definite": false,
                "start": 1687,
                "end": 1698
              }
            ],
            "declare": false,
            "start": 1683,
            "end": 1699
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
                  "name": "g2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "G2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1712,
                        "end": 1714
                      },
                      "typeArguments": null,
                      "start": 1712,
                      "end": 1714
                    },
                    "start": 1710,
                    "end": 1714
                  },
                  "start": 1708,
                  "end": 1714
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1717,
                  "end": 1719
                },
                "definite": false,
                "start": 1708,
                "end": 1719
              }
            ],
            "declare": false,
            "start": 1704,
            "end": 1720
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
                  "name": "r1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConditionalType",
                      "checkType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "S1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1741,
                          "end": 1743
                        },
                        "typeArguments": null,
                        "start": 1741,
                        "end": 1743
                      },
                      "extendsType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "G1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1752,
                          "end": 1754
                        },
                        "typeArguments": null,
                        "start": 1752,
                        "end": 1754
                      },
                      "trueType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "start": 1757,
                          "end": 1761
                        },
                        "start": 1757,
                        "end": 1761
                      },
                      "falseType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": false,
                          "raw": "false",
                          "start": 1764,
                          "end": 1769
                        },
                        "start": 1764,
                        "end": 1769
                      },
                      "start": 1741,
                      "end": 1769
                    },
                    "start": 1739,
                    "end": 1769
                  },
                  "start": 1737,
                  "end": 1769
                },
                "init": null,
                "definite": false,
                "start": 1737,
                "end": 1769
              }
            ],
            "declare": true,
            "start": 1725,
            "end": 1770
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
                  "name": "r2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConditionalType",
                      "checkType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "S2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1791,
                          "end": 1793
                        },
                        "typeArguments": null,
                        "start": 1791,
                        "end": 1793
                      },
                      "extendsType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "G2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1802,
                          "end": 1804
                        },
                        "typeArguments": null,
                        "start": 1802,
                        "end": 1804
                      },
                      "trueType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "start": 1807,
                          "end": 1811
                        },
                        "start": 1807,
                        "end": 1811
                      },
                      "falseType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": false,
                          "raw": "false",
                          "start": 1814,
                          "end": 1819
                        },
                        "start": 1814,
                        "end": 1819
                      },
                      "start": 1791,
                      "end": 1819
                    },
                    "start": 1789,
                    "end": 1819
                  },
                  "start": 1787,
                  "end": 1819
                },
                "init": null,
                "definite": false,
                "start": 1787,
                "end": 1819
              }
            ],
            "declare": true,
            "start": 1775,
            "end": 1820
          }
        ],
        "start": 1292,
        "end": 1822
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1256,
      "end": 1822
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "discriminated",
        "optional": false,
        "typeAnnotation": null,
        "start": 2134,
        "end": 2147
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null,
              "start": 2164,
              "end": 2165
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
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2168,
                    "end": 2169
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Src",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2171,
                        "end": 2174
                      },
                      "typeArguments": null,
                      "start": 2171,
                      "end": 2174
                    },
                    "start": 2169,
                    "end": 2174
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2168,
                  "end": 2175
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "q",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2176,
                    "end": 2177
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2179,
                      "end": 2185
                    },
                    "start": 2177,
                    "end": 2185
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2176,
                  "end": 2185
                }
              ],
              "start": 2166,
              "end": 2187
            },
            "declare": false,
            "start": 2154,
            "end": 2187
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Y",
              "optional": false,
              "typeAnnotation": null,
              "start": 2202,
              "end": 2203
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
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2206,
                    "end": 2207
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Tgt",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2209,
                        "end": 2212
                      },
                      "typeArguments": null,
                      "start": 2209,
                      "end": 2212
                    },
                    "start": 2207,
                    "end": 2212
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2206,
                  "end": 2213
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "q",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2214,
                    "end": 2215
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 2217,
                        "end": 2218
                      },
                      "start": 2217,
                      "end": 2218
                    },
                    "start": 2215,
                    "end": 2218
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2214,
                  "end": 2218
                }
              ],
              "start": 2204,
              "end": 2220
            },
            "declare": false,
            "start": 2192,
            "end": 2220
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Src",
              "optional": false,
              "typeAnnotation": null,
              "start": 2230,
              "end": 2233
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
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2238,
                    "end": 2239
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
                            "value": "a",
                            "raw": "\"a\"",
                            "start": 2241,
                            "end": 2244
                          },
                          "start": 2241,
                          "end": 2244
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "X",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2247,
                            "end": 2248
                          },
                          "typeArguments": null,
                          "start": 2247,
                          "end": 2248
                        }
                      ],
                      "start": 2241,
                      "end": 2248
                    },
                    "start": 2239,
                    "end": 2248
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2238,
                  "end": 2249
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2250,
                    "end": 2251
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2253,
                      "end": 2259
                    },
                    "start": 2251,
                    "end": 2259
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2250,
                  "end": 2259
                }
              ],
              "start": 2236,
              "end": 2261
            },
            "declare": false,
            "start": 2225,
            "end": 2262
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Tgt",
              "optional": false,
              "typeAnnotation": null,
              "start": 2272,
              "end": 2275
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
                        "name": "d",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2280,
                        "end": 2281
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "a",
                            "raw": "\"a\"",
                            "start": 2283,
                            "end": 2286
                          },
                          "start": 2283,
                          "end": 2286
                        },
                        "start": 2281,
                        "end": 2286
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2280,
                      "end": 2287
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2288,
                        "end": 2289
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 2291,
                          "end": 2297
                        },
                        "start": 2289,
                        "end": 2297
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2288,
                      "end": 2297
                    }
                  ],
                  "start": 2278,
                  "end": 2299
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
                        "name": "d",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2304,
                        "end": 2305
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "X",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2307,
                            "end": 2308
                          },
                          "typeArguments": null,
                          "start": 2307,
                          "end": 2308
                        },
                        "start": 2305,
                        "end": 2308
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2304,
                      "end": 2309
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2310,
                        "end": 2311
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 2313,
                          "end": 2319
                        },
                        "start": 2311,
                        "end": 2319
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2310,
                      "end": 2319
                    }
                  ],
                  "start": 2302,
                  "end": 2321
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
                        "name": "d",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2326,
                        "end": 2327
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Y",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2329,
                            "end": 2330
                          },
                          "typeArguments": null,
                          "start": 2329,
                          "end": 2330
                        },
                        "start": 2327,
                        "end": 2330
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2326,
                      "end": 2331
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2332,
                        "end": 2333
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 2335,
                          "end": 2341
                        },
                        "start": 2333,
                        "end": 2341
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2332,
                      "end": 2341
                    }
                  ],
                  "start": 2324,
                  "end": 2343
                }
              ],
              "start": 2278,
              "end": 2343
            },
            "declare": false,
            "start": 2267,
            "end": 2344
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
                  "name": "r1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConditionalType",
                      "checkType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Src",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2366,
                          "end": 2369
                        },
                        "typeArguments": null,
                        "start": 2366,
                        "end": 2369
                      },
                      "extendsType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Tgt",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2378,
                          "end": 2381
                        },
                        "typeArguments": null,
                        "start": 2378,
                        "end": 2381
                      },
                      "trueType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "start": 2384,
                          "end": 2388
                        },
                        "start": 2384,
                        "end": 2388
                      },
                      "falseType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": false,
                          "raw": "false",
                          "start": 2391,
                          "end": 2396
                        },
                        "start": 2391,
                        "end": 2396
                      },
                      "start": 2366,
                      "end": 2396
                    },
                    "start": 2364,
                    "end": 2396
                  },
                  "start": 2362,
                  "end": 2396
                },
                "init": null,
                "definite": false,
                "start": 2362,
                "end": 2396
              }
            ],
            "declare": true,
            "start": 2350,
            "end": 2397
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
                  "name": "r2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConditionalType",
                      "checkType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "X",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2418,
                          "end": 2419
                        },
                        "typeArguments": null,
                        "start": 2418,
                        "end": 2419
                      },
                      "extendsType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2428,
                          "end": 2429
                        },
                        "typeArguments": null,
                        "start": 2428,
                        "end": 2429
                      },
                      "trueType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "start": 2432,
                          "end": 2436
                        },
                        "start": 2432,
                        "end": 2436
                      },
                      "falseType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": false,
                          "raw": "false",
                          "start": 2439,
                          "end": 2444
                        },
                        "start": 2439,
                        "end": 2444
                      },
                      "start": 2418,
                      "end": 2444
                    },
                    "start": 2416,
                    "end": 2444
                  },
                  "start": 2414,
                  "end": 2444
                },
                "init": null,
                "definite": false,
                "start": 2414,
                "end": 2444
              }
            ],
            "declare": true,
            "start": 2402,
            "end": 2445
          }
        ],
        "start": 2148,
        "end": 2447
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 2124,
      "end": 2447
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "excessPropertyDiscriminant",
        "optional": false,
        "typeAnnotation": null,
        "start": 2642,
        "end": 2668
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null,
              "start": 2685,
              "end": 2686
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
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2689,
                    "end": 2690
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Src",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2692,
                        "end": 2695
                      },
                      "typeArguments": null,
                      "start": 2692,
                      "end": 2695
                    },
                    "start": 2690,
                    "end": 2695
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2689,
                  "end": 2696
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "q",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2697,
                    "end": 2698
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2700,
                      "end": 2706
                    },
                    "start": 2698,
                    "end": 2706
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2697,
                  "end": 2706
                }
              ],
              "start": 2687,
              "end": 2708
            },
            "declare": false,
            "start": 2675,
            "end": 2708
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Y",
              "optional": false,
              "typeAnnotation": null,
              "start": 2723,
              "end": 2724
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
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2727,
                    "end": 2728
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Tgt",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2730,
                        "end": 2733
                      },
                      "typeArguments": null,
                      "start": 2730,
                      "end": 2733
                    },
                    "start": 2728,
                    "end": 2733
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2727,
                  "end": 2734
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "q",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2735,
                    "end": 2736
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 2738,
                        "end": 2739
                      },
                      "start": 2738,
                      "end": 2739
                    },
                    "start": 2736,
                    "end": 2739
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2735,
                  "end": 2739
                }
              ],
              "start": 2725,
              "end": 2741
            },
            "declare": false,
            "start": 2713,
            "end": 2741
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Src",
              "optional": false,
              "typeAnnotation": null,
              "start": 2751,
              "end": 2754
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
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2759,
                    "end": 2760
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
                            "value": "a",
                            "raw": "\"a\"",
                            "start": 2762,
                            "end": 2765
                          },
                          "start": 2762,
                          "end": 2765
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "X",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2768,
                            "end": 2769
                          },
                          "typeArguments": null,
                          "start": 2768,
                          "end": 2769
                        }
                      ],
                      "start": 2762,
                      "end": 2769
                    },
                    "start": 2760,
                    "end": 2769
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2759,
                  "end": 2770
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2771,
                    "end": 2772
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2774,
                      "end": 2780
                    },
                    "start": 2772,
                    "end": 2780
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2771,
                  "end": 2780
                }
              ],
              "start": 2757,
              "end": 2782
            },
            "declare": false,
            "start": 2746,
            "end": 2783
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Tgt",
              "optional": false,
              "typeAnnotation": null,
              "start": 2793,
              "end": 2796
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
                        "name": "d",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2801,
                        "end": 2802
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "a",
                            "raw": "\"a\"",
                            "start": 2804,
                            "end": 2807
                          },
                          "start": 2804,
                          "end": 2807
                        },
                        "start": 2802,
                        "end": 2807
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2801,
                      "end": 2808
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2809,
                        "end": 2810
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 2812,
                          "end": 2818
                        },
                        "start": 2810,
                        "end": 2818
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2809,
                      "end": 2818
                    }
                  ],
                  "start": 2799,
                  "end": 2820
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
                        "name": "d",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2825,
                        "end": 2826
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "X",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2828,
                            "end": 2829
                          },
                          "typeArguments": null,
                          "start": 2828,
                          "end": 2829
                        },
                        "start": 2826,
                        "end": 2829
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2825,
                      "end": 2830
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2831,
                        "end": 2832
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 2834,
                          "end": 2840
                        },
                        "start": 2832,
                        "end": 2840
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2831,
                      "end": 2840
                    }
                  ],
                  "start": 2823,
                  "end": 2842
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
                        "name": "d",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2847,
                        "end": 2848
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Y",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2850,
                            "end": 2851
                          },
                          "typeArguments": null,
                          "start": 2850,
                          "end": 2851
                        },
                        "start": 2848,
                        "end": 2851
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2847,
                      "end": 2852
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2853,
                        "end": 2854
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 2856,
                          "end": 2862
                        },
                        "start": 2854,
                        "end": 2862
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2853,
                      "end": 2862
                    }
                  ],
                  "start": 2845,
                  "end": 2864
                }
              ],
              "start": 2799,
              "end": 2864
            },
            "declare": false,
            "start": 2788,
            "end": 2865
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Outer",
              "optional": false,
              "typeAnnotation": null,
              "start": 2875,
              "end": 2880
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
                        "name": "e",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2885,
                        "end": 2886
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "z",
                            "raw": "\"z\"",
                            "start": 2888,
                            "end": 2891
                          },
                          "start": 2888,
                          "end": 2891
                        },
                        "start": 2886,
                        "end": 2891
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2885,
                      "end": 2891
                    }
                  ],
                  "start": 2883,
                  "end": 2893
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
                        "name": "e",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2898,
                        "end": 2899
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Tgt",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2901,
                            "end": 2904
                          },
                          "typeArguments": null,
                          "start": 2901,
                          "end": 2904
                        },
                        "start": 2899,
                        "end": 2904
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2898,
                      "end": 2905
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "w",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2906,
                        "end": 2907
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 2909,
                          "end": 2915
                        },
                        "start": 2907,
                        "end": 2915
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2906,
                      "end": 2915
                    }
                  ],
                  "start": 2896,
                  "end": 2917
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
                        "name": "e",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2922,
                        "end": 2923
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Src",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2925,
                            "end": 2928
                          },
                          "typeArguments": null,
                          "start": 2925,
                          "end": 2928
                        },
                        "start": 2923,
                        "end": 2928
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2922,
                      "end": 2928
                    }
                  ],
                  "start": 2920,
                  "end": 2930
                }
              ],
              "start": 2883,
              "end": 2930
            },
            "declare": false,
            "start": 2870,
            "end": 2931
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
                  "name": "src",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Src",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2954,
                        "end": 2957
                      },
                      "typeArguments": null,
                      "start": 2954,
                      "end": 2957
                    },
                    "start": 2952,
                    "end": 2957
                  },
                  "start": 2949,
                  "end": 2957
                },
                "init": null,
                "definite": false,
                "start": 2949,
                "end": 2957
              }
            ],
            "declare": true,
            "start": 2937,
            "end": 2958
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
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Outer",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2970,
                        "end": 2975
                      },
                      "typeArguments": null,
                      "start": 2970,
                      "end": 2975
                    },
                    "start": 2968,
                    "end": 2975
                  },
                  "start": 2967,
                  "end": 2975
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
                        "name": "e",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2980,
                        "end": 2981
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "src",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2983,
                        "end": 2986
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 2980,
                      "end": 2986
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "w",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2988,
                        "end": 2989
                      },
                      "value": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 2991,
                        "end": 2992
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 2988,
                      "end": 2992
                    }
                  ],
                  "start": 2978,
                  "end": 2994
                },
                "definite": false,
                "start": 2967,
                "end": 2994
              }
            ],
            "declare": false,
            "start": 2963,
            "end": 2995
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
                  "name": "r2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConditionalType",
                      "checkType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "X",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3016,
                          "end": 3017
                        },
                        "typeArguments": null,
                        "start": 3016,
                        "end": 3017
                      },
                      "extendsType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3026,
                          "end": 3027
                        },
                        "typeArguments": null,
                        "start": 3026,
                        "end": 3027
                      },
                      "trueType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "start": 3030,
                          "end": 3034
                        },
                        "start": 3030,
                        "end": 3034
                      },
                      "falseType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": false,
                          "raw": "false",
                          "start": 3037,
                          "end": 3042
                        },
                        "start": 3037,
                        "end": 3042
                      },
                      "start": 3016,
                      "end": 3042
                    },
                    "start": 3014,
                    "end": 3042
                  },
                  "start": 3012,
                  "end": 3042
                },
                "init": null,
                "definite": false,
                "start": 3012,
                "end": 3042
              }
            ],
            "declare": true,
            "start": 3000,
            "end": 3043
          }
        ],
        "start": 2669,
        "end": 3045
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 2632,
      "end": 3045
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "strictArity",
        "optional": false,
        "typeAnnotation": null,
        "start": 3345,
        "end": 3356
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 3368,
              "end": 3369
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
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3374,
                    "end": 3375
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
                            "name": "F",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3377,
                            "end": 3378
                          },
                          "typeArguments": null,
                          "start": 3377,
                          "end": 3378
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "G",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3381,
                            "end": 3382
                          },
                          "typeArguments": null,
                          "start": 3381,
                          "end": 3382
                        }
                      ],
                      "start": 3377,
                      "end": 3382
                    },
                    "start": 3375,
                    "end": 3382
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3374,
                  "end": 3383
                },
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
                    "start": 3384,
                    "end": 3385
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 3387,
                      "end": 3393
                    },
                    "start": 3385,
                    "end": 3393
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3384,
                  "end": 3393
                }
              ],
              "start": 3372,
              "end": 3395
            },
            "declare": false,
            "start": 3363,
            "end": 3396
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Q",
              "optional": false,
              "typeAnnotation": null,
              "start": 3406,
              "end": 3407
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
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3412,
                    "end": 3413
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "G",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3415,
                        "end": 3416
                      },
                      "typeArguments": null,
                      "start": 3415,
                      "end": 3416
                    },
                    "start": 3413,
                    "end": 3416
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3412,
                  "end": 3417
                },
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
                    "start": 3418,
                    "end": 3419
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 3421,
                        "end": 3422
                      },
                      "start": 3421,
                      "end": 3422
                    },
                    "start": 3419,
                    "end": 3422
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3418,
                  "end": 3422
                }
              ],
              "start": 3410,
              "end": 3424
            },
            "declare": false,
            "start": 3401,
            "end": 3425
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "F",
              "optional": false,
              "typeAnnotation": null,
              "start": 3435,
              "end": 3436
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
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
                        "start": 3444,
                        "end": 3445
                      },
                      "typeArguments": null,
                      "start": 3444,
                      "end": 3445
                    },
                    "start": 3442,
                    "end": 3445
                  },
                  "start": 3440,
                  "end": 3445
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 3450,
                    "end": 3451
                  },
                  "start": 3450,
                  "end": 3451
                },
                "start": 3447,
                "end": 3451
              },
              "start": 3439,
              "end": 3451
            },
            "declare": false,
            "start": 3430,
            "end": 3452
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "G",
              "optional": false,
              "typeAnnotation": null,
              "start": 3462,
              "end": 3463
            },
            "typeParameters": null,
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
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Q",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3470,
                            "end": 3471
                          },
                          "typeArguments": null,
                          "start": 3470,
                          "end": 3471
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 3474,
                          "end": 3483
                        }
                      ],
                      "start": 3470,
                      "end": 3483
                    },
                    "start": 3468,
                    "end": 3483
                  },
                  "start": 3467,
                  "end": 3483
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 3488,
                  "end": 3494
                },
                "start": 3485,
                "end": 3494
              },
              "start": 3466,
              "end": 3494
            },
            "declare": false,
            "start": 3457,
            "end": 3495
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "WP",
              "optional": false,
              "typeAnnotation": null,
              "start": 3505,
              "end": 3507
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3512,
                    "end": 3513
                  },
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
                        "start": 3515,
                        "end": 3516
                      },
                      "typeArguments": null,
                      "start": 3515,
                      "end": 3516
                    },
                    "start": 3513,
                    "end": 3516
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3512,
                  "end": 3517
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
                    "start": 3518,
                    "end": 3519
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 3521,
                      "end": 3527
                    },
                    "start": 3519,
                    "end": 3527
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3518,
                  "end": 3527
                }
              ],
              "start": 3510,
              "end": 3529
            },
            "declare": false,
            "start": 3500,
            "end": 3530
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "WQ",
              "optional": false,
              "typeAnnotation": null,
              "start": 3540,
              "end": 3542
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3547,
                    "end": 3548
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Q",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3550,
                        "end": 3551
                      },
                      "typeArguments": null,
                      "start": 3550,
                      "end": 3551
                    },
                    "start": 3548,
                    "end": 3551
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3547,
                  "end": 3551
                }
              ],
              "start": 3545,
              "end": 3553
            },
            "declare": false,
            "start": 3535,
            "end": 3554
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
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "F",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3575,
                        "end": 3576
                      },
                      "typeArguments": null,
                      "start": 3575,
                      "end": 3576
                    },
                    "start": 3573,
                    "end": 3576
                  },
                  "start": 3572,
                  "end": 3576
                },
                "init": null,
                "definite": false,
                "start": 3572,
                "end": 3576
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "g",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "G",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3581,
                        "end": 3582
                      },
                      "typeArguments": null,
                      "start": 3581,
                      "end": 3582
                    },
                    "start": 3579,
                    "end": 3582
                  },
                  "start": 3578,
                  "end": 3582
                },
                "init": null,
                "definite": false,
                "start": 3578,
                "end": 3582
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "wp",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "WP",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3588,
                        "end": 3590
                      },
                      "typeArguments": null,
                      "start": 3588,
                      "end": 3590
                    },
                    "start": 3586,
                    "end": 3590
                  },
                  "start": 3584,
                  "end": 3590
                },
                "init": null,
                "definite": false,
                "start": 3584,
                "end": 3590
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "wq",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "WQ",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3596,
                        "end": 3598
                      },
                      "typeArguments": null,
                      "start": 3596,
                      "end": 3598
                    },
                    "start": 3594,
                    "end": 3598
                  },
                  "start": 3592,
                  "end": 3598
                },
                "init": null,
                "definite": false,
                "start": 3592,
                "end": 3598
              }
            ],
            "declare": true,
            "start": 3560,
            "end": 3599
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
                  "name": "a1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3608,
                  "end": 3610
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3614,
                      "end": 3615
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "g",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3617,
                      "end": 3618
                    }
                  ],
                  "start": 3613,
                  "end": 3619
                },
                "definite": false,
                "start": 3608,
                "end": 3619
              }
            ],
            "declare": false,
            "start": 3604,
            "end": 3620
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
                  "name": "a2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3629,
                  "end": 3631
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "wp",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3635,
                      "end": 3637
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "wq",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3639,
                      "end": 3641
                    }
                  ],
                  "start": 3634,
                  "end": 3642
                },
                "definite": false,
                "start": 3629,
                "end": 3642
              }
            ],
            "declare": false,
            "start": 3625,
            "end": 3643
          }
        ],
        "start": 3357,
        "end": 3645
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 3335,
      "end": 3645
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 3645
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 272,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "inferenceConstraint",
    "start": 282,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 308,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 317,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 321,
    "end": 322
  },
  {
    "type": "String",
    "value": "\"c\"",
    "start": 323,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 326,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 329,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 333,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 336,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 339,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 341,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 349,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 355,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 366,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 368,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 370,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 377,
    "end": 378
  },
  {
    "type": "String",
    "value": "\"c\"",
    "start": 379,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 383,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 387,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 389,
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
    "value": "f",
    "start": 397,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 398,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 401,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 404,
    "end": 405
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 406,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 409,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 415,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 424,
    "end": 425
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 425,
    "end": 426
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 427,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 437,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 439,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 441,
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
    "value": "T",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 448,
    "end": 449
  },
  {
    "type": "String",
    "value": "\"k\"",
    "start": 449,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 452,
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
    "value": "type",
    "start": 459,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 466,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 468,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 470,
    "end": 471
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 473,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 475,
    "end": 477
  },
  {
    "type": "String",
    "value": "\"c\"",
    "start": 478,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 482,
    "end": 483
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 486,
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
    "value": ";",
    "start": 494,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 501,
    "end": 508
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 509,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 513,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 515,
    "end": 516
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 517,
    "end": 518
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 519,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 529,
    "end": 530
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 531,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 536,
    "end": 537
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 538,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 543,
    "end": 544
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 549,
    "end": 556
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 557,
    "end": 560
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 561,
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
    "value": "A",
    "start": 565,
    "end": 566
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 567,
    "end": 574
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 575,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 577,
    "end": 578
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 579,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 584,
    "end": 585
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 586,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 591,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 593,
    "end": 594
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 665,
    "end": 674
  },
  {
    "type": "Identifier",
    "value": "inferenceConstraintMethod",
    "start": 675,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 701,
    "end": 702
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 707,
    "end": 711
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 712,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 714,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 716,
    "end": 717
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 718,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 719,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 720,
    "end": 721
  },
  {
    "type": "String",
    "value": "\"c\"",
    "start": 722,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 725,
    "end": 726
  },
  {
    "type": "Identifier",
    "value": "f",
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
    "type": "Identifier",
    "value": "S",
    "start": 730,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 732,
    "end": 733
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 734,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 735,
    "end": 736
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 737,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 738,
    "end": 739
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 740,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 747,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 748,
    "end": 749
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 754,
    "end": 758
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 759,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 761,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 763,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 765,
    "end": 766
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 766,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 767,
    "end": 768
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 769,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 775,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 776,
    "end": 777
  },
  {
    "type": "String",
    "value": "\"c\"",
    "start": 778,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 782,
    "end": 783
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 784,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 786,
    "end": 787
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 788,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 794,
    "end": 795
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 796,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 797,
    "end": 798
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 799,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 800,
    "end": 801
  },
  {
    "type": "Identifier",
    "value": "z",
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
    "type": "Numeric",
    "value": "1",
    "start": 805,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 807,
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
    "value": "type",
    "start": 814,
    "end": 818
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 819,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "value": "m",
    "start": 825,
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
    "type": "Keyword",
    "value": "extends",
    "start": 829,
    "end": 836
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 837,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 838,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 839,
    "end": 840
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Identifier",
    "value": "T",
    "start": 843,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 844,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 845,
    "end": 846
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 847,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 848,
    "end": 849
  },
  {
    "type": "String",
    "value": "\"k\"",
    "start": 849,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 852,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 854,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 855,
    "end": 856
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 861,
    "end": 865
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 866,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 868,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 870,
    "end": 871
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 872,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 873,
    "end": 874
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 874,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 875,
    "end": 876
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 877,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 878,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 879,
    "end": 880
  },
  {
    "type": "String",
    "value": "\"c\"",
    "start": 881,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 885,
    "end": 886
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 887,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 889,
    "end": 890
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 891,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 898,
    "end": 899
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 899,
    "end": 900
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 906,
    "end": 913
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 914,
    "end": 917
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 918,
    "end": 920
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 920,
    "end": 921
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 922,
    "end": 923
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 924,
    "end": 931
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 932,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 934,
    "end": 935
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 936,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 941,
    "end": 942
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 943,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 948,
    "end": 949
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 954,
    "end": 961
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 962,
    "end": 965
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 966,
    "end": 968
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 968,
    "end": 969
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 970,
    "end": 971
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 972,
    "end": 979
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 980,
    "end": 981
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 982,
    "end": 983
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 984,
    "end": 988
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 989,
    "end": 990
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 991,
    "end": 996
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 996,
    "end": 997
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 998,
    "end": 999
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1256,
    "end": 1265
  },
  {
    "type": "Identifier",
    "value": "inferenceConstraintMutual",
    "start": 1266,
    "end": 1291
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1292,
    "end": 1293
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1298,
    "end": 1302
  },
  {
    "type": "Identifier",
    "value": "A1",
    "start": 1303,
    "end": 1305
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1306,
    "end": 1307
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1308,
    "end": 1309
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1310,
    "end": 1311
  },
  {
    "type": "Punctuator",
    "value": "?",
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
    "type": "String",
    "value": "\"c\"",
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
    "value": "f",
    "start": 1319,
    "end": 1320
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1320,
    "end": 1321
  },
  {
    "type": "Identifier",
    "value": "S2",
    "start": 1322,
    "end": 1324
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Identifier",
    "value": "G2",
    "start": 1327,
    "end": 1329
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1330,
    "end": 1331
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1331,
    "end": 1332
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1337,
    "end": 1341
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 1342,
    "end": 1344
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1345,
    "end": 1346
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1347,
    "end": 1348
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1349,
    "end": 1350
  },
  {
    "type": "Identifier",
    "value": "s",
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
    "value": "string",
    "start": 1353,
    "end": 1359
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1359,
    "end": 1360
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1360,
    "end": 1361
  },
  {
    "type": "String",
    "value": "\"c\"",
    "start": 1362,
    "end": 1365
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1366,
    "end": 1367
  },
  {
    "type": "Identifier",
    "value": "G2",
    "start": 1368,
    "end": 1370
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1370,
    "end": 1371
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1372,
    "end": 1373
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1373,
    "end": 1374
  },
  {
    "type": "Identifier",
    "value": "G2",
    "start": 1375,
    "end": 1377
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1378,
    "end": 1379
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1379,
    "end": 1380
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1385,
    "end": 1389
  },
  {
    "type": "Identifier",
    "value": "S1",
    "start": 1390,
    "end": 1392
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1393,
    "end": 1394
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1395,
    "end": 1396
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1396,
    "end": 1397
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1398,
    "end": 1405
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 1406,
    "end": 1408
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1408,
    "end": 1409
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1409,
    "end": 1410
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1410,
    "end": 1411
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1411,
    "end": 1412
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1413,
    "end": 1414
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1414,
    "end": 1415
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1416,
    "end": 1418
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1419,
    "end": 1420
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1420,
    "end": 1421
  },
  {
    "type": "String",
    "value": "\"k\"",
    "start": 1421,
    "end": 1424
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1424,
    "end": 1425
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1425,
    "end": 1426
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1431,
    "end": 1435
  },
  {
    "type": "Identifier",
    "value": "G1",
    "start": 1436,
    "end": 1438
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1439,
    "end": 1440
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1441,
    "end": 1442
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1442,
    "end": 1443
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1443,
    "end": 1444
  },
  {
    "type": "Identifier",
    "value": "A1",
    "start": 1445,
    "end": 1447
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1447,
    "end": 1448
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1449,
    "end": 1451
  },
  {
    "type": "String",
    "value": "\"c\"",
    "start": 1452,
    "end": 1455
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1456,
    "end": 1457
  },
  {
    "type": "Identifier",
    "value": "G2",
    "start": 1458,
    "end": 1460
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1460,
    "end": 1461
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1466,
    "end": 1470
  },
  {
    "type": "Identifier",
    "value": "A2",
    "start": 1471,
    "end": 1473
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1474,
    "end": 1475
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1476,
    "end": 1477
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1478,
    "end": 1479
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1479,
    "end": 1480
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1480,
    "end": 1481
  },
  {
    "type": "String",
    "value": "\"d\"",
    "start": 1482,
    "end": 1485
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1485,
    "end": 1486
  },
  {
    "type": "Identifier",
    "value": "f",
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
    "value": "S1",
    "start": 1490,
    "end": 1492
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1493,
    "end": 1494
  },
  {
    "type": "Identifier",
    "value": "G1",
    "start": 1495,
    "end": 1497
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1498,
    "end": 1499
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1499,
    "end": 1500
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1505,
    "end": 1509
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 1510,
    "end": 1512
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1513,
    "end": 1514
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1515,
    "end": 1516
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1517,
    "end": 1518
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1518,
    "end": 1519
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1519,
    "end": 1520
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1521,
    "end": 1527
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "String",
    "value": "\"d\"",
    "start": 1530,
    "end": 1533
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1534,
    "end": 1535
  },
  {
    "type": "Identifier",
    "value": "G1",
    "start": 1536,
    "end": 1538
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1538,
    "end": 1539
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1540,
    "end": 1541
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1541,
    "end": 1542
  },
  {
    "type": "Identifier",
    "value": "G1",
    "start": 1543,
    "end": 1545
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1546,
    "end": 1547
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1547,
    "end": 1548
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1553,
    "end": 1557
  },
  {
    "type": "Identifier",
    "value": "S2",
    "start": 1558,
    "end": 1560
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1561,
    "end": 1562
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1563,
    "end": 1564
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1564,
    "end": 1565
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1566,
    "end": 1573
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 1574,
    "end": 1576
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1576,
    "end": 1577
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1577,
    "end": 1578
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1578,
    "end": 1579
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1579,
    "end": 1580
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1581,
    "end": 1582
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1582,
    "end": 1583
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1584,
    "end": 1586
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1587,
    "end": 1588
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1588,
    "end": 1589
  },
  {
    "type": "String",
    "value": "\"k\"",
    "start": 1589,
    "end": 1592
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1592,
    "end": 1593
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1593,
    "end": 1594
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1599,
    "end": 1603
  },
  {
    "type": "Identifier",
    "value": "G2",
    "start": 1604,
    "end": 1606
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1607,
    "end": 1608
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1609,
    "end": 1610
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1610,
    "end": 1611
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1611,
    "end": 1612
  },
  {
    "type": "Identifier",
    "value": "A2",
    "start": 1613,
    "end": 1615
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1615,
    "end": 1616
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1617,
    "end": 1619
  },
  {
    "type": "String",
    "value": "\"d\"",
    "start": 1620,
    "end": 1623
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1624,
    "end": 1625
  },
  {
    "type": "Identifier",
    "value": "G1",
    "start": 1626,
    "end": 1628
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1628,
    "end": 1629
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1635,
    "end": 1642
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1643,
    "end": 1646
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 1647,
    "end": 1649
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1649,
    "end": 1650
  },
  {
    "type": "Identifier",
    "value": "S1",
    "start": 1651,
    "end": 1653
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1653,
    "end": 1654
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1659,
    "end": 1666
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1667,
    "end": 1670
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 1671,
    "end": 1673
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1673,
    "end": 1674
  },
  {
    "type": "Identifier",
    "value": "S2",
    "start": 1675,
    "end": 1677
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1677,
    "end": 1678
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1683,
    "end": 1686
  },
  {
    "type": "Identifier",
    "value": "g1",
    "start": 1687,
    "end": 1689
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1689,
    "end": 1690
  },
  {
    "type": "Identifier",
    "value": "G1",
    "start": 1691,
    "end": 1693
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1694,
    "end": 1695
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 1696,
    "end": 1698
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1698,
    "end": 1699
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1704,
    "end": 1707
  },
  {
    "type": "Identifier",
    "value": "g2",
    "start": 1708,
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
    "value": "G2",
    "start": 1712,
    "end": 1714
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1715,
    "end": 1716
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 1717,
    "end": 1719
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1719,
    "end": 1720
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1725,
    "end": 1732
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1733,
    "end": 1736
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 1737,
    "end": 1739
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1739,
    "end": 1740
  },
  {
    "type": "Identifier",
    "value": "S1",
    "start": 1741,
    "end": 1743
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1744,
    "end": 1751
  },
  {
    "type": "Identifier",
    "value": "G1",
    "start": 1752,
    "end": 1754
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1755,
    "end": 1756
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1757,
    "end": 1761
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1762,
    "end": 1763
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1764,
    "end": 1769
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1769,
    "end": 1770
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1775,
    "end": 1782
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1783,
    "end": 1786
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 1787,
    "end": 1789
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1789,
    "end": 1790
  },
  {
    "type": "Identifier",
    "value": "S2",
    "start": 1791,
    "end": 1793
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1794,
    "end": 1801
  },
  {
    "type": "Identifier",
    "value": "G2",
    "start": 1802,
    "end": 1804
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1805,
    "end": 1806
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1807,
    "end": 1811
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1812,
    "end": 1813
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1814,
    "end": 1819
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1819,
    "end": 1820
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1821,
    "end": 1822
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 2124,
    "end": 2133
  },
  {
    "type": "Identifier",
    "value": "discriminated",
    "start": 2134,
    "end": 2147
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2148,
    "end": 2149
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2154,
    "end": 2163
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 2164,
    "end": 2165
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2166,
    "end": 2167
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 2168,
    "end": 2169
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2169,
    "end": 2170
  },
  {
    "type": "Identifier",
    "value": "Src",
    "start": 2171,
    "end": 2174
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2174,
    "end": 2175
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 2176,
    "end": 2177
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2177,
    "end": 2178
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2179,
    "end": 2185
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2186,
    "end": 2187
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2192,
    "end": 2201
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 2202,
    "end": 2203
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2204,
    "end": 2205
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 2206,
    "end": 2207
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2207,
    "end": 2208
  },
  {
    "type": "Identifier",
    "value": "Tgt",
    "start": 2209,
    "end": 2212
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2212,
    "end": 2213
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 2214,
    "end": 2215
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2215,
    "end": 2216
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2217,
    "end": 2218
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2219,
    "end": 2220
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2225,
    "end": 2229
  },
  {
    "type": "Identifier",
    "value": "Src",
    "start": 2230,
    "end": 2233
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2234,
    "end": 2235
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2236,
    "end": 2237
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 2238,
    "end": 2239
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2239,
    "end": 2240
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 2241,
    "end": 2244
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2245,
    "end": 2246
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 2247,
    "end": 2248
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2248,
    "end": 2249
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2250,
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
    "value": "string",
    "start": 2253,
    "end": 2259
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2260,
    "end": 2261
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2261,
    "end": 2262
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2267,
    "end": 2271
  },
  {
    "type": "Identifier",
    "value": "Tgt",
    "start": 2272,
    "end": 2275
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2276,
    "end": 2277
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2278,
    "end": 2279
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 2280,
    "end": 2281
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2281,
    "end": 2282
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 2283,
    "end": 2286
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2286,
    "end": 2287
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2288,
    "end": 2289
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2289,
    "end": 2290
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2291,
    "end": 2297
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2298,
    "end": 2299
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2300,
    "end": 2301
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2302,
    "end": 2303
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 2304,
    "end": 2305
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2305,
    "end": 2306
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 2307,
    "end": 2308
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2308,
    "end": 2309
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2310,
    "end": 2311
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2311,
    "end": 2312
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2313,
    "end": 2319
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2320,
    "end": 2321
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2322,
    "end": 2323
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2324,
    "end": 2325
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 2326,
    "end": 2327
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2327,
    "end": 2328
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 2329,
    "end": 2330
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2330,
    "end": 2331
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2332,
    "end": 2333
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2333,
    "end": 2334
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2335,
    "end": 2341
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2342,
    "end": 2343
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2343,
    "end": 2344
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2350,
    "end": 2357
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2358,
    "end": 2361
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 2362,
    "end": 2364
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2364,
    "end": 2365
  },
  {
    "type": "Identifier",
    "value": "Src",
    "start": 2366,
    "end": 2369
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2370,
    "end": 2377
  },
  {
    "type": "Identifier",
    "value": "Tgt",
    "start": 2378,
    "end": 2381
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2382,
    "end": 2383
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2384,
    "end": 2388
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2389,
    "end": 2390
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 2391,
    "end": 2396
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2396,
    "end": 2397
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2402,
    "end": 2409
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2410,
    "end": 2413
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 2414,
    "end": 2416
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2416,
    "end": 2417
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 2418,
    "end": 2419
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2420,
    "end": 2427
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 2428,
    "end": 2429
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2430,
    "end": 2431
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2432,
    "end": 2436
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2437,
    "end": 2438
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 2439,
    "end": 2444
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2444,
    "end": 2445
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2446,
    "end": 2447
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 2632,
    "end": 2641
  },
  {
    "type": "Identifier",
    "value": "excessPropertyDiscriminant",
    "start": 2642,
    "end": 2668
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2669,
    "end": 2670
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2675,
    "end": 2684
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 2685,
    "end": 2686
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2687,
    "end": 2688
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 2689,
    "end": 2690
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2690,
    "end": 2691
  },
  {
    "type": "Identifier",
    "value": "Src",
    "start": 2692,
    "end": 2695
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2695,
    "end": 2696
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 2697,
    "end": 2698
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2698,
    "end": 2699
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2700,
    "end": 2706
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2707,
    "end": 2708
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2713,
    "end": 2722
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 2723,
    "end": 2724
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2725,
    "end": 2726
  },
  {
    "type": "Identifier",
    "value": "p",
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
    "value": "Tgt",
    "start": 2730,
    "end": 2733
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2733,
    "end": 2734
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 2735,
    "end": 2736
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2736,
    "end": 2737
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2738,
    "end": 2739
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2740,
    "end": 2741
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2746,
    "end": 2750
  },
  {
    "type": "Identifier",
    "value": "Src",
    "start": 2751,
    "end": 2754
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2755,
    "end": 2756
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2757,
    "end": 2758
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 2759,
    "end": 2760
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2760,
    "end": 2761
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 2762,
    "end": 2765
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2766,
    "end": 2767
  },
  {
    "type": "Identifier",
    "value": "X",
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
    "type": "Identifier",
    "value": "y",
    "start": 2771,
    "end": 2772
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2772,
    "end": 2773
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2774,
    "end": 2780
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2781,
    "end": 2782
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2782,
    "end": 2783
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2788,
    "end": 2792
  },
  {
    "type": "Identifier",
    "value": "Tgt",
    "start": 2793,
    "end": 2796
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2797,
    "end": 2798
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2799,
    "end": 2800
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 2801,
    "end": 2802
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2802,
    "end": 2803
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 2804,
    "end": 2807
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2807,
    "end": 2808
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2809,
    "end": 2810
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2810,
    "end": 2811
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2812,
    "end": 2818
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2819,
    "end": 2820
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2821,
    "end": 2822
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2823,
    "end": 2824
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 2825,
    "end": 2826
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2826,
    "end": 2827
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 2828,
    "end": 2829
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2829,
    "end": 2830
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2831,
    "end": 2832
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2832,
    "end": 2833
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2834,
    "end": 2840
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2841,
    "end": 2842
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2843,
    "end": 2844
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2845,
    "end": 2846
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 2847,
    "end": 2848
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2848,
    "end": 2849
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 2850,
    "end": 2851
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2851,
    "end": 2852
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2853,
    "end": 2854
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2854,
    "end": 2855
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2856,
    "end": 2862
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "type",
    "start": 2870,
    "end": 2874
  },
  {
    "type": "Identifier",
    "value": "Outer",
    "start": 2875,
    "end": 2880
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2881,
    "end": 2882
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2883,
    "end": 2884
  },
  {
    "type": "Identifier",
    "value": "e",
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
    "type": "String",
    "value": "\"z\"",
    "start": 2888,
    "end": 2891
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2892,
    "end": 2893
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2894,
    "end": 2895
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2896,
    "end": 2897
  },
  {
    "type": "Identifier",
    "value": "e",
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
    "value": "Tgt",
    "start": 2901,
    "end": 2904
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2904,
    "end": 2905
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 2906,
    "end": 2907
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2907,
    "end": 2908
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2909,
    "end": 2915
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2916,
    "end": 2917
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2918,
    "end": 2919
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2920,
    "end": 2921
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 2922,
    "end": 2923
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2923,
    "end": 2924
  },
  {
    "type": "Identifier",
    "value": "Src",
    "start": 2925,
    "end": 2928
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Identifier",
    "value": "declare",
    "start": 2937,
    "end": 2944
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2945,
    "end": 2948
  },
  {
    "type": "Identifier",
    "value": "src",
    "start": 2949,
    "end": 2952
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2952,
    "end": 2953
  },
  {
    "type": "Identifier",
    "value": "Src",
    "start": 2954,
    "end": 2957
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2957,
    "end": 2958
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2963,
    "end": 2966
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 2967,
    "end": 2968
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2968,
    "end": 2969
  },
  {
    "type": "Identifier",
    "value": "Outer",
    "start": 2970,
    "end": 2975
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2976,
    "end": 2977
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2978,
    "end": 2979
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 2980,
    "end": 2981
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2981,
    "end": 2982
  },
  {
    "type": "Identifier",
    "value": "src",
    "start": 2983,
    "end": 2986
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2986,
    "end": 2987
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 2988,
    "end": 2989
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2989,
    "end": 2990
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2991,
    "end": 2992
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2993,
    "end": 2994
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2994,
    "end": 2995
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3000,
    "end": 3007
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3008,
    "end": 3011
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 3012,
    "end": 3014
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3014,
    "end": 3015
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 3016,
    "end": 3017
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3018,
    "end": 3025
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 3026,
    "end": 3027
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3028,
    "end": 3029
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 3030,
    "end": 3034
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3035,
    "end": 3036
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 3037,
    "end": 3042
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3042,
    "end": 3043
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3044,
    "end": 3045
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 3335,
    "end": 3344
  },
  {
    "type": "Identifier",
    "value": "strictArity",
    "start": 3345,
    "end": 3356
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3357,
    "end": 3358
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3363,
    "end": 3367
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 3368,
    "end": 3369
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "value": "f",
    "start": 3374,
    "end": 3375
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3375,
    "end": 3376
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 3377,
    "end": 3378
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3379,
    "end": 3380
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 3381,
    "end": 3382
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3382,
    "end": 3383
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 3384,
    "end": 3385
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3385,
    "end": 3386
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3387,
    "end": 3393
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3394,
    "end": 3395
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3395,
    "end": 3396
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3401,
    "end": 3405
  },
  {
    "type": "Identifier",
    "value": "Q",
    "start": 3406,
    "end": 3407
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3408,
    "end": 3409
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3410,
    "end": 3411
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 3412,
    "end": 3413
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3413,
    "end": 3414
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 3415,
    "end": 3416
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3416,
    "end": 3417
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 3418,
    "end": 3419
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3419,
    "end": 3420
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3421,
    "end": 3422
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3423,
    "end": 3424
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3424,
    "end": 3425
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3430,
    "end": 3434
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 3435,
    "end": 3436
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3437,
    "end": 3438
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3439,
    "end": 3440
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3440,
    "end": 3441
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3441,
    "end": 3442
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3442,
    "end": 3443
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 3444,
    "end": 3445
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3445,
    "end": 3446
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3447,
    "end": 3449
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3450,
    "end": 3451
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3451,
    "end": 3452
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3457,
    "end": 3461
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 3462,
    "end": 3463
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3464,
    "end": 3465
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3466,
    "end": 3467
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3467,
    "end": 3468
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3468,
    "end": 3469
  },
  {
    "type": "Identifier",
    "value": "Q",
    "start": 3470,
    "end": 3471
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3472,
    "end": 3473
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 3474,
    "end": 3483
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3483,
    "end": 3484
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3485,
    "end": 3487
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3488,
    "end": 3494
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3494,
    "end": 3495
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3500,
    "end": 3504
  },
  {
    "type": "Identifier",
    "value": "WP",
    "start": 3505,
    "end": 3507
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3508,
    "end": 3509
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3510,
    "end": 3511
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3512,
    "end": 3513
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3513,
    "end": 3514
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 3515,
    "end": 3516
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3516,
    "end": 3517
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3518,
    "end": 3519
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3519,
    "end": 3520
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3521,
    "end": 3527
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3528,
    "end": 3529
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3529,
    "end": 3530
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3535,
    "end": 3539
  },
  {
    "type": "Identifier",
    "value": "WQ",
    "start": 3540,
    "end": 3542
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3543,
    "end": 3544
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3545,
    "end": 3546
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3547,
    "end": 3548
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3548,
    "end": 3549
  },
  {
    "type": "Identifier",
    "value": "Q",
    "start": 3550,
    "end": 3551
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3552,
    "end": 3553
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3553,
    "end": 3554
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3560,
    "end": 3567
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3568,
    "end": 3571
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 3572,
    "end": 3573
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3573,
    "end": 3574
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 3575,
    "end": 3576
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3576,
    "end": 3577
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 3578,
    "end": 3579
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3579,
    "end": 3580
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 3581,
    "end": 3582
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3582,
    "end": 3583
  },
  {
    "type": "Identifier",
    "value": "wp",
    "start": 3584,
    "end": 3586
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3586,
    "end": 3587
  },
  {
    "type": "Identifier",
    "value": "WP",
    "start": 3588,
    "end": 3590
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3590,
    "end": 3591
  },
  {
    "type": "Identifier",
    "value": "wq",
    "start": 3592,
    "end": 3594
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3594,
    "end": 3595
  },
  {
    "type": "Identifier",
    "value": "WQ",
    "start": 3596,
    "end": 3598
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3598,
    "end": 3599
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3604,
    "end": 3607
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 3608,
    "end": 3610
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3611,
    "end": 3612
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3613,
    "end": 3614
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 3614,
    "end": 3615
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3615,
    "end": 3616
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 3617,
    "end": 3618
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3618,
    "end": 3619
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3619,
    "end": 3620
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3625,
    "end": 3628
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 3629,
    "end": 3631
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3632,
    "end": 3633
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3634,
    "end": 3635
  },
  {
    "type": "Identifier",
    "value": "wp",
    "start": 3635,
    "end": 3637
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3637,
    "end": 3638
  },
  {
    "type": "Identifier",
    "value": "wq",
    "start": 3639,
    "end": 3641
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3641,
    "end": 3642
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3642,
    "end": 3643
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3644,
    "end": 3645
  }
]
```
