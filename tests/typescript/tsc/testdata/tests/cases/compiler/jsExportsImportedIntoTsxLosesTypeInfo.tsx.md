__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "React",
        "optional": false,
        "typeAnnotation": null,
        "start": 69,
        "end": 74
      },
      "start": 60,
      "end": 75
    },
    {
      "type": "TSNamespaceExportDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "React",
        "optional": false,
        "typeAnnotation": null,
        "start": 96,
        "end": 101
      },
      "start": 76,
      "end": 102
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "React",
        "optional": false,
        "typeAnnotation": null,
        "start": 121,
        "end": 126
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Key",
              "optional": false,
              "typeAnnotation": null,
              "start": 138,
              "end": 141
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 144,
                  "end": 150
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 153,
                  "end": 159
                }
              ],
              "start": 144,
              "end": 159
            },
            "declare": false,
            "start": 133,
            "end": 160
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "RefObject",
              "optional": false,
              "typeAnnotation": null,
              "start": 175,
              "end": 184
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
                    "start": 185,
                    "end": 186
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 185,
                  "end": 186
                }
              ],
              "start": 184,
              "end": 187
            },
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
                    "name": "current",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 198,
                    "end": 205
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
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 207,
                            "end": 208
                          },
                          "typeArguments": null,
                          "start": 207,
                          "end": 208
                        },
                        {
                          "type": "TSNullKeyword",
                          "start": 211,
                          "end": 215
                        }
                      ],
                      "start": 207,
                      "end": 215
                    },
                    "start": 205,
                    "end": 215
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 198,
                  "end": 216
                }
              ],
              "start": 188,
              "end": 222
            },
            "declare": false,
            "start": 165,
            "end": 222
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Ref",
              "optional": false,
              "typeAnnotation": null,
              "start": 232,
              "end": 235
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
                    "start": 236,
                    "end": 237
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 236,
                  "end": 237
                }
              ],
              "start": 235,
              "end": 238
            },
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
                      "name": "instance",
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
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 253,
                                "end": 254
                              },
                              "typeArguments": null,
                              "start": 253,
                              "end": 254
                            },
                            {
                              "type": "TSNullKeyword",
                              "start": 257,
                              "end": 261
                            }
                          ],
                          "start": 253,
                          "end": 261
                        },
                        "start": 251,
                        "end": 261
                      },
                      "start": 243,
                      "end": 261
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 266,
                      "end": 270
                    },
                    "start": 263,
                    "end": 270
                  },
                  "start": 242,
                  "end": 270
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RefObject",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 274,
                    "end": 283
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
                          "start": 284,
                          "end": 285
                        },
                        "typeArguments": null,
                        "start": 284,
                        "end": 285
                      }
                    ],
                    "start": 283,
                    "end": 286
                  },
                  "start": 274,
                  "end": 286
                },
                {
                  "type": "TSNullKeyword",
                  "start": 289,
                  "end": 293
                }
              ],
              "start": 241,
              "end": 293
            },
            "declare": false,
            "start": 227,
            "end": 294
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Attributes",
              "optional": false,
              "typeAnnotation": null,
              "start": 309,
              "end": 319
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
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 330,
                    "end": 333
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
                            "name": "Key",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 336,
                            "end": 339
                          },
                          "typeArguments": null,
                          "start": 336,
                          "end": 339
                        },
                        {
                          "type": "TSNullKeyword",
                          "start": 342,
                          "end": 346
                        }
                      ],
                      "start": 336,
                      "end": 346
                    },
                    "start": 334,
                    "end": 346
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 330,
                  "end": 347
                }
              ],
              "start": 320,
              "end": 353
            },
            "declare": false,
            "start": 299,
            "end": 353
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "RefAttributes",
              "optional": false,
              "typeAnnotation": null,
              "start": 368,
              "end": 381
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
                    "start": 382,
                    "end": 383
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 382,
                  "end": 383
                }
              ],
              "start": 381,
              "end": 384
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Attributes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 393,
                  "end": 403
                },
                "typeArguments": null,
                "start": 393,
                "end": 403
              }
            ],
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
                    "name": "ref",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 414,
                    "end": 417
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Ref",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 420,
                        "end": 423
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
                              "start": 424,
                              "end": 425
                            },
                            "typeArguments": null,
                            "start": 424,
                            "end": 425
                          }
                        ],
                        "start": 423,
                        "end": 426
                      },
                      "start": 420,
                      "end": 426
                    },
                    "start": 418,
                    "end": 426
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 414,
                  "end": 427
                }
              ],
              "start": 404,
              "end": 433
            },
            "declare": false,
            "start": 358,
            "end": 433
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "PropsWithoutRef",
              "optional": false,
              "typeAnnotation": null,
              "start": 443,
              "end": 458
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
                    "start": 459,
                    "end": 460
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 459,
                  "end": 460
                }
              ],
              "start": 458,
              "end": 461
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Pick",
                "optional": false,
                "typeAnnotation": null,
                "start": 464,
                "end": 468
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
                      "start": 469,
                      "end": 470
                    },
                    "typeArguments": null,
                    "start": 469,
                    "end": 470
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Exclude",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 472,
                      "end": 479
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeOperator",
                          "operator": "keyof",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "P",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 486,
                              "end": 487
                            },
                            "typeArguments": null,
                            "start": 486,
                            "end": 487
                          },
                          "start": 480,
                          "end": 487
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "ref",
                            "raw": "\"ref\"",
                            "start": 489,
                            "end": 494
                          },
                          "start": 489,
                          "end": 494
                        }
                      ],
                      "start": 479,
                      "end": 495
                    },
                    "start": 472,
                    "end": 495
                  }
                ],
                "start": 468,
                "end": 496
              },
              "start": 464,
              "end": 496
            },
            "declare": false,
            "start": 438,
            "end": 497
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ReactElement",
              "optional": false,
              "typeAnnotation": null,
              "start": 512,
              "end": 524
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
                    "start": 525,
                    "end": 526
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSAnyKeyword",
                    "start": 529,
                    "end": 532
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 525,
                  "end": 532
                }
              ],
              "start": 524,
              "end": 533
            },
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
                    "start": 544,
                    "end": 548
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 550,
                      "end": 553
                    },
                    "start": 548,
                    "end": 553
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 544,
                  "end": 554
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 563,
                    "end": 568
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
                        "start": 570,
                        "end": 571
                      },
                      "typeArguments": null,
                      "start": 570,
                      "end": 571
                    },
                    "start": 568,
                    "end": 571
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 563,
                  "end": 572
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 581,
                    "end": 584
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
                            "name": "Key",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 586,
                            "end": 589
                          },
                          "typeArguments": null,
                          "start": 586,
                          "end": 589
                        },
                        {
                          "type": "TSNullKeyword",
                          "start": 592,
                          "end": 596
                        }
                      ],
                      "start": 586,
                      "end": 596
                    },
                    "start": 584,
                    "end": 596
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 581,
                  "end": 597
                }
              ],
              "start": 534,
              "end": 603
            },
            "declare": false,
            "start": 502,
            "end": 603
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ReactNode",
              "optional": false,
              "typeAnnotation": null,
              "start": 613,
              "end": 622
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
                    "name": "ReactElement",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 625,
                    "end": 637
                  },
                  "typeArguments": null,
                  "start": 625,
                  "end": 637
                },
                {
                  "type": "TSStringKeyword",
                  "start": 640,
                  "end": 646
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 649,
                  "end": 655
                },
                {
                  "type": "TSNullKeyword",
                  "start": 658,
                  "end": 662
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 665,
                  "end": 674
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 677,
                  "end": 684
                }
              ],
              "start": 625,
              "end": 684
            },
            "declare": false,
            "start": 608,
            "end": 685
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "FunctionComponent",
              "optional": false,
              "typeAnnotation": null,
              "start": 700,
              "end": 717
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
                    "start": 718,
                    "end": 719
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "start": 722,
                    "end": 724
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 718,
                  "end": 724
                }
              ],
              "start": 717,
              "end": 725
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
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 744,
                            "end": 745
                          },
                          "typeArguments": null,
                          "start": 744,
                          "end": 745
                        },
                        "start": 742,
                        "end": 745
                      },
                      "start": 737,
                      "end": 745
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
                            "name": "ReactElement",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 748,
                            "end": 760
                          },
                          "typeArguments": null,
                          "start": 748,
                          "end": 760
                        },
                        {
                          "type": "TSNullKeyword",
                          "start": 763,
                          "end": 767
                        }
                      ],
                      "start": 748,
                      "end": 767
                    },
                    "start": 746,
                    "end": 767
                  },
                  "start": 736,
                  "end": 768
                }
              ],
              "start": 726,
              "end": 774
            },
            "declare": false,
            "start": 690,
            "end": 774
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "FC",
              "optional": false,
              "typeAnnotation": null,
              "start": 784,
              "end": 786
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
                    "start": 787,
                    "end": 788
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "start": 791,
                    "end": 793
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 787,
                  "end": 793
                }
              ],
              "start": 786,
              "end": 794
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "FunctionComponent",
                "optional": false,
                "typeAnnotation": null,
                "start": 797,
                "end": 814
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
                      "start": 815,
                      "end": 816
                    },
                    "typeArguments": null,
                    "start": 815,
                    "end": 816
                  }
                ],
                "start": 814,
                "end": 817
              },
              "start": 797,
              "end": 817
            },
            "declare": false,
            "start": 779,
            "end": 818
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ComponentClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 833,
              "end": 847
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
                    "start": 848,
                    "end": 849
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "start": 852,
                    "end": 854
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 848,
                  "end": 854
                }
              ],
              "start": 847,
              "end": 855
            },
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSConstructSignatureDeclaration",
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
                            "name": "P",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 878,
                            "end": 879
                          },
                          "typeArguments": null,
                          "start": 878,
                          "end": 879
                        },
                        "start": 876,
                        "end": 879
                      },
                      "start": 871,
                      "end": 879
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Component",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 882,
                        "end": 891
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
                              "start": 892,
                              "end": 893
                            },
                            "typeArguments": null,
                            "start": 892,
                            "end": 893
                          }
                        ],
                        "start": 891,
                        "end": 894
                      },
                      "start": 882,
                      "end": 894
                    },
                    "start": 880,
                    "end": 894
                  },
                  "start": 866,
                  "end": 895
                }
              ],
              "start": 856,
              "end": 901
            },
            "declare": false,
            "start": 823,
            "end": 901
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ComponentType",
              "optional": false,
              "typeAnnotation": null,
              "start": 911,
              "end": 924
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
                    "start": 925,
                    "end": 926
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "start": 929,
                    "end": 931
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 925,
                  "end": 931
                }
              ],
              "start": 924,
              "end": 932
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ComponentClass",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 935,
                    "end": 949
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
                          "start": 950,
                          "end": 951
                        },
                        "typeArguments": null,
                        "start": 950,
                        "end": 951
                      }
                    ],
                    "start": 949,
                    "end": 952
                  },
                  "start": 935,
                  "end": 952
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "FunctionComponent",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 955,
                    "end": 972
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
                          "start": 973,
                          "end": 974
                        },
                        "typeArguments": null,
                        "start": 973,
                        "end": 974
                      }
                    ],
                    "start": 972,
                    "end": 975
                  },
                  "start": 955,
                  "end": 975
                }
              ],
              "start": 935,
              "end": 975
            },
            "declare": false,
            "start": 906,
            "end": 976
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Component",
              "optional": false,
              "typeAnnotation": null,
              "start": 987,
              "end": 996
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
                    "start": 997,
                    "end": 998
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "start": 1001,
                    "end": 1003
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 997,
                  "end": 1003
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "S",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1005,
                    "end": 1006
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "start": 1009,
                    "end": 1011
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1005,
                  "end": 1011
                }
              ],
              "start": 996,
              "end": 1012
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
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1023,
                    "end": 1028
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Readonly",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1030,
                        "end": 1038
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
                              "start": 1039,
                              "end": 1040
                            },
                            "typeArguments": null,
                            "start": 1039,
                            "end": 1040
                          }
                        ],
                        "start": 1038,
                        "end": 1041
                      },
                      "start": 1030,
                      "end": 1041
                    },
                    "start": 1028,
                    "end": 1041
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
                  "start": 1023,
                  "end": 1042
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1051,
                    "end": 1056
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Readonly",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1058,
                        "end": 1066
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "S",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1067,
                              "end": 1068
                            },
                            "typeArguments": null,
                            "start": 1067,
                            "end": 1068
                          }
                        ],
                        "start": 1066,
                        "end": 1069
                      },
                      "start": 1058,
                      "end": 1069
                    },
                    "start": 1056,
                    "end": 1069
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
                  "start": 1051,
                  "end": 1070
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "constructor",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1079,
                    "end": 1090
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
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
                              "name": "P",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1098,
                              "end": 1099
                            },
                            "typeArguments": null,
                            "start": 1098,
                            "end": 1099
                          },
                          "start": 1096,
                          "end": 1099
                        },
                        "start": 1091,
                        "end": 1099
                      }
                    ],
                    "returnType": null,
                    "body": null,
                    "expression": false,
                    "start": 1090,
                    "end": 1101
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 1079,
                  "end": 1101
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "render",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1110,
                    "end": 1116
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ReactNode",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1120,
                          "end": 1129
                        },
                        "typeArguments": null,
                        "start": 1120,
                        "end": 1129
                      },
                      "start": 1118,
                      "end": 1129
                    },
                    "body": null,
                    "expression": false,
                    "start": 1116,
                    "end": 1130
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 1110,
                  "end": 1130
                }
              ],
              "start": 1013,
              "end": 1136
            },
            "abstract": false,
            "declare": false,
            "start": 981,
            "end": 1136
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ForwardRefExoticComponent",
              "optional": false,
              "typeAnnotation": null,
              "start": 1151,
              "end": 1176
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
                    "start": 1177,
                    "end": 1178
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1177,
                  "end": 1178
                }
              ],
              "start": 1176,
              "end": 1179
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
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1198,
                            "end": 1199
                          },
                          "typeArguments": null,
                          "start": 1198,
                          "end": 1199
                        },
                        "start": 1196,
                        "end": 1199
                      },
                      "start": 1191,
                      "end": 1199
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
                            "name": "ReactElement",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1202,
                            "end": 1214
                          },
                          "typeArguments": null,
                          "start": 1202,
                          "end": 1214
                        },
                        {
                          "type": "TSNullKeyword",
                          "start": 1217,
                          "end": 1221
                        }
                      ],
                      "start": 1202,
                      "end": 1221
                    },
                    "start": 1200,
                    "end": 1221
                  },
                  "start": 1190,
                  "end": 1222
                }
              ],
              "start": 1180,
              "end": 1228
            },
            "declare": false,
            "start": 1141,
            "end": 1228
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ForwardRefRenderFunction",
              "optional": false,
              "typeAnnotation": null,
              "start": 1243,
              "end": 1267
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
                    "start": 1268,
                    "end": 1269
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1268,
                  "end": 1269
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1271,
                    "end": 1272
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "start": 1275,
                    "end": 1277
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1271,
                  "end": 1277
                }
              ],
              "start": 1267,
              "end": 1278
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
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "P",
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
                      "start": 1290,
                      "end": 1298
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ref",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Ref",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1305,
                            "end": 1308
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
                                  "start": 1309,
                                  "end": 1310
                                },
                                "typeArguments": null,
                                "start": 1309,
                                "end": 1310
                              }
                            ],
                            "start": 1308,
                            "end": 1311
                          },
                          "start": 1305,
                          "end": 1311
                        },
                        "start": 1303,
                        "end": 1311
                      },
                      "start": 1300,
                      "end": 1311
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
                            "name": "ReactElement",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1314,
                            "end": 1326
                          },
                          "typeArguments": null,
                          "start": 1314,
                          "end": 1326
                        },
                        {
                          "type": "TSNullKeyword",
                          "start": 1329,
                          "end": 1333
                        }
                      ],
                      "start": 1314,
                      "end": 1333
                    },
                    "start": 1312,
                    "end": 1333
                  },
                  "start": 1289,
                  "end": 1334
                }
              ],
              "start": 1279,
              "end": 1340
            },
            "declare": false,
            "start": 1233,
            "end": 1340
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "forwardRef",
              "optional": false,
              "typeAnnotation": null,
              "start": 1354,
              "end": 1364
            },
            "generator": false,
            "async": false,
            "declare": false,
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
                    "start": 1365,
                    "end": 1366
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1365,
                  "end": 1366
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1368,
                    "end": 1369
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "start": 1372,
                    "end": 1374
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1368,
                  "end": 1374
                }
              ],
              "start": 1364,
              "end": 1375
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "render",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ForwardRefRenderFunction",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1393,
                      "end": 1417
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
                            "start": 1418,
                            "end": 1419
                          },
                          "typeArguments": null,
                          "start": 1418,
                          "end": 1419
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1421,
                            "end": 1422
                          },
                          "typeArguments": null,
                          "start": 1421,
                          "end": 1422
                        }
                      ],
                      "start": 1417,
                      "end": 1423
                    },
                    "start": 1393,
                    "end": 1423
                  },
                  "start": 1391,
                  "end": 1423
                },
                "start": 1385,
                "end": 1423
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ForwardRefExoticComponent",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1432,
                  "end": 1457
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
                            "name": "PropsWithoutRef",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1458,
                            "end": 1473
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
                                  "start": 1474,
                                  "end": 1475
                                },
                                "typeArguments": null,
                                "start": 1474,
                                "end": 1475
                              }
                            ],
                            "start": 1473,
                            "end": 1476
                          },
                          "start": 1458,
                          "end": 1476
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RefAttributes",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1479,
                            "end": 1492
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
                                  "start": 1493,
                                  "end": 1494
                                },
                                "typeArguments": null,
                                "start": 1493,
                                "end": 1494
                              }
                            ],
                            "start": 1492,
                            "end": 1495
                          },
                          "start": 1479,
                          "end": 1495
                        }
                      ],
                      "start": 1458,
                      "end": 1495
                    }
                  ],
                  "start": 1457,
                  "end": 1496
                },
                "start": 1432,
                "end": 1496
              },
              "start": 1430,
              "end": 1496
            },
            "body": null,
            "expression": false,
            "start": 1345,
            "end": 1497
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Context",
              "optional": false,
              "typeAnnotation": null,
              "start": 1512,
              "end": 1519
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
                    "start": 1520,
                    "end": 1521
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1520,
                  "end": 1521
                }
              ],
              "start": 1519,
              "end": 1522
            },
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
                    "name": "Provider",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1533,
                    "end": 1541
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "FC",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1543,
                        "end": 1545
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
                                  "name": "value",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1548,
                                  "end": 1553
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
                                      "start": 1555,
                                      "end": 1556
                                    },
                                    "typeArguments": null,
                                    "start": 1555,
                                    "end": 1556
                                  },
                                  "start": 1553,
                                  "end": 1556
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 1548,
                                "end": 1557
                              },
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
                                  "start": 1558,
                                  "end": 1566
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "ReactNode",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1569,
                                      "end": 1578
                                    },
                                    "typeArguments": null,
                                    "start": 1569,
                                    "end": 1578
                                  },
                                  "start": 1567,
                                  "end": 1578
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 1558,
                                "end": 1578
                              }
                            ],
                            "start": 1546,
                            "end": 1580
                          }
                        ],
                        "start": 1545,
                        "end": 1581
                      },
                      "start": 1543,
                      "end": 1581
                    },
                    "start": 1541,
                    "end": 1581
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1533,
                  "end": 1582
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Consumer",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1591,
                    "end": 1599
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "FC",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1601,
                        "end": 1603
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
                                  "name": "children",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1606,
                                  "end": 1614
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
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
                                              "name": "T",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 1624,
                                              "end": 1625
                                            },
                                            "typeArguments": null,
                                            "start": 1624,
                                            "end": 1625
                                          },
                                          "start": 1622,
                                          "end": 1625
                                        },
                                        "start": 1617,
                                        "end": 1625
                                      }
                                    ],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "ReactNode",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1630,
                                          "end": 1639
                                        },
                                        "typeArguments": null,
                                        "start": 1630,
                                        "end": 1639
                                      },
                                      "start": 1627,
                                      "end": 1639
                                    },
                                    "start": 1616,
                                    "end": 1639
                                  },
                                  "start": 1614,
                                  "end": 1639
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 1606,
                                "end": 1639
                              }
                            ],
                            "start": 1604,
                            "end": 1641
                          }
                        ],
                        "start": 1603,
                        "end": 1642
                      },
                      "start": 1601,
                      "end": 1642
                    },
                    "start": 1599,
                    "end": 1642
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1591,
                  "end": 1643
                }
              ],
              "start": 1523,
              "end": 1649
            },
            "declare": false,
            "start": 1502,
            "end": 1649
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "createContext",
              "optional": false,
              "typeAnnotation": null,
              "start": 1663,
              "end": 1676
            },
            "generator": false,
            "async": false,
            "declare": false,
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
                    "start": 1677,
                    "end": 1678
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1677,
                  "end": 1678
                }
              ],
              "start": 1676,
              "end": 1679
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "defaultValue",
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
                      "start": 1694,
                      "end": 1695
                    },
                    "typeArguments": null,
                    "start": 1694,
                    "end": 1695
                  },
                  "start": 1692,
                  "end": 1695
                },
                "start": 1680,
                "end": 1695
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Context",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1698,
                  "end": 1705
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
                        "start": 1706,
                        "end": 1707
                      },
                      "typeArguments": null,
                      "start": 1706,
                      "end": 1707
                    }
                  ],
                  "start": 1705,
                  "end": 1708
                },
                "start": 1698,
                "end": 1708
              },
              "start": 1696,
              "end": 1708
            },
            "body": null,
            "expression": false,
            "start": 1654,
            "end": 1709
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "useRef",
              "optional": false,
              "typeAnnotation": null,
              "start": 1723,
              "end": 1729
            },
            "generator": false,
            "async": false,
            "declare": false,
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
                    "start": 1730,
                    "end": 1731
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1730,
                  "end": 1731
                }
              ],
              "start": 1729,
              "end": 1732
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "initialValue",
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
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1747,
                          "end": 1748
                        },
                        "typeArguments": null,
                        "start": 1747,
                        "end": 1748
                      },
                      {
                        "type": "TSNullKeyword",
                        "start": 1751,
                        "end": 1755
                      }
                    ],
                    "start": 1747,
                    "end": 1755
                  },
                  "start": 1745,
                  "end": 1755
                },
                "start": 1733,
                "end": 1755
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RefObject",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1758,
                  "end": 1767
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
                        "start": 1768,
                        "end": 1769
                      },
                      "typeArguments": null,
                      "start": 1768,
                      "end": 1769
                    }
                  ],
                  "start": 1767,
                  "end": 1770
                },
                "start": 1758,
                "end": 1770
              },
              "start": 1756,
              "end": 1770
            },
            "body": null,
            "expression": false,
            "start": 1714,
            "end": 1771
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "useContext",
              "optional": false,
              "typeAnnotation": null,
              "start": 1785,
              "end": 1795
            },
            "generator": false,
            "async": false,
            "declare": false,
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
                    "start": 1796,
                    "end": 1797
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1796,
                  "end": 1797
                }
              ],
              "start": 1795,
              "end": 1798
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "context",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Context",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1808,
                      "end": 1815
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
                            "start": 1816,
                            "end": 1817
                          },
                          "typeArguments": null,
                          "start": 1816,
                          "end": 1817
                        }
                      ],
                      "start": 1815,
                      "end": 1818
                    },
                    "start": 1808,
                    "end": 1818
                  },
                  "start": 1806,
                  "end": 1818
                },
                "start": 1799,
                "end": 1818
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
                  "start": 1821,
                  "end": 1822
                },
                "typeArguments": null,
                "start": 1821,
                "end": 1822
              },
              "start": 1819,
              "end": 1822
            },
            "body": null,
            "expression": false,
            "start": 1776,
            "end": 1823
          }
        ],
        "start": 127,
        "end": 1825
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 103,
      "end": 1825
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 60,
  "end": 1826
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 60,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 69,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 74,
    "end": 75
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 76,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 83,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 86,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 96,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 103,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 111,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 121,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 133,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 138,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 144,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 151,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 153,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 159,
    "end": 160
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 165,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "RefObject",
    "start": 175,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 188,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "current",
    "start": 198,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 209,
    "end": 210
  },
  {
    "type": "Null",
    "value": "null",
    "start": 211,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 221,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 227,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "Ref",
    "start": 232,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 235,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "instance",
    "start": 243,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 255,
    "end": 256
  },
  {
    "type": "Null",
    "value": "null",
    "start": 257,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 263,
    "end": 265
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 266,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 272,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "RefObject",
    "start": 274,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 283,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 287,
    "end": 288
  },
  {
    "type": "Null",
    "value": "null",
    "start": 289,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 293,
    "end": 294
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 299,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "Attributes",
    "start": 309,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 320,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 330,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 334,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 336,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 340,
    "end": 341
  },
  {
    "type": "Null",
    "value": "null",
    "start": 342,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 352,
    "end": 353
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 358,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "RefAttributes",
    "start": 368,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 381,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 383,
    "end": 384
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 385,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "Attributes",
    "start": 393,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 404,
    "end": 405
  },
  {
    "type": "Identifier",
    "value": "ref",
    "start": 414,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 418,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "Ref",
    "start": 420,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 423,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 432,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 438,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "PropsWithoutRef",
    "start": 443,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 458,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 460,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 462,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 464,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 468,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 470,
    "end": 471
  },
  {
    "type": "Identifier",
    "value": "Exclude",
    "start": 472,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 479,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 480,
    "end": 485
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 486,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 487,
    "end": 488
  },
  {
    "type": "String",
    "value": "\"ref\"",
    "start": 489,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 496,
    "end": 497
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 502,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "ReactElement",
    "start": 512,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 524,
    "end": 525
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 525,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 527,
    "end": 528
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 529,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 532,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 534,
    "end": 535
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 544,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 548,
    "end": 549
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 550,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 553,
    "end": 554
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 563,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 568,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 570,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 571,
    "end": 572
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 581,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 584,
    "end": 585
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 586,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 590,
    "end": 591
  },
  {
    "type": "Null",
    "value": "null",
    "start": 592,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 596,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 602,
    "end": 603
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 608,
    "end": 612
  },
  {
    "type": "Identifier",
    "value": "ReactNode",
    "start": 613,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 623,
    "end": 624
  },
  {
    "type": "Identifier",
    "value": "ReactElement",
    "start": 625,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 638,
    "end": 639
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 640,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 647,
    "end": 648
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 649,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 656,
    "end": 657
  },
  {
    "type": "Null",
    "value": "null",
    "start": 658,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 663,
    "end": 664
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 665,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 675,
    "end": 676
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 677,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 684,
    "end": 685
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 690,
    "end": 699
  },
  {
    "type": "Identifier",
    "value": "FunctionComponent",
    "start": 700,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 717,
    "end": 718
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 718,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 720,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 722,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 723,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 724,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 726,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 736,
    "end": 737
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 737,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 742,
    "end": 743
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 744,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 745,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 746,
    "end": 747
  },
  {
    "type": "Identifier",
    "value": "ReactElement",
    "start": 748,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 761,
    "end": 762
  },
  {
    "type": "Null",
    "value": "null",
    "start": 763,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 767,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 773,
    "end": 774
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 779,
    "end": 783
  },
  {
    "type": "Identifier",
    "value": "FC",
    "start": 784,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 786,
    "end": 787
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 787,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "type": "Punctuator",
    "value": "}",
    "start": 792,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "FunctionComponent",
    "start": 797,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 814,
    "end": 815
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 815,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 816,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 817,
    "end": 818
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 823,
    "end": 832
  },
  {
    "type": "Identifier",
    "value": "ComponentClass",
    "start": 833,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 847,
    "end": 848
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 848,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 850,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 852,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "{",
    "start": 856,
    "end": 857
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 866,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 870,
    "end": 871
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 871,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 876,
    "end": 877
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 878,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 879,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 880,
    "end": 881
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 882,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 891,
    "end": 892
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 892,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 893,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 894,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 900,
    "end": 901
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 906,
    "end": 910
  },
  {
    "type": "Identifier",
    "value": "ComponentType",
    "start": 911,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 924,
    "end": 925
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 925,
    "end": 926
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 927,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 929,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 930,
    "end": 931
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 931,
    "end": 932
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 933,
    "end": 934
  },
  {
    "type": "Identifier",
    "value": "ComponentClass",
    "start": 935,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 949,
    "end": 950
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 950,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 951,
    "end": 952
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 953,
    "end": 954
  },
  {
    "type": "Identifier",
    "value": "FunctionComponent",
    "start": 955,
    "end": 972
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 972,
    "end": 973
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 973,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 974,
    "end": 975
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 975,
    "end": 976
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 981,
    "end": 986
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 987,
    "end": 996
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 996,
    "end": 997
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 997,
    "end": 998
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1001,
    "end": 1002
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1003,
    "end": 1004
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1011,
    "end": 1012
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1013,
    "end": 1014
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 1023,
    "end": 1028
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1028,
    "end": 1029
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 1030,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 1051,
    "end": 1056
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1056,
    "end": 1057
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 1058,
    "end": 1066
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1079,
    "end": 1090
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 1091,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1096,
    "end": 1097
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1098,
    "end": 1099
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1099,
    "end": 1100
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1100,
    "end": 1101
  },
  {
    "type": "Identifier",
    "value": "render",
    "start": 1110,
    "end": 1116
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1116,
    "end": 1117
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1117,
    "end": 1118
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1118,
    "end": 1119
  },
  {
    "type": "Identifier",
    "value": "ReactNode",
    "start": 1120,
    "end": 1129
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1135,
    "end": 1136
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1141,
    "end": 1150
  },
  {
    "type": "Identifier",
    "value": "ForwardRefExoticComponent",
    "start": 1151,
    "end": 1176
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1176,
    "end": 1177
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1180,
    "end": 1181
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1190,
    "end": 1191
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 1191,
    "end": 1196
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1196,
    "end": 1197
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1200,
    "end": 1201
  },
  {
    "type": "Identifier",
    "value": "ReactElement",
    "start": 1202,
    "end": 1214
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1217,
    "end": 1221
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1221,
    "end": 1222
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1227,
    "end": 1228
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1233,
    "end": 1242
  },
  {
    "type": "Identifier",
    "value": "ForwardRefRenderFunction",
    "start": 1243,
    "end": 1267
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1267,
    "end": 1268
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1268,
    "end": 1269
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1269,
    "end": 1270
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1273,
    "end": 1274
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1275,
    "end": 1276
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1276,
    "end": 1277
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1277,
    "end": 1278
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1279,
    "end": 1280
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1289,
    "end": 1290
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 1290,
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
    "value": "P",
    "start": 1297,
    "end": 1298
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1298,
    "end": 1299
  },
  {
    "type": "Identifier",
    "value": "ref",
    "start": 1300,
    "end": 1303
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1303,
    "end": 1304
  },
  {
    "type": "Identifier",
    "value": "Ref",
    "start": 1305,
    "end": 1308
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1308,
    "end": 1309
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1309,
    "end": 1310
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1310,
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
    "value": "ReactElement",
    "start": 1314,
    "end": 1326
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1327,
    "end": 1328
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1329,
    "end": 1333
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1333,
    "end": 1334
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1339,
    "end": 1340
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1345,
    "end": 1353
  },
  {
    "type": "Identifier",
    "value": "forwardRef",
    "start": 1354,
    "end": 1364
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1364,
    "end": 1365
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1365,
    "end": 1366
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1366,
    "end": 1367
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1368,
    "end": 1369
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1370,
    "end": 1371
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1372,
    "end": 1373
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1373,
    "end": 1374
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1374,
    "end": 1375
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1375,
    "end": 1376
  },
  {
    "type": "Identifier",
    "value": "render",
    "start": 1385,
    "end": 1391
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1391,
    "end": 1392
  },
  {
    "type": "Identifier",
    "value": "ForwardRefRenderFunction",
    "start": 1393,
    "end": 1417
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1417,
    "end": 1418
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1418,
    "end": 1419
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1419,
    "end": 1420
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1421,
    "end": 1422
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1422,
    "end": 1423
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1423,
    "end": 1424
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1429,
    "end": 1430
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1430,
    "end": 1431
  },
  {
    "type": "Identifier",
    "value": "ForwardRefExoticComponent",
    "start": 1432,
    "end": 1457
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1457,
    "end": 1458
  },
  {
    "type": "Identifier",
    "value": "PropsWithoutRef",
    "start": 1458,
    "end": 1473
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1473,
    "end": 1474
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1474,
    "end": 1475
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1475,
    "end": 1476
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1477,
    "end": 1478
  },
  {
    "type": "Identifier",
    "value": "RefAttributes",
    "start": 1479,
    "end": 1492
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1492,
    "end": 1493
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1493,
    "end": 1494
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1494,
    "end": 1495
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1495,
    "end": 1496
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1496,
    "end": 1497
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1502,
    "end": 1511
  },
  {
    "type": "Identifier",
    "value": "Context",
    "start": 1512,
    "end": 1519
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1519,
    "end": 1520
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1520,
    "end": 1521
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1521,
    "end": 1522
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1523,
    "end": 1524
  },
  {
    "type": "Identifier",
    "value": "Provider",
    "start": 1533,
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
    "value": "FC",
    "start": 1543,
    "end": 1545
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1545,
    "end": 1546
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1546,
    "end": 1547
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1548,
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
    "value": "T",
    "start": 1555,
    "end": 1556
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1556,
    "end": 1557
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 1558,
    "end": 1566
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1566,
    "end": 1567
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1567,
    "end": 1568
  },
  {
    "type": "Identifier",
    "value": "ReactNode",
    "start": 1569,
    "end": 1578
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1579,
    "end": 1580
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1580,
    "end": 1581
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1581,
    "end": 1582
  },
  {
    "type": "Identifier",
    "value": "Consumer",
    "start": 1591,
    "end": 1599
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1599,
    "end": 1600
  },
  {
    "type": "Identifier",
    "value": "FC",
    "start": 1601,
    "end": 1603
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1603,
    "end": 1604
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1604,
    "end": 1605
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 1606,
    "end": 1614
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1614,
    "end": 1615
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1616,
    "end": 1617
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1617,
    "end": 1622
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1622,
    "end": 1623
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1624,
    "end": 1625
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1625,
    "end": 1626
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1627,
    "end": 1629
  },
  {
    "type": "Identifier",
    "value": "ReactNode",
    "start": 1630,
    "end": 1639
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1640,
    "end": 1641
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1641,
    "end": 1642
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1642,
    "end": 1643
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1648,
    "end": 1649
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1654,
    "end": 1662
  },
  {
    "type": "Identifier",
    "value": "createContext",
    "start": 1663,
    "end": 1676
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1676,
    "end": 1677
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1677,
    "end": 1678
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1678,
    "end": 1679
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1679,
    "end": 1680
  },
  {
    "type": "Identifier",
    "value": "defaultValue",
    "start": 1680,
    "end": 1692
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1692,
    "end": 1693
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1694,
    "end": 1695
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1695,
    "end": 1696
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1696,
    "end": 1697
  },
  {
    "type": "Identifier",
    "value": "Context",
    "start": 1698,
    "end": 1705
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1705,
    "end": 1706
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1706,
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
    "value": "function",
    "start": 1714,
    "end": 1722
  },
  {
    "type": "Identifier",
    "value": "useRef",
    "start": 1723,
    "end": 1729
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1729,
    "end": 1730
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1730,
    "end": 1731
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1731,
    "end": 1732
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1732,
    "end": 1733
  },
  {
    "type": "Identifier",
    "value": "initialValue",
    "start": 1733,
    "end": 1745
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1745,
    "end": 1746
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1747,
    "end": 1748
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1749,
    "end": 1750
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1751,
    "end": 1755
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "RefObject",
    "start": 1758,
    "end": 1767
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1767,
    "end": 1768
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1768,
    "end": 1769
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1769,
    "end": 1770
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1770,
    "end": 1771
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1776,
    "end": 1784
  },
  {
    "type": "Identifier",
    "value": "useContext",
    "start": 1785,
    "end": 1795
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1795,
    "end": 1796
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1796,
    "end": 1797
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1797,
    "end": 1798
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1798,
    "end": 1799
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 1799,
    "end": 1806
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1806,
    "end": 1807
  },
  {
    "type": "Identifier",
    "value": "Context",
    "start": 1808,
    "end": 1815
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1815,
    "end": 1816
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1816,
    "end": 1817
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1817,
    "end": 1818
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1818,
    "end": 1819
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1819,
    "end": 1820
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "type": "Punctuator",
    "value": "}",
    "start": 1824,
    "end": 1825
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "compose",
          "optional": false,
          "typeAnnotation": null,
          "start": 16,
          "end": 23
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": {
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
                    "name": "R",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 28,
                    "end": 29
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 28,
                  "end": 29
                }
              ],
              "start": 27,
              "end": 30
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
                      "name": "R",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 34,
                      "end": 35
                    },
                    "typeArguments": null,
                    "start": 34,
                    "end": 35
                  },
                  "start": 32,
                  "end": 35
                },
                "start": 31,
                "end": 35
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "R",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 40,
                  "end": 41
                },
                "typeArguments": null,
                "start": 40,
                "end": 41
              },
              "start": 37,
              "end": 41
            },
            "start": 27,
            "end": 41
          },
          "start": 25,
          "end": 41
        },
        "body": null,
        "expression": false,
        "start": 7,
        "end": 42
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 42
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "compose",
          "optional": false,
          "typeAnnotation": null,
          "start": 59,
          "end": 66
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "F",
                "optional": false,
                "typeAnnotation": null,
                "start": 67,
                "end": 68
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Function",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 77,
                  "end": 85
                },
                "typeArguments": null,
                "start": 77,
                "end": 85
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 67,
              "end": 85
            }
          ],
          "start": 66,
          "end": 86
        },
        "params": [
          {
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
                  "start": 90,
                  "end": 91
                },
                "typeArguments": null,
                "start": 90,
                "end": 91
              },
              "start": 88,
              "end": 91
            },
            "start": 87,
            "end": 91
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "F",
              "optional": false,
              "typeAnnotation": null,
              "start": 94,
              "end": 95
            },
            "typeArguments": null,
            "start": 94,
            "end": 95
          },
          "start": 92,
          "end": 95
        },
        "body": null,
        "expression": false,
        "start": 50,
        "end": 96
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 43,
      "end": 96
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "compose",
          "optional": false,
          "typeAnnotation": null,
          "start": 113,
          "end": 120
        },
        "generator": false,
        "async": false,
        "declare": false,
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
                "start": 121,
                "end": 122
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 121,
              "end": 122
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 124,
                "end": 125
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 124,
              "end": 125
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 127,
                "end": 128
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 127,
              "end": 128
            }
          ],
          "start": 120,
          "end": 129
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "f1",
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
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 138,
                          "end": 139
                        },
                        "typeArguments": null,
                        "start": 138,
                        "end": 139
                      },
                      "start": 136,
                      "end": 139
                    },
                    "start": 135,
                    "end": 139
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 144,
                      "end": 145
                    },
                    "typeArguments": null,
                    "start": 144,
                    "end": 145
                  },
                  "start": 141,
                  "end": 145
                },
                "start": 134,
                "end": 145
              },
              "start": 132,
              "end": 145
            },
            "start": 130,
            "end": 145
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "f2",
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
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 155,
                          "end": 156
                        },
                        "typeArguments": null,
                        "start": 155,
                        "end": 156
                      },
                      "start": 153,
                      "end": 156
                    },
                    "start": 152,
                    "end": 156
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 161,
                      "end": 162
                    },
                    "typeArguments": null,
                    "start": 161,
                    "end": 162
                  },
                  "start": 158,
                  "end": 162
                },
                "start": 151,
                "end": 162
              },
              "start": 149,
              "end": 162
            },
            "start": 147,
            "end": 162
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
                "name": "a",
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
                      "start": 169,
                      "end": 170
                    },
                    "typeArguments": null,
                    "start": 169,
                    "end": 170
                  },
                  "start": 167,
                  "end": 170
                },
                "start": 166,
                "end": 170
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 175,
                  "end": 176
                },
                "typeArguments": null,
                "start": 175,
                "end": 176
              },
              "start": 172,
              "end": 176
            },
            "start": 165,
            "end": 176
          },
          "start": 163,
          "end": 176
        },
        "body": null,
        "expression": false,
        "start": 104,
        "end": 177
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 97,
      "end": 177
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "compose",
          "optional": false,
          "typeAnnotation": null,
          "start": 194,
          "end": 201
        },
        "generator": false,
        "async": false,
        "declare": false,
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
                "start": 202,
                "end": 203
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 202,
              "end": 203
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 205,
                "end": 206
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 205,
              "end": 206
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 208,
                "end": 209
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 208,
              "end": 209
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 211,
                "end": 212
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 211,
              "end": 212
            }
          ],
          "start": 201,
          "end": 213
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "f1",
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
                    "name": "c",
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
                          "start": 227,
                          "end": 228
                        },
                        "typeArguments": null,
                        "start": 227,
                        "end": 228
                      },
                      "start": 225,
                      "end": 228
                    },
                    "start": 224,
                    "end": 228
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 233,
                      "end": 234
                    },
                    "typeArguments": null,
                    "start": 233,
                    "end": 234
                  },
                  "start": 230,
                  "end": 234
                },
                "start": 223,
                "end": 234
              },
              "start": 221,
              "end": 234
            },
            "start": 219,
            "end": 234
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "f2",
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
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 248,
                          "end": 249
                        },
                        "typeArguments": null,
                        "start": 248,
                        "end": 249
                      },
                      "start": 246,
                      "end": 249
                    },
                    "start": 245,
                    "end": 249
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 254,
                      "end": 255
                    },
                    "typeArguments": null,
                    "start": 254,
                    "end": 255
                  },
                  "start": 251,
                  "end": 255
                },
                "start": 244,
                "end": 255
              },
              "start": 242,
              "end": 255
            },
            "start": 240,
            "end": 255
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "f3",
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
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 269,
                          "end": 270
                        },
                        "typeArguments": null,
                        "start": 269,
                        "end": 270
                      },
                      "start": 267,
                      "end": 270
                    },
                    "start": 266,
                    "end": 270
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 275,
                      "end": 276
                    },
                    "typeArguments": null,
                    "start": 275,
                    "end": 276
                  },
                  "start": 272,
                  "end": 276
                },
                "start": 265,
                "end": 276
              },
              "start": 263,
              "end": 276
            },
            "start": 261,
            "end": 276
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
                "name": "a",
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
                      "start": 285,
                      "end": 286
                    },
                    "typeArguments": null,
                    "start": 285,
                    "end": 286
                  },
                  "start": 283,
                  "end": 286
                },
                "start": 282,
                "end": 286
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 291,
                  "end": 292
                },
                "typeArguments": null,
                "start": 291,
                "end": 292
              },
              "start": 288,
              "end": 292
            },
            "start": 281,
            "end": 292
          },
          "start": 279,
          "end": 292
        },
        "body": null,
        "expression": false,
        "start": 185,
        "end": 293
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 178,
      "end": 293
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "compose",
          "optional": false,
          "typeAnnotation": null,
          "start": 310,
          "end": 317
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "R",
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
            }
          ],
          "start": 317,
          "end": 320
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "f1",
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
                        "type": "TSAnyKeyword",
                        "start": 329,
                        "end": 332
                      },
                      "start": 327,
                      "end": 332
                    },
                    "start": 326,
                    "end": 332
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "R",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 337,
                      "end": 338
                    },
                    "typeArguments": null,
                    "start": 337,
                    "end": 338
                  },
                  "start": 334,
                  "end": 338
                },
                "start": 325,
                "end": 338
              },
              "start": 323,
              "end": 338
            },
            "start": 321,
            "end": 338
          },
          {
            "type": "RestElement",
            "decorators": [],
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "funcs",
              "optional": false,
              "typeAnnotation": null,
              "start": 343,
              "end": 348
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
                    "name": "Function",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 350,
                    "end": 358
                  },
                  "typeArguments": null,
                  "start": 350,
                  "end": 358
                },
                "start": 350,
                "end": 360
              },
              "start": 348,
              "end": 360
            },
            "value": null,
            "start": 340,
            "end": 360
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
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
                  "start": 367,
                  "end": 371
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 373,
                      "end": 376
                    },
                    "start": 373,
                    "end": 378
                  },
                  "start": 371,
                  "end": 378
                },
                "value": null,
                "start": 364,
                "end": 378
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "R",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 383,
                  "end": 384
                },
                "typeArguments": null,
                "start": 383,
                "end": 384
              },
              "start": 380,
              "end": 384
            },
            "start": 363,
            "end": 384
          },
          "start": 361,
          "end": 384
        },
        "body": null,
        "expression": false,
        "start": 301,
        "end": 385
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 294,
      "end": 385
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "compose",
          "optional": false,
          "typeAnnotation": null,
          "start": 402,
          "end": 409
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "R",
                "optional": false,
                "typeAnnotation": null,
                "start": 410,
                "end": 411
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 410,
              "end": 411
            }
          ],
          "start": 409,
          "end": 412
        },
        "params": [
          {
            "type": "RestElement",
            "decorators": [],
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "funcs",
              "optional": false,
              "typeAnnotation": null,
              "start": 416,
              "end": 421
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
                    "name": "Function",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 423,
                    "end": 431
                  },
                  "typeArguments": null,
                  "start": 423,
                  "end": 431
                },
                "start": 423,
                "end": 433
              },
              "start": 421,
              "end": 433
            },
            "value": null,
            "start": 413,
            "end": 433
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
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
                  "start": 440,
                  "end": 444
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 446,
                      "end": 449
                    },
                    "start": 446,
                    "end": 451
                  },
                  "start": 444,
                  "end": 451
                },
                "value": null,
                "start": 437,
                "end": 451
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "R",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 456,
                  "end": 457
                },
                "typeArguments": null,
                "start": 456,
                "end": 457
              },
              "start": 453,
              "end": 457
            },
            "start": 436,
            "end": 457
          },
          "start": 434,
          "end": 457
        },
        "body": null,
        "expression": false,
        "start": 393,
        "end": 458
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 386,
      "end": 458
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 459
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 7,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "compose",
    "start": 16,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 37,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 41,
    "end": 42
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 43,
    "end": 49
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 50,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "compose",
    "start": 59,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 67,
    "end": 68
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 69,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 77,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 95,
    "end": 96
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 97,
    "end": 103
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 104,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "compose",
    "start": 113,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 130,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 134,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 141,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 147,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 151,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 158,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 172,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 176,
    "end": 177
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 178,
    "end": 184
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 185,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "compose",
    "start": 194,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 203,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 206,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "C",
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
    "value": "D",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 219,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 223,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "c",
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
    "value": "C",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 230,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "D",
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
    "value": "f2",
    "start": 240,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "type": "Identifier",
    "value": "b",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 251,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 255,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 261,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 265,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 267,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 272,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 281,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 283,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 288,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 292,
    "end": 293
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 294,
    "end": 300
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 301,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "compose",
    "start": 310,
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
    "value": "R",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 320,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 321,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 325,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 327,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 329,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 334,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 340,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "funcs",
    "start": 343,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 348,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 350,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Punctuator",
    "value": "(",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 364,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 367,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 371,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 373,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 380,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 384,
    "end": 385
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 386,
    "end": 392
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 393,
    "end": 401
  },
  {
    "type": "Identifier",
    "value": "compose",
    "start": 402,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 409,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 410,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 413,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "funcs",
    "start": 416,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 421,
    "end": 422
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 423,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Punctuator",
    "value": "(",
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 437,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "args",
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
    "value": "any",
    "start": 446,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": "[",
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
    "value": ")",
    "start": 451,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 453,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 456,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 457,
    "end": 458
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
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 17
          },
          "start": 7,
          "end": 17
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "\"react\"",
        "start": 23,
        "end": 30
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 31
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "InferableComponentEnhancer",
          "optional": false,
          "typeAnnotation": null,
          "start": 49,
          "end": 75
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
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 83,
                      "end": 84
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 83,
                    "end": 84
                  }
                ],
                "start": 82,
                "end": 85
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
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "React",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 97,
                          "end": 102
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ComponentType",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 103,
                          "end": 116
                        },
                        "start": 97,
                        "end": 116
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
                              "start": 117,
                              "end": 118
                            },
                            "typeArguments": null,
                            "start": 117,
                            "end": 118
                          }
                        ],
                        "start": 116,
                        "end": 119
                      },
                      "start": 97,
                      "end": 119
                    },
                    "start": 95,
                    "end": 119
                  },
                  "start": 86,
                  "end": 119
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "React",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 122,
                      "end": 127
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ComponentType",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 128,
                      "end": 141
                    },
                    "start": 122,
                    "end": 141
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
                          "start": 142,
                          "end": 143
                        },
                        "typeArguments": null,
                        "start": 142,
                        "end": 143
                      }
                    ],
                    "start": 141,
                    "end": 144
                  },
                  "start": 122,
                  "end": 144
                },
                "start": 120,
                "end": 144
              },
              "start": 82,
              "end": 145
            }
          ],
          "start": 76,
          "end": 147
        },
        "declare": false,
        "start": 39,
        "end": 147
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 32,
      "end": 147
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "connect",
          "optional": false,
          "typeAnnotation": null,
          "start": 164,
          "end": 171
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "InferableComponentEnhancer",
              "optional": false,
              "typeAnnotation": null,
              "start": 175,
              "end": 201
            },
            "typeArguments": null,
            "start": 175,
            "end": 201
          },
          "start": 173,
          "end": 201
        },
        "body": null,
        "expression": false,
        "start": 155,
        "end": 202
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 148,
      "end": 202
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 203
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
    "value": "*",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 9,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 12,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 18,
    "end": 22
  },
  {
    "type": "String",
    "value": "\"react\"",
    "start": 23,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 30,
    "end": 31
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 32,
    "end": 38
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 39,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "InferableComponentEnhancer",
    "start": 49,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "component",
    "start": 86,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 97,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "ComponentType",
    "start": 103,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 119,
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
    "value": "React",
    "start": 122,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "ComponentType",
    "start": 128,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 146,
    "end": 147
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 148,
    "end": 154
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 155,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "connect",
    "start": 164,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "InferableComponentEnhancer",
    "start": 175,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 201,
    "end": 202
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
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 12
          },
          "start": 7,
          "end": 12
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "'react'",
        "start": 18,
        "end": 25
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 26
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "compose",
            "optional": false,
            "typeAnnotation": null,
            "start": 36,
            "end": 43
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "compose",
            "optional": false,
            "typeAnnotation": null,
            "start": 36,
            "end": 43
          },
          "importKind": "value",
          "start": 36,
          "end": 43
        }
      ],
      "source": {
        "type": "Literal",
        "value": "redux",
        "raw": "'redux'",
        "start": 51,
        "end": 58
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 27,
      "end": 59
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "connect",
            "optional": false,
            "typeAnnotation": null,
            "start": 69,
            "end": 76
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "connect",
            "optional": false,
            "typeAnnotation": null,
            "start": 69,
            "end": 76
          },
          "importKind": "value",
          "start": 69,
          "end": 76
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react-redux",
        "raw": "'react-redux'",
        "start": 84,
        "end": 97
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 60,
      "end": 98
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
            "name": "C0",
            "optional": false,
            "typeAnnotation": null,
            "start": 149,
            "end": 151
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 160,
              "end": 164
            },
            "id": null,
            "generator": false,
            "start": 154,
            "end": 164
          },
          "definite": false,
          "start": 149,
          "end": 164
        }
      ],
      "declare": false,
      "start": 145,
      "end": 165
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
              "name": "C1",
              "optional": false,
              "typeAnnotation": null,
              "start": 180,
              "end": 182
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "React",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 185,
                  "end": 190
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "forwardRef",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 191,
                  "end": 201
                },
                "optional": false,
                "computed": false,
                "start": 185,
                "end": 201
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "props",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 203,
                      "end": 208
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ref",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 210,
                      "end": 213
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "JSXElement",
                    "openingElement": {
                      "type": "JSXOpeningElement",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "C0",
                        "start": 219,
                        "end": 221
                      },
                      "typeArguments": null,
                      "attributes": [
                        {
                          "type": "JSXAttribute",
                          "name": {
                            "type": "JSXIdentifier",
                            "name": "domRef",
                            "start": 222,
                            "end": 228
                          },
                          "value": {
                            "type": "JSXExpressionContainer",
                            "expression": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ref",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 230,
                              "end": 233
                            },
                            "start": 229,
                            "end": 234
                          },
                          "start": 222,
                          "end": 234
                        },
                        {
                          "type": "JSXSpreadAttribute",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "props",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 239,
                            "end": 244
                          },
                          "start": 235,
                          "end": 245
                        }
                      ],
                      "selfClosing": true,
                      "start": 218,
                      "end": 248
                    },
                    "children": [],
                    "closingElement": null,
                    "start": 218,
                    "end": 248
                  },
                  "id": null,
                  "generator": false,
                  "start": 202,
                  "end": 248
                }
              ],
              "optional": false,
              "start": 185,
              "end": 249
            },
            "definite": false,
            "start": 180,
            "end": 249
          }
        ],
        "declare": false,
        "start": 174,
        "end": 250
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 167,
      "end": 250
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
              "name": "C2",
              "optional": false,
              "typeAnnotation": null,
              "start": 265,
              "end": 267
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "compose",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 270,
                  "end": 277
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "connect",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 278,
                      "end": 285
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 278,
                    "end": 287
                  },
                  {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "hoc",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 289,
                      "end": 292
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 289,
                    "end": 294
                  }
                ],
                "optional": false,
                "start": 270,
                "end": 295
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 296,
                  "end": 298
                }
              ],
              "optional": false,
              "start": 270,
              "end": 299
            },
            "definite": false,
            "start": 265,
            "end": 299
          }
        ],
        "declare": false,
        "start": 259,
        "end": 300
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 252,
      "end": 300
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
              "name": "C3",
              "optional": false,
              "typeAnnotation": null,
              "start": 329,
              "end": 331
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "React",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 334,
                  "end": 339
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "createContext",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 340,
                  "end": 353
                },
                "optional": false,
                "computed": false,
                "start": 334,
                "end": 353
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 334,
              "end": 355
            },
            "definite": false,
            "start": 329,
            "end": 355
          }
        ],
        "declare": false,
        "start": 323,
        "end": 356
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 316,
      "end": 356
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "hoc",
        "optional": false,
        "typeAnnotation": null,
        "start": 367,
        "end": 370
      },
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
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Component",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 405,
                  "end": 414
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ClassExpression",
                      "decorators": [],
                      "id": null,
                      "typeParameters": null,
                      "superClass": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "React",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 450,
                          "end": 455
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Component",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 456,
                          "end": 465
                        },
                        "optional": false,
                        "computed": false,
                        "start": 450,
                        "end": 465
                      },
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
                              "name": "render",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 509,
                              "end": 515
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
                                      "type": "JSXElement",
                                      "openingElement": {
                                        "type": "JSXOpeningElement",
                                        "name": {
                                          "type": "JSXIdentifier",
                                          "name": "Component",
                                          "start": 544,
                                          "end": 553
                                        },
                                        "typeArguments": null,
                                        "attributes": [
                                          {
                                            "type": "JSXSpreadAttribute",
                                            "argument": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "ThisExpression",
                                                "start": 558,
                                                "end": 562
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "props",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 563,
                                                "end": 568
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 558,
                                              "end": 568
                                            },
                                            "start": 554,
                                            "end": 569
                                          }
                                        ],
                                        "selfClosing": true,
                                        "start": 543,
                                        "end": 572
                                      },
                                      "children": [],
                                      "closingElement": null,
                                      "start": 543,
                                      "end": 572
                                    },
                                    "start": 536,
                                    "end": 573
                                  }
                                ],
                                "start": 518,
                                "end": 587
                              },
                              "expression": false,
                              "start": 515,
                              "end": 587
                            },
                            "kind": "method",
                            "computed": false,
                            "static": false,
                            "override": false,
                            "optional": false,
                            "accessibility": null,
                            "start": 509,
                            "end": 587
                          }
                        ],
                        "start": 466,
                        "end": 597
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 436,
                      "end": 597
                    },
                    "start": 429,
                    "end": 598
                  }
                ],
                "start": 419,
                "end": 604
              },
              "id": null,
              "generator": false,
              "start": 404,
              "end": 604
            },
            "start": 397,
            "end": 605
          }
        ],
        "start": 373,
        "end": 607
      },
      "expression": false,
      "start": 358,
      "end": 607
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 608
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
    "type": "Identifier",
    "value": "React",
    "start": 7,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 13,
    "end": 17
  },
  {
    "type": "String",
    "value": "'react'",
    "start": 18,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 25,
    "end": 26
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 27,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 34,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "compose",
    "start": 36,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 46,
    "end": 50
  },
  {
    "type": "String",
    "value": "'redux'",
    "start": 51,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 58,
    "end": 59
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 60,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "connect",
    "start": 69,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 79,
    "end": 83
  },
  {
    "type": "String",
    "value": "'react-redux'",
    "start": 84,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 97,
    "end": 98
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 145,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "C0",
    "start": 149,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 157,
    "end": 159
  },
  {
    "type": "Null",
    "value": "null",
    "start": 160,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 164,
    "end": 165
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 167,
    "end": 173
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 174,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 180,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 183,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 185,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 190,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "forwardRef",
    "start": 191,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 202,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 203,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "ref",
    "start": 210,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 215,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 218,
    "end": 219
  },
  {
    "type": "JSXIdentifier",
    "value": "C0",
    "start": 219,
    "end": 221
  },
  {
    "type": "JSXIdentifier",
    "value": "domRef",
    "start": 222,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 229,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "ref",
    "start": 230,
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
    "value": "{",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 236,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 239,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "/",
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
    "value": ")",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 249,
    "end": 250
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 252,
    "end": 258
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 259,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 265,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 268,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "compose",
    "start": 270,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 277,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "connect",
    "start": 278,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 287,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "hoc",
    "start": 289,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 295,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 296,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 299,
    "end": 300
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 316,
    "end": 322
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 323,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 329,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 332,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 334,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 339,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "createContext",
    "start": 340,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 353,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 355,
    "end": 356
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 358,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "hoc",
    "start": 367,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 373,
    "end": 374
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 397,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 404,
    "end": 405
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 405,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 416,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 419,
    "end": 420
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 429,
    "end": 435
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 436,
    "end": 441
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 442,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 450,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 455,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 456,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 466,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "render",
    "start": 509,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 518,
    "end": 519
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 536,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 543,
    "end": 544
  },
  {
    "type": "JSXIdentifier",
    "value": "Component",
    "start": 544,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 554,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 555,
    "end": 558
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 558,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 562,
    "end": 563
  },
  {
    "type": "JSXIdentifier",
    "value": "props",
    "start": 563,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 568,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 570,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 571,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 572,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 586,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 596,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 597,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 603,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 604,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 606,
    "end": 607
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
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 12
          },
          "start": 7,
          "end": 12
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "'react'",
        "start": 18,
        "end": 25
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 26
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "C1",
            "optional": false,
            "typeAnnotation": null,
            "start": 36,
            "end": 38
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "C1",
            "optional": false,
            "typeAnnotation": null,
            "start": 36,
            "end": 38
          },
          "importKind": "value",
          "start": 36,
          "end": 38
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "C2",
            "optional": false,
            "typeAnnotation": null,
            "start": 40,
            "end": 42
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "C2",
            "optional": false,
            "typeAnnotation": null,
            "start": 40,
            "end": 42
          },
          "importKind": "value",
          "start": 40,
          "end": 42
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "C3",
            "optional": false,
            "typeAnnotation": null,
            "start": 44,
            "end": 46
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "C3",
            "optional": false,
            "typeAnnotation": null,
            "start": 44,
            "end": 46
          },
          "importKind": "value",
          "start": 44,
          "end": 46
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./lib.js",
        "raw": "'./lib.js'",
        "start": 54,
        "end": 64
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 27,
      "end": 65
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
            "name": "track",
            "optional": false,
            "typeAnnotation": null,
            "start": 73,
            "end": 78
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "React",
                "optional": false,
                "typeAnnotation": null,
                "start": 81,
                "end": 86
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "useRef",
                "optional": false,
                "typeAnnotation": null,
                "start": 87,
                "end": 93
              },
              "optional": false,
              "computed": false,
              "start": 81,
              "end": 93
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 94,
                "end": 98
              }
            ],
            "optional": false,
            "start": 81,
            "end": 99
          },
          "definite": false,
          "start": 73,
          "end": 99
        }
      ],
      "declare": false,
      "start": 67,
      "end": 100
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "C1",
            "start": 102,
            "end": 104
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "ref",
                "start": 105,
                "end": 108
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 111,
                      "end": 112
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "track",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 119,
                              "end": 124
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "current",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 125,
                              "end": 132
                            },
                            "optional": false,
                            "computed": false,
                            "start": 119,
                            "end": 132
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "e",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 135,
                            "end": 136
                          },
                          "start": 119,
                          "end": 136
                        },
                        "directive": null,
                        "start": 119,
                        "end": 137
                      }
                    ],
                    "start": 117,
                    "end": 139
                  },
                  "id": null,
                  "generator": false,
                  "start": 110,
                  "end": 139
                },
                "start": 109,
                "end": 140
              },
              "start": 105,
              "end": 140
            }
          ],
          "selfClosing": true,
          "start": 101,
          "end": 143
        },
        "children": [],
        "closingElement": null,
        "start": 101,
        "end": 143
      },
      "directive": null,
      "start": 101,
      "end": 144
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "C2",
            "start": 147,
            "end": 149
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": true,
          "start": 146,
          "end": 152
        },
        "children": [],
        "closingElement": null,
        "start": 146,
        "end": 152
      },
      "directive": null,
      "start": 146,
      "end": 153
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 163,
                  "end": 168
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 163,
                  "end": 168
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 163,
                "end": 168
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 161,
            "end": 170
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "React",
                "optional": false,
                "typeAnnotation": null,
                "start": 173,
                "end": 178
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "useContext",
                "optional": false,
                "typeAnnotation": null,
                "start": 179,
                "end": 189
              },
              "optional": false,
              "computed": false,
              "start": 173,
              "end": 189
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "C3",
                "optional": false,
                "typeAnnotation": null,
                "start": 190,
                "end": 192
              }
            ],
            "optional": false,
            "start": 173,
            "end": 193
          },
          "definite": false,
          "start": 161,
          "end": 193
        }
      ],
      "declare": false,
      "start": 155,
      "end": 194
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 194
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
    "type": "Identifier",
    "value": "React",
    "start": 7,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 13,
    "end": 17
  },
  {
    "type": "String",
    "value": "'react'",
    "start": 18,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 25,
    "end": 26
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 27,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 34,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 36,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 40,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 44,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 47,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 49,
    "end": 53
  },
  {
    "type": "String",
    "value": "'./lib.js'",
    "start": 54,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 64,
    "end": 65
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 67,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "track",
    "start": 73,
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
    "value": "React",
    "start": 81,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "useRef",
    "start": 87,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 93,
    "end": 94
  },
  {
    "type": "Null",
    "value": "null",
    "start": 94,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 101,
    "end": 102
  },
  {
    "type": "JSXIdentifier",
    "value": "C1",
    "start": 102,
    "end": 104
  },
  {
    "type": "JSXIdentifier",
    "value": "ref",
    "start": 105,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 114,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 117,
    "end": 118
  },
  {
    "type": "JSXIdentifier",
    "value": "track",
    "start": 119,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 124,
    "end": 125
  },
  {
    "type": "JSXIdentifier",
    "value": "current",
    "start": 125,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 146,
    "end": 147
  },
  {
    "type": "JSXIdentifier",
    "value": "C2",
    "start": 147,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 152,
    "end": 153
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 155,
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
    "value": "value",
    "start": 163,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 171,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 173,
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
    "value": "useContext",
    "start": 179,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 189,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 190,
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
  }
]
```
