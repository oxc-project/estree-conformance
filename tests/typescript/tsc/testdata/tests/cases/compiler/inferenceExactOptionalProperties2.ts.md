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
        "name": "Values",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 11
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
              "start": 12,
              "end": 13
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 12,
            "end": 13
          }
        ],
        "start": 11,
        "end": 14
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
            "start": 17,
            "end": 18
          },
          "typeArguments": null,
          "start": 17,
          "end": 18
        },
        "indexType": {
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
              "start": 25,
              "end": 26
            },
            "typeArguments": null,
            "start": 25,
            "end": 26
          },
          "start": 19,
          "end": 26
        },
        "start": 17,
        "end": 27
      },
      "declare": false,
      "start": 0,
      "end": 28
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "EventObject",
        "optional": false,
        "typeAnnotation": null,
        "start": 35,
        "end": 46
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
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 53,
              "end": 57
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 59,
                "end": 65
              },
              "start": 57,
              "end": 65
            },
            "accessibility": null,
            "static": false,
            "start": 53,
            "end": 66
          }
        ],
        "start": 49,
        "end": 68
      },
      "declare": false,
      "start": 30,
      "end": 69
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ActorLogic",
        "optional": false,
        "typeAnnotation": null,
        "start": 81,
        "end": 91
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TEvent",
              "optional": false,
              "typeAnnotation": null,
              "start": 92,
              "end": 98
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "EventObject",
                "optional": false,
                "typeAnnotation": null,
                "start": 107,
                "end": 118
              },
              "typeArguments": null,
              "start": 107,
              "end": 118
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 92,
            "end": 118
          }
        ],
        "start": 91,
        "end": 119
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
              "name": "transition",
              "optional": false,
              "typeAnnotation": null,
              "start": 124,
              "end": 134
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
                    "name": "ev",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TEvent",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 141,
                          "end": 147
                        },
                        "typeArguments": null,
                        "start": 141,
                        "end": 147
                      },
                      "start": 139,
                      "end": 147
                    },
                    "start": 137,
                    "end": 147
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 152,
                    "end": 159
                  },
                  "start": 149,
                  "end": 159
                },
                "start": 136,
                "end": 159
              },
              "start": 134,
              "end": 159
            },
            "accessibility": null,
            "static": false,
            "start": 124,
            "end": 160
          }
        ],
        "start": 120,
        "end": 162
      },
      "declare": false,
      "start": 71,
      "end": 162
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UnknownActorLogic",
        "optional": false,
        "typeAnnotation": null,
        "start": 169,
        "end": 186
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ActorLogic",
          "optional": false,
          "typeAnnotation": null,
          "start": 189,
          "end": 199
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNeverKeyword",
              "start": 200,
              "end": 205
            }
          ],
          "start": 199,
          "end": 206
        },
        "start": 189,
        "end": 206
      },
      "declare": false,
      "start": 164,
      "end": 207
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ProvidedActor",
        "optional": false,
        "typeAnnotation": null,
        "start": 219,
        "end": 232
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
              "name": "src",
              "optional": false,
              "typeAnnotation": null,
              "start": 237,
              "end": 240
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 242,
                "end": 248
              },
              "start": 240,
              "end": 248
            },
            "accessibility": null,
            "static": false,
            "start": 237,
            "end": 249
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "logic",
              "optional": false,
              "typeAnnotation": null,
              "start": 252,
              "end": 257
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "UnknownActorLogic",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 259,
                  "end": 276
                },
                "typeArguments": null,
                "start": 259,
                "end": 276
              },
              "start": 257,
              "end": 276
            },
            "accessibility": null,
            "static": false,
            "start": 252,
            "end": 277
          }
        ],
        "start": 233,
        "end": 279
      },
      "declare": false,
      "start": 209,
      "end": 279
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ActionFunction",
        "optional": false,
        "typeAnnotation": null,
        "start": 291,
        "end": 305
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TActor",
              "optional": false,
              "typeAnnotation": null,
              "start": 306,
              "end": 312
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ProvidedActor",
                "optional": false,
                "typeAnnotation": null,
                "start": 321,
                "end": 334
              },
              "typeArguments": null,
              "start": 321,
              "end": 334
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 306,
            "end": 334
          }
        ],
        "start": 305,
        "end": 335
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 344,
                "end": 348
              },
              "start": 342,
              "end": 348
            },
            "start": 340,
            "end": 349
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_out_TActor",
              "optional": false,
              "typeAnnotation": null,
              "start": 352,
              "end": 363
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TActor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 366,
                  "end": 372
                },
                "typeArguments": null,
                "start": 366,
                "end": 372
              },
              "start": 364,
              "end": 372
            },
            "accessibility": null,
            "static": false,
            "start": 352,
            "end": 373
          }
        ],
        "start": 336,
        "end": 375
      },
      "declare": false,
      "start": 281,
      "end": 375
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AssignAction",
        "optional": false,
        "typeAnnotation": null,
        "start": 387,
        "end": 399
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TActor",
              "optional": false,
              "typeAnnotation": null,
              "start": 400,
              "end": 406
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ProvidedActor",
                "optional": false,
                "typeAnnotation": null,
                "start": 415,
                "end": 428
              },
              "typeArguments": null,
              "start": 415,
              "end": 428
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 400,
            "end": 428
          }
        ],
        "start": 399,
        "end": 429
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 438,
                "end": 442
              },
              "start": 436,
              "end": 442
            },
            "start": 434,
            "end": 443
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_out_TActor",
              "optional": false,
              "typeAnnotation": null,
              "start": 446,
              "end": 457
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TActor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 460,
                  "end": 466
                },
                "typeArguments": null,
                "start": 460,
                "end": 466
              },
              "start": 458,
              "end": 466
            },
            "accessibility": null,
            "static": false,
            "start": 446,
            "end": 467
          }
        ],
        "start": 430,
        "end": 469
      },
      "declare": false,
      "start": 377,
      "end": 469
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MachineConfig",
        "optional": false,
        "typeAnnotation": null,
        "start": 481,
        "end": 494
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TActor",
              "optional": false,
              "typeAnnotation": null,
              "start": 495,
              "end": 501
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ProvidedActor",
                "optional": false,
                "typeAnnotation": null,
                "start": 510,
                "end": 523
              },
              "typeArguments": null,
              "start": 510,
              "end": 523
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 495,
            "end": 523
          }
        ],
        "start": 494,
        "end": 524
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
              "name": "entry",
              "optional": false,
              "typeAnnotation": null,
              "start": 529,
              "end": 534
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ActionFunction",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 537,
                  "end": 551
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TActor",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 552,
                        "end": 558
                      },
                      "typeArguments": null,
                      "start": 552,
                      "end": 558
                    }
                  ],
                  "start": 551,
                  "end": 559
                },
                "start": 537,
                "end": 559
              },
              "start": 535,
              "end": 559
            },
            "accessibility": null,
            "static": false,
            "start": 529,
            "end": 560
          }
        ],
        "start": 525,
        "end": 562
      },
      "declare": false,
      "start": 471,
      "end": 562
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "assign",
        "optional": false,
        "typeAnnotation": null,
        "start": 581,
        "end": 587
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
              "name": "TActor",
              "optional": false,
              "typeAnnotation": null,
              "start": 588,
              "end": 594
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ProvidedActor",
                "optional": false,
                "typeAnnotation": null,
                "start": 603,
                "end": 616
              },
              "typeArguments": null,
              "start": 603,
              "end": 616
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 588,
            "end": 616
          }
        ],
        "start": 587,
        "end": 617
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_",
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
                  "name": "spawn",
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
                          "name": "actor",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSIndexedAccessType",
                              "objectType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "TActor",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 640,
                                  "end": 646
                                },
                                "typeArguments": null,
                                "start": 640,
                                "end": 646
                              },
                              "indexType": {
                                "type": "TSLiteralType",
                                "literal": {
                                  "type": "Literal",
                                  "value": "src",
                                  "raw": "\"src\"",
                                  "start": 647,
                                  "end": 652
                                },
                                "start": 647,
                                "end": 652
                              },
                              "start": 640,
                              "end": 653
                            },
                            "start": 638,
                            "end": 653
                          },
                          "start": 633,
                          "end": 653
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 658,
                          "end": 662
                        },
                        "start": 655,
                        "end": 662
                      },
                      "start": 632,
                      "end": 662
                    },
                    "start": 630,
                    "end": 662
                  },
                  "start": 625,
                  "end": 662
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "members": [],
                  "start": 667,
                  "end": 669
                },
                "start": 664,
                "end": 669
              },
              "start": 624,
              "end": 669
            },
            "start": 622,
            "end": 669
          },
          "start": 621,
          "end": 669
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "AssignAction",
            "optional": false,
            "typeAnnotation": null,
            "start": 674,
            "end": 686
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TActor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 687,
                  "end": 693
                },
                "typeArguments": null,
                "start": 687,
                "end": 693
              }
            ],
            "start": 686,
            "end": 694
          },
          "start": 674,
          "end": 694
        },
        "start": 672,
        "end": 694
      },
      "body": null,
      "expression": false,
      "start": 564,
      "end": 695
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ToProvidedActor",
        "optional": false,
        "typeAnnotation": null,
        "start": 702,
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
              "name": "TActors",
              "optional": false,
              "typeAnnotation": null,
              "start": 718,
              "end": 725
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 734,
                "end": 740
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 741,
                    "end": 747
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "UnknownActorLogic",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 749,
                      "end": 766
                    },
                    "typeArguments": null,
                    "start": 749,
                    "end": 766
                  }
                ],
                "start": 740,
                "end": 767
              },
              "start": 734,
              "end": 767
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 718,
            "end": 767
          }
        ],
        "start": 717,
        "end": 768
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Values",
          "optional": false,
          "typeAnnotation": null,
          "start": 773,
          "end": 779
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 787,
                "end": 788
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
                        "name": "TActors",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 798,
                        "end": 805
                      },
                      "typeArguments": null,
                      "start": 798,
                      "end": 805
                    },
                    "start": 792,
                    "end": 805
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 808,
                    "end": 814
                  }
                ],
                "start": 792,
                "end": 814
              },
              "nameType": null,
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
                      "name": "src",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 825,
                      "end": 828
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
                          "start": 830,
                          "end": 831
                        },
                        "typeArguments": null,
                        "start": 830,
                        "end": 831
                      },
                      "start": 828,
                      "end": 831
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 825,
                    "end": 832
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "logic",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 839,
                      "end": 844
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TActors",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 846,
                            "end": 853
                          },
                          "typeArguments": null,
                          "start": 846,
                          "end": 853
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 854,
                            "end": 855
                          },
                          "typeArguments": null,
                          "start": 854,
                          "end": 855
                        },
                        "start": 846,
                        "end": 856
                      },
                      "start": 844,
                      "end": 856
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 839,
                    "end": 857
                  }
                ],
                "start": 817,
                "end": 863
              },
              "optional": false,
              "readonly": null,
              "start": 780,
              "end": 868
            }
          ],
          "start": 779,
          "end": 869
        },
        "start": 773,
        "end": 869
      },
      "declare": false,
      "start": 697,
      "end": 870
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "setup",
        "optional": false,
        "typeAnnotation": null,
        "start": 889,
        "end": 894
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
              "name": "TActors",
              "optional": false,
              "typeAnnotation": null,
              "start": 898,
              "end": 905
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 914,
                "end": 920
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 921,
                    "end": 927
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "UnknownActorLogic",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 929,
                      "end": 946
                    },
                    "typeArguments": null,
                    "start": 929,
                    "end": 946
                  }
                ],
                "start": 920,
                "end": 947
              },
              "start": 914,
              "end": 947
            },
            "default": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 950,
              "end": 952
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 898,
            "end": 952
          }
        ],
        "start": 894,
        "end": 955
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "implementations",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
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
                    "name": "actors",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 978,
                    "end": 984
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSMappedType",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 990,
                        "end": 991
                      },
                      "constraint": {
                        "type": "TSTypeOperator",
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TActors",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1001,
                            "end": 1008
                          },
                          "typeArguments": null,
                          "start": 1001,
                          "end": 1008
                        },
                        "start": 995,
                        "end": 1008
                      },
                      "nameType": null,
                      "typeAnnotation": {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TActors",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1011,
                            "end": 1018
                          },
                          "typeArguments": null,
                          "start": 1011,
                          "end": 1018
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1019,
                            "end": 1020
                          },
                          "typeArguments": null,
                          "start": 1019,
                          "end": 1020
                        },
                        "start": 1011,
                        "end": 1021
                      },
                      "optional": false,
                      "readonly": null,
                      "start": 987,
                      "end": 1023
                    },
                    "start": 985,
                    "end": 1023
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 978,
                  "end": 1024
                }
              ],
              "start": 974,
              "end": 1026
            },
            "start": 972,
            "end": 1026
          },
          "start": 956,
          "end": 1026
        }
      ],
      "returnType": {
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
                "name": "createMachine",
                "optional": false,
                "typeAnnotation": null,
                "start": 1033,
                "end": 1046
              },
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
                          "name": "TConfig",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1060,
                          "end": 1067
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "MachineConfig",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1076,
                            "end": 1089
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "ToProvidedActor",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1090,
                                  "end": 1105
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "TActors",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1106,
                                        "end": 1113
                                      },
                                      "typeArguments": null,
                                      "start": 1106,
                                      "end": 1113
                                    }
                                  ],
                                  "start": 1105,
                                  "end": 1114
                                },
                                "start": 1090,
                                "end": 1114
                              }
                            ],
                            "start": 1089,
                            "end": 1115
                          },
                          "start": 1076,
                          "end": 1115
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": true,
                        "start": 1054,
                        "end": 1115
                      }
                    ],
                    "start": 1048,
                    "end": 1120
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "config",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TConfig",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1134,
                            "end": 1141
                          },
                          "typeArguments": null,
                          "start": 1134,
                          "end": 1141
                        },
                        "start": 1132,
                        "end": 1141
                      },
                      "start": 1126,
                      "end": 1141
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 1150,
                      "end": 1154
                    },
                    "start": 1147,
                    "end": 1154
                  },
                  "start": 1048,
                  "end": 1154
                },
                "start": 1046,
                "end": 1154
              },
              "accessibility": null,
              "static": false,
              "start": 1033,
              "end": 1155
            }
          ],
          "start": 1029,
          "end": 1157
        },
        "start": 1027,
        "end": 1157
      },
      "body": null,
      "expression": false,
      "start": 872,
      "end": 1158
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
            "name": "counterLogic",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ActorLogic",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1188,
                  "end": 1198
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
                            "name": "type",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1201,
                            "end": 1205
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "INCREMENT",
                                "raw": "\"INCREMENT\"",
                                "start": 1207,
                                "end": 1218
                              },
                              "start": 1207,
                              "end": 1218
                            },
                            "start": 1205,
                            "end": 1218
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 1201,
                          "end": 1218
                        }
                      ],
                      "start": 1199,
                      "end": 1220
                    }
                  ],
                  "start": 1198,
                  "end": 1221
                },
                "start": 1188,
                "end": 1221
              },
              "start": 1186,
              "end": 1221
            },
            "start": 1174,
            "end": 1221
          },
          "init": null,
          "definite": false,
          "start": 1174,
          "end": 1221
        }
      ],
      "declare": true,
      "start": 1160,
      "end": 1222
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "setup",
              "optional": false,
              "typeAnnotation": null,
              "start": 1241,
              "end": 1246
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
                      "name": "actors",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1251,
                      "end": 1257
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "counter",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1261,
                            "end": 1268
                          },
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "counterLogic",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1270,
                            "end": 1282
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1261,
                          "end": 1282
                        }
                      ],
                      "start": 1259,
                      "end": 1284
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1251,
                    "end": 1284
                  }
                ],
                "start": 1247,
                "end": 1287
              }
            ],
            "optional": false,
            "start": 1241,
            "end": 1288
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "createMachine",
            "optional": false,
            "typeAnnotation": null,
            "start": 1289,
            "end": 1302
          },
          "optional": false,
          "computed": false,
          "start": 1241,
          "end": 1302
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
                  "name": "entry",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1307,
                  "end": 1312
                },
                "value": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "assign",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1314,
                    "end": 1320
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": false,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "spawn",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1322,
                          "end": 1327
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "spawn",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1338,
                                "end": 1343
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "value": "counter",
                                  "raw": "\"counter\"",
                                  "start": 1344,
                                  "end": 1353
                                }
                              ],
                              "optional": false,
                              "start": 1338,
                              "end": 1354
                            },
                            "directive": null,
                            "start": 1338,
                            "end": 1355
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "spawn",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1366,
                                "end": 1371
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "value": "alarm",
                                  "raw": "\"alarm\"",
                                  "start": 1372,
                                  "end": 1379
                                }
                              ],
                              "optional": false,
                              "start": 1366,
                              "end": 1380
                            },
                            "directive": null,
                            "start": 1366,
                            "end": 1381
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "ObjectExpression",
                              "properties": [],
                              "start": 1402,
                              "end": 1404
                            },
                            "start": 1395,
                            "end": 1405
                          }
                        ],
                        "start": 1332,
                        "end": 1409
                      },
                      "id": null,
                      "generator": false,
                      "start": 1321,
                      "end": 1409
                    }
                  ],
                  "optional": false,
                  "start": 1314,
                  "end": 1410
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1307,
                "end": 1410
              }
            ],
            "start": 1303,
            "end": 1413
          }
        ],
        "optional": false,
        "start": 1241,
        "end": 1414
      },
      "directive": null,
      "start": 1241,
      "end": 1415
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "setup",
              "optional": false,
              "typeAnnotation": null,
              "start": 1467,
              "end": 1472
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1467,
            "end": 1474
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "createMachine",
            "optional": false,
            "typeAnnotation": null,
            "start": 1475,
            "end": 1488
          },
          "optional": false,
          "computed": false,
          "start": 1467,
          "end": 1488
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
                  "name": "entry",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1493,
                  "end": 1498
                },
                "value": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "assign",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1500,
                    "end": 1506
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "ObjectExpression",
                        "properties": [],
                        "start": 1514,
                        "end": 1516
                      },
                      "id": null,
                      "generator": false,
                      "start": 1507,
                      "end": 1517
                    }
                  ],
                  "optional": false,
                  "start": 1500,
                  "end": 1518
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1493,
                "end": 1518
              }
            ],
            "start": 1489,
            "end": 1521
          }
        ],
        "optional": false,
        "start": 1467,
        "end": 1522
      },
      "directive": null,
      "start": 1467,
      "end": 1523
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1523
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
    "value": "Values",
    "start": 5,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 11,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 19,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 30,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "EventObject",
    "start": 35,
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
    "type": "Identifier",
    "value": "type",
    "start": 53,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 59,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 68,
    "end": 69
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 71,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "ActorLogic",
    "start": 81,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "TEvent",
    "start": 92,
    "end": 98
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 99,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "EventObject",
    "start": 107,
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
    "value": "{",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "transition",
    "start": 124,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "ev",
    "start": 137,
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
    "value": "TEvent",
    "start": 141,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 149,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 152,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 164,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "UnknownActorLogic",
    "start": 169,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "ActorLogic",
    "start": 189,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 199,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 200,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 206,
    "end": 207
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 209,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "ProvidedActor",
    "start": 219,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 233,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "src",
    "start": 237,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 240,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 242,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 248,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "logic",
    "start": 252,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 257,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "UnknownActorLogic",
    "start": 259,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 278,
    "end": 279
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 281,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "ActionFunction",
    "start": 291,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 305,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "TActor",
    "start": 306,
    "end": 312
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 313,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "ProvidedActor",
    "start": 321,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 342,
    "end": 343
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 344,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 348,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "_out_TActor",
    "start": 352,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 364,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "TActor",
    "start": 366,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 374,
    "end": 375
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 377,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "AssignAction",
    "start": 387,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 399,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "TActor",
    "start": 400,
    "end": 406
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 407,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "ProvidedActor",
    "start": 415,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 436,
    "end": 437
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 438,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 442,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "_out_TActor",
    "start": 446,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 457,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 458,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "TActor",
    "start": 460,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 466,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 468,
    "end": 469
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 471,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "MachineConfig",
    "start": 481,
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
    "value": "TActor",
    "start": 495,
    "end": 501
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 502,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "ProvidedActor",
    "start": 510,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 523,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 525,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 529,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 534,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 535,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "ActionFunction",
    "start": 537,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 551,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "TActor",
    "start": 552,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 558,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 559,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 561,
    "end": 562
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 564,
    "end": 571
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 572,
    "end": 580
  },
  {
    "type": "Identifier",
    "value": "assign",
    "start": 581,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 587,
    "end": 588
  },
  {
    "type": "Identifier",
    "value": "TActor",
    "start": 588,
    "end": 594
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 595,
    "end": 602
  },
  {
    "type": "Identifier",
    "value": "ProvidedActor",
    "start": 603,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 616,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 617,
    "end": 618
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 621,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 622,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 624,
    "end": 625
  },
  {
    "type": "Identifier",
    "value": "spawn",
    "start": 625,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 630,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 632,
    "end": 633
  },
  {
    "type": "Identifier",
    "value": "actor",
    "start": 633,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 638,
    "end": 639
  },
  {
    "type": "Identifier",
    "value": "TActor",
    "start": 640,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 646,
    "end": 647
  },
  {
    "type": "String",
    "value": "\"src\"",
    "start": 647,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 652,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 653,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 655,
    "end": 657
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 658,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 662,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 664,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 667,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 668,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 669,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 671,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 672,
    "end": 673
  },
  {
    "type": "Identifier",
    "value": "AssignAction",
    "start": 674,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 686,
    "end": 687
  },
  {
    "type": "Identifier",
    "value": "TActor",
    "start": 687,
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
    "type": "Identifier",
    "value": "type",
    "start": 697,
    "end": 701
  },
  {
    "type": "Identifier",
    "value": "ToProvidedActor",
    "start": 702,
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
    "value": "TActors",
    "start": 718,
    "end": 725
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 726,
    "end": 733
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 734,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 740,
    "end": 741
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 741,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 747,
    "end": 748
  },
  {
    "type": "Identifier",
    "value": "UnknownActorLogic",
    "start": 749,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 766,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 767,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 769,
    "end": 770
  },
  {
    "type": "Identifier",
    "value": "Values",
    "start": 773,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 779,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 780,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 786,
    "end": 787
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 787,
    "end": 788
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 789,
    "end": 791
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 792,
    "end": 797
  },
  {
    "type": "Identifier",
    "value": "TActors",
    "start": 798,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 806,
    "end": 807
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 808,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 814,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 815,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 817,
    "end": 818
  },
  {
    "type": "Identifier",
    "value": "src",
    "start": 825,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 828,
    "end": 829
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 830,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 831,
    "end": 832
  },
  {
    "type": "Identifier",
    "value": "logic",
    "start": 839,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 844,
    "end": 845
  },
  {
    "type": "Identifier",
    "value": "TActors",
    "start": 846,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 853,
    "end": 854
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 854,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 855,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 856,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 862,
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
    "start": 867,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 868,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 869,
    "end": 870
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 872,
    "end": 879
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 880,
    "end": 888
  },
  {
    "type": "Identifier",
    "value": "setup",
    "start": 889,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 894,
    "end": 895
  },
  {
    "type": "Identifier",
    "value": "TActors",
    "start": 898,
    "end": 905
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 906,
    "end": 913
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 914,
    "end": 920
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 920,
    "end": 921
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 921,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 927,
    "end": 928
  },
  {
    "type": "Identifier",
    "value": "UnknownActorLogic",
    "start": 929,
    "end": 946
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 946,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 948,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 950,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 951,
    "end": 952
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 952,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 954,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 955,
    "end": 956
  },
  {
    "type": "Identifier",
    "value": "implementations",
    "start": 956,
    "end": 971
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 971,
    "end": 972
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 972,
    "end": 973
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 974,
    "end": 975
  },
  {
    "type": "Identifier",
    "value": "actors",
    "start": 978,
    "end": 984
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 984,
    "end": 985
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 985,
    "end": 986
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 987,
    "end": 988
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 989,
    "end": 990
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 990,
    "end": 991
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 992,
    "end": 994
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 995,
    "end": 1000
  },
  {
    "type": "Identifier",
    "value": "TActors",
    "start": 1001,
    "end": 1008
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Identifier",
    "value": "TActors",
    "start": 1011,
    "end": 1018
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1025,
    "end": 1026
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Identifier",
    "value": "createMachine",
    "start": 1033,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1054,
    "end": 1059
  },
  {
    "type": "Identifier",
    "value": "TConfig",
    "start": 1060,
    "end": 1067
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1068,
    "end": 1075
  },
  {
    "type": "Identifier",
    "value": "MachineConfig",
    "start": 1076,
    "end": 1089
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1089,
    "end": 1090
  },
  {
    "type": "Identifier",
    "value": "ToProvidedActor",
    "start": 1090,
    "end": 1105
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1105,
    "end": 1106
  },
  {
    "type": "Identifier",
    "value": "TActors",
    "start": 1106,
    "end": 1113
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1113,
    "end": 1114
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1115,
    "end": 1116
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1119,
    "end": 1120
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Identifier",
    "value": "config",
    "start": 1126,
    "end": 1132
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1132,
    "end": 1133
  },
  {
    "type": "Identifier",
    "value": "TConfig",
    "start": 1134,
    "end": 1141
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1141,
    "end": 1142
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1145,
    "end": 1146
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1147,
    "end": 1149
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1150,
    "end": 1154
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1154,
    "end": 1155
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1156,
    "end": 1157
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1157,
    "end": 1158
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1160,
    "end": 1167
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1168,
    "end": 1173
  },
  {
    "type": "Identifier",
    "value": "counterLogic",
    "start": 1174,
    "end": 1186
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "Identifier",
    "value": "ActorLogic",
    "start": 1188,
    "end": 1198
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1201,
    "end": 1205
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1205,
    "end": 1206
  },
  {
    "type": "String",
    "value": "\"INCREMENT\"",
    "start": 1207,
    "end": 1218
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1219,
    "end": 1220
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1221,
    "end": 1222
  },
  {
    "type": "Identifier",
    "value": "setup",
    "start": 1241,
    "end": 1246
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1246,
    "end": 1247
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1247,
    "end": 1248
  },
  {
    "type": "Identifier",
    "value": "actors",
    "start": 1251,
    "end": 1257
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1257,
    "end": 1258
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1259,
    "end": 1260
  },
  {
    "type": "Identifier",
    "value": "counter",
    "start": 1261,
    "end": 1268
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1268,
    "end": 1269
  },
  {
    "type": "Identifier",
    "value": "counterLogic",
    "start": 1270,
    "end": 1282
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1283,
    "end": 1284
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1284,
    "end": 1285
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1286,
    "end": 1287
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1287,
    "end": 1288
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1288,
    "end": 1289
  },
  {
    "type": "Identifier",
    "value": "createMachine",
    "start": 1289,
    "end": 1302
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1302,
    "end": 1303
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1303,
    "end": 1304
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 1307,
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
    "value": "assign",
    "start": 1314,
    "end": 1320
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1320,
    "end": 1321
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1321,
    "end": 1322
  },
  {
    "type": "Identifier",
    "value": "spawn",
    "start": 1322,
    "end": 1327
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1327,
    "end": 1328
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1329,
    "end": 1331
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1332,
    "end": 1333
  },
  {
    "type": "Identifier",
    "value": "spawn",
    "start": 1338,
    "end": 1343
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1343,
    "end": 1344
  },
  {
    "type": "String",
    "value": "\"counter\"",
    "start": 1344,
    "end": 1353
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1353,
    "end": 1354
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1354,
    "end": 1355
  },
  {
    "type": "Identifier",
    "value": "spawn",
    "start": 1366,
    "end": 1371
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1371,
    "end": 1372
  },
  {
    "type": "String",
    "value": "\"alarm\"",
    "start": 1372,
    "end": 1379
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1379,
    "end": 1380
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1380,
    "end": 1381
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1395,
    "end": 1401
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1402,
    "end": 1403
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1403,
    "end": 1404
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1404,
    "end": 1405
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1408,
    "end": 1409
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1409,
    "end": 1410
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1410,
    "end": 1411
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1412,
    "end": 1413
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1413,
    "end": 1414
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1414,
    "end": 1415
  },
  {
    "type": "Identifier",
    "value": "setup",
    "start": 1467,
    "end": 1472
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1472,
    "end": 1473
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1473,
    "end": 1474
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1474,
    "end": 1475
  },
  {
    "type": "Identifier",
    "value": "createMachine",
    "start": 1475,
    "end": 1488
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1488,
    "end": 1489
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1489,
    "end": 1490
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 1493,
    "end": 1498
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1498,
    "end": 1499
  },
  {
    "type": "Identifier",
    "value": "assign",
    "start": 1500,
    "end": 1506
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1506,
    "end": 1507
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1507,
    "end": 1508
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1508,
    "end": 1509
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1510,
    "end": 1512
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1513,
    "end": 1514
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1514,
    "end": 1515
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1515,
    "end": 1516
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1516,
    "end": 1517
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1517,
    "end": 1518
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1518,
    "end": 1519
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1520,
    "end": 1521
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1521,
    "end": 1522
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1522,
    "end": 1523
  }
]
```
